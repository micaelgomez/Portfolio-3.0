import React from "react";
import "./portfolio.scss";
import PortfolioList from "../PortfolioList/portfolioList";
import { useState, useEffect } from "react";
import PortofolioCard from "../PortfolioCard/PortofolioCard";
import PortfolioCard2 from "../PortfolioCard2/PortfolioCard2";
import { featured, reactPortfolio, reactRedux, responsive } from "../../data";


export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "react",
      title: "React",
    },
    {
      id: "react-redux-node",
      title: "React/Redux & Node.js",
    },
    {
      id: "responsive",
      title: " Css Resposive",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featured);
        break;
      case "react":
        setData(reactPortfolio);
        break;
      case "react-redux-node":
        setData(reactRedux);
        break;
      case "responsive":
        setData(responsive);
        break;
      default:
        setData(featured);
    }
  }, [selected]);

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
        {data.map((d) => (
          <PortfolioCard2
            id={d.id}
            title={d.title}
            img={d.img}
            page={d.page}
            code={d.code}
            stack={d.stack}
          />
        ))}
      </div>
    </div>
  );
}
