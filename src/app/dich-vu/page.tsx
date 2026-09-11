import Image from 'next/image';
import Link from 'next/link';
import { ServiceImageSlider } from '@/components/ServiceImageSlider';

export default function ServicesPage() {
  const services = [
    {
      title: "Khám Tổng Quát",
      images: ["/kham-benh-1.jpg", "/kham-benh-2.jpg", "/kham-benh-3.jpg"],
      description: "Khám sức khỏe định kỳ giúp phát hiện và điều trị kịp thời các bệnh lý tiềm ẩn, đảm bảo thú cưng luôn trong trạng thái tốt nhất."
    },
    {
      title: "Siêu Âm",
      images: ["/dich-vu-sieu-am.jpg"],
      description: "Chẩn đoán hình ảnh siêu âm chính xác, rõ nét giúp xác định nhanh chóng các vấn đề nội tạng một cách an toàn, không xâm lấn."
    },
    {
      title: "Chụp X-Ray",
      images: ["/dich-vu-xray.jpg"],
      description: "Hệ thống chụp X-quang kỹ thuật số hiện đại, hỗ trợ đắc lực trong việc chẩn đoán các bệnh lý về xương khớp, hô hấp, tuần hoàn."
    },
    {
      title: "Xét Nghiệm Sinh Hóa - Huyết Học",
      images: ["/service-xetnghiem1.jpg"],
      description: "Hệ thống máy xét nghiệm hiện đại, cho kết quả nhanh chóng, chuẩn xác. Hỗ trợ đắc lực cho việc chẩn đoán bệnh lý."
    },
    {
      title: "Phẫu Thuật Mô Mềm",
      images: ["/service-phauthuat1.jpg"],
      description: "Đội ngũ bác sĩ tay nghề cao, trang thiết bị phòng mổ vô trùng an toàn tuyệt đối cho các ca phẫu thuật mô mềm."
    },
    {
      title: "Phẫu Thuật Xương Khớp",
      images: ["/service-phauthuat2.jpg"],
      description: "Xử lý các ca chấn thương phức tạp, kết hợp xương an toàn và hiệu quả với hệ thống phòng mổ vô trùng tiêu chuẩn."
    },
    {
      title: "Tiêm Phòng & Tẩy Giun",
      images: ["/kham-benh-2.jpg"],
      description: "Cung cấp đầy đủ các loại vaccine phòng bệnh truyền nhiễm nguy hiểm. Lịch trình tiêm phòng chuẩn quốc tế."
    },
    {
      title: "Nội Trú Điều Trị - Hotel",
      images: ["/dich-vu-noitru.jpg"],
      description: "Không gian lưu trú điều trị vô trùng, theo dõi sức khỏe 24/7. Chế độ chăm sóc chuẩn y khoa giúp thú cưng mau chóng hồi phục."
    },
    {
      title: "Spa & Grooming",
      images: ["/dich-vu-spa.jpg"],
      description: "Dịch vụ tắm gội, cắt tỉa lông nghệ thuật, vệ sinh tai móng giúp thú cưng luôn sạch sẽ, thơm tho và lộng lẫy."
    }
  ];

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-primary-dark mb-4">Dịch Vụ Của Chúng Tôi</h1>
          <p className="text-gray-600 text-lg">
            Đa dạng các dịch vụ y tế và chăm sóc toàn diện, VET & PET luôn nỗ lực mang lại những trải nghiệm nhẹ nhàng nhất cho thú cưng.
          </p>
        </div>

        <div className="space-y-12">
          {services.map((svc, idx) => (
            <div key={idx} className={`flex flex-col md:flex-row gap-8 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="w-full md:w-1/2">
                <ServiceImageSlider images={svc.images} title={svc.title} />
              </div>
              <div className="w-full md:w-1/2 p-4">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{svc.title}</h2>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">{svc.description}</p>
                <Link href="/lien-he" className="inline-block bg-primary-light text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-500 transition-colors shadow-md hover:shadow-lg">
                  Tư vấn & Đặt lịch
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
