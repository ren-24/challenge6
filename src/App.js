import './App.css';
import { posts } from './data/posts'
import classes from "./Home.module.css";
import React from 'react';

function App() {
  return (
    <>
    <header className={classes.header}>
      <p>Blog</p>
      <p>お問い合わせ</p>
    </header>
    <main className={classes.container}>
            {posts.map(elem => (
              <React.Fragment key={elem.id}>
                        <div>
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
                              <p className={classes.content}dangerouslySetInnerHTML={{__html: elem.content}}></p>
                            </li>
                        </div>
                </React.Fragment>
                ))}
        </main>
        </>
    );  
}

export default App;
