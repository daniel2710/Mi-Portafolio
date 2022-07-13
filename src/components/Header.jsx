import React from 'react';
import Educacion from '../pages/Educacion';
import Inicio from '../pages/Inicio';
import Proyectos from '../pages/Proyectos';
import Skills from '../pages/Skills';
import Carousel from './Carousel';
import Footer from './Footer';
import Navbar from './Navbar';
import NavbarMobile from './NavbarMobile';
import Wave from './Wave';

const Header = () => {
  return (
    <>
      <Navbar/>
      <NavbarMobile/>
      <Inicio/>
      <Wave/>
      <Carousel/>
      <Skills/>
      <Proyectos/>
      <Educacion/>
      <Footer/>
    </>
  )
}

export default Header