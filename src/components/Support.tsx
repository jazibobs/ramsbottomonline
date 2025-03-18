import Image from "next/image"
import SectionHeader from "./ui/SectionHeader"

export default function Support() {
  return (
    <div className="text-center">
      <div className="m-auto max-w-screen-md px-8 py-16 flex flex-col justify-center items-center gap-2">
        <SectionHeader
          preTitle="How we help"
          title="Support your business"
          context="Our goal is to ensure that you have a professional, functional and fast website that allows customers to easily find you." 
        />
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 items-center">
          <div className="w-48 font-sans flex flex-col items-center justify-center gap-4">
            <Image src="/icons/rectangle-group.svg" alt="" width={72} height={72} />
            <h3 className="text-lg font-semibold">Learn</h3>
            We take the time to understand your business
          </div>
          <div className="hidden lg:block border-t-2 border-slate-300 w-10"></div>
          <div className="w-48 font-sans flex flex-col items-center justify-center gap-4">
            <Image src="/icons/presentation.svg" alt="" width={72} height={72} />
            <h3 className="text-lg font-semibold">Measure</h3>
            We analyse your existing online presence
          </div>
          <div className="hidden lg:block border-t-2 border-slate-300 w-10"></div>
          <div className="w-48 font-sans flex flex-col items-center justify-center gap-4">
            <Image src="/icons/sparkles.svg" alt="" width={72} height={72} />
            <h3 className="text-lg font-semibold">Improve</h3>
            We help your business to be found online
          </div>
        </div>
      </div>
    </div>
  )
}