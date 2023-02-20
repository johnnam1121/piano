import React from 'react'
import AboutMe from '../AboutMe'
import LandingPage from '../LandingPage'
import Topbar from '../Topbar'
import FAQ from '../FAQ'
import Footer from '../Footer'
import Youtube from '../videoPlayer/Youtube'

function Content() {
  return (
    <div>
      <Topbar />
      <Youtube />
      <Footer />
    </div>
  )
}

export default Content