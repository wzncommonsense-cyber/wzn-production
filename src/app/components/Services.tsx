import Link from "next/link";
import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import { services } from "../lib/site-data";

export default function Services() {
  return (
    <section id="diensten" className="relative overflow-hidden bg-[#0a0908] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="ambient-gold-top absolute inset-x-0 top-0 h-40" aria-hidden="true" />
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Diensten"
          title="Premium uitvoering voor digitale groei."
          description="WZN Production combineert techniek, design en promotie in duidelijke services die elkaar versterken."
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="reveal group flex flex-col rounded-2xl border border-white/10 bg-white/[0.035] p-6 shadow-xl shadow-black/15 backdrop-blur transition hover:-translate-y-1.5 hover:border-[#d7b46a]/45 hover:bg-white/[0.055] hover:shadow-[0_20px_80px_rgba(215,180,106,0.09)]"
            >
              <div className="mb-7 grid h-12 w-12 place-items-center rounded-xl border border-[#d7b46a]/25 bg-[#d7b46a]/10 text-[#f0ce78] transition group-hover:border-[#f0ce78] group-hover:bg-[#d7b46a]/15">
                <Icon name={service.icon as Parameters<typeof Icon>[0]["name"]} />
              </div>
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#b9b0a1]">{service.description}</p>
              <div className="mt-5 space-y-4 text-sm leading-7">
                <div>
                  <p className="font-semibold text-[#f0ce78]">Wat je eraan hebt</p>
                  <p className="mt-1 text-[#d8d1c2]">{service.benefit}</p>
                </div>
                <div>
                  <p className="font-semibold text-[#f0ce78]">Voor wie</p>
                  <p className="mt-1 text-[#b9b0a1]">{service.fit}</p>
                </div>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-[#b9b0a1]">
                {service.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d7b46a]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-7 inline-flex w-fit rounded-full border border-[#d7b46a]/35 bg-[#d7b46a]/10 px-4 py-2.5 text-sm font-semibold text-[#f0ce78] transition hover:-translate-y-0.5 hover:bg-[#d7b46a] hover:text-black"
              >
                Bespreek dit project
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
