import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

  const thumbnails = images.slice(0, 4);

  // Animation variants for thumbnails

  const thumbnailVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.3, ease: "easeOut" },
    }),
  };

  return (
    <div className="p-4 m-5 shadow-md rounded-lg bg-white">
      <div className="flex gap-4 items-stretch h-96">
        {/* Main Image with Fade Animation */}
        <div className="w-1/2 h-full rounded overflow-hidden">
          <AnimatePresence>
            <motion.img
              key={selectedIndexImg}
              src={images[selectedIndexImg] || "/placeholder.png"}
              alt={`Hình ảnh phòng ${selectedIndexImg + 1}`}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>
        </div>

        {/* Thumbnail Grid with Staggered Animation */}
        <div className="w-1/2 h-full grid grid-cols-2 grid-rows-2 gap-2">
          {thumbnails.map((image, index) => {
            const isActive = selectedIndexImg === index;
            return (
              <motion.div
                key={index}
                custom={index}
                variants={thumbnailVariants}
                initial="hidden"
                animate="visible"
                role="button"
                tabIndex={0}
                onClick={() => setSelectedIndexImg(index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedIndexImg(index);
                  }
                }}
                className={`relative overflow-hidden rounded cursor-pointer border-2 transition-transform focus:outline-none
                  ${
                    isActive
                      ? "border-blue-500 scale-[1.02]"
                      : "border-transparent"
                  }
                  hover:scale-[1.05] hover:border-blue-300
                `}
              >
                <motion.img
                  src={image}
                  alt={`Hình ảnh phòng ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  whileHover={{ scale: 1.1, opacity: 0.9 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                />
              </motion.div>
            );
          })}

          {/* Empty placeholders to maintain layout */}
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
