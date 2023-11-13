import React from "react";

const InformationsCard = ({ icon, title, data }) => {
  return (
    <div className="cardShadow w-[148px] rounded-[10px] bg-white sm:w-[193px] sm:rounded-[15px]">
      <div className="flex items-center gap-[15px] py-[16px] pl-[16px] sm:gap-[25px] sm:py-[19px] sm:pl-[22px] ">
        <img
          src={icon}
          alt="icon"
          className="h-[20px] w-[20px] sm:h-[30px] sm:w-[30px] "
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

export default InformationsCard;