import { useState } from "react";

export default function BookingForm({ onSubmit }) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ checkIn, checkOut, guests });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-4 gap-4 p-5 m-5 bg-white rounded-xl shadow-md items-end"
    >
      {/* Check-in */}
      <div className="flex flex-col">
        <label className="text-sm font-medium mb-1">Check-In</label>
        <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          className="border p-2 rounded h-11"
        />
      </div>

      {/* Check-out */}
      <div className="flex flex-col">
        <label className="text-sm font-medium mb-1">Check-Out</label>
        <input
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          min={checkIn}
          className="border p-2 rounded h-11"
        />
      </div>

      {/* Guests */}
      <div className="flex flex-col">
        <label className="text-sm font-medium mb-1">Guests</label>
        <input
          type="number"
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
          min={1}
          className="border p-2 rounded h-11"
        />
      </div>

      {/* Button */}
      <div className="flex">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-2 rounded-lg w-full h-11 font-medium"
        >
          Search Rooms
        </button>
      </div>
    </form>
  );
}
