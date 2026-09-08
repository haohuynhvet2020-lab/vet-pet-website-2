import re

with open('src/app/page.tsx', 'r', encoding='utf-8') as f:
    code = f.read()

doctors_section = """
            <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 max-w-6xl mx-auto">
              {/* Doctor 1 */}
              <div data-aos="fade-up" data-aos-delay="100" className="group w-full md:w-1/3 flex flex-col items-center text-center">
                <div className="relative w-full max-w-[280px] aspect-[3/4] rounded-2xl overflow-hidden mb-6 shadow-xl border border-gray-100">
                  <Image src="/doctor-phu.jpg" alt="BSTY Nguyễn Hoàng Phú" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-primary-dark mb-2">BSTY. NGUYỄN HOÀNG PHÚ</h3>
                <p className="text-gray-500 font-medium">Bác Sĩ Điều Trị Chính</p>
              </div>
              {/* Doctor 2 */}
              <div data-aos="fade-up" data-aos-delay="200" className="group w-full md:w-1/3 flex flex-col items-center text-center">
                <div className="relative w-full max-w-[280px] aspect-[3/4] rounded-2xl overflow-hidden mb-6 shadow-xl border border-gray-100">
                  <Image src="/doctor-tran.jpg" alt="BSTY Lê Quyền Trân" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-primary-dark mb-2">BSTY. LÊ QUYỀN TRÂN</h3>
                <p className="text-gray-500 font-medium">Bác Sĩ Chăm Sóc & Siêu Âm</p>
              </div>
              {/* Doctor 3 */}
              <div data-aos="fade-up" data-aos-delay="300" className="group w-full md:w-1/3 flex flex-col items-center text-center">
                <div className="relative w-full max-w-[280px] aspect-[3/4] rounded-2xl overflow-hidden mb-6 shadow-xl border border-gray-100">
                  <Image src="/doctor-hao.jpg" alt="BSTY Huỳnh Nhật Hào" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-primary-dark mb-2">BSTY. HUỲNH NHẬT HÀO</h3>
                <p className="text-gray-500 font-medium">Bác Sĩ Cận Lâm Sàng</p>
              </div>
            </div>
"""

# Replace the inner div of doctors section
code = re.sub(
    r'<div className="flex flex-col md:flex-row justify-center items-center gap-12 max-w-5xl mx-auto">.*?</div>\s*</div>\s*</section>',
    doctors_section.strip() + '\n          </div>\n        </section>',
    code,
    flags=re.DOTALL
)

with open('src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(code)
