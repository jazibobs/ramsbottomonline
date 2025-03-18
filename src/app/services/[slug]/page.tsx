import { getServiceData, getServiceSlugs } from '@/lib/markdown'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCta from "@/components/cta/ServiceCta";
import { notFound } from 'next/navigation';
import AddOns from '@/components/AddOns';

// Define the static paths for the dynamic route
export async function generateStaticParams() {
  const paths = getServiceSlugs()
  return paths
}

// The page component
export default async function ServicePage({
  params
}: {
  params: { slug: string }
}) {
  const { slug } = params
  
  try {
    // Get the service data
    const service = await getServiceData(slug)
    
    return (
      <>
        <Header 
          heading={service.title}
          subHeading={service.description}
        />
        <div className="max-w-screen-lg m-auto px-8 py-16">
          <div className="font-sans prose" dangerouslySetInnerHTML={{ __html: service.contentHtml }} />
        </div>
        <ServiceCta/>
        <AddOns />
        <Footer />
      </>
    )
  } catch (error: unknown) {
    console.error("Error loading service:", error);
    notFound();
  }
}