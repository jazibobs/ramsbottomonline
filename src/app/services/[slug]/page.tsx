import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import { useRouter } from 'next/router';
import html from 'remark-html';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCta from "@/components/cta/ServiceCta";
import AddOns from '@/components/AddOns';


export default function ServiceTemplate() {
  const router = useRouter()
  const slug  = router.query.slug;
  const filePath = path.join(process.cwd(), 'content', 'services', `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  const processedContent = remark().use(html).process(content);
  const contentHtml = processedContent.toString()

  return(
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