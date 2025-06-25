import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets.js";
import React from 'react';
import { SignInButton, UserButton, useClerk, useUser } from '@clerk/clerk-react';


const BookIcon = () => {
    return (
        <svg className="w-4 h-4 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
        </svg>
    );
}

const Navbar = () => {
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Hotels', path: '/rooms' },
        { name: 'Experience', path: '/experience' },
        { name: 'About', path: '/about' },
    ];

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { openSignIn } = useClerk();
    const { user } = useUser();

    // variable strore fuction
    const navigate = useNavigate();
    const location = useLocation()

    useEffect(() => {
        // Kiểm tra đường dẫn hiện tại (pathname):
        // Nếu pathname khác '/' (home page) => set isScrolled thành true (coi như user đã "cuộn" sang page khác).
        // Nếu pathname là '/' => set isScrolled thành false (vẫn ở home page, chưa cuộn đi đâu).
        setIsScrolled(() => location.pathname !== '/');

        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [location.pathname]);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
            ${isScrolled
                ? "bg-white/80 shadow-md backdrop-blur-lg py-3 md:py-4 text-gray-700"
                : "py-4 md:py-6 text-gray-600"}`}>

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
                        ${isScrolled ? 'text-black border-black' : 'text-white border-white'}`}
                        onClick={() => { navigate("/owner") }}>
                        Dashboard
                    </button>
                </div>

                {/* Desktop Right */}
                <div className="hidden md:flex items-center gap-4">
                    <img src={assets.searchIcon} alt="search" className={`${isScrolled && 'invert'} h-7 transition-all`} />
                    {/* <img src={assets.userIcon} alt="user" className="h-7" />
                    <button className="bg-black text-white px-6 py-2 rounded-full ml-4 hover:bg-gray-800 transition-all"
                        onClick={() => { openSignIn() }}>
                        Login
                    </button> */}
                    {user
                        ?
                        <UserButton>
                            <UserButton.MenuItems>
                                <UserButton.Action label="My booking" labelIcon={<BookIcon />}
                                    onClick={() => { navigate('/my-bookings') }}>
                                </UserButton.Action>
                            </UserButton.MenuItems>
                        </UserButton>
                        :
                        <button className="bg-black text-white px-6 py-2 rounded-full ml-4 hover:bg-gray-800 transition-all"
                            onClick={() => { openSignIn() }}>
                            Login
                        </button>
                    }
                </div>

                {/* Mobile Menu Button */}

                <div className="md:hidden flex items-center">
                    {user &&
                        <UserButton>
                            <UserButton.MenuItems>
                                <UserButton.Action label="My booking" labelIcon={<BookIcon />}
                                    onClick={() => { navigate('/my-bookings') }}>
                                </UserButton.Action>
                            </UserButton.MenuItems>
                        </UserButton>

                    }
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

                {
                    user &&
                    <button className="border border-gray-800 px-4 py-2 rounded-full"
                        onClick={() => { navigate("/owner") }}
                    >Dash Borad</button>
                }

                {!user &&
                    <button className="bg-black text-white px-8 py-2 rounded-full"
                        onClick={() => { openSignIn() }}>Login</button>
                }

            </div>
        </nav>
    );
};

export default Navbar;
