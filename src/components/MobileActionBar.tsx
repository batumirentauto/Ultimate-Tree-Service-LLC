import React from 'react'
import { siteConfig } from '../siteConfig'

export const MobileActionBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white/95 p-3 backdrop-blur-lg md:hidden shadow-2xl">
      <div className="grid grid-cols-2 gap-2.5">
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-3 py-3 text-sm font-bold text-white shadow-md shadow-emerald-600/25 transition active:bg-emerald-700"
        >
          <svg
            className="h-4 w-4"
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
          <span>{siteConfig.ui.callBrad}</span>
        </a>

        <a
          href={`sms:${siteConfig.phoneRaw}?&body=${encodeURIComponent(siteConfig.lang === 'ru' ? 'Здравствуйте! Отправляю фото дерева/пня для расчета стоимости:' : 'Hi Robert & Calvin, here are photos of my tree/stump for an estimate:')}`}
          className="flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-3 py-3 text-sm font-bold text-slate-950 shadow-md shadow-amber-500/25 transition active:bg-amber-600 border border-amber-600/30"
        >
          <svg
            className="h-4 w-4 text-slate-950"
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
          <span>{siteConfig.ui.textPhotos}</span>
        </a>
      </div>
    </div>
  )
}
