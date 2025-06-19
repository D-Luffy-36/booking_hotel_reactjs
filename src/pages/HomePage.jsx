import HeroSection from "../sections/HeroSection";
import FurtureSection from "../sections/FutureSection";
import OfferSection from "../sections/OfferSection";
import TestimonialSection from "../sections/TestimonialSection";
import Footer from "../sections/Footer";
import StayInspiredSection from "../sections/StayInspired";


export default function HomePage() {
    return (
        <>
            <HeroSection />
            <FurtureSection />
            <OfferSection />
            <TestimonialSection />
            <StayInspiredSection />
            <Footer />
        </>
    );
}