import React from 'react';

function Nav() {
    return (
      <header>
        <h2>
          <a href="/">
            <span role="img" aria-label="cactus">
            🌵  
            </span>
            Hello World!
          </a>
        </h2>
        <nav className="nav">
          <ul className="flex-row">
          <button type="button" className="btn btn-secondary ">
            <a href="#about"className="text-light">About Me</a></button>
            <button type="button" className="btn btn-secondary">
            <a href="#portfolio"className="text-light">Portfolio</a>
            </button>
            <button type="button" className="btn btn-secondary">
            <a href={`${process.env.PUBLIC_URL}/assets/resume-2021.pdf`}download className="text-light">Resume</a></button>
            
          </ul>
        </nav>
      </header>
    );
  }
  
export default Nav;
  