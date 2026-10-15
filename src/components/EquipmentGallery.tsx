import React from 'react'
import { siteConfig, siteConfigEn } from '../siteConfig'

export const EquipmentGallery: React.FC<{ config?: typeof siteConfigEn }> = ({ config }) => {
  const cfg = config || siteConfig

  return (
    <section id="equipment" className="py-20 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-3.5 py-1.5 text-xs font-semibold text-emerald-800 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{cfg.gallery.badge}</span>
          </div>
          <h2 className="mt-4 text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            {cfg.gallery.title}
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            {cfg.gallery.subhead}
          </p>
        </div>

        {/* 6 Photo Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cfg.gallery.items.map((item, idx) => (
            <div
              key={idx}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:border-emerald-500/60 hover:shadow-xl shadow-md"
            >
              {/* Photo Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Floating Badge */}
                <div className="absolute top-3 right-3">
                  <span className="rounded-md bg-white/95 backdrop-blur-md px-2.5 py-1 text-[11px] font-bold text-emerald-800 border border-slate-200/90 shadow">
                    {item.badge}
                  </span>
                </div>
              </div>

              {/* Text Description */}
              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                  <span>{cfg.lang === 'ru' ? '📍 Сарасота и округ Манати, FL' : '📍 Sarasota & Manatee County, FL'}</span>
                  <span className="font-semibold text-emerald-700">{cfg.licenseBadge}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50/90 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold">
              ✓
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                {cfg.lang === 'ru'
                  ? 'Все работы выполняют лично Роберт и Кэлвин на собственной спецтехнике'
                  : 'All jobs are operated directly by Robert & Calvin with commercial equipment'}
              </h4>
              <p className="text-xs text-slate-600">
                {cfg.lang === 'ru'
                  ? 'Без субподрядчиков, без случайных людей с улицы и с гарантией идеальной чистоты на участке.'
                  : 'No subcontractors, no day-labor surprises, and guaranteed zero-trace site cleanup.'}
              </p>
            </div>
          </div>

          <a
            href={`tel:${cfg.phoneRaw}`}
            className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-md shadow-emerald-600/25 transition hover:bg-emerald-700 active:scale-95"
          >
            <span>{cfg.ui.callBrad}</span>
            <span className="font-mono text-emerald-100">({cfg.phone})</span>
          </a>
        </div>
      </div>
    </section>
  )
}
