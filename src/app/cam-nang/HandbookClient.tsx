'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Search, ChevronRight } from 'lucide-react';
import { useState, useMemo } from 'react';
import { Article } from '@/lib/articles';

export default function HandbookClient({ articles }: { articles: Article[] }) {
  const categories = ["Tất cả", "Chó", "Mèo", "Dinh dưỡng", "Sức khỏe", "Sơ cứu"];
  
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = useMemo(() => {
    return articles.filter(art => {
      const matchCategory = activeCategory === "Tất cả" || art.category === activeCategory;
      const matchSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          art.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="py-12 bg-secondary min-h-screen">
      <div className="container mx-auto px-4">
        
        {/* Header & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-primary-dark mb-2">CẨM NANG CHĂM SÓC VÀ CA BỆNH TẠI VET&PET</h1>
            <p className="text-gray-600">Kiến thức hữu ích về cách nuôi dưỡng và chăm sóc thú cưng.</p>
          </div>
          <div className="w-full md:w-96 relative">
            <input 
              type="text" 
              placeholder="Tìm kiếm bài viết..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-light"
            />
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-3.5" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar / Categories */}
          <div className="w-full lg:w-1/4">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-24">
              <h3 className="font-bold text-lg text-gray-900 mb-4 border-b pb-2">Danh mục</h3>
              <ul className="space-y-2">
                {categories.map((cat, idx) => (
                  <li key={idx}>
                    <button 
                      onClick={() => setActiveCategory(cat)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${activeCategory === cat ? 'bg-primary-light text-white font-medium' : 'text-gray-600 hover:bg-blue-50 hover:text-primary-dark'}`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Article Grid */}
          <div className="w-full lg:w-3/4">
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredArticles.map((art, idx) => (
                  <Link href={`/cam-nang/${art.slug}`} key={idx} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col group cursor-pointer hover:shadow-xl transition-shadow">
                    <div className="relative h-56 w-full overflow-hidden">
                      <Image src={art.image} alt={art.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute top-4 left-4 bg-primary-light text-white text-xs font-bold px-3 py-1 rounded-full uppercase shadow-md">
                        {art.category}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <span className="text-gray-400 text-xs mb-3 font-medium">{art.date}</span>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-dark transition-colors line-clamp-2">{art.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow leading-relaxed">{art.excerpt}</p>
                      <span className="text-primary-dark font-medium text-sm flex items-center mt-auto hover:text-primary-light transition-colors">
                        Đọc chi tiết <ChevronRight className="w-4 h-4 ml-1" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl p-12 text-center shadow-sm border border-gray-100">
                <p className="text-gray-500 text-lg">Không tìm thấy bài viết nào phù hợp.</p>
                <button 
                  onClick={() => {setSearchQuery(""); setActiveCategory("Tất cả");}}
                  className="mt-4 text-primary-light font-medium hover:underline"
                >
                  Xóa bộ lọc
                </button>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

