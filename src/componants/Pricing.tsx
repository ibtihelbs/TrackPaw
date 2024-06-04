import H1 from "./H1";
import P from "./P";

const Pricing = () => {
  const features = [
    "24/7 Support",
    "Real-Time Tracking",
    "Trusted Teams",
    "Secure Data",
  ];

  return (
    <section id="pricing" className="py-12 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <H1 content=" Choose Your Plan" />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              plan: "Free",
              price: "£0",
              features: features,
              cta: "Start Free Trial",
            },
            {
              plan: "Standard",
              price: "£12",
              features: features,
              cta: "Choose Plan",
            },
            {
              plan: "Premium",
              price: "£24",
              features: features,
              cta: "Choose Plan",
            },
          ].map((plan, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold text-gray-800 font-aprils">
                {plan.plan}
              </h3>
              <P content={`${plan.price}/month`} />
              <ul className="mt-4 space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-600">
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-6 bg-accent text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
