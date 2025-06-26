import { RoomTypeFilter } from "./filter"

export default function FilterGroup({ filters, onChange, onClear }) {
    return (<>
        <div className="w-full md:w-[280px] lg:w-[300px] bg-[#F9F9F9] h-auto  p-4 md:p-6 border rounded-lg shadow-sm">
            {/* Header */}
            <div className="flex justify-between items-center border-b pb-2 mb-4">
                <h2 className="text-lg md:text-xl font-semibold">FILTERS</h2>
                <button
                    className="text-sm text-gray-500 hover:text-black transition"
                >
                    CLEAR
                </button>
            </div>

            <RoomTypeFilter
                title="Popular filters"
                roomTypes={["Single Bed", "Family Suite", "Double Bed", "Luxury Room"]}
                onChange={onChange}
            />



            {/* Bộ lọc đánh giá */}
            <div className="mb-4">
                <h3 className="font-medium text-sm md:text-lg mb-2">Đánh giá</h3>
                {[3, 4, 5].map((star) => (
                    <label
                        key={star}
                        className="flex items-center gap-2 mb-2 text-gray-700 text-sm md:text-base"
                    >
                        <input
                            type="checkbox"
                            className="accent-blue-500 h-4 w-4"
                        />
                        {star} stars or more
                    </label>
                ))}
            </div>


            {/* Bộ lọc vị trí */}
            <div className="mb-4">
                <h3 className="font-medium text-sm md:text-lg mb-2">Vị trí</h3>
                {["Hà Nội", "TP.HCM", "Đà Nẵng", "Nha Trang"].map((location) => (
                    <label
                        key={location}
                        className="flex items-center gap-2 mb-2 text-gray-700 text-sm md:text-base"
                    >
                        <input
                            type="checkbox"
                            className="accent-blue-500 h-4 w-4"
                        />
                        {location}
                    </label>
                ))}
            </div>


            {/* Ngày nhận/trả phòng */}
            <div className="mb-4">
                <h3 className="font-medium text-sm md:text-lg mb-2">Ngày nhận/trả phòng</h3>
                <div className="flex flex-col gap-2">
                    <input
                        type="date"
                        className="w-full p-2 border rounded-lg text-sm md:text-base"
                        placeholder="Ngày nhận phòng"
                    />
                    <input
                        type="date"
                        className="w-full p-2 border rounded-lg text-sm md:text-base"
                        placeholder="Ngày trả phòng"
                    />
                </div>
            </div>


            {/* Số lượng khách */}
            <div className="mb-4">
                <h3 className="font-medium text-sm md:text-lg mb-2">Số lượng khách</h3>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <label className="text-sm md:text-base text-gray-700">Người lớn:</label>
                        <input
                            type="number"
                            min="1"
                            className="w-20 p-2 border rounded-lg text-sm md:text-base"
                            defaultValue="1"
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <label className="text-sm md:text-base text-gray-700">Trẻ em:</label>
                        <input
                            type="number"
                            min="0"
                            className="w-20 p-2 border rounded-lg text-sm md:text-base"
                            defaultValue="0"
                        />
                    </div>
                </div>
            </div>

            {/* Price filter */}
            <div className="mb-4">
                <h3 className="font-medium text-sm md:text-lg mb-2">Price</h3>
                {[
                    { label: "$100 to $200", min: 100, max: 200 },
                    { label: "$200 to $300", min: 200, max: 300 },
                    { label: "$300 to $600", min: 300, max: 600 },
                ].map((range) => (
                    <label
                        key={range.label}
                        className="flex items-center gap-2 mb-2 text-gray-700 text-sm md:text-base"
                    >
                        <input
                            type="checkbox"
                            className="accent-blue-500 h-4 w-4"
                        />
                        {range.label}
                    </label>
                ))}
            </div>


            {/* Bộ lọc tiện ích */}
            <div className="mb-4">
                <h3 className="font-medium text-sm md:text-lg mb-2">Tiện ích</h3>
                {["Wi-Fi", "Hồ bơi", "Bãi đỗ xe", "Gym"].map((amenity) => (
                    <label
                        key={amenity}
                        className="flex items-center gap-2 mb-2 text-gray-700 text-sm md:text-base"
                    >
                        <input
                            type="checkbox"
                            className="accent-blue-500 h-4 w-4"
                        />
                        {amenity}
                    </label>
                ))}
            </div>




            {/* Sort By */}
            <div>
                <h3 className="font-medium text-sm md:text-lg mb-2">Sort By</h3>
                {["Price Low to High", "Price High to Low", "Newest First"].map((option) => (
                    <label
                        key={option}
                        className="flex items-center gap-2 mb-2 text-gray-700 text-sm md:text-base"
                    >
                        <input
                            type="radio"
                            name="sort"
                            value={option}
                            className="accent-blue-500 h-4 w-4"
                        />
                        {option}
                    </label>
                ))}
            </div>
        </div>
    </>)
}