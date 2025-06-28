import StarRating from "../ui/StarRating";
import { assets, facilityIcons } from "../../assets/assets";
import { Link } from "react-router-dom";

export default function HotelRoomCard({ room }) {

    const { address, city, rating, name } = room.hotel;
    const { amenities, pricePerNight } = room;

    console.log("room data: ", room);
    return (
        <Link to={`/room/${room._id}`} className="flex flex-col md:flex-row my-4 py-4 gap-5 w-full">
            <div className="w-full md:w-[412px] h-[216px] md:h-auto">
                <img src={room.images[0]} className="w-full h-full object-cover rounded-xl" />
            </div>
            <div className="flex flex-col gap-3">
                <p><span className="text-gray-500">{address}</span></p>
                <p><span className="font-playfair text-2xl">{name}</span></p>
                <div className="flex flex-row gap-3 w-full">
                    <StarRating rating={rating} />
                    <p>200+ reviews</p>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-600">
                    <img src={assets.locationIcon} className="w-4 h-4" />
                    <p>{city}</p>
                </div>
                <div className=" flex flex-wrap gap-3">
                    {amenities.map((amenity, index) => {
                        // Lấy icon tương ứng từ object facilityIcons dựa vào tên tiện ích (amenity)
                        const icon = facilityIcons[amenity];
                        return (
                            <div key={index} className=" flex flex-row items-center gap-1.5 bg-[#F0F0F7] p-2 rounded-xl text-xs">
                                {icon && <img src={icon} alt={amenity} className="w-4 h-4" />}
                                {amenity}
                            </div>
                        );
                    })}
                </div>
                <div className="mt-2 md:mt-0">
                    <span className="text-xl font-semibold text-gray-800">${pricePerNight}/night</span>
                </div>
            </div>
        </Link>
    );
}