import "./works.scss";
import { useState } from "react";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/progate.png",
      title: "Progate Certified Web Development",
      desc:
        "Bootcamp through the Progate platform in collaboration with Digital Talent Scholarship, learning many web programming languages ​​such as HTML, CSS, Javascript and Node.js.",
      img:
        "./assets/progatecer.jpg",
      href:"https://fadhlanfd.github.io/A24/",
    },
    {
      id: "2",
      icon: "./assets/udemy2.png",
      title: "Udemy Web Development Bootcamp",
      desc:
        "Become a Full-Stack Web Developer with just one course. HTML, CSS, Javascript, Node, React, MongoDB, Web3 and DApps.",
      img:
        "./assets/udemycer.jpg",
      href:"https://mefgs-laaaa-aaaam-aapoa-cai.ic0.app/",
    },
    {
      id: "3",
      icon: "./assets/digital.png",
      title: "Digital Talent Scholarship Front-End Developer",
      desc:
        "Bootcamp organized by the government and also the Digital Talent Scholarship platform for 1 month, focusing on learning basic web programming such as HTML, CSS, and Javascript.",
      img:
      "./assets/dts.jpg",
      href:"https://fadhlanfd.github.io/calculator/",
    },
  ];

    const handleClick = (way) => {
      way === "left"
        ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
        : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    };
    return (
      <div className="works" id="works">
        <div
          className="slider"
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
        >
          {data.map((d) => (
            <div className="container">
              <div className="item">
                <div className="left">
                  <div className="leftContainer">
                    <div className="imgContainer">
                      <img src={d.icon} alt="" />
                    </div>
                    <h2>{d.title}</h2>
                    <p>{d.desc}</p>
                    <a href={d.href}
                      class="btn"><span>Project</span></a>
                  </div>
                </div>
                <div className="right">
                  <img
                    src={d.img}
                    alt=""
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <img
          src="assets/arrow.png"
          className="arrow left"
          alt=""
          onClick={() => handleClick("left")}
        />
        <img
          src="assets/arrow.png"
          className="arrow right"
          alt=""
          onClick={() => handleClick()}
        />
      </div>
    );
  }
