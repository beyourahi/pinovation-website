import Image from "next/image";

export const FeatureCard: React.FC = () => (
  <div className="drop-shadow-2xl bg-black text-white rounded-xl p-12 w-full flex flex-col gap-1 text-center transition-all duration-300 ease-out group skew-y-[-5deg] hover:skew-y-0">
    <div className="flex flex-col gap-3 skew-y-[5deg] group-hover:skew-y-0 transition-all duration-300 ease-out">
      <div>
        <Image src="/icons/icon.png" alt="icon" width={70} height={70} />
      </div>

      <span className="text-2xl font-semibold">5+</span>

      <h1 className="text-2xl font-semibold">UX/UI Design</h1>
    </div>
  </div>
);
