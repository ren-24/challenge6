import './App.css';
import { posts } from './data/posts'
import classes from "./Home.module.css";
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Inquiry from './components/inquiry';
import Page1 from './components/page1';
import Page2 from './components/page2'; 
import Page3 from './components/page3';

function App() {
  return (
    <>
      <header className={classes.header}>
        <Link to="/">Blog</Link>
        <Link to="/inquiry">お問い合わせ</Link>
      </header>

      <main className={classes.container}>
        <Routes>
          <Route 
            path="/" 
            element={
              <ul>
                {posts.map(elem => (
                <React.Fragment key={elem.id}>
                  <Link to={`/page/${elem.id}`}>
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
                  <p className={classes.content} dangerouslySetInnerHTML={{__html: elem.content}}></p>
                </li>
            </Link>
          </React.Fragment>
       ))}
       </ul>
            }
            />
        <Route path="/inquiry" element={<Inquiry />} />

        <Route path="/page/1" element={<Page1 />} />
        <Route path="/page/2" element={<Page2 />} />
        <Route path="/page/3" element={<Page3 />} />
      </Routes>
    </main>
    </>
  );  
}

export default App;
