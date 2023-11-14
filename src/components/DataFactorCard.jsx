import React from 'react'

const DataFactorCard = ({ icon, title, description }) => {
  return (
    <div className='w-[85%] sm:w-[15rem] flex flex-col gap-2 mx-auto bg-[#FCF5F4] rounded-[0.3rem] px-8 py-6'>
        <img src={`/assets/icons/${icon}`} alt="el-nino" className='mx-auto'/>
        <h1 className='font-bold text-[#733429]'>{title}</h1>
        <p className='text-[0.6rem] text-[#733429] font-medium'>{description}</p>
    </div>
  )
}

export default DataFactorCard