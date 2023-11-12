import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Login, Register, Weather, WeatherResult } from "./pages"

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
        {/* Landing Page */}
        <Route path="/" element={<Home fetchData={dataWeather} />} />
        {/* Login Page */}
        <Route path="/login" element={<Login />} />
        {/* Register Page */}
        <Route path="/register" element={<Register />} />
        {/* Weather Application Page */}
        <Route path="/weather" element={<Weather fetchData={dataWeather} />} />
        {/* Weather Application + Data Page */}
        <Route path="/weatherResult" element={<WeatherResult fetchData={dataWeather} />}/>
      </Routes>
    </Router>
  );
};

export default App;
