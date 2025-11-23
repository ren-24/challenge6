import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "./Home.module.css";

function Posts() {

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetcher = async () => {
      const res = await fetch("https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts")
      const data = await res.json();
      setPosts(data.posts)
      setIsLoading(false);
    }

    fetcher();
  }, []);

  if (isLoading) {
    return <div>読み込み中...</div>;
  }

  return (
    <div className={classes.container}>
      {posts.map(elem => (
        <React.Fragment key={elem.id}>
          <Link to={`/posts/${elem.id}`}>
            <div className={classes.box}>
              <div className={classes.flex}>
                <div className={classes.date}>{elem.createdAt}</div>
                <div>
                  {elem.categories.map(category => (
                    <span key={category} className={classes.category}>{category}</span>
                  ))}
                </div>
              </div>
              <p className={classes.title}>{elem.title}</p>
              <p className={classes.content} dangerouslySetInnerHTML={{ __html: elem.content }}></p>
            </div>
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Posts;