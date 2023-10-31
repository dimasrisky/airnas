import React from 'react'

const InformationsCard = ({ icon, title, value}) => {
  return (
    <>
        <div className='w-[10rem] flex items-center gap-[1rem] px-[1rem] py-[1.5rem] bg-white rounded-[1rem]'>
            <img src={`/icons/${icon}`} />
            <div>
                <h1 className='text-[#733429] opacity-40 text-xs'>{title}</h1>
                <h4 className='text-primary-red text-xl font-bold'>{value}</h4>
            </div>
        </div>
    </>
  )
}

export default InformationsCard