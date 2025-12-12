import AboutSection from "../../components/AboutSection/AboutSection";
import FeaturesSection from "../../components/FeaturesSection/FeaturesSection";
import MissionPage from "../../components/MissionSection/MissionSection";
import PageMeta from "../../components/common/PageMeta";

const About = () => {

  return (
    <div className="mt-30">
      <PageMeta title="About Us | Samyutk Gujarati Samaj" />

      <AboutSection />
      <MissionPage />
      <FeaturesSection />

      {/* <AboutSection />
      <AboutUsDetails />
      <ChairPeronCarousel />
      <AboutSection1 />
      <TeamCarousel /> */}
    </div>
  );
};

export default About;
