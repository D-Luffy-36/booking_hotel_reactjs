import { exclusiveOffers } from "../assets/assets"
import OfferCard from "../conponents/OfferCard";





export default function OfferSection() {
    return (
        <div className="flex flex-col items-center md:flex-row gap-4 justify-center mb-18">
            {exclusiveOffers.map((offer) => {
                return <OfferCard key={offer._id} offer={offer} />
            })}

        </div>
    );
}