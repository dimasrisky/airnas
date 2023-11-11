import React from "react";
import ApplicationHome from "../components/ApplicationHome";

const Weather = ({ fetchData }) => {
  return (
    <>
      <div className="bg-primary-500 absolute -left-[28px] top-[187px] h-[90px] w-[90px] rounded-full blur-[75px] sm:-left-[191px] sm:top-[390px] sm:h-[250px] sm:w-[250px] sm:blur-[175px] "></div>
      <div className="bg-primary-500 absolute -right-[43px] top-[572px] h-[90px] w-[100px] rounded-full blur-[75px] sm:-right-[199px] sm:top-[150px] sm:h-[250px] sm:w-[250px] sm:blur-[175px] "></div>
      <ApplicationHome data={fetchData} />
    </>
  );
};

export default Weather;
