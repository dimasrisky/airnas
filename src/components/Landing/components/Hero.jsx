import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="flex flex-col justify-between gap-[15px] px-[5%] pt-[7rem] text-center xl:mt-[8rem] xl:flex-row-reverse xl:items-center xl:gap-[57px] xl:px-[8%]">
      <img
        src="/assets/img/hero-image.png"
        alt="hero-image"
        className="mx-auto xl:mx-0 2xl:mx-auto w-[320px] sm:w-[461px] xl:w-[530px]"
      />
      <div className="mx-auto xl:mx-0 2xl:mx-auto flex flex-col gap-2 md:max-w-[640px] xl:max-w-[573px] xl:gap-5">
        <span className="text-primary-600 bg-primary-100 mx-auto rounded-full px-[17px] py-[0.5rem] text-[10px] font-bold sm:text-[14px] xl:mx-0 xl:w-fit">
          Bencana Alam yang Tak Bisa Diabaikan
        </span>
        <h1 className="text-primary-900 mx-auto text-[26px] font-extrabold leading-tight sm:max-w-[573px] sm:text-[48px] xl:text-left">
          Suhu Ekstrem, Ancaman Nyata{" "}
          <span className="text-primary-600">Bagi Kehidupan</span> Makhluk Hidup
        </h1>
        <p className="text-primary-800 px-2 text-justify text-[12px] font-medium sm:text-[16px] xl:px-0">
          Cuaca Panas Ekstrem selalu terjadi belakangan hari ini. Temukan data
          mengenai suhu, tingkat polusi udara dan informasi cuaca lainnya dengan
          mudah dan cepat. Tetap mendapatkan data dan informasi terbaru dengan
          kami, Airnas.
        </p>
        <Link
          to="/weather"
          className="btn-shadow bg-primary-500 mx-auto mt-[1rem] w-fit rounded-[10px] px-[25px] py-[10px] text-[12px] font-semibold uppercase text-white sm:text-[14px] xl:mx-0 xl:py-[15px] xl:text-[16px]"
        >
          coba sekarang
        </Link>
      </div>
    </section>
  );
};

export default Hero;
