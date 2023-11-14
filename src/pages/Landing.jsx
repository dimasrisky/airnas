import { useState } from "react";
import { Link } from "react-router-dom";
import DataFactorCard from "../components/DataFactorCard";
import Article from "../components/Article";
import StatisticData from "../components/StatisticData";

const LandingPage = ({ dataWeather }) => {
  // Navbar
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Footer Dropdown Mobile Mode
  const [isPerusahaanDropdownOpen, setIsPerusahaanDropdownOpen] =
    useState(false);
  const [isSosialMediaOpen, setIsSosialMediaOpen] = useState(false);
  const [isLainnyaOpen, setIsLainnyaOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 z-50">
        <div className="w-[100vw] border-b-2 bg-white py-[0.6rem] shadow-md">
          <div className="mx-auto flex w-[85%] items-center justify-between">
            <div className="flex items-center gap-1">
              <img
                src="/assets/icons/logo.png"
                alt="logo"
                className="scale-75"
              />
              <h3 className="text-lg font-bold">Airnas</h3>
            </div>
            <div className="hidden items-center gap-3 xl:flex">
              <img src="/assets/icons/location.png" alt="location" />
              <div>
                <p className="text-[0.7rem]">Lokasi</p>
                <p className="text-primary-500 text-[0.7rem] font-semibold">{`${dataWeather?.country}, ${dataWeather?.city}`}</p>
              </div>
              <Link
                to="/weather-home"
                className="bg-primary-500 btn-shadow ml-[1.5rem] rounded-md px-4 py-2 text-[0.7rem] text-white"
              >
                Coba Airnas
              </Link>
            </div>

            {/* nav-link For Mobile Mode */}
            <div className="relative xl:hidden">
              <img
                src={`/assets/svg/${isNavOpen ? "x.svg" : "burger-nav.svg"}`}
                alt="nav-icon"
                className="scale-125"
                onClick={() => setIsNavOpen((prev) => !prev)}
              />
              {isNavOpen ? (
                <div className="absolute right-4 top-2 flex w-[7rem] flex-col gap-3 rounded-[0.5rem] bg-white px-2 py-4 text-center text-[0.7rem] shadow-lg">
                  <a
                    href="#"
                    className="hover:text-primary-500 transition-all duration-200"
                  >
                    Home
                  </a>
                  <a
                    href="#penyebab"
                    className="hover:text-primary-500 transition-all duration-200"
                  >
                    Penyebab
                  </a>
                  <a
                    href="#statistik"
                    className="hover:text-primary-500 transition-all duration-200"
                  >
                    Statistik
                  </a>
                  <a
                    href="#ringkasan"
                    className="hover:text-primary-500 transition-all duration-200"
                  >
                    Ringkasan
                  </a>
                  <a
                    href="#berita"
                    className="hover:text-primary-500 transition-all duration-200"
                  >
                    Berita
                  </a>
                  <Link
                    to="/weather-home"
                    className="bg-primary-500 rounded-md px-2 py-2 text-[0.6rem] text-white"
                  >
                    Coba Airnas
                  </Link>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>

        {/* nav-link desktop mode */}
        <div className="hidden w-[100vw] border-b-2 bg-white py-[1rem] shadow-md xl:flex">
          <div className="mx-auto flex w-[85%] gap-[2rem] text-[0.8rem]">
            <a
              href="#"
              className="hover:text-primary-500 transition-all duration-200"
            >
              Home
            </a>
            <a
              href="#penyebab"
              className="hover:text-primary-500 transition-all duration-200"
            >
              Penyebab
            </a>
            <a
              href="#statistik"
              className="hover:text-primary-500 transition-all duration-200"
            >
              Statistik
            </a>
            <a
              href="#ringkasan"
              className="hover:text-primary-500 transition-all duration-200"
            >
              Ringkasan
            </a>
            <a
              href="#berita"
              className="hover:text-primary-500 transition-all duration-200"
            >
              Berita
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="mx-auto mt-[6rem] flex w-[85%] flex-col gap-[1rem] text-center xl:mt-[8rem] xl:flex-row-reverse xl:items-center xl:justify-between">
        <img
          src="/assets/img/hero-image.png"
          alt="hero-image"
          className="xl:w-[50%]"
        />
        <div className="flex flex-col gap-3 xl:w-[50%]">
          <div className="text-primary-600 bg-primary-100 mx-auto w-[15rem] rounded-full py-[0.1rem] text-[0.7rem] font-semibold xl:mx-0">
            Bencana Alam yang Tak Bisa Diabaikan
          </div>
          <h1 className="text-primary-900 text-[1.4rem] font-extrabold sm:text-[2.2rem] xl:text-left xl:text-[1.8rem]">
            Suhu Ekstrem, Ancaman <br /> Nyata{" "}
            <span className="text-primary-600">Bagi Kehidupan</span> <br />{" "}
            Makhluk Hidup
          </h1>
          <p className="text-primary-800 px-2 text-left text-[0.6rem] font-medium sm:text-[1rem] xl:px-0 xl:text-[0.7rem]">
            Cuaca Panas Ekstrem selalu terjadi belakangan hari ini. Temukan data
            mengenai suhu, tingkat polusi udara dan informasi cuaca lainnya
            dengan mudah dan cepat. Tetap mendapatkan data dan informasi terbaru
            dengan kami, Airnas.
          </p>
          <Link
            to="/weather-home"
            className="bg-primary-500 mx-auto mt-[1rem] w-[7rem] rounded-md py-2 text-[0.7rem] font-bold uppercase text-white sm:w-[10rem] sm:text-[0.8rem] xl:mx-0"
          >
            coba sekarang
          </Link>
        </div>
      </main>

      {/* Data Section */}
      <main
        className="bg-primary-100 mx-auto mt-[6rem] w-[85%] rounded-[1rem] py-[2rem] text-center"
        id="penyebab"
      >
        <div className="scale-[125%]">
          <h4 className="text-primary-500 text-[0.7rem] font-semibold uppercase">
            penyebab cuaca ekstrem
          </h4>
          <h1 className="text-primary-900 text-[1.2rem] font-extrabold xl:text-[1.3rem]">
            Data Yang Didapatkan
          </h1>
          <h5 className="text-primary-800 text-[0.6rem] font-semibold">
            Faktor Penyebab Suhu Ekstrem di Indonesia
          </h5>
        </div>
        <div className="mt-[2rem] flex flex-wrap items-center justify-center gap-4 px-[1.3rem] xl:gap-1">
          <DataFactorCard
            icon={"el-nino.png"}
            title={"EL Nino"}
            description={
              "Fenomena El Nino dapat menyebabkan perubahan suhu di Indonesia. El Nino menyebabkan suhu di Indonesia meningkat."
            }
          />
          <DataFactorCard
            icon={"deforestasi.png"}
            title={"Deforestasi"}
            description={
              "Deforestasi menyebabkan hilangnya vegetasi yang menyerap karbon dioksida. Hal ini menyebabkan suhu di Indonesia meningkat."
            }
          />
          <DataFactorCard
            icon={"perubahan-iklim.png"}
            title={"Perubahan Iklim"}
            description={
              "Perubahan iklim menyebabkan suhu rata-rata di Bumi meningkat. Hal ini menyebabkan suhu di Indonesia juga meningkat."
            }
          />
        </div>
      </main>

      {/* Statistik section */}
      <main className="mx-auto mt-[6rem] w-[85%] xl:mx-0 xl:flex xl:justify-center">
        <img
          src="/assets/img/statistic.png"
          className="mx-auto"
          alt="statictic"
          id="statistik"
        />
        <div className="mt-[1rem] text-center sm:mt-[3rem] sm:scale-[] xl:mt-0 xl:text-left">
          <h3 className="text-primary-600 text-md font-semibold uppercase">
            statistik
          </h3>
          <h1 className="text-primary-900 mt-[0.5rem] text-[1.4rem] font-extrabold sm:text-[1.6rem]">
            Statistik Dampak Suhu <br /> Ekstrem di Indonesia
          </h1>
          <div className="mt-[0.5rem] flex flex-col items-center gap-4 sm:text-left">
            <div className="flex flex-col gap-7 sm:flex-row">
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
            </div>
            <div className="flex flex-col gap-7 sm:flex-row">
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
        </div>
      </main>

      {/* Overview Section */}
      <main
        className="bg-primary-100 relative mx-auto mt-[6rem] flex w-[85%] flex-col gap-5 rounded-[2rem] px-[1.7rem] pb-[2rem] pt-[4rem] xl:flex-row-reverse xl:items-center"
        id="ringkasan"
      >
        <img
          src="/assets/icons/logo.png"
          alt="logo"
          className="absolute left-4 top-4 w-[2rem] sm:w-[2.5rem]"
        />
        <img src="/assets/img/airnas-preview.png" alt="airnas-overview" />
        <div className="flex flex-col gap-3">
          <h1 className="text-primary-900 font-extrabold sm:text-[1.3rem]">
            Airnas - Pengecek Cuaca
          </h1>
          <p className="text-primary-800 text-[0.6rem] font-medium sm:text-[0.8rem]">
            Airnas adalah aplikasi web yang berfungsi untuk mengecek cuaca saat
            ini di daerah pengguna. Aplikasi ini sangat mudah digunakan, cukup
            dengan menekan tombol &quot;Cek Tempatku&quot;, maka secara otomatis
            akan keluar data cuaca di daerah kalian, termasuk suhu, kelembaban,
            kecepatan angin, dan kualitas udara.
          </p>
          <Link
            to="/weather-home"
            className="bg-primary-500 mx-auto mt-[1rem] w-[7rem] rounded-md py-2 text-center text-[0.7rem] font-bold text-white sm:w-[9rem] xl:mx-0"
          >
            Coba Sekarang
          </Link>
        </div>
      </main>

      {/* NEWS Section */}
      <main
        className="mx-auto mt-[6rem] flex w-[85%] flex-col gap-6 xl:gap-0"
        id="berita"
      >
        <div className="text-center xl:text-left">
          <h4 className="text-primary-500 text-[0.9rem] font-semibold uppercase">
            lihat berita terbaru
          </h4>
          <h1 className="text-primary-900 text-[1.4rem] font-extrabold sm:text-[1.7rem] xl:text-[2rem]">
            Berita & Artikel Terbaru
          </h1>
          <p className="text-primary-800 text-[0.5rem] font-semibold sm:text-[0.8rem] xl:max-w-[50%]">
            Baca dan update selalu mengenai berita pemanasan global, kenaikan
            suhu ekstrem yang terjadi dan lainnya
          </p>
        </div>
        <div className="mt-[1rem] flex flex-col gap-[2rem] xl:mt-[2rem] xl:flex-row xl:justify-center xl:gap-[5rem]">
          <div className="mx-auto flex flex-col gap-[0.5rem] xl:mx-0 xl:w-[50%]">
            <img src="/assets/img/main-article.png" alt="main-article" />
            <a
              href="https://regional.kompas.com/read/2023/10/03/153430878/cuaca-panas-di-babel-capai-38-derajat-celsius-pekerja-disarankan-pakai?page=all"
              className=" text-primary-800 text-[1rem] font-semibold leading-5 sm:text-[1.1rem] sm:leading-6"
            >
              Cuaca Panas di Babel Capai 38 Derajat Celsius, Pekerja Disarankan
              Pakai Pelindung
            </a>
            <p className="text-[0.6rem] font-medium text-[#A54230] sm:text-[0.7rem]">
              Paparan terik matahari diperkirakan mencapai 38 derajat celsius
              pada saat siang hari. Kepala Badan Penanggulangan Bencana Daerah
              (BPBD) Bangka Belitung Mikron Antariksa mengatakan, fenomena suhu
              panas terik terjadi karena dipicu sejumlah faktor kondisi dinamika
              atmosfer.
            </p>
          </div>
          <div className="flex flex-col gap-6 xl:w-[45%] xl:justify-between">
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
        <a
          href="https://www.kompas.com/tag/cuaca-ekstrem"
          className="bg-primary-500 btn-shadow mx-auto mt-[1rem] w-[8rem] rounded-[0.4rem] py-2 text-center text-[0.6rem] font-bold text-white xl:mt-[3rem]"
        >
          Lihat Selengkapnya
        </a>
      </main>

      {/* Footer */}
      <footer className="bg-primary-500 mt-[6rem] w-[100vw] rounded-t-[2rem] text-white">
        <div className="mx-auto w-[85%] py-7 xl:flex xl:flex-row xl:items-baseline xl:justify-between xl:gap-[3rem]">
          <div className="flex flex-col gap-1">
            <img src="/assets/icons/logo.png" alt="logo" className="w-[2rem]" />
            <h1 className="font-bold">Airnas</h1>
            <p className="max-w-[80%] text-[0.6rem] font-medium opacity-70 xl:text-[0.7rem]">
              Airnas adalah aplikasi web yang berfungsi untuk mengecek cuaca
              saat ini di daerah pengguna. Aplikasi tersedia secara gratis untuk
              semua pengguna. Aplikasi ini dapat diakses melalui browser web di
              komputer, laptop, tablet, dan smartphone.
            </p>
          </div>
          {/* Dropdown */}
          <div className="mt-[3rem] flex w-full flex-col gap-[3rem] sm:flex-row">
            {/* Perusahaan */}
            <div>
              <div
                className="flex items-center justify-between"
                onClick={() => setIsPerusahaanDropdownOpen((prev) => !prev)}
              >
                <h1 className="text-[0.8rem] font-bold uppercase">
                  perusahaan
                </h1>
                <img
                  src="/assets/icons/arrow.png"
                  alt="arrow"
                  className={`${
                    isPerusahaanDropdownOpen ? "rotate-0" : "rotate-[180deg]"
                  } sm:hidden`}
                />
              </div>
              <div className="mt-[1rem] hidden flex-col gap-2 text-[0.6rem] font-semibold sm:flex">
                <Link to="/about-page">Tentang Kami</Link>
                <a href="">Kebijakan Privasi</a>
                <a href="">Syarat dan ketentuan</a>
                <a href="">Bantuan</a>
              </div>

              {/* Dropdown Mobile */}
              {isPerusahaanDropdownOpen ? (
                <div className="mt-[1rem] flex flex-col gap-2 text-[0.6rem] font-semibold sm:hidden">
                  <Link to="/about-page">Tentang Kami</Link>
                  <a href="">Kebijakan Privasi</a>
                  <a href="">Syarat dan ketentuan</a>
                  <a href="">Bantuan</a>
                </div>
              ) : (
                ""
              )}
            </div>
            {/* Sosial Media */}
            <div>
              <div
                className="flex items-center justify-between"
                onClick={() => setIsSosialMediaOpen((prev) => !prev)}
              >
                <h1 className="text-[0.8rem] font-bold uppercase">
                  Sosial Media
                </h1>
                <img
                  src="/assets/icons/arrow.png"
                  alt="arrow"
                  className={`${
                    isSosialMediaOpen ? "rotate-0" : "rotate-[180deg]"
                  } sm:hidden`}
                />
              </div>
              <div className="mt-[1rem] hidden flex-col gap-2 text-[0.6rem] font-semibold sm:flex">
                <a href="">Twitter</a>
                <a href="">Facebook</a>
                <a href="">Instagram</a>
              </div>
              {/* Dropdown Mobile */}
              {isSosialMediaOpen ? (
                <div className="mt-[1rem] flex flex-col gap-2 text-[0.6rem] font-semibold">
                  <a href="">Twitter</a>
                  <a href="">Facebook</a>
                  <a href="">Instagram</a>
                </div>
              ) : (
                ""
              )}
            </div>
            {/* Lainnya */}
            <div>
              <div
                className="flex items-center justify-between"
                onClick={() => setIsLainnyaOpen((prev) => !prev)}
              >
                <h1 className="text-[0.8rem] font-bold uppercase">lainnya</h1>
                <img
                  src="/assets/icons/arrow.png"
                  alt="arrow"
                  className={`${
                    isLainnyaOpen ? "rotate-0" : "rotate-[180deg]"
                  } sm:hidden`}
                />
              </div>
              <div className="mt-[1rem] hidden flex-col gap-2 text-[0.6rem] font-semibold sm:flex">
                <a href="">Lisensi</a>
                <a href="">Partnership</a>
              </div>
              {/* Dropdown Mobile */}
              {isLainnyaOpen ? (
                <div className="mt-[1rem] flex flex-col gap-2 text-[0.6rem] font-semibold">
                  <a href="">Lisensi</a>
                  <a href="">Partnership</a>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="bg-primary-500 border-primary-700 border-t py-3 text-center text-[0.6rem]">
          COPYRIGHT © 2023 — Airnas | Asta Arkananta <br /> SMKN 8 MALANG
        </div>
      </footer>
    </>
  );
};

export default LandingPage;
