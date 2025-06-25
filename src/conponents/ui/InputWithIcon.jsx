
export default function InputWithIcon({ id, type = "text", placeholder, list }) {
    return (
        <div className="flex items-center border rounded px-2 py-1 flex-1 w-auto md:min-w-[150px]">
            <input id={id} placeholder={placeholder} list={list} className="flex-1 outline-none" type={type} />
        </div>
    )
}