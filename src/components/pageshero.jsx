import Image from "next/image";

export default function PageHero({
  title,
  titleAccent,
  subtitle,
  image,
  video,
  imageAlt = "",
}) {
  const heroImage = image || "/homexpert.png";

  // If titleAccent is provided, split title around it for teal highlight
  const renderTitle = () => {
    if (!titleAccent) return <span>{title}</span>;
    const parts = title.split(titleAccent);
    return (
      <>
        {parts[0]}
        <span className="text-gray-200">{titleAccent}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <section className="relative flex h-[62vh] min-h-[500px] w-full items-center justify-center overflow-hidden bg-[#07111f]">

      {/* Background media */}
      <div className="absolute inset-0 z-0">
        {video ? (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover opacity-50"
          />
        ) : (
          <Image
            src={heroImage}
            alt={imageAlt || title}
            fill
            className="object-cover opacity-50"
            priority
          />
        )}
      </div>


   <div className="absolute inset-0 bg-black/10" />


      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1440px] px-4 text-center md:px-6">

        {/* Animated teal line */}
        {/* <div className="mx-auto mb-8 h-[2px] w-16 bg-gradient-to-r from-transparent via-[#3BBFBF] to-transparent" /> */}

        {/* Eyebrow — optional, uses same pattern as rest of site */}
        {/* <div className="mb-6 inline-flex items-center gap-3">
          <span className="h-px w-8 bg-[#3BBFBF]/60" />
          <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.25em] text-[#3BBFBF]">
            Home Experts UAE
          </p>
          <span className="h-px w-8 bg-[#3BBFBF]/60" />
        </div> */}

        <h1 className="mx-auto max-w-[18ch] text-4xl font-medium leading-[1.15] tracking-[-0.03em] text-white md:text-5xl lg:text-7xl">
          {renderTitle()}
        </h1>

      </div>
    </section>
  );
}
