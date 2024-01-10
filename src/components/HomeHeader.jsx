import React from "react";
import "../styles/HomeHeader.scss";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

function HomeHeader() {
  return (
    <div className="header">
      <div className="login">
        <Link to="/login" className="btn">
          Zaloguj
        </Link>

        <Link to="/create-account" className="btn">
          Załóż konto
        </Link>
      </div>
      <Navigation />
      <h1>Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce</h1>
      <div className="decoration">---decoration element---</div>
      <Link to="/create-account" className="btn">
        Oddaj rzeczy
      </Link>
      <Link to="/create-account" className="btn">
        Zorganizuj zbiórkę
      </Link>
    </div>
  );
}

export default HomeHeader;
