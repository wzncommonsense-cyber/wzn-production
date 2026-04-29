import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { portfolio } from "../lib/site-data";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden border-y border-[#d7b46a]/15 bg-[#050505] px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d7b46a]/45 to-transparent" aria-hidden="true" />
      <div className="ambient-gold-bottom absolute inset-x-0 bottom-0 h-56" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Portfolio"
          title="Werk dat laat zien wat WZN Production kan leveren."
          description="Van softwareconcepten tot promotievisuals: strak gepresenteerd, helder inzetbaar en gebouwd voor resultaat."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {portfolio.map((item, index) => (
            <article
              key={item.title}
              className="reveal group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] shadow-2xl shadow-black/20 backdrop-blur transition hover:-translate-y-1.5 hover:border-[#d7b46a]/45 hover:bg-white/[0.055]"
            >
              <div className="relative aspect-[1.45] overflow-hidden border-b border-white/10 bg-[#080808]">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(min-width: 1280px) 390px, (min-width: 768px) 50vw, 100vw"
                    priority={index < 3}
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                    unoptimized
                  />
                ) : (
                  <div className="grid h-full place-items-center bg-[radial-gradient(circle_at_28%_20%,rgba(240,206,120,0.28),transparent_34%),linear-gradient(135deg,#17110a,#050505_58%,#20170a)] p-6">
                    <div className="relative text-center">
                      <div className="mx-auto grid h-20 w-20 place-items-center rounded-2xl border border-[#d7b46a]/35 bg-black/45 text-2xl font-black text-[#f0ce78] shadow-[0_0_40px_rgba(215,180,106,0.14)]">
                        AI
                      </div>
                      <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.24em] text-[#d7b46a]">
                        Mail Assistant
                      </p>
                    </div>
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/82 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full border border-[#d7b46a]/24 bg-black/55 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#f0ce78] backdrop-blur">
                  {item.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#b9b0a1]">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
