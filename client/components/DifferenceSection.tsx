export function DifferenceSection() {
  const cards = [
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/2d87ac79d53ef15e3468ede3de0b01e43aa54bb0?width=2195",
      title: "Real Progress",
      titleHighlight: "Insights",
      description: "Visualize your improvements and celebrate every milestone.",
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/0fe2a12109f27f52490c2e4d9cd384b3e8d56c53?width=1977",
      title: "Personalized",
      titleHighlight: "Workouts",
      description: "Smart routines designed to match your fitness level.",
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/10963669a65854b04bb5016591789446f76de0c0?width=1606",
      title: "Nutrition Made",
      titleHighlight: "Simple",
      description: "Track your meals and balance your goals effortlessly.",
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/48cc822632f4674b697f99553bc62426df82c32f?width=1583",
      title: "Community",
      titleHighlight: "Support",
      description: "Join people who move, eat, and grow together.",
    },
  ];

  return (
    <section className="bg-helthy-black py-32 overflow-hidden">
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-helthy-lemon text-[60px] leading-[120%] tracking-[-1.2px] font-normal max-w-[511px]">
          What Makes Helthy Different
        </h2>
      </div>

      <div className="flex gap-5 px-4 overflow-x-auto pb-8 scrollbar-hide">
        <div className="flex gap-5 animate-scroll">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative min-w-[630px] h-[495px] rounded-3xl overflow-hidden flex-shrink-0"
            >
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/80 to-transparent backdrop-blur-[2px]"/>
              
              <div className="absolute bottom-8 left-9 right-9 flex flex-col gap-6 z-10">
                <h3 className="text-white text-[52px] leading-[100%] font-medium backdrop-blur-sm">
                  <span className="opacity-50">{card.title} </span>
                  <span>{card.titleHighlight}</span>
                </h3>
                <p className="text-white text-base leading-[120%]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
