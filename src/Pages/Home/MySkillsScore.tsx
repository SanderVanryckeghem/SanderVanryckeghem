import data from '../../data/index.json'
import CircularProgressBar from '../../Components/CircularProgressBar/CircularProgressBar'
export default function MySkillsScore() {
    return (
        <section className="skills-score-section" id="mySkillsScore">
            <h2 className="skills-section-heading">skills</h2>
            <div className="skills-score-section-container">
                {data.skillBar.map(skill => (
                    <div className="skills-score-card" key={skill.type}>
                        <h3 className="skills-score-section-title">{skill.type}</h3>
                        <CircularProgressBar value={skill.level} url={skill.url} />
                    </div>
                ))}
            </div>
        </section>
    );
}