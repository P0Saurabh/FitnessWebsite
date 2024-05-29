import React from 'react'
import Navbar from './Navbar'
import MenuAppBar from './MenuAppBar';

const Home = () => {
  return (
    <div className='home-container'>
        <MenuAppBar />
        <Navbar />
    </div>
  )
}

export default Home