import React from 'react';
import Header from '@/components/header';
import HeroSection from '@/components/heroSection';
import HowItWork from "@/app/how-it-work/page"
import Menu from "@/app/menu/page"
import About from "@/app/about/page"
import SubscribeContainer from "@/app/contact/page";

 function Home() {
 return (
   <div className='flex flex-col'>
   <Header />
   <HeroSection/>
   <HowItWork/>
   <Menu />
   <About />
   <SubscribeContainer/>
   
   </div>
 );
}

export default Home;