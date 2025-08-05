import React from 'react';
import { assets } from "../../../assets/assets";

export default function HotelLocation({ hotel }) {
    return (
        <div className="bg-white p-4 m-5 shadow-md rounded-lg">
            {/* Tiêu đề */}
            <h2 className="text-xl font-bold mb-2">Vị trí khách sạn</h2>
            {/* Địa chỉ */}
            <div className="flex items-center gap-1">
                <img src={assets.locationIcon} alt="vị trí" />
                <p>{hotel.address}, {hotel.city}</p>
            </div>
        </div>
    );
}