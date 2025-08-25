// components/TestimonialCard.jsx
import React from "react";
import StarRating from "../../share/ui/StarRating";

export default function TestimonialCard({ testimonial }) {
  return (
    <div
      className="bg-white rounded-lg p-6 flex flex-col items-center text-center
         space-y-4 transform duration-300 hover:scale-110 shadow-2xl hover:z-100"
    >
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-16 h-16 rounded-full object-cover"
      />
      <div className="space-y-1">
        <h4 className="text-lg font-semibold">{testimonial.name}</h4>
        <p className="text-sm text-gray-500">{testimonial.address}</p>
      </div>
      <div className="flex items-center">
        <StarRating rating={testimonial.rating} />
      </div>
      <p className="text-gray-700 text-sm">{testimonial.review}</p>
    </div>
  );
}
