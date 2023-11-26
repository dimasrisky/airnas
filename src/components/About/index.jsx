import React from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";

const About = ({ fetchData }) => {
  return (
    <>
      <Navbar navData={fetchData} />
      <main>
        <Content />
      </main>
      <Footer />
    </>
  );
};

export default About;
