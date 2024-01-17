import React from "react";
import "../styles/StepsInfo.scss";
import { Link } from "react-router-dom";
function StepsInfo() {
  return (
    <>
      <div className="steps-info" id="steps-info">
        <h1>Wystarczą 4 proste kroki</h1>
        <div className="decoration"></div>
        <div className="steps">
          <div className="step">
            <div className="step-icon-1"></div>
            <h4 className="step-title">Wybierz rzeczy</h4>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="step">
            <div className="step-icon-2"></div>
            <h4 className="step-title">Spakuj je</h4>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="step">
            <div className="step-icon-3"></div>
            <h4 className="step-title">
              Zdecyduj komu <br />
              chcesz pomóc
            </h4>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="step">
            <div className="step-icon-4"></div>
            <h4 className="step-title">Zamów kuriera</h4>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <Link to="/login" className="link-btn donate-link">
          ODDAJ <br />
          RZECZY
        </Link>
      </div>
    </>
  );
}

export default StepsInfo;
