import SectionHeading from "./SectionHeading";
import { pricing } from "../lib/site-data";

export default function Pricing() {
  return (
    <section id="prijzen" className="bg-[#050505] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Prijzen"
          title="Pakketten met een helder startpunt."
          description="Vanaf-prijzen. Na korte intake krijg je een vaste prijs op basis van functies, designniveau en gewenste oplevering."
        />

        <div className="grid gap-4 lg:grid-cols-4">
          {pricing.map((item) => (
            <article
              key={item.title}
              className="reveal flex flex-col rounded-lg border border-white/10 bg-[#101010] p-6 transition hover:-translate-y-1 hover:border-[#d7b46a]/45"
            >
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-3xl font-bold text-[#f0ce78]">{item.price}</p>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#d7b46a]">
                Voor wie
              </p>
              <p className="mt-2 min-h-24 leading-7 text-[#b9b0a1]">{item.audience}</p>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#d7b46a]">
                Inbegrepen
              </p>
              <ul className="mt-4 space-y-3 text-sm text-[#d8d1c2]">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d7b46a]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-7 rounded-md border border-[#d7b46a]/35 bg-[#d7b46a]/10 px-4 py-3 text-center text-sm font-semibold text-[#f0ce78] transition hover:-translate-y-0.5 hover:bg-[#d7b46a] hover:text-black"
              >
                Vraag project aan
              </a>
            </article>
          ))}
        </div>

        <p className="reveal mx-auto mt-8 max-w-4xl rounded-lg border border-[#d7b46a]/20 bg-[#d7b46a]/10 p-5 text-center leading-7 text-[#efe4c7]">
          Vanaf-prijzen. Na korte intake krijg je een vaste prijs op basis van functies,
          designniveau en gewenste oplevering.
        </p>
      </div>
    </section>
  );
}
