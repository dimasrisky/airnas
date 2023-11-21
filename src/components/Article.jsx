const Article = ({ img, title, date, articleLink }) => {
  return (
    <>
      <div className="flex justify-between gap-8 xl:flex-row-reverse">
        <img src={`/assets/img/${img}`} alt="article" />
        <div className="flex flex-col justify-between">
          <a
            href={articleLink}
            className="text-primary-800 text-[0.6rem] font-semibold sm:text-[0.8rem] xl:text-[0.7rem]"
          >
            {title}
          </a>
          <p className="text-[0.6rem] font-semibold text-[#A54230]">{date}</p>
        </div>
      </div>
    </>
  );
};

export default Article;
