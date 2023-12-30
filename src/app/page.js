'use client'

import AboutUs from './components/AboutUs'
import Hero from './components/Hero'
import Menu from './components/Menu'
import SpecialFood from './components/SpecialFood'
import UsefulTips from './components/UsefulTips'

export const Home = () => {
  return (
    <>
      <Hero/>
      <AboutUs/>
      <Menu/>
      <UsefulTips/>
      <SpecialFood/>
    </>
  )
}
export default Home
