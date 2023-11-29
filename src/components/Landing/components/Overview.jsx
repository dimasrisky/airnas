import React from "react";
import { Link } from "react-router-dom";

const Overview = () => {
  return (
    <section
      className="px-[5%] pt-[50px] sm:pt-[100px] xl:px-[8%] scroll-mt-[170px]"
      id="ringkasan"
    >
      <div className="bg-primary-100 max-w-[1400px] relative mx-auto flex flex-col gap-[20px] rounded-[2rem] px-[2rem] pb-[2rem] pt-[4rem] sm:gap-[44px] sm:px-[4rem] xl:flex-row-reverse xl:items-center xl:gap-[10%]">
        <img
          src="/assets/svg/logo.svg"
          alt="logo"
          className="absolute left-4 top-4 w-[30px] sm:w-[50px]"
        />
        <img
          src="/assets/img/airnas-preview.png"
          alt="airnas-overview"
          className="mx-auto w-[283px] sm:w-[547px] xl:w-[540px]"
        />
        <div className="flex flex-col gap-3 mx-auto">
          <h1 className="text-primary-900 text-[16px] text-center xl:text-left font-extrabold sm:text-[32px]">
            Airnas - Pengecek Cuaca
          </h1>
          <p className="text-primary-800 text-[12px] font-medium sm:text-[16px] text-justify max-w-[500px]">
            Airnas adalah aplikasi web yang berfungsi untuk mengecek cuaca saat
            ini di daerah pengguna. Aplikasi ini sangat mudah digunakan, cukup
            dengan menekan tombol &quot;Cek Tempatku&quot;, maka secara otomatis
            akan keluar data cuaca di daerah kalian, termasuk suhu, kelembaban,
            kecepatan angin, dan kualitas udara.
          </p>
          <Link
            to="/weather"
            className="btn-shadow bg-primary-500 mx-auto mt-[1rem] w-fit rounded-[10px] px-[22px] py-[10px] text-center text-[12px] font-bold text-white sm:text-[18px] xl:mx-0"
          >
            Coba Sekarang
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Overview;
