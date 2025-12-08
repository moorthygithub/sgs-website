import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layout/MainLayout";
import NotFound from "./pages/NotFound/NotFound";
import About from "./pages/About/About";
import Gallery from "./pages/Gallery/Gallery";
import Member from "./pages/Member/Member";
import Community from "./pages/Community/Community";
import Contact from "./pages/Contact/Contact";
import { Toaster } from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      // duration: 800,
      once: false,
    });
  }, []);
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/member" element={<Member />} />
          <Route path="/community" element={<Community />} />
          <Route path="/member" element={<Member />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
