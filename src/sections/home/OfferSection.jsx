import { exclusiveOffers } from "../../assets/assets"
import OfferCard from "../../conponents/OfferCard";



export default function OfferSection() {
    return (
        <section className="bg-gray-100 py-12 px-4 md:px-16">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start mb-8">
                <div>
                    <h2 className="text-2xl md:text-3xl font-playfair mb-2">
                        Exclusive Offers
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base max-w-md">
                        Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.
                    </p>
                </div>
                <a
                    href="#"
                    className="mt-4 md:mt-0 text-sm md:text-base text-gray-600 hover:text-gray-900 flex items-center gap-1"
                >
                    View All Offers
                    <span className="text-xl">→</span>
                </a>
            </div>

            {/* Offer Cards */}
            <div className="flex flex-wrap items-center md:flex-row gap-4 justify-center mb-16">
                {exclusiveOffers.map((offer) => (
                    <OfferCard key={offer._id} offer={offer} />
                ))}
            </div>
        </section>
    );
}
