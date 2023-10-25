import heroImg from '../../assets/img/hero_img_short.png';
export default function HeroSection() {
    return(
        <section id="heroSection" className="hero-section">
            <div className="hero-section-content-box">
                <div className="hero-section-content">
                    <p className="section-title">Welcome to</p>
                    <h1 className="hero-section-title">
                        <span className="hero-section-title-color">Full Stack</span>{" "}
                        <br/>
                        Developer
                    </h1>
                    <p className="hero-section-description">
                        I design and develop services for customers of all sizes,
                        <br/>
                        specializing in creating stylish, modern websites, web services and online stores.
                    </p>
                </div>
                <button className="btn btn-primary">Get In Touch</button>
            </div>
            <div className="hero-section-image">
                <img src={heroImg} alt="Hero Section"/>
            </div>
        </section>
    );
}