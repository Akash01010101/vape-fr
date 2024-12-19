import React from 'react'
import Navbar from '../components/Navbar'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import ShoppingFunnel from '../components/ShoppingFunnel'
import itemsArray from '../components/Items'
export default function HomePage() {

  return (
    <div>
        <Navbar/>
        <Cards/>
        <ShoppingFunnel/>
        <Footer/>
    </div>
  )
}
