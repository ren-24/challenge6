import React from "react";
import { posts } from "./data/posts";
import classes from "./Home.module.css";
import { useParams } from "react-router-dom";

export default function Page() {

  const { id } = useParams();
  const elem = posts.find(post => post.id === Number(id));

  if (!elem) {
    return <div>記事が見つかりません</div>;
  }

   return (
    <React.Fragment key={elem.id}>
      <div>
        <img className={classes.img} src={elem.thumbnailUrl} alt={elem.title} />
        <div className={classes.flex}>
          <div className={classes.date}>{elem.createdAt}</div>
          <div>
            {elem.categories.map(category => (
              <span key={category} className={classes.category}>{category}</span>
            ))}
          </div>
        </div>
        <div className={classes.title}>APIで取得した{elem.title}</div>
        <div
          className={classes.content}
          dangerouslySetInnerHTML={{ __html: elem.content }}
        ></div>
      </div>
    </React.Fragment>
  );
}
