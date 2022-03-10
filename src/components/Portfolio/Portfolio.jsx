import React from "react";
import "./portfolio.scss";
import PortfolioList from "../PortfolioList/portfolioList";

import { useState } from "react";
import PortofolioCard from "../PortfolioCard/PortofolioCard";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "branding",
      title: "Branding",
    },
  ];

  return (
    <div className="portfolio" id="portfolio">
        <h1>Portfolio</h1>
          <ul>
            {list.map((item) => (
              <PortfolioList
                id={item.id}
                title={item.title}
                active={selected === item.id}
                setSelected={setSelected}
              />
            ))}
          </ul>
      <div className="container">
         <PortofolioCard />
         <PortofolioCard />
         <PortofolioCard />
         <PortofolioCard />
         
      </div>   
    </div>
  );
}
