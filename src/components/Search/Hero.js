import { useGlobalContext } from "../../context";

const Hero = () => {
  const { query, queryInfo } = useGlobalContext();
  console.log(query);
  return (
    <article className="search__hero">
      <div className="search__hero-btn">
        <button>All</button>
        <button>Images</button>
        <button>News</button>
        <button>Maps</button>
        <button>Videos</button>
      </div>
      {query.length >= 1 && (
        <div className="search__hero-query">
          <div className="search__hero-query__results">
            <p>
              About <span>{queryInfo.formattedTotalResults}</span> results{" "}
              <span>{queryInfo.formattedSearchTime}s</span>
            </p>
          </div>
          <div className="search__hero-query__container">
            {query.map((item) => {
              const { title, cacheId, link, snippet } = item;
              return (
                <a
                  href={link}
                  className="search__hero-query__wrapper"
                  key={cacheId}
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="search__hero-query__link">{link}</p>
                  <h3 className="search__hero-query__title">{title}</h3>
                  <p className="search__hero-query__snippet">{snippet}</p>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </article>
  );
};

export default Hero;
