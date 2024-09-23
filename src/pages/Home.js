import React from 'react'


import Ourservices from '../components/Ourservices'
import Wcu from '../components/Wcu'

import Carousel from '../components/Carousel'
import Carouselhero from '../components/Carouselhero'
import Servicelist from '../components/Servicelist'
import Pde from '../components/Pde'
import Expertise from '../components/Expertise'



const Home = () => {

  return (
    <div>
      <Carouselhero/>
      <Ourservices/>
      <Wcu/>
      <Servicelist/>
      <Pde/>
      <Carousel/>
      <Expertise/>
    </div>
  )
}

export default Home
