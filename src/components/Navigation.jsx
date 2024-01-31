import React from "react";
import "../styles/Navigation.scss";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

function Navigation() {
  return (
    <>
      <nav className="nav">
        <ul>
          {/* return to main page as RouterLink */}
          <RouterLink className="nav-link home-link" to={"/"}>
            HOME
          </RouterLink>
          {/* scroll links::: */}
          <Link
            className="nav-link"
            to="statistics"
            smooth={true}
            duration={500}
          >
            O co chodzi?
          </Link>
          <Link
            className="nav-link"
            to="about-section"
            smooth={true}
            duration={500}
          >
            O nas
          </Link>
          <Link
            className="nav-link"
            to="organizations"
            smooth={true}
            duration={500}
          >
            Fundacja i organizacje
          </Link>
          <Link
            className="nav-link"
            to="contact-form"
            smooth={true}
            duration={500}
          >
            Kontakt
          </Link>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
