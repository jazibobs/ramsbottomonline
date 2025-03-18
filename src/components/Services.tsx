'use client'

import { useState } from 'react';
import ServiceCard from "./ServiceCard"
import SectionHeader from './ui/SectionHeader';

export default function Services() {
  const [translateX, setTranslateX] = useState(0);
  const [cardIndex, setCardIndex] = useState(0);
  const maxIndex = 4; // Maximum index limit

  const slideLeft = () => {
    if (cardIndex > 0) {
      setCardIndex(prev => prev - 1);
      setTranslateX(prev => prev + (384 + 32)); // Adjust the value as needed
    }
  }

  const slideRight = () => {
    if (cardIndex < maxIndex) {
      setCardIndex(prev => prev + 1);
      setTranslateX(prev => prev - (384 + 32)); // Adjust the value as needed
    }
  }

  return (
    <div>
      <div className="max-w-screen-lg m-auto px-8 pt-16 pb-8 flex flex-col lg:flex-row gap-8 items-center">
        <div className="w-full lg:w-1/2">
          <SectionHeader
            preTitle="What we do"
            title="Our services"
            context="From simple landing pages to complex web applications, we can help your business thrive online."
          />
        </div>
        <div className="hidden w-full lg:w-1/2 lg:flex gap-4 justify-end">
          <button
            className={`bg-teal-700 text-white w-12 h-12 rounded-full font-sans flex items-center justify-center text-2xl hover:scale-110 transition-all hover:bg-slate-900 ${cardIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={slideLeft}
            disabled={cardIndex === 0}
          >
            <span className="relative -top-0.5">&#8592;</span>
          </button>
          <button
            className={`bg-teal-700 text-white w-12 h-12 rounded-full font-sans flex items-center justify-center text-2xl hover:scale-110 transition-all hover:bg-slate-900 ${cardIndex === maxIndex ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={slideRight}
            disabled={cardIndex === maxIndex}
          >
            <span className="relative -top-0.5">&#8594;</span>
          </button>
        </div>
      </div>
      <div 
        className="max-w-screen-lg m-auto px-8 pb-16 flex flex-col lg:flex-row gap-8 items-center transition-transform duration-200"
        style={{ transform: `translateX(${translateX}px)` }}
      >
        <ServiceCard 
          text="Single page websites" 
          blurb="Ideal for smaller businesses who simply need to get their address and contact details out there. The everything everywhere all at once web page." 
          href="/services/landing-pages" 
          icon="/icons/html5.svg" 
        />
        <ServiceCard 
          text="Static generated sites" 
          blurb="A statically generated site converts plain text files and simple content into a beautiful website. Ideal if you want to prioritise the speed of your website over all else." 
          href="/services/static-generated-websites" 
          icon="/icons/gatsbyjs.svg" 
        />
        <ServiceCard 
          text="WordPress" 
          blurb="WordPress famously powers over 40% of all websites online. If your looking for the power to personally manage the look and feel of your site WordPress might be for you." 
          href="/services/wordpress" 
          icon="/icons/wordpress.svg" 
        />
        <ServiceCard 
          text="E-commerce" 
          blurb="Start selling online. We can help you to set up all aspects of your e-commerce store from product upload to setting up payment gateways." 
          href="/services/ecommerce" 
          icon="/icons/shopify.svg" 
        />
        <ServiceCard 
          text="Web applications" 
          blurb="Are you looking for something that an off the shelf service can't provide. Get in touch with us to learn about designing a bespoke application for your business." 
          href="/services/web-apps" 
          icon="/icons/nextjs.svg"
        />
      </div>
    </div>
  )
}