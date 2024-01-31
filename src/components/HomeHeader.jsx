import React from "react";
import "../styles/HomeHeader.scss";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

function HomeHeader() {
  return (
    <div className="header">
      <div className="header-img"></div>
      <div className="header-content">
        <div className="login-header">
          <Link to="/login" className="link-btn-login">
            Zaloguj
          </Link>
          <Link to="/create-account" className="link-btn-login">
            Załóż konto
          </Link>
        </div>
        <Navigation />
        <div className="hedear-info">
          <h1 className="header-title-1">Zacznij pomagać!</h1>
          <h1 className="header-title-2">
            Oddaj niechciane rzeczy w zaufane ręce
          </h1>
          <br />
          <div className="decoration"></div>
          <br />
          <div className="bottom-links">
            <Link to="/login" className="link-btn bottom-link">
              ODDAJ <br /> RZECZY
            </Link>
            <Link to="/login" className="link-btn bottom-link">
              ZORGANIZUJ <br />
              ZBIÓRKĘ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeHeader;
