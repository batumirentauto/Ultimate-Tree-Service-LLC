import React from 'react'
import { LandingView } from '../../components/LandingView'
import { siteConfigEn } from '../../siteConfig'

export default function HomePage() {
  return <LandingView config={siteConfigEn} />
}
