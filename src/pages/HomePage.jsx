import HeroSection from "../sections/home/HeroSection";
import FurtureSection from "../sections/home/FutureSection";
import OfferSection from "../sections/home/OfferSection";
import TestimonialSection from "../sections/home/TestimonialSection";
import Footer from "../sections/home/Footer";
import StayInspiredSection from "../sections/home/StayInspired";


export default function HomePage() {
    return (
        <>
            <HeroSection />
            <FurtureSection />
            <OfferSection />
            <TestimonialSection />
            <StayInspiredSection />
        </>
    );
}