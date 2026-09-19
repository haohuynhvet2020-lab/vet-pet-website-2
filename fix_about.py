import re

with open('src/app/gioi-thieu/page.tsx', 'r', encoding='utf-8') as f:
    about_content = f.read()

# 1. Fix doctor images in gioi-thieu
about_content = about_content.replace(
    '<div className="relative h-[350px] w-full overflow-hidden">',
    '<div className="relative aspect-[3/4] w-full overflow-hidden bg-[#021428]">'
)

# 2. Add groomers array if not exists
if 'const groomers = [' not in about_content:
    groomers_array = """
  const groomers = [
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
  ];
"""
    about_content = about_content.replace('const doctors = [', groomers_array + '\n  const doctors = [')


# 3. Add Groomers section if not exists
if 'Đội Ngũ Grooming - Spa' not in about_content:
    groomers_jsx_about = """
        {/* Groomers */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 uppercase">Đội Ngũ Grooming - Spa</h2>
            <p className="text-gray-600 text-lg">Bên cạnh y tế, đội ngũ chuyên viên Grooming - Spa tận tâm của VET&PET sẽ mang lại vẻ ngoài hoàn hảo và trải nghiệm thư giãn nhất cho các bé.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {groomers.map((doc, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden text-center hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#021428]">
                  <Image src={doc.image} alt={doc.name} fill className="object-contain group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary-dark mb-1">{doc.name}</h3>
                  <p className="text-primary-light font-bold mb-4">{doc.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{doc.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
"""
    # Insert after doctors section
    # Find the end of doctors map
    # </div>\n            ))}\n          </div>\n        </div>
    end_doctors = '</div>\n            ))}\n          </div>\n        </div>'
    if end_doctors in about_content:
        about_content = about_content.replace(end_doctors, end_doctors + '\n' + groomers_jsx_about)


with open('src/app/gioi-thieu/page.tsx', 'w', encoding='utf-8') as f:
    f.write(about_content)

print("Fixed gioi-thieu completely")
