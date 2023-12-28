import { Cursor, useTypewriter } from "react-simple-typewriter";
export default function HeroSection() {
  const [text] = useTypewriter({
    words: ["FullStack", "Front-end"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <section id="heroSection" className="hero-section">
      <div className="hero-section-content-box">
        <div className="hero-section-content">
          <p className="section-title">Welcome to</p>
          <h1 className="hero-section-title">
            <span className="hero-section-title-color">{text}</span>
            <Cursor cursorColor="#ffffff" cursorStyle="_" /> <br />
            Developer
          </h1>
          <p className="hero-section-description">
            I design and develop services for customers of all sizes,
            <br />
            specializing in creating stylish, modern websites, web services and
            online stores.
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero-section-image">
        <img src="./img/hero_img_short.png" alt="Hero Section" />
      </div>
    </section>
  );
}
