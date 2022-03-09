import React from "react";
import "./about.css";
import pdf from ".//CV-Us-MicaelGomez.pdf";

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
          <a class="btn btn-white" href='https://github.com/micaelgomez' target="_blank" >
            {" "}
            Github
          </a>
        </div>

        <div class="about-para">
          <p>Full Stack web Developer with JavaScript and Node.js</p>
          <p>Graduated from <a href="https://www.soyhenry.com" target="_blank" class= "henry"> Henry Bootcamp</a> (+800 hours). </p>
          <p>
            I like and am excited to learn new technologies, undertake
            activities, work as a team, achieve proposed goals and maintain an
            excellent work environment.
          </p>
        </div>
      </div>
    </div>
  );
}
