import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ navData }) => {
  const { country, city } = navData || {};

  return (
    <nav className="fixed flex h-[60px] w-full items-center justify-between px-[4%] sm:h-[100px] sm:px-[10%]">
      <Link to="/weather">
        <div className="flex items-center gap-[10px]">
          <img
            src="/assets/svg/logo.svg"
            alt="logo"
            className="h-[30px] w-[30px] sm:h-[50px] sm:w-[50px] "
          />
          <h1 className="text-[16px] font-bold sm:text-[24px]">Airnas</h1>
        </div>
      </Link>
      <div className="flex items-center gap-[12px]">
        <img
          src="/assets/icons/location.png"
          alt="location"
          className="h-[30px] w-[30px] sm:h-[48px] sm:w-[48px] "
        />
        <div className="flex flex-col gap-[2px]">
          <p className="text-primary-950 text-[10px] font-normal sm:text-[12px] ">
            Lokasi
          </p>
          <p className="text-primary-600 text-[12px] font-bold sm:text-[16px]">
            {`${country || "Loading"}, ${city || "Loading"}`}
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
