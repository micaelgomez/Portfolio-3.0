import React from "react";
import "./menu.scss";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import CollectionsIcon from '@mui/icons-material/Collections';

export default function Menu({menuOpen,setMenuOpen}) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li >
          <HomeIcon className="icon" />
          <a href="#intro" onClick={()=>setMenuOpen(false)}>Home</a>
        </li>
        <li>
          <PersonIcon className="icon"/>
          <a href="#about"  onClick={()=>setMenuOpen(false)}>About </a>
        </li>
        <li>
          <CollectionsIcon className="icon"/>
          <a href="#portfolio" onClick={()=>setMenuOpen(false)}>Portfolio</a>
        </li>
        
        <li>
          <ContactPhoneIcon className="icon"/>
          <a href="#contact" onClick={()=>setMenuOpen(false)}>Contact</a>
        </li>
      </ul>
    </div>
  );
}
