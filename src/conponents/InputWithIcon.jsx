
export default function InputWithIcon({ icon, altText, placeholder }) {

    return (
        <div className="flex items-center border rounded px-2 py-1">
            {icon && <img src={icon} alt={altText} className="w-4 h-4 mr-2" />}
            <input placeholder={placeholder} className="flex-1 outline-none"
            />
        </div>
    )

}