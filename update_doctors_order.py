import re

# Update src/app/gioi-thieu/page.tsx
with open('src/app/gioi-thieu/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

new_doctors_array = """  const doctors = [
    {
      name: "BSTY. HUỲNH NHẬT HÀO",
      role: "Bác Sĩ Chính",
      image: "/doctor-hao.jpg",
      description: "Thế mạnh về phẫu thuật ngoại khoa và xương khớp, bác sĩ Hào đã trực tiếp điều trị thành công hàng ngàn ca bệnh khó."
    },
    {
      name: "BSTY. ĐẶNG THỊ TUYẾT NGA",
      role: "Bác Sĩ Chính",
      image: "/doctor-nga.jpg",
      description: "Với kiến thức vững vàng và kinh nghiệm thực tiễn, bác sĩ Nga là người bạn đồng hành đáng tin cậy của mọi gia đình."
    },
    {
      name: "BSTY. LÊ QUYỀN TRÂN",
      role: "Bác Sĩ Nội Trú",
      image: "/doctor-tran-new.jpg",
      description: "Kinh nghiệm dày dặn trong chẩn đoán hình ảnh và điều trị bệnh lý phức tạp, mang lại sự an tâm tuyệt đối cho khách hàng."
    },
    {
      name: "BSTY. NGUYỄN HOÀNG PHÚ",
      role: "Bác Sĩ Nội Trú",
      image: "/doctor-phu-new.jpg",
      description: "Được đào tạo chuyên sâu về nội khoa, bác sĩ Phú luôn tận tâm theo dõi và chăm sóc sức khỏe toàn diện cho các bé thú cưng."
    },
    {
      name: "BSTY. TRẦN THỊ THUÝ NGỌC",
      role: "Bác Sĩ Nội Trú",
      image: "/doctor-ngoc.jpg",
      description: "Chuyên môn cao và tình yêu thương động vật sâu sắc, bác sĩ Ngọc luôn mang đến sự chăm sóc nhẹ nhàng và hiệu quả."
    },
    {
      name: "BSTY. KHÊ NỮ THUỶ TIÊN",
      role: "Bác Sĩ Nội Trú",
      image: "/doctor-tien.jpg",
      description: "Tận tâm và tỉ mỉ trong từng ca khám, bác sĩ Tiên luôn đảm bảo thú cưng nhận được phác đồ điều trị phù hợp nhất."
    }
  ];"""

content = re.sub(r'const doctors = \[.*?\n  \];', new_doctors_array, content, flags=re.DOTALL)

with open('src/app/gioi-thieu/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

# Update src/app/page.tsx
with open('src/app/page.tsx', 'r', encoding='utf-8') as f:
    page_content = f.read()

new_doctors_jsx = """<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { name: "BSTY. HUỲNH NHẬT HÀO", role: "Bác Sĩ Chính", image: "/doctor-hao.jpg" },
                { name: "BSTY. ĐẶNG THỊ TUYẾT NGA", role: "Bác Sĩ Chính", image: "/doctor-nga.jpg" },
                { name: "BSTY. LÊ QUYỀN TRÂN", role: "Bác Sĩ Nội Trú", image: "/doctor-tran-new.jpg" },
                { name: "BSTY. NGUYỄN HOÀNG PHÚ", role: "Bác Sĩ Nội Trú", image: "/doctor-phu-new.jpg" },
                { name: "BSTY. TRẦN THỊ THUÝ NGỌC", role: "Bác Sĩ Nội Trú", image: "/doctor-ngoc.jpg" },
                { name: "BSTY. KHÊ NỮ THUỶ TIÊN", role: "Bác Sĩ Nội Trú", image: "/doctor-tien.jpg" }
              ].map((doc, idx) => (
                <div key={idx} data-aos="fade-up" data-aos-delay={(idx % 3 + 1) * 100} className="group w-full flex flex-col items-center text-center">
                  <div className="relative w-full max-w-[280px] aspect-[3/4] rounded-2xl overflow-hidden mb-6 shadow-xl border border-gray-100">
                    <Image src={doc.image} alt={doc.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-primary-dark mb-2">{doc.name}</h3>
                  <p className="text-gray-500 font-medium">{doc.role}</p>
                </div>
              ))}
            </div>"""

page_content = re.sub(
    r'<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">.*?</div>\n*</div>',
    new_doctors_jsx + '\n          </div>',
    page_content,
    flags=re.DOTALL
)

with open('src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(page_content)
