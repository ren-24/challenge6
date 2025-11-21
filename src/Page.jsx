import React, { useEffect, useState } from "react";
import classes from "./Home.module.css";
import { useParams } from "react-router-dom";

export default function Page() {

  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetcher = async () => {
      const res = await fetch(`https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts/${id}`)
      const { post } = await res.json();
      setPost(post);
      setIsLoading(false);
    }

    fetcher()
  }, [id]);

  if (isLoading) {
    return <div>読み込み中...</div>;
  }

  if (!isLoading && !post) {
    return <div>記事が見つかりません</div>;
  }

  return (
    <React.Fragment key={post.id}>
      <div>
        <img className={classes.img} src={post.thumbnailUrl} alt="" />
        <div className={classes.flex}>
          <div className={classes.date}>{post.createdAt}</div>
          <div>
            {post.categories.map(category => (
              <span key={category} className={classes.category}>{category}</span>
            ))}
          </div>
        </div>
        <div className={classes.title}>{post.title}</div>
        <div
          className={classes.content}
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></div>
      </div>
    </React.Fragment>
  );
}
