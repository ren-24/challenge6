import { posts } from "./data/posts";
import classes from "./Home.module.css";
import React from "react";
import { useParams } from "react-router-dom";

export default function Page() {

  const { id } = useParams();
  const elem = posts.find(post => post.id === Number(id));

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
