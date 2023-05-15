import React from 'react'
import Category from '../../Components/Categories/Category'
import Contacts from '../../Components/Contacts/Contacts'
import FeaturedProducts from '../../Components/FeaturedProducts/FeaturedProducts'
import Slider from '../../Components/Slider/Slider'
function Home() {
  return (
    <div>
      <Slider/>
      <FeaturedProducts type="featured"/>
      <Category/>
      <FeaturedProducts type="trending"/>
      <Contacts/>
    </div>
  )
}

export default Home
