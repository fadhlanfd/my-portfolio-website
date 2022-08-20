/* eslint-disable jsx-a11y/anchor-has-content */
import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  webPortfolio,
} from "../../data";


export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

    useEffect(() => {

      switch(selected){
        case "webDev":
        setData(webPortfolio);
        break;
        default:
          setData(webPortfolio);
      }
    },[selected])


    return (
      <div className="portfolio" id="portfolio">
        <h1>Portfolio</h1>
        <ul>
          {((item) => (
            <PortfolioList
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
            />
          ))}
        </ul>
        <div className="container">
          {data.map((d) => (
            <div className="item">
              <a href={d.href} ><img
                src={d.img}
                alt=""
              /><h3>{d.title}</h3></a>
            </div>
          ))}
        </div>
      </div>
  );
}
