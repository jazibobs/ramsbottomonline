import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// Define a proper interface for your service data
export interface ServiceData {
  slug: string;
  contentHtml: string;
  title: string;
  description: string;
  // Add any other frontmatter properties you need
}

const servicesDirectory = path.join(process.cwd(), 'content/services');

// Return service slugs for static path generation
export function getServiceSlugs() {
  const fileNames = fs.readdirSync(servicesDirectory);
  
  return fileNames.map((fileName) => {
    return {
      slug: fileName.replace(/\.md$/, ''),
    };
  });
}

// Get data for a specific service by slug
export async function getServiceData(slug: string): Promise<ServiceData> {
  const fullPath = path.join(servicesDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Return the service data with proper typing
  return {
    slug,
    contentHtml,
    title: matterResult.data.title,
    description: matterResult.data.description,
    // Add any other frontmatter properties you want to include
  };
}