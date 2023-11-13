import React from 'react'

const StatisticData = ({ text1, text2, value}) => {
  return (
    <>
    <div>
        <h4 className='font-semibold text-primary-800 text-[0.8rem]'>{text1}<br />{text2}</h4>
        <h1 className='font-extrabold text-primary-700 text-[1.5rem]'>{value}</h1>
    </div>
    </>
  )
}

export default StatisticData