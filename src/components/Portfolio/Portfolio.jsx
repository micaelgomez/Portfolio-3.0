import React from "react";
import "./portfolio.scss";
import PortfolioList from "../PortfolioList/portfolioList";
import { useState, useEffect } from "react";
import PortofolioCard from "../PortfolioCard/PortofolioCard";
import PortfolioCard2 from "../PortfolioCard2/PortfolioCard2";
import { featured, worldClass, semiPro, amateur } from "../../data";
import StarsIcon from '@mui/icons-material/Stars';

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "featured",
      title: "Featured"
    },
    {
      id: "World Class",
      title: "World Class",
    },
    {
      id: "Semi-Pro",
      title: "Semi-Pro",
    },
    {
      id: "Amateur",
      title: " Amateur",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featured);
        break;
      case "World Class":
        setData(worldClass);
        break;
      case "Semi-Pro":
        setData(semiPro);
        break;
      case "Amateur":
        setData(amateur);
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
            intro={d.intro}
          />
        ))}
      </div>
    </div>
  );
}
