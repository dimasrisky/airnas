import React from "react";
import DataFactorCard from "./DataFactorCard";

const Penyebab = () => {
  return (
    <section
      className="px-[5%] pt-[50px] sm:pt-[100px] xl:px-[8%] scroll-mt-[120px]"
      id="penyebab"
    >
      <div className="bg-primary-100 mx-auto max-w-[1400px] rounded-[20px] px-[4%] py-[2rem] text-center xl:rounded-[50px]">
        <div>
          <h4 className="text-primary-500 text-[12px] font-semibold uppercase sm:text-[16px]">
            penyebab cuaca ekstrem
          </h4>
          <h1 className="text-primary-900 text-[26px] font-extrabold sm:text-[36px]">
            Data Yang Didapatkan
          </h1>
          <h5 className="text-primary-800 text-[12px] font-semibold sm:text-[16px]">
            Faktor Penyebab Suhu Ekstrem di Indonesia
          </h5>
        </div>
        <div className="inline-flex flex-wrap justify-center gap-[20px] pt-9 sm:gap-[40px] sm:pb-9 ">
          <DataFactorCard
            icon="el-nino.png"
            title="EL Nino"
            description="Fenomena El Nino dapat menyebabkan perubahan suhu di Indonesia. El Nino menyebabkan suhu di Indonesia meningkat."
          />
          <DataFactorCard
            icon="perubahan-iklim.png"
            title="Perubahan Iklim"
            description="Perubahan iklim menyebabkan suhu rata-rata di Bumi meningkat. Hal ini menyebabkan suhu di Indonesia juga meningkat."
            bigger={true}
            className={`xl:mx-5`}
          />
          <DataFactorCard
            icon="deforestasi.png"
            title="Deforestasi"
            description={
              "Deforestasi menyebabkan hilangnya vegetasi yang menyerap karbon dioksida. Hal ini menyebabkan suhu di Indonesia meningkat."
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Penyebab;
