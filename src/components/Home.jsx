import React from "react";
import HomeHeader from "./HomeHeader";
import Statistics from "./Statistics";
import StepsInfo from "./StepsInfo";
import About from "./About";
import Organizations from "./Organizations";
import ContactForm from "./ContactForm";

function Home() {
  return (
    <div>
      <HomeHeader />
      <Statistics />
      <StepsInfo />
      <About />
      <Organizations />
      <ContactForm />
    </div>
  );
}

export default Home;
