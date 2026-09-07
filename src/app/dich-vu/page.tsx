import Image from 'next/image';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      title: "Khám Tổng Quát",
      image: "https://images.unsplash.com/photo-1628009368231-7bb7cb281862?auto=format&fit=crop&q=80&w=800",
      description: "Khám sức khỏe định kỳ giúp phát hiện và điều trị kịp thời các bệnh lý tiềm ẩn, đảm bảo thú cưng luôn trong trạng thái tốt nhất."
    },
    {
      title: "Siêu Âm & Chụp X-Ray",
      image: "https://images.unsplash.com/photo-1599422314077-f4dfdaa4cd09?auto=format&fit=crop&q=80&w=800",
      description: "Chẩn đoán hình ảnh chính xác, rõ nét giúp xác định nhanh chóng các vấn đề nội tạng, xương khớp mà không xâm lấn."
    },
    {
      title: "Xét Nghiệm Máu",
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=800",
      description: "Hệ thống máy xét nghiệm hiện đại, cho kết quả nhanh chóng, chuẩn xác. Hỗ trợ đắc lực cho việc chẩn đoán bệnh lý."
    },
    {
      title: "Phẫu Thuật Xương Khớp",
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=800",
      description: "Xử lý các ca chấn thương phức tạp, kết hợp xương an toàn và hiệu quả với hệ thống phòng mổ vô trùng tiêu chuẩn."
    },
    {
      title: "Lưu Trú - Hotel",
      image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&q=80&w=800",
      description: "Không gian lưu chuồng sạch sẽ, thoáng mát, khử khuẩn thường xuyên. Chế độ chăm sóc chuẩn mực khi bạn đi vắng."
    },
    {
      title: "Tiêm Phòng & Tẩy Giun",
      image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=800",
      description: "Cung cấp đầy đủ các loại vaccine phòng bệnh truyền nhiễm nguy hiểm. Lịch trình tiêm phòng chuẩn quốc tế."
    },
    {
      title: "Spa & Grooming",
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800",
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
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg group">
                  <Image src={svc.image} alt={svc.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
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
