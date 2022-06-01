import Image from "next/image";

export const Member: React.FC = () => (
  <div className="drop-shadow-2xl rounded-2xl p-8 w-full flex flex-col gap-1 hover:bg-coolBg hover:text-white transition-all duration-500 ease-out bg-white text-black">
    <div>
      <Image src="/icons/icon.png" alt="icon" width={70} height={70} />
    </div>

    <h1 className="text-2xl font-semibold">UX/UI Design</h1>
    <span>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis
      suscipit.
    </span>
  </div>
);
