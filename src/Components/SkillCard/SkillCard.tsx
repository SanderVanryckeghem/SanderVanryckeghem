import "animate.css";

interface Skill {
  src: string;
  title: string;
  description: string;
}

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export default function SkillCard({ skill, index }: SkillCardProps) {
  return (
    <div className="animate__animated animate__flipInX">
      <div key={index} className="skills-section-card">
        <div className="skills-section-img">
          <img src={skill.src} alt="Product Chain" />
        </div>
        <div className="skills-section-card-content">
          <h3 className="skills-section-title">{skill.title}</h3>
          <p className="skills-section-description">{skill.description}</p>
        </div>
      </div>
    </div>
  );
}