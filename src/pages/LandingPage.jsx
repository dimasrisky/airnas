import React from "react";
import Landing from "../components/Landing";

const LandingPage = ({ dataWeather }) => {
  return <Landing fetchData={dataWeather} />;
};

export default LandingPage;
