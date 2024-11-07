import React from 'react'
import Hero from './Hero'
import Delivery from './Delivery'
import TopPicks from './TopPicks'


// redux se phle home me props the const Home = ({handleAdd,handleMinus}) 
const Home = () => {
  return (
    <div>
      <Hero/>
      <Delivery/>
      {/* <TopPicks handleAdd={handleAdd} handleMinus={handleMinus}/> */}
      <TopPicks/>
    </div>
  )
}

export default Home