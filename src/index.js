import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Link, Routes, Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Header from './containers/header';
import Main from './containers/main';
import Footer from './containers/footer';
import Navbar from './containers/navbar';
// import Page2Header from './containers/page2header'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Header />
    <Main />
    <Footer />
    {/* <Page2Header /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
