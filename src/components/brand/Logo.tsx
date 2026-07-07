import { cn } from "@/lib/utils";

/** Monogramm: "T" in Ivory auf Emerald-Deep-Kachel mit Gold-Hairline-Rahmen. */
export function Monogram({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-[var(--radius-sharp)] border border-gold/60 bg-emerald-deep font-display text-ivory",
        className,
      )}
      aria-hidden
    >
      T
    </div>
  );
}

/**
 * Wortmarke: TAMPDO in Archivo Black (Ivory) mit goldenem Punkt-Akzent,
 * Sub-Line MANAGEMENT AGENCY in Hind mit weitem Tracking (Gold).
 */
export function Wordmark({
  size = "md",
  subline = true,
  className,
}: {
  size?: "sm" | "md" | "lg";
  subline?: boolean;
  className?: string;
}) {
  const sizes = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-4xl",
  } as const;

  return (
    <div className={cn("leading-none", className)}>
      <div className={cn("display", sizes[size])}>
        TAMPDO<span className="text-gold">.</span>
      </div>
      {subline ? (
        <div className="eyebrow mt-2">Management Agency</div>
      ) : null}
    </div>
  );
}

/** Kombiniertes Lockup: Monogramm + Wortmarke. */
export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Monogram className="h-10 w-10 text-lg" />
      <Wordmark size="sm" />
    </div>
  );
}
