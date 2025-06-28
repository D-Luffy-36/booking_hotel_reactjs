export default function Amenity({ title, amenities, onChange }) {
    return (
        <>
            <div className="mb-4">
                <h3 className="font-medium text-sm md:text-lg mb-2">Utilities</h3>
                {amenities.map((amenity) => (
                    <label
                        key={amenity}
                        className="flex items-center gap-2 mb-2 text-gray-700 text-sm md:text-base"
                    >
                        <input
                            type="checkbox"
                            className="accent-blue-500 h-4 w-4"
                        />
                        {amenity}
                    </label>
                ))}
            </div>
        </>
    );
}