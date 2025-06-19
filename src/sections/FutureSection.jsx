import RoomCard from "../conponents/RoomCard.jsx";
import { roomsDummyData } from '../assets/assets.js'


export default function FurtureSection() {

    return (
        <div className="flex flex-col justify-center items-center px-4 md:px-8 lg:px-16">

            {/* Title + Description */}
            <div className="flex flex-col justify-center items-center text-center my-3 max-w-2xl">
                <h1 className="text-2xl md:text-4xl font-bold my-3">Featured Hotels</h1>
                <p className="text-gray-600 text-sm md:text-base">
                    Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences.
                </p>
            </div>

            {/* Hotel Cards (Grid instead of flex for better responsive) */}
            <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8 w-full max-w-6xl">
                    {
                        roomsDummyData.map((room) => {
                            let hotel = room.hotel;

                            return (
                                <RoomCard key={room._id} room={room} hotel={hotel} />
                            );
                        })
                    }
                </div>
            </div>


            {/* Button */}
            <div className="my-16">
                <button className="bg-blue-500 text-white px-5 py-2 rounded-full hover:bg-blue-600 transition">
                    View all Hotels
                </button>
            </div>

        </div>
    );
}
