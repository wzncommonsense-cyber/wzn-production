import SectionHeading from "./SectionHeading";
import { portfolio } from "../lib/site-data";

export default function Portfolio() {
  return (
    <section id="portfolio" className="border-y border-white/10 bg-white/[0.025] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Portfolio"
          title="Recent werk en concepten met ruimte voor echte cases."
          description="Deze placeholders zijn klaar om later te vervangen door echte screenshots, videos of campagnebeelden."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {portfolio.map((item, index) => (
            <article
              key={item.title}
              className={`reveal group rounded-lg border border-white/10 bg-[#0f0f0f] p-4 transition hover:-translate-y-1 hover:border-[#d7b46a]/45 ${
                index < 2 ? "lg:col-span-2" : index === 2 ? "lg:col-span-1" : "lg:col-span-2"
              }`}
            >
              <div className="mb-5 flex aspect-[1.45] items-end rounded-md border border-dashed border-[#d7b46a]/24 bg-[linear-gradient(145deg,#171717,#090909)] p-4">
                <span className="rounded-md border border-[#d7b46a]/25 bg-black/70 px-3 py-2 font-mono text-xs uppercase tracking-[0.16em] text-[#d7b46a]">
                  Afbeelding placeholder
                </span>
              </div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#d7b46a]">
                {item.category}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#b9b0a1]">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
