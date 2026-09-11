import Image from 'next/image';
import Link from 'next/link';
import { Phone, Stethoscope, Heart, Clock, ShieldCheck, ChevronRight, BookOpen } from 'lucide-react';
import { getAllArticles } from '@/lib/articles';
import { ServiceCarousel } from '@/components/ServiceCarousel';
import { CallButton } from '@/components/CallButton';

export default function Home() {
  const articles = getAllArticles();
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary-dark overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/banner2.jpg" 
            alt="Hero Background" 
            fill
            className="object-cover opacity-80"
            priority
          />
          {/* Subtle gradient overlay to ensure text is readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4 leading-tight text-primary-dark tracking-tight drop-shadow-md">
              TRUNG TÂM THÚ Y <br/>
              <span className="text-primary-light">VET&PET</span>
            </h1>
            <p className="text-xl md:text-2xl font-bold mb-8 text-gray-700 italic border-l-4 border-primary-light pl-4">
              &quot;TẤT CẢ VÌ THÚ CƯNG NHÀ BẠN - MỖI SINH MỆNH, MỖI PHƯỚC LÀNH.&quot;
            </p>
                        <div data-aos="fade-up" data-aos-delay="250" className="flex flex-col md:flex-row gap-6 mb-10">
              <div className="flex items-center gap-3 text-white">
                <div className="w-10 h-10 bg-primary-light/20 rounded-full flex items-center justify-center"><Stethoscope className="w-5 h-5 text-primary-light"/></div>
                <span className="font-semibold text-lg">Bác Sĩ Chuyên Môn</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <div className="w-10 h-10 bg-primary-light/20 rounded-full flex items-center justify-center"><Heart className="w-5 h-5 text-primary-light"/></div>
                <span className="font-semibold text-lg">Tận Tâm & Yêu Thương</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <div className="w-10 h-10 bg-primary-light/20 rounded-full flex items-center justify-center"><Clock className="w-5 h-5 text-primary-light"/></div>
                <span className="font-semibold text-lg">Hỗ Trợ Nhanh Chóng</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <CallButton />
              <Link 
                href="/dich-vu"
                className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-primary-dark border-2 border-primary-dark px-8 py-4 rounded-full font-bold text-lg transition-all shadow-md"
              >
                Xem Dịch Vụ
              </Link>
            </div>
          </div>
        </div>
      </section>

      
      {/* Doctors Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 data-aos="fade-up" className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Đội Ngũ Bác Sĩ Chuyên Môn</h2>
            <p data-aos="fade-up" data-aos-delay="100" className="text-gray-600 max-w-2xl mx-auto text-lg">Với chuyên môn cao và tình yêu thương động vật, đội ngũ y bác sĩ tại VET&PET luôn sẵn sàng mang lại sự chăm sóc tốt nhất cho thú cưng của bạn.</p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 max-w-6xl mx-auto">
              {/* Doctor 1 */}
              <div data-aos="fade-up" data-aos-delay="100" className="group w-full md:w-1/3 flex flex-col items-center text-center">
                <div className="relative w-full max-w-[280px] aspect-[3/4] rounded-2xl overflow-hidden mb-6 shadow-xl border border-gray-100">
                  <Image src="/doctor-phu.jpg" alt="BSTY Nguyễn Hoàng Phú" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-primary-dark mb-2">BSTY. NGUYỄN HOÀNG PHÚ</h3>
                <p className="text-gray-500 font-medium">Bác Sĩ Nội Trú</p>
              </div>
              {/* Doctor 2 */}
              <div data-aos="fade-up" data-aos-delay="200" className="group w-full md:w-1/3 flex flex-col items-center text-center">
                <div className="relative w-full max-w-[280px] aspect-[3/4] rounded-2xl overflow-hidden mb-6 shadow-xl border border-gray-100">
                  <Image src="/doctor-tran.jpg" alt="BSTY Lê Quyền Trân" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-primary-dark mb-2">BSTY. LÊ QUYỀN TRÂN</h3>
                <p className="text-gray-500 font-medium">Bác Sĩ Chính</p>
              </div>
              {/* Doctor 3 */}
              <div data-aos="fade-up" data-aos-delay="300" className="group w-full md:w-1/3 flex flex-col items-center text-center">
                <div className="relative w-full max-w-[280px] aspect-[3/4] rounded-2xl overflow-hidden mb-6 shadow-xl border border-gray-100">
                  <Image src="/doctor-hao.jpg" alt="BSTY Huỳnh Nhật Hào" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-primary-dark mb-2">BSTY. HUỲNH NHẬT HÀO</h3>
                <p className="text-gray-500 font-medium">Bác Sĩ Chính</p>
              </div>
            </div>
          </div>
        </section>

      {/* Featured Services Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 data-aos="fade-up" className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Dịch Vụ Nổi Bật</h2>
            <p data-aos="fade-up" data-aos-delay="100" className="text-gray-600 max-w-2xl mx-auto text-lg">
              Hệ thống máy móc hiện đại và dịch vụ toàn diện giúp chẩn đoán và điều trị chính xác nhất.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="200" className="-ml-4">
            <ServiceCarousel />
          </div>
        </div>
      </section>



      {/* Handbook / Blog Section on Homepage (Moved ABOVE Services) */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <div className="flex items-center gap-2 text-primary-light mb-2 font-bold">
                <BookOpen className="w-5 h-5" />
                <span>CẨM NANG CHĂM SÓC VÀ CA BỆNH TẠI VET&PET</span>
              </div>
              
            </div>
            <Link href="/cam-nang" className="text-primary-dark font-semibold hover:text-primary-light transition-colors flex items-center">
              Xem tất cả bài viết <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.slice(0, 3).map((art, idx) => (
              <Link href={`/cam-nang/${art.slug}`} key={idx} className="block group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image 
                      src={art.image} 
                      alt={art.title} 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                    <div className="absolute top-4 left-4 bg-primary-light text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                      {art.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-light transition-colors line-clamp-2">
                      {art.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3">
                      {art.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      

      {/* Video Library */}
      <section className="py-16 bg-secondary border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Thư Viện Video</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Cùng xem những khoảnh khắc đáng yêu và các ca điều trị thực tế tại VET & PET.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((_, idx) => (
              <div key={idx} className="bg-black rounded-2xl overflow-hidden shadow-lg relative aspect-video group cursor-pointer">
                <Image 
                  src={`https://images.unsplash.com/photo-${idx === 0 ? '1548767797-d8c844163c4c' : idx === 1 ? '1514888286974-6c03e2ca1dba' : '1583337130417-3346a1be7dee'}?auto=format&fit=crop&q=80&w=800`}
                  alt="Video thumbnail"
                  fill
                  className="object-cover opacity-70 group-hover:opacity-50 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white font-bold truncate">Hướng dẫn chăm sóc thú cưng tại nhà phần {idx + 1}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="#" className="text-primary-dark font-bold hover:text-primary-light transition-colors">
              Xem thêm trên kênh YouTube của chúng tôi →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Khách Hàng Nói Gì Về Chúng Tôi</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Hàng ngàn khách hàng đã tin tưởng và gửi gắm thú cưng của mình tại VET & PET.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div data-aos="zoom-in" className="bg-secondary p-8 rounded-2xl shadow-sm border border-gray-100 relative flex flex-col">
              <div className="text-primary-light text-4xl font-serif absolute top-4 left-6">&quot;</div>
              <p className="text-gray-700 italic mb-6 relative z-10 pt-4 flex-grow">
                &quot;Anh chị bác sĩ ở đây siêu nhiệt tình, hướng dẫn rất chi tiết khi bé nhà mình bệnh, mình theo ở đây từ lúc tiệm vừa mới mở, chi phí hợp lý, chữa bệnh dứt điểm.&quot;
              </p>
              <div className="flex items-center gap-4 border-t border-gray-200 pt-4">
                <div className="w-12 h-12 bg-blue-500 text-white flex items-center justify-center font-bold text-xl rounded-full overflow-hidden relative">
                  H
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Huyền Nguyễn</h4>
                  <p className="text-xs text-gray-500 mb-1">Local Guide</p>
                  <div className="text-yellow-400 text-sm flex gap-1">★★★★★</div>
                </div>
              </div>
            </div>

            <div data-aos="zoom-in" className="bg-secondary p-8 rounded-2xl shadow-sm border border-gray-100 relative flex flex-col">
              <div className="text-primary-light text-4xl font-serif absolute top-4 left-6">&quot;</div>
              <p className="text-gray-700 italic mb-6 relative z-10 pt-4 flex-grow">
                &quot;Lần đầu đến nhưng khá yên tâm về dịch vụ, chất lượng, tư vấn. Mình chỉ tiêm nhắc bệnh, tiêm dại thôi nên ko có gì phức tạp, bé chịu các cô tiêm và phối hợp, ko quậy, chắc do các bạn khá kinh nghiệm.&quot;
              </p>
              <div className="flex items-center gap-4 border-t border-gray-200 pt-4">
                <div className="w-12 h-12 bg-gray-600 text-white flex items-center justify-center font-bold text-xl rounded-full overflow-hidden relative">
                  N
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Ngọc Trang Tân</h4>
                  <p className="text-xs text-gray-500 mb-1">Local Guide</p>
                  <div className="text-yellow-400 text-sm flex gap-1">★★★★★</div>
                </div>
              </div>
            </div>

            <div data-aos="zoom-in" className="bg-secondary p-8 rounded-2xl shadow-sm border border-gray-100 relative flex flex-col">
              <div className="text-primary-light text-4xl font-serif absolute top-4 left-6">&quot;</div>
              <p className="text-gray-700 italic mb-6 relative z-10 pt-4 flex-grow text-sm">
                &quot;Mình chăm Bun hơi vụng nên gặp được bác sĩ ở Vet&Pet mình thấy yên tâm hẳn. Bun lớn tuổi rồi nên bác sĩ để ý sức khỏe rất kỹ rồi mới chọn cách điều trị phù hợp. Đặc biệt chị bác sĩ nữ rất nhiệt tình, chữa tai cho Bun cẩn thận, sau phẫu thuật còn đến nhà thay băng định kỳ... Chi phí khám, điều trị hợp lý, không bắt mua thêm cái này cái kia. Rất quý bác sĩ có tâm như vậy ạ🥰&quot;
              </p>
              <div className="flex items-center gap-4 border-t border-gray-200 pt-4">
                <div className="w-12 h-12 bg-orange-500 text-white flex items-center justify-center font-bold text-xl rounded-full overflow-hidden relative">
                  B
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Khách hàng (Chủ bé Bun)</h4>
                  <p className="text-xs text-gray-500 mb-1">Đánh giá trên Fanpage</p>
                  <div className="text-yellow-400 text-sm flex gap-1">★★★★★</div>
                </div>
              </div>
            </div>
          </div>

          {/* Nút Liên Kết Google Maps */}
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://maps.app.goo.gl/8n4rqTdccbL5CoqU6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-800 font-semibold py-3 px-8 border border-gray-300 rounded-full shadow-sm hover:shadow transition-all group"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#4285F4] group-hover:scale-110 transition-transform" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              Đánh giá 5 Sao (Cơ sở Bình Tân)
            </a>
            <a 
              href="https://www.google.com/maps/place/Th%C3%BA+Y+Vet%26Pet+B%C3%ACnh+Th%E1%BA%A1nh+-+D%E1%BB%8Bch+v%E1%BB%A5+Th%C3%BA+Y+t%E1%BA%ADn+nh%C3%A0+TP.+HCM/@10.8191074,106.6919589,17z/data=!3m1!4b1!4m6!3m5!1s0x3175297d3d9286a1:0x7d88df1bf1b424c7!8m2!3d10.8191021!4d106.6945392!16s%2Fg%2F11ym_blppn?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-800 font-semibold py-3 px-8 border border-gray-300 rounded-full shadow-sm hover:shadow transition-all group"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#4285F4] group-hover:scale-110 transition-transform" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              Đánh giá 5 Sao (Cơ sở Bình Thạnh)
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials / Call to action */}
      <section className="py-20 bg-primary-dark text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <ShieldCheck className="w-16 h-16 mx-auto mb-6 text-primary-light" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Đã đến lúc quan tâm sức khỏe thú cưng của bạn</h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10">
            Đừng chờ đến khi thú cưng có dấu hiệu bệnh mới đưa đi khám. Việc kiểm tra định kỳ giúp kéo dài tuổi thọ và nâng cao chất lượng sống cho các bé.
          </p>
          <a 
            href="tel:0946884344"
            className="inline-flex items-center justify-center gap-2 bg-primary-light hover:bg-white hover:text-primary-dark text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg"
          >
            <Phone className="w-6 h-6" />
            Gọi: 0946 884 344
          </a>
        </div>
      </section>
    </div>
  );
}
