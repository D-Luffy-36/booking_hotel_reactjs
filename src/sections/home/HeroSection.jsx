import { assets } from "../../assets/assets";
import InputWithIcon from "../../conponents/InputWithIcon";

export default function HeroSection() {
    return (
        <section id="hero-section">
            <div
                style={{ backgroundImage: `url(${assets.heroImage})`, backgroundRepeat: 'no-repeat' }}
                className="h-screen bg-cover bg-center flex flex-col items-center md:items-start justify-center px-6 md:px-16 text-white ">
                <div className="bg-[#49B9FF80] text-lg px-3 py-2 rounded-full my-4">
                    The Ultimate Hotel Experience
                </div>

                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 text-center md:text-left font-playfair drop-shadow-lg">
                    Discover Your Perfect <br /> Getaway Destination
                </h1>

                <div className="text-sm md:text-base text-center mb-4">
                    <p>Unparalleled luxury and comfort await at the world's most exclusive</p>
                    <p> hotels and resorts. Start your journey today.</p>
                </div>


                <form action="">
                    <div className="bg-white/80 backdrop-blur-md p-4 rounded-xl flex flex-col md:flex-row gap-4 w-full max-w-4xl text-black shadow-lg">
                        {/* Destination */}
                        <InputWithIcon
                            icon={assets.locationIcon}
                            altText="Destination"
                            placeholder="Destination"
                        />

                        {/* Check in */}
                        <InputWithIcon
                            icon={assets.calenderIcon}
                            type="date"
                            altText="Check in"
                            placeholder="Check in"
                        />

                        {/* Check out */}
                        <InputWithIcon
                            icon={assets.calenderIcon}
                            altText="Check out"
                            type="date"
                            placeholder="Check out"
                        />

                        {/* Guests */}
                        <InputWithIcon
                            altText="Guest"
                            placeholder="Guest"
                        />

                        {/* Search Button */}
                        <button className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-blue-500 transition-all duration-300 shadow-md">
                            Search
                        </button>
                    </div>


                </form>

            </div>
        </section>

    );
}
