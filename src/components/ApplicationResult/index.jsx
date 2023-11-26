import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const ApplicationResult = ({ fetchData }) => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero detailsData={fetchData} />
    </main>
  );
};

export default ApplicationResult;
