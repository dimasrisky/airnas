import React from "react";

const DataFactorCard = ({ icon, title, description, bigger, className }) => {
  return (
    <div className={`flex ${bigger ? `scale-100 xl:scale-110` : null} ${className} max-h-fit max-w-[274px] flex-col items-center justify-center gap-2 rounded-[0.3rem] bg-[#FCF5F4] px-8 py-6 sm:h-[324px]`}>
      <img
        src={`/assets/icons/${icon}`}
        alt="icon"
        className="mx-auto w-[60px] sm:w-[80px]"
      />
      <h1 className="text-[16px] font-bold text-[#733429] sm:text-[16px]">
        {title}
      </h1>
      <p className="text-[12px] font-medium text-[#733429] sm:text-[14px]">
        {description}
      </p>
    </div>
  );
};

export default DataFactorCard;
