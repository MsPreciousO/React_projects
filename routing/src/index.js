import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import './index.css';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import 'tw-elements';
import PageNotFound from './pages/PageNotFound';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path = '/' element ={<App /> }>
      <Route index element = {<Home />} />
      <Route path = 'about' element = {<About />} />
      <Route path = 'contacts' element = {<Contact />} />
      <Route path = 'projects' element = {<Projects />} />
      <Route path ='*' element ={<PageNotFound />} />
    </Route>
  </Routes>
  </BrowserRouter>
  
);
