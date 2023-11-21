import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage"
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import WeatherAppHome from "./pages/WeatherAppHome";
import WeatherResultPage from "./pages/WeatherResultPages";

const App = () => {
  // Fetching API ketika user pertama mengunjungi aplikasi/website, kemudian hasil dari fetch akan ditaruh kedalam state dataWeather
  const [dataWeather, setDataWeather] = useState();

  useEffect(() => {
    fetch(
      `http://api.airvisual.com/v2/nearest_city?key=1b207dba-b246-40a5-9be4-c2c4abd3138d`,
    )
      .then((res) => res.json())
      .then((weatherData) => setDataWeather(weatherData.data));
  }, []);

  return (
   <Router>
    <Routes>
      <Route path='/' element={ <LoginPage /> } /> {/* Router sign in */}
      <Route path='/register-page' element={ <RegisterPage /> } /> {/* Router sign up */}
      <Route path='/landing-page' element={ <LandingPage dataWeather={dataWeather} /> } /> {/* Router Landing Page */}
      <Route path='/about-page' element={ <AboutPage dataWeather={dataWeather} /> } /> {/* Router ABout Page */}
      <Route path='/weather-home' element={ <WeatherAppHome dataWeather={dataWeather} /> } /> {/* Router untuk ke halaman Home atau halaman awal dari aplikasi */}
      <Route path='/weather-results' element={ <WeatherResultPage dataWeather={dataWeather} /> } /> {/* Router untuk ke halaman Weather untuk menampilkan informasi data cuaca */}
    </Routes>
   </Router>
  )
}

export default App;
