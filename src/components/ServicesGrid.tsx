import React from 'react'
import { siteConfig, siteConfigEn } from '../siteConfig'

export const ServicesGrid: React.FC<{ config?: typeof siteConfigEn }> = ({ config }) => {
  const cfg = config || siteConfig

  return (
    <section id="services" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
            {cfg.ui.servicesCategory}
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900">
            {cfg.ui.servicesTitle}
          </h2>
          <p className="mt-3 text-base text-slate-600">
            {cfg.ui.servicesSub}
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cfg.services.map((service, idx) => (
            <div
              key={service.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/70 p-6 transition hover:border-emerald-500 hover:bg-white shadow-sm hover:shadow-lg"
            >
              <div>
                {/* Header with index and tag */}
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-md bg-slate-200 px-2.5 py-1 text-xs font-mono font-bold text-slate-700">
                    0{idx + 1}
                  </span>
                  <span className="rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-800">
                    {service.tagline}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-4 text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {service.desc}
                </p>
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                <a
                  href={`sms:${cfg.phoneRaw}?&body=${encodeURIComponent(cfg.lang === 'ru' ? `Здравствуйте! Интересует расчет по услуге ${service.title}:` : `Hi Robert & Calvin, I'm interested in an estimate for ${service.title}:`)}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 hover:text-amber-700"
                >
                  <span>{cfg.ui.textForQuote}</span>
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>

                <a
                  href="#estimate-form"
                  className="text-xs text-slate-500 hover:text-slate-800 font-medium"
                >
                  {cfg.ui.formQuote}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
