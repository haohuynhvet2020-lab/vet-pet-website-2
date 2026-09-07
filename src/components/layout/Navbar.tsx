'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Menu, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-16 w-32">
              <Image 
                src="/logo.jpg" 
                alt="Vet & Pet Logo" 
                fill 
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-light font-medium transition-colors">
              Trang chủ
            </Link>
            <Link href="/gioi-thieu" className="text-gray-700 hover:text-primary-light font-medium transition-colors">
              Giới thiệu
            </Link>
            
            {/* Mega Menu Dịch Vụ */}
            <div className="relative group">
              <Link href="/dich-vu" className="flex items-center text-gray-700 hover:text-primary-light font-medium transition-colors py-8">
                Dịch vụ <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform" />
              </Link>
              
              {/* Dropdown Content */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white rounded-2xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-4 group-hover:translate-y-0 p-6 grid grid-cols-2 gap-8 pointer-events-none group-hover:pointer-events-auto">
                <div>
                  <h4 className="font-bold text-primary-dark mb-4 border-b pb-2">Dịch vụ Y tế chuyên sâu</h4>
                  <ul className="space-y-3">
                    <li><Link href="/dich-vu" className="text-gray-600 hover:text-primary-light block">Khám tổng quát</Link></li>
                    <li><Link href="/dich-vu" className="text-gray-600 hover:text-primary-light block">Siêu âm & Chụp X-Ray</Link></li>
                    <li><Link href="/dich-vu" className="text-gray-600 hover:text-primary-light block">Xét nghiệm máu</Link></li>
                    <li><Link href="/dich-vu" className="text-gray-600 hover:text-primary-light block">Phẫu thuật xương khớp</Link></li>
                    <li><Link href="/dich-vu" className="text-gray-600 hover:text-primary-light block">Tiêm phòng & Tẩy giun</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-primary-dark mb-4 border-b pb-2">Chăm sóc & Dịch vụ khác</h4>
                  <ul className="space-y-3">
                    <li><Link href="/dich-vu" className="text-gray-600 hover:text-primary-light block">Dịch vụ cho Chó</Link></li>
                    <li><Link href="/dich-vu" className="text-gray-600 hover:text-primary-light block">Dịch vụ cho Mèo</Link></li>
                    <li><Link href="/dich-vu" className="text-gray-600 hover:text-primary-light block">Khách sạn thú cưng (Lưu trú)</Link></li>
                    <li><Link href="/dich-vu" className="text-gray-600 hover:text-primary-light block">Spa & Cắt tỉa lông (Grooming)</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            <Link href="/ca-benh" className="text-gray-700 hover:text-primary-light font-medium transition-colors">
              Ca bệnh
            </Link>
            <Link href="/cam-nang" className="text-gray-700 hover:text-primary-light font-medium transition-colors">
              Cẩm nang
            </Link>
          </div>

          <div className="hidden md:flex items-center">
            <Link 
              href="/lien-he" 
              className="flex items-center space-x-2 bg-primary-dark hover:bg-primary-dark/90 text-white px-5 py-2.5 rounded-full font-semibold transition-all shadow-md hover:shadow-lg"
            >
              <span>Đặt Lịch Ngay</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown (Simplified) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 p-4 space-y-4 shadow-lg absolute w-full">
          <Link href="/" className="block text-gray-700 font-medium">Trang chủ</Link>
          <Link href="/gioi-thieu" className="block text-gray-700 font-medium">Giới thiệu</Link>
          <Link href="/dich-vu" className="block text-gray-700 font-medium text-primary-light">Dịch vụ</Link>
          <Link href="/ca-benh" className="block text-gray-700 font-medium">Ca bệnh</Link>
          <Link href="/cam-nang" className="block text-gray-700 font-medium">Cẩm nang</Link>
          <Link href="/lien-he" className="block text-primary-dark font-bold">Đặt Lịch & Liên hệ</Link>
        </div>
      )}
    </nav>
  );
}
