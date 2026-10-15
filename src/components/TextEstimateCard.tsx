import React from 'react'
import { siteConfig } from '../siteConfig'

export const TextEstimateCard: React.FC = () => {
  return (
    <section id="text-estimate" className="relative scroll-mt-24 py-16 bg-slate-50 border-y border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-2xl border border-amber-300/80 bg-white p-6 sm:p-10 shadow-xl shadow-slate-200/60">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-800">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {siteConfig.ui.fastestEstimate}
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-slate-900">
              {siteConfig.howEstimatesWork.title}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              {siteConfig.ui.estimateSub}
            </p>
          </div>

          {/* 3 Step Visual Flow */}
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Step 1 */}
            <div className="relative rounded-xl border border-slate-200 bg-slate-50/80 p-6 flex flex-col justify-between hover:bg-white hover:border-slate-300 hover:shadow-md transition">
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-800 border border-emerald-300 font-mono font-bold text-lg">
                    01
                  </span>
                  <span className="text-xs uppercase font-semibold text-slate-500">
                    {siteConfig.lang === 'ru' ? 'Фото' : 'Photos'}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900">
                  {siteConfig.ui.step1Title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {siteConfig.howEstimatesWork.step1}
                </p>
              </div>
              <div className="mt-4 rounded-lg bg-white p-2.5 text-xs text-slate-600 border border-slate-200 shadow-xs">
                {siteConfig.ui.step1Tip}
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative rounded-xl border border-slate-200 bg-slate-50/80 p-6 flex flex-col justify-between hover:bg-white hover:border-slate-300 hover:shadow-md transition">
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-800 border border-amber-300 font-mono font-bold text-lg">
                    02
                  </span>
                  <span className="text-xs uppercase font-semibold text-slate-500">
                    {siteConfig.lang === 'ru' ? 'Параметры' : 'Context'}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900">
                  {siteConfig.ui.step2Title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {siteConfig.howEstimatesWork.step2}
                </p>
              </div>
              <div className="mt-4 rounded-lg bg-white p-2.5 text-xs text-slate-600 border border-slate-200 shadow-xs">
                {siteConfig.ui.step2Tip}
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative rounded-xl border border-slate-200 bg-slate-50/80 p-6 flex flex-col justify-between hover:bg-white hover:border-slate-300 hover:shadow-md transition">
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-800 border border-emerald-300 font-mono font-bold text-lg">
                    03
                  </span>
                  <span className="text-xs uppercase font-semibold text-slate-500">
                    {siteConfig.lang === 'ru' ? 'Расчет' : 'Quote'}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900">
                  {siteConfig.ui.step3Title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {siteConfig.howEstimatesWork.step3}
                </p>
              </div>
              <div className="mt-4 rounded-lg bg-white p-2.5 text-xs text-slate-600 border border-slate-200 shadow-xs">
                {siteConfig.ui.step3Tip}
              </div>
            </div>
          </div>

          {/* Action Callout */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
            <a
              href={`sms:${siteConfig.phoneRaw}?&body=${encodeURIComponent(siteConfig.lang === 'ru' ? 'Здравствуйте! Отправляю фото дерева/пня для расчета стоимости:' : 'Hi Robert & Calvin, here are photos of my tree/stump for an estimate:')}`}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-amber-500 px-8 py-4 text-base font-extrabold text-slate-950 shadow-md shadow-amber-500/25 transition hover:bg-amber-600 active:scale-98"
            >
              <svg className="h-5 w-5 text-slate-950" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span>{siteConfig.ui.tapToText} {siteConfig.phone}</span>
            </a>

            <span className="text-xs text-slate-500">
              {siteConfig.ui.preferCalling} <a href={`tel:${siteConfig.phoneRaw}`} className="text-emerald-700 font-bold underline underline-offset-2">{siteConfig.ui.callDirectly} {siteConfig.phone}</a>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
