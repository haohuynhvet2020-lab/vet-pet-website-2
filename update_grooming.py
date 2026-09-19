import re

# ==========================================
# 1. Update src/app/gioi-thieu/page.tsx
# ==========================================
with open('src/app/gioi-thieu/page.tsx', 'r', encoding='utf-8') as f:
    about_content = f.read()

groomers_jsx_about = """
          {/* Groomers Section */}
          <div className="text-center mb-16 mt-24">
            <h2 className="text-3xl font-bold text-primary-dark mb-4 uppercase">Đội Ngũ Grooming - Spa</h2>
            <div className="w-24 h-1 bg-primary-light mx-auto rounded-full mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Bên cạnh dịch vụ y tế, VET&PET còn tự hào sở hữu đội ngũ chuyên viên Grooming - Spa dày dặn kinh nghiệm, mang đến những trải nghiệm làm đẹp tuyệt vời và thư giãn nhất cho thú cưng của bạn.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "TRẦN THỊ MỸ LINH",
                role: "Groomer Chuyên Nghiệp",
                image: "/groomer-linh.jpg",
                description: "Với đôi bàn tay khéo léo và gu thẩm mỹ tinh tế, Mỹ Linh luôn biết cách biến hóa để các bé thú cưng trở nên xinh xắn và đáng yêu nhất."
              },
              {
                name: "NGUYỄN THANH TÚ",
                role: "Groomer Chuyên Nghiệp",
                image: "/groomer-tu.jpg",
                description: "Đam mê và nhiệt huyết với nghề, Thanh Tú không chỉ mang lại vẻ ngoài hoàn hảo mà còn giúp các bé cảm thấy thư giãn, thoải mái trong suốt quá trình làm đẹp."
              },
              {
                name: "LỄ NGUYỄN NGỌC TUYỀN",
                role: "Chuyên Viên Spa Chuyên Nghiệp",
                image: "/groomer-tuyen.jpg",
                description: "Am hiểu sâu sắc về chăm sóc da và lông thú cưng, Ngọc Tuyền cung cấp các liệu trình spa chuyên sâu giúp các bé luôn sạch sẽ, khỏe mạnh và thơm tho."
              }
            ].map((groomer, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="relative w-full aspect-[3/4]">
                  <Image
                    src={groomer.image}
                    alt={groomer.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-primary-dark mb-1">{groomer.name}</h3>
                  <p className="text-primary-light font-medium mb-3">{groomer.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{groomer.description}</p>
                </div>
              </div>
            ))}
          </div>
"""

# Insert right after the doctors grid
end_doctors_grid = '</div>'
# We need to find the doctors grid end.
# It starts with `<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">`
match = re.search(r'(<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">.*?</div>)', about_content, flags=re.DOTALL)
if match:
    old_grid = match.group(1)
    about_content = about_content.replace(old_grid, old_grid + groomers_jsx_about)

with open('src/app/gioi-thieu/page.tsx', 'w', encoding='utf-8') as f:
    f.write(about_content)


# ==========================================
# 2. Update src/app/page.tsx
# ==========================================
with open('src/app/page.tsx', 'r', encoding='utf-8') as f:
    page_content = f.read()

groomers_jsx_home = """
        {/* Groomers Section */}
        <section className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 data-aos="fade-up" className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Đội Ngũ Grooming - Spa</h2>
              <p data-aos="fade-up" data-aos-delay="100" className="text-gray-600 max-w-2xl mx-auto text-lg">
                Bên cạnh y tế, đội ngũ chuyên viên Grooming - Spa tận tâm của VET&PET sẽ mang lại vẻ ngoài hoàn hảo và trải nghiệm thư giãn nhất cho các bé.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { name: "TRẦN THỊ MỸ LINH", role: "Groomer Chuyên Nghiệp", image: "/groomer-linh.jpg" },
                { name: "NGUYỄN THANH TÚ", role: "Groomer Chuyên Nghiệp", image: "/groomer-tu.jpg" },
                { name: "LỄ NGUYỄN NGỌC TUYỀN", role: "Chuyên Viên Spa", image: "/groomer-tuyen.jpg" }
              ].map((doc, idx) => (
                <div key={idx} data-aos="fade-up" data-aos-delay={(idx % 3 + 1) * 100} className="group w-full flex flex-col items-center text-center">
                  <div className="relative w-full max-w-[280px] aspect-[3/4] rounded-2xl overflow-hidden mb-6 shadow-xl border border-gray-100">
                    <Image src={doc.image} alt={doc.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-primary-dark mb-2">{doc.name}</h3>
                  <p className="text-gray-500 font-medium">{doc.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
"""

# Find where Featured Services starts
featured_services_marker = '{/* Featured Services Section */}'
page_content = page_content.replace(featured_services_marker, groomers_jsx_home + '\n' + featured_services_marker)

# Change Featured Services background from bg-gray-50 to bg-white
page_content = page_content.replace(
    'className="py-20 bg-gray-50 border-t border-gray-100"',
    'className="py-20 bg-white border-t border-gray-100"'
)

with open('src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(page_content)

print("Updated both pages with Grooming section")
