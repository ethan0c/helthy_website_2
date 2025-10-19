export function Features() {
  return (
    <section className="bg-helthy-black py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-20 max-w-7xl mx-auto">
          <div className="flex-1 flex flex-col gap-24">
            <div className="flex flex-col gap-9">
              <div className="flex items-center gap-6">
                <div className="w-[17px] h-4 rounded-full bg-helthy-lemon"/>
                <h2 className="text-helthy-lemon text-[60px] leading-[120%] tracking-[-1.2px] font-normal max-w-[511px]">
                  Tailored Workouts for Every Goal
                </h2>
              </div>
              <p className="text-white text-xl leading-[130%] max-w-[552px]">
                No two bodies are the same and neither are our workouts. Helthy builds custom fitness programs that adapt to your goals, body type, and schedule. Whether you're burning fat, building muscle, or just starting your fitness journey, every plan is guided by real science and designed for lasting results.
              </p>
            </div>

            <div className="flex flex-col gap-8 opacity-30">
              <div className="flex items-center gap-6">
                <div className="w-[17px] h-4 rounded-full bg-white"/>
                <h3 className="text-white text-[60px] leading-[120%] tracking-[-1.2px] font-normal max-w-[511px]">
                  Smart Nutrition Plans
                </h3>
              </div>
              <p className="text-white text-xl leading-[130%] max-w-[552px]">
                Healthy living starts in the kitchen. Helthy helps you eat smarter with meal plans that match your fitness goals and lifestyle — whether that's losing weight, gaining strength, or maintaining balance.
              </p>
            </div>

            <div className="flex flex-col gap-8 opacity-30">
              <div className="flex items-center gap-6">
                <div className="w-[17px] h-4 rounded-full bg-white"/>
                <h3 className="text-white text-[60px] leading-[120%] tracking-[-1.2px] font-normal max-w-[511px]">
                  Track Progress with Ease
                </h3>
              </div>
              <p className="text-white text-xl leading-[130%] max-w-[552px]">
                See your transformation in real time. Helthy's smart dashboard tracks every workout, meal, and milestone  helping you visualize your journey and stay motivated. Watch your performance improve, monitor your weight and measurements, and celebrate every step of your progress. Because when you can see the change, you believe in it even more
              </p>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-full max-w-[480px]">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/37c783e5fbb4a72c9062cad7e9519f2418788c11?width=868"
                alt="Helthy app interface"
                className="relative z-10 w-full rounded-[40px]"
              />
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/a2b2c10344795fc894ae8f76dbb4f76887eb840b?width=960"
                alt="iPhone frame"
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
