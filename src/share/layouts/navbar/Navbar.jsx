import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { assets } from "../../../assets/assets.js";
import BookIcon from "../../ui/BookIcon.jsx";
import NavLink from "./NavLink.jsx";
import UserActions from "./UserActions.jsx";
import MobieMenu from "./MobieMenu.jsx";
import {
  SignInButton,
  UserButton,
  useClerk,
  useUser,
} from "@clerk/clerk-react";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Hotels", path: "/rooms" },
    { name: "Experience", path: "/experience" },
    { name: "About", path: "/about" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // variable strore fuction
  const navigate = useNavigate();
  const location = useLocation();

  const { openSignIn } = useClerk();
  const { user } = useUser();

  useEffect(() => {
    // Kiểm tra đường dẫn hiện tại (pathname):
    // Nếu pathname khác '/' (home page) => set isScrolled thành true (coi như user đã "cuộn" sang page khác).
    // Nếu pathname là '/' => set isScrolled thành false (vẫn ở home page, chưa cuộn đi đâu).
    setIsScrolled(() => location.pathname !== "/");

    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
            ${
              isScrolled
                ? "bg-white/80 shadow-md backdrop-blur-lg py-3 md:py-4 text-gray-700"
                : "py-4 md:py-6 text-gray-600"
            }`}
    >
      {/* Wrapper */}
      <div className="flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32">
        {/* Logo */}
        <Link to="/">
          <img
            src={assets.logo}
            alt="logo"
            className={`
              h-12 w-12 rounded-full object-cover transition-all duration-300
              }`}
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10">
          <NavLink navLinks={navLinks} isScrolled={isScrolled} />
        </div>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-4">
          <img
            src={assets.searchIcon}
            alt="search"
            className={`${isScrolled && "invert"} h-7 transition-all`}
          />
          <UserActions user={user} isScrolled={isScrolled} />
        </div>

        {/* Mobile Menu Button */}

        <div className="md:hidden flex items-center">
          <UserActions user={user} isScrolled={isScrolled} isMobile={true} />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 rounded-md transition-all duration-200
                            ${
                              isScrolled
                                ? "bg-white/20 hover:bg-white/30"
                                : "bg-transparent hover:bg-white/10"
                            }`}
          >
            <img
              src={assets.menuIcon}
              alt="menu"
              className={`h-5 ${isScrolled ? "invert" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}

      <MobieMenu
        isMenuOpen={isMenuOpen}
        user={user}
        navigate={navigate}
        onMenuToggle={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
        onNavigate={() => {
          navigate("/owner/dashboard");
        }}
        openSignIn={openSignIn}
        navLinks={navLinks}
      />
    </nav>
  );
};

export default Navbar;
