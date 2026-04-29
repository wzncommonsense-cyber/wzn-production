export default function SubPageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-[#d7b46a]/14 bg-[#050505] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="surface-grid absolute inset-0 opacity-[0.1]" aria-hidden="true" />
      <div className="ambient-gold-top absolute inset-x-0 top-0 h-56" aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.24em] text-[#d7b46a]">
          {eyebrow}
        </p>
        <h1 className="text-balance text-4xl font-semibold text-white md:text-6xl">
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#b9b0a1]">
          {description}
        </p>
      </div>
    </section>
  );
}
