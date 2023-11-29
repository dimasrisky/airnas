import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [isPerusahaanDropdownOpen, setIsPerusahaanDropdownOpen] =
    useState(false);
  const [isSosialMediaOpen, setIsSosialMediaOpen] = useState(false);
  const [isLainnyaOpen, setIsLainnyaOpen] = useState(false);

  return (
    <footer className="bg-primary-500 sm:roudned-t-[50px] mt-[7rem] w-[100vw] rounded-t-[20px] text-white xl:rounded-t-[70px]">
      <div className="px-[5%] py-7 xl:flex xl:flex-row xl:items-center xl:justify-between xl:px-[8%]">
        <div className="flex max-w-[490px] flex-col gap-1">
          <img
            src="/assets/svg/logo.svg"
            alt="logo"
            className="w-[30px] sm:w-[50px]"
          />
          <h1 className="w-fit text-[16px] font-bold sm:text-[24px]">Airnas</h1>
          <p className="xl:max-w-fulltext-justify max-w-full text-[12px] font-normal opacity-70 sm:text-[14px]">
            Airnas adalah aplikasi web yang berfungsi untuk mengecek cuaca saat
            ini di daerah pengguna. Aplikasi tersedia secara gratis untuk semua
            pengguna. Aplikasi ini dapat diakses melalui browser web di
            komputer, laptop, tablet, dan smartphone.
          </p>
        </div>
        {/* Dropdown */}
        <div className="mt-[2rem] flex flex-col gap-[2.5rem] sm:flex-row xl:mt-0">
          {/* Perusahaan */}
          <div>
            <div
              className="flex items-center justify-between"
              onClick={() => setIsPerusahaanDropdownOpen((prev) => !prev)}
            >
              <h1 className="text-[14px] font-bold uppercase sm:text-[16px]">
                perusahaan
              </h1>
              <img
                src="/assets/icons/arrow.png"
                alt="arrow"
                className={`transition-all hover:cursor-pointer ${
                  isPerusahaanDropdownOpen ? "rotate-0" : "rotate-[180deg]"
                } sm:hidden`}
              />
            </div>
            <div className="mt-[1rem] hidden flex-col gap-2 text-[14px] font-medium  sm:flex">
              <Link to="/about">Tentang Kami</Link>
              <Link to="/contact">Hubungi Kami</Link>
              <a href="">Kebijakan Privasi</a>
              <a href="">Syarat dan ketentuan</a>
            </div>

            {/* Dropdown Mobile */}
            {isPerusahaanDropdownOpen ? (
              <div className="mt-[1rem] flex flex-col gap-2 text-[14px] font-medium sm:hidden">
                <Link to="/about">Tentang Kami</Link>
                <Link to="/contact">Hubungi Kami</Link>
                <a href="">Kebijakan Privasi</a>
                <a href="">Syarat dan ketentuan</a>
              </div>
            ) : null}
          </div>
          {/* Sosial Media */}
          <div>
            <div
              className="flex items-center justify-between"
              onClick={() => setIsSosialMediaOpen((prev) => !prev)}
            >
              <h1 className="text-[14px] font-bold uppercase sm:text-[16px]">
                Sosial Media
              </h1>
              <img
                src="/assets/icons/arrow.png"
                alt="arrow"
                className={`transition-all hover:cursor-pointer ${
                  isSosialMediaOpen ? "rotate-0" : "rotate-[180deg]"
                } sm:hidden`}
              />
            </div>
            <div className="mt-[1rem] hidden flex-col gap-2 text-[14px] font-medium sm:flex">
              <a
                href="https://twitter.com/OSISSMK8"
                rel="noreferrer"
                target="_blank"
              >
                Twitter
              </a>
              <a
                href="https://www.facebook.com/smknegeri8malang/?locale=id_ID"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/smkn8malang/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </div>
            {/* Dropdown Mobile */}
            {isSosialMediaOpen ? (
              <div className="mt-[1rem] flex flex-col gap-2 text-[14px] font-medium">
                <a
                  href="https://twitter.com/OSISSMK8"
                  rel="noreferrer"
                  target="_blank"
                >
                  Twitter
                </a>
                <a
                  href="https://www.facebook.com/smknegeri8malang/?locale=id_ID"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/smkn8malang/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </div>
            ) : null}
          </div>
          {/* Lainnya */}
          <div>
            <div
              className="flex items-center justify-between"
              onClick={() => setIsLainnyaOpen((prev) => !prev)}
            >
              <h1 className="text-[14px] font-bold uppercase sm:text-[16px]">
                lainnya
              </h1>
              <img
                src="/assets/icons/arrow.png"
                alt="arrow"
                className={`transition-all hover:cursor-pointer ${
                  isLainnyaOpen ? "rotate-0" : "rotate-[180deg]"
                } sm:hidden`}
              />
            </div>
            <div className="mt-[1rem] hidden flex-col gap-2 text-[14px] font-medium sm:flex">
              <a href="">Lisensi</a>
              <a href="">Partnership</a>
            </div>
            {/* Dropdown Mobile */}
            {isLainnyaOpen ? (
              <div className="mt-[1rem] flex flex-col gap-2 text-[14px] font-medium">
                <a href="">Lisensi</a>
                <a href="">Partnership</a>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="bg-primary-500 border-primary-700 border-t py-[20px] text-center text-[12px] tracking-[1.2px] sm:text-[14px]">
        COPYRIGHT © 2023 — Airnas | Asta Arkananta{" "}
        <span className="block sm:inline-block">SMKN 8 MALANG</span>
      </div>
    </footer>
  );
};

export default Footer;
