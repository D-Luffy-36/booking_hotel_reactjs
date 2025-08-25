// src/components/SectionHeader.jsx
export default function SectionHeader({ title, children, className = "" }) {
    return (
        <div className={`flex flex-col max-w-xl ${className}`}>
            <h1 className="text-2xl md:text-4xl font-bold mb-4 font-playfair">{title}</h1>
            <div className="text-gray-600 text-sm md:text-base">
                {children}
            </div>
        </div>
    );
}
