import AboutSection from "../../components/AboutSection/AboutSection";
import FeaturesSection from "../../components/FeaturesSection/FeaturesSection";
import HeroSub from "../../components/HeroSub";
import MissionPage from "../../components/MissionSection/MissionSection";
import PageMeta from "../../components/common/PageMeta";

const About = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
  ];
  return (
    <div >
      <PageMeta title="About Us | Samyutk Gujarati Samaj" />
      <HeroSub
        title="About Us"
        description="Discover who we are, what we do, and how we work together to create meaningful experiences."
        breadcrumbLinks={breadcrumbLinks}
      />
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
