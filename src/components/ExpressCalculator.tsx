'use client'

import React, { useState } from 'react'
import { siteConfig } from '../siteConfig'

export const ExpressCalculator: React.FC = () => {
  const calc = siteConfig.calculator
  const [selectedServiceId, setSelectedServiceId] = useState(calc.services[0]?.id || 'tree-removal')
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(1) // default medium tier

  const currentService =
    calc.services.find((s) => s.id === selectedServiceId) || calc.services[0]

  const currentSize =
    currentService?.sizes[selectedSizeIndex] || currentService?.sizes[0]

  const handleSelectService = (id: string) => {
    setSelectedServiceId(id)
    setSelectedSizeIndex(1) // reset to medium option
  }

  const smsBody = encodeURIComponent(
    siteConfig.lang === 'ru'
      ? `Здравствуйте, интересует ${currentService?.name}, параметр: ${currentSize?.label}. Отправляю 2 фото для точной оценки:`
      : `Hi Robert & Calvin, I'm interested in ${currentService?.name}, spec: ${currentSize?.label}. Here are photos for a guaranteed estimate:`
  )

  return (
    <div className="relative rounded-2xl border-2 border-emerald-600/30 bg-white p-6 sm:p-7 shadow-xl shadow-slate-200/70">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-600">
            <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
            {calc.badge}
          </span>
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
            {calc.title}
          </h3>
        </div>
        <span className="hidden sm:inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 border border-emerald-200">
          {siteConfig.lang === 'ru' ? 'Расчет онлайн' : 'Instant Guide'}
        </span>
      </div>

      {/* Service Type Selection */}
      <div className="mt-4">
        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
          {calc.serviceLabel}
        </label>
        <div className="grid grid-cols-3 gap-2">
          {calc.services.map((service) => {
            const isSelected = selectedServiceId === service.id
            return (
              <button
                key={service.id}
                type="button"
                onClick={() => handleSelectService(service.id)}
                className={`rounded-lg px-2 py-2.5 text-xs font-bold transition text-center leading-snug ${
                  isSelected
                    ? 'bg-emerald-600 text-white shadow-md ring-1 ring-emerald-500'
                    : 'bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200/80 hover:text-slate-900'
                }`}
              >
                {service.name}
              </button>
            )
          })}
        </div>
      </div>

      {/* Dynamic Size / Complexity Selection */}
      <div className="mt-4">
        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2 flex items-center justify-between">
          <span>{currentService?.sizeLabel}</span>
          <span className="text-[11px] text-emerald-700 normal-case font-mono font-bold">
            {currentSize?.price}
          </span>
        </label>
        <div className="grid grid-cols-2 gap-2">
          {currentService?.sizes.map((size, idx) => {
            const isSelected = selectedSizeIndex === idx
            return (
              <button
                key={size.id}
                type="button"
                onClick={() => setSelectedSizeIndex(idx)}
                className={`rounded-lg p-2.5 text-left transition border ${
                  isSelected
                    ? 'border-emerald-600 bg-emerald-50/90 text-slate-900 ring-1 ring-emerald-500 shadow-sm'
                    : 'border-slate-200 bg-slate-50/80 text-slate-700 hover:border-slate-300 hover:bg-slate-100'
                }`}
              >
                <div className="text-xs font-bold text-slate-900">{size.label}</div>
                <div className="text-[11px] text-emerald-700 font-mono font-bold mt-0.5">{size.price}</div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Dynamic Price & Timing Result Box */}
      <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50/90 p-4">
        <div className="flex items-baseline justify-between">
          <div>
            <span className="text-[11px] uppercase font-bold text-slate-500">
              {siteConfig.lang === 'ru' ? 'Ориентир стоимости:' : 'Estimated Range:'}
            </span>
            <div className="text-2xl sm:text-3xl font-black text-emerald-700 font-mono">
              {currentSize?.price}
            </div>
          </div>
          <div className="text-right">
            <span className="text-[11px] uppercase font-bold text-slate-500">
              {siteConfig.lang === 'ru' ? 'Время работы:' : 'Est. Duration:'}
            </span>
            <div className="text-sm font-semibold text-slate-800">
              ~{currentSize?.time}
            </div>
          </div>
        </div>

        {/* Dynamic Included Checklist */}
        <div className="mt-3 pt-3 border-t border-slate-200 space-y-1.5 text-[11px] text-slate-600">
          {currentService?.includes.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-emerald-600 font-bold">✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Direct Lock-In CTA Button */}
      <div className="mt-4">
        <a
          href={`sms:${siteConfig.phoneRaw}?&body=${smsBody}`}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500 px-4 py-3.5 text-sm font-extrabold text-slate-950 shadow-md shadow-amber-500/25 transition hover:bg-amber-600 active:scale-98"
        >
          <svg className="h-4 w-4 text-slate-950" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>{calc.ctaText}</span>
        </a>
      </div>

      {/* Trust Micro-Note */}
      <p className="mt-3 text-[11px] text-center text-slate-500 leading-relaxed">
        {calc.hint}
      </p>
    </div>
  )
}
