import React from 'react'
import AboutPageSkillbridge from '../components/AboutSkillbridge'
import { achievementsData ,goalsData  } from '../data/sectionsData'
import InfoSection from '../components/InfoSection'
import CTASection from '../components/CTASection'

function AboutPage() {
  return (
    <div>
      <AboutPageSkillbridge />
      <InfoSection {...achievementsData} />
      <InfoSection {...goalsData} />
      <CTASection />
    </div>
  )
}

export default AboutPage
