import React from "react";
import HomeHeader from "./HomeHeader";
import Intro from "./Intro";
import StepsInfo from "./StepsInfo";
import About from "./About";
import Organizations from "./Organizations";
import ContactForm from "./ContactForm";

function Home() {
  return (
    <div>
      <HomeHeader />
      <Intro />
      <StepsInfo />
      <About />
      <Organizations />
      <ContactForm />
    </div>
  );
}

export default Home;
