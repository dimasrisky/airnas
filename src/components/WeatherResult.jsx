import React from 'react'
import { Link } from 'react-router-dom'
import InformationsCard from '../components/InformationsCard'

const WeatherResult = ({ dataWeather }) => {

    // ngambil tanggal sekarang
  const getDateToday = new Date()
  const formattedDate = getDateToday.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' })

  // data cuaca
  const { ic, ws, pr, hu, tp } = dataWeather.current.weather
  const { country, city, state } = dataWeather
  const { aqius } = dataWeather.current.pollution

  return (
    <>
     <div className='w-[100vw] h-[100vh] flex justify-center items-center relative'>
      {/* Navbar */}
       <nav className='w-[80%] flex justify-between items-center absolute top-5'>
          <div className='flex items-center gap-3'>
            <img src="/icons/logo.png" alt="logo" />
            <h3 className='font-bold text-lg'>Airnas</h3>
          </div>
          <Link to='/' className='py-[0.4rem] px-[2rem] bg-primary-red shadow-2xl shadow-primary-red font-semibold text-white rounded-[0.5rem] text-[0.8rem]'>Kembali</Link>
        </nav>

        {/* Hero */}
        <div className="w-[70%] bg-[url('/icons/hero.png')]  bg-center bg-no-repeat bg-cover rounded-[1rem] text-white">
          <div className='w-full bg-black bg-opacity-20 flex justify-between items-center rounded-[1rem] p-[3rem]'>
            {/* data sisi kiri */}
            <div className='flex flex-col items-center gap-6 text-center'>
              <div>
                <h1 className='font-semibold text-[2.5rem]'>{city}</h1>
                <h4 className='text-[0.8rem] tracking-wide'>{`${state}, ${country}`}</h4>
                <p className='text-[0.8rem]'>{ formattedDate }</p>
              </div>
              <img src={`http://openweathermap.org/img/wn/${ic}.png`} className='scale-[250%]'/>
              <h1 className='font-semibold text-[1.8rem]'>{tp}℃ </h1>
            </div>

            {/* data sisi kanan */}
            <div className='w-[60%] flex flex-col gap-4'>
              <h1 className='font-semibold text-xl'>Informasi Cuaca Hari ini</h1>
              <div className='flex flex-col gap-3'>
                <div className='flex gap-3'>
                  <InformationsCard icon='winds.png' title='Wind Speed' value={`${ws}m/s`} />
                  <InformationsCard icon='airquality.png' title='Air Quality US' value={aqius} />
                </div>
                <div className='flex gap-3'>
                  <InformationsCard icon='pressure.png' title='Pressure' value={`${pr} hpa`} />
                  <InformationsCard icon='humidity.png' title='Humidity' value={`${hu}%`} />
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default WeatherResult