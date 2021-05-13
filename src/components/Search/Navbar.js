import { Link } from "react-router-dom";
import { FaTimes, FaSearch } from "react-icons/fa";
import { BsPersonSquare } from "react-icons/bs";
import { CgMenuGridR } from "react-icons/cg";
import { useGlobalContext } from "../../context";
import { useHistory } from "react-router-dom";

const Navbar = () => {
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
    <article className="search__navbar">
      <nav className="search__nav">
        <div className="search__leftbar">
          <Link to="/">
            <img src="/images/google-logo.png" alt="google logo" />
          </Link>
          <form className="search__form" onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <div className="search__btn">
              <button onClick={handleSubmit}>
                <FaSearch />
              </button>
              <button onClick={() => setInput("")}>
                <FaTimes />
              </button>
            </div>
          </form>
        </div>
        <ul className="search__rightbar">
          <li className="home__list">
            <Link>
              <CgMenuGridR />
            </Link>
          </li>
          <li className="home__list">
            <Link>
              <BsPersonSquare />
            </Link>
          </li>
        </ul>
      </nav>
    </article>
  );
};

export default Navbar;
