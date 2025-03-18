import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCta from "@/components/cta/ServiceCta";
import AddOns from '@/components/AddOns';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';

interface Params {
  slug: string;
}

export default async function ServiceTemplate({ params }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { slug } = params as Params;
  const filePath = path.join(process.cwd(), 'content', 'services', `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString()

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
  )
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { slug } = context.params as Params;

  return {
    props: {
      params: { slug },
    },
  };
}

export async function getStaticPaths() {
  const serviceDirectory = path.join(process.cwd(), 'content', 'services');
  const filenames = fs.readdirSync(serviceDirectory);

  const paths = filenames.map((filename) => {
    const slug = filename.replace(/\.md$/, '');

    return {
      params: {
        slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}