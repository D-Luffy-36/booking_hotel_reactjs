export default function PriceRangeFilter({ title, items, onChange }) {
    return (
        <>
            <div className="mb-4">
                <h3 className="font-medium text-sm md:text-lg mb-2">{title}</h3>
                {items.map((range) => (
                    <label
                        key={range.label}
                        className="flex items-center gap-2 mb-2 text-gray-700 text-sm md:text-base"
                    >
                        <input
                            type="checkbox"
                            className="accent-blue-500 h-4 w-4"
                            onChange={() => onChange()}
                        />
                        {range.label}
                    </label>
                ))}
            </div>
        </>
    );
}