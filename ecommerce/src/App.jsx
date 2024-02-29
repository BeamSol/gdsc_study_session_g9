import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import 'tailwindcss/tailwind.css';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import  AOS  from 'aos';
import "aos/dist/aos.css";
import LatestArrivals from './components/LatestArrivals/LatestArrivals';
import Footer from './components/Footer/Footer';

const App = () => {
  React.useEffect(()=> {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className=" "> 
     <Navbar />
     <Hero />
     <LatestArrivals />
     <Products />
     <Footer />
    </div>
  )
}

export default App