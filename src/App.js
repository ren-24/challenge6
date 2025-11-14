import './App.css';
import classes from "./Home.module.css";
import { Routes, Route, Link } from 'react-router-dom';
import Inquiry from './components/inquiry';
import Posts from './Posts';
import Page from './Page';

function App() {
  return (
    <>
      <header className={classes.header}>
        <Link to="/">Blog</Link>
        <Link to="/inquiry">お問い合わせ</Link>
      </header>
      <main className={classes.container}>
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/inquiry" element={<Inquiry />} />
          <Route path="/page/:id" element={<Page />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
