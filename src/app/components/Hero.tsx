import Image from "next/image";

const serviceLabels = ["Websites", "AI tools", "Promotie", "Flyers", "Content"];
const systemCards = [
  ["01", "Strategie", "Van idee naar duidelijke richting"],
  ["02", "Creatie", "Design, software en content"],
  ["03", "Launch", "Oplevering met focus op resultaat"],
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-white/10 bg-[#050505]"
    >
      <div className="surface-grid absolute inset-0 opacity-[0.16]" aria-hidden="true" />
      <div className="ambient-gold-top absolute inset-x-0 top-0 h-72" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0907] to-transparent" aria-hidden="true" />

      <div className="relative mx-auto flex min-h-[calc(82svh-3.5rem)] max-w-7xl flex-col justify-center px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mx-auto mb-6 grid w-fit place-items-center rounded-full border border-[#d7b46a]/22 bg-white/[0.035] px-3 py-2 shadow-[0_0_42px_rgba(215,180,106,0.12)] backdrop-blur">
            <span className="relative h-9 w-24 overflow-hidden rounded border border-white/10 bg-black">
              <Image
                src="/assets/wzn-logo-crop.png"
                alt="WZN Production logo"
                fill
                sizes="96px"
                className="object-cover"
                priority
                unoptimized
              />
            </span>
          </div>

          <h1 className="text-balance text-5xl font-semibold text-white sm:text-6xl lg:text-7xl">
            WZN <span className="gold-sheen">PRODUCTION</span>
          </h1>
          <p className="mt-4 text-lg font-medium text-[#efe4c7] sm:text-xl">
            Also Impossible is Possible
          </p>
          <h2 className="mt-8 text-balance text-2xl font-semibold text-white sm:text-4xl lg:text-5xl">
            Software. Content. Promotie. Resultaat.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#cfc7b6] sm:text-lg">
            Ik help bedrijven, zzp&apos;ers en creators met websites, software, AI tools en
            promotiecontent die professioneel oogt en resultaat oplevert.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="#diensten"
              className="rounded-full bg-[#d7b46a] px-6 py-3 text-center text-sm font-bold text-black shadow-[0_0_34px_rgba(215,180,106,0.22)] transition hover:-translate-y-0.5 hover:bg-[#f0ce78] hover:shadow-[0_0_42px_rgba(215,180,106,0.34)] focus:outline-none focus:ring-2 focus:ring-[#f0ce78] focus:ring-offset-2 focus:ring-offset-black"
            >
              Bekijk diensten
            </a>
            <a
              href="#prijzen"
              className="rounded-full border border-white/14 bg-white/[0.045] px-6 py-3 text-center text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-[#d7b46a]/45 hover:text-[#f0ce78] focus:outline-none focus:ring-2 focus:ring-[#f0ce78] focus:ring-offset-2 focus:ring-offset-black"
            >
              Bekijk prijzen
            </a>
            <a
              href="#contact"
              className="rounded-full border border-[#d7b46a]/35 bg-[#d7b46a]/10 px-6 py-3 text-center text-sm font-semibold text-[#f0ce78] transition hover:-translate-y-0.5 hover:bg-[#d7b46a] hover:text-black focus:outline-none focus:ring-2 focus:ring-[#f0ce78] focus:ring-offset-2 focus:ring-offset-black"
            >
              Start project
            </a>
          </div>

          <div className="mx-auto mt-7 flex max-w-3xl flex-wrap items-center justify-center gap-2 text-sm text-[#a99f8f]">
            {serviceLabels.map((label, index) => (
              <span key={label} className="inline-flex items-center gap-2">
                <span>{label}</span>
                {index < serviceLabels.length - 1 ? (
                  <span className="h-1 w-1 rounded-full bg-[#d7b46a]/70" aria-hidden="true" />
                ) : null}
              </span>
            ))}
          </div>
        </div>

        <div className="reveal mx-auto mt-10 hidden w-full max-w-5xl md:block">
          <div className="premium-glass relative overflow-hidden rounded-2xl p-4 sm:p-5">
            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#d7b46a]/60 to-transparent" aria-hidden="true" />
            <div className="grid gap-3 md:grid-cols-3">
              {systemCards.map(([number, title, description]) => (
                <div
                  key={number}
                  className="group rounded-xl border border-white/10 bg-black/30 p-5 transition hover:-translate-y-1 hover:border-[#d7b46a]/45 hover:bg-[#d7b46a]/10"
                >
                  <div className="mb-8 flex items-center justify-between">
                    <span className="font-mono text-xs text-[#d7b46a]">{number}</span>
                    <span className="h-2 w-2 rounded-full bg-[#d7b46a] shadow-[0_0_18px_rgba(215,180,106,0.7)]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#b9b0a1]">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
