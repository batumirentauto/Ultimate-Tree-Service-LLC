import React from 'react'
import type { Metadata } from 'next'
import { LandingView } from '../../../components/LandingView'
import { siteConfigRu } from '../../../siteConfig'

export const metadata: Metadata = {
  title: `${siteConfigRu.businessName} (Русская версия) | Спил и обрезка деревьев в Сарасоте`,
  description: `${siteConfigRu.tagline}. ${siteConfigRu.hero.subhead}`,
  keywords: [
    'спил деревьев сарасота',
    'обрезка деревьев флорида',
    'дробление пней сарасота',
    'аварийное удаление деревьев',
    'ultimate tree service llc',
  ],
}

export default function RussianHomePage() {
  return <LandingView config={siteConfigRu} />
}
