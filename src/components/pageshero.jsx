import Image from "next/image";

export default function PageHero({
  title,
  titleAccent,
  subtitle,
  image,
  imageAlt = "",
}) {
  // If titleAccent is provided, split title around it for teal highlight
  const renderTitle = () => {
    if (!titleAccent) return <span>{title}</span>;
    const parts = title.split(titleAccent);
    return (
      <>
        {parts[0]}
        <span className="text-[#3BBFBF]">{titleAccent}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <section className="relative flex h-[62vh] min-h-[520px] w-full items-center justify-center overflow-hidden bg-[#07111f]">

      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover opacity-50"
          priority
        />
      </div>

      {/* Gradient overlays — matching hero section style */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2C3E6B]/50 via-transparent to-[#07111f]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,191,191,0.15),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(44,62,107,0.40),transparent_50%)]" />

     
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1440px] px-4 text-center md:px-6">

        {/* Animated teal line */}
        <div className="mx-auto mb-8 h-[2px] w-16 bg-gradient-to-r from-transparent via-[#3BBFBF] to-transparent" />

        {/* Eyebrow — optional, uses same pattern as rest of site */}
        <div className="mb-6 inline-flex items-center gap-3">
          <span className="h-px w-8 bg-[#3BBFBF]/60" />
          <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.25em] text-[#3BBFBF]">
            Home Experts UAE
          </p>
          <span className="h-px w-8 bg-[#3BBFBF]/60" />
        </div>

        <h1 className="mx-auto max-w-[18ch] text-4xl font-medium leading-[1.15] tracking-[-0.03em] text-white md:text-5xl lg:text-6xl">
          {renderTitle()}
        </h1>

        {subtitle && (
          <p className="mx-auto mt-6 max-w-[52ch] text-[0.95rem] font-light leading-7 text-white/60 md:text-lg md:leading-8">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
