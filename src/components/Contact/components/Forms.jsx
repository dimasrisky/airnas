import React from "react";

const Forms = () => {
  return (
    <section className="mx-auto mt-[150px] flex max-w-[1440px] flex-col gap-[28px] px-[5%] sm:gap-[40px] xl:mt-[200px] xl:px-[14%]">
      <h1 className="text-primary-500 text-center text-[36px] font-extrabold">
        Hubungi Kami
      </h1>
      <p className="text-primary-950 text-center text-[14px] font-medium leading-[170%] sm:text-[18px]">
        Tanyakan, beri masukan, atau beri tahu kami tentang pengalaman Anda!
        Jangan ragu untuk menghubungi kami melalui formulir ini untuk
        pertanyaan, saran, atau bantuan lebih lanjut. Kami siap membantu!
      </p>

      {/* Form */}
      <div className="flex flex-col gap-[20px]">
        <div className="flex flex-col gap-[10px] sm:flex-row sm:gap-[20px]">
          <input
            type="text"
            placeholder="Nama"
            className="border-primary-500 text-primary-500 placeholder:text-primary-500 w-full rounded-[10px] border px-[20px] py-[15px] text-[20px] font-normal outline-none transition-all placeholder:opacity-60"
          />
          <input
            type="email"
            placeholder="Email"
            className="border-primary-500 text-primary-500 placeholder:text-primary-500 w-full rounded-[10px] border px-[20px] py-[15px] text-[20px] font-normal outline-none transition-all placeholder:opacity-60"
          />
        </div>
        <textarea
          cols="30"
          rows="10"
          placeholder="Pesan"
          className="border-primary-500 text-primary-500 placeholder:text-primary-500 w-full rounded-[10px] border px-[20px] py-[15px] text-[20px] font-normal outline-none transition-all placeholder:opacity-60"
        ></textarea>
        <button
          className="bg-primary-500 hover:bg-primary-600 w-full rounded-[10px] py-[15px] text-[20px] font-semibold text-white"
        >
          Kirim
        </button>
      </div>
    </section>
  );
};

export default Forms;
