import data from "../../data/index.json";
import PortfolioCard from "../../Components/PortfolioCard/PortfolioCard";

interface PortfolioItem {
  src: string;
  title: string;
  description: string;
  link: string;
}

interface Data {
  portfolio?: PortfolioItem[];
}

export default function MyPortfolio() {
  const typedData = data as Data;
  return (
    <section className="portfolio-section" id="MyPortfolio">
      <div className="portfolio-container-box">
        <div className="portfolio-container">
          <h2 className="skills-section-heading">My Projects</h2>
          <p className="sub-title">Recent Projects</p>
        </div>
      </div>
      <div className="portfolio-section-container">
        {typedData?.portfolio?.map((item, index) => (
          <PortfolioCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
}