import re

with open('src/app/dich-vu/page.tsx', 'r', encoding='utf-8') as f:
    code = f.read()

services_list = """
  const services = [
    {
      title: "Khám Tổng Quát",
      image: "/kham-benh-1.jpg",
      description: "Khám sức khỏe định kỳ giúp phát hiện và điều trị kịp thời các bệnh lý tiềm ẩn, đảm bảo thú cưng luôn trong trạng thái tốt nhất."
    },
    {
      title: "Siêu Âm & Chụp X-Ray",
      image: "/service-sieuam.jpg",
      description: "Chẩn đoán hình ảnh chính xác, rõ nét giúp xác định nhanh chóng các vấn đề nội tạng, xương khớp mà không xâm lấn."
    },
    {
      title: "Xét Nghiệm Sinh Hóa - Huyết Học",
      image: "/service-xetnghiem1.jpg",
      description: "Hệ thống máy xét nghiệm hiện đại, cho kết quả nhanh chóng, chuẩn xác. Hỗ trợ đắc lực cho việc chẩn đoán bệnh lý."
    },
    {
      title: "Phẫu Thuật Mô Mềm",
      image: "/service-phauthuat1.jpg",
      description: "Đội ngũ bác sĩ tay nghề cao, trang thiết bị phòng mổ vô trùng an toàn tuyệt đối cho các ca phẫu thuật mô mềm."
    },
    {
      title: "Phẫu Thuật Xương Khớp",
      image: "/service-phauthuat2.jpg",
      description: "Xử lý các ca chấn thương phức tạp, kết hợp xương an toàn và hiệu quả với hệ thống phòng mổ vô trùng tiêu chuẩn."
    },
    {
      title: "Tiêm Phòng & Tẩy Giun",
      image: "/kham-benh-2.jpg",
      description: "Cung cấp đầy đủ các loại vaccine phòng bệnh truyền nhiễm nguy hiểm. Lịch trình tiêm phòng chuẩn quốc tế."
    },
    {
      title: "Lưu Trú - Hotel",
      image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&q=80&w=800",
      description: "Không gian lưu chuồng sạch sẽ, thoáng mát, khử khuẩn thường xuyên. Chế độ chăm sóc chuẩn mực khi bạn đi vắng."
    },
    {
      title: "Spa & Grooming",
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800",
      description: "Dịch vụ tắm gội, cắt tỉa lông nghệ thuật, vệ sinh tai móng giúp thú cưng luôn sạch sẽ, thơm tho và lộng lẫy."
    }
  ];
"""

# Replace the services array
code = re.sub(r'const services = \[.*?\n  \];', services_list.strip(), code, flags=re.DOTALL)

with open('src/app/dich-vu/page.tsx', 'w', encoding='utf-8') as f:
    f.write(code)
