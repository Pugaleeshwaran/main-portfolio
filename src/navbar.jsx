import { useState } from "react";
import Mobilenav from "./mobile-nav";

const Navbar = () => {
var [open,setopen]=useState(false)

const handlemenu=()=>{
    setopen(!open)
}
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <h3>Pugaleeshwaran R</h3>
        </div>

        <div className="navbar-right">
          <a href="#">Home</a>
          <a href="#">About Me</a>
          <a href="#">My Work</a>
          <a href="#">Resume</a>
          <a href="#">Contact</a>
        </div>
      </div>

      <div className="mobilenav-container">
        <i className="fa-solid fa-bars" onClick={handlemenu}></i>
        <Mobilenav style={{transform:open?"translateY(0)":"translateY(-200%)",transition: "transform 1s ease-in-out"}}/>
      </div>
    </nav>
  );
};

export default Navbar;
