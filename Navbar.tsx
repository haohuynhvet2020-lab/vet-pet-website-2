import { getAllArticles } from '@/lib/articles';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';

export function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const articles = getAllArticles();
  const article = articles.find((a) => a.slug === resolvedParams.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="py-12 bg-secondary min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link href="/cam-nang" className="inline-flex items-center text-primary-light hover:text-primary-dark font-medium mb-8 transition-colors">
          <ArrowLeft className="w-5 h-5 mr-2" /> Quay lại Cẩm nang
        </Link>
        
        <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="relative w-full h-64 md:h-96">
            <Image src={article.image} alt={article.title} fill className="object-cover" priority />
          </div>
          
          <div className="p-8 md:p-12">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
              <span className="flex items-center bg-blue-50 text-primary-dark px-3 py-1 rounded-full font-medium">
                <Tag className="w-4 h-4 mr-1" /> {article.category}
              </span>
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" /> {article.date}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {article.title}
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl text-gray-600 font-medium italic border-l-4 border-gray-300 pl-4 mb-8">
                {article.excerpt}
              </p>
              
              <div 
                className="leading-relaxed article-content" 
                dangerouslySetInnerHTML={{ __html: article.content }} 
              />
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
