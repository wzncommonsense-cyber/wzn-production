import SectionHeading from "./SectionHeading";
import { process } from "../lib/site-data";

export default function Process() {
  return (
    <section id="werkwijze" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Werkwijze"
          title="Van idee naar iets dat klaar is om gebruikt of gedeeld te worden."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {process.map((step, index) => (
            <article
              key={step}
              className="reveal rounded-lg border border-white/10 bg-[#101010] p-6 transition hover:-translate-y-1 hover:border-[#d7b46a]/45"
            >
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#d7b46a]">
                Stap {index + 1}
              </p>
              <h3 className="mt-5 text-xl font-semibold text-white">{step}</h3>
              <p className="mt-3 leading-7 text-[#b9b0a1]">
                We houden het proces overzichtelijk, zodat je steeds weet wat er gebeurt en
                waar we naartoe werken.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
