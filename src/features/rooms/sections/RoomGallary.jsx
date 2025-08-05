// Hình ảnh khách sạn


import React from 'react';

export default function RoomGallery({ room }) {
    return (
        <div className="bg-white p-4 m-5 shadow-md rounded-lg">
            {/* Tiêu đề */}
            <h2 className="text-xl font-bold mb-2">Hình ảnh phòng</h2>
            {/* Lưới hình ảnh */}
            <div className="grid grid-cols-2 gap-4">
                {room.images?.length > 0 ? (
                    room.images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Hình ảnh phòng ${index + 1}`}
                            className="w-full h-auto rounded"
                        />
                    ))
                ) : (
                    <p>Chưa có hình ảnh</p>
                )}
            </div>
        </div>
    );
}