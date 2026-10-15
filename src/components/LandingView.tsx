import React from 'react'
import { Header } from './Header'
import { MobileActionBar } from './MobileActionBar'
import { Hero } from './Hero'
import { TrustBadges } from './TrustBadges'
import { TextEstimateCard } from './TextEstimateCard'
import { ServicesGrid } from './ServicesGrid'
import { EquipmentComparison } from './EquipmentComparison'
import { EquipmentGallery } from './EquipmentGallery'
import { ReviewsSection } from './ReviewsSection'
import { ServiceAreas } from './ServiceAreas'
import { LeadForm } from './LeadForm'
import { Footer } from './Footer'
import { siteConfigEn } from '../siteConfig'

export const LandingView: React.FC<{ config: typeof siteConfigEn }> = ({ config }) => {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-emerald-600 selection:text-white">
      {/* Sticky top header with verification micro-bar & language switcher */}
      <Header config={config} />

      {/* Main landing content */}
      <main>
        {/* Hero Section */}
        <Hero config={config} />

        {/* 4 Trust Pillars / Badges */}
        <TrustBadges config={config} />

        {/* 6 Core Contractor Services */}
        <ServicesGrid config={config} />

        {/* 3-Step Visual Photo Estimate Process */}
        <TextEstimateCard config={config} />

        {/* Technical Specification Comparison (Unlicensed Hacks vs UTS) */}
        <EquipmentComparison config={config} />

        {/* Commercial Equipment & Real Jobs Photo Gallery */}
        <EquipmentGallery config={config} />

        {/* Verified Google Reviews */}
        <ReviewsSection config={config} />

        {/* Service Area Locations Cloud */}
        <ServiceAreas config={config} />

        {/* High-CRO Lead Capture Form */}
        <LeadForm config={config} />
      </main>

      {/* Footer with NAP, licensing, and hours */}
      <Footer config={config} />

      {/* Fixed bottom action bar for mobile devices */}
      <MobileActionBar config={config} />
    </div>
  )
}
