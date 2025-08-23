import { useParams } from "react-router-dom";
import PageWrapper from "../../conponents/layout/PageWrapper";
import RoomHeader from "./components/RoomHeader";
import HotelHostInfo from "./components/HotelHostInfo";
import HotelLocation from "./components/HotelLocation";
import RoomAmenities from "./components/RoomAmenities";
import RoomDescription from "./components/RoomDescription";
import RoomGallery from "./components/RoomGallary";
import RoomSummary from "./components/RoomSummary";
import BookingForm from "./components/BookingForm";
import LocationMap from "./components/LocationMap";
import RoomAdvantages from "./components/RoomAdvantages";
import LoadingSpinner from "../../conponents/ui/LoadingSpinner";
import { hotelDummyData, roomCommonData } from "../../assets/assets";

export default function RoomDetailPage({ rooms }) {
  const { id } = useParams(); // lấy id từ URL param
  const room = rooms.find((room) => room._id.toString() === id); // Tìm phòng theo id

  const handleCheckAvailability = async (data) => {
    console.log(data);
  };

  // giả lập lat, lng thực tế  khác
  const hotelWithCoords = {
    ...hotelDummyData,
    lat: 10.7798,
    lng: 106.7006,
  };

  if (!room) {
    return (
      <div>
        <LoadingSpinner />
      </div>
    ); // nếu không có room
  }

  return (
    <PageWrapper className="bg-white m-20">
      <div>
        {/* Gồm 7 phần: RoomHeader, HotelHostInfo, HotelLocation, RoomAmenities, RoomDescription, RoomGallery, RoomSummary */}
        <RoomHeader room={room} />
        <RoomGallery room={room} />
        <RoomSummary room={room} />
        <BookingForm onSubmit={handleCheckAvailability} />
        <RoomAdvantages advantages={roomCommonData} />
        <LocationMap hotel={hotelWithCoords} />
      </div>
    </PageWrapper>
  );
}
