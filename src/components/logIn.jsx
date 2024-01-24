import React from "react";
import "../styles/Login.scss";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

function LogIn() {
  return (
    <>
      <Navigation />
      <div className="login">
        <h1 login-title>Zaloguj się</h1>
        <div className="decoration"></div>
        <form action="" className="login-user">
          <label htmlFor="email">
            {" "}
            Email <br />
            <input className="input-login" type="text" id="email" />
          </label>
          <label htmlFor="password">
            {" "}
            Password <br />
            <input className="input-login" type="text" id="password" />
          </label>
        </form>
        <div className="login-or-register">
          <Link to="/login" className="link-btn">
            Zaloguj
          </Link>
          <Link to="/create-account" className="link-btn">
            Załóż konto
          </Link>
        </div>
      </div>
    </>
  );
}

export default LogIn;
