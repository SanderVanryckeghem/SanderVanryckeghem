interface PortfolioItem {
  src: string;
  title: string;
  description: string;
  link: string;
}

interface PortfolioCardProps {
  item: PortfolioItem;
}

export default function PortfolioCard({ item }: PortfolioCardProps) {
  return (
    <div className="portfolio-section-card">
      <div className="portfolio-section-img">
        <img 
          src={item.src} 
          alt="Placeholder" 
          style={{ objectFit: 'contain', width: '100%', height: '100%' }}
        />
      </div>
      <div className="portfolio-section-card-content">
        <div>
          <h3 className="portfolio-section-title">{item.title}</h3>
          <p className="text-md">{item.description}</p>
        </div>
        <a
            href={item.link}
            className="btn btn-primary"
            style={{ marginTop: "1.5rem" }}
          >
           View {item.title}
          </a>
      </div>
    </div>
  );
}