import { useState } from "react";
import PageWrapper from "../../conponents/layout/PageWrapper"
import { roomsDummyData } from "../../assets/assets";
import SectionHeader from "../../conponents/layout/SectionHeader"
import HotelRoomCard from "../../conponents/cards/HotelRoomCard"
import { FilterGroup } from "../filter/filter";
import { filterByRoomType } from "../filter/ultils/index"

export default function AllRooms() {
    const initialFilters = {
        roomTypes: [],
        priceRanges: [],
        amenities: [],
        sortBy: "",
        minRating: [],
        location: [],
        checkIn: null,
        checkOut: null,
        guests: { adults: 1, children: 0 },
    };

    const [filters, setFilters] = useState(initialFilters);

    const filterRoom = roomsDummyData.filter((room) => {
        return filterByRoomType(
            room, filters.roomTypes
        );
    })


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

            {/* // TODO: Duyệt qua filteredRooms để hiển thị danh sách phòng đã được lọc theo bộ lọc người dùng */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-6">
                {/* Room list */}
                <div className="flex flex-col space-y-6">
                    {filterRoom.map((room) => (
                        <div key={room._id}>
                            <HotelRoomCard room={room} />
                            <hr className="my-4 border-t border-gray-300" />
                        </div>
                    ))}
                </div>

                {/* // !BUG: Khi bỏ chọn (bỏ dấu tích) filter, component không tự động re-render danh sách phòng
                //? Có thể do FilterGroup không gọi đúng setFilters hoặc filters không cập nhật như mong muốn.
                // TODO: Kiểm tra xem hàm onChange trong <FilterGroup /> có thực sự gọi setFilters với giá trị mới hay không.
                // * Nếu filters không cập nhật => UI không re-render.
                //* Gợi ý: Thêm console.log ở setFilters và kiểm tra props truyền vào FilterGroup. */}
                <FilterGroup
                    filters={filters}
                    onChange={(newFilter) =>
                        setFilters((prev) => ({ ...prev, ...newFilter }))
                    }
                    onClear={() => setFilters(initialFilters)}
                />
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