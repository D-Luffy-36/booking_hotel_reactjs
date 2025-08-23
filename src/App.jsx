import React from "react";
import Navbar from "./conponents/layout/navbar/Navbar.jsx";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./features/home/HomePage.jsx";
import BookingPage from "./features/admin/bookings/BookingPage.jsx";
import RoomDetailPage from "./features/rooms/RoomDetailPage.jsx";
import AllRooms from "./features/rooms/AllRooms.jsx";
import DashboardPage from "./features/admin/dashboard/components/DashBoardPage.jsx";
import UserLayout from "./conponents/layout/wrapper/UserLayout.jsx";
import AdminLayout from "./conponents/layout/wrapper/AdminLayout.jsx";
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
          {/* USER AREA */}
          <Route element={<UserLayout />}>
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
          </Route>

          {/* ADMIN AREA */}
          <Route element={<AdminLayout />}>
            <Route path="/owner" element={<DashboardPage />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
