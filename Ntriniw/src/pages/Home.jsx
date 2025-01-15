import React from 'react'
import Banner from '../components/Banner.jsx'
import Stories from '../components/Stories.jsx'
import Offres from '../components/offres.jsx'
//in this page we have the banner, the stories and the offres
const Home = () => {
  return (<>
    <Stories/>
    <Offres/>
    <Banner/>
    </>
  )
}

export default Home