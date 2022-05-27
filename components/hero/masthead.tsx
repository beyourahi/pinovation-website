export const Masthead: React.FC = () => (
  <div className="flex flex-col gap-8">
    <h1 className="text-[1.718rem] font-extrabold leading-10 text-fadedWhite sm:text-4xl md:text-6xl">
      <span className="tracking-wider">Creative & Minimal</span> <br />
      <span className="sub-heading tracking-widest"> IT AGENCY.</span>
    </h1>

    <p className="text-sm font-normal max-w-lg sm:text-base">
      Want to Digitalize your business? Why not start today? Let us be your IT partner and unleash
      true potential of your business. If you have a business we have a solution for you!
    </p>

    <div className="flex flex-col gap-5 md:flex-row">
      <a href="#" className="bg-primaryColor text-center rounded-lg font-semibold hover:bg-secondaryColor hover:text-white text-sm py-[0.8rem] cursor-pointer shadow-inner hover:shadow-inner transition-all duration-500 ease-out md:text-base md:w-40">
        Get Started
      </a>

      <a href="#" className="text-center rounded-lg border border-fadedWhite font-semibold text-sm py-[0.8rem] cursor-pointer transition-all duration-500 ease-out hover:bg-primaryColor hover:border-primaryColor md:text-base md:w-40">
        About Us
      </a>
    </div>
  </div>
);
