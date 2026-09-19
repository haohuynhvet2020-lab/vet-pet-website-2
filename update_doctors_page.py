import re

with open('src/app/page.tsx', 'r', encoding='utf-8') as f:
    page_content = f.read()

start_marker = '<div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 max-w-6xl mx-auto">'
end_marker = '</div>\n            </div>\n          </section>'

start_idx = page_content.find(start_marker)
if start_idx == -1:
    # Try with line breaks
    start_marker = '<div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 max-w-6xl \nmx-auto">'
    start_idx = page_content.find(start_marker)
    if start_idx == -1:
        # Fallback regex
        match = re.search(r'<div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 max-w-6xl\s*mx-auto">', page_content)
        if match:
            start_idx = match.start()

end_idx = page_content.find('</section>', start_idx)

new_doctors_jsx = """<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { name: "BSTY. HUỲNH NHẬT HÀO", role: "Bác Sĩ Chính", image: "/doctor-hao.jpg" },
                { name: "BSTY. LÊ QUYỀN TRÂN", role: "Bác Sĩ Chính", image: "/doctor-tran-new.jpg" },
                { name: "BSTY. NGUYỄN HOÀNG PHÚ", role: "Bác Sĩ Nội Trú", image: "/doctor-phu-new.jpg" },
                { name: "BSTY. TRẦN THỊ THUÝ NGỌC", role: "Bác Sĩ Điều Trị", image: "/doctor-ngoc.jpg" },
                { name: "BSTY. KHÊ NỮ THUỶ TIÊN", role: "Bác Sĩ Điều Trị", image: "/doctor-tien.jpg" },
                { name: "BSTY. ĐẶNG THỊ TUYẾT NGA", role: "Bác Sĩ Điều Trị", image: "/doctor-nga.jpg" }
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
"""

if start_idx != -1 and end_idx != -1:
    new_page_content = page_content[:start_idx] + new_doctors_jsx + page_content[end_idx:]
    with open('src/app/page.tsx', 'w', encoding='utf-8') as f:
        f.write(new_page_content)
    print("Success")
else:
    print("Could not find markers")
