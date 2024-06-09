import Cta from "./Cta";
import H1 from "./H1";
import P from "./P";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative h-screen grid justify-center align-center"
      style={{
        backgroundImage: "url(./hero.png)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="text-center h-1/2 translate-y-1/4">
        <H1 content="Never Lose Track" center={false} />
        <H1 content="of Your Pet Again" center={false} />
        <P content="Real-time GPS tracking and health monitoring for peace of mind." />
        <Cta />
      </div>
      <div className="flex justify-around py-6 w-full bg-white font-bold absolute bottom-0">
        <div className="flex items-center space-x-2">
          <span role="img" aria-label="Tracking device">
            📍
          </span>
          <h3>Easy-to-use tracking devices</h3>
        </div>
        <div className="flex items-center space-x-2">
          <span role="img" aria-label="Monitoring for pets">
            🛡️
          </span>
          <h3>Safe monitoring for your pets</h3>
        </div>
        <div className="flex items-center space-x-2">
          <span role="img" aria-label="Location updates">
            🗺️
          </span>
          <h3>Real-time location updates</h3>
        </div>
        <div className="flex items-center space-x-2">
          <span role="img" aria-label="Instant alerts">
            🔔
          </span>
          <h3>Instant alerts</h3>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
