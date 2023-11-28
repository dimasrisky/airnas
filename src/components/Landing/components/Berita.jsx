import React from "react";
import Article from "./Article";

const Berita = () => {
  return (
    <section
      className="flex scroll-mt-[65px] flex-col gap-6 px-[5%] pt-[50px] sm:pt-[100px] xl:gap-0 xl:px-[8%]"
      id="berita"
    >
      <div className="mx-auto max-w-[1400px] justify-between xl:mx-0 2xl:mx-auto">
        <div className="mx-auto max-w-[589px] text-center xl:mx-0 xl:text-left">
          <h4 className="text-primary-500 text-[16px] font-semibold uppercase sm:text-[20px]">
            lihat berita terbaru
          </h4>
          <h1 className="text-primary-900 text-[26px] font-extrabold sm:text-[32px]">
            Berita & Artikel Terbaru
          </h1>
          <p className="text-primary-800 text-[12px] font-semibold sm:text-[16px] xl:text-justify">
            Baca dan update selalu mengenai berita pemanasan global, kenaikan
            suhu ekstrem yang terjadi dan lainnya
          </p>
        </div>
        <div className="mt-[1rem] flex flex-col justify-between xl:mt-[2rem] xl:flex-row 2xl:gap-[10rem] ">
          <div className="mx-auto flex flex-col gap-[17px] xl:mx-0 xl:max-w-[702px]">
            <img
              src="/assets/img/main-article.png"
              alt="main-article"
              className="w-full sm:mx-auto xl:mx-0 xl:w-[562px]"
            />
            <a
              href="https://regional.kompas.com/read/2023/10/03/153430878/cuaca-panas-di-babel-capai-38-derajat-celsius-pekerja-disarankan-pakai?page=all"
              target="_blank"
              rel="noreferrer"
              className=" text-primary-800 text-[16px] font-semibold leading-5 sm:text-[20px] sm:leading-6"
            >
              Cuaca Panas di Babel Capai 38 Derajat Celsius, Pekerja Disarankan
              Pakai Pelindung
            </a>
            <p className="text-[12px] font-medium text-[#A54230] sm:text-[14px]">
              Paparan terik matahari diperkirakan mencapai 38 derajat celsius
              pada saat siang hari. Kepala Badan Penanggulangan Bencana Daerah
              (BPBD) Bangka Belitung Mikron Antariksa mengatakan, fenomena suhu
              panas terik terjadi karena dipicu sejumlah faktor kondisi dinamika
              atmosfer.
            </p>
          </div>
          <div className="mt-[40px] flex flex-col gap-6 xl:mt-0 xl:w-[45%] xl:justify-between">
            <Article
              img={"article-1.png"}
              title={"Apa Penyebab Cuaca Panas Ekstrem di Indonesia?"}
              date={"02 Oktober 2023"}
              articleLink={
                "https://www.kompas.com/sains/read/2023/10/02/150000323/apa-penyebab-cuaca-panas-ekstrem-di-indonesia-"
              }
            />
            <Article
              img={"article-2.png"}
              title={
                "Bagaimana El Nino Dapat Memengaruhi Cuaca Ekstrem dan Gelombang Panas?"
              }
              date={"05 Agustus 2023"}
              articleLink={
                "https://www.kompas.com/sains/read/2023/08/05/080000323/bagaimana-el-nino-dapat-memengaruhi-cuaca-ekstrem-dan-gelombang-panas-"
              }
            />
            <Article
              img={"article-3.png"}
              title={
                "Waspadai Ancaman Dehidrasi dan Heatstroke di Tengah Cuaca Panas!"
              }
              date={"18 Oktober 2023"}
              articleLink={
                "https://health.kompas.com/read/23J18144500868/berbahaya-bagi-tubuh-waspadai-ancaman-dehidrasi-dan-heatstroke-di-tengah-cuaca"
              }
            />
            <Article
              img={"article-4.png"}
              title={
                "Cuaca Tak Menentu, Cabai Merah di Deli Serdang Terancam Gagal Panen Raya"
              }
              date={"06 Oktober 2023"}
              articleLink={
                "https://medan.kompas.com/read/2023/10/06/134618778/cuaca-tak-menentu-cabai-merah-di-deli-serdang-terancam-gagal-panen-raya"
              }
            />
          </div>
        </div>
      </div>
      <a
        href="https://www.kompas.com/tag/cuaca-ekstrem"
        target="_blank"
        rel="noreferrer"
        className="bg-primary-500 btn-shadow mx-auto mt-[1rem] w-[141px] rounded-[0.4rem] py-2 text-center text-[12px] font-bold text-white sm:w-[212px] sm:text-[16px] xl:mt-[3rem] xl:w-[211px]"
      >
        Lihat Selengkapnya
      </a>
    </section>
  );
};

export default Berita;
