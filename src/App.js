import React from 'react'
import Navbar from '../src/components/navbar/Navbar'
import Header from '../src/containters/header/Header'
import Brand from '../src/containters/brand/Brand'
import Cars from '../src/containters/cars/Slider'
import Line from '../src/containters/cars/Line'
import './App.css'
import Slider from '../src/containters/cars/Slider'
import Slider2 from '../src/containters/cars/Slider2'
import Slider3 from './containters/cars/Slider3'
import Faq from '../src/containters/Faq/Faq'
import Footer from '../src/containters/footer/Footer'


const App = () => {




  return (
    <div className = "App">
      <div className = "gradient__bg">
        <Navbar />
        <Header />
        <Brand />
        <Line headerText = "Véhicules à votre disposition"/>
        <Slider model="mercedes"/>
        
        <Line  />
        <Slider2  />
        <Line />
        <Slider3 />
        
        
        <Faq />
        <Footer />
      </div>
    </div>
  )
}
 
export default App