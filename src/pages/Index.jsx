import React from 'react'
import Faq from '../components/Faq'
import Pricing from '../components/Pricing'
import Midheader from '../components/Midheader'
import Testimonials from '../components/Testimonials'
import Benefits from '../components/Benefits'


function HomePage() {
  return (
    <div> 
      <Midheader/>
      <Testimonials/>
      <Benefits/>
      <Pricing/>
      <Faq/>
    </div>
  )
}

export default HomePage
