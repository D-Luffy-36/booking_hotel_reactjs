import React from "react";

const RoomAdvantages = ({ advantages }) => {
  console.log(advantages);
  return (
    <div className="p-4 sm:p-6 md:p-8">
      <div className="space-y-6">
        {advantages?.map((item, index) => (
          <div key={index} className="flex items-start gap-4 sm:gap-6">
            {/* Icon */}
            <img
              src={item.icon}
              alt={item.title}
              className="w-6 h-6 sm:w-7 sm:h-7 mt-1 flex-shrink-0"
            />

            {/* Nội dung */}
            <div className="flex flex-col">
              <h4 className="font-semibold text-gray-900 leading-snug text-base sm:text-lg">
                {item.title}
              </h4>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-1">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomAdvantages;
