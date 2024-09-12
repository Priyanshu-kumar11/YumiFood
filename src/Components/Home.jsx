import React from 'react'
import Hero from './Hero'
import Delivery from './Delivery'
import TopPicks from './TopPicks'

const Home = ({handleAdd,handleMinus}) => {
  return (
    <div>
      <Hero/>
      <Delivery/>
      <TopPicks handleAdd={handleAdd} handleMinus={handleMinus}/>
    </div>
  )
}

export default Home