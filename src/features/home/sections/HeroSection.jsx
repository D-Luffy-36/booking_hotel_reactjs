import { assets, cities } from "../../../assets/assets.js";
import InputWithIcon from "../../../share/ui/InputWithIcon.jsx";

export default function HeroSection() {
  return (
    <section id="hero-section">
      <div
        style={{
          backgroundImage: `url(${assets.heroImage})`,
          backgroundRepeat: "no-repeat",
        }}
        className="h-screen bg-cover bg-center flex flex-col items-center md:items-start justify-center px-6 md:px-16 text-white "
      >
        <div className="bg-[#49B9FF80] text-lg px-3 py-2 rounded-full my-4">
          The Ultimate Hotel Experience
        </div>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 text-center md:text-left font-playfair drop-shadow-lg">
          Discover Your Perfect <br /> Getaway Destination
        </h1>

        <div className="text-sm md:text-base text-center mb-4">
          <p>
            Unparalleled luxury and comfort await at the world's most exclusive
          </p>
          <p> hotels and resorts. Start your journey today.</p>
        </div>

        <form action="">
          <div className="bg-white/80 backdrop-blur-md p-4 sm:p-6 rounded-xl w-full max-w-6xl mx-auto text-gray-500 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4 items-center">
            {/* Destination */}
            <div className="flex flex-col w-full">
              <div className="flex items-center gap-1.5 mb-1">
                <img
                  src={assets.locationIcon}
                  alt="destination"
                  className="w-[11px] h-[15px]"
                />
                <label
                  htmlFor="destination-input"
                  className="text-sm font-medium"
                >
                  Destination
                </label>
              </div>
              <InputWithIcon
                id="destination-input"
                icon={assets.locationIcon}
                altText="Destination"
                list="destinations"
                className="w-full"
              />
              <datalist id="destinations">
                {cities.map((city) => (
                  <option key={city} value={city} />
                ))}
              </datalist>
            </div>

            {/* Check in */}
            <div className="flex flex-col w-full">
              <div className="flex items-center gap-1.5 mb-1">
                <img
                  src={assets.calenderIcon}
                  alt="check-in"
                  className="w-[11px] h-[15px]"
                />
                <label htmlFor="check-in-input" className="text-sm font-medium">
                  Check in
                </label>
              </div>
              <InputWithIcon
                id="check-in-input"
                icon={assets.calenderIcon}
                type="date"
                altText="Check in"
                className="w-full"
              />
            </div>

            {/* Check out */}
            <div className="flex flex-col w-full">
              <div className="flex items-center gap-1.5 mb-1">
                <img
                  src={assets.calenderIcon}
                  alt="check-out"
                  className="w-[11px] h-[15px]"
                />
                <label
                  htmlFor="check-out-input"
                  className="text-sm font-medium"
                >
                  Check out
                </label>
              </div>
              <InputWithIcon
                id="check-out-input"
                icon={assets.calenderIcon}
                altText="Check out"
                type="date"
                className="w-full"
              />
            </div>

            {/* Guests */}
            <div className="flex flex-col w-full">
              <div className="flex items-center gap-1.5 mb-1">
                <label htmlFor="guest" className="text-sm font-medium">
                  Guests
                </label>
              </div>
              <InputWithIcon id="guest" altText="Guests" className="w-full" />
            </div>

            {/* Search Button */}
            <div className="w-full xl:w-auto col-span-full xl:col-span-1 mx-auto my-auto">
              {/* Search Button */}
              <div className="w-full xl:w-auto col-span-full xl:col-span-1">
                <button className="w-full xl:w-auto bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-blue-500 transition-all duration-300 shadow-md text-sm font-medium">
                  Search
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
