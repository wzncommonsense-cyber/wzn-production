import Image from "next/image";
import Link from "next/link";
import Hero from "./components/Hero";
import Icon from "./components/Icon";
import PageFrame from "./components/PageFrame";
import SectionHeading from "./components/SectionHeading";
import { portfolio, services } from "./lib/site-data";

export default function Home() {
  const servicePreview = services.slice(0, 3);
  const portfolioPreview = portfolio.slice(0, 3);

  return (
    <PageFrame>
      <Hero />

      <section className="bg-[#0a0908] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.24em] text-[#d7b46a]">
              WZN Production
            </p>
            <h2 className="text-balance text-3xl font-semibold text-white md:text-5xl">
              Creative agency voor software, content en promotie.
            </h2>
          </div>
          <p className="text-lg leading-8 text-[#b9b0a1]">
            Ik help bedrijven, zzp&apos;ers en creators met websites, webapps, AI tools
            en visueel werk dat professioneel oogt. De aanpak is praktisch: strak plan,
            sterke uitvoering en focus op zichtbaar resultaat.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#050505] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="ambient-gold-top absolute inset-x-0 top-0 h-40" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Diensten preview"
            title="Waar WZN Production je mee helpt."
            description="Een korte preview. Op de dienstenpagina vind je de volledige uitleg per onderdeel."
          />

          <div className="grid gap-4 md:grid-cols-3">
            {servicePreview.map((service) => (
              <article
                key={service.title}
                className="reveal rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur transition hover:-translate-y-1 hover:border-[#d7b46a]/45"
              >
                <div className="mb-6 grid h-12 w-12 place-items-center rounded-xl border border-[#d7b46a]/25 bg-[#d7b46a]/10 text-[#f0ce78]">
                  <Icon name={service.icon as Parameters<typeof Icon>[0]["name"]} />
                </div>
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#b9b0a1]">{service.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/diensten"
              className="inline-flex rounded-full border border-[#d7b46a]/35 bg-[#d7b46a]/10 px-5 py-3 text-sm font-semibold text-[#f0ce78] transition hover:-translate-y-0.5 hover:bg-[#d7b46a] hover:text-black"
            >
              Bekijk alle diensten
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-[#d7b46a]/15 bg-[#0a0908] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Portfolio preview"
            title="Recente visuals en softwareconcepten."
            description="Een selectie van werk en concepten. De volledige portfolio staat op een eigen pagina."
          />

          <div className="grid gap-5 md:grid-cols-3">
            {portfolioPreview.map((item) => (
              <article
                key={item.title}
                className="reveal overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] backdrop-blur"
              >
                <div className="relative aspect-[1.45] border-b border-white/10 bg-[#080808]">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover"
                      unoptimized
                    />
                  ) : (
                    <div className="grid h-full place-items-center bg-[linear-gradient(135deg,#17110a,#050505_58%,#20170a)]">
                      <span className="text-2xl font-black text-[#f0ce78]">AI</span>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#d7b46a]">
                    {item.category}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/portfolio"
              className="inline-flex rounded-full border border-[#d7b46a]/35 bg-[#d7b46a]/10 px-5 py-3 text-sm font-semibold text-[#f0ce78] transition hover:-translate-y-0.5 hover:bg-[#d7b46a] hover:text-black"
            >
              Bekijk portfolio
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#050505] px-4 py-20 sm:px-6 lg:px-8">
        <div className="premium-glass mx-auto max-w-5xl rounded-3xl p-6 text-center sm:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#d7b46a]">
            Start project
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold text-white md:text-5xl">
            Klaar om iets gaafs te bouwen?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#b9b0a1]">
            Stuur mij een bericht via Instagram, TikTok of mail en vertel kort wat je wilt maken.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-[#d7b46a] px-6 py-3 text-sm font-bold text-black transition hover:-translate-y-0.5 hover:bg-[#f0ce78]"
          >
            Neem contact op
          </Link>
        </div>
      </section>
    </PageFrame>
  );
}
