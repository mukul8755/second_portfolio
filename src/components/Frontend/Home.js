import React from 'react';
import Section from './Section';
import Testimonials from './Testimonials';
import { useLoadingContext } from "react-router-loading";
import Project from './Project';
import About from './About';
import Contact from './Contact';
export default function Home() {
     const loadingContext = useLoadingContext();
     setInterval(function () { loadingContext.done() }, 1000);

     return (
          <>
               <Section />
               <About />
               <Project />
               <Testimonials />
               <Contact />
          </>
     )
}
