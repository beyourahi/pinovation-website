import Image from "next/image"
import Marquee from "react-fast-marquee";

export const Slider: React.FC = () => (
  <>
    <Marquee speed={50} gradient={false}>
      <div>
        <Image src="/images/clients/acme.jpg" alt="client logo" width={150} height={50} objectFit="contain" />
      </div>

      <div>
        <Image src="/images/clients/acme.jpg" alt="client logo" width={150} height={50} objectFit="contain" />
      </div>

      <div>
        <Image src="/images/clients/acme.jpg" alt="client logo" width={150} height={50} objectFit="contain" />
      </div>

      <div>
        <Image src="/images/clients/acme.jpg" alt="client logo" width={150} height={50} objectFit="contain" />
      </div>

      <div>
        <Image src="/images/clients/acme.jpg" alt="client logo" width={150} height={50} objectFit="contain" />
      </div>

      <div>
        <Image src="/images/clients/acme.jpg" alt="client logo" width={150} height={50} objectFit="contain" />
      </div>

      <div>
        <Image src="/images/clients/acme.jpg" alt="client logo" width={150} height={50} objectFit="contain" />
      </div>

      <div>
        <Image src="/images/clients/acme.jpg" alt="client logo" width={150} height={50} objectFit="contain" />
      </div>
    </Marquee>

    <Marquee speed={50} direction="right" gradient={false}>
      <div>
        <Image src="/images/clients/acme.jpg" alt="client logo" width={150} height={50} objectFit="contain" />
      </div>

      <div>
        <Image src="/images/clients/acme.jpg" alt="client logo" width={150} height={50} objectFit="contain" />
      </div>

      <div>
        <Image src="/images/clients/acme.jpg" alt="client logo" width={150} height={50} objectFit="contain" />
      </div>

      <div>
        <Image src="/images/clients/acme.jpg" alt="client logo" width={150} height={50} objectFit="contain" />
      </div>

      <div>
        <Image src="/images/clients/acme.jpg" alt="client logo" width={150} height={50} objectFit="contain" />
      </div>

      <div>
        <Image src="/images/clients/acme.jpg" alt="client logo" width={150} height={50} objectFit="contain" />
      </div>

      <div>
        <Image src="/images/clients/acme.jpg" alt="client logo" width={150} height={50} objectFit="contain" />
      </div>

      <div>
        <Image src="/images/clients/acme.jpg" alt="client logo" width={150} height={50} objectFit="contain" />
      </div>
    </Marquee>
  </>
)
