import React from "react";
import "../styles/HomeHeader.scss";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";

function HomeHeader() {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/create-account");
  };
  return (
    <div className="header">
      <div className="login">
        <button className="btn" onClick={handleClick}>
          Zaloguj
        </button>
        <button className="btn">Załóż konto</button>
      </div>
      <Navigation />
      <h1>Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce</h1>
      <div className="decoration">---decoration element---</div>
      <button className="btn">Oddaj rzeczy</button>
      <button className="btn">Zorganizuj zbiórkę</button>
    </div>
  );
}

export default HomeHeader;
