import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Principal from './components/Principal';
import Login from './components/Login';
import Puzzle from './components/Puzzle';
import LoveU from './components/LoveU';
import Hanged from './components/Hanged';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Link to="/"></Link>
    <Link to="/login"></Link>
    <Link to="/puzzle"></Link>
    <Link to="/loveu"></Link>
    <Link to="/hanged"></Link>
      <Routes>
        <Route exact path="/" element={<Principal/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/puzzle" element={<Puzzle/>}/>
        <Route exact path="/loveu" element={<LoveU/>}/>
        <Route exact path="/hanged" element={<Hanged/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();