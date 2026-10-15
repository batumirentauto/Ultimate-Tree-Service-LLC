import React from 'react'
import { siteConfig, siteConfigEn } from '../siteConfig'

export const ReviewsSection: React.FC<{ config?: typeof siteConfigEn }> = ({ config }) => {
  const cfg = config || siteConfig

  return (
    <section id="reviews" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-slate-200 pb-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex text-amber-500 text-lg">★★★★★</span>
              <span className="text-sm font-bold text-slate-900">
                {cfg.rating} {cfg.ui.googleReviews}
              </span>
            </div>
            <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold text-slate-900">
              {cfg.ui.reviewsCategory}
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              {cfg.ui.reviewsSub} {cfg.city}, FL.
            </p>
          </div>

          <a
            href={cfg.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shrink-0 transition hover:border-emerald-500 hover:shadow-md group shadow-sm"
            title="View on Google Maps"
          >
            <div className="text-2xl font-black text-emerald-700 font-mono">
              {cfg.reviewCount}+
            </div>
            <div className="text-xs text-slate-500">
              <span className="block font-bold text-slate-900 group-hover:text-emerald-700 transition">{cfg.ui.reviewsBadge}</span>
              <span className="flex items-center gap-1 text-emerald-700 font-semibold">{cfg.ui.reviewsGoogle} ↗</span>
            </div>
          </a>
        </div>

        {/* Reviews Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cfg.reviews.map((review) => (
            <div
              key={review.author}
              className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-slate-300 hover:shadow-md"
            >
              <div>
                {/* Tag Badge */}
                {review.tag && (
                  <div className="mb-3">
                    <span className="inline-flex items-center text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                      {review.tag}
                    </span>
                  </div>
                )}

                {/* Stars and Source */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-500 text-sm">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <span className="text-[11px] font-medium text-slate-500">
                    {review.source}
                  </span>
                </div>

                {/* Review Text */}
                <p className="mt-4 text-sm leading-relaxed text-slate-700 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              {/* Author */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 font-bold text-xs text-slate-700 border border-slate-200">
                  {review.author.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">
                    {review.author}
                  </h4>
                  <span className="text-[11px] text-slate-500">
                    {cfg.ui.propertyOwner}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
