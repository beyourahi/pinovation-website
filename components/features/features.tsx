import { FeatureCard } from "./featurecard";
import { FeatureHeader } from "./featureheader";

export const Features = () => (
  <div className="py-20 bg-coolBg text-white">
    <div className="container mx-auto w-[85%] flex flex-col items-center gap-16">
      <FeatureHeader />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
          <FeatureCard key={index} />
        ))}
      </div>
    </div>
  </div>
);
