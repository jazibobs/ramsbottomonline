"use client"

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function ConsultationForm() {
	useEffect(()=>{
	  (async function () {
		const cal = await getCalApi({"namespace":"30min"});
		cal("ui", {"theme":"light","hideEventTypeDetails":false,"layout":"month_view"});
	  })();
	}, [])
	return (
    <>
      <div className="p-8 pt-16">
        <Cal namespace="30min"
          calLink="gameful/30min"
          style={{width:"100%",height:"100%",overflow:"scroll"}}
          config={{"layout":"month_view"}}
        />
      </div>
    </>
  ) 
	  
	
};