import { Apple } from "lucide-react";

export function CTA() {
  return (
    <section className="relative bg-helthy-black py-32 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1548px] h-[184px] rounded-full bg-helthy-lemon blur-[150px] opacity-50"/>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-[774px] mx-auto text-center flex flex-col gap-8">
          <h2 className="text-helthy-lemon text-5xl leading-[110%] tracking-[0.17px] font-normal">
            Start Your Fitness Journey Today
          </h2>
          
          <p className="text-white text-xl leading-[140%] tracking-[0.17px] font-normal">
            Take the first step toward a stronger, healthier you. Track your progress, stay consistent, and enjoy every workout with Helthy.
          </p>
          
          <div className="flex justify-center">
            <button className="flex items-center gap-1 px-8 py-3.5 rounded-full bg-white shadow-2xl hover:shadow-3xl transition-all">
              <Apple className="w-5 h-5 text-helthy-black fill-current"/>
              <span className="text-helthy-black text-xl font-medium">
                Download App
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
