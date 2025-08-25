import React from "react";
import RoomCard from "../../../share/cards/RoomCard.jsx";
import { roomsDummyData } from "../../../assets/assets.js";
import SectionHeader from "../../../share/layouts/SectionHeader.jsx";
import { Link } from "react-router-dom";

export default function FutureSection() {
  return (
    <div className="flex flex-col justify-center items-center px-4 md:px-8 lg:px-16 mt-6  md:py-10">
      {/* Title + Description */}

      <SectionHeader
        title="Featured Hotels"
        className="items-center text-center"
      >
        <p className="text-gray-600 text-sm md:text-base mb-5">
          Discover our handpicked selection of exceptional properties around the
          world, offering unparalleled luxury and unforgettable experiences.
        </p>
      </SectionHeader>

      {/* Hotel Cards */}

      <div className="flex flex-wrap items-center md:flex-row gap-4 justify-center mb-16">
        {roomsDummyData.slice(0, 4).map((room) => (
          <RoomCard key={room._id} room={room} />
        ))}
      </div>

      {/* View All Hotels Button */}
      <Link to={"/rooms"} className="mt-10 mb-20 flex justify-center">
        <button className="border border-gray-400 text-gray-700 font-medium px-8 py-3 rounded-full hover:bg-blue-500 hover:text-white transition duration-300 shadow-md">
          View All Hotels
        </button>
      </Link>
    </div>
  );
}
