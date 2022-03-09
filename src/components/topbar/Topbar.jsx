import React from "react";
import "./topbar.scss";
import Person from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Topbar({menuOpen,setMenuOpen}) {

  return (
    <div className= {"topbar " + (menuOpen && "active")}>
      <div className="wrapper">

        <div className="left">
          <a href="#intro" className="logo">
            Micael.
          </a>

          <div className="itemContainer">
            <LinkedInIcon className="icon" />
            <a  href="https://www.linkedin.com/in/micael-alessandro-gomez-fullstack/" target="_blank">LinkedIn</a>
          </div>

          <div className="itemContainer">
            <MailIcon className="icon" />
            <a
            className="mx-2"
            target="_blank"
            href="https://mail.google.com/mail/?view=cm&source=mailto&to=mickii.gomez.mg@gmail.com"
          >
            Email
          </a>
          </div>

        </div>

        <div className="right">
          <div className="hamburgher" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>

      </div>
    </div>
  );
}
