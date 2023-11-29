import React from "react";
import StatisticData from "./StatisticData";

const Statistik = () => {
  return (
    <section className="flex flex-col items-center justify-between px-[5%] pt-[50px] scroll-mt-[170px] sm:pt-[100px] xl:flex-row xl:px-[8%]" id="statistik">
      <img
        src="/assets/img/statistic.png"
        className="mx-auto xl:mx-0 2xl:mx-auto h-fit w-[332px] sm:w-[618px] xl:w-[618px]"
        alt="statictic"
        id="statistik"
      />
      <div className="mx-auto xl:mx-0 2xl:mx-auto flex max-w-[464px] flex-col text-center xl:mt-0 xl:text-left">
        <div>
          <h3 className="text-primary-600 text-[16px] font-semibold uppercase sm:text-[20px]">
            statistik
          </h3>
          <h1 className="text-primary-900 mt-[0.5rem] text-[26px] font-extrabold sm:text-[41.16px]">
            Statistik Dampak Suhu Ekstrem di Indonesia
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <StatisticData
            text1="Suhu udara tertinggi"
            text2="mencapai angka"
            value="39°C"
          />
          <StatisticData
            text1="Permukaan air laut"
            text2="Indonesia meningkat"
            value="62,3 mm"
          />
          <StatisticData
            text1="Suhu udara tahunan"
            text2="meningkat hingga"
            value="0,2°C"
          />
          <StatisticData
            text1="Jumlah wilayah sekitar"
            text2="mengalami kekeringan"
            value="15+"
          />
        </div>
      </div>
    </section>
  );
};

export default Statistik;
