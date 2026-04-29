import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { portfolio } from "../lib/site-data";

export default function Portfolio() {
  return (
    <section id="portfolio" className="border-y border-[#d7b46a]/15 bg-[#090806] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Portfolio"
          title="Echte visuals, demo's en concepten die laten zien wat WZN kan leveren."
          description="Een mix van software, webapps, branding, AI-concepten en promotiecontent."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {portfolio.map((item, index) => (
            <article
              key={item.title}
              className={`reveal group overflow-hidden rounded-xl border border-white/10 bg-[#101010] shadow-2xl shadow-black/20 transition hover:-translate-y-1 hover:border-[#d7b46a]/45 ${
                index < 2 ? "xl:col-span-3" : ""
              }`}
            >
              <div className={`relative ${index < 2 ? "aspect-[2.35]" : "aspect-[1.48]"} overflow-hidden bg-[#080808]`}>
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes={index < 2 ? "1200px" : "(min-width: 1280px) 390px, 100vw"}
                    priority={index < 2}
                    className="object-cover transition duration-500 group-hover:scale-[1.035]"
                    unoptimized
                  />
                ) : (
                  <div className="grid h-full place-items-center bg-[radial-gradient(circle_at_20%_15%,rgba(240,206,120,0.35),transparent_32%),linear-gradient(135deg,#15110a,#050505_58%,#221a0b)] p-6">
                    <div className="text-center">
                      <div className="mx-auto grid h-16 w-16 place-items-center rounded-xl border border-[#d7b46a]/35 bg-black/45 text-2xl font-black text-[#f0ce78]">
                        AI
                      </div>
                      <p className="mt-5 font-mono text-xs uppercase tracking-[0.2em] text-[#d7b46a]">
                        Mail assistant
                      </p>
                    </div>
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black to-transparent" />
              </div>
              <div className="p-5">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#d7b46a]">
                  {item.category}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#b9b0a1]">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
