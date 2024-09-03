"use client"

import Header from "./ui/header"
import Hero from "./ui/hero";
import Explore from "./ui/explore"
import  Explortwo from "./ui/explores"
import Meet from "./ui/meet"
import Galler from "./ui/galler"
export default function Home() {
  return (
    <main className="w-full ">
          <Header />
          <Hero/>
          <Explore /> 
          <Explortwo />
          <Meet /> 
          <Galler /> 
    </main>
  );
}
