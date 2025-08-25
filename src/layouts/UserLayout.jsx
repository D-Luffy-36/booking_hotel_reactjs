import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../share/layouts/navbar/Navbar.jsx";
import Footer from "../share/layouts/Footer.jsx"; // Fixed import path

const UserLayout = () => (
  <div className="min-h-screen flex flex-col">
    {/* header */}
    <Navbar />

    {/* content */}
    <main className="flex-1">
      <Outlet />
    </main>

    {/* footer */}
    <Footer />
  </div>
);

export default UserLayout;
