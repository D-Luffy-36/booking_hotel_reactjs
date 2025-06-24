import React from "react";
import Navbar from "./conponents/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import HeroSection from "./sections/home/HeroSection.jsx";
import FurtureSection from "./sections/home/FutureSection.jsx";
import HomePage from "./pages/HomePage.jsx";
import RoomDetailPage from "./pages/RoomDetailPage.jsx";
import Footer from "./sections/home/Footer.jsx";
import { roomsDummyData } from "./assets/assets.js";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';


const App = () => {
  // Kiểm tra xem trong pathname có chứa chuỗi 'owner' hay không
  // Mục đích: Xác định xem người dùng đang ở trang "owner" hay không
  const isOwnerPath = useLocation().pathname.includes("owner");
  return (
    <div>
      {!isOwnerPath && <Navbar />}
      <div className="min-h-[70-vh]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/room/:id" element={<RoomDetailPage rooms={roomsDummyData} />} />
          <Route path="/my-bookings" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>

    </div>
  );
}

export default App;