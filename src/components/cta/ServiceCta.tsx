import ButtonLink from "../ui/ButtonLink";

export default function ServiceCta() {
  return(
    <aside className="mx-auto mt-8 md:mb-16 max-w-screen-lg bg-gradient-to-r from-gray-100/95  via-slate-200/95 to-slate-200/50 p-8 md:rounded-lg flex flex-col items-center lg:flex-row lg:justify-between gap-8">
      <div className="w-full lg:w-3/4">
        <h2 className="text-xl md:text-2xl">Ready to get started?</h2>
        <p className="font-sans mt-2">Arrange a no obligation 30-minute meeting to discuss your needs.</p>
      </div>
      <div className="w-full lg:w-1/4 lg:text-right">
        <ButtonLink text="Get in touch" href="/free-consultation" />
      </div>
    </aside>
  )
}