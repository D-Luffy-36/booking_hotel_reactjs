/**
 * Lọc phòng theo loại phòng.
 *
 * Hàm này kiểm tra xem một phòng có thuộc loại phòng được người dùng chọn hay không.
 * Nếu người dùng không chọn loại phòng nào (mảng `roomTypes` rỗng), hàm sẽ trả về `true` để giữ lại tất cả phòng.
 * Nếu có chọn, chỉ giữ lại những phòng có `room.roomType` nằm trong danh sách `roomTypes`.
 *
 * @param {Object} room - Đối tượng đại diện cho một phòng. Phải có thuộc tính `roomType` là chuỗi.
 * @param {string[]} roomTypes - Mảng các loại phòng mà người dùng muốn lọc (ví dụ: ["Luxury Room", "Double Bed"]).
 * @returns {boolean} - Trả về `true` nếu phòng thỏa điều kiện lọc, `false` nếu không.
 *
 * @example
 * Ví dụ 1: Không chọn filter => phòng nào cũng hợp lệ
 * filterByRoomType({ roomType: "Luxury Room" }, []) // => true
 *
 * Ví dụ 2: Chỉ hiện các phòng "Luxury Room" hoặc "Double Bed"
 * filterByRoomType({ roomType: "Family Suite" }, ["Luxury Room", "Double Bed"]) // => false
 * filterByRoomType({ roomType: "Luxury Room" }, ["Luxury Room", "Double Bed"]) // => true
 */
export function filterByRoomType(room, roomTypes) {
    return (
        !roomTypes.length || roomTypes.includes(room.roomType)
    );
}
