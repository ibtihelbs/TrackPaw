import React from "react";
import H2 from "./H2";
import P from "./P";
import QandA from "./QandA";
import H1 from "./H1";

const Stat: React.FC = () => {
  return (
    <section className="py-12 ">
      <div className="container mx-auto px-6 text-left">
        {/* Missing and Stolen Pets Data Section */}
        <div className="mb-8 grid justify-center ">
          <div className="max-w-[600px] text-center bg-white shadow-lg">
            <img
              className="h-[100px] -rotate-12 "
              src="https://cdn.pixabay.com/photo/2015/07/09/22/26/warning-838655_640.png"
              alt="miss"
            />

            <H2 content="Missing and Stolen Pets Data" />
            <P content="Don't Let Your Pet Become a Statistic. Every year, thousands of pets go missing in the UK due to various reasons such as theft or simply wandering off. According to recent data, over 250,000 pets are reported missing annually, and unfortunately, pet theft has also seen a rise, with nearly 2,000 dogs reported stolen in 2022 alone." />
          </div>
        </div>
        <div id="qANDa" className="grid grid-cols-5 gap-4">
          <div className="rotate-90 -translate-x-full">
            <H1 content="Q&A" center={true} />
          </div>
          {/* How Our Community Alerts Work Section */}
          <div className="mb-8 col-span-2">
            <H2 content="How Our Community Alerts Work" />
            <QandA
              question="How do I report a missing pet?"
              answer="If your pet goes missing, report it immediately through our app. Your report will be instantly shared with our community of pet owners and local pet professionals."
            />
            <QandA
              question="How do community alerts work?"
              answer="Our community members receive real-time alerts about missing pets in their area. This collective vigilance significantly increases the chances of recovering lost pets."
            />
            <QandA
              question="Are there any rewards for engaging with the community?"
              answer="Yes, by helping others find their pets, you can earn rewards. These rewards can be redeemed for discounts on GPS trackers and in our online store."
            />
            <QandA
              question="Who else is notified when I report a missing pet?"
              answer="Track Paws will notify local pet professionals, rescues, vets, and dog wardens in the area where your pet was last seen."
            />
            <QandA
              question="Is there any additional support for lost pet sightings?"
              answer="Yes, Track Paws provides a free 24/7 phone line for lost pet sightings."
            />
          </div>
          <div className="col-span-2">
            {/* Live GPS Tracking Paid Feature Section */}
            <div className="mb-8 ">
              <H2 content="Live GPS Tracking Paid Feature" />
              <QandA
                question="What is the live GPS tracking feature?"
                answer="Our live GPS tracking feature ensures that you can always keep an eye on your pet's location. With real-time updates and instant alerts, you can act quickly if your pet leaves a designated safe zone. This proactive approach is crucial in preventing pets from becoming part of the missing statistics."
              />
            </div>
            {/* How to Report a Missing Pet Section */}
            <div className="mb-8">
              <H2 content="How to Report a Missing Pet" />
              <QandA
                question="How do I report a missing pet using the Track Paws app?"
                answer={`Follow these steps:\n1. Open the Track Paws App: Navigate to the 'Report Missing Pet' section.\n2. Fill in the Details: Provide essential information such as the pet’s name, breed, last known location, and any distinguishing features.\n3. Submit the Report: Once submitted, your report will be shared with our community and local pet professionals.`}
              />
            </div>
          </div>
        </div>
        {/* Join Our Community Section */}
        <div className="m-auto max-w-[800px] grid grid-cols-2 gap-5 p-5 bg-yellow rounded-lg">
          <img
            src="https://cdn.pixabay.com/photo/2020/04/27/15/00/friends-5100219_640.jpg"
            alt="community"
            className="rounded-lg h-full object-cover w-full"
          />
          <div>
            <H2 content="Join Our Community" />
            <P content="By working together, we can significantly reduce the number of pets that go missing each year. Join Track Paws today and be a part of our mission to protect and reunite pets with their families." />
            <P content="Join the Community for Free" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stat;
