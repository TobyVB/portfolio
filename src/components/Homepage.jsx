import { useEffect, useState, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import {
  UilGithub,
  UilTwitter,
  UilLinkedin,
  UilFacebook,
} from "@iconscout/react-unicons";

export default function Homepage() {
  const scrollBody = useRef();
  const [background, setBackground] = useState("homepage-bg");
  const [added, setAdded] = useState(false);
  const [textClass, setTextClass] = useState("textstarter");
  useEffect(() => {
    const interval = setInterval(() => {
      const texts = document.querySelector(".homepage-introduction");
      const textsLoc = texts.getBoundingClientRect().top;
      const scrollLoc = scrollBody.current.scrollTop - 150;
      console.log("scroll " + scrollLoc + " text: " + textsLoc);
      if (textsLoc > scrollLoc + 700) {
        if (added) {
          setTextClass("textLeave");
          setBackground("homepage-bg");
          setAdded(false);
        }
      } else if (textsLoc < scrollLoc + 700 && scrollLoc - textsLoc < 1000) {
        if (!added) {
          setTextClass("textEnter");
          setBackground("homepage-bg-after");
          setAdded(true);
        }
      }
    }, 250);
    return () => clearInterval(interval);
  }, []);
  // ############################################################
  function Introduction() {
    return (
      <div
        style={{
          overflow: "hidden",
        }}
      >
        <div
          style={{ margin: "0 auto" }}
          className={`homepage-introduction ${textClass}`}
        >
          <p>
            I fell in love with programming and I have at least learnt
            something, I think… 🤷‍♂️
          </p>
          <p>I am fluent in classics like C++, Javascript and Python.</p>
          <p>
            My field of Interest's are building new Web Technologies and
            Products and also in areas related to Deep Learning and Natural
            Launguage Processing.
          </p>
          <p>
            Whenever possible, I also apply my passion for developing products
            with Node.js and Modern Javascript Library and Frameworks like
            React.js and Next.js
          </p>
        </div>
      </div>
    );
  }
  function TypeText() {
    return (
      <h3>
        <TypeAnimation
          sequence={[
            "Developer",
            1000, // Waits 1s
            "Freelancer",
            1000, // Waits 1s
            "Videogame Maker",
            1000, // Waits 1s
            "Enthusiast", //
            1000, // Waits 1s
            "Digital Artist",
            1000, // Waits 1s
            // () => {
            //   console.log("Done typing!"); // Place optional callbacks anywhere in the array
            // },
          ]}
          wrapper="div"
          cursor={false}
          repeat={Infinity}
          style={{ fontSize: "2rem", color: "orangered", fontWeight: "400" }}
          speed="10"
        />
      </h3>
    );
  }
  return (
    <div ref={scrollBody}>
      <div
        className={background}
        style={{
          opacity: "25%",
          backgroundPosition: "center",
          backgroundImage: "url(../../canyon.avif)",
          display: "block",
          position: "fixed",
          height: "100vh",
          width: "100vw",
          zIndex: "-1",
        }}
      ></div>
      {/* ######################################################### */}
      <div style={{ padding: "10em 0 5em 0" }}>
        <div className="section">
          <div style={{ margin: "0 1em", textAlign: "left" }}>
            <h2 className="homepage-jumbo-text" style={{ lineHeight: "0" }}>
              Hello! 👋
            </h2>
            <h2 className="homepage-jumbo-text" style={{ marginBottom: "2em" }}>
              I'M{" "}
              <span className="clr-1" style={{ fontWeight: "600" }}>
                TOBY VANBAAST
              </span>
            </h2>
            <TypeText />
          </div>
          <div
            className="homepage-pic2 breathing"
            style={{
              backgroundImage: "url(../../Online-world-amico.png)",
              height: "350px",
              width: "350px",
              backgroundSize: "100%",
            }}
          ></div>
        </div>
        <h2>LET ME INTRODUCE MYSELF</h2>
        <div className="section2">
          <Introduction />

          <div
            style={{
              marginTop: "3em",

              borderRadius: "100%",
              height: "250px",
              width: "250px",
              // border: "2px dotted red"
              background: "rgba(255, 69, 0, .5)",
              // border: "1px solid orangered",
            }}
            className="homepage-pic1"
          >
            <div
              className="portfolioAnim"
              style={{
                borderRadius: "100%",
                height: "250px",
                width: "250px",
                border: "5px dashed orangered",
                marginLeft: "-5.5px",
                marginTop: "-5px",
              }}
            ></div>
            <div
              style={{
                marginTop: "-250px",
                borderRadius: "100%",
                height: "246px",
                width: "246px",
                backgroundImage: "url(../../Tobyvb1-no-bg.png)",
                backgroundPosition: "center",
                backgroundSize: "100%",
              }}
            ></div>
            {/* image */}
          </div>
        </div>
        <div>
          <h2 style={{ marginBottom: "0" }}>FIND ME ON</h2>
          <p style={{ margin: "0 auto 3em auto" }}>
            Feel free to <span className="clr-1">connect</span> with me
          </p>
          <div className="homepage-icons">
            <div className="icon-bg">
              <UilGithub size="30" color="orangered" />
            </div>
            <div className="icon-bg">
              <UilTwitter size="30" color="orangered" />
            </div>
            <div className="icon-bg">
              <UilLinkedin size="30" color="orangered" />
            </div>
            <div className="icon-bg">
              <UilFacebook size="30" color="orangered" />
            </div>
          </div>
        </div>
        {/* ######################################################### */}
      </div>
    </div>
  );
}
