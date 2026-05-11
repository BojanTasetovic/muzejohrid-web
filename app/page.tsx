import Hero from "@/components/Hero";
import FeaturedAttractions from "@/components/FeaturedAttractions";
import EventsSection from "@/components/EventsSection";
import OhridPassBanner from "@/components/OhridPassBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedAttractions />
      <EventsSection />
      <OhridPassBanner />
      <Footer />
    </>
  );
}
