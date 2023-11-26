import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="relative flex h-[60px] w-full items-center justify-between px-[4%] sm:h-[100px] sm:px-[10%] lg:fixed">
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
      <Link to="/weather">
        <button className="bg-primary-500 btn-shadow hover:bg-primary-600 rounded-[5px] px-[32px] py-[8px] text-[12px] font-semibold text-white transition-all sm:px-[39px] sm:py-[11px] sm:text-[18px] ">
          Kembali
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
