import { Slider } from "./slider";
import { ClientHeader } from "./clientheader";

export const Clients = () => (
  <div className="py-20 bg-white">
    <div className="container mx-auto w-[85%] flex flex-col items-center gap-16">
      <ClientHeader />
      <Slider />
    </div>
  </div>
);
