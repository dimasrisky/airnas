import React from 'react'
import { Link } from 'react-router-dom'

const Home = ({ fetchData }) => {
  return (
    <>
        {/* Blur Blur an */}
        <div className='w-[20%] h-[20%] bg-primary-red rounded-full blur-[10rem] fixed bottom-0 left-0'></div>
        <div className='w-[20%] h-[20%] bg-primary-red rounded-full blur-[10rem] fixed top-0 right-0'></div>

        <div className='w-[100vw] h-[100vh] flex justify-center items-center font-plusjkt'>
            {/* Navbar */}
            <nav className='w-[80%] mx-auto flex justify-between items-center absolute top-5'>
                <div className='flex items-center gap-3'>
                    <img src="/icons/logo.png" alt="logo" />
                    <h3 className='font-bold text-lg'>Airnas</h3>
                </div>
                <div className='flex items-center gap-3'>
                    <img src="/icons/location.png" alt="location" />
                    <div>
                        <p className='text-[0.7rem]'>Lokasi</p>
                        <p className='text-sm text-primary-red font-semibold'>{`${fetchData?.country}, ${fetchData?.city}`}</p>
                    </div>
                </div>
            </nav>
            {/* Main Hero */}
            <div className='text-center'>
                <h1 className='uppercase font-extrabold text-[3rem]'>cek informasi cuaca <br /> di <span className='text-primary-red'>daerahmu</span></h1>
                <p className=' text-[0.7rem] max-w-[30rem] mx-auto'>Cuaca Panas Ekstrem selalu terjadi belakangan hari ini. Temukan data mengenai suhu, tingkat polusi udara dan informasi cuaca lainnya dengan mudah dan cepat. Tetap mendapatkan data dan informasi terbaru dengan kami, Airnas.</p>
                <Link to='/weather'>
                    <button to='/weather' className='mt-[2rem] py-[0.7rem] px-[2rem] bg-primary-red shadow-2xl shadow-primary-red font-semibold text-white rounded-[0.5rem] text-[0.8rem]'>Cek Tempatku</button>
                </Link>
            </div>
        </div>
    </>
  )
}

export default Home