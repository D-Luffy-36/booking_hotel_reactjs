import { Link } from "react-router-dom";
import { assets } from "../../../assets/assets";
import React from "react";

export const MobieMenu = ({
  isMenuOpen,
  onMenuToggle,
  navLinks = [],
  user,
  onNavigate,
  openSignIn,
}) => {
  return (
    <div>
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-6 text-gray-800 transition-transform duration-500 md:hidden
                        ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <button
          onClick={() => {
            onMenuToggle();
          }}
          className="absolute top-4 right-4"
        >
          <img src={assets.closeIcon} alt="close menu" className="h-7" />
        </button>

        {navLinks.map((link, i) => (
          <Link
            key={i}
            to={link.path}
            onClick={() => onMenuToggle}
            className="text-lg hover:text-indigo-600"
          >
            {link.name}
          </Link>
        ))}

        {user && (
          <button
            className="border border-gray-800 px-4 py-2 rounded-full"
            onClick={() => {
              onNavigate();
            }}
          >
            Dash Borad
          </button>
        )}

        {!user && (
          <button
            className="bg-black text-white px-8 py-2 rounded-full"
            onClick={() => {
              openSignIn();
            }}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default MobieMenu;
