import React from "react";
import Contact from "../components/Contact";

const ContactPage = ({ dataWeather }) => {
  return <Contact fetchData={dataWeather} />;
};

export default ContactPage;
