import Image from "next/image";
import { BsArrowRightCircle } from "react-icons/bs";

export const ServiceCard: React.FC = () => (
  <div className="drop-shadow-2xl bg-coolBg text-white rounded-3xl p-8 w-full flex flex-col gap-1 hover:bg-coolBg hover:text-white transition-all duration-500 ease-out lg:bg-white lg:text-black">
    <div>
      <Image src="/icons/icon.png" alt="icon" width={70} height={70} />
    </div>

    <h1 className="text-2xl font-semibold">UX/UI Design</h1>
    <span>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis
      suscipit.
    </span>

    <div className="mt-5 text-right">
      <a href="#" className="flex gap-2 items-center justify-end text-primaryColor font-semibold">
        <span>Read More</span>
        <span className="text-xl">
          <BsArrowRightCircle />
        </span>
      </a>
    </div>
  </div>
);
