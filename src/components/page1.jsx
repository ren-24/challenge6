import { posts } from "../data/posts";
import classes from "../Home.module.css";
import React from "react";

export default function Page1() {

  const elem = posts.find(p => p.id === 1);

  return (
    <React.Fragment key={elem.id}>
      <li>
        <img className={classes.img} src={elem.thumbnailUrl} alt={elem.title} />
        <div className={classes.flex}>
          <div className={classes.date}>{elem.createdAt}</div>
          <div>
            {elem.categories.map(category => (
              <span key={category} className={classes.category}>{category}</span>
            ))}
          </div>
        </div>
        <p className={classes.title}>APIで取得した{elem.title}</p>
        <p
          className={classes.content}
          dangerouslySetInnerHTML={{ __html: elem.content }}
        ></p>
      </li>
    </React.Fragment>
  );
}
