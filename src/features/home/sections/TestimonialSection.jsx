import React from "react";
import TestimonialCard from "../../../share/cards/TestimonialCard.jsx";
import { testimonials } from "../../../assets/assets.js";
import SectionHeader from "../../../share/layouts/SectionHeader.jsx";

export default function TestimonialSection() {
  return (
    <section className="py-12 px-4 md:px-16 bg-gray-50">
      <SectionHeader
        title="What Our Guests Say"
        className="items-center text-center mx-auto"
      >
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
          Discover why discerning travelers choose Demo-Booking for their luxury
          accommodations around the world.
        </p>
      </SectionHeader>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {Array.isArray(testimonials) &&
          testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
      </div>
    </section>
  );
}
