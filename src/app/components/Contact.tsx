import { site } from "../lib/site-data";

const contactLinks = [
  {
    label: "Bericht via Instagram",
    href: site.instagram,
    detail: site.instagramHandle,
  },
  {
    label: "Bericht via TikTok",
    href: site.tiktok,
    detail: site.tiktokHandle,
  },
  {
    label: "Mail mij",
    href: `mailto:${site.email}`,
    detail: site.email,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-[#090806] px-4 py-20 sm:px-6 lg:px-8">
      <div className="reveal mx-auto max-w-7xl overflow-hidden rounded-xl border border-[#d7b46a]/22 bg-[#0d0d0d]">
        <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-6 sm:p-10 lg:p-12">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.24em] text-[#d7b46a]">
              Contact
            </p>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Klaar om iets gaafs te bouwen?
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#b9b0a1]">
              Stuur mij een bericht met jouw idee, project of campagne.
            </p>
          </div>

          <div className="border-t border-white/10 bg-black/35 p-6 sm:p-10 lg:border-l lg:border-t-0">
            <div className="grid gap-3">
              {contactLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group rounded-lg border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-0.5 hover:border-[#d7b46a]/45 hover:bg-[#d7b46a]/10 focus:outline-none focus:ring-2 focus:ring-[#f0ce78] focus:ring-offset-2 focus:ring-offset-black"
                >
                  <span className="block text-lg font-semibold text-white group-hover:text-[#f0ce78]">
                    {link.label}
                  </span>
                  <span className="mt-2 block text-sm text-[#b9b0a1]">{link.detail}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
