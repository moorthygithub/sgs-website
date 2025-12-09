import AboutSection from "../components/AboutSection/AboutSection";
import AllInOne from "../components/AllInOne";
import Banner from "../components/Banner/Banner";
import EventsPage from "../components/EventSection/EventSection";
import FeaturesSection from "../components/FeaturesSection/FeaturesSection";
import Info from "../components/Info";
import LatestNews from "../components/LatestNews";
import MissionPage from "../components/MissionSection/MissionSection";
import TeamSection from "../components/TeamSection/TeamSection";
import TestimonialSection from "../components/TestimonialSection/TestimonialSection";

function Home() {
  return (
    <div>
      <Banner />
      {/* <Hero /> */}
      <AboutSection />
      <MissionPage />
      <EventsPage />
      <FeaturesSection />
      <TeamSection />
      <TestimonialSection />
      {/* <AllInOne />
      <LatestNews />
      <Info /> */}
    </div>
  );
}

export default Home;
