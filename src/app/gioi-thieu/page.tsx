import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

export default function AboutPage() {
  const doctors = [
    {
      name: "BS. Nguyễn Văn A",
      role: "Trưởng khoa Ngoại Khoa",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800",
      description: "Hơn 10 năm kinh nghiệm trong phẫu thuật chấn thương và ngoại khoa cho chó mèo."
    },
    {
      name: "BS. Trần Thị B",
      role: "Chuyên khoa Nội Khoa",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800",
      description: "Chuyên gia chẩn đoán và điều trị các bệnh truyền nhiễm, hô hấp và tiêu hoá."
    },
    {
      name: "BS. Lê Hoàng C",
      role: "Chuyên gia Dinh Dưỡng",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800",
      description: "Tư vấn chế độ ăn uống chuyên biệt giúp thú cưng phục hồi nhanh và khoẻ mạnh."
    }
  ];

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-primary-dark mb-4">Về VET & PET</h1>
          <p className="text-gray-600 text-lg">
            Khởi nguồn từ tình yêu thương vô bờ bến với động vật, VET & PET được thành lập với sứ mệnh mang đến những dịch vụ y tế thú y chất lượng cao, an toàn và chuyên nghiệp nhất.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image 
              src="https://images.unsplash.com/photo-1596272875729-4155b027d142?auto=format&fit=crop&q=80&w=1000" 
              alt="Clinic" 
              fill 
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Tầm Nhìn & Sứ Mệnh</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary-light shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-xl mb-1">Chất lượng hàng đầu</h3>
                  <p className="text-gray-600">Không ngừng cập nhật trang thiết bị, máy móc y tế hiện đại nhất phục vụ việc chẩn đoán chính xác.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary-light shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-xl mb-1">Tận tâm phục vụ</h3>
                  <p className="text-gray-600">Lấy sự thoải mái và an toàn của thú cưng làm trung tâm. Luôn nhẹ nhàng, ân cần và thấu hiểu.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary-light shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-xl mb-1">Cộng đồng khoẻ mạnh</h3>
                  <p className="text-gray-600">Mục tiêu xây dựng một cộng đồng thú cưng khỏe mạnh, phát triển các chương trình tiêm phòng và phúc lợi động vật.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Doctors */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Đội Ngũ Bác Sĩ</h2>
            <p className="text-gray-600">Những người khoác áo blouse mang trái tim yêu thương động vật.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {doctors.map((doc, idx) => (
              <div key={idx} className="bg-secondary rounded-xl overflow-hidden text-center hover:shadow-xl transition-shadow border border-gray-100">
                <div className="relative h-72 w-full">
                  <Image src={doc.image} alt={doc.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary-dark mb-1">{doc.name}</h3>
                  <p className="text-primary-light font-medium mb-4">{doc.role}</p>
                  <p className="text-gray-600 text-sm">{doc.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
