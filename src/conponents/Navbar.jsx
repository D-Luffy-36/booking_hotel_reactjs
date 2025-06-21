import { Link } from "react-router-dom";
import { assets } from "../assets/assets.js";
import React from 'react';

const Navbar = () => {
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Hotels', path: '/rooms' },
        { name: 'Experience', path: '/experience' }, // TODO page
        { name: 'About', path: '/about' },           // TODO page
    ];

    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
            ${isScrolled ? "bg-white/80 shadow-md backdrop-blur-lg py-3 md:py-4 text-gray-700" : "py-4 md:py-6 text-white"}`}>

            {/* Wrapper */}
            <div className="flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32">

                {/* Logo */}
                <Link to='/'>
                    <img src={assets.logo} alt="logo"
                        className={`h-9 transition-all ${isScrolled ? "invert opacity-80" : ""}`} />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6 lg:gap-10">
                    {navLinks.map((link, i) => (
                        <Link key={i} to={link.path} className="group flex flex-col items-center">
                            <span className={`${isScrolled ? "text-gray-700" : "text-white"} transition-colors`}>
                                {link.name}
                            </span>
                            <span className={`h-0.5 w-0 group-hover:w-full transition-all duration-300 ${isScrolled ? "bg-gray-700" : "bg-white"}`}></span>
                        </Link>
                    ))}

                    <button className={`border px-4 py-1 text-sm font-light rounded-full transition-colors 
                        ${isScrolled ? 'text-black border-black' : 'text-white border-white'}`}>
                        Dashboard
                    </button>
                </div>

                {/* Desktop Right */}
                <div className="hidden md:flex items-center gap-4">
                    <img src={assets.searchIcon} alt="search" className={`${isScrolled && 'invert'} h-7 transition-all du`} />
                    <img src={assets.userIcon} alt="user" className="h-7" />
                    <button className="bg-black text-white px-6 py-2 rounded-full ml-4 hover:bg-gray-800 transition-all">
                        Login
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`p-2 rounded-md transition-all duration-200
                            ${isScrolled ? 'bg-white/20 hover:bg-white/30' : 'bg-transparent hover:bg-white/10'}`}>
                        <img
                            src={assets.menuIcon}
                            alt="menu"
                            className={`h-5 ${isScrolled ? 'invert' : ''}`}
                        />
                    </button>

                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-6 text-gray-800 transition-transform duration-500 md:hidden
                ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <button onClick={() => setIsMenuOpen(false)} className="absolute top-4 right-4">
                    <img src={assets.closeIcon} alt="close menu" className="h-7" />
                </button>

                {navLinks.map((link, i) => (
                    <Link key={i} to={link.path} onClick={() => setIsMenuOpen(false)} className="text-lg hover:text-indigo-600">
                        {link.name}
                    </Link>
                ))}

                <button className="border border-gray-800 px-4 py-2 rounded-full">Dash Borad</button>
                <button className="bg-black text-white px-8 py-2 rounded-full">Login</button>
            </div>
        </nav>
    );
};

export default Navbar;
