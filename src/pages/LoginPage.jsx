import React from "react";
import { Link } from "react-router-dom";
import LoginMethodButton from "../components/LoginMethodButton";
import UserInput from "../components/UserInput";

const LoginPage = () => {
  return (
    <section className="min-h-screen xl:flex">
      <div className="flex flex-col gap-[35px] px-[10%] py-[4%] sm:py-[6%] xl:w-[50%] xl:px-[8%] xl:py-[6%] xl:pr-[89px]">
        <Link to="/" className="flex items-center gap-[10px]">
          <img src="/assets/icons/logo.png" alt="logo" className="h-[50px] w-[50px] " />
          <h1 className="text-2xl font-bold">Airnas</h1>
        </Link>
        <div className="flex flex-col gap-[50px]">
          <div className="flex max-w-[330px] flex-col gap-[10px] leading-tight xl:max-w-[521px]">
            <h1 className="text-primary-600 text-[26px] font-extrabold">Masuk Ke Akun Kamu</h1>
            <p className="text-primary-800 text-[16px] font-medium">Selamat datang kembali! Pilih metode untuk login</p>
          </div>
          <div className="flex flex-col gap-[20px] xl:flex-row">
            <LoginMethodButton text="Google" icon="/assets/svg/google.svg" />
            <LoginMethodButton text="Facebook" icon="/assets/svg/facebook.svg" />
          </div>
        </div>
        <div className="flex items-center gap-[7px] text-center sm:gap-[33px]">
          <div className="bg-primary-950 h-[1px] w-full"></div>
          <p className="text-primary-800 min-w-fit text-[12px] font-medium sm:text-[20px]">atau masuk dengan</p>
          <div className="bg-primary-950 h-[1px] w-full"></div>
        </div>
        <div className="flex flex-col gap-[28px]">
          <UserInput title="Email" type="email" placeholder="contohemail123@contoh.com" />
          <UserInput title="Kata Sandi" type="password" />
          <Link to="/landing-page">
            <button className="bg-primary-500 loginBtnShadow hover:bg-primary-600 w-full rounded-[10px] py-[15px] text-[20px] font-semibold text-white transition-all">Masuk</button>
          </Link>
        </div>
        <p className="text-primary-800 text-center text-[18px] font-medium ">Belum punya akun?{" "}
          <Link to="/register-page" className="text-primary-500 hover:text-primary-600 font-bold transition-all">Daftar</Link>
        </p>
      </div>
      <div className="bg-primary-500 hidden flex-col items-center justify-center gap-[50px] text-white xl:flex xl:min-h-screen xl:w-[50%] xl:px-[91px]">
        <img src="/assets/icons/Illus.png" alt="Illustration" />
        <h1 className="text-[32px] font-semibold">Setiap detik yang dihabiskan memeriksa aplikasi cuaca adalah investasiuntuk menghindari kejutan tak terduga dari langit.</h1>
      </div>
    </section>
  );
};

export default LoginPage;