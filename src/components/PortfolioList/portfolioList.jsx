import React from "react";
import "./portfolioList.scss";

export default function portfolioList({ id, title, active, setSelected }) {
  return (
    <li
      className={active ? "portfolioList active" : "portfolioList"}
      id={id}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}
