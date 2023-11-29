import React from "react";

const CardData = ({ icon, title, data }) => {
  return (
    <div className="cardShadow max-w-[140px] rounded-[10px] bg-white sm:max-w-[200px] sm:rounded-[15px]">
      <div className="flex items-center gap-[10px] py-[16px] pl-[10px] pr-[8px] min-[350px]:gap-[15px] min-[350px]:pl-[16px] sm:gap-[25px] sm:py-[19px] sm:pl-[22px] sm:pr-[15px] ">
        <img
          src={icon}
          alt="icon"
          className="h-[20px] min-[350px]:w-[20px] sm:h-[30px] sm:w-[30px] "
        />
        <div className="flex flex-col gap-[5px]">
          <p className="text-[9px] font-semibold text-[#733429] sm:text-[12px]">
            {title}
          </p>
          <h6 className="text-primary-700 text-[16px] font-bold sm:text-[24px]">
            {data}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default CardData;
