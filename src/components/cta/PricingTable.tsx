import Link from "next/link";
import ServiceCta from "./ServiceCta";

export default function PricingTable() {
  return (
    <>
    <div className="flex flex-col lg:flex-row gap-8 max-w-screen-xl mx-auto my-16 p-8 lg:p-2">
      <div className="w-full lg:w-1/4 bg-white shadow-xl rounded-lg overflow-hidden relative">
        <h2 className="bg-teal-500 text-white text-center text-3xl p-4">Landing Page</h2>
        <strong className="flex gap-1 px-4 pt-8 pb-1 justify-center relative">
          <span className="font-sans font-normal text-sm absolute left-12 top-7 opacity-60">From</span> 
          <span className="font-sans font-semibold text-4xl">£250</span>
        </strong>
        <div className="prose prose-slate font-sans px-4 pt-4 pb-24 text-sm">
          <p>Single page websites perfect for getting your business online.</p>
          <p>Capture leads and have details automatically piped into your mailing list or customer relationship manager.</p>
          <p>Price includes the registration of a custom domain name.</p>
          <p>Price includes 1 year of web and email hosting fees.</p>
        </div>
        <div className="p-4 text-center absolute bottom-0 left-0 w-full">
          <a className="block text-white bg-teal-700 rounded-full py-4 px-8 font-normal font-sans hover:scale-110 hover:bg-teal-900 transition-all" href="/free-consultation">Get more details</a>
        </div>
      </div>
      <div className="w-full lg:w-1/4 bg-white shadow-xl rounded-lg overflow-hidden relative">
        <h2 className="bg-teal-600 text-white text-center text-3xl p-4">Static Website</h2>
        <strong className="flex gap-1 px-4 pt-8 pb-1 justify-center relative">
          <span className="font-sans font-normal text-sm absolute left-12 top-7 opacity-60">From</span> 
          <span className="font-sans font-semibold text-4xl">£500</span>
        </strong>
        <div className="prose prose-slate font-sans px-4 pt-4 pb-24 text-sm">
          <p>Traditional &apos;brochure&apos; style websites to showcase your businesses services, testimonials and portfolio to potential customers.</p>
          <p>Built using either <Link href="https://gohugo.io/">Hugo</Link> or <Link href="https://jekyllrb.com/">Jekyll</Link>.</p>
          <p>Automatically converts content written in plain text into beautiful websites.</p>
          <p>Price includes the registration of a custom domain name.</p>
          <p>Price includes 1 year of web and email hosting fees.</p>
        </div>
        <div className="p-4 text-center absolute bottom-0 left-0 w-full">
          <a className="block text-white bg-teal-700 rounded-full py-4 px-8 font-normal font-sans hover:scale-110 hover:bg-teal-900 transition-all" href="/free-consultation">Get more details</a>
        </div>
      </div>
      <div className="w-full lg:w-1/4 bg-white shadow-xl rounded-lg overflow-hidden relative">
        <h2 className="bg-teal-700 text-white text-center text-3xl p-4">Dynamic Website</h2>
        <strong className="flex gap-1 px-4 pt-8 pb-1 justify-center relative">
          <span className="font-sans font-normal text-sm absolute left-12 top-7 opacity-60">From</span> 
          <span className="font-sans font-semibold text-4xl">£750</span>
        </strong>
        <div className="prose prose-slate font-sans px-4 pt-4 pb-24 text-sm">
          <p>Receive a <Link href="https://wordpress.org/">WordPress</Link> powered website where you can manage your website copy with a powerful content management system (CMS).</p>
          <p>Your website will be powered by a custom built theme unique to your business, no off the shelf re-skins here.</p>
          <p>Price includes the registration of a custom domain name.</p>
          <p>Price includes 1 year of web and email hosting fees.</p>
        </div>
        <div className="p-4 text-center absolute bottom-0 left-0 w-full">
          <a className="block text-white bg-teal-700 rounded-full py-4 px-8 font-normal font-sans hover:scale-110 hover:bg-teal-900 transition-all" href="/free-consultation">Get more details</a>
        </div>
      </div>
      <div className="w-full lg:w-1/4 bg-white shadow-xl rounded-lg overflow-hidden relative">
        <h2 className="bg-teal-800 text-white text-center text-3xl p-4">Online Store</h2>
        <strong className="flex gap-1 px-4 pt-8 pb-1 justify-center relative">
          <span className="font-sans font-normal text-sm absolute left-12 top-7 opacity-60">From</span> 
          <span className="font-sans font-semibold text-4xl">£1250</span>
        </strong>
        <div className="prose prose-slate font-sans px-4 pt-4 pb-24 text-sm">
          <p>Ready to start selling online? We can help you set up product listings, payments and 3rd party integrations to platforms like Etsy and Amazon.</p>
          <p>We are registered <Link href="https://www.shopify.com/uk">Shopify Partners</Link> so you can rest assured that your store is in safe hands.</p>
          <p>Price includes the registration of a custom domain name.</p>
          <p>Price includes 1 year of web and email hosting fees.</p>
        </div>
        <div className="p-4 text-center absolute bottom-0 left-0 w-full">
          <a className="block text-white bg-teal-700 rounded-full py-4 px-8 font-normal font-sans hover:scale-110 hover:bg-teal-900 transition-all" href="/free-consultation">Get more details</a>
        </div>
      </div>
    </div>
    <div className="prose prose-slate text-center mx-auto my-16">
      <h2>Need something a bit special?</h2>
      <p className="font-sans mb-8">If you are looking for support with something a bit more specialist, get in touch to discuss custom application, plugin or web service development.</p>
    </div>
    <ServiceCta />
  </>
  );
}