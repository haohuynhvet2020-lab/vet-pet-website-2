import re

with open('src/app/page.tsx', 'r', encoding='utf-8') as f:
    code = f.read()

# 1. Add import
if 'ServiceCarousel' not in code:
    code = code.replace("import { getAllArticles } from '@/lib/articles';", "import { getAllArticles } from '@/lib/articles';\nimport { ServiceCarousel } from '@/components/ServiceCarousel';")

# 2. Resize doctor images
code = code.replace(
    'className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden mb-6 shadow-xl border border-gray-100"',
    'className="relative w-full max-w-[280px] aspect-[3/4] rounded-2xl overflow-hidden mb-6 shadow-xl border border-gray-100"'
)

# 3. Add Services Section below Doctors Section
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

code = code.replace('        </section>\n\n\n      {/* Handbook', '        </section>\n' + services_section + '\n\n      {/* Handbook')

with open('src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(code)
