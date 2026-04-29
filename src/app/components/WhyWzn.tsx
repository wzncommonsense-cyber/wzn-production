import SectionHeading from "./SectionHeading";
import { reasons } from "../lib/site-data";

export default function WhyWzn() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#050505] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="ambient-gold-bottom absolute inset-x-0 bottom-0 h-44" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Waarom WZN Production"
          title="Creatie, techniek en promotie in een sterke lijn."
          description="Je krijgt geen losse onderdelen, maar werk dat bij elkaar past en serieus aanvoelt."
        />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-7">
          {reasons.map((reason, index) => (
            <div
              key={reason}
              className={`reveal rounded-2xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur transition hover:-translate-y-1 hover:border-[#d7b46a]/45 hover:bg-white/[0.055] ${
                index < 3 ? "lg:col-span-2" : "lg:col-span-1"
              }`}
            >
              <p className="mb-4 font-mono text-xs text-[#d7b46a]">0{index + 1}</p>
              <h3 className="font-semibold leading-6 text-white">{reason}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
