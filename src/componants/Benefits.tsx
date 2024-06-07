import H1 from "./H1";
import H2 from "./H2";
import P from "./P";

const Benefits = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-6 text-center">
        <H1 content="Track Paws" center={false} />
        <H1 content="garanties" center={false} />
        <div className="mt-8 grid grid-cols-2 grid-rows-3  ">
          <div className="w-full  p-4">
            <div className="bg-accent h-full rounded-lg shadow p-2">
              <div className="text-3xl mb-1">📍</div>
              <H2 content="Total Pet Care" />
              <P content="Real-time location, health monitoring, and activity tracking." />
            </div>
          </div>
          <div className="row-span-3 rounded-lg p-6 bg-yellow place-self-center self-center ">
            <img
              src="./paw.jpg"
              alt="paw"
              className="max-h-full m-auto   max-w-full object-cover rounded-lg"
            />
            <P content="Real-time GPS tracking and health monitoring for peace of mind." />

            <button className="mt-2 text-xl shadow-md bg-accent  text-white py-2 px-4 rounded-full hover:bg-orange-700 transition duration-300">
              Get Started
            </button>
          </div>
          <div className="w-full  p-4">
            <div className="bg-accent rounded-lg shadow p-2">
              <div className="text-3xl mb-1">🛡️</div>
              <H2 content="Pet Protection Services" />
              <P content="Geofencing, alerts, and history tracking to keep your pet safe." />
            </div>
          </div>
          <div className="w-full  p-4">
            <div className="bg-accent rounded-lg shadow p-2">
              <div className="text-3xl mb-1">🔍</div>
              <H2 content="Lost Pet Recovery" />
              <P content="Live tracking, community support, and emergency contacts." />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
