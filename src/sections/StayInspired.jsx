export default function StayInspiredSection() {
    return (
        <section className="bg-[#0D1B2A] text-white p-8 rounded-lg mx-auto max-w-4xl text-center my-14">
            <h2 className="text-2xl font-semibold mb-4">Stay Inspired</h2>
            <p className="mb-6">
                Join our newsletter and be the first to discover new destinations, exclusive offers, and travel inspiration.
            </p>
            <form className="flex justify-center">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-2 rounded-l-md text-black outline-none"
                />
                <button className="bg-black text-white px-4 py-2 rounded-r-md flex items-center gap-2">
                    Subscribe
                    <span>→</span>
                </button>
            </form>
            <p className="text-gray-400 text-sm mt-4">
                By subscribing, you agree to our Privacy Policy and consent to receive updates.
            </p>
        </section>
    );
}