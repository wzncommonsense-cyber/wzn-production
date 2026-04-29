import SectionHeading from "./SectionHeading";
import { pricing } from "../lib/site-data";

export default function Pricing() {
  return (
    <section id="prijzen" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Prijzen"
          title="Duidelijke vanaf-prijzen, afgestemd op jouw opdracht."
          description="Kies een richting, daarna maken we de scope concreet."
        />

        <div className="grid gap-4 lg:grid-cols-4">
          {pricing.map((item) => (
            <article
              key={item.title}
              className="reveal flex flex-col rounded-lg border border-white/10 bg-[#101010] p-6 transition hover:-translate-y-1 hover:border-[#d7b46a]/45"
            >
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-3xl font-bold text-[#f0ce78]">{item.price}</p>
              <p className="mt-4 min-h-20 leading-7 text-[#b9b0a1]">{item.description}</p>
              <ul className="mt-6 space-y-3 text-sm text-[#d8d1c2]">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d7b46a]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="reveal mx-auto mt-8 max-w-4xl rounded-lg border border-[#d7b46a]/20 bg-[#d7b46a]/10 p-5 text-center leading-7 text-[#efe4c7]">
          Elke opdracht is anders. De prijs hangt af van functies, hoeveelheid pagina&apos;s,
          designniveau en gewenste oplevering. Na een korte intake krijg je een duidelijke prijs.
        </p>
      </div>
    </section>
  );
}
