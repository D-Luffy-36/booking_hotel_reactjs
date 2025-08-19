// Hình ảnh khách sạn (bên trái = bên phải về width & height)
import React, { useEffect, useState } from "react";

export default function RoomGallery({ room }) {
  const images = room?.images || [];
  const [selectedIndexImg, setSelectedIndexImg] = useState(0);

  useEffect(() => {
    if (images.length === 0) {
      setSelectedIndexImg(0);
    } else if (selectedIndexImg >= images.length) {
      setSelectedIndexImg(0);
    }
  }, [images, selectedIndexImg]);

  // thumbnails dùng 4 ảnh (0..3). Nếu bạn muốn bỏ ảnh lớn khỏi thumbnails -> slice(1,5)
  const thumbnails = images.slice(0, 4);

  return (
    <div className="bg-white p-4 m-5 shadow-md rounded-lg">
      {/* Container: đặt một chiều cao cố định để 2 cột bằng nhau */}
      <div className="flex gap-4 items-stretch h-96">
        {/* Bên trái: width = 1/2, full height */}
        <div className="w-1/2 h-full rounded overflow-hidden">
          <img
            src={images[selectedIndexImg] || "/placeholder.png"}
            alt={`Hình ảnh phòng ${selectedIndexImg + 1}`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bên phải: width = 1/2, grid 2x2, full height */}
        <div className="w-1/2 h-full grid grid-cols-2 grid-rows-2 gap-2">
          {thumbnails.map((image, index) => {
            const isActive = selectedIndexImg === index;
            return (
              <div
                key={index}
                role="button"
                tabIndex={0}
                onClick={() => setSelectedIndexImg(index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedIndexImg(index);
                  }
                }}
                className={`relative overflow-hidden rounded cursor-pointer border-2 transition-transform focus:outline-none ${
                  isActive
                    ? "border-blue-500 scale-[1.02]"
                    : "border-transparent"
                }`}
              >
                {/* mỗi ô lấy toàn chiều cao ô: dùng absolute + object-cover */}
                <img
                  src={image}
                  alt={`Hình ảnh phòng ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            );
          })}

          {/* Nếu thiếu ô để đủ 4 ô thì render ô trống giữ layout */}
          {Array.from({ length: Math.max(0, 4 - thumbnails.length) }).map(
            (_, i) => (
              <div
                key={`empty-${i}`}
                className="rounded border border-dashed border-gray-200 bg-gray-50"
                aria-hidden
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}
