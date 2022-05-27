import { Masthead } from "./masthead";
import { ScrollDown } from "./scrolldown";

export const Hero: React.FC = () => (
  <div className="relative h-[90vh] container mx-auto px-6 text-white flex items-center justify-center sm:px-20 md:h-screen">
    <Masthead />
    <ScrollDown />
  </div>
);
