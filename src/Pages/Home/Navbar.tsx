import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import ShuffleIcon from '@mui/icons-material/Shuffle'; // Import Shuffle icon
import Button from '@mui/material/Button'; // Use MUI Button for the theme button
import PaletteIcon from '@mui/icons-material/Palette';
import FormatPaintIcon from '@mui/icons-material/FormatPaint';
import AnimationIcon from '@mui/icons-material/Animation';

function Navbar() {
  const themes = [
    "purple-night",
    "warm-orange",
    "light-green",
    "ocean-blue",
    "sunset-red",
    "forest-green",
    "mystic-pink",
    "coral-pink",
    "midnight-blue",
    "golden-sunrise",
    "lavender-bliss",
    "tropical-teal",
    "crimson-red",
    "ice-blue",
    "pastel-peach",
    "royal-purple",
    "" // Default root theme
  ];

  const themeLogos: Record<typeof themes[number], string> = {
    "purple-night": "./img/logo_purple.png",
    "warm-orange": "./img/logo_orange.png",
    "light-green": "./img/logo_green.png",
    "ocean-blue": "./img/logo1.png",
    "sunset-red": "./img/logo_red.png",
    "forest-green": "./img/logo_green.png",
    "mystic-pink": "./img/logo_purple.png",
    "coral-pink": "./img/logo_red.png",
    "midnight-blue": "./img/logo1.png",
    "golden-sunrise": "./img/logo_orange.png",
    "lavender-bliss": "./img/logo_purple.png",
    "tropical-teal": "./img/logo_red.png",
    "crimson-red": "./img/logo_red.png",
    "ice-blue": "./img/logo1.png",
    "pastel-peach": "./img/logo_orange.png",
    "royal-purple": "./img/logo_purple.png",
    "": "./img/logo1.png" // Default logo if no theme is selected
  };


  const [navActive, setNavActive] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(() => {
    return localStorage.getItem('theme') || "";
  });

  const [isShaking, setIsShaking] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  const handleThemeChange = () => {
    const availableThemes = themes.filter(theme => theme !== currentTheme);
    const randomTheme = availableThemes[Math.floor(Math.random() * availableThemes.length)];
    setCurrentTheme(randomTheme);
  };

  const handleShake = () => {
    // Only start shaking if not already shaking
    if (!isShaking) {
      setIsShaking(true);
      document.body.classList.add('shake-animation');
      
      // Remove the shake class after 5 seconds
      setTimeout(() => {
        document.body.classList.remove('shake-animation');
        setIsShaking(false);
      }, 2000);
    }
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
    document.body.className = currentTheme; // Apply the selected theme to the body
    localStorage.setItem('theme', currentTheme); // Save theme in localStorage
  }, [currentTheme]);

    const themeColors = {
      "purple-night": "#6a0dad",
      "warm-orange": "#ff7f50",
      "light-green": "#32cd32",
      "ocean-blue": "#1e90ff",
      "sunset-red": "#ff4500",
      "forest-green": "#228b22",
      "mystic-pink": "#ff69b4",
      "coral-pink": "#ff6f61",
      "midnight-blue": "#191970",
      "golden-sunrise": "#ffdf00",
      "lavender-bliss": "#7e57c2",
      "tropical-teal": "#008080",
      "crimson-red": "#dc143c",
      "ice-blue": "#afeeee",
      "pastel-peach": "#ffdab9",
      "royal-purple": "#7851a9",
      "": "#000000", // Default color (black)
    };

  return (
      <nav className={`navbar ${navActive ? "active" : ""}`}>
        <Link
            onClick={closeMenu}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="heroSection"
        >
          <div className="navbar-logo">
            <img
                className="navbar-img"
                src={themeLogos[currentTheme] || "./img/logo_default.png"}
                alt={"logo"}
            />
          </div>
        </Link>
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
                  to="mySkills"
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
                Projects
              </Link>
            </li>
          </ul>
          <div className="navbar_icon_content">
            <div className="theme-change-icon" >
              <Button onClick={handleThemeChange} startIcon={<FormatPaintIcon fontSize="large" style={{ color: themeColors[currentTheme as keyof typeof themeColors] || "#000000" }} />} style={{ color: themeColors[currentTheme as keyof typeof themeColors] || "#000000"}}>
              </Button>
            </div>
            <div className="shake-icon" >
              <Button 
                onClick={handleShake} 
                startIcon={<AnimationIcon fontSize="large" style={{ color: themeColors[currentTheme as keyof typeof themeColors] || "#000000" }} />} 
                style={{ color: themeColors[currentTheme as keyof typeof themeColors] || "#000000"}}
                disabled={isShaking}
              >
              </Button>
            </div>
          </div>
        </div>
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
