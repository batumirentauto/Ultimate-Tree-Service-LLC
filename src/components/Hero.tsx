import React from 'react'
import { siteConfig, siteConfigEn } from '../siteConfig'

export const Hero: React.FC<{ config?: typeof siteConfigEn }> = ({ config }) => {
  const cfg = config || siteConfig

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/40 via-white to-slate-50/80 pb-16 pt-10 sm:pb-24 sm:pt-16 border-b border-slate-200/80">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-40">
        <div className="h-[450px] w-[650px] rounded-full bg-emerald-100/60 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          {/* Left Column: Value Proposition & High CRO actions */}
          <div className="lg:col-span-6">
            {/* County / Experience Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-3.5 py-1.5 text-xs font-semibold text-emerald-800 shadow-sm">
              <svg className="h-4 w-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>{cfg.hero.badge}</span>
            </div>

            {/* Headline */}
            <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-4xl xl:text-5xl leading-[1.18]">
              {cfg.hero.headline}
            </h1>

            {/* Subhead - strictly factual contractor language */}
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
              {cfg.hero.subhead}
            </p>

            {/* Customer Pain-Killer bullet points */}
            <ul className="mt-6 space-y-3 text-sm text-slate-700 bg-white/80 p-4 rounded-xl border border-slate-200/80 shadow-sm">
              {cfg.ui.heroCheckmarks.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 border border-emerald-300 text-xs font-bold">✓</span>
                  <span><strong className="text-slate-900">{item.strong}</strong> — <span className="text-slate-600">{item.text}</span></span>
                </li>
              ))}
            </ul>

            {/* Primary Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href={`tel:${cfg.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-emerald-600 px-6 py-4 text-base font-bold text-white shadow-lg shadow-emerald-600/25 transition hover:bg-emerald-700 active:scale-98"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{cfg.hero.ctaCall}</span>
              </a>

              <a
                href="#text-estimate"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-amber-500/80 bg-amber-500 px-6 py-4 text-base font-bold text-slate-950 shadow-lg shadow-amber-500/20 transition hover:bg-amber-600 active:scale-98"
              >
                <svg className="h-5 w-5 text-slate-950" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{cfg.hero.ctaText}</span>
              </a>
            </div>

            <p className="mt-3 text-xs text-slate-500 flex items-center gap-2">
              <span className="text-emerald-700 font-bold">{cfg.ui.fastResponse}</span>
              <span>{cfg.ui.fastResponseDesc}</span>
            </p>
          </div>

          {/* Right Column: Visual Trust & Real Equipment Showcase */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl border-2 border-emerald-600/30 bg-white p-5 sm:p-6 shadow-xl shadow-slate-200/70">
              {/* Featured Real Photo of Fleet */}
              <div className="relative overflow-hidden rounded-xl bg-slate-100 aspect-[16/10]">
                <img
                  src="/images/uts-truck-and-trailer.jpg"
                  alt="Ultimate Tree Service LLC commercial truck and trailer rig"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/20" />
                
                {/* Floating Badges on image */}
                <div className="absolute top-3 left-3">
                  <div className="inline-flex items-center gap-1.5 rounded-lg bg-white/95 px-3 py-1.5 shadow-md backdrop-blur-md">
                    <span className="text-amber-500 text-xs font-black">★★★★★</span>
                    <span className="text-xs font-black text-slate-900">{cfg.rating}</span>
                    <span className="text-[11px] text-slate-500 font-medium">({cfg.reviewCount} reviews)</span>
                  </div>
                </div>

                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center gap-1 rounded-lg bg-emerald-600/90 text-white text-[11px] font-bold px-2.5 py-1.5 shadow-md backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                    {cfg.licenseBadge}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                    {cfg.lang === 'ru' ? 'Собственная техника' : 'Commercial Rig In Action'}
                  </div>
                  <div className="text-sm font-extrabold text-white">
                    {cfg.lang === 'ru' ? 'Вышка Altec, гидрогрейфер и дробилка пней' : 'Altec Bucket Truck, Grapple Hauler & Stump Grinder'}
                  </div>
                </div>
              </div>

              {/* 2-Column Real Case Highlights */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-slate-50 p-2.5">
                  <img
                    src="/images/uts-crane-pool-protection.jpg"
                    alt="Crane over pool enclosure"
                    className="h-12 w-12 rounded-lg object-cover shrink-0 border border-slate-200"
                  />
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-slate-900 truncate">
                      {cfg.lang === 'ru' ? 'Над бассейнами' : 'Pool Cage Safe'}
                    </div>
                    <div className="text-[11px] text-slate-500 truncate">
                      {cfg.lang === 'ru' ? 'Спил краном на весу' : 'Air-lifted crane cuts'}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-slate-50 p-2.5">
                  <img
                    src="/images/uts-roof-clearance-bucket.jpg"
                    alt="Roof clearance trimming"
                    className="h-12 w-12 rounded-lg object-cover shrink-0 border border-slate-200"
                  />
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-slate-900 truncate">
                      {cfg.lang === 'ru' ? 'Над крышами' : 'Roof Clearance'}
                    </div>
                    <div className="text-[11px] text-slate-500 truncate">
                      {cfg.lang === 'ru' ? 'Защита черепицы' : 'Tile roof protection'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Instant Owner Photo Quote Banner */}
              <div className="mt-4 rounded-xl border border-amber-300 bg-amber-50/80 p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800">
                      {cfg.lang === 'ru' ? '⚡ Быстрая оценка за 15 минут' : '⚡ 15-Minute Photo Estimate'}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900">
                      {cfg.lang === 'ru'
                        ? 'Отправьте фото дерева Роберту и Кэлвину'
                        : 'Text photos directly to Robert & Calvin'}
                    </h3>
                  </div>
                  <a
                    href={`sms:${cfg.phoneRaw}?&body=${encodeURIComponent(cfg.lang === 'ru' ? 'Здравствуйте! Отправляю фото дерева для расчета:' : 'Hi Robert & Calvin, here are photos of my tree/stump for an estimate:')}`}
                    className="shrink-0 inline-flex items-center justify-center gap-1.5 rounded-xl bg-amber-500 px-4 py-2.5 text-xs font-extrabold text-slate-950 shadow-md shadow-amber-500/25 transition hover:bg-amber-600 active:scale-95"
                  >
                    <span>{cfg.ui.textPhotos}</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
