import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default function ContactPage() {
  return (
    <>
      <Header
        heading="Get in touch"
        subHeading="We can come and visit you on your premises or you can arrange a virtual meeting by clicking the link below."
      />
      <div className="px-8 py-16 max-w-screen-lg m-auto flex flex-col lg:flex-row gap-16">
        <div className="w-full lg:w-1/2">
          <form className="bg-white p-4 rounded-lg flex flex-col gap-4 items-start font-sans" name="contact" method="POST" data-netlify="true">
            <label className="sr-only" htmlFor="name">Enter your name</label>
            <input className="w-full p-2 border-slate-200 border" name="name" type="text" placeholder="Your name" />
            <label className="sr-only" htmlFor="email">Enter your email address</label>
            <input className="w-full p-2 border-slate-200 border" name="name" type="text" placeholder="Your email" />
            <label className="sr-only" htmlFor="message">Enter your message</label>
            <textarea className="w-full p-2 border-slate-200 border h-36" name="message" placeholder="Your message" />
            <button className="bg-slate-700 inline-block py-4 px-8 text-white rounded-full hover:bg-slate-900 hover:scale-110 transition-all" type="submit">Submit message</button>
          </form>
        </div>
        <div className="w-full lg:w-1/2">
          <iframe className="rounded-lg" width="464" height="350" src="https://www.openstreetmap.org/export/embed.html?bbox=-2.341074943542481%2C53.6346387759476%2C-2.3095750808715825%2C53.650196067286245&amp;layer=mapnik&amp;marker=53.642418138925244%2C-2.3253250122070312"></iframe>
        </div>
      </div>
      <Footer/>
    </>
  )
}