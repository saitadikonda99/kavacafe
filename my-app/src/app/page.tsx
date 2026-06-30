import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ChefStory } from "@/components/sections/ChefStory";
import { MenuSection } from "@/components/sections/MenuSection";
import { Timeline } from "@/components/sections/Timeline";
import { Testimonials } from "@/components/sections/Testimonials";
import { Partners } from "@/components/sections/Partners";
import { Newsletter } from "@/components/sections/Newsletter";
import { InstagramGrid } from "@/components/sections/InstagramGrid";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ChefStory />
        <MenuSection />
        <Timeline />
        <Testimonials />
        <Partners />
        <Newsletter />
        <InstagramGrid />
      </main>
      <Footer />
    </>
  );
}
