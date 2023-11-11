import React, { useState } from 'react'
import Loading from '../components/Loading'
import ApplicationResult from '../components/ApplicationResult'

const WeatherResult = ({ fetchData }) => {
  const [ isLoading, setIsLoading ] = useState(true)

  setTimeout(() => {
    setIsLoading(false)
  }, 4000)

  return (
    <>
      { isLoading ? <Loading /> : <ApplicationResult data={fetchData} /> }
    </>
  )
}

export default WeatherResult