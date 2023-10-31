import React from 'react'
import { Link } from 'react-router-dom'
import InformationsCard from '../components/InformationsCard'

const Weather = ({ fetchData }) => {

  // Ngambil tanggal
  const getDateToday = new Date();
  const formattedDate = getDateToday.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' });

  return (
    <>
    <div className='w-[100vw] h-[100vh] flex justify-center items-center relative'>
       <nav className='w-[80%] flex justify-between items-center absolute top-5'>
          <div className='flex items-center gap-3'>
            <img src="/icons/logo.png" alt="logo" />
            <h3 className='font-bold text-lg'>Airnas</h3>
          </div>
          <Link to='/' className='py-[0.4rem] px-[2rem] bg-primary-red shadow-2xl shadow-primary-red font-semibold text-white rounded-[0.5rem] text-[0.8rem]'>Kembali</Link>
        </nav>
        <div className="w-[70%] bg-[url('/icons/hero.png')]  bg-center bg-no-repeat bg-cover rounded-[1rem] text-white">
          <div className='w-full bg-black bg-opacity-20 flex justify-between items-center rounded-[1rem] p-[3rem]'>

            {/* Sisi Kiri */}
            <div className='flex flex-col items-center gap-6 text-center'>
              <div>
                <h1 className='font-semibold text-[2rem]'>{fetchData.city}</h1>
                <h4 className='text-[0.6rem] tracking-wide'>{`${fetchData.state}, ${fetchData.country}`}</h4>
                <p className='text-[0.6rem]'>{formattedDate}</p>
              </div>
              <img src={`http://openweathermap.org/img/wn/${fetchData.current.weather.ic}.png`} className='scale-[300%]'/>
              <h1 className='font-semibold text-[1.7rem]'>29℃ </h1>
            </div>

            {/* Sisi kanan */}
            <div className='w-[70%] flex flex-col gap-4'>
              <h1 className='font-semibold text-xl'>Informasi Cuaca Hari ini</h1>
              <div className='flex flex-col gap-3'>
                <div className='flex gap-3'>
                  <InformationsCard icon='winds.png' title='Wind Speed' value={`${fetchData.current.weather.ws}m/s`} />
                  <InformationsCard icon='airquality.png' title='Air Quality US' value={fetchData.current.pollution.aqius} />
                </div>
                <div className='flex gap-3'>
                  <InformationsCard icon='pressure.png' title='Pressure' value={`${fetchData.current.weather.pr} hpa`} />
                  <InformationsCard icon='humidity.png' title='Humidity' value={`${fetchData.current.weather.hu}%`} />
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Weather