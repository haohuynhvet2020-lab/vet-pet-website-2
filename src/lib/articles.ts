import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

export interface Article {
  slug: string;
  title: string;
  category: string;
  image: string;
  excerpt: string;
  date: string;
  content: string;
}

const articlesDirectory = path.join(process.cwd(), 'content/articles');

export function getAllArticles(): Article[] {
  if (!fs.existsSync(articlesDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(articlesDirectory);
  const allArticles = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      slug,
      title: matterResult.data.title || '',
      category: matterResult.data.category || '',
      image: matterResult.data.image || '',
      excerpt: matterResult.data.excerpt || '',
      date: matterResult.data.date || '',
      content: marked(matterResult.content) as string,
    };
  });

  return allArticles.sort((a, b) => {
    // Simple sort (assuming DD/MM/YYYY)
    const [d1, m1, y1] = a.date.split('/');
    const [d2, m2, y2] = b.date.split('/');
    const dateA = new Date(`${y1}-${m1}-${d1}`);
    const dateB = new Date(`${y2}-${m2}-${d2}`);
    if (dateA < dateB) return 1;
    return -1;
  });
}
