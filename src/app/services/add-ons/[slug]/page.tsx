import type { Metadata } from "next";
import { getServiceData, getServiceSlugs } from '@/lib/markdown'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCta from "@/components/cta/ServiceCta";
import { notFound } from 'next/navigation';
import Services from '@/components/Services';

// Define the static paths for the dynamic route
export async function generateStaticParams() {
  const paths = getServiceSlugs()
  return paths
}

// Function to generate metadata dynamically
export async function generateMetadata({
  params
}: {
  params:  Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = await getServiceData(slug)
  return {
    title: service.title + " - Ramsbottom Online",
    description: service.description,
  }
}

// The page component
export default async function ServicePage({
  params
}: {
  params:  Promise<{ slug: string }>
}) {
  const { slug } = await params
  
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
        <Services />
        <Footer />
      </>
    )
  } catch (error: unknown) {
    console.error("Error loading service:", error);
    notFound();
  }
}