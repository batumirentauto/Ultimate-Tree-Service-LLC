import React from 'react'
import { siteConfig, siteConfigEn } from '../siteConfig'

export const Hero: React.FC<{ config?: typeof siteConfigEn }> = ({ config }) => {
  const cfg = config || siteConfig

  return (
    <section className="relative bg-white py-12 sm:py-16 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Value Proposition & Clear Guarantees */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Technical / Geographic Badge (No "best" / no boastful claims) */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-3.5 py-1.5 text-xs font-semibold text-emerald-800 shadow-xs self-start">
              <svg className="h-4 w-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>{cfg.hero.badge}</span>
            </div>

            {/* Headline */}
            <h1 className="mt-4 text-2xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-4xl xl:text-5xl leading-[1.18]">
              {cfg.hero.headline}
            </h1>

            {/* Subhead */}
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
              {cfg.hero.subhead}
            </p>

            {/* 3 Distinct Operational Guarantees (No repetition with TrustBadges) */}
            <ul className="mt-6 space-y-3 text-sm text-slate-700 bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs">
              {cfg.ui.heroCheckmarks.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 border border-emerald-300 text-xs font-bold">✓</span>
                  <span><strong className="text-slate-900">{item.strong}</strong> — <span className="text-slate-600">{item.text}</span></span>
                </li>
              ))}
            </ul>

            {/* Primary Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href={`tel:${cfg.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-emerald-600 px-6 py-4 text-base font-bold text-white shadow-md shadow-emerald-600/25 transition hover:bg-emerald-700 active:scale-98"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{cfg.hero.ctaCall}</span>
              </a>

              <a
                href="#text-estimate"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-amber-600/30 bg-amber-500 px-6 py-4 text-base font-bold text-slate-950 shadow-md shadow-amber-500/20 transition hover:bg-amber-600 active:scale-98"
              >
                <svg className="h-5 w-5 text-slate-950" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{cfg.hero.ctaText}</span>
              </a>
            </div>

            <p className="mt-3 text-xs text-slate-500 flex items-center gap-1.5">
              <span className="text-emerald-700 font-bold">{cfg.ui.fastResponse}</span>
              <span>{cfg.ui.fastResponseDesc}</span>
            </p>
          </div>

          {/* Right Column: Authentic Equipment & Jobsite Showcase Card */}
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50">
              {/* Photo of UTS Service Rig */}
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-100">
                <img
                  src="/images/uts-truck-and-trailer.jpg"
                  alt="Ultimate Tree Service LLC commercial truck and trailer rig"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300">
                    {cfg.lang === 'ru' ? 'Служебный автопоезд UTS' : 'UTS Service Fleet'}
                  </span>
                  <div className="text-sm font-bold text-white mt-0.5">
                    {cfg.lang === 'ru' ? 'Вышка Altec 18м и самосвальный трейлер' : 'Altec 60ft Bucket Truck & Haul Trailer'}
                  </div>
                </div>
              </div>

              {/* 2 Case Highlights: Pool Cage & Tile Roof */}
              <div className="p-4 bg-slate-50/70 border-t border-slate-200 grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white p-2.5 shadow-2xs">
                  <img
                    src="/images/uts-crane-pool-protection.jpg"
                    alt="Crane over pool enclosure"
                    className="h-12 w-12 rounded-lg object-cover shrink-0 border border-slate-100"
                  />
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-slate-900 truncate">
                      {cfg.lang === 'ru' ? 'Над бассейнами' : 'Pool Screen Safe'}
                    </div>
                    <div className="text-[11px] text-slate-500 truncate">
                      {cfg.lang === 'ru' ? 'Спил краном на весу' : 'Air-lifted crane cuts'}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white p-2.5 shadow-2xs">
                  <img
                    src="/images/uts-roof-clearance-bucket.jpg"
                    alt="Roof clearance trimming"
                    className="h-12 w-12 rounded-lg object-cover shrink-0 border border-slate-100"
                  />
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-slate-900 truncate">
                      {cfg.lang === 'ru' ? 'Над черепицей' : 'Tile Roof Safe'}
                    </div>
                    <div className="text-[11px] text-slate-500 truncate">
                      {cfg.lang === 'ru' ? 'Точечная обрезка' : 'Precision pruning'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Verified Operational Parameters */}
              <div className="p-4 sm:p-5 border-t border-slate-200 space-y-2 text-xs text-slate-600 bg-white">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-700 font-bold text-xs border border-slate-200">📍</span>
                  <span>
                    <strong className="text-slate-900">{cfg.lang === 'ru' ? 'Базирование:' : 'HQ Base:'}</strong> {cfg.fullAddress}
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 font-bold text-xs border border-emerald-200">🕒</span>
                  <span>
                    <strong className="text-slate-900">{cfg.lang === 'ru' ? 'График:' : 'Dispatch:'}</strong> {cfg.workingHours}
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-800 font-bold text-xs border border-amber-200">🛡️</span>
                  <span>
                    <strong className="text-slate-900">{cfg.lang === 'ru' ? 'Страховка:' : 'Coverage:'}</strong> {cfg.licenseBadge}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
