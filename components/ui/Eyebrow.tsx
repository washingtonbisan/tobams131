interface EyebrowProps {
  children: string;
  tone?: "light" | "dark";
}

export default function Eyebrow({ children, tone = "dark" }: EyebrowProps) {
  const toneStyles =
    tone === "light"
      ? "border-white/40 text-white"
      : "border-brand-maroon/40 text-brand-maroon";

  return (
    <span
      className={`inline-block rounded-full border px-4 py-1.5 text-xs font-medium tracking-wide ${toneStyles}`}
    >
      {children}
    </span>
  );
}
