import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-[10px] overflow-hidden px-[4%] sm:px-[10%] lg:mx-auto lg:max-w-[650px] lg:px-0">
      <h1 className="text-center text-[30px] font-extrabold leading-tight sm:text-[48px] lg:max-w-[588px]">
        CEK INFORMASI CUACA DI{" "}
        <span className="text-primary-600">DAERAHMU</span>
      </h1>
      <p className="text-center text-[14px] font-medium text-[#000000b3] sm:text-[16px]">
        Cuaca Panas Ekstrem selalu terjadi belakangan hari ini. Temukan data
        mengenai{" "}
        <span className="font-semibold">
          suhu, tingkat polusi udara dan informasi cuaca
        </span>{" "}
        lainnya dengan mudah dan cepat. Tetap mendapatkan data dan informasi
        terbaru dengan kami, <span className="font-semibold">Airnas.</span>
      </p>
      <Button
        link="/weather-result"
        className={`hover:bg-primary-600 mt-[10px] transition-all sm:mt-[20px]`}
      >
        Cek Tempatku
      </Button>
    </section>
  );
};

export default Hero;
