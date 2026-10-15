import React from 'react'
import { siteConfig } from '../../siteConfig'
import type { Metadata } from 'next'
import './styles.css'

export const metadata: Metadata = {
  title: `${siteConfig.businessName} | Sarasota Tree Removal & Trimming`,
  description: `${siteConfig.tagline}. ${siteConfig.hero.subhead}`,
  keywords: [
    'tree removal sarasota',
    'tree trimming sarasota',
    'stump grinding sarasota fl',
    'emergency tree service sarasota',
    'crane tree removal',
    'licensed arborist sarasota',
    'ultimate tree service llc',
    'palm tree trimming',
    'hurricane tree damage clean up',
  ],
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang={siteConfig.lang} className="scroll-smooth">
      <body className="min-h-screen bg-white text-slate-900 font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
