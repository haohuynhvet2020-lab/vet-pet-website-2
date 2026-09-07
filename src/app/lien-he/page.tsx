'use client';
import { Phone, MapPin, Mail, Clock, Send, ShieldCheck } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className="py-12 bg-secondary min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold text-primary-dark mb-4">Liên Hệ & Đặt Lịch Thông Minh</h1>
          <p className="text-gray-600 text-lg">
            VET & PET luôn sẵn sàng hỗ trợ bạn. Bạn có thể gọi điện trực tiếp hoặc điền form đặt lịch bên dưới để chúng tôi có sự chuẩn bị tốt nhất.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          {/* Contact Info & Maps */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Hệ Thống Cơ Sở</h2>
              
              <div className="space-y-8">
                {/* CS1 */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-primary-dark shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-primary-dark">Cơ Sở 1</h3>
                    <p className="text-gray-600 mb-2">78 Đường số 2, KDC Vĩnh Lộc, Phường Bình Hưng Hoà B, Bình Tân, TP.HCM</p>
                    <div className="flex items-center text-primary-light font-bold mb-3">
                      <Phone className="w-4 h-4 mr-2" />
                      <a href="tel:0946884344" className="hover:text-primary-dark transition-colors">0946 884 344</a>
                    </div>
                    {/* Google Map CS1 placeholder */}
                    <div className="w-full h-40 bg-gray-200 rounded-lg overflow-hidden relative">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1s0x31752b005391d3fd%3A0xbbbe2831f1fdb114!2sB%C3%ACnh%20T%C3%A2n%2C%20Ho%20Chi%20Minh%20City%2C%20Vietnam!5e0!3m2!1sen!2s!4v1715000000000!5m2!1sen!2s" 
                        width="100%" 
                        height="100%" 
                        style={{border:0}} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                      </iframe>
                    </div>
                  </div>
                </div>

                {/* CS2 */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-primary-dark shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-primary-dark">Cơ Sở 2</h3>
                    <p className="text-gray-600 mb-2">393 Phan Văn Trị, Phường Bình Lợi Trung, Bình Tân, TP.HCM</p>
                    <div className="flex items-center text-primary-light font-bold mb-3">
                      <Phone className="w-4 h-4 mr-2" />
                      <a href="tel:0867059950" className="hover:text-primary-dark transition-colors">0867 059 950</a>
                    </div>
                    {/* Google Map CS2 placeholder */}
                    <div className="w-full h-40 bg-gray-200 rounded-lg overflow-hidden relative">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1s0x31752b005391d3fd%3A0xbbbe2831f1fdb114!2sB%C3%ACnh%20T%C3%A2n%2C%20Ho%20Chi%20Minh%20City%2C%20Vietnam!5e0!3m2!1sen!2s!4v1715000000001!5m2!1sen!2s" 
                        width="100%" 
                        height="100%" 
                        style={{border:0}} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                      </iframe>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-4 border-t border-gray-100">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-primary-dark shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Giờ Làm Việc</h3>
                    <ul className="text-gray-600 space-y-1">
                      <li><span className="font-medium text-gray-900">Thứ 2 - Chủ Nhật:</span> 08:00 - 20:00</li>
                      <li className="text-red-500 font-bold mt-2">Trực cấp cứu 24/7</li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Booking Form & Fast Call */}
          <div className="space-y-8">
            {/* 2 Hotlines distinct boxes */}
            <div className="grid grid-cols-2 gap-4">
              <a href="tel:0946884344" className="bg-primary-dark hover:bg-blue-800 text-white p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center transition-all group">
                <Phone className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm text-blue-200 mb-1">Gọi Cơ sở 1</span>
                <span className="text-xl md:text-2xl font-bold">0946.884.344</span>
              </a>
              <a href="tel:0867059950" className="bg-primary-light hover:bg-blue-500 text-white p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center transition-all group">
                <Phone className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm text-blue-100 mb-1">Gọi Cơ sở 2</span>
                <span className="text-xl md:text-2xl font-bold">0867.059.950</span>
              </a>
            </div>

            {/* Booking Form */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Đặt Lịch Khám</h2>
              
              {isSubmitted ? (
                <div className="bg-green-50 text-green-700 p-6 rounded-xl text-center border border-green-200">
                  <ShieldCheck className="w-16 h-16 mx-auto mb-4 text-green-500" />
                  <h3 className="text-xl font-bold mb-2">Đặt lịch thành công!</h3>
                  <p>Cảm ơn bạn. Chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhất để xác nhận lịch hẹn.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Họ tên của bạn *</label>
                      <input required type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-primary-light outline-none" placeholder="VD: Nguyễn Văn A" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Số điện thoại *</label>
                      <input required type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-primary-light outline-none" placeholder="VD: 09..." />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Chọn Cơ sở *</label>
                    <select required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-primary-light outline-none bg-white">
                      <option value="">-- Chọn cơ sở --</option>
                      <option value="cs1">Cơ sở 1 (KDC Vĩnh Lộc, Q. Bình Tân)</option>
                      <option value="cs2">Cơ sở 2 (Phan Văn Trị, Q. Bình Tân)</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Ngày đến khám *</label>
                      <input required type="date" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-primary-light outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Giờ dự kiến</label>
                      <input type="time" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-primary-light outline-none" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Thú cưng *</label>
                      <select required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-primary-light outline-none bg-white">
                        <option value="cho">Chó</option>
                        <option value="meo">Mèo</option>
                        <option value="khac">Khác</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Dịch vụ quan tâm</label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-primary-light outline-none bg-white">
                        <option value="">Khám tổng quát</option>
                        <option value="sieu-am">Siêu âm / X-Ray</option>
                        <option value="tiem-phong">Tiêm phòng</option>
                        <option value="phau-thuat">Phẫu thuật</option>
                        <option value="spa">Spa / Tỉa lông</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Mô tả triệu chứng hoặc yêu cầu khác</label>
                    <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-primary-light outline-none" placeholder="Bé đang bị gì, hoặc bạn có dặn dò gì thêm không?"></textarea>
                  </div>

                  <button type="submit" className="w-full bg-primary-dark hover:bg-blue-800 text-white font-bold text-lg py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    GỬI YÊU CẦU ĐẶT LỊCH
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
