// Title nhỏ, giá, form Check Availability

import RoomAmenities from "./RoomAmenities";

export default function RoomSummary({ room }) {
  const price =
    room?.pricePerNight != null
      ? new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(room.pricePerNight)
      : "Not available";
  const amenities = room?.amenities || [];

  return (
    <>
      <div className="bg-white p-4 m-5 shadow-lg rounded-xl">
        {/* Title + Price */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-playpair">
            {room?.name || "Experience Luxury Like Never Before"}
          </h2>
          <span className="text-xl font-semibold text-gray-800">
            {price}/day
          </span>
        </div>

        {/* Amenities */}
        <RoomAmenities amenities={amenities} />
      </div>
    </>
  );
}
