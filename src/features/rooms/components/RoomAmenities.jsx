import React from "react";
import { facilityIcons } from "../../../assets/assets.js";
// các tiện ích
export default function RoomAmenities({ amenities }) {
  return (
    <div className="flex flex-wrap gap-3 mb-4">
      {amenities?.map((amenity) => (
        <span
          key={amenity}
          className="flex items-center gap-1 px-3 py-1 text-sm bg-gray-100 rounded-full border border-gray-200"
        >
          <img
            src={facilityIcons[amenity] || "/icons/default.svg"}
            alt={amenity}
            className="w-4 h-4"
          />
          {amenity}
        </span>
      ))}
    </div>
  );
}
