import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import MemberForm from "./components/MemberSection/MemberForm";
import MainLayout from "./layout/MainLayout";
import About from "./pages/About/About";
import Community from "./pages/Community/Community";
import Contact from "./pages/Contact/Contact";
import Gallery from "./pages/Gallery/Gallery";
import Home from "./pages/Home";
import Member from "./pages/Member/Member";
import NotFound from "./pages/NotFound/NotFound";
import Team from "./pages/Team/Team";
import ThankYou from "./pages/ThankYou/ThankYou";
import { Toaster } from "react-hot-toast";

function App() {
  useEffect(() => {
    AOS.init({
      // duration: 800,
      once: false,
    });
  }, []);
  return (
    <>
      <Toaster position="top-right" />

      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/member" element={<Member />} />
          <Route path="/community" element={<Community />} />
          <Route path="/membership" element={<Member />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
