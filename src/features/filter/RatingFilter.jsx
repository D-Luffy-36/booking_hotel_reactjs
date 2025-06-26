export default function RatingFilter({ title, items, onChange }) {
    return (
        <div className="mb-4">
            <h3 className="font-medium text-sm md:text-lg mb-2">{title}</h3>
            {items.map((item) => (
                <label
                    key={item.value}
                    className="flex items-center gap-2 mb-2 text-gray-700 text-sm md:text-base"
                >
                    <input
                        type="checkbox"
                        className="accent-blue-500 h-4 w-4"
                    />
                    {item.label}
                </label>
            ))}
        </div>
    );
}



// items = [
//   { label: "3 sao trở lên", value: 3 },
//   { label: "4 sao trở lên", value: 4 },
//   { label: "5 sao trở lên", value: 5 },
// ]