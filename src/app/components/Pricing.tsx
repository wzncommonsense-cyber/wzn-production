import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { pricing } from "../lib/site-data";

export default function Pricing() {
  return (
    <section id="prijzen" className="relative overflow-hidden bg-[#0a0908] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="ambient-gold-top absolute inset-x-0 top-0 h-48" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Prijzen"
          title="Heldere vanaf-prijzen voor professioneel werk."
          description="Kies een startpunt dat past bij jouw project. Na een korte intake maken we de scope en vaste prijs duidelijk."
        />

        <div className="grid gap-4 lg:grid-cols-4">
          {pricing.map((item) => (
            <article
              key={item.title}
              className={`reveal relative flex min-h-[460px] flex-col rounded-2xl border p-6 shadow-xl shadow-black/20 backdrop-blur transition hover:-translate-y-1.5 ${
                item.popular
                  ? "border-[#d7b46a]/55 bg-[#d7b46a]/10 shadow-[0_24px_90px_rgba(215,180,106,0.12)]"
                  : "border-white/10 bg-white/[0.035] hover:border-[#d7b46a]/40 hover:bg-white/[0.055]"
              }`}
            >
              {item.popular ? (
                <span className="mb-5 w-fit rounded-full bg-[#d7b46a] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-black">
                  Meest gekozen
                </span>
              ) : (
                <span className="mb-5 h-6" aria-hidden="true" />
              )}

              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-3xl font-bold text-[#f0ce78]">{item.price}</p>
              <p className="mt-4 text-sm leading-7 text-[#b9b0a1]">{item.description}</p>

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-[#d7b46a]">
                Voor wie
              </p>
              <p className="mt-2 text-sm leading-7 text-[#cfc7b6]">{item.audience}</p>

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-[#d7b46a]">
                Inbegrepen
              </p>
              <ul className="mt-4 space-y-3 text-sm text-[#d8d1c2]">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d7b46a]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`mt-auto rounded-full px-4 py-3 text-center text-sm font-semibold transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#f0ce78] focus:ring-offset-2 focus:ring-offset-black ${
                  item.popular
                    ? "bg-[#d7b46a] text-black hover:bg-[#f0ce78]"
                    : "border border-[#d7b46a]/35 bg-[#d7b46a]/10 text-[#f0ce78] hover:bg-[#d7b46a] hover:text-black"
                }`}
              >
                Vraag project aan
              </Link>
            </article>
          ))}
        </div>

        <div className="reveal mx-auto mt-8 max-w-4xl rounded-2xl border border-[#d7b46a]/18 bg-white/[0.035] p-5 text-center text-sm leading-7 text-[#efe4c7] backdrop-blur">
          <p>
            Alle prijzen zijn vanaf-prijzen. Na een korte intake krijg je een vaste prijs
            op basis van functies, designniveau, aantal pagina&apos;s en gewenste oplevering.
          </p>
          <p className="mt-2 text-[#d7b46a]">
            Website live zetten en domein koppelen kan worden meegenomen in het project.
          </p>
        </div>
      </div>
    </section>
  );
}
