import SingleBenefit from "./SingleBenefit"
import ButtonLink from "./ui/ButtonLink"
import SectionHeader from "./ui/SectionHeader"

export default function Benefits() {
  return(
    <div className="vase-hero relative">
      <div className="bg-gradient-to-r from-slate-100/90 to-white/90 lg:from-slate-100/20 lg:to-slate-100 absolute top-0 left-0 w-full lg:w-1/2 h-full z-10"></div>
      <div className="m-auto max-w-screen-xl flex flex-col lg:flex-row gap-8 px-8 py-32">
        <div className="w-full lg:w-5/12"></div>
        <div className="w-full lg:w-7/12 relative z-20">
          <SectionHeader
            preTitle="Why work with us"
            title="Benefits"
            context="Ramsbottom online is run by local web developer Jared Rigby. If you're looking for personalised service combined with local knowledge, please do get in touch."
          />
          <div className="flex flex-wrap">
            <SingleBenefit text="Friendly service based in Ramsbottom" />
            <SingleBenefit text="Available for face-to-face meetings and support" />
            <SingleBenefit text="Complete project management from start to finish" />
            <SingleBenefit text="Managed website and email hosting services" />
          </div>
          <ButtonLink href="/free-consultation" text="Get in touch" />
        </div>
        
      </div>
    </div>
  )
}