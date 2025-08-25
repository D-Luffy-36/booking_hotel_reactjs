import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./features/home/HomePage.jsx";
import BookingPage from "./features/admin/bookings/BookingPage.jsx";
import RoomDetailPage from "./features/rooms/RoomDetailPage.jsx";
import AllRooms from "./features/rooms/AllRooms.jsx";
import DashboardPage from "./features/admin/dashboard/DashBoardPage.jsx";
import UserLayout from "../src/layouts/UserLayout.jsx";
import AdminLayout from "./layouts/AdminLayout.jsx";
import { roomsDummyData, userBookingsDummyData } from "./assets/assets.js";
import NotFoundPage from "../src/share/pages/NotFoundPage.jsx";
const App = () => {
  return (
    <div className="min-h-[70vh]">
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
          <Route path="/owner/dashboard" element={<DashboardPage />} />
          {/* <Route path="rooms/add" element={<AddRoomPage />} />
          <Route path="rooms" element={<ListRoomPage />} /> */}
        </Route>

        {/* Catch-all route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
