import React from "react";
import { Link } from "react-router-dom";
import InformationsCard from "./InformationsCard";

const ApplicationResult = ({ dataWeather }) => {
  const { country, city, state } = dataWeather || {};
  const { tp, pr, hu, ws, ic } = dataWeather.current.weather || {};
  const { aqius } = dataWeather.current.pollution || {};
  const options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const date = new Date().toLocaleString("id-IN", options);

  const weatherIcon = (icon) => icon.includes("n") ? `/assets/icons/moon.png` : `/assets/icons/sun.png`;

  return (
    <div className="w-screen h-screen">
      <nav className="flex h-[60px] w-full mx-auto items-center justify-between px-[4%] sm:h-[100px] sm:px-[10%]">
        <Link to="/weather">
          <div className="flex items-center gap-[10px]">
            <img src="/assets/icons/logo.png" alt="logo" className="h-[30px] w-[30px] sm:h-[50px] sm:w-[50px] "/>
            <h1 className="text-[16px] font-bold sm:text-[24px] sm:text-red-600">Airnas</h1>
          </div>
        </Link>
        <Link to="/weather-home">
          <button className="bg-primary-500 btn-shadow rounded-[5px] px-[32px] py-[8px] text-[12px] font-semibold text-white sm:px-[39px] sm:py-[11px] sm:text-[18px] hover:bg-primary-600 transition-all ">Kembali</button>
        </Link>
      </nav>

      <div className="weather-bg mx-auto rounded-[30px] w-[80%] lg:px-[2rem] lg:w-[70%] mt-[2rem]">
        <div className="flex w-full mx-auto flex-col items-center py-[3rem] lg:py-[1.5rem] lg:flex-row lg:justify-center sm:gap-[1rem] lg:gap-[3rem]">
          <div className="flex flex-col justify-between text-center">
            <h1 className="textShadow text-[16px] font-bold text-white sm:text-[24px] ">{city || "Loading"}</h1>
            <h3 className="textShadow mb-[5px] text-[12px] font-bold text-white sm:text-[16px] text-center">{`${state || "Loading"}, ${country || "Loading"}`}</h3>
            <p className="textShadow text-[12px] font-normal text-white sm:text-[16px] ">{date || "Loading"}</p>
            <img src={weatherIcon(ic)} alt="icon" className="mx-auto -mt-[25px] w-[170px] sm:w-[16rem]"/>
            <h6 className="textShadow -mt-[20px] text-[28px] font-extrabold text-white sm:text-[38px] ">{`${tp}° C`}</h6>
          </div>
          <div className="flex flex-col justify-center gap-[20px]">
            <h5 className="textShadow text-center text-[14px] font-bold text-white sm:text-[24px] lg:text-left">Informasi Cuaca Hari Ini</h5>
            <div className="flex flex-col gap-[10px] sm:gap-[3rem]">
              <div className="flex gap-[1rem]">
                <InformationsCard icon="/assets/icons/winds.png" title="Wind Speed" data={`${ws}m/s`}/>
                <InformationsCard icon="/assets/icons/airquality.png" title="Air Quality US" data={aqius}/>
              </div>
              <div className="flex gap-[1rem]">
                <InformationsCard icon="/assets/icons/pressure.png" title="Pressure" data={`${pr} hpa`}/>
                <InformationsCard icon="/assets/icons/humidity.png" title="Humidity" data={`${hu}%`}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationResult;