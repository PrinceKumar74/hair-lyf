import React from 'react'
import Shop from '../Shop/Shop'
import HeroSection from './Container1/HeroSection'
import OurHairCategories from './Container2/OurHairCategories'
import FreshArrivals from './Container3/FreshArrivals'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <OurHairCategories/>
      <FreshArrivals/>
      {/* <Shop/> */}
    </div>
  )
}

export default Home
