import React from "react";
import Intro from "@/components/Intro";
import Timeline from "@/components/Timeline";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

const HomePage = () => {
  return (
    <>
      <Intro />
      <Portfolio />
      <Timeline />
      <Contact />
    </>
  );
};

export default HomePage;
