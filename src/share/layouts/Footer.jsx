import { assets } from "../../assets/assets";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-12">
        {/* Logo + Mô tả */}
        <div className="lg:col-span-2">
          <div className="font-playfair text-3xl text-gray-800 mb-3">
            Demo-Booking
          </div>
          <p className="text-sm leading-relaxed">
            Discover Vietnam’s most unique stays, from cozy boutique hotels and
            beachside resorts to authentic homestays across the country.
          </p>
          <div className="flex gap-4 mt-4">
            <img
              src={assets.instagramIcon}
              alt="Instagram"
              className="w-5 h-5"
            />
            <img src={assets.twitterIcon} alt="Twitter" className="w-5 h-5" />
            <img src={assets.facebookIcon} alt="Facebook" className="w-5 h-5" />
            <img
              src={assets.linkendinIcon}
              alt="LinkedIn"
              className="w-5 h-5"
            />
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-3">COMPANY</h4>
          <ul className="space-y-2 text-sm">
            <li>About</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Blog</li>
            <li>Partners</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-semibold mb-3">SUPPORT</h4>
          <ul className="space-y-2 text-sm">
            <li>Help Center</li>
            <li>Safety Information</li>
            <li>Cancellation Options</li>
            <li>Contact Us</li>
            <li>Accessibility</li>
          </ul>
        </div>

        {/* Stay Updated */}
        <div className="sm:col-span-2 lg:col-span-1">
          <h4 className="font-semibold mb-3">STAY UPDATED</h4>
          <p className="text-sm mb-3">
            Subscribe to our newsletter for travel inspiration and special
            offers.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-3 py-2 border rounded-l-md outline-none text-sm"
            />
            <button className="bg-black text-white px-4 py-2 rounded-r-md">
              <img src={assets.arrowIcon} className="w-4 invert" />
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
