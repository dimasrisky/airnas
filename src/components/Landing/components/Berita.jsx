import React from 'react'
import Article from './Article'

const Berita = () => {
  return (
    <section className="flex px-[5%] pt-[50px] sm:pt-[100px] xl:px-[8%] flex-col gap-6 xl:gap-0 scroll-mt-[65px]" id="berita">
      <div className='max-w-[1400px] mx-auto xl:mx-0 2xl:mx-auto justify-between'>
        <div className="text-center xl:text-left max-w-[589px] mx-auto xl:mx-0">
          <h4 className="text-primary-500 text-[16px] sm:text-[20px] font-semibold uppercase">lihat berita terbaru</h4>
          <h1 className="text-primary-900 text-[26px] sm:text-[32px] font-extrabold">Berita & Artikel Terbaru</h1>
          <p className="text-primary-800 text-[12px] xl:text-justify font-semibold sm:text-[16px]">
            Baca dan update selalu mengenai berita pemanasan global, kenaikan
            suhu ekstrem yang terjadi dan lainnya
          </p>
        </div>
        <div className="mt-[1rem] flex flex-col 2xl:gap-[17rem] justify-between xl:mt-[2rem] xl:flex-row ">
          <div className="mx-auto flex flex-col gap-[17px] xl:mx-0 xl:max-w-[562px]">
            <img src="/assets/img/main-article.png" alt="main-article" className="w-full xl:w-[562px] sm:mx-auto xl:mx-0" />
            <a href="https://regional.kompas.com/read/2023/10/03/153430878/cuaca-panas-di-babel-capai-38-derajat-celsius-pekerja-disarankan-pakai?page=all" target="_blank" rel="noreferrer" className=" text-primary-800 text-[16px] font-semibold leading-5 sm:text-[20px] sm:leading-6">
              Cuaca Panas di Babel Capai 38 Derajat Celsius, Pekerja Disarankan
              Pakai Pelindung
            </a>
            <p className="text-[12px] sm:text-[14px] font-medium text-[#A54230]">
              Paparan terik matahari diperkirakan mencapai 38 derajat celsius
              pada saat siang hari. Kepala Badan Penanggulangan Bencana Daerah
              (BPBD) Bangka Belitung Mikron Antariksa mengatakan, fenomena suhu
              panas terik terjadi karena dipicu sejumlah faktor kondisi dinamika
              atmosfer.
            </p>
          </div>
          <div className="flex flex-col mt-[40px] xl:mt-0 gap-6 xl:w-[45%] xl:justify-between">
            <Article img={"article-1.png"} title={"Apa Penyebab Cuaca Panas Ekstrem di Indonesia?"} date={"02 Oktober 2023"} articleLink={"https://www.kompas.com/sains/read/2023/10/02/150000323/apa-penyebab-cuaca-panas-ekstrem-di-indonesia-"} />
            <Article img={"article-2.png"} title={"Bagaimana El Nino Dapat Memengaruhi Cuaca Ekstrem dan Gelombang Panas?"} date={"05 Agustus 2023"} articleLink={"https://www.kompas.com/sains/read/2023/08/05/080000323/bagaimana-el-nino-dapat-memengaruhi-cuaca-ekstrem-dan-gelombang-panas-"} />
            <Article img={"article-3.png"} title={"Waspadai Ancaman Dehidrasi dan Heatstroke di Tengah Cuaca Panas!"} date={"18 Oktober 2023"} articleLink={"https://health.kompas.com/read/23J18144500868/berbahaya-bagi-tubuh-waspadai-ancaman-dehidrasi-dan-heatstroke-di-tengah-cuaca"} />
            <Article img={"article-4.png"} title={"Cuaca Tak Menentu, Cabai Merah di Deli Serdang Terancam Gagal Panen Raya"} date={"06 Oktober 2023"} articleLink={"https://medan.kompas.com/read/2023/10/06/134618778/cuaca-tak-menentu-cabai-merah-di-deli-serdang-terancam-gagal-panen-raya"} />
          </div>
        </div>
      </div>
      <a href="https://www.kompas.com/tag/cuaca-ekstrem" className="bg-primary-500 btn-shadow mx-auto mt-[1rem] w-[141px] sm:w-[212px] xl:w-[211px] rounded-[0.4rem] py-2 text-center text-[12px] sm:text-[16px] font-bold text-white xl:mt-[3rem]">Lihat Selengkapnya</a>
    </section>
  )
}

export default Berita
