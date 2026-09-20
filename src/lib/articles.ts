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
    try {
      const dateA_str = a.date || '01/01/2000';
      const dateB_str = b.date || '01/01/2000';
      const partsA = dateA_str.split('/');
      const partsB = dateB_str.split('/');
      
      const dateA = new Date(`${partsA[2] || '2000'}-${partsA[1] || '01'}-${partsA[0] || '01'}`);
      const dateB = new Date(`${partsB[2] || '2000'}-${partsB[1] || '01'}-${partsB[0] || '01'}`);
      
      if (dateA < dateB) return 1;
      return -1;
    } catch (e) {
      return 0;
    }
  });

}
