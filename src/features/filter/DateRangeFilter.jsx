export default function DateRangeFilter({ title, checkInDate, checkOutDate, onDateChange }) {
    // ❌ BUG: Truyền trực tiếp `null` hoặc `undefined`
    //  vào value của input[type="date"] gây lỗi hoặc warning trong console.
    // 📌 FIX: Dùng fallback: `value={checkInDate || ""}` để đảm bảo input luôn nhận string.
    return (
        <>
            {/* Ngày nhận/trả phòng
            bonus logic check date quan trọng  */}
            <div className="mb-4">
                <h3 className="font-medium text-sm md:text-lg mb-2">{title}</h3>
                <div className="flex flex-col gap-2">
                    <input
                        type="date"
                        className="w-full p-2 border rounded-lg text-sm md:text-base"
                        placeholder="Check in"
                        // ❌ BUG nếu checkInDate là null ⇒ input lỗi
                        value={checkInDate || ""} // ✅ FIXED: fallback để tránh lỗi undefined
                        // thay đổi ngày check in
                        onChange={(e) => onDateChange(e.target.value, checkOutDate)}
                    />
                    <input
                        type="date"
                        className="w-full p-2 border rounded-lg text-sm md:text-base"
                        placeholder="Check out"
                        value={checkOutDate || ""}
                        onChange={() => onDateChange(checkInDate, checkOutDate)}
                    />
                </div>
            </div>
        </>
    );
}