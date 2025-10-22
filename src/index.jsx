import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import Allproject from './components/allproject';
import Projectlist from './components/projectlist';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<App/>}></Route>
        <Route path='/projectlist' element={<Projectlist/>}></Route>
    </Routes>
    </BrowserRouter>


)
