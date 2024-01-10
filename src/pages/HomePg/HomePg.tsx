import { Footer } from "../components";
import {AsMangeSection, BlogSection, HeroSection, InvestSection, SectorHmSection} from "./components";
import TestHero from "./components/TestHero";

const HomePg = () => {
  return (
    <div >
      {/* <HeroSection /> */}
      <TestHero />
      <AsMangeSection />
      <InvestSection />
      <SectorHmSection />
      <BlogSection />
      <Footer />
    </div>
  )
}

export default HomePg