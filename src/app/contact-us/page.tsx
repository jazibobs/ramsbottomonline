import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Image from "next/image"
import Link from "next/link"

export default function ContactPage() {
  return (
    <>
      <Header
        heading="Contact Us"
        subHeading="We can come and visit you on your premises or arrange virtual meeting by clicking the link below."
      />
      <div className="px-8 py-16 max-w-screen-lg m-auto flex flex-col lg:flex-row gap-16 items-center">
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl lg:text-3xl mb-8">Other ways to get in touch:</h2>
          <ul className="flex flex-col gap-4">
            <li className="font-sans flex gap-6 items-center font-semibold hover:scale-105 transition-transform">
              <Image src="/icons/outlook.svg" alt="" width={48} height={48} />
              <Link href="mailto:jared@ramsbottom.online">jared@ramsbottom.online</Link>
            </li>
            <li className="font-sans flex gap-6 items-center font-semibold hover:scale-105 transition-transform">
              <Image src="/icons/whatsapp.svg" alt="" width={48} height={48} />
              <Link href="tel:+447530235816">07530 235 816</Link>
            </li>
            <li className="font-sans flex gap-6 items-center font-semibold hover:scale-105 transition-transform">
              <Image src="/icons/discord.svg" alt="" width={48} height={48} />
              <Link href="https://www.discordapp.com/users/332818403779674114">@jazibobs</Link>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/2">
          <iframe className="rounded-lg" width="464" height="350" src="https://www.openstreetmap.org/export/embed.html?bbox=-2.341074943542481%2C53.6346387759476%2C-2.3095750808715825%2C53.650196067286245&amp;layer=mapnik&amp;marker=53.642418138925244%2C-2.3253250122070312"></iframe>
        </div>
      </div>
      <Footer/>
    </>
  )
}