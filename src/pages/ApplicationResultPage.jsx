import React, { useState } from "react";
import Loading from "../components/ApplicationResult/components/Loading";
import ApplicationResult from "../components/ApplicationResult";

const ApplicationResultPage = ({ dataWeather }) => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 4000);

  return (
    <>
      <div className="bg-primary-500 absolute -left-[168px] top-[65px] -z-10 hidden h-[250px] w-[250px] rounded-full opacity-40 blur-[125px] sm:-left-[190px] sm:top-[122px] sm:opacity-100 sm:blur-[175px] lg:flex xl:top-[390px]"></div>
      <div className="bg-primary-500 absolute right-[295px] top-[535px] -z-10 hidden h-[320px] w-[320px] rounded-full opacity-60 blur-[175px] sm:right-[675px] sm:top-[685px] sm:h-[250px] sm:w-[250px] sm:opacity-100 lg:flex xl:-right-[199px] xl:top-[150px]"></div>
      {isLoading ? <Loading /> : <ApplicationResult fetchData={dataWeather} />}
    </>
  );
};

export default ApplicationResultPage;
