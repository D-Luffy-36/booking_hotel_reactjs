
import React from 'react';
import TestimonialCard from '../conponents/TestimonialCard.jsx';
import { testimonials } from "../assets/assets.js";

export default function TestimonialSection() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
                <TestimonialCard key={t.id} testimonial={t} />
            ))}
        </div>
    );
}
