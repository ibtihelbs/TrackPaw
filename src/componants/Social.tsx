import H1 from "./H1";

const Social = () => {
  return (
    <section className="py-12 bg-gray-100 bg-no-repeat bg-bottom bg-[length:200px_200px] bg-[url(https://cdn.pixabay.com/photo/2016/04/07/18/57/silhouette-1314467_640.png)]">
      <div className="container mx-auto px-6 text-center">
        <H1 content="What Our Customers Say" center={false} />
        <div className="mt-8 flex flex-wrap justify-around">
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white flex items-start rounded-lg shadow p-6">
              <img src="./clients/2.png" alt="user" className="h-[50px] " />

              <div>
                <p className="text-gray-600">
                  "I love the health monitoring feature. It gives me peace of
                  mind knowing my cat is safe."
                </p>
                <h3 className="text-lg font-semibold text-gray-800 mt-4">
                  - Jane Smith
                </h3>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white rounded-lg flex items-start shadow p-6">
              <img src="./clients/1.png" alt="user" className="h-[50px] " />
              <div>
                <p className="text-gray-600">
                  "Track Paws saved my pet! The real-time tracking helped us
                  find our lost dog within minutes."
                </p>
                <h3 className="text-lg font-semibold text-gray-800 mt-4">
                  - John Doe
                </h3>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white flex items-start rounded-lg shadow p-6">
              <img src="./clients/3.png" alt="user" className="h-[50px] " />
              <div>
                <p className="text-gray-600">
                  "The best investment for any pet owner. Highly recommend Track
                  Paws!"
                </p>
                <h3 className="text-lg font-semibold text-gray-800 mt-4">
                  - Alex Johnson
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Social;
