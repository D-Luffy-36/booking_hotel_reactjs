import { assets } from "../../assets/assets";

export default function Footer() {
    return (
        <footer className="bg-gray-100 text-gray-700 mt-12 p-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo + Mô tả */}
                <div>
                    <div className="font-playfair text-3xl text-gray-800 mb-2">QuickStay</div>
                    <p>Discover the world’s most extraordinary places to stay, from boutique hotels to luxury villas and private islands.</p>
                    <div className="flex gap-4 mt-4">
                        {/* Giả sử dùng icon SVG hoặc img */}
                        <img src={assets.instagramIcon} alt="Instagram" className="w-5 h-5" />
                        <img src={assets.twitterIcon} alt="Twitter" className="w-5 h-5" />
                        <img src={assets.facebookIcon} alt="Facebook" className="w-5 h-5" />
                        <img src={assets.linkendinIcon} alt="LinkedIn" className="w-5 h-5" />
                    </div>
                </div>

                {/* Company */}
                <div>
                    <h4 className="font-semibold mb-2">COMPANY</h4>
                    <ul className="space-y-1">
                        <li>About</li>
                        <li>Careers</li>
                        <li>Press</li>
                        <li>Blog</li>
                        <li>Partners</li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h4 className="font-semibold mb-2">SUPPORT</h4>
                    <ul className="space-y-1">
                        <li>Help Center</li>
                        <li>Safety Information</li>
                        <li>Cancellation Options</li>
                        <li>Contact Us</li>
                        <li>Accessibility</li>
                    </ul>
                </div>

                {/* Stay Updated */}
                <div>
                    <h4 className="font-semibold mb-2">STAY UPDATED</h4>
                    <p className="mb-2">Subscribe to our newsletter for travel inspiration and special offers.</p>
                    <form className="flex">
                        <input type="email" placeholder="Your email" className="px-2 py-1 border rounded-l-md outline-none" />
                        <button className="bg-black text-white px-4 py-1 rounded-r-md">
                            <img src={assets.arrowIcon} className="w-4 invert" />
                        </button>
                    </form>
                </div>
            </div>
        </footer>

    );
}