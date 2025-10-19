export function Testimonials() {
  const testimonials = [
    {
      quote: "Helthy changed my routine completely.",
      description: "I've lost weight, built consistency, and now actually enjoy working out every day.",
      author: "Comrade Stuff",
    },
    {
      quote: "Helthy changed my routine completely.",
      description: "I've lost weight, built consistency, and now actually enjoy working out every day.",
      author: "Comrade Stuff",
    },
    {
      quote: "Helthy changed my routine completely.",
      description: "I've lost weight, built consistency, and now actually enjoy working out every day.",
      author: "Comrade Stuff",
    },
  ];

  const StarRating = () => (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.67983 3.05538C7.82592 2.60589 8.46184 2.60589 8.60786 3.05538L9.85311 6.88779C9.91839 7.08881 10.1057 7.22491 10.3171 7.22491H14.3467C14.8193 7.22491 15.0158 7.82971 14.6335 8.10752L11.3735 10.476C11.2025 10.6003 11.1309 10.8205 11.1962 11.0216L12.4414 14.8539C12.5875 15.3035 12.073 15.6773 11.6907 15.3995L8.43065 13.0309C8.25966 12.9067 8.0281 12.9067 7.85711 13.0309L4.59704 15.3995C4.21467 15.6773 3.7002 15.3035 3.84625 14.8539L5.09147 11.0216C5.15679 10.8205 5.08524 10.6003 4.91424 10.476L1.6542 8.10752C1.27183 7.82971 1.46834 7.22491 1.94097 7.22491H5.9706C6.18197 7.22491 6.3693 7.08881 6.43458 6.88779L7.67983 3.05538Z" fill="#FF9500"/>
        </svg>
      ))}
    </div>
  );

  return (
    <section className="bg-helthy-black py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-helthy-lemon text-[60px] leading-[120%] tracking-[-1.2px] font-normal text-center mb-20">
          What Users Are Saying
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-11 rounded-3xl border-t border-white/30 bg-gradient-to-b from-white/10 to-white/0"
            >
              <div className="flex flex-col justify-between h-full gap-8">
                <div className="flex flex-col gap-8">
                  <h3 className="text-white text-[30px] leading-[120%] tracking-[-0.6px] font-normal">
                    {testimonial.quote}
                  </h3>
                  <p className="text-white/60 text-2xl leading-[120%] font-normal">
                    {testimonial.description}
                  </p>
                </div>

                <div className="flex items-center gap-5">
                  <div className="w-[50px] h-[50px] rounded-full bg-white"/>
                  <div className="flex flex-col gap-3">
                    <span className="text-white/70 text-xl leading-[120%] tracking-[-0.4px]">
                      {testimonial.author}
                    </span>
                    <StarRating />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-11 rounded-3xl border-t border-white/30 bg-gradient-to-b from-white/10 to-white/0"
            >
              <div className="flex flex-col justify-between h-full gap-8">
                <div className="flex flex-col gap-8">
                  <h3 className="text-white text-[30px] leading-[120%] tracking-[-0.6px] font-normal">
                    {testimonial.quote}
                  </h3>
                  <p className="text-white/60 text-2xl leading-[120%] font-normal">
                    {testimonial.description}
                  </p>
                </div>

                <div className="flex items-center gap-5">
                  <div className="w-[50px] h-[50px] rounded-full bg-white"/>
                  <div className="flex flex-col gap-3">
                    <span className="text-white/70 text-xl leading-[120%] tracking-[-0.4px]">
                      {testimonial.author}
                    </span>
                    <StarRating />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
