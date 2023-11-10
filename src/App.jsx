import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Weather from './pages/Weather'

const App = () => {

  // Fetching API ketika user pertama mengunjungi aplikasi/website, kemudian hasil dari fetch akan ditaruh kedalam state dataWeather
  // Kalo penasaran isinya apa bisa di console.log(dataWeather)
  const [dataWeather, setDataWeather] = useState()
  useEffect(() => {
    fetch(`http://api.airvisual.com/v2/nearest_city?key=1b207dba-b246-40a5-9be4-c2c4abd3138d`)
      .then(res => res.json())
      .then(weatherData => setDataWeather(weatherData.data))
  }, [])

  return (
   <Router>
    <Routes>
      <Route path='/' element={ <Home dataWeather={dataWeather} /> } /> {/* Router untuk ke halaman Home atau halaman awal dari aplikasi */}
      <Route path='/weather' element={ <Weather dataWeather={dataWeather} /> } /> {/* Router untuk ke halaman Weather untuk menampilkan informasi data cuaca */}
    </Routes>
   </Router>
  )
}

export default App
