import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Bắt buộc import CSS để bản đồ hiển thị đúng
import L from "leaflet";
import LoadingSpinner from "../../../conponents/ui/LoadingSpinner";

// ===== Fix lỗi marker mặc định của Leaflet =====
// Leaflet trên Vite/React thường mất icon mặc định, phải set thủ công
const defaultIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png", // icon marker
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png", // bóng của marker
  iconSize: [25, 41], // kích thước icon [width, height]
  iconAnchor: [12, 41], // điểm neo của icon (vị trí chính xác trên bản đồ)
});
// Gán mặc định cho tất cả marker
L.Marker.prototype.options.icon = defaultIcon;

// ===== Component LocationMap =====
export const LocationMap = ({ hotel }) => {
  // Nếu chưa có dữ liệu hotel hoặc thiếu tọa độ, hiển thị loading
  // Loading animation khi dữ liệu chưa sẵn sàng
  if (!hotel || !hotel.lat || !hotel.lng) return <LoadingSpinner />;

  return (
    <MapContainer
      center={[hotel.lat, hotel.lng]} // tâm bản đồ là tọa độ hotel
      zoom={13} // mức zoom mặc định
      style={{ height: "400px", width: "100%" }} // bắt buộc set chiều cao, width để bản đồ hiển thị
    >
      {/* TileLayer: nền bản đồ, ở đây dùng OpenStreetMap */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Marker: đánh dấu vị trí hotel */}
      <Marker position={[hotel.lat, hotel.lng]}>
        {/* Popup: hiển thị thông tin khi click vào marker */}
        <Popup>{hotel.name || "Hotel location"}</Popup>
      </Marker>
    </MapContainer>
  );
};

// React.memo: chỉ re-render khi props hotel thay đổi, tối ưu performance
export default React.memo(LocationMap);
