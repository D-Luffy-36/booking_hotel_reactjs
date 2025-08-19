import React from "react";
import Navbar from "./conponents/layout/navbar/Navbar.jsx";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./features/home/HomePage.jsx";
import BookingPage from "./features/booking/BookingPage.jsx";
import RoomDetailPage from "./features/rooms/RoomDetailPage.jsx";
import AllRooms from "./features/rooms/AllRooms.jsx";
import Footer from "./conponents/layout/Footer.jsx";
import { roomsDummyData, userBookingsDummyData } from "./assets/assets.js";

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
          <Route path="/rooms" element={<AllRooms />} />
          <Route
            path="/room/:id"
            element={<RoomDetailPage rooms={roomsDummyData} />}
          />
          <Route
            path="/my-bookings"
            element={<BookingPage bookings={userBookingsDummyData} />}
          />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
