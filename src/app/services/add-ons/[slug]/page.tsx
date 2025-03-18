import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCta from "@/components/cta/ServiceCta";
import AddOns from '@/components/AddOns';
import { Metadata } from 'next';

interface Params {
  slug: string;
}

export async function generateStaticParams() {
  const serviceDirectory = path.join(process.cwd(), 'content', 'services');
  const filenames = fs.readdirSync(serviceDirectory);

  return filenames.map((filename) => {
    const slug = filename.replace(/\.md$/, '');
    return {
      slug,
    };
  });
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'content', 'services', `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(fileContents);

  return {
    title: data.title,
    description: data.description,
  };
}

export default async function ServiceTemplate({ params }: { params: Params }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'content', 'services', `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return (
    <>
      <Header 
        heading={data.title}
        subHeading={data.description}
      />
      <div className="max-w-screen-lg m-auto px-8 py-16">
        <div className="font-sans prose" dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </div>

      <ServiceCta/>
      <AddOns />
      <Footer />
    </>
  );
}