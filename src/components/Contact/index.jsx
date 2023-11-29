import React from "react";
import Navbar from "./components/Navbar";
import Forms from "./components/Forms";
import Footer from "./components/Footer";

const Contact = ({ fetchData }) => {
  return (
    <>
      <Navbar navData={fetchData} />
      <main>
        <Forms />
      </main>
      <Footer />
    </>
  );
};

export default Contact;
