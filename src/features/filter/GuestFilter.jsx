export default function GuestFilter({ title, guest, onChange }) {
    return (
        <>
            <div className="mb-4">
                <h3 className="font-medium text-sm md:text-lg mb-2">{title}</h3>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <label className="text-sm md:text-base text-gray-700">Adult:</label>
                        <input
                            type="number"
                            min="1"
                            className="w-20 p-2 border rounded-lg text-sm md:text-base"
                            value={guest.adults}
                            onChange={() => { }}
                        />
                    </div>

                    <div className="flex items-center gap-2">
                        <label className="text-sm md:text-base text-gray-700">Children:</label>
                        <input
                            type="number"
                            min="0"
                            className="w-20 p-2 border rounded-lg text-sm md:text-base"
                            value={guest.children}
                            onChange={() => { }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}