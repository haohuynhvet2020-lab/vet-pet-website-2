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

function sortByDateDesc(items: Article[]): Article[] {
  return items.sort((a, b) => {
    try {
      const dateA_str = a.date || '01/01/2000';
      const dateB_str = b.date || '01/01/2000';
      const partsA = dateA_str.split('/');
      const partsB = dateB_str.split('/');

      const dateA = new Date(`${partsA[2] || '2000'}-${partsA[1] || '01'}-${partsA[0] || '01'}`);
      const dateB = new Date(`${partsB[2] || '2000'}-${partsB[1] || '01'}-${partsB[0] || '01'}`);

      if (dateA < dateB) return 1;
      return -1;
    } catch {
      return 0;
    }
  });
}

function getMarkdownItems(folder: 'articles' | 'care-guides'): Article[] {
  const targetDir = path.join(process.cwd(), 'content', folder);
  if (!fs.existsSync(targetDir)) {
    return [];
  }

  const fileNames = fs.readdirSync(targetDir).filter((name) => name.endsWith('.md'));
  const items = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(process.cwd(), 'content', folder, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    const rawBody = (matterResult.content || '').trim();

    return {
      slug,
      title: matterResult.data.title || '',
      category: matterResult.data.category || '',
      image: matterResult.data.image || '',
      excerpt: matterResult.data.excerpt || '',
      date: matterResult.data.date || '',
      content: rawBody ? (marked(rawBody) as string) : '',
    };
  });

  return sortByDateDesc(items);
}

/** Reads all handbook and clinical case articles from content/articles. */
export function getAllArticles(): Article[] {
  return getMarkdownItems('articles');
}

/** Reads all care guide posters/articles from content/care-guides. */
export function getAllCareGuides(): Article[] {
  return getMarkdownItems('care-guides');
}
