import React from 'react'

const StatisticData = ({ text1, text2, value}) => {
  return (
    <>
    <div>
        <h4 className='font-semibold text-primary-800 text-[16px] sm:text-[18px]'>{text1}<br />{text2}</h4>
        <h1 className='font-extrabold text-primary-700 text-[32px] sm:text-[44px]'>{value}</h1>
    </div>
    </>
  )
}

export default StatisticData