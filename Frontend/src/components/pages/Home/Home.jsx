import React from 'react'
import HeroSection from './Container1/HeroSection'
import OurHairCategories from './Container2/OurHairCategories'
import FreshArrivals from './Container3/FreshArrivals'
import TryOur3DVirtualHair from './Container4/TryOur3DVirtualHair'
import TestimonialSlider from './Container6/Testimonials'
import StylingCenters from './Container7/StylingCenters'
import Blogs from './Container10/Blogs'
import OurCollections from './Container5/OurCollections'
import Stats from './Container8/Stats'
const Home = () => {
  return (
    <div>
      <HeroSection/>
      <OurHairCategories/>
      <FreshArrivals/>
      <TryOur3DVirtualHair/>
      <OurCollections/>
      <TestimonialSlider/>
      <StylingCenters/>
      <Stats/>
      <Blogs/>
    </div>
  )
}

export default Home
