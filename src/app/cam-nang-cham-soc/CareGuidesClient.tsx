'use client';

import Image from 'next/image';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Pause,
  Play,
  Search,
  Shuffle,
  Sparkles,
  X,
  ZoomIn,
} from 'lucide-react';
import { Article } from '@/lib/articles';

const AUTO_ADVANCE_SECONDS = 300; // 5 minutes
const CATEGORIES = [
  'Tất cả',
  'Chăm sóc chung',
  'Chó',
  'Mèo',
  'Dinh dưỡng',
  'Tiêm phòng & Ký sinh trùng',
];

function formatCountdown(totalSeconds: number): string {
  const mins = Math.floor(totalSeconds / 60);
  const secs = totalSeconds % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

export default function CareGuidesClient({ posters }: { posters: Article[] }) {
  const [activeCategory, setActiveCategory] = useState('Tất cả');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [switchMode, setSwitchMode] = useState<'next' | 'random'>('next');
  const [secondsLeft, setSecondsLeft] = useState(AUTO_ADVANCE_SECONDS);
  const [isPaused, setIsPaused] = useState(false);
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
    setSecondsLeft(AUTO_ADVANCE_SECONDS);
    setActiveIndex(idx);
  }, []);

  const goToNextPoster = useCallback(
    (mode: 'next' | 'random' = switchMode) => {
      if (filteredPosters.length <= 1 || activeIndex === null) return;

      let nextIdx: number;
      if (mode === 'random') {
        const candidates = filteredPosters
          .map((_, idx) => idx)
          .filter((idx) => idx !== activeIndex);
        nextIdx = candidates[Math.floor(Math.random() * candidates.length)];
      } else {
        nextIdx = (activeIndex + 1) % filteredPosters.length;
      }
      selectPosterAt(nextIdx);
    },
    [filteredPosters, activeIndex, switchMode, selectPosterAt]
  );

  const goToPrevPoster = useCallback(() => {
    if (filteredPosters.length <= 1 || activeIndex === null) return;
    const prevIdx = (activeIndex - 1 + filteredPosters.length) % filteredPosters.length;
    selectPosterAt(prevIdx);
  }, [filteredPosters.length, activeIndex, selectPosterAt]);

  // 5-minute countdown timer while a poster modal is open
  useEffect(() => {
    if (activeIndex === null || isPaused || filteredPosters.length <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      if (secondsRef.current <= 1) {
        goToNextPoster(switchMode);
      } else {
        secondsRef.current -= 1;
        setSecondsLeft(secondsRef.current);
      }
    }, 1000);

    return () => window.clearInterval(timer);
  }, [activeIndex, isPaused, filteredPosters.length, switchMode, goToNextPoster]);

  // Keyboard navigation inside lightbox
  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        selectPosterAt(null);
      } else if (e.key === 'ArrowRight') {
        goToNextPoster('next');
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
                    onClick={() => {
                      setIsPaused(false);
                      selectPosterAt(idx);
                    }}
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

      {/* Poster Lightbox Modal with 5-minute auto-switch */}
      {activePoster && activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
          onClick={() => selectPosterAt(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[94vh] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3.5 border-b border-gray-100 bg-gray-50">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  {activePoster.category && (
                    <span className="bg-blue-100 text-primary-dark text-xs font-bold px-2.5 py-0.5 rounded-full">
                      {activePoster.category}
                    </span>
                  )}
                  <span className="text-xs text-gray-500 font-medium">
                    Poster {activeIndex + 1}/{filteredPosters.length}
                  </span>
                </div>
                <h2 className="text-base sm:text-lg font-bold text-gray-900 truncate mt-0.5">
                  {activePoster.title}
                </h2>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                {filteredPosters.length > 1 && (
                  <>
                    <div className="flex items-center gap-1.5 bg-blue-50 text-primary-dark px-3 py-1.5 rounded-full text-xs font-semibold border border-blue-100">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Đổi sau {formatCountdown(secondsLeft)}</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => setIsPaused((p) => !p)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold border border-gray-200 bg-white hover:bg-gray-100 text-gray-700 transition-colors"
                      title={isPaused ? 'Tiếp tục tự động chuyển' : 'Tạm dừng tự động chuyển'}
                    >
                      {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
                      <span>{isPaused ? 'Tiếp tục' : 'Tạm dừng'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        setSwitchMode((m) => (m === 'next' ? 'random' : 'next'))
                      }
                      className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                        switchMode === 'random'
                          ? 'bg-primary-light text-white border-primary-light'
                          : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-100'
                      }`}
                      title="Chuyển chế độ tự động sau 5 phút: Kế tiếp hoặc Ngẫu nhiên"
                    >
                      <Shuffle className="w-3.5 h-3.5" />
                      <span>{switchMode === 'random' ? 'Ngẫu nhiên' : 'Kế tiếp'}</span>
                    </button>
                  </>
                )}

                <button
                  type="button"
                  onClick={() => selectPosterAt(null)}
                  className="p-1.5 rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-200 transition-colors"
                  aria-label="Đóng"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Poster Display Area */}
            <div className="relative flex-1 bg-gray-900 flex items-center justify-center min-h-[55vh] max-h-[72vh] overflow-hidden">
              {activePoster.image ? (
                <div className="relative w-full h-[65vh] sm:h-[70vh]">
                  <Image
                    src={activePoster.image}
                    alt={activePoster.title}
                    fill
                    sizes="90vw"
                    className="object-contain p-2"
                    priority
                  />
                </div>
              ) : (
                <p className="text-gray-300">Không có hình ảnh poster.</p>
              )}

              {filteredPosters.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={goToPrevPoster}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-2.5 rounded-full shadow-lg transition-all"
                    aria-label="Poster trước"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    type="button"
                    onClick={() => goToNextPoster('next')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-2.5 rounded-full shadow-lg transition-all"
                    aria-label="Poster kế tiếp"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>

            {/* Optional Caption / Article Notes & Quick Controls */}
            {(activePoster.excerpt || activePoster.content || filteredPosters.length > 1) && (
              <div className="px-4 sm:px-6 py-3.5 bg-white border-t border-gray-100 max-h-40 overflow-y-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="text-sm text-gray-600 space-y-1">
                  {activePoster.excerpt && (
                    <p className="font-medium text-gray-800">{activePoster.excerpt}</p>
                  )}
                  {activePoster.content && (
                    <div
                      className="prose prose-sm max-w-none text-gray-600"
                      dangerouslySetInnerHTML={{ __html: activePoster.content }}
                    />
                  )}
                </div>

                {filteredPosters.length > 1 && (
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={() => goToNextPoster('random')}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-primary-dark text-xs font-bold transition-colors"
                    >
                      <Shuffle className="w-3.5 h-3.5" />
                      Đổi ngẫu nhiên ngay
                    </button>
                    <button
                      type="button"
                      onClick={() => goToNextPoster('next')}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-primary-dark hover:bg-blue-900 text-white text-xs font-bold transition-colors"
                    >
                      Poster kế tiếp
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
