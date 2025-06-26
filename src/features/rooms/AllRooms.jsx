import { useState } from "react";
import PageWrapper from "../../conponents/layout/PageWrapper"
import { roomsDummyData } from "../../assets/assets";
import SectionHeader from "../../conponents/layout/SectionHeader"
import HotelRoomCard from "../../conponents/cards/HotelRoomCard"
import { FilterGroup } from "../filter/filter";
export default function AllRooms() {

    const [filters, setFilters] = useState({
        roomTypes: [],
        priceRanges: [],
        amenities: [],
        sortBy: "",
        minRating: [], // Mảng cho nhiều mức sao
        location: [], // Mảng cho nhiều vị trí
        checkIn: null, // Ngày nhận phòng
        checkOut: null, // Ngày trả phòng
        guests: { adults: 1, children: 0 }, // Object cho số lượng khách
    });

    return (
        <PageWrapper>
            <SectionHeader
                title={"Hotel Rooms"}
                className="justify-start items-start text-start my-6 md:my-12"
            >
                <p className="text-sm md:text-base">
                    Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.
                </p>
            </SectionHeader>

            <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-6">
                <div className="flex-1">
                    {roomsDummyData.map((room) => (
                        <div key={room._id}>
                            <HotelRoomCard room={room} />
                            <hr className="my-4 border-t border-gray-300" />
                        </div>
                    ))}
                </div>
                <FilterGroup filters={filters} />
            </div>


            <div className="mx-auto my-6 w-full md:w-[180px]">
                <button
                    className="w-full h-[50px] bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2 text-center transition duration-200 text-sm md:text-base"
                >
                    Show More
                </button>
            </div>
        </PageWrapper>
    );
}