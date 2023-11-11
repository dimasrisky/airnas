import React from "react";

const InformationsCard = ({ icon, title, data }) => {
  return (
    <div className="w-[148px] sm:w-[193px] rounded-[10px] sm:rounded-[15px] bg-white">
      <div className="flex gap-[15px] sm:gap-[25px] py-[16px] sm:py-[19px] pl-[16px] sm:pl-[22px] ">
        <img src={icon} alt="icon" className="w-[20px] sm:w-[30px] h-[30px] sm:h-[30px] " />
        <div className="flex flex-col gap-[5px]">
          <p className="text-[9px] sm:text-[12px] font-semibold text-[#733429]">{title}</p>
          <h6 className="text-primary-700 font-semibold">{data}</h6>
        </div>
      </div>
    </div>
  );
};

export default InformationsCard;
