// components/TestimonialCard.jsx
import React from 'react';

export default function TestimonialCard({ testimonial }) {

    return (
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center space-y-4">
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
                {[...Array(5)].map((_, i) => (
                    <svg
                        key={i}
                        className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.176 0l-3.38 2.455c-.784.57-1.839-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.393c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69l1.286-3.966z" />
                    </svg>
                ))}
            </div>
            <p className="text-gray-700 text-sm">{testimonial.review}</p>
        </div>
    );
}
