import { useEffect, useState, useRef } from "react";
import GitHubCalendar from "react-github-calendar";

export default function About() {
  const scrollBody = useRef();
  const contentRef = useRef();
  const [background, setBackground] = useState("bg-before");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //   const selectLastHalfYear = (contributions) => {
  //     const currentYear = new Date().getFullYear();
  //     const currentMonth = new Date().getMonth();
  //     const shownMonths = 6;

  //     return contributions.filter((day) => {
  //       const date = new Date(day.date);
  //       const monthOfDay = date.getMonth();

  //       return (
  //         date.getFullYear() === currentYear &&
  //         monthOfDay > currentMonth - shownMonths &&
  //         monthOfDay <= currentMonth
  //       );
  //     });
  //   };

  // skills data
  const [animateClass, setAnimateClass] = useState("");
  let added = false;
  useEffect(() => {
    const interval = setInterval(() => {
      const skills = document.querySelector(".about-items-container");
      const skillsLoc = skills.getBoundingClientRect().top;
      const scrollLoc = scrollBody.current.scrollTop - 150;
      console.log("scroll " + scrollLoc + " text: " + skillsLoc);
      if (skillsLoc > scrollLoc + 700) {
        if (added) {
          added = false;
          setAnimateClass("");
          setBackground("homepage-bg-after");
        }
      } else if (skillsLoc < scrollLoc + 700 && scrollLoc - skillsLoc < 1000) {
        if (!added) {
          added = true;
          setAnimateClass("animateSkill");
          setBackground("homepage-bg");
        }
      }
    }, 250);
    return () => clearInterval(interval);
  }, []);

  const skillData = [
    { name: "url(../../javascript.svg)", size: "50%", delay: ".15s" },
    { name: "url(../../nodejs-icon.svg)", size: "45%", delay: ".30s" },
    { name: "url(../../react.svg)", size: "50%", delay: ".45s" },
    { name: "url(../../mongodb-icon.svg)", size: "25%", delay: ".6s" },
    { name: "url(../../nextjs-icon.svg)", size: "50%", delay: ".75s" },
    { name: "url(../../git-icon.svg)", size: "50%", delay: ".9s" },
    { name: "url(../../firebase.svg)", size: "30%", delay: "1.05s" },
    { name: "url(../../jquery.svg)", size: "60%", delay: "1.2s" },
  ];

  const toolData = [
    {
      name: "url(../../visual-studio-code.svg)",
      size: "50%",
      delay: "2.5s",
    },
    {
      name: "url(../../postman-icon.svg)",
      size: "50%",
      delay: "2.65s",
    },
    {
      name: "url(../../heroku-icon.svg)",
      size: "50%",
      delay: "2.8s",
    },
    {
      name: "url(../../vercel.svg)",
      size: "65%",
      delay: "2.95s",
    },
  ];

  function Skills() {
    return skillData.map((skill) => {
      return (
        <div className={`about-item-container`}>
          <div
            className={`about-item ${animateClass}`}
            style={{
              borderRadius: "5px",
              backgroundImage: `${skill.name}`,
              backgroundPosition: "center",
              backgroundSize: `${skill.size}`,
              backgroundRepeat: "no-repeat",
              animationDelay: `${skill.delay}`,
            }}
          ></div>
        </div>
      );
    });
  }

  function Tools() {
    return toolData.map((tool) => {
      return (
        <div className="about-item-container">
          <div
            className={`about-item ${animateClass}`}
            style={{
              borderRadius: "5px",
              backgroundImage: `${tool.name}`,
              backgroundPosition: "center",
              backgroundSize: `${tool.size}`,
              backgroundRepeat: "no-repeat",
              animationDelay: `${tool.delay}`,
            }}
          ></div>
        </div>
      );
    });
  }

  return (
    <div ref={scrollBody}>
      <div
        className={background}
        style={{
          opacity: "15%",
          backgroundPosition: "center",
          backgroundImage: "url(../../canyon3.avif)",
          display: "block",
          position: "fixed",
          height: "100vh",
          width: "100vw",
          zIndex: "-1",
        }}
      ></div>
      <div ref={contentRef}>
        <div style={{ padding: "10em 0 5em 0" }}>
          <div className="section">
            <div
              style={{
                maxWidth: "500px",
                fontSize: "1.25rem",
                textAlign: "left",
                margin: "0 auto",
                width: "90%",
              }}
            >
              <h2 style={{ textAlign: "center" }}>Who am I?</h2>
              <p>
                Hi Everyone, I am <span className="clr-1">Toby Van Baast</span>{" "}
                from <span className="clr-1">Austin, Texas</span>.
              </p>
              <p>
                I am a junior pursuing IMSC in Maths and Computing in BIT Mesra.
              </p>
              <p style={{ paddingTop: "1em" }}>
                Apart from coding, some other activities that I love to do!
              </p>
              <ul>
                <li>Playing Games</li>
                <li>Writing Tech Blogs</li>
                <li>Travelling</li>
              </ul>
            </div>
            <div
              style={{
                backgroundImage: "url(../../Innovation-rafiki.png)",
                height: "400px",
                width: "400px",
                backgroundSize: "100%",
                margin: "0 auto",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div style={{ margin: "0 auto" }}>
            <h2 className="item-container-title">
              Professional <span className="clr-1">Skillset</span>
            </h2>
            <div className="about-items-container">
              <Skills />
            </div>
          </div>
          <div>
            <h2 className="item-container-title">
              <span className="clr-1">Tools</span> I use
            </h2>
            <div className="about-items-container">
              <Tools />
            </div>
          </div>
          <div style={{ width: "80%", margin: "0 auto", overflow: "scroll" }}>
            <h2>Git Activity</h2>
            <GitHubCalendar
              username="TobyVB"
              color="orangered"
              style={{ margin: "0 auto" }}
              //   transformData={selectLastHalfYear}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
