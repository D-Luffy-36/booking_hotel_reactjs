export default function StayInspiredSection() {
    return (
        <section className="bg-[#0D1B2A] text-white px-6 py-10 md:px-12 lg:px-20 rounded-2xl mx-auto max-w-3xl text-center my-14 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">Stay Inspired</h2>
            <p className="mb-6 text-sm md:text-base leading-relaxed text-gray-300">
                Join our newsletter and be the first to discover new destinations, exclusive offers, and travel inspiration.
            </p>
            <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full sm:w-auto px-4 py-3 rounded-md  outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button className="bg-black text-white px-6 py-3 rounded-md flex items-center gap-2 hover:bg-gray-800 transition duration-300">
                    Subscribe
                    <span>→</span>
                </button>
            </form>
            <p className="text-gray-400 text-xs md:text-sm mt-4">
                By subscribing, you agree to our Privacy Policy and consent to receive updates.
            </p>
        </section>
    );
}
