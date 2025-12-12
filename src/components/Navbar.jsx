import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight } from "lucide-react";

import logo from "../../public/img/logo.png";

const navItems = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/about" },
  { name: "Team", link: "/team" },
  { name: "Gallery", link: "/gallery" },
  { name: "Membership", link: "/membership" },
  { name: "Contact", link: "/contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const isHomePage = location.pathname == "/";

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : isHomePage
            ? "bg-transparent"
            : "bg-white shadow-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link
              to="/"
              className="flex items-center gap-3 group relative z-50"
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={logo}
                  alt="Company Logo"
                  className="h-auto w-auto transition-transform duration-300"
                />
              </div>
            </Link>

            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <NavLink
                  key={item.link}
                  to={item.link}
                  className={({ isActive }) =>
                    `relative px-4 py-2 text-[15px] font-medium tracking-wide transition-all duration-300 group ${
                      isScrolled || !isHomePage
                        ? isActive
                          ? "text-[#fb6332]"
                          : "text-gray-700 hover:text-[#fb6332]"
                        : isActive
                        ? "text-[#fb6332]"
                        : "text-white hover:text-[#fb6332]"
                    }`
                  }
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {({ isActive }) => (
                    <>
                      <span className="relative z-10">{item.name}</span>
                      {isActive && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#fb6332] to-[#ff8c5a] rounded-full" />
                      )}
                      <span className="absolute inset-0 bg-[#fb6332]/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out" />
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            <button
              onClick={() => setOpen(!open)}
              className={`lg:hidden relative cursor-pointer z-50 p-2 rounded-lg transition-all duration-300 ${
                isScrolled || !isHomePage
                  ? "!text-gray-700 hover:bg-gray-100"
                  : "!text-white hover:bg-white/10"
              } ${open ? "bg-white text-gray-700" : ""}`}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute  inset-0 transition-all duration-300 ${
                    open ? "rotate-180 opacity-0" : "rotate-0 opacity-100"
                  }`}
                >
                  <Menu size={24} />
                </span>
              </div>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-all duration-500 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      <aside
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl z-50 lg:hidden transform transition-all duration-500 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <Link to="/" onClick={() => setOpen(false)}>
              <img src={logo} alt="Company Logo" className="h-auto w-auto" />
            </Link>
          </div>

          {/* Mobile Menu Navigation */}
          <nav className="flex-1 overflow-y-auto py-6 px-4">
            <div className="space-y-1">
              {navItems.map((item, index) => (
                <NavLink
                  key={item.link}
                  to={item.link}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-5 py-4 rounded-xl text-[16px] font-medium transition-all duration-300 group ${
                      isActive
                        ? "bg-gradient-to-r from-[#fb6332] to-[#ff8c5a] text-white shadow-lg shadow-[#fb6332]/20"
                        : "text-gray-700 hover:bg-gray-50 hover:translate-x-1"
                    }`
                  }
                  style={{
                    animation: open
                      ? `slideIn 0.3s ease-out ${index * 50}ms both`
                      : "none",
                  }}
                >
                  {({ isActive }) => (
                    <>
                      <span>{item.name}</span>
                      <ChevronRight
                        size={20}
                        className={`transition-transform duration-300 ${
                          isActive
                            ? "translate-x-1"
                            : "group-hover:translate-x-1"
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          </nav>

          <div className="p-6 border-t border-gray-100">
            <div className="text-center text-sm text-gray-500">
              © 2025 Sardar Patel Bhavan Bengaluru. All Rights Reserved.
            </div>
          </div>
        </div>
      </aside>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}

export default Navbar;
