import { ServiceCard } from "./servicecard";
import { ServiceHeader } from "./serviceheader";
import { BsArrowRightCircle } from "react-icons/bs";

export const Services: React.FC = () => (
  <div id="services" className="py-20 bg-white">
    <div className="container mx-auto w-[90%] flex flex-col items-center gap-16">
      <ServiceHeader />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <ServiceCard key={index} />
        ))}
      </div>

      <div className="w-full flex flex-col gap-5 md:flex-row md:justify-center">
        <a
          href="#"
          className="bg-primaryColor text-center text-white rounded-lg font-semibold hover:bg-secondaryColor py-[0.8rem] cursor-pointer shadow-inner hover:shadow-inner transition-all duration-500 ease-out md:w-52"
        >
          Explore All Services
        </a>

        <a
          href="#"
          className="flex justify-center gap-2 font-semibold py-[0.8rem] text-primaryColor hover:text-secondaryColor transition-all duration-500 ease-out md:w-52"
        >
          Get a Custom Service
          <span className="text-2xl">
            <BsArrowRightCircle />
          </span>
        </a>
      </div>
    </div>
  </div>
);
