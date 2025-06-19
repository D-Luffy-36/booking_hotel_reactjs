import { assets } from "../assets/assets";

export default function RoomCard({ room, hotel }) {
    let isBestSeller = room.isBestSeller;
    return (
        <div className="w-[17rem] rounded-xl overflow-hidden shadow-md bg-white relative">
            {/* Image */}
            <img
                src={room.images[0]}
                alt={hotel.name}
                className="w-full h-[10rem] object-cover"
            />
            {isBestSeller && (
                <div className="absolute top-2 left-2  text-xs font-semibold px-3 py-2 rounded-full bg-[#FFFFFF] md:text-[12px]">
                    Best Seller
                </div>
            )}

            {/* Content */}
            <div className="p-4">
                {/* Hotel Name */}
                <h3 className="text-lg font-semibold">{hotel.name}</h3>

                {/* Rating */}
                <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
                    <img src={assets.starIconFilled} alt="star" className="w-4 h-4" />
                    <span>{hotel.rating}</span>
                </div>

                {/* Price + Button */}
                <div className="flex items-center justify-between mt-3">
                    <p className="text-xl font-bold text-blue-600">${hotel.pricePerNight} <span className="text-sm text-gray-500">{room.pricePerNight}/night</span></p>
                    <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
}
