import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <Link to={"/"}>
        <p className="header-text">Mixify</p>
      </Link>
    </header>
  );
};

export default Header;
