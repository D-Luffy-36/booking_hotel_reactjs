/*
! problem
 selected không đồng bộ với UI
*/

/**
 * RoomTypeFilter Component
 * 
 * @param {string} title - Tiêu đề của filter (ví dụ: "Room Type")
 * @param {string[]} roomTypes - Danh sách các loại phòng (ví dụ: ["Single", "Double", ...])
 * @param {string[]} selected - Danh sách các loại phòng đang được chọn (do cha truyền xuống)
 * @param {function} onChange - Hàm callback gọi về cha khi người dùng chọn / bỏ chọn loại phòng
 *
 * @description
 * - Khi người dùng click hoặc bỏ click một checkbox:
 *      => Gọi onChange(label) để component cha xử lý thay đổi.
 * - Khi `selected` thay đổi (từ cha truyền xuống) => Component re-render UI tương ứng.
 *  Trong React, mỗi lần bạn tích hoặc bỏ tích checkbox, bạn gọi một hàm xử lý (callback).
 * - Thêm label vào selected nếu nó chưa có.
 * - Xóa label khỏi selected nếu nó đã có.
 */
export default function RoomTypeFilter({ title, roomTypes, selected = [], onChange }) {
    /*
      * Xử lý khi user click checkbox:
      * - Nếu label đã tồn tại trong selected => Cha sẽ gỡ ra (bỏ tích)
      * - Nếu label chưa tồn tại trong selected => Cha sẽ thêm vào (tích)
      * - Hàm này KHÔNG xử lý logic thêm / xóa mà chỉ gọi callback onChange(label)
      * - Component cha sẽ quyết định cập nhật lại mảng selected [] mới
      *
      * @param {string} label - Tên loại phòng vừa được click
    */
    const handleCheckboxChange = (label) => {
        let newRoomTypes = [];
        // nếu đã tồn tại trong selected thì xóa => lọc tất cả phòng không trùng tên label
        if (selected.includes(label)) {
            newRoomTypes = selected.filter((typeRoom) => {
                return typeRoom !== label
            });
        }
        else {
            newRoomTypes = [...selected, label];
        }

        // ngược lại thì gọi lên cha cho vào filter => update lại selected
        onChange(newRoomTypes);
    }

    console.log("selected type: ", selected)
    return (
        <>
            {/* Popular filters */}
            <div className="mb-4">
                <h3 className="font-medium text-sm md:text-lg mb-2">{title}</h3>
                {roomTypes.map((label) => (
                    <label
                        key={label}
                        className="flex items-center gap-2 mb-2 text-gray-700 text-sm md:text-base"
                    >
                        {/* 
                        dạng ô vuông click 
                        // ? ô input khi nào được tính là checked?
                        // * => khi mà slected chứa label 😾
                        */}
                        <input
                            type="checkbox"
                            className="accent-blue-500 h-4 w-4"
                            checked={selected.includes(label)} // dynamic update
                            onChange={() => handleCheckboxChange(label)}
                        />
                        {label}
                    </label>
                ))}
            </div>
        </>
    );
}



