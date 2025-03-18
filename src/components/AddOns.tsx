'use client'

import { useState } from 'react';
import ServiceCard from "./ServiceCard"
import SectionHeader from './ui/SectionHeader';

export default function AddOns() {
  const [translateX, setTranslateX] = useState(0);
  const [cardIndex, setCardIndex] = useState(0);
  const maxIndex = 3; // Maximum index limit

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
            preTitle="Make it better"
            title="Optional extras"
            context="We can turbo-charge your website to support any of these optional add-ons."
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
          text="Analytics" 
          blurb="Ideal for keeping track of how your customers are actually using your website. We can configure and install GDPR-compliant Plausible analytics to keep you informed." 
          href="/services/add-ons/analytics" 
          icon="/icons/graph.svg" 
        />
        <ServiceCard 
          text="Email marketing" 
          blurb="Mailing lists are a great to keep your customers informed about your latest offers. We can help you capture leads to follow up on or create mailing lists for special offers." 
          href="/services/add-ons/email-marketing" 
          icon="/icons/envelope.svg" 
        />
        <ServiceCard 
          text="CRM integration" 
          blurb="We can help get your website and CRM communicating effectively. Make sure that you're always on top of your customer data." 
          href="/services/add-ons/crm-integration" 
          icon="/icons/users.svg" 
        />
        <ServiceCard 
          text="Search engine optimisation" 
          blurb="We can ensure that all part of your website are optimised for the right keywords for your audience." 
          href="/services/add-ons/search-engine-optimisation" 
          icon="/icons/search.svg" 
        />
      </div>
    </div>
  )
}