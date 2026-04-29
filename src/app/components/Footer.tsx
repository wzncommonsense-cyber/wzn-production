import { site } from "../lib/site-data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-[#b9b0a1] md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-base font-semibold text-white">{site.name}</p>
          <p className="mt-1">{site.slogan}</p>
        </div>
        <p>Software • Content • Promotie • Resultaat</p>
      </div>
    </footer>
  );
}
