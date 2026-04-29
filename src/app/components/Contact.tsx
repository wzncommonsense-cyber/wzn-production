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
    <section id="contact" className="relative overflow-hidden bg-[#050505] px-4 py-20 sm:px-6 lg:px-8">
      <div className="ambient-gold-top absolute inset-x-0 top-0 h-56" aria-hidden="true" />
      <div className="reveal premium-glass relative mx-auto max-w-7xl overflow-hidden rounded-3xl">
        <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#d7b46a]/60 to-transparent" aria-hidden="true" />
        <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="p-6 sm:p-10 lg:p-14">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.24em] text-[#d7b46a]">
              Contact
            </p>
            <h2 className="text-balance text-3xl font-semibold text-white md:text-5xl">
              Klaar om iets gaafs te bouwen?
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#b9b0a1]">
              Stuur mij een bericht met jouw idee, project of campagne. Dan kijken we
              samen wat de beste aanpak is.
            </p>
            <div className="mt-8 flex flex-wrap gap-2 text-sm text-[#a99f8f]">
              {["Software", "Websites", "AI tools", "Promotiecontent"].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-white/10 bg-black/32 p-6 sm:p-10 lg:border-l lg:border-t-0">
            <div className="grid gap-3">
              {contactLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group rounded-2xl border border-white/10 bg-white/[0.045] p-5 transition hover:-translate-y-1 hover:border-[#d7b46a]/45 hover:bg-[#d7b46a]/10 hover:shadow-[0_18px_60px_rgba(215,180,106,0.1)] focus:outline-none focus:ring-2 focus:ring-[#f0ce78] focus:ring-offset-2 focus:ring-offset-black"
                >
                  <span className="flex items-center justify-between gap-4">
                    <span>
                      <span className="block text-lg font-semibold text-white group-hover:text-[#f0ce78]">
                        {link.label}
                      </span>
                      <span className="mt-2 block text-sm text-[#b9b0a1]">{link.detail}</span>
                    </span>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#d7b46a]/25 bg-[#d7b46a]/10 text-[#f0ce78] transition group-hover:bg-[#d7b46a] group-hover:text-black">
                      -&gt;
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
