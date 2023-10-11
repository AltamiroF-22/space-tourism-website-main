import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Logo from "../../assets/shared/logo.svg";
import "./Navbar.sass";

import Open from "../../assets/shared/icon-hamburger.svg";
import Close from "../../assets/shared/icon-close.svg";

const Navbar = () => {
  const location = useLocation();

  const [mobileMenu, setMobileMenu] = useState(true);

  const showMenu = () => {
    setMobileMenu((prevMobileMenu) => !prevMobileMenu);
  };

  const closeMenuLink = () => {
    setMobileMenu(true);
  };

  return (
    <div className="navbar">
      {mobileMenu ? (
        ""
      ) : (
        <ul className="nav-mobile">
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/" onClick={() => closeMenuLink()}>
              <span>00 </span> HOME
            </Link>
          </li>
          <li className={location.pathname === "/destination" ? "active" : ""}>
            <Link to="/destination" onClick={() => closeMenuLink()}>
              <span>01 </span> DESTINATION
            </Link>
          </li>
          <li className={location.pathname === "/crew" ? "active" : ""}>
            <Link to="/crew" onClick={() => closeMenuLink()}>
              <span>02 </span> CREW
            </Link>
          </li>
          <li className={location.pathname === "/technology" ? "active" : ""}>
            <Link to="/technology" onClick={() => closeMenuLink()}>
              <span>03 </span> TECHNOLOGY
            </Link>
          </li>
        </ul>
      )}
      <nav>
        <Link to="/">
          <img
            className="logo"
            onClick={() => closeMenuLink()}
            src={Logo}
            alt="Logo"
          />
        </Link>

        <div className="line"></div>

        <ul className="descktop-ul">
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/">
              <span>00 </span> HOME
            </Link>
          </li>
          <li className={location.pathname === "/destination" ? "active" : ""}>
            <Link to="/destination">
              <span>01 </span> DESTINATION
            </Link>
          </li>
          <li className={location.pathname === "/crew" ? "active" : ""}>
            <Link to="/crew">
              <span>02 </span> CREW
            </Link>
          </li>
          <li className={location.pathname === "/technology" ? "active" : ""}>
            <Link to="/technology">
              <span>03 </span> TECHNOLOGY
            </Link>
          </li>
        </ul>
        <button className="menu-mobile " onClick={() => showMenu()}>
          {mobileMenu ? (
            <img src={Open} alt="Ícone de fechar" />
          ) : (
            <img src={Close} alt="Ícone de fechar" />
          )}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
