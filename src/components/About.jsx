import React from "react";
import "../styles/About.scss";
function About() {
  return (
    <>
      <div className="about-section" id="about-section">
        <div className="about">
          <h2>O nas</h2>
          <div className="decoration">----dekoracja tu----</div>
          <p className="about-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            voluptate officiis neque.
          </p>
          <div className="signature">---tu img podpisu---</div>
        </div>
        <div className="about-img">---obrazek about---</div>
      </div>
    </>
  );
}

export default About;
