import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const AboutPage = ({ dataWeather }) => {
  // Navbar
  const [isNavOpen, setIsNavOpen] = useState(false)

  // Footer Dropdown Mobile Mode
  const [ isPerusahaanDropdownOpen, setIsPerusahaanDropdownOpen ] = useState(false) 
  const [ isSosialMediaOpen, setIsSosialMediaOpen ] = useState(false) 
  const [ isLainnyaOpen, setIsLainnyaOpen ] = useState(false)

  return (
    <>
      {/* Navbar */}
        <nav className='fixed top-0 z-50'>
            <div className='w-[100vw] border-b-2 py-[0.6rem] shadow-md bg-white'>
                <div className='w-[85%] mx-auto flex justify-between items-center'>
                    <div className='flex items-center gap-1'>
                        <img src="/assets/icons/logo.png" alt="logo" className='scale-75'/>
                        <h3 className='font-bold text-lg'>Airnas</h3>
                    </div>
                    <div className='hidden xl:flex items-center gap-3'>
                        <img src="/assets/icons/location.png" alt="location" />
                        <div>
                            <p className='text-[0.7rem]'>Lokasi</p>
                            <p className='text-[0.7rem] text-primary-500 font-semibold'>{`${dataWeather?.country}, ${dataWeather?.city}`}</p>
                        </div>
                        <Link to='/weather-home' className='bg-primary-500 text-white rounded-md px-4 py-2 text-[0.7rem] ml-[1.5rem] btn-shadow'>Coba Airnas</Link>
                    </div>

                    {/* nav-link For Mobile Mode */}
                    <div className='xl:hidden relative'>
                        <img src={`/assets/svg/${isNavOpen? 'x.svg' : 'burger-nav.svg'}`} alt="nav-icon" className='scale-125' onClick={() => setIsNavOpen(prev => !prev)} />
                        {isNavOpen? (
                            <div className='bg-white w-[7rem] text-[0.7rem] text-center flex flex-col shadow-lg px-2 py-4 rounded-[0.5rem] gap-3 absolute top-2 right-4'>
                                <Link to="/landing-page" className='hover:text-primary-500 transition-all duration-200'>Home</Link>
                                <a href="#penyebab" className='hover:text-primary-500 transition-all duration-200'>Penyebab</a>
                                <a href="#statistik" className='hover:text-primary-500 transition-all duration-200'>Statistik</a>
                                <a href="#ringkasan" className='hover:text-primary-500 transition-all duration-200'>Ringkasan</a>
                                <a href="#berita" className='hover:text-primary-500 transition-all duration-200'>Berita</a>
                                <Link to='/weather-home' className='bg-primary-500 text-white py-2 px-2 text-[0.6rem] rounded-md'>Coba Airnas</Link>
                            </div>
                        ) : ''}
                    </div>
                </div>
            </div>

            {/* nav-link desktop mode */}
            <div className='hidden xl:flex bg-white w-[100vw] border-b-2 py-[1rem] shadow-md'>
                <div className='w-[85%] mx-auto flex gap-[2rem] text-[0.8rem]'>
                    <Link to="/landing-page" className='hover:text-primary-500 transition-all duration-200'>Home</Link>
                    <a href="#penyebab" className='hover:text-primary-500 transition-all duration-200'>Penyebab</a>
                    <a href="#statistik" className='hover:text-primary-500 transition-all duration-200'>Statistik</a>
                    <a href="#ringkasan" className='hover:text-primary-500 transition-all duration-200'>Ringkasan</a>
                    <a href="#berita" className='hover:text-primary-500 transition-all duration-200'>Berita</a>
                </div>
            </div>
        </nav>

        {/* About Section */}
        <main className='w-[85%] xl:w-[70%] mx-auto mt-[6rem] xl:mt-[10rem]'>
            {/* Title */}
            <h1 className='text-primary-500 font-extrabold text-center text-[1.8rem]'>Tentang Kami</h1>
            {/* Tentang Airnas */}
            <div className="flex flex-col mt-[2rem] xl:mt-[1rem] gap-3">
                <h1 className='text-primary-700 font-bold text-[1.2rem]'>Tentang Airnas</h1>
                <div className='flex flex-col xl:flex-row gap-[1rem] items-start'>
                    <img src="/assets/icons/logo.png" alt="logo-airnas" className='w-[3rem] xl:w-[10rem]'/>
                    <p className='font-medium text-primary-950 text-[0.7rem]'>Airnas adalah aplikasi cuaca yang dirancang khusus untuk Indonesia. Aplikasi ini memberikan informasi cuaca yang akurat dan terkini untuk seluruh wilayah Indonesia mulai dari Sabang sampai Merauke. Anda dapat menggunakan aplikasi Airnas untuk merencanakan kegiatan di ruangan terbuka, pertanian, dan berpergian dengan keluarga.</p>
                </div>
                <p className='font-medium text-primary-950 text-[0.7rem]'>Kami memberikan banyak kelebihan bagi pengguna kami, diantaranya fitur-fitur yang lengkap dan mudah digunakan, data yang diberikan terpercaya, aplikasi gratis untuk semua dan lainnya. Airnas menggunakan data cuaca dari Airvisual atau IQAIR yang akurat dan terpercaya. Data cuaca ini diperbarui setiap 1 jam, sehingga Anda selalu mendapatkan informasi cuaca yang terkini.</p>
            </div>
            {/* Tentang AstaDev */}
            <div className="flex flex-col mt-[3rem] gap-3">
                <h1 className='text-primary-700 font-bold text-[1rem]'>Tentang Tim ASTADEV</h1>
                <div className='flex flex-col xl:flex-row gap-[1rem] items-start'>
                    <img src="/assets/icons/logo-sekolah.png" alt="logo-sekolah" className='w-[3rem] xl:w-[4.3rem]'/>
                    <p className='font-medium text-primary-950 text-[0.7rem]'>Airnas adalah aplikasi cuaca yang dirancang khusus untuk Indonesia. Aplikasi ini memberikan informasi cuaca yang akurat dan terkini untuk seluruh wilayah Indonesia mulai dari Sabang sampai Merauke. Anda dapat menggunakan aplikasi Airnas untuk merencanakan kegiatan di ruangan terbuka, pertanian, dan berpergian dengan keluarga.</p>
                </div>
                <p className='font-medium text-primary-950 text-[0.7rem]'>Kami memberikan banyak kelebihan bagi pengguna kami, diantaranya fitur-fitur yang lengkap dan mudah digunakan, data yang diberikan terpercaya, aplikasi gratis untuk semua dan lainnya. Airnas menggunakan data cuaca dari Airvisual atau IQAIR yang akurat dan terpercaya. Data cuaca ini diperbarui setiap 1 jam, sehingga Anda selalu mendapatkan informasi cuaca yang terkini.</p>
            </div>
        </main>

        {/* Footer */}
        <footer className='w-[100vw] bg-primary-500 mt-[6rem] text-white rounded-t-[2rem]'>
            <div className='w-[85%] xl:flex xl:flex-row xl:justify-between xl:items-baseline xl:gap-[3rem] mx-auto py-7'>
                <div className='flex flex-col gap-1'>
                    <img src="/assets/icons/logo.png" alt="logo" className='w-[2rem]'/>
                    <h1 className='font-bold'>Airnas</h1>
                    <p className='font-medium text-[0.6rem] xl:text-[0.7rem] opacity-70 max-w-[80%]'>Airnas adalah aplikasi web yang berfungsi untuk mengecek cuaca saat ini di daerah pengguna. Aplikasi tersedia secara gratis untuk semua pengguna. Aplikasi ini dapat diakses melalui browser web di komputer, laptop, tablet, dan smartphone.</p>
                </div>
                {/* Dropdown */}
                <div className='w-full flex flex-col sm:flex-row gap-[3rem] mt-[3rem]'>
                    {/* Perusahaan */}
                    <div>
                        <div className='flex justify-between items-center' onClick={() => setIsPerusahaanDropdownOpen(prev => !prev)}>
                            <h1 className='uppercase font-bold text-[0.8rem]'>perusahaan</h1>
                            <img src="/assets/icons/arrow.png" alt="arrow" className={`${isPerusahaanDropdownOpen? 'rotate-0' : 'rotate-[180deg]'} sm:hidden`} />
                        </div>
                        <div className='hidden sm:flex flex-col font-semibold text-[0.6rem] gap-2 mt-[1rem]'>
                            <a href="">Tentang Kami</a>
                            <a href="">Kebijakan Privasi</a>
                            <a href="">Syarat dan ketentuan</a>
                            <a href="">Bantuan</a>
                        </div>
                         {/* Dropdown Mobile */}
                        {isPerusahaanDropdownOpen? (
                            <div className='flex sm:hidden flex-col font-semibold text-[0.6rem] gap-2 mt-[1rem]'>
                                <Link to='/about-page' href="">Tentang Kami</Link>
                                <a href="">Kebijakan Privasi</a>
                                <a href="">Syarat dan ketentuan</a>
                                <a href="">Bantuan</a>
                            </div>
                        ) : ''}
                    </div>
                    {/* Sosial Media */}
                    <div>
                        <div className='flex justify-between items-center' onClick={() => setIsSosialMediaOpen(prev => !prev)}>
                            <h1 className='uppercase font-bold text-[0.8rem]'>Sosial Media</h1>
                            <img src="/assets/icons/arrow.png" alt="arrow" className={`${isSosialMediaOpen? 'rotate-0' : 'rotate-[180deg]'} sm:hidden`} />
                        </div>
                        <div className='hidden sm:flex flex-col font-semibold text-[0.6rem] gap-2 mt-[1rem]'>
                            <a href="">Twitter</a>
                            <a href="">Facebook</a>
                            <a href="">Instagram</a>
                        </div>
                         {/* Dropdown Mobile */}
                        {isSosialMediaOpen? (
                            <div className='flex flex-col font-semibold text-[0.6rem] gap-2 mt-[1rem]'>
                                <a href="">Twitter</a>
                                <a href="">Facebook</a>
                                <a href="">Instagram</a>
                            </div>
                        ) : ''}
                    </div>
                    {/* Lainnya */}
                    <div>
                        <div className='flex justify-between items-center' onClick={() => setIsLainnyaOpen(prev => !prev)}>
                            <h1 className='uppercase font-bold text-[0.8rem]'>lainnya</h1>
                            <img src="/assets/icons/arrow.png" alt="arrow" className={`${isLainnyaOpen? 'rotate-0' : 'rotate-[180deg]'} sm:hidden`} />
                        </div>
                        <div className='hidden sm:flex flex-col font-semibold text-[0.6rem] gap-2 mt-[1rem]'>
                            <a href="">Lisensi</a>
                            <a href="">Partnership</a>
                        </div>
                         {/* Dropdown Mobile */}
                        {isLainnyaOpen? (
                            <div className='flex flex-col font-semibold text-[0.6rem] gap-2 mt-[1rem]'>
                                <a href="">Lisensi</a>
                                <a href="">Partnership</a>
                            </div>
                        ) : ''}
                    </div>
                </div>
            </div>
            <div className='bg-primary-500 border-t border-primary-700 text-center text-[0.6rem] py-3'>COPYRIGHT © 2023 — Airnas | Asta Arkananta <br /> SMKN 8 MALANG</div>
        </footer>
    </>
  )
}

export default AboutPage