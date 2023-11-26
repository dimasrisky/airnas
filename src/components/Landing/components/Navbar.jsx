import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ navData }) => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <nav className="fixed top-0 z-[999]">
      <div className="w-screen border-b-2 bg-white px-[8%] py-[1.2rem] shadow-md">
        <div className="mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/assets/svg/logo.svg" alt="logo" className="w-[30px] sm:w-[50px]" />
            <h3 className="text-[16px] sm:text-[24px] font-bold">Airnas</h3>
          </div>
          <div className="hidden items-center gap-3 xl:flex xl:gap-[25px]">
            <img src="/assets/icons/location.png" alt="location" className="w-[48px]" />
            <div>
              <p className="text-[12px]">Lokasi</p>
              <p className="text-primary-500 text-[16px] font-semibold">{`${navData?.country || "Loading.."}, ${navData?.city || "Loading.."}`}</p>
            </div>
            <Link to="/weather" className="bg-primary-500 btn-shadow rounded-[10px] px-4 py-2 text-[18px] font-semibold w-[151px] text-center text-white">Coba Airnas</Link>
          </div>

          {/* nav-link For Mobile Mode */}
          <div className="relative xl:hidden">
            <img src={`/assets/svg/${navOpen ? "x.svg" : "burger-nav.svg"}`} alt="nav-icon" className="w-[30px] hover:cursor-pointer" onClick={() => setNavOpen(!navOpen)} />
            {navOpen ? (
              <div className="absolute right-0 top-10 sm:top-14 flex w-[7rem] sm:w-[10rem] flex-col gap-3 rounded-[0.64rem] bg-white px-2 py-4 text-center text-[0.7rem] sm:text-[1rem] shadow-lg">
                <a href="#" className="hover:text-primary-500 transition-all duration-200 font-medium" >Home</a>
                <a href="#penyebab" className="hover:text-primary-500 transition-all duration-200 font-medium">Penyebab</a>
                <a href="#statistik" className="hover:text-primary-500 transition-all duration-200 font-medium">Statistik</a>
                <a href="#ringkasan" className="hover:text-primary-500 transition-all duration-200 font-medium">Ringkasan</a>
                <a href="#berita" className="hover:text-primary-500 transition-all duration-200 font-medium">Berita</a>
                <Link to="/weather-home" className="bg-primary-500 rounded-[10px] px-2 py-2 text-white font-semibold hover:bg-primary-700 transition-all">Coba Airnas</Link>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {/* nav-link desktop mode */}
      <div className="hidden w-[100vw] border-b-2 bg-white py-[1.5rem] shadow-md xl:flex">
        <div className="flex gap-[2rem] px-[8%] text-[1rem]">
          <a href="#" className="hover:text-primary-500 transition-all duration-200 font-medium">Home</a>
          <a href="#penyebab" className="hover:text-primary-500 transition-all duration-200 font-medium">Penyebab</a>
          <a href="#statistik" className="hover:text-primary-500 transition-all duration-200 font-medium">Statistik</a>
          <a href="#ringkasan" className="hover:text-primary-500 transition-all duration-200 font-medium">Ringkasan</a>
          <a href="#berita" className="hover:text-primary-500 transition-all duration-200 font-medium">Berita</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
