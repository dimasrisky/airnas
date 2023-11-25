import React from 'react'

const DataFactorCard = ({ icon, title, description }) => {
  return (
    <div className='w-[274px] h-[230] sm:h-[324px] flex flex-col gap-2 justify-center items-center mx-auto bg-[#FCF5F4] rounded-[0.3rem] px-8 py-6'>
        <img src={`/assets/icons/${icon}`} alt="el-nino" className='mx-auto w-[60.53px] sm:w-[80.76px]'/>
        <h1 className='font-bold text-[#733429] text-[16px] sm:text-[16.24px]'>{title}</h1>
        <p className='text-[12px] sm:text-[14.21px] text-[#733429] font-medium'>{description}</p>
    </div>
  )
}

export default DataFactorCard