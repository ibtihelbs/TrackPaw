import H1 from "./H1";
import H2 from "./H2";
import P from "./P";

const Benefits = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-6 text-center">
        <H1 content="Track Paws" />
        <H1 content="garanties" />

        <div className="mt-8 flex flex-wrap justify-around">
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="text-3xl mb-4">📍</div>
              <H2 content="Total Pet Care" />
              <P content="Real-time location, health monitoring, and activity tracking." />
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="text-3xl mb-4">🛡️</div>
              <H2 content="Pet Protection Services" />
              <P content="Geofencing, alerts, and history tracking to keep your pet safe." />
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="text-3xl mb-4">🔍</div>
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
