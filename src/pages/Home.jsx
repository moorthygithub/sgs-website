import AboutSection from "../components/AboutSection/AboutSection";
import AllInOne from "../components/AllInOne";
import Banner from "../components/Banner/Banner";
import Hero from "../components/Hero";
import Info from "../components/Info";
import LatestNews from "../components/LatestNews";

function Home() {
  return (
    <div>
      <Banner />
      {/* <Hero /> */}
      <AboutSection />
      <AllInOne />
      <LatestNews />
      <Info />
    </div>
  );
}

export default Home;
