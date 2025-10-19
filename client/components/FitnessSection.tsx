import { ArrowUpRight } from "lucide-react";

export function FitnessSection() {
  return (
    <section className="bg-helthy-lemon py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-7xl mx-auto">
          <div className="flex-1 max-w-[511px]">
            <h2 className="text-[60px] leading-[120%] tracking-[-1.2px] font-normal bg-gradient-to-r from-helthy-black to-gray-500 bg-clip-text text-transparent mb-8">
              Fitness That Fits Your Life
            </h2>
            
            <p className="text-helthy-grey text-xl leading-[130%] mb-8 max-w-[420px]">
              Helthy isn't just another workout app  it's your daily partner for wellness. 
              <br/><br/>
              From guided exercises and nutrition tracking to personalized progress insights, Helthy gives you everything you need to stay consistent and see results that last.
            </p>
            
            <button className="flex items-center gap-6 px-8 py-2 pl-8 pr-2 rounded-full border-2 border-white/30 bg-helthy-black shadow-lg hover:shadow-xl transition-all">
              <span className="text-white font-bold text-xl leading-[22.4px] tracking-[0.17px]">
                Start Your Transformation
              </span>
              <div className="flex items-center justify-center w-[52px] h-[52px] rounded-full bg-helthy-lemon">
                <ArrowUpRight className="w-8 h-8 text-helthy-black" strokeWidth={3} />
              </div>
            </button>
          </div>
          
          <div className="flex-1 relative">
            <div className="rounded-3xl border-[3px] border-white/10 bg-[#BB5757] shadow-xl overflow-hidden aspect-[3/2] max-w-[520px]">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/6115006768abb1684e0053920b647a76e324f9e7?width=2498"
                alt="Cyclist enjoying morning bike ride"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute top-12 -right-8 bg-black/10 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-lg">
              <div className="flex flex-col gap-2">
                <span className="text-helthy-black text-sm opacity-80">This Week</span>
                <span className="text-helthy-orange text-[34px] leading-none font-normal">4</span>
                <span className="text-helthy-black text-sm opacity-80">WORKOUTS</span>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.4073 3.59985H9.39771V2.92676C9.39771 2.8375 9.36225 2.7519 9.29913 2.68878C9.23602 2.62567 9.15042 2.59021 9.06116 2.59021H3.0033C2.91404 2.59021 2.82844 2.62567 2.76532 2.68878C2.70221 2.7519 2.66675 2.8375 2.66675 2.92676V3.59985H1.6571C1.47859 3.59985 1.30738 3.67077 1.18115 3.797C1.05492 3.92323 0.984009 4.09443 0.984009 4.27295V4.94604C0.984009 5.39234 1.1613 5.82035 1.47687 6.13592C1.63313 6.29218 1.81863 6.41613 2.02279 6.50069C2.22695 6.58526 2.44577 6.62878 2.66675 6.62878H2.8203C3.01854 7.25704 3.39654 7.81344 3.90756 8.22921C4.41858 8.64498 5.04023 8.9019 5.69568 8.96821V9.99426H4.68604C4.59678 9.99426 4.51117 10.0297 4.44806 10.0928C4.38494 10.1559 4.34949 10.2416 4.34949 10.3308C4.34949 10.4201 4.38494 10.5057 4.44806 10.5688C4.51117 10.6319 4.59678 10.6674 4.68604 10.6674H7.37842C7.46768 10.6674 7.55328 10.6319 7.61639 10.5688C7.67951 10.5057 7.71497 10.4201 7.71497 10.3308C7.71497 10.2416 7.67951 10.1559 7.61639 10.0928C7.55328 10.0297 7.46768 9.99426 7.37842 9.99426H6.36877V8.96695C7.71244 8.83107 8.82726 7.88831 9.2328 6.62878H9.39771C9.844 6.62878 10.272 6.4515 10.5876 6.13592C10.9032 5.82035 11.0804 5.39234 11.0804 4.94604V4.27295C11.0804 4.09443 11.0095 3.92323 10.8833 3.797C10.7571 3.67077 10.5859 3.59985 10.4073 3.59985Z" fill="#151515"/>
                </svg>
                <span className="text-helthy-black text-xs">Set your goal</span>
              </div>
            </div>
            
            <div className="absolute bottom-32 right-12 flex flex-col items-center gap-2">
              <div className="relative w-[91px] h-[91px] rounded-full border border-white/10 bg-black/10 backdrop-blur-md shadow-lg flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 91 91">
                  <circle cx="45.5" cy="45.5" r="42" fill="none" stroke="#E96C2C" strokeWidth="4" strokeDasharray="83 180" strokeLinecap="round"/>
                </svg>
                <div className="text-center">
                  <div className="text-helthy-black text-[21px] font-medium">1854</div>
                  <div className="text-helthy-black text-[7px] opacity-60 uppercase">Left</div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <svg width="16" height="16" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.40382 1.9983C9.34318 1.94788 9.27131 1.91278 9.19426 1.89596C9.11722 1.87914 9.03726 1.88109 8.96112 1.90165C8.88499 1.9222 8.81492 1.96076 8.75681 2.01407C8.6987 2.06738 8.65426 2.13388 8.62723 2.20797L7.27451 5.92243L5.78897 4.483C5.73908 4.43462 5.6795 4.39735 5.61416 4.37366C5.54883 4.34997 5.47921 4.3404 5.4099 4.34557C5.34059 4.35074 5.27317 4.37054 5.21207 4.40366C5.15097 4.43678 5.09758 4.48247 5.05542 4.53773C3.7236 6.28274 3.04724 8.03821 3.04724 9.75494C3.04724 11.19 3.61732 12.5663 4.63206 13.581C5.6468 14.5958 7.02308 15.1658 8.45814 15.1658C9.8932 15.1658 11.2695 14.5958 12.2842 13.581C13.299 12.5663 13.869 11.19 13.869 9.75494C13.869 6.09951 10.7461 3.11429 9.40382 1.9983Z" fill="#151515"/>
                </svg>
                <span className="text-helthy-black text-[10px] uppercase font-medium">Calories</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
