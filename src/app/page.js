'use client'

import AboutUs from './components/AboutUs'
import Hero from './components/Hero'
import Menu from './components/Menu'
import SpecialFood from './components/SpecialFood'
import UsefulTips from './components/UsefulTips'
import Contact from './components/Contact'
import Footer from './components/Footer'

export const Home = () => {
  return (
    <>
      <div
        id={'home'}
      >
        <Hero/>
      </div>
      <div
        id={'about'}
      >
        <AboutUs/>
      </div>
      <div
        id={'menu'}
      >
        <Menu/>
      </div>
      <div
        id={'tips'}
      >   <Contact/>
        <UsefulTips/>
      </div>
      <div
        id={'special'}
      >
        <SpecialFood/>
      </div>
      <div
        id={'contact'}
      >
        <Contact/>
      </div>

      <Footer/>
    </>
  )
}
export default Home
