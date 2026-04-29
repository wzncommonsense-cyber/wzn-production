import Image from "next/image";
import { site } from "../lib/site-data";

const stats = ["Software", "Content", "Promotie", "Resultaat"];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden border-b border-white/10 bg-[#070707]">
      <div className="surface-grid absolute inset-0 opacity-25" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 md:py-14 lg:min-h-[680px] lg:grid-cols-[0.95fr_1.05fr] lg:px-8 xl:min-h-[720px]">
        <div className="min-w-0 max-w-2xl">
          <p className="mb-5 inline-flex rounded-md border border-[#d7b46a]/25 bg-[#d7b46a]/10 px-3 py-2 font-mono text-xs uppercase tracking-[0.22em] text-[#f0ce78]">
            {site.slogan}
          </p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            <span className="block">Meer dan alleen software.</span>
            <span className="gold-sheen block">Ook promotie werk?</span>
            <span className="block">Geen probleem.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d8d1c2] md:text-xl">
            Ik help bedrijven, zzp&apos;ers en creators met software, websites, AI tools,
            content en promotie die zichtbaar resultaat opleveren.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#diensten"
              className="rounded-md bg-[#d7b46a] px-6 py-3 text-center text-sm font-bold text-black transition hover:-translate-y-0.5 hover:bg-[#f0ce78] focus:outline-none focus:ring-2 focus:ring-[#f0ce78] focus:ring-offset-2 focus:ring-offset-black"
            >
              Bekijk diensten
            </a>
            <a
              href="#prijzen"
              className="rounded-md border border-white/16 bg-white/6 px-6 py-3 text-center text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-[#d7b46a]/45 hover:text-[#f0ce78] focus:outline-none focus:ring-2 focus:ring-[#f0ce78] focus:ring-offset-2 focus:ring-offset-black"
            >
              Bekijk prijzen
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-[#d7b46a]/35 bg-[#d7b46a]/10 px-6 py-3 text-center text-sm font-semibold text-[#f0ce78] transition hover:-translate-y-0.5 hover:bg-[#d7b46a]/15 focus:outline-none focus:ring-2 focus:ring-[#f0ce78] focus:ring-offset-2 focus:ring-offset-black"
            >
              Bericht via Instagram
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((item) => (
              <div key={item} className="premium-border rounded-md bg-white/[0.03] px-4 py-3">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#d7b46a]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal relative min-w-0">
          <div className="premium-border rounded-xl bg-[#0d0d0d]/95 p-3 shadow-2xl shadow-black/60">
            <div className="relative overflow-hidden rounded-lg border border-white/10 bg-black">
              <div className="relative aspect-[1.28] min-h-[360px]">
                <Image
                  src="/assets/wzn-brand-showcase.png"
                  alt="WZN Production brand showcase"
                  fill
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="object-cover"
                  priority
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/18 to-transparent" />
                <div className="absolute left-4 top-4 w-40 overflow-hidden rounded-md border border-[#d7b46a]/30 bg-black/70 p-2 backdrop-blur">
                  <Image
                    src="/assets/wzn-logo-crop.png"
                    alt="WZN Production logo"
                    width={540}
                    height={245}
                    className="h-auto w-full"
                    unoptimized
                  />
                </div>
                <div className="absolute bottom-4 left-4 right-4 grid gap-3 sm:grid-cols-3">
                  {[
                    ["Software", "Webapps op maat"],
                    ["Content", "Video, flyers en posts"],
                    ["Promotie", "Meer bereik en impact"],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-md border border-white/12 bg-black/68 p-3 backdrop-blur">
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#d7b46a]">
                        {label}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
