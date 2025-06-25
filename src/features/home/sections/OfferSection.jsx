import { Link } from "react-router-dom";
import { exclusiveOffers } from "../../../assets/assets.js"
import OfferCard from "../../../conponents/cards/OfferCard.jsx"

export default function OfferSection() {
    return (
        <section className="bg-gray-100 py-12 px-4 md:px-16">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start mb-8 ">
                <div>
                    <h2 className="text-2xl md:text-3xl font-playfair mb-2">
                        Exclusive Offers
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base max-w-md">
                        Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.
                    </p>
                </div>
                <Link to='/offers'
                    className="mt-4 md:mt-0 text-sm md:text-base text-gray-600 hover:text-gray-900 flex items-center gap-1"
                >
                    View All Offers
                    <span className="text-xl">→</span>
                </Link>
            </div>

            {/* Offer Cards */}
            <div className="flex sm:flex-col sm:justify-center">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
                    {exclusiveOffers.map((offer) => (
                        <OfferCard key={offer._id} offer={offer} />
                    ))}
                </div>
            </div>

        </section>
    );
}
