import Image from "next/image";
import { site } from "../lib/site-data";

const navItems = [
  { label: "Diensten", href: "#diensten" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Prijzen", href: "#prijzen" },
  { label: "Werkwijze", href: "#werkwijze" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/78 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6 lg:px-8">
        <a href="#home" className="group flex min-w-0 items-center gap-2.5" aria-label="WZN Production home">
          <span className="relative h-9 w-[78px] shrink-0 overflow-hidden rounded border border-[#d7b46a]/22 bg-black shadow-[0_0_22px_rgba(215,180,106,0.1)] transition group-hover:border-[#f0ce78]">
            <Image
              src="/assets/wzn-logo-crop.png"
              alt="WZN Production logo"
              fill
              sizes="78px"
              className="object-cover"
              priority
              unoptimized
            />
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-semibold tracking-[0.01em] text-white">
              {site.name}
            </span>
            <span className="text-[11px] text-[#a99f8f]">{site.slogan}</span>
          </span>
        </a>

        <nav className="hidden items-center gap-5 rounded-full border border-white/8 bg-white/[0.03] px-4 py-2 text-sm text-[#cfc7b6] md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-[#f0ce78]">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={site.instagram}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-[#d7b46a] px-4 py-2 text-sm font-semibold text-black shadow-[0_0_28px_rgba(215,180,106,0.16)] transition hover:-translate-y-0.5 hover:bg-[#f0ce78] focus:outline-none focus:ring-2 focus:ring-[#f0ce78] focus:ring-offset-2 focus:ring-offset-black"
        >
          Instagram
        </a>
      </div>
    </header>
  );
}
