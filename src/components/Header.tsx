import React from 'react'
import { siteConfig, siteConfigEn } from '../siteConfig'

export const Header: React.FC<{ config?: typeof siteConfigEn }> = ({ config }) => {
  const cfg = config || siteConfig

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md">
      {/* Top micro-bar for trust & license */}
      <div className="border-b border-slate-200/80 bg-slate-50/90 px-4 py-1.5 text-xs text-slate-600">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 font-semibold text-emerald-700">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              {cfg.licenseBadge}
            </span>
            <span className="hidden text-slate-300 sm:inline">•</span>
            <span className="hidden text-slate-600 sm:inline">
              {cfg.workingHours}
            </span>
            <span className="hidden text-slate-300 md:inline">•</span>
            <span className="hidden text-slate-500 md:inline">
              {cfg.experienceYears} {cfg.ui.inBusiness}
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href={cfg.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:opacity-85 transition"
              title="Google Maps Profile"
            >
              <div className="flex text-amber-500 text-sm" aria-label="5 stars">
                {'★★★★★'}
              </div>
              <span className="font-bold text-slate-800">
                {cfg.rating}
              </span>
              <span className="text-slate-500">
                ({cfg.reviewCount} {cfg.ui.googleReviews})
              </span>
            </a>

            {/* Language switch button */}
            <a
              href={cfg.lang === 'ru' ? '/' : '/ru'}
              className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-lg border border-slate-300 bg-white text-slate-700 hover:text-emerald-700 hover:border-emerald-500 hover:bg-slate-50 transition shadow-xs"
              title={cfg.lang === 'ru' ? 'Switch to English version (US)' : 'Переключить на русскоязычную версию'}
            >
              <span className="text-xs">{cfg.lang === 'ru' ? '🇺🇸' : '🇷🇺'}</span>
              <span>{cfg.lang === 'ru' ? 'EN' : 'RU версия'}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation header */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <div className="min-w-0 flex-1">
          <a href={cfg.lang === 'ru' ? '/ru' : '/'} className="group block focus:outline-none">
            <span className="block text-base font-extrabold tracking-tight text-slate-900 group-hover:text-emerald-700 sm:text-xl leading-tight">
              <span className="sm:hidden">{cfg.shortName} <span className="font-normal text-xs text-slate-500 block">{cfg.lang === 'ru' ? 'Спил деревьев и пней' : 'Tree Removal & Trimming'}</span></span>
              <span className="hidden sm:inline">{cfg.businessName}</span>
            </span>
            <span className="hidden text-xs text-slate-500 md:block mt-0.5 font-medium">
              {cfg.tagline}
            </span>
          </a>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Quick text quote button (desktop/tablet) */}
          <a
            href={`sms:${cfg.phoneRaw}?&body=${encodeURIComponent(cfg.lang === 'ru' ? 'Здравствуйте! Отправляю фото дерева/пня для расчета стоимости:' : 'Hi Robert & Calvin, here are photos of my tree/stump for an estimate:')}`}
            className="hidden items-center gap-2 rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-sm font-semibold text-slate-700 transition hover:border-emerald-600 hover:text-emerald-700 hover:bg-slate-50 shadow-sm lg:inline-flex"
          >
            <svg
              className="h-4 w-4 text-emerald-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            {cfg.ui.textPhotos}
          </a>

          {/* Primary phone call button */}
          <a
            href={`tel:${cfg.phoneRaw}`}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-emerald-600/25 transition hover:bg-emerald-700 active:scale-95 shrink-0 whitespace-nowrap"
          >
            <svg
              className="h-4 w-4 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span className="sm:hidden">{cfg.ui.callNow || cfg.ui.callBrad}</span>
            <span className="hidden sm:inline font-mono">{cfg.phone}</span>
          </a>
        </div>
      </div>
    </header>
  )
}
