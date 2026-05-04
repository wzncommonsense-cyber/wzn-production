"use client";

import Link from "next/link";
import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { pricing, site } from "../lib/site-data";

const pricingHighlights = [
  "Tijdelijke korting voor eerste klanten",
  "Professionele bedrijfsuitstraling",
  "Mobielvriendelijk ontwerp",
  "Domein koppelen mogelijk",
];

function CheckMark() {
  return (
    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#d7b46a]/45 bg-[#d7b46a]/10 text-[11px] font-bold text-[#f0ce78]">
      +
    </span>
  );
}

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/20 p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#d7b46a]">
        {title}
      </p>
      <ul className="mt-3 space-y-2 text-sm leading-6 text-[#d8d1c2]">
        {items.map((item) => (
          <li key={item} className="flex gap-2.5">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d7b46a]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Pricing() {
  const preferredPackage = pricing.find((item) => item.popular)?.title ?? pricing[0]?.title;
  const [openPackage, setOpenPackage] = useState<string | null>(preferredPackage);

  return (
    <section
      id="prijzen"
      className="relative overflow-hidden bg-[#0a0908] px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="ambient-gold-top absolute inset-x-0 top-0 h-48" aria-hidden="true" />
      <div className="ambient-gold-bottom absolute inset-x-0 bottom-0 h-64" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Tijdelijke introductiekorting"
          title="Professionele websites en AI-demo's voor een scherpe startprijs."
          description="Omdat WZN Production net is gestart, bied ik tijdelijk scherpe startersprijzen aan voor de eerste klanten. Zo kun jij professioneel online zichtbaar worden voor een lagere prijs, terwijl WZN Production verder groeit met echte klantprojecten."
        />

        <div className="reveal mx-auto mb-8 max-w-3xl rounded-2xl border border-[#d7b46a]/22 bg-[#d7b46a]/10 p-5 text-center text-sm leading-7 text-[#efe4c7] shadow-[0_18px_80px_rgba(215,180,106,0.08)] backdrop-blur">
          De kwaliteit blijft professioneel, alleen de prijs is tijdelijk lager.
        </div>

        <div className="reveal mb-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {pricingHighlights.map((highlight) => (
            <div
              key={highlight}
              className="flex items-center gap-3 rounded-full border border-[#d7b46a]/18 bg-white/[0.035] px-4 py-3 text-sm text-[#efe4c7] backdrop-blur"
            >
              <CheckMark />
              <span>{highlight}</span>
            </div>
          ))}
        </div>

        <div className="grid items-start gap-5 lg:grid-cols-3">
          {pricing.map((item) => {
            const isOpen = openPackage === item.title;
            const cardIsHighlighted = item.popular || isOpen;

            return (
              <article
                key={item.title}
                onClick={() => setOpenPackage(isOpen ? null : item.title)}
                className={`reveal group relative flex cursor-pointer flex-col overflow-hidden rounded-3xl border p-5 shadow-xl shadow-black/20 backdrop-blur transition duration-300 hover:scale-[1.03] sm:p-6 ${
                  cardIsHighlighted
                    ? "border-[#d7b46a]/70 bg-[#d7b46a]/10 shadow-[0_30px_120px_rgba(215,180,106,0.18)]"
                    : "border-white/10 bg-white/[0.035] hover:border-[#d7b46a]/45 hover:bg-white/[0.055] hover:shadow-[0_22px_90px_rgba(215,180,106,0.11)]"
                }`}
              >
                <div
                  className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d7b46a]/70 to-transparent transition ${
                    cardIsHighlighted ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                  aria-hidden="true"
                />

                <div className="flex min-h-[390px] flex-col">
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                    <span
                      className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] ${
                        item.popular
                          ? "border border-[#d7b46a]/35 bg-[#d7b46a]/10 text-[#f0ce78]"
                          : "border border-[#d7b46a]/28 bg-[#d7b46a]/10 text-[#f0ce78]"
                      }`}
                    >
                      {item.badge}
                    </span>

                    {item.popular ? (
                      <span className="rounded-full bg-[#d7b46a] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-black">
                        Meest gekozen
                      </span>
                    ) : (
                      <span className="text-xs text-[#d7b46a]">{isOpen ? "Open" : "Details"}</span>
                    )}
                  </div>

                  <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                  <div className="mt-5">
                    <p className="text-sm font-semibold text-[#8f8879] line-through decoration-[#d7b46a]/65 decoration-2">
                      {item.oldPrice}
                    </p>
                    <p className="mt-1 text-4xl font-black tracking-tight text-[#f0ce78] md:text-5xl">
                      {item.currentPrice}
                    </p>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-[#b9b0a1]">{item.description}</p>

                  <ul className="mt-6 space-y-3 text-sm text-[#efe4c7]">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3">
                        <CheckMark />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      setOpenPackage(isOpen ? null : item.title);
                    }}
                    aria-expanded={isOpen}
                    className={`mt-auto w-full rounded-full px-4 py-3 text-center text-sm font-semibold transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#f0ce78] focus:ring-offset-2 focus:ring-offset-black ${
                      cardIsHighlighted
                        ? "bg-[#d7b46a] text-black hover:bg-[#f0ce78]"
                        : "border border-[#d7b46a]/35 bg-[#d7b46a]/10 text-[#f0ce78] hover:bg-[#d7b46a] hover:text-black"
                    }`}
                  >
                    {isOpen ? "Details sluiten" : "Bekijk details"}
                  </button>

                  <Link
                    href="/contact"
                    onClick={(event) => event.stopPropagation()}
                    className={`mt-3 flex w-full items-center justify-center rounded-full px-4 py-3 text-center text-sm font-semibold transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#f0ce78] focus:ring-offset-2 focus:ring-offset-black ${
                      cardIsHighlighted
                        ? "border border-[#d7b46a]/45 bg-black/25 text-[#f0ce78] hover:bg-white/[0.08]"
                        : "border border-white/10 bg-white/[0.035] text-white hover:border-[#d7b46a]/45 hover:text-[#f0ce78]"
                    }`}
                  >
                    {item.cta}
                  </Link>
                </div>

                <div
                  className={`grid transition-[grid-template-rows,opacity,margin] duration-300 ease-out ${
                    isOpen ? "mt-6 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="space-y-3 border-t border-[#d7b46a]/18 pt-5">
                      <DetailList title="Wat je krijgt" items={item.included} />
                      <DetailList title="Oplevering" items={item.delivery} />
                      <DetailList title="Voor wie" items={item.audience} />
                      <DetailList title="Niet inbegrepen" items={item.excluded} />

                      <div className="rounded-xl border border-[#d7b46a]/20 bg-[#d7b46a]/10 p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#d7b46a]">
                          Eindresultaat
                        </p>
                        <p className="mt-3 text-sm leading-6 text-[#efe4c7]">{item.result}</p>
                      </div>

                      <Link
                        href="/contact"
                        onClick={(event) => event.stopPropagation()}
                        className="flex w-full items-center justify-center rounded-full bg-[#d7b46a] px-4 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-[#f0ce78] focus:outline-none focus:ring-2 focus:ring-[#f0ce78] focus:ring-offset-2 focus:ring-offset-black"
                      >
                        Stuur bericht
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="reveal mt-6 rounded-2xl border border-[#d7b46a]/24 bg-black/30 p-5 text-sm leading-7 text-[#efe4c7] backdrop-blur">
          <strong className="text-white">Let op:</strong> deze prijzen gelden tijdelijk en alleen
          voor de eerste klanten. Na deze introductieperiode gaan de prijzen terug naar het normale tarief.
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          <div className="reveal rounded-2xl border border-[#d7b46a]/18 bg-white/[0.035] p-6 backdrop-blur lg:col-span-2">
            <p className="text-xl font-semibold text-white">Wat betekent introductieprijs?</p>
            <p className="mt-4 text-sm leading-7 text-[#cfc7b6]">
              De introductieprijs is bedoeld als tijdelijke startkorting. De uiteindelijke prijs
              hangt af van het aantal pagina&apos;s, functies, content, designniveau en gewenste
              oplevering. Na een korte intake krijg je vooraf een duidelijke vaste prijs.
            </p>
          </div>

          <div className="reveal rounded-2xl border border-[#d7b46a]/20 bg-[#d7b46a]/10 p-6 backdrop-blur">
            <p className="text-xl font-semibold text-white">Website live op jouw domein</p>
            <p className="mt-4 text-sm leading-7 text-[#cfc7b6]">
              Wil je dat de website direct online staat op jouw eigen domein? Dan kan ik helpen
              met Vercel deployment en domeinkoppeling. Domein- en hostingkosten zijn voor de klant,
              maar de technische koppeling kan worden meegenomen.
            </p>
          </div>
        </div>

        <div className="reveal mt-5 rounded-2xl border border-white/10 bg-black/25 p-5 text-sm leading-7 text-[#b9b0a1] backdrop-blur">
          Onderhoud, updates en toekomstige aanpassingen zitten niet standaard inbegrepen,
          maar kunnen later apart worden besproken. Extra pagina&apos;s, complexe functies,
          extra revisies, spoedoplevering, betaalintegraties, login-systemen, grote hoeveelheden
          content of uitgebreide automatisering kunnen invloed hebben op de prijs.
        </div>

        <div className="reveal mt-12 overflow-hidden rounded-3xl border border-[#d7b46a]/25 bg-white/[0.04] p-6 text-center shadow-[0_24px_100px_rgba(0,0,0,0.32)] backdrop-blur md:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#d7b46a]">
            Advies nodig?
          </p>
          <h3 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold text-white md:text-4xl">
            Weet je niet welk pakket past?
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#cfc7b6] md:text-base">
            Stuur mij jouw idee of situatie. Dan denk ik mee over wat je nodig hebt en
            welke aanpak het beste past.
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            <Link
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#d7b46a] px-5 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-[#f0ce78] focus:outline-none focus:ring-2 focus:ring-[#f0ce78] focus:ring-offset-2 focus:ring-offset-black"
            >
              Bericht via Instagram
            </Link>
            <Link
              href={`mailto:${site.email}`}
              className="rounded-full border border-[#d7b46a]/35 bg-[#d7b46a]/10 px-5 py-3 text-sm font-semibold text-[#f0ce78] transition hover:-translate-y-0.5 hover:bg-[#d7b46a] hover:text-black focus:outline-none focus:ring-2 focus:ring-[#f0ce78] focus:ring-offset-2 focus:ring-offset-black"
            >
              Mail mij
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/10 bg-white/[0.045] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-[#d7b46a]/45 hover:text-[#f0ce78] focus:outline-none focus:ring-2 focus:ring-[#f0ce78] focus:ring-offset-2 focus:ring-offset-black"
            >
              Contactpagina
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
