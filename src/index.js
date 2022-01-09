import React from 'react';
import ReactDOM from 'react-dom';
import './cs/custom.css'
import './cs/navBar.css'
import './cs/cowin.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header'
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import WebLayout from './components/WebLayout';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import CowinApi from './components/CowinApi';
import CowinFn from './components/CowinFn';
import InvalidError from './components/InvaildError';
import { Register } from './components/Register';

const routing = <>
<div className='container'>
  <div className='row'>
    <div className='col-2'>
      <NavBar></NavBar>
      </div>
      <div className="col-10 navBarCustom">
    <BrowserRouter>
<Routes>
<Route path="/" element={<WebLayout />} />
<Route path="home" element={<WebLayout />} />
<Route path="cowin" element={<CowinApi />} />
<Route path="cowinfn" element={<CowinFn />} />
<Route path="temp" element={<Register />} />
<Route path="*" element={<InvalidError />} />
  
</Routes>
</BrowserRouter>
</div>
    </div>
  
</div>

</>



  


ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
