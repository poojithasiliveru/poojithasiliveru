import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Components/navbar';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Register from './Components/Register';
import Home from './Components/home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div>
 <Router>
   
      <Navbar/>
      <h1>Welcome</h1>
      <Home/>
         
   <Routes>
      <Route path="/about" element={<h1>About</h1>}/>
      <Route path="/register" element={<Register/>}/>
   </Routes>
 </Router>
</div>
);