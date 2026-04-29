import { site } from "../lib/site-data";

const stats = [
  "Software",
  "Content",
  "Promotie",
  "Resultaat",
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="surface-grid absolute inset-0 opacity-25" aria-hidden="true" />
      <div className="relative mx-auto grid min-h-[calc(100svh-4.5rem)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-md border border-[#d7b46a]/25 bg-[#d7b46a]/10 px-3 py-2 font-mono text-xs uppercase tracking-[0.22em] text-[#f0ce78]">
            {site.slogan}
          </p>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Meer dan alleen software.{" "}
            <span className="gold-sheen">Ook promotie werk?</span> Geen probleem.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d8d1c2] md:text-xl">
            Ik help bedrijven, zzp&apos;ers en creators met software, websites, AI tools,
            content en promotie die zichtbaar resultaat opleveren.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
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
              Bericht mij op Instagram
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((item) => (
              <div key={item} className="premium-border rounded-md bg-white/[0.03] px-4 py-3">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#d7b46a]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal relative">
          <div className="premium-border rounded-[10px] bg-[#0d0d0d]/95 p-3 shadow-2xl shadow-black/60">
            <div className="rounded-md border border-white/10 bg-black p-4">
              <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#d7b46a]">
                    Brand studio
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">WZN Production</h2>
                </div>
                <span className="rounded-md bg-[#d7b46a] px-3 py-2 font-mono text-xs font-bold text-black">
                  LIVE
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-md border border-[#d7b46a]/20 bg-[#d7b46a]/10 p-4">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#d7b46a]">
                    Logo placeholder
                  </p>
                  <div className="mt-8 grid aspect-[1.55] place-items-center rounded-md border border-dashed border-[#d7b46a]/35 bg-black/45">
                    <span className="text-4xl font-black tracking-tight text-white">WZN</span>
                  </div>
                </div>
                <div className="grid gap-3">
                  <div className="rounded-md border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-sm font-semibold text-white">Websites & webapps</p>
                    <div className="mt-4 h-2 rounded-full bg-white/10">
                      <div className="h-2 w-4/5 rounded-full bg-[#d7b46a]" />
                    </div>
                  </div>
                  <div className="rounded-md border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-sm font-semibold text-white">Promotie content</p>
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      <span className="h-12 rounded bg-[#d7b46a]/30" />
                      <span className="h-12 rounded bg-white/10" />
                      <span className="h-12 rounded bg-[#d7b46a]/20" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                {["Tamagotchi demo", "Anime intro", "AI concept"].map((item) => (
                  <div key={item} className="rounded-md border border-white/10 bg-white/[0.035] p-3">
                    <div className="mb-3 h-16 rounded border border-dashed border-white/14 bg-[#151515]" />
                    <p className="text-xs font-medium text-[#d8d1c2]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
