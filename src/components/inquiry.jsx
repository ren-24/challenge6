import React, { useState } from "react";
import "./inquiry.css";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }))
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!form.name) newErrors.name = "お名前は必須です。";
    else if (form.name.length > 30) newErrors.name = "お名前は30文字以内で入力してください。";

    if (!form.email) newErrors.email = "メールアドレスは必須です。";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "メールアドレスの形式が正しくありません。";

    if (!form.message) newErrors.message = "本文は必須です。";
    else if (form.message.length > 500) newErrors.message = "本文は500文字以内で入力してください。";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setIsSubmitting(false);
      return;
    }
    setIsSubmitting(true);

    try {
      const res = await fetch(
        "https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/contacts",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );
      const data = await res.json();
      alert("送信しました。", data);

      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      alert("送信に失敗しました。");
    } finally {
      setIsSubmitting(false);
    }
  }

return (
  <div>
    <h1 className="title">問合わせフォーム</h1>

    {errors.name && <p className="errorMessage">{errors.name}</p>}
    <div className="name">お名前
      <input
        className="name_box"
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        disabled={isSubmitting}
      />
    </div>

    {errors.email && <p className="errorMessage">{errors.email}</p>}
    <div className="email">メールアドレス
      <input
        className="email_box"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        disabled={isSubmitting}
      />
    </div>

    {errors.message && <p className="errorMessage">{errors.message}</p>}
    <div className="message">本文
      <textarea
        className="message_box"
        name="message"
        value={form.message}
        onChange={handleChange}
        disabled={isSubmitting}
      />
    </div>

    <div className="buttons">
      <button className="submit" type="submit" onClick={handleSubmit} disabled={isSubmitting}>送信</button>
      <button className="clear" type="button" onClick={() => setForm({ name: "", email: "", message: "" })} disabled={isSubmitting}>クリア</button>
    </div>
  </div>
);
}
export default Form;