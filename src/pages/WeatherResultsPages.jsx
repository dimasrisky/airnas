import React, { useState } from 'react'
import Loading from '../components/Loading'
import ApplicationResult from '../components/ApplicationResult'

const WeatherResultsPage = ({ dataWeather }) => {

  // State untuk mengatur keadaan loading
  // Jika True maka loading berjalan dan jika false maka loading berhenti dan component Weather Result akan ditampilkan
  const [isLoading, setIsLoading ] = useState(true)

  // Durasi Loading yang dimana setelah 4 detik keaadaan loading menjadi false
  setTimeout(() => {
    setIsLoading(false)
  }, 4000)

  return (
    <>
      {/* Kondisi ketika user pertama masuk ke halaman */}
      <div className="bg-primary-500 absolute -left-[168px] top-[65px] -z-10 h-[250px] w-[250px] rounded-full opacity-40 blur-[125px] sm:-left-[190px] sm:top-[122px] sm:opacity-100 sm:blur-[175px] xl:top-[390px]"></div>
      <div className="bg-primary-500 absolute right-[295px] top-[535px] -z-10 h-[320px] w-[320px] rounded-full opacity-60 blur-[175px] sm:right-[675px] sm:top-[685px] sm:h-[250px] sm:w-[250px] sm:opacity-100 xl:-right-[199px] xl:top-[150px]"></div>
      { isLoading ? <Loading /> : <ApplicationResult dataWeather={dataWeather} /> }
    </>
  )
}

export default WeatherResultsPage