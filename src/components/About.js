import React from 'react'
// import ReactDOM from 'react-dom';
 import coverImage from "../assets/cover/cover-image.jpg";
 

function About() {

  return (
    <section className="my-5" id="about">
     
      <h1 id="about">About Me</h1>
      <img src={coverImage} className="my-2" style={{ width: "40%" }} alt="cover" /> 
      <div className="my-2">
        <p>
        I'm a projecct coordinator at HCA, where I work for web development teams who run operations for our IT and software development for hospitals. After completing a full-stack bootcamp course at Vanderbilt, I'm looking to transition into a full-time web development role.

        When I'm not in front of a screen, you might find me cooking, making artwotk, taking photos or spending time with friends and family.
      </p>
      </div>
    </section>
  )
}

export default About;