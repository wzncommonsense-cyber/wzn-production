"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "../lib/site-data";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Diensten", href: "/diensten" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Prijzen", href: "/prijzen" },
  { label: "Werkwijze", href: "/werkwijze" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[#d7b46a]/10 bg-black/82 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 sm:px-6 lg:px-8">
        <Link href="/" className="group flex min-w-0 items-center" aria-label="WZN Production home">
          <span className="relative h-12 w-[132px] shrink-0 overflow-hidden rounded-lg border border-[#d7b46a]/35 bg-black p-1.5 shadow-[0_0_30px_rgba(215,180,106,0.16)] transition group-hover:border-[#f0ce78] group-hover:shadow-[0_0_36px_rgba(215,180,106,0.22)]">
            <Image
              src="/assets/wzn-logo-crop.png"
              alt="WZN Production logo"
              fill
              sizes="132px"
              className="object-contain p-1"
              priority
              unoptimized
            />
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-white/8 bg-white/[0.03] p-1 text-sm text-[#cfc7b6] md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-3.5 py-1.5 transition hover:text-[#f0ce78] ${
                pathname === item.href
                  ? "border border-[#d7b46a]/35 bg-[#d7b46a]/10 text-[#f0ce78]"
                  : "border border-transparent"
              }`}
            >
              {item.label}
            </Link>
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

      <nav className="flex gap-2 overflow-x-auto border-t border-white/8 px-4 py-2 text-sm text-[#cfc7b6] sm:px-6 md:hidden">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`shrink-0 rounded-full px-3 py-1.5 transition hover:text-[#f0ce78] ${
              pathname === item.href
                ? "border border-[#d7b46a]/35 bg-[#d7b46a]/10 text-[#f0ce78]"
                : "border border-white/8 bg-white/[0.03]"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
