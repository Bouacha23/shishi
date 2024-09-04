"use client"

import Header from "./ui/header"
import Hero from "./ui/hero";
import Explore from "./ui/explore"
import  Explortwo from "./ui/explores"
import Meet from "./ui/meet"
import Galler from "./ui/galler"
import Rolls from "./ui/rolls";
import Vidio from "./ui/vidido"
import Footer from "./ui/footer"
import About from "./ui/about"
import Pop from "./ui/pop"
export default function Home() {
  return (
    <main className="w-full ">
          <Pop />
          <Header />
          <Hero/>
          <Explore /> 
          <Explortwo />
          <Rolls />
          <Vidio /> 
          <Meet /> 
          <About />
          <Galler /> 
          <Footer /> 
    </main>
  );
}
