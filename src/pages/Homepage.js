import React from 'react';
import Nav from "../components/Nav";
import About from '../components/About'
import ProjectContainer from '../components/ProjectContainer';
import Footer from '../components/Footer'

export default function Homepage() {
    return (
        <div className="container">
            <Nav></Nav>
            <h1>Welcome to my portfolio!</h1>
            <About />
            <ProjectContainer />
            <Footer/>
        </div>
    )
}
