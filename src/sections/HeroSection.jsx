import { assets } from "../assets/assets";
import InputWithIcon from "../conponents/InputWithIcon";

export default function HeroSection() {
    return (
        <section id="hero-section">
            <div
                style={{ backgroundImage: `url(${assets.heroImage})` }}
                className="h-screen bg-cover bg-center flex flex-col items-start justify-center px-6 md:px-16 text-white"
            >
                <div className="bg-[#49B9FF80] text-lg px-3 py-2 rounded-full my-4">
                    The Ultimate Hotel Experience
                </div>

                <h1 className="text-3xl md:text-4xl font-bold mb-4">Discover Your Perfect Getaway Destination</h1>

                <div className="text-sm md:text-base">
                    <p>Unparalleled luxury and comfort await at the world's most exclusive</p>
                    <p> hotels and resorts. Start your journey today.</p>
                </div>

                <div className="w-full bg-white p-4 rounded flex flex-col md:flex-row gap-2 text-black my-5 ">

                    {/* destionation */}
                    <InputWithIcon icon={assets.locationIcon} altText={"Destination"} placeholder={"Destination"} />

                    {/* check in  */}
                    <InputWithIcon icon={assets.calenderIcon} altText={"Check in"} placeholder={"Check in"} />

                    {/* check out  */}
                    <InputWithIcon icon={assets.calenderIcon} altText={"Check out"} placeholder={"Check out"} />

                    <InputWithIcon altText={"Guest"} placeholder={"Guest"} />

                    <button className="w-full md:w-auto bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-200 transition-all duration-500 ease-in-out hover:shadow-lg">
                        Search
                    </button>

                </div>

            </div>
        </section>

    );
}
