import React from "react";
import CardData from "./CardData";

const Hero = ({ detailsData }) => {
  const { country, city, state } = detailsData || {};
  const { tp, pr, hu, ws, ic } = detailsData.current.weather || {};
  const { aqius } = detailsData.current.pollution || {};
  const options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const date = new Date().toLocaleString("id-IN", options);
  const weatherIcon = (icon) =>
    icon.includes("n") ? `/assets/icons/moon.png` : `/assets/icons/sun.png`;

  return (
    <section className="px-[4%] py-[30%] sm:px-[10%] sm:py-[5%] lg:flex lg:min-h-screen lg:items-center lg:justify-center lg:py-0 ">
      <div className="weather-bg mx-auto h-[498px] w-full max-w-[915px] rounded-[30px] sm:h-[683px] lg:h-[480px]">
        <div className="flex h-full w-full flex-col items-center gap-[10px] px-[4%] py-[30px] sm:px-[60px] lg:flex-row lg:justify-center lg:gap-[100px]">
          <div className="flex flex-col justify-center text-center">
            <h1 className="textShadow text-[16px] font-bold text-white sm:text-[24px]">
              {city || "Loading"}
            </h1>
            <h3 className="textShadow mb-[5px] text-[12px] font-bold text-white sm:text-[16px] ">{`${
              state || "Loading"
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
            <div className="grid w-[100%] grid-cols-2 grid-rows-2 gap-[10px] overflow-x-hidden sm:gap-[20px]">
              <CardData
                icon="/assets/icons/winds.png"
                title="Wind Speed"
                data={`${ws}m/s`}
              />
              <CardData
                icon="/assets/icons/airquality.png"
                title="Air Quality US"
                data={aqius}
              />
              <CardData
                icon="/assets/icons/pressure.png"
                title="Pressure"
                data={`${pr} hpa`}
              />
              <CardData
                icon="/assets/icons/humidity.png"
                title="Humidity"
                data={`${hu}%`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
