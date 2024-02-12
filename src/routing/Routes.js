import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from "../components/Home";
import Blogs from "../components/Blogs";
import About from "../components/About";
import Contact from "../components/Contact";

const RoutesView = () => {
    return (
        <Routes>
            <Route path="/"element={<Home/>}/>
            <Route path="/blogs" element={<Blogs/>}/>
            <Route path="/about"element={<About/>}/>
            <Route path="/contact"element={<Contact/>}/>
        </Routes>
    );
};


export default RoutesView;