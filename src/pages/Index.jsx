import React from 'react'
import Faq from '../components/Faq'
import Pricing from '../components/Pricing'
import Midheader from '../components/Midheader'
import Testimonials from '../components/Testimonials'


function HomePage() {
  return (
    <div> 
      <Midheader/>
      <Testimonials/>
      <Pricing/>
      <Faq/>
    </div>
  )
}

export default HomePage
