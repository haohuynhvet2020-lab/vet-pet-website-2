import Image from 'next/image';

export default function CasesPage() {
  const cases = [
    {
      title: "Phục hồi chấn thương xương đùi sau tai nạn",
      petType: "Chó Poodle",
      image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&q=80&w=800",
      description: "Bé cún bị xe máy va quẹt dẫn đến gãy xương đùi. Đội ngũ bác sĩ đã tiến hành phẫu thuật kết hợp xương. Sau 4 tuần, bé đã có thể đi lại bình thường."
    },
    {
      title: "Điều trị viêm da do Demodex",
      petType: "Chó Pug",
      image: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&q=80&w=800",
      description: "Bé nhập viện trong tình trạng rụng lông toàn thân, mẩn đỏ và ngứa dữ dội. Trải qua liệu trình điều trị 2 tháng kết hợp tắm thuốc, da bé đã phục hồi hoàn toàn."
    },
    {
      title: "Cấp cứu và loại bỏ dị vật trong dạ dày",
      petType: "Mèo Anh Lông Ngắn",
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800",
      description: "Bé nuốt phải đồ chơi nhỏ dẫn đến tắc ruột, nôn mửa liên tục. Các bác sĩ đã nhanh chóng phẫu thuật nội soi lấy dị vật an toàn."
    },
    {
      title: "Điều trị Care (Canine Distemper) ở giai đoạn đầu",
      petType: "Chó Corgi",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800",
      description: "Được phát hiện sớm qua test nhanh, bé được điều trị tích cực bằng kháng huyết thanh và truyền dịch. May mắn bé đã vượt qua căn bệnh nguy hiểm."
    }
  ];

  return (
    <div className="py-12 bg-secondary min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-primary-dark mb-4">Ca Bệnh Tham Khảo</h1>
          <p className="text-gray-600 text-lg">
            Hồ sơ những ca bệnh tiêu biểu đã được đội ngũ bác sĩ VET & PET điều trị thành công. Mỗi sự sống đều đáng được trân trọng.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((c, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col sm:flex-row">
              <div className="relative h-64 sm:h-auto sm:w-2/5 shrink-0">
                <Image src={c.image} alt={c.title} fill className="object-cover" />
              </div>
              <div className="p-6 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 bg-blue-50 text-primary-dark text-xs font-bold rounded-full mb-3 w-fit">
                  {c.petType}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{c.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{c.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
