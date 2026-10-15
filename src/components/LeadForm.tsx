'use client'

import React, { useState } from 'react'
import { siteConfig, siteConfigEn } from '../siteConfig'

export const LeadForm: React.FC<{ config?: typeof siteConfigEn }> = ({ config }) => {
  const cfg = config || siteConfig

  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: cfg.services[0]?.title || '',
    cityOrZip: '',
    notes: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="estimate-form" className="py-20 bg-gradient-to-b from-slate-50 to-emerald-50/30 scroll-mt-24 border-t border-slate-200">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 shadow-xl shadow-slate-200/60">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
              {cfg.ui.formCategory}
            </span>
            <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold text-slate-900">
              {cfg.ui.formTitle}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              {cfg.ui.formSub}
            </p>
          </div>

          {submitted ? (
            <div className="mt-8 rounded-2xl border border-emerald-300 bg-emerald-50/80 p-8 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white text-2xl font-bold shadow-md">
                ✓
              </div>
              <h3 className="mt-4 text-xl font-bold text-slate-900">
                {cfg.ui.formSuccessTitle}
              </h3>
              <p className="mt-2 text-sm text-slate-600 max-w-lg mx-auto">
                {cfg.ui.formSuccessSub}
              </p>
              <div className="mt-6">
                <a
                  href={`sms:${cfg.phoneRaw}?&body=${encodeURIComponent(cfg.lang === 'ru' ? `Здравствуйте! Отправил заявку на сайте по услуге ${formData.service}.` : `Hi Robert & Calvin, I just submitted an estimate request on your website for ${formData.service}.`)}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-5 py-3 text-sm font-bold text-slate-950 hover:bg-amber-600 shadow-md transition"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{cfg.ui.formTextPhotosNow}</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-700 tracking-wider">
                    {cfg.ui.formName} <span className="text-emerald-600 font-bold">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={cfg.lang === 'ru' ? 'Например: Александр' : 'e.g. John Miller'}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600 shadow-xs"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-700 tracking-wider">
                    {cfg.ui.formPhone} <span className="text-emerald-600 font-bold">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder={cfg.phone}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600 shadow-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-700 tracking-wider">
                    {cfg.ui.formService}
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600 shadow-xs"
                  >
                    {cfg.services.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* City or Zip */}
                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-700 tracking-wider">
                    {cfg.ui.formCityZip} <span className="text-emerald-600 font-bold">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={cfg.lang === 'ru' ? 'Например: Сарасота или Брейдентон' : 'e.g. Sarasota 34240'}
                    value={formData.cityOrZip}
                    onChange={(e) => setFormData({ ...formData, cityOrZip: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600 shadow-xs"
                  />
                </div>
              </div>

              {/* Notes & Description */}
              <div>
                <label className="block text-xs font-semibold uppercase text-slate-700 tracking-wider">
                  {cfg.ui.formNotes}
                </label>
                <textarea
                  rows={3}
                  placeholder={cfg.lang === 'ru' ? 'Например: Большой дуб над крышей и бассейном, нужно удалить 2 пня...' : 'e.g. Large oak over pool cage, 2 palms need trimming, tight 36" gate...'}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600 shadow-xs"
                />
              </div>

              {/* Submit CTA */}
              <div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-emerald-600 px-6 py-4 text-base font-bold text-white shadow-lg shadow-emerald-600/25 transition hover:bg-emerald-700 active:scale-98"
                >
                  {cfg.ui.formSubmit}
                </button>
              </div>

              {/* Secondary alternative text note */}
              <div className="pt-2 text-center text-xs text-slate-500">
                {cfg.ui.formUrgent}{' '}
                <a
                  href={`sms:${cfg.phoneRaw}?&body=${encodeURIComponent(cfg.lang === 'ru' ? 'Здравствуйте! Отправляю фото дерева/пня для расчета стоимости:' : 'Hi Robert & Calvin, here are photos of my tree/stump for an estimate:')}`}
                  className="font-bold text-amber-700 underline underline-offset-2 hover:text-amber-800"
                >
                  {cfg.ui.tapToText} {cfg.phone}
                </a>.
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
