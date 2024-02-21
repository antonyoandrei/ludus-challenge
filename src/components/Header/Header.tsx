import { Link } from "react-router-dom";
import "./Header.css";

/**
 * Header component for the application.
 * @returns {JSX.Element} JSX element representing the header.
 */

const Header = (): JSX.Element => {
  return (
    <header className="header">
      <Link to={"/"}>
        <p className="header-text">Mixify</p>
      </Link>
    </header>
  );
};

export default Header;
