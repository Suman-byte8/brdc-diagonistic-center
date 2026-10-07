import { Star, Quote, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { reviews, googleReviewsUrl } from "@/app/data/reviewsData";

function ReviewCard({ review, hidden = false }) {
  return (
    <div aria-hidden={hidden || undefined} className="shrink-0 pr-4">
    <figure
      className="w-[240px] sm:w-[260px] h-[230px] flex flex-col bg-gradient-to-br from-white to-brdc-pale rounded-xl border border-brdc-border p-5 shadow-[0_8px_30px_-18px_rgba(15,77,58,0.25)] hover:-translate-y-1 hover:shadow-[0_16px_36px_-18px_rgba(15,77,58,0.35)] transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-3">
        <Quote className="w-6 h-6 text-brdc-gold" strokeWidth={1.5} />
        <span className="flex gap-0.5" role="img" aria-label={`${review.rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, s) => (
            <Star
              key={s}
              className={`w-4 h-4 ${s < review.rating ? "fill-brdc-gold text-brdc-gold" : "text-brdc-border"}`}
              strokeWidth={1.5}
            />
          ))}
        </span>
      </div>
      <blockquote className="text-[13px] leading-6 text-brdc-text-secondary line-clamp-5 whitespace-pre-line">
        {review.text}
      </blockquote>
      <figcaption className="mt-auto pt-3 border-t border-brdc-border font-serif text-sm font-semibold text-brdc-forest">
        {review.name}
      </figcaption>
    </figure>
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-brdc-pale to-brdc-offwhite overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <Reveal className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brdc-gold-dark mb-3">Reviews</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight text-brdc-forest">
            What Our Patients Say
          </h2>
        </Reveal>
      </div>

      {reviews.length > 0 && (
        <div className="reviews-marquee relative">
          {/* Soft fade at both edges */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 z-10 bg-gradient-to-r from-brdc-pale to-transparent"></div>
          <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 z-10 bg-gradient-to-l from-brdc-pale to-transparent"></div>

          {/* The list is rendered twice so the -50% translate loops seamlessly */}
          <div className="reviews-track flex w-max py-3">
            {reviews.map((review, i) => (
              <ReviewCard key={`a-${i}`} review={review} />
            ))}
            {reviews.map((review, i) => (
              <ReviewCard key={`b-${i}`} review={review} hidden />
            ))}
          </div>
        </div>
      )}

      <div className="text-center mt-8 px-6">
        <a
          href={googleReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 border border-brdc-primary text-brdc-primary rounded-lg px-6 py-3 text-sm font-bold uppercase tracking-wide hover:bg-brdc-primary hover:text-white transition-colors"
        >
          Read our reviews on Google
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={2} />
        </a>
      </div>
    </section>
  );
}
