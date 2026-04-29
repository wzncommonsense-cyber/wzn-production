type IconName = "layout" | "code" | "automation" | "video" | "design" | "strategy";

const paths: Record<IconName, React.ReactNode> = {
  layout: (
    <>
      <rect x="4" y="5" width="16" height="14" rx="2" />
      <path d="M4 10h16M10 10v9" />
    </>
  ),
  code: (
    <>
      <path d="m9 8-4 4 4 4" />
      <path d="m15 8 4 4-4 4" />
      <path d="m13 5-2 14" />
    </>
  ),
  automation: (
    <>
      <path d="M12 3v3M12 18v3M4.9 4.9 7 7M17 17l2.1 2.1M3 12h3M18 12h3M4.9 19.1 7 17M17 7l2.1-2.1" />
      <circle cx="12" cy="12" r="4" />
    </>
  ),
  video: (
    <>
      <rect x="4" y="6" width="11" height="12" rx="2" />
      <path d="m15 10 5-3v10l-5-3z" />
    </>
  ),
  design: (
    <>
      <path d="M4 20h16" />
      <path d="m6 16 9.5-9.5a2.1 2.1 0 1 1 3 3L9 19H6z" />
      <path d="m14 8 2 2" />
    </>
  ),
  strategy: (
    <>
      <circle cx="6" cy="6" r="2" />
      <circle cx="18" cy="6" r="2" />
      <circle cx="12" cy="18" r="2" />
      <path d="M8 7h8M7 8l4 8M17 8l-4 8" />
    </>
  ),
};

export default function Icon({ name }: { name: IconName }) {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      {paths[name]}
    </svg>
  );
}
