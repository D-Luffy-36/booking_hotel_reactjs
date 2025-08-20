import React from 'react';

export default function HotelHostInfo({ hotel }) {
    return (
        <div className="bg-white p-4 m-5 shadow-md rounded-lg">
            {/* Tiêu đề */}
            <h2 className="text-xl font-bold mb-2">Thông tin về chủ khách sạn</h2>
            {/* Thông tin chi tiết */}
            <p><strong>Tên:</strong> {hotel.owner?.username || "Chưa có thông tin"}</p>
            <p><strong>Email:</strong> {hotel.owner?.email || "Chưa có thông tin"}</p>
        </div>
    );
}