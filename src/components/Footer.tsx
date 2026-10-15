import React from 'react'
import { siteConfig, siteConfigEn } from '../siteConfig'

export const Footer: React.FC<{ config?: typeof siteConfigEn }> = ({ config }) => {
  const cfg = config || siteConfig

  return (
    <footer className="border-t border-slate-200 bg-slate-100 pb-24 pt-16 text-slate-600 md:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand & NAP info */}
          <div className="md:col-span-5">
            <h3 className="text-lg font-extrabold text-slate-900">
              {cfg.businessName}
            </h3>
            <p className="mt-2 text-xs text-slate-500 leading-relaxed max-w-sm">
              {cfg.tagline}.
            </p>

            <div className="mt-4 space-y-2 text-xs text-slate-700">
              <p>
                <strong className="text-slate-900">{cfg.lang === 'ru' ? 'Компания: ' : 'Business: '}</strong>
                <span className="text-slate-800 font-semibold">{cfg.legalName}</span>
              </p>
              <p>
                <strong className="text-slate-900">{cfg.lang === 'ru' ? 'Телефон: ' : 'Phone: '}</strong>
                <a href={`tel:${cfg.phoneRaw}`} className="text-emerald-700 font-bold hover:underline">
                  {cfg.phone}
                </a>
              </p>
              <p>
                <strong className="text-slate-900">{cfg.lang === 'ru' ? 'Адрес базы: ' : 'HQ Base: '}</strong>
                <a
                  href={cfg.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-700 hover:text-emerald-700 underline underline-offset-2 transition"
                >
                  {cfg.fullAddress}
                </a>
              </p>
              <p>
                <strong className="text-slate-900">{cfg.lang === 'ru' ? 'Зона покрытия: ' : 'Coverage: '}</strong>
                <span>{cfg.city}, {cfg.state} &amp; Surrounding Suncoast</span>
              </p>
              <p>
                <strong className="text-slate-900">{cfg.lang === 'ru' ? 'График работы: ' : 'Working Hours: '}</strong>
                <span className="text-emerald-700 font-semibold">{cfg.workingHours}</span>
              </p>
            </div>
          </div>

          {/* Core Services */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              {cfg.ui.footerCoreServices}
            </h4>
            <ul className="mt-3 space-y-2 text-xs">
              {cfg.services.map((service) => (
                <li key={service.id}>
                  <a href="#services" className="hover:text-emerald-700 text-slate-600 transition font-medium">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Licensing & Trust Statement */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              {cfg.ui.footerLicensing}
            </h4>
            <div className="mt-3 rounded-xl border border-slate-200 bg-white p-4 text-xs space-y-2 shadow-xs">
              <div className="flex items-center gap-2 text-emerald-700 font-semibold">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span>{cfg.licenseBadge}</span>
              </div>
              <p className="text-slate-500 text-[11px] leading-relaxed">
                {cfg.ui.footerLiability}
              </p>
              <div className="pt-2 border-t border-slate-100 text-[11px]">
                <a
                  href={cfg.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-slate-600 hover:text-amber-600 transition"
                >
                  <span>{cfg.rating} ★ • {cfg.reviewCount} {cfg.ui.googleReviews}</span>
                  <span className="text-[10px] text-emerald-700 font-bold underline">Google Maps →</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & note */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200 pt-8 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {cfg.businessName}. {cfg.ui.footerRights}
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Payload CMS &amp; Next.js</span>
            <span>•</span>
            <a
              href={cfg.lang === 'ru' ? '/' : '/ru'}
              className="text-emerald-700 font-semibold hover:underline"
            >
              {cfg.lang === 'ru' ? 'Switch to English (US)' : 'Русскоязычная версия (/ru)'}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
