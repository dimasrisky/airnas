import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const AboutPage = ({ dataWeather }) => {
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
                  <Link
                    to="/landing-page"
                    className="hover:text-primary-500 transition-all duration-200"
                  >
                    Home
                  </Link>
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
            <Link
              to="/landing-page"
              className="hover:text-primary-500 transition-all duration-200"
            >
              Home
            </Link>
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

      {/* About Section */}
      <main className="mx-auto mt-[6rem] w-[85%] xl:mt-[10rem] xl:w-[70%]">
        {/* Title */}
        <h1 className="text-primary-500 text-center text-[1.8rem] font-extrabold">
          Tentang Kami
        </h1>
        {/* Tentang Airnas */}
        <div className="mt-[2rem] flex flex-col gap-3 xl:mt-[1rem]">
          <h1 className="text-primary-700 text-[1.2rem] font-bold">
            Tentang Airnas
          </h1>
          <div className="flex flex-col items-start gap-[1rem] xl:flex-row">
            <img
              src="/assets/icons/logo.png"
              alt="logo-airnas"
              className="w-[3rem] xl:w-[10rem]"
            />
            <p className="text-primary-950 text-[0.7rem] font-medium">
              Airnas adalah aplikasi cuaca yang dirancang khusus untuk
              Indonesia. Aplikasi ini memberikan informasi cuaca yang akurat dan
              terkini untuk seluruh wilayah Indonesia mulai dari Sabang sampai
              Merauke. Anda dapat menggunakan aplikasi Airnas untuk merencanakan
              kegiatan di ruangan terbuka, pertanian, dan berpergian dengan
              keluarga.
            </p>
          </div>
          <p className="text-primary-950 text-[0.7rem] font-medium">
            Kami memberikan banyak kelebihan bagi pengguna kami, diantaranya
            fitur-fitur yang lengkap dan mudah digunakan, data yang diberikan
            terpercaya, aplikasi gratis untuk semua dan lainnya. Airnas
            menggunakan data cuaca dari Airvisual atau IQAIR yang akurat dan
            terpercaya. Data cuaca ini diperbarui setiap 1 jam, sehingga Anda
            selalu mendapatkan informasi cuaca yang terkini.
          </p>
        </div>
        {/* Tentang AstaDev */}
        <div className="mt-[3rem] flex flex-col gap-3">
          <h1 className="text-primary-700 text-[1rem] font-bold">
            Tentang Tim ASTADEV
          </h1>
          <div className="flex flex-col items-start gap-[1rem] xl:flex-row">
            <img
              src="/assets/icons/logo-sekolah.png"
              alt="logo-sekolah"
              className="w-[3rem] xl:w-[4.3rem]"
            />
            <p className="text-primary-950 text-[0.7rem] font-medium">
              Airnas adalah aplikasi cuaca yang dirancang khusus untuk
              Indonesia. Aplikasi ini memberikan informasi cuaca yang akurat dan
              terkini untuk seluruh wilayah Indonesia mulai dari Sabang sampai
              Merauke. Anda dapat menggunakan aplikasi Airnas untuk merencanakan
              kegiatan di ruangan terbuka, pertanian, dan berpergian dengan
              keluarga.
            </p>
          </div>
          <p className="text-primary-950 text-[0.7rem] font-medium">
            Kami memberikan banyak kelebihan bagi pengguna kami, diantaranya
            fitur-fitur yang lengkap dan mudah digunakan, data yang diberikan
            terpercaya, aplikasi gratis untuk semua dan lainnya. Airnas
            menggunakan data cuaca dari Airvisual atau IQAIR yang akurat dan
            terpercaya. Data cuaca ini diperbarui setiap 1 jam, sehingga Anda
            selalu mendapatkan informasi cuaca yang terkini.
          </p>
        </div>
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
                <a href="">Tentang Kami</a>
                <a href="">Kebijakan Privasi</a>
                <a href="">Syarat dan ketentuan</a>
                <a href="">Bantuan</a>
              </div>
              {/* Dropdown Mobile */}
              {isPerusahaanDropdownOpen ? (
                <div className="mt-[1rem] flex flex-col gap-2 text-[0.6rem] font-semibold sm:hidden">
                  <Link to="/about-page" href="">
                    Tentang Kami
                  </Link>
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

export default AboutPage;
