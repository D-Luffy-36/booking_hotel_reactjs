import React from 'react';

export default function RoomDescription({ room }) {
    return (
        <div className="bg-white p-4 m-5 shadow-md rounded-lg">
            {/* Tiêu đề */}
            <h2 className="text-xl font-bold mb-2">Mô tả phòng</h2>
            {/* Nội dung mô tả */}
            <p>{room.description || "Mô tả chi tiết về phòng sẽ được cập nhật sau."}</p>
        </div>
    );
}