import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../public/img/logo.png";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/about" },
  { name: "Team", link: "/team" },
  { name: "Gallery", link: "/gallery" },
  { name: "Contact", link: "/contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  console.log(location, "pathname");
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
    ${
      isScrolled
        ? "shadow-xl bg-white text-black"
        : `shadow-xl md:shadow-none ${
            location?.pathname == "/" ? "text-white" : "text-black"
          }`
    }
      `}
    >
      <div className="max-w-screen-xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="logo" className="h-auto w-auto max-h-16" />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.link}
                to={item.link}
                className={({ isActive }) =>
                  `text-[16px] font-medium transition duration-200
                  ${
                    isActive
                      ? "border-b-2 border-[#fb6332] text-[#fb6332] pb-1"
                      : "hover:text-[#fb6332]"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          <button
            className="md:hidden text-black"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-500
          ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <nav className="flex flex-col bg-white rounded-xl py-3 mt-2 shadow-lg">
            {navItems.map((item) => (
              <NavLink
                key={item.link}
                to={item.link}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 text-[15px] font-medium transition
                  ${
                    isActive
                      ? "text-[#fb6332] bg-[#ffe2d7]"
                      : "text-black hover:bg-[#ffe2d7]"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
