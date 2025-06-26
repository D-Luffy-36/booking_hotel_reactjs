export default function DateRangeFilter({ title, onDateChange }) {
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
                    />
                    <input
                        type="date"
                        className="w-full p-2 border rounded-lg text-sm md:text-base"
                        placeholder="Check out"
                    />
                </div>
            </div>
        </>
    );
}