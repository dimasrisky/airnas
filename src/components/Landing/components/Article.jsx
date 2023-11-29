const Article = ({ img, title, date, articleLink }) => {
  return (
    <div className="w-full xl:w-[565px] flex gap-8 xl:flex-row-reverse justify-start">
      <img src={`/assets/img/${img}`} alt="article" className="w-[89px] sm:w-[130px] " />
      <div className="flex flex-col gap-4 justify-between">
        <a href={articleLink} target="_blank" rel="noreferrer" className="text-primary-800 text-[14px] font-semibold sm:text-[20px]">
          {title}
        </a>
        <p className="text-[12px] sm:text-[16px] font-semibold text-[#A54230]">{date}</p>
      </div>
    </div>
  );
};

export default Article;
