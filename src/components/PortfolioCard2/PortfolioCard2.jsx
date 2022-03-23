import React from "react";
import "./portfolioCard2.scss";
import IosShareIcon from "@mui/icons-material/IosShare";
import GitHubIcon from "@mui/icons-material/GitHub";
import Fade from "react-reveal/Fade";

function PortfolioCard2({ id, title, img, page, code, stack,intro }) {
  return (
    <Fade left>
    <div id={id} className="portfolio-card">
      <div className="portfolio-card-left">
        <h3>{title}</h3>
        <p>
          {intro} 
        </p>
        <div className="portfolio-card-left-stack">
          {stack.map((s) => {
            return <li>{s.title}</li>;
          })}
        </div>
        <div className="portfolio-card-left-links">
          <a href={code} target="_blank" rel="noreferrer" className="btn-code">
            <GitHubIcon />
          </a>
          <a href={page} target="_blank" rel="noreferrer" className="btn-link">
            <IosShareIcon />
          </a>
        </div>
      </div>

      <span className="card-right">
        <img src={img} alt="foto" class="image-full"></img>
      </span>
    </div>
    </Fade>
  );
}

export default PortfolioCard2;
