import re

with open('src/app/page.tsx', 'r', encoding='utf-8') as f:
    code = f.read()

services_section = """
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
"""

if 'ServiceCarousel />' not in code:
    code = re.sub(r'(\s*\{/\* Handbook)', r'\n' + services_section + r'\1', code)
    with open('src/app/page.tsx', 'w', encoding='utf-8') as f:
        f.write(code)
