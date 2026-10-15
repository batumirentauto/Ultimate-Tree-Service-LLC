import React from 'react'
import { siteConfig } from '../siteConfig'

export const EquipmentComparison: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
            {siteConfig.ui.comparisonCategory}
          </span>
          <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold text-slate-900">
            {siteConfig.realisticComparison.title}
          </h2>
          <p className="mt-3 text-base text-slate-600">
            {siteConfig.ui.comparisonSub}
          </p>
        </div>

        {/* Side-by-Side Comparison Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* DIY / Unlicensed Hacks */}
          <div className="rounded-2xl border border-red-200 bg-white p-6 sm:p-8 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div>
                  <span className="text-xs font-semibold uppercase text-red-600">
                    {siteConfig.ui.diySubtitle}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">
                    {siteConfig.ui.diyTitle}
                  </h3>
                </div>
                <span className="rounded-full bg-red-50 border border-red-200 px-3 py-1 text-xs font-semibold text-red-700">
                  {siteConfig.ui.diyBadge}
                </span>
              </div>

              <ul className="mt-6 space-y-4">
                {siteConfig.realisticComparison.diyRental.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-slate-600">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-700 border border-red-200 text-xs font-bold">
                      ✕
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 rounded-xl bg-red-50/70 p-4 border border-red-200 text-xs text-red-800">
              {siteConfig.ui.diyNote}
            </div>
          </div>

          {/* Ultimate Tree Service LLC */}
          <div className="rounded-2xl border-2 border-emerald-500 bg-white p-6 sm:p-8 flex flex-col justify-between shadow-xl relative">
            {/* Top highlight ribbon */}
            <div className="absolute -top-3.5 right-6 rounded-full bg-emerald-600 px-3.5 py-1 text-xs font-extrabold text-white uppercase tracking-wider shadow-md">
              {siteConfig.ui.commercialRibbon}
            </div>

            <div>
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div>
                  <span className="text-xs font-semibold uppercase text-emerald-700">
                    {siteConfig.ui.commercialSubtitle}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">
                    {siteConfig.ui.commercialTitle}
                  </h3>
                </div>
                <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-semibold text-emerald-800">
                  {siteConfig.ui.commercialBadge}
                </span>
              </div>

              <ul className="mt-6 space-y-4">
                {siteConfig.realisticComparison.commercialWay.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-slate-800">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 border border-emerald-300 text-xs font-bold">
                      ✓
                    </span>
                    <span className="font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 rounded-xl bg-emerald-50 p-4 border border-emerald-200 text-xs text-emerald-900">
              <div className="flex items-center justify-between">
                <span>{siteConfig.ui.commercialNote}</span>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="ml-3 shrink-0 rounded-lg bg-emerald-600 px-3.5 py-1.5 text-xs font-bold text-white hover:bg-emerald-700 shadow-sm"
                >
                  {siteConfig.ui.callBrad}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
