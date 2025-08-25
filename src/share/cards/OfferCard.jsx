import React from 'react';
import { Link } from 'react-router-dom';

export default function OfferCard({ offer }) {
    return (
        <div className="relative w-[300px] h-[200px] rounded-xl shadow-md gap-6
        overflow-hidden flex flex-wrap flex-col justify-between active:scale-105 hover:z-50
        md:hover:scale-110 transform duration-300 z-10 will-change-transform cursor-pointer">

            {/* Ảnh nền full cover */}
            <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-full object-cover"
            />

            {/* Overlay đen mờ */}
            <div className="absolute inset-0 bg-opacity-30 p-4 flex flex-col justify-between">
                {/* Badge trên cùng */}
                <span className="bg-white text-black text-xs font-semibold px-2 py-1 rounded-md w-max">
                    {offer.priceOff}% OFF
                </span>

                {/* Nội dung ở giữa */}
                <div className="text-white space-y-1">
                    <h3 className="text-lg font-semibold">{offer.title}</h3>
                    <p className="text-sm">{offer.description}</p>
                    <p className="text-xs">Expires {offer.expiryDate}</p>
                </div>

                {/* Nút dưới cùng */}
                <Link key={offer._id} to={`offer/${offer._id}`}
                    className="text-sm text-white font-medium flex items-center gap-1">
                    View Offers <span>&rarr;</span>
                </Link>
            </div>
        </div>
    );
}
