import { Masthead } from "./masthead";
import { ScrollDown } from "./scrolldown";

export const Hero: React.FC = () => (
  <div className="h-[90vh] md:h-screen container mx-auto px-6 text-white flex flex-col items-center justify-between pb-8 pt-44 sm:px-20">
    <Masthead />
    <ScrollDown />
  </div>
);
