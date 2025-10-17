import {
  Reddit,
  X,
  Youtube,
  MessageSquare,
  Rocket,
  Star,
  Store,
  PlaySquare,
} from "lucide-react";

function BrandSection() {
  const icons = [

    { icon: <X size={48} />, name: "X" },
    { icon: <Youtube size={48} />, name: "YouTube" },
    { icon: <MessageSquare size={48} />, name: "HN" },
    { icon: <Rocket size={48} />, name: "Product Hunt" },
    { icon: <Star size={48} />, name: "Capterra" },
    { icon: <Star size={48} />, name: "Trustpilot" },
    { icon: <Store size={48} />, name: "App Store" },
    { icon: <PlaySquare size={48} />, name: "Play Store" },
  ];

  return (
    <section className="container mx-auto px-6 py-24 overflow-hidden">
      {/* Başlık */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        Powered by Millions of{" "}
        <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
          Unfiltered Comments
        </span>
      </h2>

      {/* Logoların kaydığı alan */}
      <div className="relative">
        <div className="flex animate-scroll">
          {/* İlk logo seti */}
          <div className="flex items-center gap-8 pr-8">
            {icons.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-center p-6 bg-gray-800/30 rounded-xl border border-gray-700 min-w-[120px] h-[120px]"
              >
                <div className="text-gray-400">{item.icon}</div>
              </div>
            ))}
          </div>

          {/* Scroll efekti için ikinci set */}
          <div className="flex items-center gap-8 pr-8" aria-hidden="true">
            {icons.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-center p-6 bg-gray-800/30 rounded-xl border border-gray-700 min-w-[120px] h-[120px]"
              >
                <div className="text-gray-400">{item.icon}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Brand;