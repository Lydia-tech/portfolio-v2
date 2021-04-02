// import ReactDOM from 'react-dom';
import React from "react";
import Nav from "../Nav";

function Header(props) {
  const { sectionSelected, setSectionSelected } = props;

  return (
    <header className="header-box">
      <h1>
        <a href="/">Lydia Kennedy</a>
      </h1>
      <Nav sectionSelected={sectionSelected} 
      setSectionSelected={setSectionSelected}/>
    </header>
  );
}

export default Header;

// export default Header;