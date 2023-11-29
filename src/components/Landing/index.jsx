import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Penyebab from "./components/Penyebab";
import Statistik from "./components/Statistik";
import Overview from "./components/Overview";
import Berita from "./components/Berita";
import Footer from "./components/Footer";

const Landing = ({ fetchData }) => {
  return (
    <>
      <Navbar navData={fetchData} />
      <main className="mx-auto max-w-[1440px]">
        <Hero />
        <Penyebab />
        <Statistik />
        <Overview />
        <Berita />
      </main>
      <Footer />
    </>
  );
};

export default Landing;
