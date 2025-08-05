// Các tiện ích

import React from 'react';

export default function RoomAmenities({ room }) {
    return (
        <div className="bg-white p-4 m-5 shadow-md rounded-lg">
            {/* Tiêu đề */}
            <h2 className="text-xl font-bold mb-2">Tiện nghi phòng</h2>
            {/* Danh sách tiện nghi */}
            <ul className="list-disc list-inside">
                {room.amenities?.length > 0 ? (
                    room.amenities.map((amenity, index) => (
                        <li key={index}>{amenity}</li>
                    ))
                ) : (
                    <li>Chưa có thông tin tiện nghi</li>
                )}
            </ul>
        </div>
    );
}