import React from "react";
import Navbar from "./conponents/Navbar";
import { useLocation } from "react-router-dom";
import HeroSection from "./sections/HeroSection.jsx";
import FurtureSection from "./sections/FutureSection.jsx";
import HomePage from "./pages/HomePage.jsx";


const App = () => {
  // Kiểm tra xem trong pathname có chứa chuỗi 'owner' hay không
  // Mục đích: Xác định xem người dùng đang ở trang "owner" hay không
  const isOwnerPath = useLocation().pathname.includes("owner");
  return (
    <div>
      {!isOwnerPath && <Navbar />}
      <HomePage />

    </div>
  );
}

export default App;