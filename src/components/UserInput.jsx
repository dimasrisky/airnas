import React from "react";

const UserInput = ({ title, type, placeholder = "" }) => {
  return (
    <div className="flex flex-col gap-[5px]">
      <p className="text-primary-800 text-[20px] font-semibold ">{title}</p>
      <input
        type={type}
        placeholder={placeholder}
        className="bg-primary-100 text-primary-800 placeholder:text-primary-800 w-full rounded-[5px] px-[18px] py-[18px] text-[16px] font-semibold outline-none placeholder:text-[16px] placeholder:font-semibold placeholder:opacity-50"
      />
    </div>
  );
};

export default UserInput;
