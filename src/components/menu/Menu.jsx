import React from "react";
import "./menu.scss";

export default function Menu({menuOpen,setMenuOpen}) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li>
          <a href="#intro" onClick={()=>setMenuOpen(false)}>Home</a>
        </li>
        <li>
          <a href="#about" onClick={()=>setMenuOpen(false)}>About </a>
        </li>
        <li>
          <a href="#portfolio" onClick={()=>setMenuOpen(false)}>Portofolio</a>
        </li>
        
        <li>
          <a href="#contact" onClick={()=>setMenuOpen(false)}>Contact</a>
        </li>
      </ul>
    </div>
  );
}
