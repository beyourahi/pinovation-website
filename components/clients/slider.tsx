import Image from "next/image";
import Marquee from "react-fast-marquee";

export const Slider: React.FC = () => (
  <>
    <Marquee speed={50} gradient={false}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => (
        <div className="ml-6" key={index}>
          <Image
            src="/images/clients/acme.jpg"
            alt="client logo"
            width={200}
            height={100}
            objectFit="contain"
          />
        </div>
      ))}
    </Marquee>
  </>
);
