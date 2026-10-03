/**
 * ScrollingBanner
 * Renders a full-width strip of large serif outline text that scrolls
 * horizontally in an infinite loop — used at section boundaries.
 *
 * Props:
 *  text     – the repeated string (e.g. "RESUME")
 *  reverse  – scroll right→left when false (default), left→right when true
 *  stroke   – CSS value for -webkit-text-stroke
 *  bg       – background colour of the strip
 *  duration – CSS duration string, e.g. "32s"
 *  py       – Tailwind padding-y class, e.g. "py-4"
 */
export default function ScrollingBanner({
  text = "SECTION",
  reverse = false,
  stroke = "1.5px rgba(231,169,61,0.45)",
  bg = "transparent",
  duration = "32s",
  py = "py-4",
}) {
  const copies = Array.from({ length: 8 });

  return (
    <div
      className={`overflow-hidden whitespace-nowrap select-none ${py}`}
      style={{ background: bg }}
      aria-hidden="true"
    >
      <div
        className={
          reverse
            ? "animate-marquee-reverse inline-flex items-center"
            : "animate-marquee inline-flex items-center"
        }
        style={{ "--marquee-duration": duration }}
      >
        {copies.map((_, i) => (
          <span
            key={i}
            className="font-serif font-black text-transparent shrink-0 px-8 py-3 inline-block leading-[1.25]"
            style={{
              fontSize: "clamp(3.5rem, 11vw, 8rem)",
              WebkitTextStroke: stroke,
            }}
          >
            {text}&nbsp;✦
          </span>
        ))}
      </div>
    </div>
  );
}
