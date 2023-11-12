import React from "react";

const LoginMethodButton = ({ text, icon }) => {
  return (
    <button className="loginMtdBtn text-primary-950 flex w-full cursor-pointer items-center justify-center gap-[10px] rounded-xl bg-white py-[15px] text-[16px] font-semibold hover:bg-gray-50">
      <img
        src={icon}
        alt="icon"
        className="h-[30px] w-[30px] sm:h-[40px] sm:w-[40px]"
      />
      {text}
    </button>
  );
};

export default LoginMethodButton;
