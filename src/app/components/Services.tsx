import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import { services } from "../lib/site-data";

export default function Services() {
  return (
    <section id="diensten" className="bg-[#0b0b0b] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Diensten"
          title="Alles wat je nodig hebt om professioneel zichtbaar te worden."
          description="WZN Production combineert software, design en promotie in een praktische aanpak voor ondernemers, merken en creators."
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="reveal group rounded-lg border border-white/10 bg-[#101010]/88 p-6 shadow-xl shadow-black/15 transition hover:-translate-y-1 hover:border-[#d7b46a]/45 hover:bg-[#151515]"
            >
              <div className="mb-6 grid h-11 w-11 place-items-center rounded-md border border-[#d7b46a]/25 bg-[#d7b46a]/10 text-[#f0ce78] transition group-hover:border-[#f0ce78]">
                <Icon name={service.icon as Parameters<typeof Icon>[0]["name"]} />
              </div>
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 leading-7 text-[#b9b0a1]">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
