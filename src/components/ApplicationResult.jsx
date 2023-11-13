import React from "react";
import { Link } from "react-router-dom";
import InformationsCard from "./InformationsCard";

const ApplicationResult = ({ data }) => {
  const { country, city, state } = data || {};
  const { tp, pr, hu, ws, ic } = data.current.weather || {};
  const { aqius } = data.current.pollution || {};
  const options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const date = new Date().toLocaleString("id-IN", options);

  const weatherIcon = (icon) =>
    icon.includes("n") ? `/icons/moon.png` : `/icons/sun.png`;

  return (
    <div className="min-h-screen flex items-center justify-center">
      <nav className="absolute top-0 flex h-[60px] w-full items-center justify-between px-[4%] sm:h-[100px] sm:px-[10%]">
        <Link to="/weather">
          <div className="flex items-center gap-[10px]">
            <img
              src="/icons/logo.png"
              alt="logo"
              className="h-[30px] w-[30px] sm:h-[50px] sm:w-[50px] "
            />
            <h1 className="text-[16px] font-bold sm:text-[24px]">Airnas</h1>
          </div>
        </Link>
        <Link to="/weather">
          <button className="bg-primary-500 btn-shadow rounded-[5px] px-[32px] py-[8px] text-[12px] font-semibold text-white sm:px-[39px] sm:py-[11px] sm:text-[18px] hover:bg-primary-600 transition-all ">
            Kembali
          </button>
        </Link>
      </nav>

      <section className="flex justify-center items-center px-[4%] sm:px-[10%]">
        <div className="weather-bg h-[498px] w-full max-w-[915px] rounded-[30px] sm:h-[683px] lg:h-[480px]">
          <div className="flex h-full w-full flex-col items-center gap-[10px] py-[30px] lg:flex-row lg:justify-center lg:gap-[100px] px-[25px] sm:px-[100px]">
            <div className="flex flex-col justify-center text-center">
              <h1 className="textShadow text-[16px] font-bold text-white sm:text-[24px]">
                {city || "Loading"}
              </h1>
              <h3 className="textShadow mb-[5px] text-[12px] font-bold text-white sm:text-[16px] ">{`${state || "Loading"
                }, ${country || "Loading"}`}</h3>
              <p className="textShadow text-[12px] font-normal text-white sm:text-[16px] ">
                {date || "Loading"}
              </p>
              <img
                src={weatherIcon(ic)}
                alt="icon"
                className="mx-auto -mt-[25px] h-[170px] w-[170px] sm:-mt-[10px] sm:h-[220px] sm:w-[220px]"
              />
              <h6 className="textShadow -mt-[20px] text-[28px] font-extrabold text-white sm:text-[38px] ">{`${tp}° C`}</h6>
            </div>
            <div className="flex flex-col justify-center gap-[20px]">
              <h5 className="textShadow text-center text-[14px] font-bold text-white sm:text-[24px] lg:text-left">
                Informasi Cuaca Hari Ini
              </h5>
              <div className="grid w-[100%] grid-cols-2 grid-rows-2 gap-[10px] sm:gap-[20px]">
                <InformationsCard
                  icon="/icons/winds.png"
                  title="Wind Speed"
                  data={`${ws}m/s`}
                />
                <InformationsCard
                  icon="/icons/airquality.png"
                  title="Air Quality US"
                  data={aqius}
                />
                <InformationsCard
                  icon="/icons/pressure.png"
                  title="Pressure"
                  data={`${pr} hpa`}
                />
                <InformationsCard
                  icon="/icons/humidity.png"
                  title="Humidity"
                  data={`${hu}%`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApplicationResult;
