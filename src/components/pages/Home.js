import React from 'react'
import AboutMe from '../AboutMe'
import LandingPage from '../LandingPage'
import Topbar from '../Topbar'
import FAQ from '../FAQ'
import Footer from '../Footer'

function Home() {
  return (
    <div>
      <Topbar />
      <LandingPage />
      <AboutMe />
      <FAQ />
      <Footer />
    </div>
  )
}

export default Home