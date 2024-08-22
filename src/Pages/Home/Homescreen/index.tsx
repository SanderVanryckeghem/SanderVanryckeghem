import HeroSection from "../HeroSection";
import MySkills from "../MySkills";
import AboutMe from "../AboutMe";
import MyPortfolio from "../MyPortfolio";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import MySkillsScore from "../MySkillsScore";
export default function Home() {
    return (
        <>
            <HeroSection />
            <MySkills />
            {/*<MySkillsScore/>*/}
            <AboutMe/>
            <MyPortfolio/>
            <ContactMe/>
            <Footer/>
        </>
    );
}