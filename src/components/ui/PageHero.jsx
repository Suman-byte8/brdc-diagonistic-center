import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

// Shared inner-page header: dark green gradient band, breadcrumb, serif title
// with an optional gold highlight, and an optional faded background photo.
export default function PageHero({
  title,
  highlight,
  crumb,
  subtitle,
  image,
  imageAlt = "",
  titleAs: Title = "h1",
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brdc-dark via-brdc-forest to-brdc-secondary text-white">
      {image && (
        <>
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-brdc-dark/95 via-brdc-forest/80 to-brdc-forest/30"></div>
        </>
      )}
      <div aria-hidden="true" className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-brdc-gold/10 blur-3xl"></div>
      <div aria-hidden="true" className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16 sm:py-24">
        <nav aria-label="Breadcrumb" className="mb-5">
          <ol className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-brdc-gold">
            <li>
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
            </li>
            <li aria-hidden="true"><ChevronRight className="w-3.5 h-3.5" strokeWidth={2.5} /></li>
            <li aria-current="page" className="text-white/80">{crumb}</li>
          </ol>
        </nav>
        <Title className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl">
          {title}
          {highlight && (
            <>
              {" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brdc-gold to-[#F8E3A8]">{highlight}</span>
            </>
          )}
        </Title>
        <div className="h-1 w-16 bg-gradient-to-r from-brdc-gold to-transparent rounded-full mt-6"></div>
        {subtitle && (
          <p className="mt-6 max-w-xl text-white/80 text-base sm:text-lg leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
