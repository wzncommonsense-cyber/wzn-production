import Link from "next/link";

const serviceLabels = ["Websites", "AI tools", "Promotie", "Flyers", "Content", "Resultaat"];

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-stage relative overflow-hidden border-b border-[#d7b46a]/14 bg-[#050505]"
    >
      <div className="surface-grid absolute inset-0 opacity-[0.12]" aria-hidden="true" />
      <div className="hero-lines hero-lines-left" aria-hidden="true" />
      <div className="hero-lines hero-lines-right" aria-hidden="true" />
      <div className="hero-edge-lines" aria-hidden="true" />

      <div className="relative mx-auto flex min-h-[calc(74svh-3.5rem)] max-w-7xl flex-col justify-center px-4 py-10 sm:px-6 sm:py-12 lg:min-h-[calc(70svh-3.5rem)] lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.28em] text-[#d7b46a]">
            Premium creative / AI / software agency
          </p>
          <h1 className="text-balance text-4xl font-semibold text-white sm:text-6xl">
            WZN <span className="gold-sheen">Production</span>
          </h1>
          <h2 className="mt-6 text-balance text-3xl font-semibold text-white sm:text-5xl">
            Software. Content. Promotie. <span className="gold-sheen">Resultaat.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#d8d1c2] sm:text-lg">
            Ik help bedrijven, zzp&apos;ers en creators met websites, software, AI tools en
            promotiecontent die professioneel oogt en resultaat oplevert.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/diensten"
              className="rounded-full bg-[#d7b46a] px-6 py-3 text-center text-sm font-bold text-black shadow-[0_0_34px_rgba(215,180,106,0.22)] transition hover:-translate-y-0.5 hover:bg-[#f0ce78] hover:shadow-[0_0_42px_rgba(215,180,106,0.34)] focus:outline-none focus:ring-2 focus:ring-[#f0ce78] focus:ring-offset-2 focus:ring-offset-black"
            >
              Bekijk diensten
            </Link>
            <Link
              href="/prijzen"
              className="rounded-full border border-white/14 bg-white/[0.045] px-6 py-3 text-center text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-[#d7b46a]/45 hover:text-[#f0ce78] focus:outline-none focus:ring-2 focus:ring-[#f0ce78] focus:ring-offset-2 focus:ring-offset-black"
            >
              Bekijk prijzen
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-[#d7b46a]/35 bg-[#d7b46a]/10 px-6 py-3 text-center text-sm font-semibold text-[#f0ce78] transition hover:-translate-y-0.5 hover:bg-[#d7b46a] hover:text-black focus:outline-none focus:ring-2 focus:ring-[#f0ce78] focus:ring-offset-2 focus:ring-offset-black"
            >
              Start project
            </Link>
          </div>

          <div className="mx-auto mt-7 flex max-w-4xl flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-[#d8d1c2]">
            {serviceLabels.map((label) => (
              <span key={label} className="inline-flex items-center gap-2">
                <span className="grid h-4 w-4 place-items-center rounded-full border border-[#d7b46a]/50">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#d7b46a]" />
                </span>
                <span>{label}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
