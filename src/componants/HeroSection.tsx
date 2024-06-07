import H1 from "./H1";
import H2 from "./H2";
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
      <div className="text-center h-1/2 translate-y-1/4  ">
        <H1 content="Never Lose Track" center={false} />
        <H1 content="of Your Pet Again" center={false} />
        <P content="Real-time GPS tracking and health monitoring for peace of mind." />

        <button className="mt-6 text-xl shadow-md bg-accent  text-white py-2 px-4 rounded-full hover:bg-orange-700 transition duration-300">
          Get Started
        </button>
      </div>
      <div className="flex justify-around py-6 w-full bg-accent text-white font-bold absolute bottom-0">
        <H2 content="Easy-to-use tracking devices " />
        <H2 content="Safe monitoring for your pets " />
        <H2 content="Real-time location updates " />
        <H2 content="Instant alerts " />
      </div>
    </section>
  );
};

export default HeroSection;
