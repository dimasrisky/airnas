import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  AboutPage,
  LandingPage,
  LoginPage,
  RegisterPage,
  ApplicationHomePage,
  ApplicationResultPage,
  ContactPage
} from "./pages";

const App = () => {
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
        <Route path="/" element={<LoginPage />} /> {/* Router sign in */}
        <Route path="/register" element={<RegisterPage />} />{" "}
        {/* Router sign up */}
        <Route
          path="/landing"
          element={<LandingPage dataWeather={dataWeather} />}
        />{" "}
        {/* Router Landing Page */}
        <Route
          path="/about"
          element={<AboutPage dataWeather={dataWeather} />}
        />{" "}
        {/* Router About Page */}
        <Route
          path="/contact"
          element={<ContactPage dataWeather={dataWeather} />}
        />{" "}
        {/* Router About Page */}
        <Route
          path="/weather"
          element={<ApplicationHomePage dataWeather={dataWeather} />}
        />{" "}
        {/* Router halaman awal dari aplikasi */}
        <Route
          path="/weather-result"
          element={<ApplicationResultPage dataWeather={dataWeather} />}
        />{" "}
        {/* Router halaman hasil data dari aplikasi */}
      </Routes>
    </Router>
  );
};

export default App;
