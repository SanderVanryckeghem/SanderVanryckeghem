import { Link } from "react-scroll";
import { Cursor, useTypewriter } from "react-simple-typewriter";
export default function HeroSection() {
  const [text] = useTypewriter({
    words: ["Mobile", "Front-end"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <section id="heroSection" className="hero-section">
      <div className="hero-section-content-box">
        <div className="hero-section-content">
          <h1 className="hero-section-title">
            <span className="hero-section-title-color">{text}</span>
            <Cursor cursorColor="#ffffff" cursorStyle="_" /> <br />
            Developer
          </h1>
          <p className="hero-section-description">
            I'm an Software consultant currently working for Axxes IT Consultancy,
            <br />
            specializing in modern websites and apps.
          </p>
        </div>
        <Link
          activeClass="navbar-active-content"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          to="Contact"
          className="btn btn-primary"
        >
          Contact Me
        </Link>
      </div>
      <div className="hero-section-image">
        <img src="./img/hero_img_short.png" alt="Hero Section" />
      </div>
    </section>
  );
}
