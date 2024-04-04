import BannerLogo from '../../assets/icons/banner.png'


const Banner = () => {
    return (
        <div className="relative pt-14 px-4 sm:px-6 lg:px-8">
          <main className="flex-auto py-12">
            {/* Green to Overlay */}
            <div className=" absolute inset-0 -z-10 mx-0 max-w-none w-full overflow-hidden">
              <div className=" absolute inset-0 w-[80rem] h-[25rem] ml-[-38rem] top-0 left-1/2 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] bg-gradient-to-r from-[#36b49f] to-[#DBFF75] opacity-40"></div>
            </div>
            {/* Green to Overlay end */}
            <article>
              <div className="relative mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-5 mx-auto items-center max-w-[40rem] gap-x-8 gap-y-16 lg:max-w-none">
                  <div className="flex flex-col items-start lg:col-span-2">
                    <h1 className="mt-4 text-6xl font-extrabold leading-none tracking-tight text-slate-900 sm:text-5xl sm:leading-[3.5rem]">
                      Protocol
                    </h1>
                    <p className="mt-6 text-base leading-7 text-slate-700">
                      It doesn`t matter if you have an API if nobody knows how
                      to use it. Teach people the ins and outs of OAuth 2.0 and
                      JWTs in style with Protocol, a beautiful API documentation
                      template.
                    </p>
                    <button className="mt-10 inline-flex justify-center rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-700">
                      Get Started
                    </button>
                  </div>
                  <div className="relative lg:col-span-3">
                    <img
                      className="relative z-20 max-w-[630px]"
                      src={BannerLogo}
                      alt="banar image"
                    />
                  </div>
                </div>
              </div>
            </article>
          </main>
        </div>
    );
};

export default Banner