'use client';

import Image from 'next/image';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Search,
  Sparkles,
  X,
  ZoomIn,
} from 'lucide-react';
import { Article } from '@/lib/articles';

const AUTO_ADVANCE_SECONDS = 180; // 3 minutes
const CATEGORIES = [
  'Tất cả',
  'Chăm sóc chung',
  'Chó',
  'Mèo',
  'Dinh dưỡng',
  'Tiêm phòng & Ký sinh trùng',
];

export default function CareGuidesClient({ posters }: { posters: Article[] }) {
  const [activeCategory, setActiveCategory] = useState('Tất cả');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const secondsRef = useRef(AUTO_ADVANCE_SECONDS);

  const filteredPosters = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return posters.filter((item) => {
      const matchCategory = activeCategory === 'Tất cả' || item.category === activeCategory;
      const matchSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.excerpt.toLowerCase().includes(q);
      return matchCategory && matchSearch;
    });
  }, [posters, activeCategory, searchQuery]);

  const activePoster = activeIndex !== null ? filteredPosters[activeIndex] ?? null : null;

  const selectPosterAt = useCallback((idx: number | null) => {
    secondsRef.current = AUTO_ADVANCE_SECONDS;
    setActiveIndex(idx);
  }, []);

  const goToNextPoster = useCallback(() => {
    if (filteredPosters.length <= 1 || activeIndex === null) return;
    const nextIdx = (activeIndex + 1) % filteredPosters.length;
    selectPosterAt(nextIdx);
  }, [filteredPosters.length, activeIndex, selectPosterAt]);

  const goToPrevPoster = useCallback(() => {
    if (filteredPosters.length <= 1 || activeIndex === null) return;
    const prevIdx = (activeIndex - 1 + filteredPosters.length) % filteredPosters.length;
    selectPosterAt(prevIdx);
  }, [filteredPosters.length, activeIndex, selectPosterAt]);

  // 3-minute auto-advance timer while a poster is open
  useEffect(() => {
    if (activeIndex === null || filteredPosters.length <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      if (secondsRef.current <= 1) {
        goToNextPoster();
      } else {
        secondsRef.current -= 1;
      }
    }, 1000);

    return () => window.clearInterval(timer);
  }, [activeIndex, filteredPosters.length, goToNextPoster]);

  // Keyboard navigation inside fullscreen viewer
  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        selectPosterAt(null);
      } else if (e.key === 'ArrowRight') {
        goToNextPoster();
      } else if (e.key === 'ArrowLeft') {
        goToPrevPoster();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, selectPosterAt, goToNextPoster, goToPrevPoster]);

  return (
    <div className="py-12 bg-secondary min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-primary-dark mb-2">
              CẨM NANG CHĂM SÓC THÚ CƯNG
            </h1>
            <p className="text-gray-600">
              Bộ sưu tập poster hướng dẫn chăm sóc, dinh dưỡng và phòng bệnh trực quan từ đội ngũ bác sĩ VET &amp; PET.
            </p>
          </div>
          <div className="w-full md:w-96 relative">
            <input
              type="text"
              placeholder="Tìm kiếm poster..."
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
                {CATEGORIES.map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => {
                        setActiveCategory(cat);
                        setActiveIndex(null);
                      }}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        activeCategory === cat
                          ? 'bg-primary-light text-white font-medium'
                          : 'text-gray-600 hover:bg-blue-50 hover:text-primary-dark'
                      }`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Poster Grid */}
          <div className="w-full lg:w-3/4">
            {filteredPosters.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredPosters.map((poster, idx) => (
                  <button
                    key={poster.slug}
                    type="button"
                    onClick={() => selectPosterAt(idx)}
                    className="text-left bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative aspect-[3/4] w-full bg-gray-50 overflow-hidden">
                      {poster.image ? (
                        <Image
                          src={poster.image}
                          alt={poster.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                          className="object-contain p-2 group-hover:scale-[1.03] transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                          Chưa có hình poster
                        </div>
                      )}
                      {poster.category && (
                        <div className="absolute top-3 left-3 bg-primary-light text-white text-xs font-bold px-3 py-1 rounded-full uppercase shadow-md">
                          {poster.category}
                        </div>
                      )}
                      <div className="absolute inset-0 bg-primary-dark/0 group-hover:bg-primary-dark/15 transition-colors flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 text-primary-dark font-semibold text-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5">
                          <ZoomIn className="w-4 h-4" /> Xem poster
                        </span>
                      </div>
                    </div>

                    <div className="p-5 flex flex-col flex-grow w-full">
                      {poster.date && (
                        <span className="text-gray-400 text-xs mb-1.5 font-medium">{poster.date}</span>
                      )}
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-dark transition-colors line-clamp-2">
                        {poster.title}
                      </h3>
                      {poster.excerpt && (
                        <p className="text-gray-600 text-sm mt-2 line-clamp-2 leading-relaxed">
                          {poster.excerpt}
                        </p>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-gray-100">
                <Sparkles className="w-12 h-12 text-primary-light mx-auto mb-4" />
                {posters.length === 0 ? (
                  <>
                    <p className="text-gray-700 font-semibold text-lg mb-2">
                      Chưa có poster cẩm nang chăm sóc nào được đăng tải.
                    </p>
                    <p className="text-gray-500 text-sm">
                      Quản trị viên có thể thêm poster mới trực tiếp trong mục <strong>Cẩm nang chăm sóc (Poster)</strong> tại trang quản trị.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-gray-500 text-lg">Không tìm thấy poster nào phù hợp.</p>
                    <button
                      onClick={() => {
                        setSearchQuery('');
                        setActiveCategory('Tất cả');
                      }}
                      className="mt-4 text-primary-light font-medium hover:underline"
                    >
                      Xóa bộ lọc
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Pure Fullscreen Poster Lightbox (3-minute auto-switch, no titles/captions/timers) */}
      {activePoster && activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-2 sm:p-4"
          onClick={() => selectPosterAt(null)}
        >
          <button
            type="button"
            onClick={() => selectPosterAt(null)}
            className="fixed top-4 right-4 z-50 p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors"
            aria-label="Đóng"
          >
            <X className="w-6 h-6" />
          </button>

          {filteredPosters.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevPoster();
                }}
                className="fixed left-3 sm:left-5 top-1/2 -translate-y-1/2 z-50 p-2.5 rounded-full bg-black/45 hover:bg-black/75 text-white transition-colors"
                aria-label="Poster trước"
              >
                <ChevronLeft className="w-7 h-7" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goToNextPoster();
                }}
                className="fixed right-3 sm:right-5 top-1/2 -translate-y-1/2 z-50 p-2.5 rounded-full bg-black/45 hover:bg-black/75 text-white transition-colors"
                aria-label="Poster kế tiếp"
              >
                <ChevronRight className="w-7 h-7" />
              </button>
            </>
          )}

          <div
            className="relative w-full h-full"
            onClick={() => selectPosterAt(null)}
          >
            {activePoster.image && (
              <Image
                src={activePoster.image}
                alt={activePoster.title}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
