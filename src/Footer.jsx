import React from "react";
import {
  UilGithub,
  UilTwitter,
  UilLinkedin,
  UilFacebook,
} from "@iconscout/react-unicons";
const Footer = () => {
  return (
    <div
      style={{
        position: "relative",
        bottom: "0",
        // left: "0",
        width: "100%",
        zIndex: "1",
      }}
    >
      <div
        className="footer-inner-container"
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <p style={{ margin: "1em auto" }}>created by Toby Van Baast</p>
        <p style={{ margin: "1em auto" }}>Copyright &copy;2023 TobyVB</p>
        <div style={{ display: "flex", margin: "1em auto 1.5em auto" }}>
          <div style={{ margin: "0 1em" }}>
            <UilGithub size="20" color="white" />
          </div>{" "}
          <div style={{ margin: "0 1em" }}>
            <UilTwitter size="20" color="white" />
          </div>{" "}
          <div style={{ margin: "0 1em" }}>
            <UilLinkedin size="20" color="white" />
          </div>
          <div style={{ margin: "0 1em" }}>
            <UilFacebook size="20" color="white" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
