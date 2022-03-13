import React from "react";
import "./about.css";
import pdf from ".//CV-Es-MicaelGomez.pdf";

export default function About() {
  return (
    <div class="about " id="about">
      <div class="about-right">
        <h1>
          Hello<span>!</span>
        </h1>
        <h2>Here's who I am & what I do</h2>
        <div class="about-btns">
          <a class="btn btn-white" href={pdf} download>
            {" "}
            Dowload cv
          </a>
          <a class="btn btn-white" href='https://github.com/micaelgomez' target="_blank" rel="noreferrer" >
            {" "}
            Github
          </a>
        </div>

        <div class="about-para">
          <p>Full Stack web Developer with JavaScript and Node.js</p>
          <p>Graduated from <a href="https://www.soyhenry.com" target="_blank" rel="noreferrer" id='henry'> Henry Bootcamp</a> (+800 hours). </p>
          <p>
            I like and i'm excited to learn new technologies, undertake
            activities, work as a team and achieve proposed goals.
          </p>
          <div className="stack">
          <img src="https://img.icons8.com/color/50/000000/html-5--v1.png" alt="im" /> 
            <img src="https://img.icons8.com/color/48/000000/css3.png"alt="im"  />
            <img src="https://img.icons8.com/color/48/000000/javascript--v2.png" alt="im"  />
            <img src="https://img.icons8.com/officel/40/000000/react.png" alt="im" />
            <img src="https://img.icons8.com/color/48/000000/redux.png" alt="im" />
            <img src="https://img.icons8.com/fluency/48/000000/node-js.png" alt="im" />
            <img src="https://img.icons8.com/color/48/000000/postgreesql.png"alt="im"  />
            <img src="https://img.icons8.com/color/48/000000/mongodb.png" alt="im" />
          </div>
        </div>
      </div>
    </div>
  );
}
