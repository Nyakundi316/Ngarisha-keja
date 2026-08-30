import Reveal from "@/components/Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  subtext,
  center = false,
  light = false,
  as = "h2",
}) {
  const Heading = as;

  return (
    <Reveal className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <span className={`eyebrow ${light ? "text-gold" : ""}`}>{eyebrow}</span>
      )}
      <Heading
        className={`mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </Heading>
      {subtext && (
        <p className={`mt-4 text-lg ${light ? "text-white/80" : "text-slatey"}`}>{subtext}</p>
      )}
    </Reveal>
  );
}
