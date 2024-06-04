import H1 from "./H1";

const Features = () => {
  return (
    <section id="features" className="py-12">
      <div className="container mx-auto px-6 text-center">
        <H1 content="Empowering Pet Care with Technology" />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className=" text-3xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold text-gray-800">
              24/7 Support
            </h3>
            <p className="text-gray-600 mt-2">
              Round-the-clock support for all your pet care needs.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className=" text-3xl mb-4">⏱️</div>
            <h3 className="text-xl font-semibold text-gray-800">
              Real-Time Tracking
            </h3>
            <p className="text-gray-600 mt-2">
              Get instant updates on your pet's location.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className=" text-3xl mb-4">👥</div>
            <h3 className="text-xl font-semibold text-gray-800">
              Trusted Teams
            </h3>
            <p className="text-gray-600 mt-2">
              Reliable teams to support and assist you.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className=" text-3xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold text-gray-800">Secure Data</h3>
            <p className="text-gray-600 mt-2">
              Your data is protected with top-notch security.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
