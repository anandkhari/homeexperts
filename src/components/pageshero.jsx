import Image from "next/image";

export default function PageHero({
  title,
  titleAccent,
  subtitle,
  image,
  video,
  imageAlt = "",
}) {
  const heroImage = (() => {
    if (typeof image !== "string" || !image.trim()) {
      return "/homexpert.png";
    }

    const normalizedImage = image.trim();

    if (
      normalizedImage.startsWith("/") ||
      normalizedImage.startsWith("http://") ||
      normalizedImage.startsWith("https://") ||
      normalizedImage.startsWith("data:") ||
      normalizedImage.startsWith("blob:")
    ) {
      return normalizedImage;
    }

    return `/${normalizedImage}`;
  })();

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
    <section className="relative flex h-[62vh] min-h-[500px] w-full items-center overflow-hidden bg-[#07111f]">
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
            sizes="100vw"
            className="object-cover opacity-50"
            style={{ objectFit: "cover" }}
            priority
          />
        )}
      </div>

      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 text-center md:px-12 lg:px-20">
        <h1 className="mx-auto max-w-[18ch] text-4xl font-medium leading-[1.15] tracking-[-0.03em] text-white md:text-6xl">
          {renderTitle()}
        </h1>
        
        {subtitle && (
          <p className="mx-auto mt-6 max-w-6xl text-base font-normal leading-relaxed text-gray-300 md:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
