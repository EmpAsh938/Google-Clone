import { FaSearch } from "react-icons/fa";
import { useHistory } from "react-router";
import { useGlobalContext } from "../../context";

const SearchBar = () => {
  const { input, setInput, setTerm } = useGlobalContext();
  let history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      setTerm(input);
      history.push("/search");
    }
  };
  return (
    <section className="home__search">
      <img src="/images/google-logo.png" alt="Google" />
      <form className="home__form" onSubmit={handleSubmit}>
        <div className="home__input">
          <label htmlFor="search">
            <FaSearch />
          </label>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            id="search"
          />
        </div>
      </form>
      <div className="home__btn">
        <button onClick={handleSubmit}>Google Search</button>
        <button>I'm feeling lucky</button>
      </div>
    </section>
  );
};

export default SearchBar;
