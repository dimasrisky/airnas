import React from "react";

const Content = () => {
  return (
    <section className="mt-[150px] px-[5%] xl:mt-[200px] xl:px-[14%] max-w-[1440px] mx-auto">
      <h1 className="text-primary-500 text-center text-[36px] font-extrabold">
        Tentang Kami
      </h1>
      <div className="mt-[2rem] flex flex-col gap-3 xl:mt-[1rem]">
        <h1 className="text-primary-700 text-[20px] font-bold sm:text-[28px]">
          Tentang Airnas
        </h1>
        <div className="flex flex-col items-start gap-[1rem] xl:flex-row">
          <img
            src="/assets/svg/logo.svg"
            alt="logo-airnas"
            className="w-[50px] self-center sm:w-[80px] xl:w-[100px]"
          />
          <p className="text-primary-950 text-justify text-[14px] font-medium leading-[170%] sm:text-[18px]">
            Airnas adalah aplikasi cuaca yang dirancang khusus untuk Indonesia.
            Aplikasi ini memberikan informasi cuaca yang akurat dan terkini
            untuk seluruh wilayah Indonesia mulai dari Sabang sampai Merauke.
            Anda dapat menggunakan aplikasi Airnas untuk merencanakan kegiatan
            di ruangan terbuka, pertanian, dan berpergian dengan keluarga.
          </p>
        </div>
        <p className="text-primary-950 text-justify text-[14px] font-medium leading-[170%] sm:text-[18px]">
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
        <h1 className="text-primary-700 text-[20px] font-bold sm:text-[28px]">
          Tentang Tim ASTADEV
        </h1>
        <div className="flex flex-col items-start gap-[1rem] xl:flex-row">
          <img
            src="/assets/icons/logo-sekolah.png"
            alt="logo-sekolah"
            className="w-[50px] sm:w-[80px] xl:w-[100px]"
          />
          <p className="text-primary-950 text-justify text-[14px] font-medium leading-[170%] sm:text-[18px]">
            Tim ASTADEV merupakan tim perwakilan dari SMK NEGERI 8 MALANG, Jawa
            Timur. Tim ini dikirim untuk mengikuti lomba Website Design yang
            diselenggarakan oleh Universitas Dinamika Surabaya.
          </p>
        </div>
        <p className="text-primary-950 text-justify text-[14px] font-medium leading-[170%] sm:text-[18px]">
          Tim ASTADEV beranggotakan dua orang yang terdiri dari Dimas Rizky
          Maulana Ahmad ( XI RPL C ) sebagai Ketua tim serta Foreno Faisal Fahri
          ( X RPL A ) sebagai anggota tim. Kami berdua Berasal dari jurusan
          Rekayasa Perangkat Lunak (RPL)
        </p>
      </div>
    </section>
  );
};

export default Content;
