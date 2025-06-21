
import React from 'react';
import TestimonialCard from '../../conponents/TestimonialCard.jsx';
import { testimonials } from "../../assets/assets.js";

export default function TestimonialSection() {
    return (
        <section className="py-12 px-4 md:px-16 bg-gray-50">
            <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-4">
                What Our Guests Say
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
                Discover why discerning travelers choose QuickStay for their luxury accommodations around the world.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {testimonials.map((t) => (
                    <TestimonialCard key={t.id} testimonial={t} />
                ))}
            </div>
        </section>
    );
}
