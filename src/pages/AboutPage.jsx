import React from 'react'
import About from '../components/About'

const AboutPage = ({ dataWeather }) => {
  return (
    <About fetchData={dataWeather} />
  )
}

export default AboutPage