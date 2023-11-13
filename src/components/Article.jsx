import React from 'react'

const Article = ({ img, title, date, articleLink }) => {
  return (
    <>
    <div className='flex xl:flex-row-reverse justify-between gap-8'>
        <img src={`/assets/img/${img}`} alt="article" />
        <div className='flex flex-col justify-between'>
            <a href={articleLink} className='font-semibold text-primary-800 text-[0.6rem] sm:text-[0.8rem] xl:text-[0.7rem]'>{title}</a>
            <p className='font-semibold text-[#A54230] text-[0.6rem]'>{date}</p>
        </div>
    </div>
    </>
  )
}

export default Article