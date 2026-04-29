export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="reveal mx-auto mb-10 max-w-3xl text-center md:mb-14">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-[#d7b46a]">
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-semibold text-white md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#b9b0a1] md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
