import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Weather from './pages/Weather'

const App = () => {
  const [fetchData, setFetchData] = useState()


  useEffect(() => {
    fetch(`http://api.airvisual.com/v2/nearest_city?key=1b207dba-b246-40a5-9be4-c2c4abd3138d`)
      .then(res => res.json())
      .then(data => setFetchData(data.data))
  }, [])

  return (
   <Router>
    <Routes>
      <Route path='/' element={ <Home fetchData={fetchData} /> } />
      <Route path='/weather' element={ <Weather fetchData={fetchData} /> } />
    </Routes>
   </Router>
  )
}

export default App
