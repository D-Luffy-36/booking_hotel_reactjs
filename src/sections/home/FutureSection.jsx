import RoomCard from "../../conponents/RoomCard.jsx";
import { roomsDummyData } from '../../assets/assets.js'


export default function FurtureSection() {
    return (
        <div className="flex flex-col justify-center items-center px-4 md:px-8 lg:px-16 mt-6 md:my-14 md:py-10">

            {/* Title + Description */}
            <div className="flex flex-col justify-center items-center text-center my-6 max-w-xl">
                <h1 className="text-2xl md:text-4xl font-bold mb-4 font-playfair">Featured Hotels</h1>
                <p className="text-gray-600 text-sm md:text-base">
                    Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences.
                </p>
            </div>

            {/* Hotel Cards */}
            <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8 w-full max-w-6xl">
                    {roomsDummyData.map((room) => {
                        let hotel = room.hotel;
                        return (
                            <RoomCard key={room._id} room={room} hotel={hotel} />
                        );
                    })}
                </div>
            </div>

            {/* View All Hotels Button */}
            <div className="mt-20 mb-10 flex justify-center">
                <button className="border border-gray-400 text-gray-700 font-medium px-8 py-3 rounded-full hover:bg-blue-500 hover:text-white transition duration-300 shadow-md">
                    View All Hotels
                </button>

            </div>

        </div>
    );
}
