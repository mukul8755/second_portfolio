import React, { useEffect, useState } from 'react';
import Contact from './Frontend/Contact';
import Home from './Frontend/Home';
import Profile from './Frontend/Profile';
import NotFound from './Frontend/NotFound';
import { Routes, Route } from "react-router-loading";
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';
import Project from './Frontend/Project';


function User() {
    return (
        <BrowserRouter >
            <Routes>
                <Route path='*' element={<NotFound />} loading />
                <Route exact path="/" element={<Home />} loading />
                <Route path="/project" element={<Project />} loading />
                <Route path="/contact" element={<Contact />} loading />
                <Route path="/profile" element={<Profile />} loading />
            </Routes>
        </BrowserRouter >
    );

}


export default User;
if (document.getElementById('user')) {
    ReactDOM.render(<User />, document.getElementById('user'));
}
