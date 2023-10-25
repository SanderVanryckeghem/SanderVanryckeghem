import data from "../../data/index.json";
import img1 from "../../assets/img/product-chain-1.png"
import img2 from "../../assets/img/tag-1.png"
import img3 from "../../assets/img/feather-pen-2.png"
import img4 from "../../assets/img/feather-pen-1.png"

type ImageMap = {
    [key: string]: string;
};

const images: ImageMap = {
    img1: img1,
    img2: img2,
    img3: img3,
    img4: img4
};
export default function MySkills() {
    return (
        <section className="skills-section" id="mySkills">
            <div className="portfolio-container">
                <p className="section-title">My Skills</p>
                <h2 className="skills-section-heading">My Expertise</h2>
            </div>
            <div className="skills-section-container">
                {data?.skills?.map((item, index) => (
                    <div key={index} className="skills-section-card">
                        <div className="skills-section-img">
                            <img src={images[item.src]} alt="Product Chain" />
                        </div>
                        <div className="skills-section-card-content">
                            <h3 className="skills-section-title">{item.title}</h3>
                            <p className="skills-section-description">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
