import PageWrapper from "../../conponents/layout/PageWrapper";
import { assets, roomsDummyData } from "../../assets/assets";
import SectionHeader from "../../conponents/layout/SectionHeader";
import HotelRoomCard from "../../conponents/cards/HotelRoomCard"


export default function AllRooms() {
    return (
        <PageWrapper>
            <SectionHeader title={"Hotel Rooms"} className="justify-start items-start text-start my-12">
                <p>
                    Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.
                </p>
            </SectionHeader>

            <div className="h-auto flex flex-col">
                {roomsDummyData.map((room, index) => {
                    return <HotelRoomCard key={index} room={room}></HotelRoomCard>
                })}

            </div>

            <div className="mx-auto my-4 w-full md:w-[180px]">
                <button className="w-full h-[50px] bg-blue-500 hover:bg-blue-600 
                 text-white rounded-lg px-4 py-2 text-center transition duration-200">
                    Show More
                </button>
            </div>

        </PageWrapper>
    );
}