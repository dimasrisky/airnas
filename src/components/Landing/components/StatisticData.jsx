import React from "react";

const StatisticData = ({ text1, text2, value }) => {
  return (
    <div>
      <h4 className="text-primary-800 text-[16px] font-semibold sm:text-[18px]">
        {text1}
        <br />
        {text2}
      </h4>
      <h1 className="text-primary-700 text-[32px] font-extrabold sm:text-[44px]">
        {value}
      </h1>
    </div>
  );
};

export default StatisticData;
