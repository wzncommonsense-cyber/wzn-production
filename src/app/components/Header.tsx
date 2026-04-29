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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/78 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="group flex items-center gap-3" aria-label="WZN Production home">
          <span className="grid h-10 w-10 place-items-center rounded-md border border-[#d7b46a]/35 bg-[#d7b46a]/10 font-mono text-sm font-bold text-[#f0ce78] transition group-hover:border-[#f0ce78]">
            WZN
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold tracking-wide text-white">
              {site.name}
            </span>
            <span className="hidden text-xs text-[#b9b0a1] sm:block">{site.slogan}</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-[#cfc7b6] md:flex">
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
          className="rounded-md bg-[#d7b46a] px-4 py-2 text-sm font-semibold text-black shadow-[0_0_32px_rgba(215,180,106,0.18)] transition hover:-translate-y-0.5 hover:bg-[#f0ce78] focus:outline-none focus:ring-2 focus:ring-[#f0ce78] focus:ring-offset-2 focus:ring-offset-black"
        >
          Instagram
        </a>
      </div>
    </header>
  );
}
