// Title nhỏ, giá, form Check Availability

import React from 'react';

export default function RoomSummary({ room }) {
    return (
        <div className="bg-white p-4 m-5 shadow-md rounded-lg">
            {/* Tiêu đề */}
            <h2 className="text-xl font-bold mb-2">Tóm tắt phòng</h2>
            {/* Thông tin tóm tắt */}
            <p><strong>Loại phòng:</strong> {room.roomType}</p>
            <p><strong>Giá mỗi đêm:</strong> ${room.pricePerNight || "Chưa cập nhật"}</p>
            <p><strong>Trạng thái:</strong> {room.isAvailable ? "Còn trống" : "Đã đặt"}</p>
        </div>
    );
}