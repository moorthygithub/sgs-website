import AboutSection from "../components/AboutSection/AboutSection";
import Banner from "../components/Banner/Banner";
import EventsPage from "../components/EventSection/EventSection";
import MissionPage from "../components/MissionSection/MissionSection";
import TeamSection from "../components/TeamSection/TeamSection";
import TestimonialSection from "../components/TestimonialSection/TestimonialSection";

function Home() {
  return (
    <div>
      <Banner />
      <AboutSection />
      <MissionPage />
      <EventsPage />
      <TeamSection />
      <TestimonialSection />
    </div>
  );
}

export default Home;
