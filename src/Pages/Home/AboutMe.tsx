export default function AboutMe() {
  return (
    <section id="AboutMe" className="about-section">
      <div className="about-section-img">
        <img src="./img/sander.png" alt="About Me" />
      </div>
      <div className="hero-section-content-box about-section-box">
        <div className="hero-section-content">
          <h1 className="skills-section-heading">About Me</h1>
          <p className="hero-section-description">
            Hello! My name is Sander Vanryckeghem. I'm a 23-year-old from the
            picturesque town of Bachte-Maria-Leerne. Since my early years, I've always had
            a passion for technology and coding. This passion led me to a career
            in IT. While I'm proficient in various
            facets of software development, my heart truly lies in mobile
            development and front-end development. I believe that user
            experience is just as crucial as an application's functionality, and
            that's why I always aim to craft intuitive and aesthetically
            pleasing interfaces.
          </p>
          <p className="hero-section-description">
            If you're interested in collaborating or just learning more about my
            work, please don't hesitate to get in touch!
          </p>
          <a
            href="/Sander_vanryckeghem_cv.pdf"
            download
            className="btn btn-primary"
            style={{ marginTop: "1.5rem" }}
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
