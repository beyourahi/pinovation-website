import { TeamHeader } from "./teamheader";

export const Team: React.FC = () => (
  <div className="py-20 bg-white">
    <div className="container mx-auto w-[90%] flex flex-col items-center gap-16">
      <TeamHeader />
      
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <ServiceCard key={index} />
        ))}
      </div> */}
    </div>
  </div>
);
