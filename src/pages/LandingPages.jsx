import { useState } from 'react'
import { Link } from 'react-router-dom'
import DataFactorCard from '../components/DataFactorCard'
import Article from '../components/Article'
import StatisticData from '../components/StatisticData'

const LandingPages = ({ dataWeather }) => {
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
                                <a href="#" className='hover:text-primary-500 transition-all duration-200'>Home</a>
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
                    <a href="#" className='hover:text-primary-500 transition-all duration-200'>Home</a>
                    <a href="#penyebab" className='hover:text-primary-500 transition-all duration-200'>Penyebab</a>
                    <a href="#statistik" className='hover:text-primary-500 transition-all duration-200'>Statistik</a>
                    <a href="#ringkasan" className='hover:text-primary-500 transition-all duration-200'>Ringkasan</a>
                    <a href="#berita" className='hover:text-primary-500 transition-all duration-200'>Berita</a>
                </div>
            </div>
        </nav>

        {/* Hero Section */}
        <main className='w-[85%] mx-auto text-center flex flex-col xl:flex-row-reverse xl:items-center xl:justify-between gap-[1rem] mt-[6rem] xl:mt-[8rem]'>
            <img src="/assets/img/hero-image.png" alt="hero-image" className='xl:w-[50%]'/>
            <div className='flex flex-col gap-3 xl:w-[50%]'>
                <div className='w-[15rem] mx-auto xl:mx-0 rounded-full text-primary-600 font-semibold py-[0.1rem] bg-primary-100 text-[0.7rem]'>Bencana Alam yang Tak Bisa Diabaikan</div>
                <h1 className='text-primary-900 text-[1.4rem] sm:text-[2.2rem] xl:text-[1.8rem] xl:text-left font-extrabold'>Suhu Ekstrem, Ancaman <br /> Nyata <span className='text-primary-600'>Bagi Kehidupan</span> <br /> Makhluk Hidup</h1>
                <p className='text-left font-medium text-primary-800 text-[0.6rem] sm:text-[1rem] xl:text-[0.7rem] px-2 xl:px-0'>Cuaca Panas Ekstrem selalu terjadi belakangan hari ini. Temukan data mengenai suhu, tingkat polusi udara dan informasi cuaca lainnya dengan mudah dan cepat. Tetap mendapatkan data dan informasi terbaru dengan kami, Airnas.</p>
                <Link to='/weather-home' className='bg-primary-500 mx-auto xl:mx-0 w-[7rem] sm:w-[10rem] font-bold text-white py-2 text-[0.7rem] sm:text-[0.8rem] rounded-md uppercase mt-[1rem]'>coba sekarang</Link>
            </div>
        </main>

        {/* Data Section */}
        <main className='w-[85%] mx-auto text-center bg-primary-100 rounded-[1rem] mt-[6rem] py-[2rem]' id='penyebab'>
            <div className='scale-[125%]'>
                <h4 className='uppercase font-semibold text-[0.7rem] text-primary-500'>penyebab cuaca ekstrem</h4>
                <h1 className='text-primary-900 font-extrabold text-[1.2rem] xl:text-[1.3rem]'>Data Yang Didapatkan</h1>
                <h5 className='text-primary-800 font-semibold text-[0.6rem]'>Faktor Penyebab Suhu Ekstrem di Indonesia</h5>
            </div>
            <div className='flex flex-wrap justify-center items-center gap-4 xl:gap-1 mt-[2rem] px-[1.3rem]'>
                <DataFactorCard icon={'el-nino.png'} title={'EL Nino'} description={'Fenomena El Nino dapat menyebabkan perubahan suhu di Indonesia. El Nino menyebabkan suhu di Indonesia meningkat.'} />
                <DataFactorCard icon={'deforestasi.png'} title={'Deforestasi'} description={'Deforestasi menyebabkan hilangnya vegetasi yang menyerap karbon dioksida. Hal ini menyebabkan suhu di Indonesia meningkat.'} />
                <DataFactorCard icon={'perubahan-iklim.png'} title={'Perubahan Iklim'} description={'Perubahan iklim menyebabkan suhu rata-rata di Bumi meningkat. Hal ini menyebabkan suhu di Indonesia juga meningkat.'} />
            </div>
        </main>

        {/* Statistik section */}
        <main className='w-[85%] mx-auto mt-[6rem] xl:flex xl:justify-center xl:mx-0' >
            <img src="/assets/img/statistic.png" className='mx-auto' alt="statictic" id='statistik'/>
            <div className='text-center xl:text-left mt-[1rem] sm:mt-[3rem] xl:mt-0 sm:scale-[]'>
                <h3 className='uppercase text-primary-600 font-semibold text-md'>statistik</h3>
                <h1 className='font-extrabold text-primary-900 text-[1.4rem] sm:text-[1.6rem] mt-[0.5rem]'>Statistik Dampak Suhu <br /> Ekstrem di Indonesia</h1>
                <div className='mt-[0.5rem] flex flex-col gap-4 items-center sm:text-left'> 
                    <div className='flex flex-col sm:flex-row gap-7'>
                        <StatisticData text1='Suhu udara tertinggi' text2='mencapai angka' value='39°C'/>                 
                        <StatisticData text1='Permukaan air laut' text2='Indonesia meningkat' value='62,3 mm'/>                 
                    </div>
                    <div className='flex flex-col sm:flex-row gap-7'>
                        <StatisticData text1='Suhu udara tahunan' text2='meningkat hingga' value='0,2°C'/>                 
                        <StatisticData text1='Jumlah wilayah sekitar' text2='mengalami kekeringan' value='15+'/>
                    </div>
                </div>
            </div>
        </main>

        {/* Overview Section */}
        <main className='w-[85%] mx-auto bg-primary-100 mt-[6rem] px-[1.7rem] pt-[4rem] pb-[2rem] rounded-[2rem] flex flex-col xl:flex-row-reverse xl:items-center gap-5 relative' id='ringkasan'>
            <img src="/assets/icons/logo.png" alt="logo" className='w-[2rem] sm:w-[2.5rem] absolute top-4 left-4'/>
            <img src="/assets/img/airnas-preview.png" alt="airnas-overview" />
            <div className='flex flex-col gap-3'>
                <h1 className='font-extrabold text-primary-900 sm:text-[1.3rem]'>Airnas - Pengecek Cuaca</h1>
                <p className='font-medium text-primary-800 text-[0.6rem] sm:text-[0.8rem]'>Airnas adalah aplikasi web yang berfungsi untuk mengecek cuaca saat ini di daerah pengguna. Aplikasi ini sangat mudah digunakan, cukup dengan menekan tombol "Cek Tempatku", maka secara otomatis akan keluar data cuaca di daerah kalian, termasuk suhu, kelembaban, kecepatan angin, dan kualitas udara.</p>
                <Link to='/weather-home' className='bg-primary-500 mx-auto xl:mx-0 w-[7rem] sm:w-[9rem] font-bold text-white text-center py-2 text-[0.7rem] rounded-md mt-[1rem]'>Coba Sekarang</Link>
            </div>
        </main>

        {/* NEWS Section */}
        <main className='w-[85%] mx-auto mt-[6rem] flex flex-col gap-6 xl:gap-0' id='berita'>
            <div className='text-center xl:text-left'>
                <h4 className='uppercase text-primary-500 font-semibold text-[0.9rem]'>lihat berita terbaru</h4>
                <h1 className='text-primary-900 font-extrabold text-[1.4rem] sm:text-[1.7rem] xl:text-[2rem]'>Berita & Artikel Terbaru</h1>
                <p className='text-primary-800 font-semibold text-[0.5rem] sm:text-[0.8rem] xl:max-w-[50%]'>Baca dan update selalu mengenai berita pemanasan global, kenaikan suhu ekstrem yang terjadi dan lainnya</p>
            </div>
            <div className='flex flex-col xl:flex-row xl:justify-center mt-[1rem] xl:mt-[2rem] gap-[2rem] xl:gap-[5rem]'>
                <div className='mx-auto xl:mx-0 flex flex-col gap-[0.5rem] xl:w-[50%]'>
                    <img src="/assets/img/main-article.png" alt="main-article" />
                    <a href='https://regional.kompas.com/read/2023/10/03/153430878/cuaca-panas-di-babel-capai-38-derajat-celsius-pekerja-disarankan-pakai?page=all' className=' text-primary-800 font-semibold text-[1rem] sm:text-[1.1rem] leading-5 sm:leading-6'>Cuaca Panas di Babel Capai 38 Derajat Celsius, Pekerja Disarankan Pakai Pelindung</a>
                    <p className='font-medium text-[#A54230] text-[0.6rem] sm:text-[0.7rem]'>Paparan terik matahari diperkirakan mencapai 38 derajat celsius pada saat siang hari. Kepala Badan Penanggulangan Bencana Daerah (BPBD) Bangka Belitung Mikron Antariksa mengatakan, fenomena suhu panas terik terjadi karena dipicu sejumlah faktor kondisi dinamika atmosfer.</p>
                </div>
                <div className='flex flex-col xl:justify-between gap-6 xl:w-[45%]'>
                    <Article img={'article-1.png'} title={'Apa Penyebab Cuaca Panas Ekstrem di Indonesia?'} date={'02 Oktober 2023'} articleLink={'https://www.kompas.com/sains/read/2023/10/02/150000323/apa-penyebab-cuaca-panas-ekstrem-di-indonesia-'}/>
                    <Article img={'article-2.png'} title={'Bagaimana El Nino Dapat Memengaruhi Cuaca Ekstrem dan Gelombang Panas?'} date={'05 Agustus 2023'} articleLink={'https://www.kompas.com/sains/read/2023/08/05/080000323/bagaimana-el-nino-dapat-memengaruhi-cuaca-ekstrem-dan-gelombang-panas-'}/>
                    <Article img={'article-3.png'} title={'Waspadai Ancaman Dehidrasi dan Heatstroke di Tengah Cuaca Panas!'} date={'18 Oktober 2023'} articleLink={'https://health.kompas.com/read/23J18144500868/berbahaya-bagi-tubuh-waspadai-ancaman-dehidrasi-dan-heatstroke-di-tengah-cuaca'}/>
                    <Article img={'article-4.png'} title={'Cuaca Tak Menentu, Cabai Merah di Deli Serdang Terancam Gagal Panen Raya'} date={'06 Oktober 2023'} articleLink={'https://medan.kompas.com/read/2023/10/06/134618778/cuaca-tak-menentu-cabai-merah-di-deli-serdang-terancam-gagal-panen-raya'}/>
                </div>
            </div>
            <a href='https://www.kompas.com/tag/cuaca-ekstrem' className='bg-primary-500 mx-auto w-[8rem] font-bold text-white text-center py-2 text-[0.6rem] rounded-[0.4rem] mt-[1rem] xl:mt-[3rem] btn-shadow'>Lihat Selengkapnya</a>
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
                            <Link to='/about-page'>Tentang Kami</Link>
                            <a href="">Kebijakan Privasi</a>
                            <a href="">Syarat dan ketentuan</a>
                            <a href="">Bantuan</a>
                        </div>

                        {/* Dropdown Mobile */}
                        {isPerusahaanDropdownOpen? (
                            <div className='flex sm:hidden flex-col font-semibold text-[0.6rem] gap-2 mt-[1rem]'>
                                <Link to='/about-page'>Tentang Kami</Link>
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

export default LandingPages