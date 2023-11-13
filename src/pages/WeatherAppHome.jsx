import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button';

const WeatherAppHome = ({ dataWeather }) => {
    const { country, city } = dataWeather || {};

    return (
        <>
        {/* Blur Bluran bulet oranye */}
        <div className='w-[20%] h-[20%] bg-primary-500 rounded-full blur-[10rem] fixed bottom-0 left-0'></div>
        <div className='w-[20%] h-[20%] bg-primary-500 rounded-full blur-[10rem] fixed top-0 right-0'></div>

        <nav className="fixed flex h-[60px] w-full items-center justify-between px-[4%] sm:h-[100px] sm:px-[10%]">
            <Link to="/weather-home">
                <div className="flex items-center gap-[10px]">
                    <img src="/assets/icons/logo.png" alt="logo" className="h-[30px] w-[30px] sm:h-[50px] sm:w-[50px] "/>
                    <h1 className="text-[16px] font-bold sm:text-[24px]">Airnas</h1>
                </div>
            </Link>
            <div className="flex items-center gap-[12px]">
                <img src="/assets/icons/location.png" alt="location" className="h-[30px] w-[30px] sm:h-[48px] sm:w-[48px] " />
                <div className="flex flex-col gap-[2px]">
                    <p className="text-primary-950 text-[10px] font-normal sm:text-[12px] ">Lokasi</p>
                    <p className="text-primary-600 text-[12px] font-bold sm:text-[16px]">{`${country || "Loading"}, ${city || "Loading"}`}</p>
                </div>
            </div>
        </nav>
        <section className="flex min-h-screen flex-col items-center justify-center gap-[10px] px-[4%] sm:px-[10%] lg:mx-auto lg:max-w-[650px] lg:px-0 overflow-hidden">
            <h1 className="text-center text-[30px] font-extrabold leading-tight sm:text-[48px] lg:max-w-[588px]">CEK INFORMASI CUACA DI{" "}<span className="text-primary-600">DAERAHMU</span></h1>
            <p className="text-center text-[14px] font-medium text-[#000000b3] sm:text-[16px]">Cuaca Panas Ekstrem selalu terjadi belakangan hari ini. Temukan data mengenai{" "}<span className="font-semibold">suhu, tingkat polusi udara dan informasi cuaca</span>{" "}lainnya dengan mudah dan cepat. Tetap mendapatkan data dan informasi terbaru dengan kami, <span className="font-semibold">Airnas.</span></p>
            <Button link="/weather-results" className={`mt-[10px] sm:mt-[20px] hover:bg-primary-600 transition-all`}>Cek Tempatku</Button>
        </section>
    </>
    )
}

export default WeatherAppHome