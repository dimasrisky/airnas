import React from "react";
import { Link } from "react-router-dom";
import LoginMethodButton from "../components/LoginMethodButton";
import UserInput from "../components/UserInput";

const RegisterPage = () => {
  return (
    <section className="min-h-screen xl:flex">
      <div className="flex flex-col gap-[35px] px-[10%] py-[4%] sm:py-[6%] xl:w-[50%] xl:px-[8%] xl:py-[2%] xl:pr-[89px]">
        <Link to="/" className="flex items-center gap-[10px]">
          <img src="/assets/svg/logo.svg" alt="logo" className="h-[50px] w-[50px] "/>
          <h1 className="text-2xl font-bold">Airnas</h1>
        </Link>
        <div className="flex flex-col gap-[50px]">
          <div className="flex max-w-[330px] flex-col gap-[10px] leading-tight xl:max-w-[521px]">
            <h1 className="text-primary-600 text-[26px] font-extrabold">Bikin Akun Baru Kamu</h1>
            <p className="text-primary-800 text-[16px] font-medium">Silahkan pilih metode untuk membuat akun kamu</p>
          </div>
          <div className="flex flex-col gap-[20px] xl:flex-row">
            <LoginMethodButton text="Google" icon="/assets/svg/google.svg" />
            <LoginMethodButton text="Facebook" icon="/assets/svg/facebook.svg" />
          </div>
        </div>
        <div className="flex items-center gap-[7px] text-center sm:gap-[33px]">
          <div className="bg-primary-950 h-[1px] w-full"></div>
          <p className="text-primary-800 min-w-fit text-[12px] font-medium sm:text-[20px]">atau daftar dengan</p>
          <div className="bg-primary-950 h-[1px] w-full"></div>
        </div>
        <div className="flex flex-col gap-[10px]">
          <UserInput title="Nama" type="name" placeholder="Nama Lengkapmu" />
          <UserInput title="Email" type="email" placeholder="contohemail123@contoh.com"/>
          <UserInput title="Kata Sandi" type="password" />
        </div>
        <Link to="/landing">
          <button className="bg-primary-500 loginBtnShadow w-full rounded-[10px] py-[15px] text-[20px] font-semibold text-white">Daftar</button>
        </Link>
        <p className="text-primary-800 text-center text-[18px] font-medium ">Sudah punya akun?{" "}
          <Link to="/" className="text-primary-600 font-bold">Masuk</Link>
        </p>
      </div>
      <div className="bg-primary-500 hidden flex-col items-center justify-center gap-[50px] text-white xl:flex xl:min-h-screen xl:w-[50%] xl:px-[91px]">
        <img src="/assets/icons/Illus.png" alt="Illustration" />
        <h1 className="text-[32px] font-semibold">Setiap detik yang dihabiskan memeriksa aplikasi cuaca adalah investasiuntuk menghindari kejutan tak terduga dari langit.</h1>
      </div>
    </section>
  );
};

export default RegisterPage;