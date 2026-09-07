import Link from 'next/link';
import { Phone, MapPin, Mail } from 'lucide-react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="bg-secondary pt-16 pb-8 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-primary-dark mb-4">VET & PET</h3>
            <p className="text-gray-600 mb-4">
              Trung tâm thú y uy tín, chuyên nghiệp và tận tâm. Chúng tôi mang đến dịch vụ chăm sóc sức khỏe tốt nhất cho thú cưng của bạn.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-light hover:text-primary-dark transition-colors">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-primary-light hover:text-primary-dark transition-colors">
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-lg font-bold text-gray-900 mb-4">Hệ Thống Cơ Sở</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-600 text-sm">
                <MapPin className="w-5 h-5 text-primary-light shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-gray-900 block mb-1">Cơ sở 1</span>
                  78 Đường số 2, KDC Vĩnh Lộc, P. Bình Hưng Hoà B, Bình Tân, TP.HCM<br/>
                  <a href="tel:0946884344" className="text-primary-dark font-semibold mt-1 inline-block">Hotline: 0946 884 344</a>
                </div>
              </li>
              <li className="flex items-start space-x-3 text-gray-600 text-sm">
                <MapPin className="w-5 h-5 text-primary-light shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-gray-900 block mb-1">Cơ sở 2</span>
                  393 Phan Văn Trị, Phường Bình Lợi Trung, Bình Tân, TP.HCM<br/>
                  <a href="tel:0867059950" className="text-primary-dark font-semibold mt-1 inline-block">Hotline: 0867 059 950</a>
                </div>
              </li>
              <li className="flex items-start space-x-3 text-gray-600 text-sm pt-2">
                <Mail className="w-5 h-5 text-primary-light shrink-0 mt-0.5" />
                <span>contact@vetpet.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-4">Dịch Vụ</h4>
            <ul className="space-y-2 text-gray-600">
              <li><Link href="/dich-vu" className="hover:text-primary-light transition-colors">Siêu âm & X-Ray</Link></li>
              <li><Link href="/dich-vu" className="hover:text-primary-light transition-colors">Xét nghiệm máu</Link></li>
              <li><Link href="/dich-vu" className="hover:text-primary-light transition-colors">Phẫu thuật xương khớp</Link></li>
              <li><Link href="/dich-vu" className="hover:text-primary-light transition-colors">Lưu trú - Hotel</Link></li>
              <li><Link href="/dich-vu" className="hover:text-primary-light transition-colors">Khám tổng quát</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-4">Giờ Làm Việc</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="flex justify-between border-b border-gray-200 pb-2">
                <span>Thứ 2 - Chủ Nhật:</span>
                <span className="font-medium text-gray-900">08:00 - 20:00</span>
              </li>
              <li className="flex flex-col mt-4">
                <span className="text-red-500 font-bold mb-1">Cấp cứu 24/7:</span>
                <span className="font-bold text-lg text-primary-dark">0946 884 344</span>
                <span className="font-bold text-lg text-primary-dark">0867 059 950</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} VET & PET Veterinary Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
