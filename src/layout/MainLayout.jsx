import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import RouteLoader from "../components/common/RouteLoader";
import FooterSection from "../components/FooterSection/FooterSection";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";

function MainLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ScrollToTop />
      <RouteLoader />
      <main className="flex-grow">
        <Outlet />
      </main>

      <FooterSection />
    </div>
  );
}

export default MainLayout;
