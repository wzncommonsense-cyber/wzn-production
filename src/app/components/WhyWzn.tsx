import SectionHeading from "./SectionHeading";
import { reasons } from "../lib/site-data";

export default function WhyWzn() {
  return (
    <section className="border-y border-white/10 bg-[#11100d] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Waarom WZN Production"
          title="Creatie, techniek en promotie onder een duidelijke lijn."
          description="Je krijgt geen losse onderdelen, maar werk dat bij elkaar past en gericht is op resultaat."
        />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-7">
          {reasons.map((reason, index) => (
            <div
              key={reason}
              className={`reveal rounded-lg border border-white/10 bg-white/[0.04] p-5 transition hover:border-[#d7b46a]/45 ${
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
