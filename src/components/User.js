import React from 'react';
import Contact from './Frontend/Contact';
import Home from './Frontend/Home';
import Profile from './Frontend/Profile';
import NotFound from './Frontend/NotFound';
import { Routes, Route } from 'react-router-loading';
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';
import Project from './Frontend/Project';
import About from './Frontend/About';
import Blog from './Frontend/Blog';
import BlogView from './Frontend/BlogView';


function User() {
    return (
        <BrowserRouter >
            <Routes>
                <Route path='*' element={<NotFound />}  />
                <Route exact path="/" element={<Home />}  />
                <Route exact path="/about" element={<About />} />
                <Route path="/project" element={<Project />}  />
                <Route path="/blog" element={<Blog />}  />
                <Route path="/blog/:id" element={<BlogView />}  />
                <Route path="/contact" element={<Contact />}  />
                <Route path="/profile" element={<Profile />}  />
            </Routes>
        </BrowserRouter >
    );

}


export default User;
if (document.getElementById('user')) {
    ReactDOM.render(<User />, document.getElementById('user'));
}
