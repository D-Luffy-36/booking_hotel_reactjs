// Tiêu đề, đánh giá, địa điểm(title, review, location)

import { assets } from "../../assets/assets";

export default function RoomHeader({ room }) {
    if (!room || !room.hotel) {
        return (
            <div>no data of room</div>
        )
    };

    const { hotel } = room;
    return (
        <div className="flex flex-col justify-start bg-amber-700 m-5">
            <div className="flex items-center gap-4">
                <div className="font-playfair">
                    <span className="md:text-[32px] font-playfair">{hotel.name}</span>
                    <span className="text-sm md:text-base mx-1">({room.roomType})</span>
                </div>

                <div className="bg-[#F8701B] w-[65px] h-[25px]
                    rounded-full flex items-center justify-center
                    text-xs font-medium mt-0 
                    px-[8px] py-[16px]">
                    20% OFF
                </div>
            </div>

            <div className="flex items-center gap-1 text-base font-outfit text-[#6B7280E3]">
                <img src={assets.locationIcon} alt="location" />
                {hotel.address} {hotel.city}
            </div>


        </div>
    )
}