import { useState, useEffect } from "react";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
    localStorage.setItem('darkMode', isDarkMode.toString());
  }, [isDarkMode]);

  return (
      <nav className={`navbar ${navActive ? "active" : ""}`}>
        <div className="navbar-logo-name">
          <img className="navbar-img" src="./logo1.png" alt={"logo"}/>
          <p>My Portfolio</p>
        </div>
        <a
            className={`nav_hamburger ${navActive ? "active" : ""}`}
            onClick={toggleNav}
        >
          <span className="nav_hamburger_line"></span>
          <span className="nav_hamburger_line"></span>
          <span className="nav_hamburger_line"></span>
        </a>
        <div className={`navbar-items ${navActive ? "active" : ""}`}>
          <ul>
            <li>
              <Link
                  onClick={closeMenu}
                  activeClass="navbar-active-content"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="heroSection"
                  className="navbar-content"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                  onClick={closeMenu}
                  activeClass="navbar-active-content"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="mySkillsScore"
                  className="navbar-content"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                  onClick={closeMenu}
                  activeClass="navbar-active-content"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="AboutMe"
                  className="navbar-content"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                  onClick={closeMenu}
                  activeClass="navbar-active-content"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="MyPortfolio"
                  className="navbar-content"
              >
                Portfolio
              </Link>
            </li>
          </ul>
        </div>
        <button onClick={toggleDarkMode} className="btn btn-outline-primary">
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        <Link
            onClick={closeMenu}
            activeClass="navbar-active-content"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="Contact"
            className="btn btn-outline-primary"
        >
          Contact Me
        </Link>
      </nav>
  );
}

export default Navbar;
