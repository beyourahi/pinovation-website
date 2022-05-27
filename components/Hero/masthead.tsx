export const Masthead: React.FC = () => (
  <div className="flex flex-col gap-8">
    <h1 className="text-3xl font-extrabold leading-10 sm:text-4xl md:text-5xl">
      <span className="tracking-wider">Creative & Minimal</span> <br />
      <span className="sub-heading tracking-widest"> IT AGENCY.</span>
    </h1>

    <p className="text-sm font-normal max-w-lg sm:text-base">
      Want to Digitalize your business? Why not start today? Let us be your IT partner and unleash
      true potential of your business. If you have a business we have a solution for you!
    </p>

    <div className="flex flex-col gap-3 md:flex-row">
      <div className="bg-black text-center rounded-lg font-medium hover:bg-white hover:text-black py-[0.8rem] md:w-40">
        <a href="#">About Us</a>
      </div>

      <div className="text-center rounded-lg border border-white font-medium hover:bg-white hover:text-black py-[0.8rem] md:w-40">
        <a href="#">Get Started</a>
      </div>
    </div>
  </div>
);
