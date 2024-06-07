import Header from "./Header";
import HeroSection from "./HeroSection";
import Benefits from "./Benefits";
import Social from "./Social";
import Features from "./Features";
import Footer from "./Footer";
import Pricing from "./Pricing";
import Table from "./Table";
import Contact from "./Contact";
import Stat from "./Stat";

const TrackPaws = () => {
  return (
    <div className="font-sans">
      {/* Headers */}
      <Header />
      {/* Hero Section */}
      <HeroSection />
      {/* Key Benefits */}
      <Benefits />
      {/* pricing */}
      <Pricing />
      {/**table */}
      <Table />
      {/* Social Proof */}
      <Social />
      {/* Features Section */}
      <Features />
      <Stat />
      <Contact />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TrackPaws;
