import React from 'react'
import Navbar from '../src/components/navbar/Navbar'
import Header from '../src/containters/header/Header'
import Brand from '../src/containters/brand/Brand'
import Cars from '../src/containters/cars/Slider'
import Line from '../src/containters/cars/Line'
import About from '../src/containters/cars/About'
import './App.css'
import Slider from '../src/containters/cars/Slider'
import Faq from '../src/containters/Faq/Faq'
import Footer from '../src/containters/footer/Footer'


const App = () => {
  return (
    <div className = "App">
      <div className = "gradient__bg">
        <Navbar />
        <Header />
        <Brand />
        <Line />
        <Slider />
        <About />
        <Faq />
        <Footer />
      </div>
    </div>
  )
}
 
export default App