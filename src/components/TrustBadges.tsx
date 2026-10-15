import React from 'react'
import { siteConfig } from '../siteConfig'

const icons = [
  // Owner on site icon (hard hat / arborist user)
  (
    <svg key="1" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  ),
  // Heavy Crane & Bucket Lift (aerial clearance)
  (
    <svg key="2" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  ),
  // Zero-Trace Cleanup (check / rake)
  (
    <svg key="3" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  // 100% Licensed & Fully Insured (shield)
  (
    <svg key="4" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
]

export const TrustBadges: React.FC = () => {
  return (
    <section className="relative -mt-6 z-20 mx-auto max-w-7xl px-4 sm:px-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {siteConfig.trustBadges.map((badge, index) => (
          <div
            key={badge.title}
            className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-md shadow-slate-200/60 transition hover:shadow-lg hover:border-emerald-400"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-emerald-50 border border-emerald-200">
              {icons[index % icons.length]}
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 tracking-wide">
                {badge.title}
              </h3>
              <p className="mt-0.5 text-xs leading-relaxed text-slate-600">
                {badge.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
