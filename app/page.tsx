import Hero from "@/components/Hero";
import FeaturedAttractions from "@/components/FeaturedAttractions";
import Pull from "@/components/Pull";
import MarqueeStrip from "@/components/MarqueeStrip";
import EventsSection from "@/components/EventsSection";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedAttractions />
      <Pull />
      <MarqueeStrip />
      <EventsSection />
      <Visit />
      <Footer />
    </>
  );
}
