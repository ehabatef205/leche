import React from 'react'
import Homeslider from '../components/home/Homeslider'
import FEATUREDBRANDS from '../components/home/FEATUREDBRANDS'
import BESTSELLERS from '../components/home/BESTSELLERS'
import FEATUREDCATEGORIES from '../components/home/FEATUREDCATEGORIES'
import './style/pages.css'
function Home() {
  return (
    <div >

      <Homeslider></Homeslider>
      <FEATUREDBRANDS></FEATUREDBRANDS>
      <BESTSELLERS />
      <FEATUREDCATEGORIES></FEATUREDCATEGORIES>
    </div >

  )
}

export default Home
