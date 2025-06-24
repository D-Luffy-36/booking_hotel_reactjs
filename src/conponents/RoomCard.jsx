import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export default function RoomCard({ room, hotel }) {
    let isBestSeller = room.isBestSeller;
    const navigate = useNavigate();
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
                {/* Hotel Name and star*/}
                <div className="flex justify-between">
                    <h3 className="text-lg font-semibold">{hotel.name}</h3>

                    {/* Rating */}
                    <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
                        <img src={assets.starIconFilled} alt="star" className="w-4 h-4" />
                        <span>{hotel.rating}</span>
                    </div>
                </div>

                {/* location */}
                <div className="flex">
                    <img src={assets.locationIcon} alt="" />
                    <span className="text-[#6B7280E3]">{hotel.city}</span>
                </div>

                {/* Price + Button */}
                <PriceAndButton
                    pricePerNight={room.pricePerNight}
                    onClick={() => { navigate(`/room/${room._id}`) }} ></PriceAndButton>
            </div>
        </div>
    );
}



export const PriceAndButton = ({ pricePerNight, onClick }) => (
    <div className="flex items-center justify-between mt-3">
        <p className="text-xl font-bold text-blue-600">${pricePerNight}<span className="text-sm text-gray-500">/night</span ></p>
        <button
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
            onClick={onClick}
        >
            View Details
        </button>
    </div>
);
