import { Link } from "react-router-dom";
import "./Header.css";
import twitterLogo from "../assets/twitter_logo_icon_132881.png";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src={twitterLogo} alt="Twitter Logo" />
        <h1>Mi Twitter Clon</h1>
      </Link>
    </header>
  );
};

export default Header;

