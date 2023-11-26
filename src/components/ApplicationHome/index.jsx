import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const ApplicationHome = ({ fetchData }) => {
  return (
    <main className="min-h-screen">
      <Navbar navData={fetchData} />
      <Hero />
    </main>
  );
};

export default ApplicationHome;
