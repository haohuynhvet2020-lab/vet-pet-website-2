'use client';
import { useState, useRef, useEffect } from 'react';
import { Phone } from 'lucide-react';

export function CallButton() {
  const [open, setOpen] = useState(false);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0 });
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open && btnRef.current) {
      const rect = btnRef.current.getBoundingClientRect();
      setDropdownPos({
        top: rect.bottom + 8,
        left: rect.left,
      });
    }
  }, [open]);

  return (
    <div className="relative">
      <button
        ref={btnRef}
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center gap-2 bg-primary-dark hover:bg-blue-800 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl"
      >
        <Phone className="w-6 h-6" />
        Gọi Đặt Lịch
      </button>

      {open && (
        <>
          {/* Backdrop - covers full screen */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpen(false)}
          />
          {/* Dropdown - fixed position so it's never clipped */}
          <div
            className="fixed z-50 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden min-w-[280px]"
            style={{ top: dropdownPos.top, left: dropdownPos.left }}
          >
            <div className="px-4 py-3 bg-gray-50 border-b border-gray-100">
              <p className="text-sm font-semibold text-gray-500">Chọn cơ sở để gọi</p>
            </div>
            <a
              href="tel:0946884344"
              className="flex items-center gap-4 px-5 py-4 hover:bg-blue-50 transition-colors group"
              onClick={() => setOpen(false)}
            >
              <div className="w-10 h-10 bg-primary-dark rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-gray-900">Cơ Sở 1 – Bình Tân</p>
                <p className="text-primary-dark font-semibold text-lg">0946.884.344</p>
              </div>
            </a>
            <div className="h-px bg-gray-100 mx-4" />
            <a
              href="tel:0867059950"
              className="flex items-center gap-4 px-5 py-4 hover:bg-blue-50 transition-colors group"
              onClick={() => setOpen(false)}
            >
              <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-gray-900">Cơ Sở 2 – Bình Thạnh</p>
                <p className="text-primary-light font-semibold text-lg">0867.059.950</p>
              </div>
            </a>
          </div>
        </>
      )}
    </div>
  );
}
