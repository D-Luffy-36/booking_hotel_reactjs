import { assets } from "../../assets/assets.js"
import { useNavigate } from "react-router-dom";

export default function RoomCard({ room }) {
    let isBestSeller = room.isBestSeller;
    let hotel = room.hotel;
    const navigate = useNavigate();
    return (
        <div className="w-[17rem] rounded-xl overflow-hidden bg-white relative 
            shadow-md hover:shadow-xl transition-all duration-300 
            border border-transparent hover:border-white hover:scale-110"
            key={room._id}>

            {/* Image */}
            <img
                src={room.images[0]}
                alt={hotel.name}
                className="w-full h-[10rem] object-cover"
            />
            {isBestSeller && (
                <div className="absolute top-3 left-3 text-xs font-semibold md:font-medium px-3 py-2 rounded-full bg-[#FFFFFF] md:text-[12px]">
                    Best Seller
                </div>
            )}

            {/* Content */}
            <div className="p-4 pt-5">
                {/* Hotel Name and star*/}
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{hotel.name}</h3>

                    {/* Rating */}
                    <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
                        <img src={assets.starIconFilled} alt="star" className="w-4 h-4" />
                        <p> <span>{hotel.rating}</span></p>
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
    <div className="flex items-center justify-between mt-4">
        <p className="text-xl font-bold text-blue-600">${pricePerNight}<span className="text-sm text-gray-500">/night</span ></p>
        <button
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-all cursor-pointer"
            onClick={onClick}
        >
            View Details
        </button>
    </div>
);
