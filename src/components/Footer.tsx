import Link from "next/link";
import SiteTitle from "./SiteTitle";
import ButtonLink from "./ui/ButtonLink";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-100/95  via-slate-200/95 to-slate-200/50 pt-8">
      <div className="m-auto max-w-screen-xl p-8 flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-5/12">
          <SiteTitle />
          <p className="text-slate-500 font-sans mt-1 mb-6">Web development services for Ramsbottom.</p>
          <Link className="block text-xl mb-8 text-slate-700" href="mailto:jared@ramsbottom.online">jared@ramsbottom.online</Link>
          <ButtonLink href="/free-consultation" text="Book a free consultation" />
        </div>
        <div className="w-full lg:w-2/12">
          <h2 className="text-xl font-sans mb-4 font-semibold">Services</h2>
          <ul className="font-sans text-slate-600">
            <li><Link scroll={false} href="/services/landing-pages">Landing pages</Link></li>
            <li><Link scroll={false} href="/services/static-site-generators">Static site generators</Link></li>
            <li><Link scroll={false} href="/services/wordpress">WordPress websites</Link></li>
            <li><Link scroll={false} href="/services/ecommerce">Online stores</Link></li>
            <li><Link scroll={false} href="/services/web-apps">Web applications</Link></li>
          </ul>
        </div>
        <div className="w-full lg:w-2/12">
          <h2 className="text-xl font-sans mb-4 font-semibold">Add-ons</h2>
          <ul className="font-sans text-slate-600">
            <li><Link scroll={false} href="/services/analytics">Analytics</Link></li>
            <li><Link scroll={false} href="/services/email-marketing">Email marketing</Link></li>
            <li><Link scroll={false} href="/services/crm-integration">CRM integration</Link></li>
            <li><Link scroll={false} href="/services/crm-integration">Search engine optimisation</Link></li>
          </ul>
        </div>
        <div className="w-full lg:w-2/12">
          <h2 className="text-xl font-sans mb-4 font-semibold">Connect</h2>
          <ul className="font-sans text-slate-600">
            <li><Link scroll={false} href="/free-consultation">Free consultation</Link></li>
            <li><Link scroll={false} href="/contact-us">Contact us</Link></li>
          </ul>
        </div>
      </div>
      <div className="m-auto max-w-screen-xl p-8 flex flex-col lg:flex-row gap-8 items-end">
        <div className="w-full lg:w-1/2">
          <p className="text-slate-500 font-sans mt-8">Copyright &copy; 2025 <Link href="https://www.gameful.dev">Gameful Software Ltd.</Link> t/a Ramsbottom.Online</p>
          <p className="text-slate-500 font-sans mt-4">
            Registered in England & Wales - Company Number 15106597
          </p>
          <p className="text-slate-500 font-sans mt-8 opacity-50 hover:opacity-100 text-sm">
            <Link href="https://icons8.com">Website icons by icons8</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}