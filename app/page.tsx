import Navbar from "@/components/layout/Navbar";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HeroSection from "@/components/sections/HeroSection";
import LogosSection from "@/components/sections/LogosSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <LogosSection />
        <FeaturesSection />
      </main>
    </>
  );
}
