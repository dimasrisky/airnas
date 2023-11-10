import React, { useState } from 'react'
import Loading from '../components/Loading'
import WeatherResult from '../components/WeatherResult'

const Weather = ({ dataWeather }) => {

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
      { isLoading ? <Loading /> : <WeatherResult dataWeather={dataWeather} /> }
    </>
  )
}

export default Weather