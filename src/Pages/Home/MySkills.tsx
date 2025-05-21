import data from "../../data/index.json";
import SkillCard from "../../Components/SkillCard/SkillCard"; // Adjust the path as needed

interface Skill {
  src: string;
  title: string;
  description: string;
}

interface DataType {
  skills?: Skill[];
}

export default function MySkills() {
  const typedData = data as DataType;

  return (
    <section className="skills-section" id="mySkills">
      <div className="portfolio-container">
        <h2 className="skills-section-heading">My Expertise</h2>
      </div>
      <div className="skills-section-container">
        {typedData?.skills?.map((item: Skill, index: number) => (
          <SkillCard key={index} skill={item} index={index} />
        ))}
      </div>
    </section>
  );
}