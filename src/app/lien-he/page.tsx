'use client';
import { Phone, MapPin, Mail, Clock, Send, ShieldCheck, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const ZALO_CS1 = '0946884344';
const ZALO_CS2 = '0867059950';

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    branch: '',
    date: '',
    time: '',
    pet: 'cho',
    service: '',
    notes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === 'branch') setSelectedBranch(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await fetch('https://formspree.io/f/mjyvjnyr', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          'Họ tên': formData.name,
          'Số điện thoại': formData.phone,
          'Cơ sở': formData.branch === 'cs1' ? 'Cơ sở 1 - KDC Vĩnh Lộc, Bình Tân' : 'Cơ sở 2 - 393 Phan Văn Trị, Bình Thạnh',
          'Ngày khám': formData.date,
          'Giờ dự kiến': formData.time,
          'Thú cưng': formData.pet,
          'Dịch vụ': formData.service || 'Khám tổng quát',
          'Ghi chú': formData.notes,
          '_replyto': 'Haohuynhvet2020@gmail.com',
          '_subject': `[Đặt lịch mới] ${formData.name} - ${formData.phone}`,
        }),
      });
      
      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("Lỗi từ Formspree. Hãy đảm bảo form của bạn đã kích hoạt.");
      }
    } catch (error) {
      alert("Lỗi kết nối mạng, vui lòng thử lại sau.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-12 pb-24">
      {/* Banner */}
      <div className="bg-primary-dark text-white py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">ĐẶT LỊCH KHÁM & LIÊN HỆ</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Hệ thống Trung Tâm Thú Y VET&PET luôn sẵn sàng hỗ trợ bạn 24/7. Vui lòng điền thông tin để chúng tôi sắp xếp lịch tốt nhất cho bé.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          
          {/* Contact Info (Left) */}
          <div className="lg:w-5/12 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Thông Tin Liên Hệ</h2>
              <div className="w-20 h-1.5 bg-primary-light rounded-full mb-8"></div>
            </div>

            {/* CS1 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-dark flex items-center mb-4">
                <MapPin className="w-6 h-6 mr-2 text-primary-light" />
                Cơ sở 1 (Bình Tân)
              </h3>
              <div className="space-y-4 text-gray-600">
                <p className="flex items-start">
                  <span className="font-semibold w-24 shrink-0">Địa chỉ:</span> 
                  <span>TRUNG TÂM THÚ Y VET&PET, KDC Vĩnh Lộc, Q. Bình Tân, TP.HCM</span>
                </p>
                <p className="flex items-center">
                  <span className="font-semibold w-24 shrink-0">Hotline:</span> 
                  <a href="tel:0946884344" className="text-primary-dark font-bold hover:underline">0946.884.344</a>
                </p>
              </div>
            </div>

            {/* CS2 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-dark flex items-center mb-4">
                <MapPin className="w-6 h-6 mr-2 text-primary-light" />
                Cơ sở 2 (Bình Thạnh)
              </h3>
              <div className="space-y-4 text-gray-600">
                <p className="flex items-start">
                  <span className="font-semibold w-24 shrink-0">Địa chỉ:</span> 
                  <span>393 Phan Văn Trị, Phường 11, Q. Bình Thạnh, TP.HCM</span>
                </p>
                <p className="flex items-center">
                  <span className="font-semibold w-24 shrink-0">Hotline:</span> 
                  <a href="tel:0867059950" className="text-primary-dark font-bold hover:underline">0867.059.950</a>
                </p>
              </div>
            </div>

            {/* General Info */}
            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
              <div className="space-y-4 text-gray-700">
                <p className="flex items-center">
                  <Clock className="w-5 h-5 mr-3 text-primary-dark" />
                  <span className="font-semibold mr-2">Giờ làm việc:</span> 8:00 - 20:00 (Tất cả các ngày)
                </p>
                <p className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-primary-dark" />
                  <span className="font-semibold mr-2">Email:</span> Haohuynhvet2020@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* Form Area (Right) */}
          <div className="lg:w-7/12">
            
            {/* Quick Call Buttons */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <a href="tel:0946884344" className="bg-primary-dark hover:bg-blue-900 text-white p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center transition-all group">
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
                  <h3 className="text-xl font-bold mb-2">Đặt lịch thành công! 🎉</h3>
                  <p className="mb-6 text-gray-600">Phòng khám đã nhận được thông tin và sẽ liên hệ lại với bạn trong thời gian sớm nhất.</p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a 
                      href={`https://zalo.me/${selectedBranch === 'cs2' ? ZALO_CS2 : ZALO_CS1}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-[#0068FF] hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl transition-all"
                    >
                      <MessageCircle className="w-5 h-5"/>
                      Nhắn Zalo cho chúng tôi
                    </a>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 px-6 rounded-xl transition-all"
                    >
                      Đặt lịch khác
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Họ tên của bạn *</label>
                      <input autoComplete="off" required name="name" value={formData.name} onChange={handleChange} type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-primary-light outline-none" placeholder="VD: Nguyễn Văn A" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Số điện thoại *</label>
                      <input autoComplete="off" required name="phone" value={formData.phone} onChange={handleChange} type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-primary-light outline-none" placeholder="VD: 09..." />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Chọn Cơ sở *</label>
                    <select required name="branch" value={formData.branch} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-primary-light outline-none bg-white">
                      <option value="">-- Chọn cơ sở --</option>
                      <option value="cs1">Cơ sở 1 (KDC Vĩnh Lộc, Q. Bình Tân)</option>
                      <option value="cs2">Cơ sở 2 (393 Phan Văn Trị, Q. Bình Thạnh)</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Ngày đến khám *</label>
                      <input required name="date" value={formData.date} onChange={handleChange} type="date" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-primary-light outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Giờ dự kiến</label>
                      <input name="time" value={formData.time} onChange={handleChange} type="time" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-primary-light outline-none" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Thú cưng *</label>
                      <select required name="pet" value={formData.pet} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-primary-light outline-none bg-white">
                        <option value="cho">Chó</option>
                        <option value="meo">Mèo</option>
                        <option value="khac">Khác</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Dịch vụ quan tâm</label>
                      <select name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-primary-light outline-none bg-white">
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
                    <textarea name="notes" value={formData.notes} onChange={handleChange} rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-primary-light outline-none" placeholder="Bé đang bị gì, hoặc bạn có dặn dò gì thêm không?"></textarea>
                  </div>

                  <button type="submit" disabled={isLoading} className="w-full bg-primary-dark hover:bg-blue-800 disabled:bg-gray-400 text-white font-bold text-lg py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    {isLoading ? 'Đang gửi thông tin...' : 'GỬI YÊU CẦU ĐẶT LỊCH'}
                  </button>
                  
                  <p className="text-xs text-gray-400 text-center">Hoặc nhắn Zalo trực tiếp: <a href={`https://zalo.me/${ZALO_CS1}`} target="_blank" rel="noopener noreferrer" className="text-[#0068FF] font-semibold">Cơ sở 1</a> • <a href={`https://zalo.me/${ZALO_CS2}`} target="_blank" rel="noopener noreferrer" className="text-[#0068FF] font-semibold">Cơ sở 2</a></p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
