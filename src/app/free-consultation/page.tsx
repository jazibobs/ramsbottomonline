'use client'

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function Consultation() {
	useEffect(()=>{
	  (async function () {
		const cal = await getCalApi({"namespace":"30min"});
		cal("ui", {"theme":"light","hideEventTypeDetails":false,"layout":"month_view"});
	  })();
	}, [])
	return (
    <>
      <Header 
        heading="Book a free consultation"
        subHeading="For a no obligation 30-minute chat about your website. Book an appointment using the form below."
        hideButton={true}
      />
      <div className="p-8 pt-16">
        <Cal namespace="30min"
          calLink="gameful/30min"
          style={{width:"100%",height:"100%",overflow:"scroll"}}
          config={{"layout":"month_view"}}
        />
      </div>
      <Footer />
    </>
  
  ) 
	  
	
};