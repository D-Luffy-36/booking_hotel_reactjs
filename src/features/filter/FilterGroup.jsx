import {
    RoomTypeFilter, RatingFilter, PriceRangeFilter,
    LocationFilter, DateRangeFilter, AmenitiyFilter,
    GuestFilter, SortOptionsFilter
} from "./filter";
import { cities, amenities } from "../../assets/assets";

export default function FilterGroup({ filters, onChange, onClear }) {
    return (
        <aside className="w-full bg-white rounded-xl shadow-md p-4 md:p-6 space-y-6 max-h-[calc(100vh-100px)] overflow-y-auto sticky top-24">
            {/* Header */}
            <div className="flex justify-between items-center border-b pb-2">
                <h2 className="text-xl font-semibold">Filters</h2>
                <button
                    onClick={onClear}
                    className="text-sm text-gray-500 hover:text-black transition"
                >
                    Clear
                </button>
            </div>

            {/* Group: Room type */}
            <RoomTypeFilter
                title="Room Type"
                roomTypes={["Single Bed", "Family Suite", "Double Bed", "Luxury Room"]}
                selected={filters.roomTypes} // ✅ Mảng các loại phòng đã chọn, truyền từ filters gốc
                /**
                 * ✅ Khi RoomTypeFilter gọi onChange(roomTypes):
                 *    - `roomTypes` lúc này chỉ là MẢNG ["Single Bed", "Luxury Room", ...]
                 * ✅ Ta GÓI nó lại thành 1 OBJECT { roomTypes: [...] }
                 *    - Để phù hợp với filters gốc: { roomTypes, priceRanges, ... }
                 * ✅ Sau đó AllRooms merge { roomTypes: [...] } vào filters bằng spread:
                 *    setFilters(prev => ({ ...prev, ...newFilter }))
                 *
                 * 👉 Mục đích: Con chỉ bắn dữ liệu thô, cha chịu trách nhiệm format đúng shape.
                 */
                onChange={(roomTypes) => onChange({ roomTypes })}
            />

            {/* Group: Sort */}
            {/* <SortOptionsFilter
                title="Sort By"
                options={["Price Low to High", "Price High to Low", "Newest First"]}
                selected={filters.sortBy}
                onChange={(sortBy) => onChange({ sortBy })}
            /> */}

            {/* Group: Price */}
            {/* <PriceRangeFilter
                title="Price Range"
                items={[
                    { label: "$100 to $200", min: 100, max: 200 },
                    { label: "$200 to $300", min: 200, max: 300 },
                    { label: "$300 to $600", min: 300, max: 600 },
                ]}
                selected={filters.priceRanges}
                onChange={(priceRanges) => onChange({ priceRanges })}
            /> */}

            {/* Group: Rating */}
            {/* <RatingFilter
                title="Minimum Rating"
                items={[3, 4, 5].map((star) => ({ label: `${star} stars or more`, value: star }))}
                selected={filters.minRating}
                onChange={(minRating) => onChange({ minRating })}
            /> */}

            {/* Group: Location */}
            {/* <LocationFilter
                title="Location"
                locations={cities}
                selected={filters.location}
                onChange={(location) => onChange({ location })}
            /> */}

            {/* Group: Date */}
            {/* <DateRangeFilter
                title="Check-in / Check-out"
                checkInDate={filters.checkIn}
                checkOutDate={filters.checkOut}
                onDateChange={({ checkIn, checkOut }) =>
                    onChange({ checkIn, checkOut })
                }
            /> */}

            {/* Group: Guests */}
            {/* <GuestFilter
                title="Guests"
                guest={filters.guests}
                onChange={(guests) => onChange({ guests })}
            /> */}



            {/* Group: Amenities */}
            {/* <AmenitiyFilter
                title="Amenities"
                amenities={amenities}
                selected={filters.amenities}
                onChange={(amenities) => onChange({ amenities })}
            /> */}

        </aside>
    );
}
