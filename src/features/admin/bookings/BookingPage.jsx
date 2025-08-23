import React from "react";
import { assets } from "../../../assets/assets";

export default function BookingPage({ bookings }) {
  return (
    <div className="container max-w-screen-lg mx-auto bg-white px-4 sm:px-6 lg:px-8 py-8 mt-5 sm:mt-8 animate-fadeIn">
      <h1 className="text-3xl font-extrabold mb-4 text-gray-800">
        My Bookings
      </h1>
      <p className="text-gray-600 mb-6 max-w-2xl">
        Easily manage your past, current, and upcoming hotel reservations in one
        place.
      </p>

      <div className="overflow-x-auto scrollbar-hide shadow rounded-lg">
        <table className="w-full table-auto border-collapse min-w-[600px]">
          <thead className="bg-gray-100">
            <tr className="text-left text-gray-700 text-sm uppercase tracking-wider">
              <th className="py-3 px-4" scope="col">
                Hotels
              </th>
              <th className="py-3 px-4" scope="col">
                Booking Dates
              </th>
              <th className="py-3 px-4" scope="col">
                Payment
              </th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr
                key={booking._id}
                className="border-t border-gray-200 hover:bg-gray-50 transition duration-300 ease-in-out"
              >
                <td className="py-4 px-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img
                      src={booking.room.images?.[0] || assets.roomImg1}
                      alt={`${booking.hotel.name} - ${booking.room.roomType}`}
                      className="w-16 h-16 object-cover rounded-md mr-4 shadow-sm"
                    />
                    <div className="min-w-[150px]">
                      <h2 className="font-semibold text-base text-gray-800">
                        {booking.hotel.name} - {booking.room.roomType}
                      </h2>
                      <p className="text-sm text-gray-600">
                        {booking.hotel.address}, {booking.hotel.city}
                      </p>
                      <p className="text-sm text-gray-600">
                        {booking.guests} Guest(s)
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4 whitespace-nowrap text-sm text-gray-700">
                  <p>
                    {new Date(booking.checkInDate).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}{" "}
                    –{" "}
                    {new Date(booking.checkOutDate).toLocaleDateString(
                      "en-US",
                      {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      }
                    )}
                  </p>
                </td>
                <td className="py-4 px-4 whitespace-nowrap text-sm text-gray-700">
                  <p className="font-bold text-gray-900">
                    ${booking.totalPrice}
                  </p>
                  <div
                    className="flex items-center mt-1"
                    title={
                      booking.isPaid ? "Payment completed" : "Payment pending"
                    }
                  >
                    <span
                      className={`w-2 h-2 rounded-full mr-2 ${
                        booking.isPaid ? "bg-green-500" : "bg-red-500"
                      }`}
                    ></span>
                    <p>{booking.isPaid ? "Paid" : "Unpaid"}</p>
                    {!booking.isPaid && (
                      <button className="ml-4 bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded transition duration-200 flex items-center">
                        <span className="mr-1">💳</span> Pay now
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
