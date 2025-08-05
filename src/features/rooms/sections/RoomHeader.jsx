import { assets } from "../../../assets/assets";
import StarRating from "../../../conponents/ui/StarRating";

export default function RoomHeader({ room }) {
    if (!room || !room.hotel) {
        return <div>Không có dữ liệu phòng!</div>; // Thông báo nếu không có dữ liệu
    }

    const { hotel } = room;

    return (
        <div className="flex flex-col justify-start bg-amber-700 m-5 p-4 rounded-lg">
            {/* Phần tiêu đề và giảm giá */}
            <div className="flex items-center gap-4">
                <div className="font-playfair">
                    <span className="md:text-[32px] font-playfair text-white">{hotel.name}</span>
                    <span className="text-sm md:text-base mx-1 text-gray-200">({room.roomType})</span>
                </div>
                {/* Nhãn giảm giá - hiện tại hardcoded, sau có thể làm động */}
                <div className="bg-[#F8701B] w-[65px] h-[25px] rounded-full flex items-center justify-center text-xs font-medium text-white">
                    20% OFF
                </div>
            </div>

            {/* Phần đánh giá */}
            <div className="flex gap-2 mb-2">
                <StarRating rating={hotel.rating} /> {/* Component hiển thị sao */}
                <p className="text-white">200+ đánh giá</p> {/* Số đánh giá - hiện tại hardcoded */}
            </div>

            {/* Phần địa điểm */}
            <div className="flex items-center gap-1 text-base font-outfit text-[#6B7280E3]">
                <img src={assets.locationIcon} alt="vị trí" />
                <span>{hotel.address}, {hotel.city}</span>
            </div>
        </div>
    );
}