import { Link } from "react-router-dom";
import { BsPersonSquare } from "react-icons/bs";
import { CgMenuGridR } from "react-icons/cg";

const Title = () => {
  return (
    <section className="home__title">
      <ul className="home__nav">
        <li className="home__list">
          <Link>Gmail</Link>
        </li>
        <li className="home__list">
          <Link>Images</Link>
        </li>
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
    </section>
  );
};

export default Title;
