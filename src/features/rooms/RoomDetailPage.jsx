import { useParams } from "react-router-dom";
import PageWrapper from "../../conponents/layout/PageWrapper";
import RoomHeader from "./sections/RoomHeader";
import HotelHostInfo from "./sections/HotelHostInfo";
import HotelLocation from "./sections/HotelLocation";
import RoomAmenities from "./sections/RoomAmenities";
import RoomDescription from "./sections/RoomDescription";
import RoomGallery from "./sections/RoomGallary";
import RoomSummary from "./sections/RoomSummary";

export default function RoomDetailPage({ rooms }) {
  const { id } = useParams(); // lấy id từ URL param
  const room = rooms.find((room) => room._id.toString() === id); // Tìm phòng theo id

  if (!room) {
    return <div>Room not found!</div>; // nếu không có room
  }
  return (
    <PageWrapper className="bg-amber-200 m-20">
      <div>
        {/* Gồm 7 phần: RoomHeader, HotelHostInfo, HotelLocation, RoomAmenities, RoomDescription, RoomGallery, RoomSummary */}
        <RoomHeader room={room} />
        <RoomGallery room={room} />
        <HotelHostInfo hotel={room.hotel} />
        <HotelLocation hotel={room.hotel} />
        <RoomAmenities room={room} />
        <RoomDescription room={room} />
        <RoomSummary room={room} />

        {/*
            <HotelHostInfo hotel={room.hotel} />
            <HotelLocation hotel={room.hotel} />
            <RoomAmenities room={room} />
            <RoomDescription room={room} />
            <RoomGallery room={room} />
            <RoomSummary room={room} />
        */}
      </div>
    </PageWrapper>
  );
}
