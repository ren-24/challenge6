import React from "react";
import { Link } from "react-router-dom";
import classes from "./Home.module.css";
import { posts } from "./data/posts";

function Posts() {
  return (
    <div className={classes.container}>
      {posts.map(elem => (
        <React.Fragment key={elem.id}>
          <Link to={`/posts/${elem.id}`}>
            <li className={classes.box}>
              <div className={classes.flex}>
                <div className={classes.date}>{elem.createdAt}</div>
                <div>
                  {elem.categories.map(category => (
                    <span key={category} className={classes.category}>{category}</span>
                  ))}
                </div>
              </div>
              <p className={classes.title}>APIで取得した{elem.title}</p>
              <p className={classes.content} dangerouslySetInnerHTML={{ __html: elem.content }}></p>
            </li>
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Posts;