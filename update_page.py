import re

with open('src/app/page.tsx', 'r', encoding='utf-8') as f:
    code = f.read()

# 1. Replace Hero section to include the features and remove the 3 white boxes section
hero_replacement = """            <div data-aos="fade-up" data-aos-delay="250" className="flex flex-col md:flex-row gap-6 mb-10">
              <div className="flex items-center gap-3 text-white">
                <div className="w-10 h-10 bg-primary-light/20 rounded-full flex items-center justify-center"><Stethoscope className="w-5 h-5 text-primary-light"/></div>
                <span className="font-semibold text-lg">Bác Sĩ Chuyên Môn</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <div className="w-10 h-10 bg-primary-light/20 rounded-full flex items-center justify-center"><Heart className="w-5 h-5 text-primary-light"/></div>
                <span className="font-semibold text-lg">Tận Tâm & Yêu Thương</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <div className="w-10 h-10 bg-primary-light/20 rounded-full flex items-center justify-center"><Clock className="w-5 h-5 text-primary-light"/></div>
                <span className="font-semibold text-lg">Hỗ Trợ Nhanh Chóng</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">"""
code = code.replace('<div className="flex flex-col sm:flex-row gap-4">', hero_replacement)

# Remove the features section and add the Doctors section
doctors_section = """
      {/* Doctors Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 data-aos="fade-up" className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Đội Ngũ Bác Sĩ Chuyên Môn</h2>
            <p data-aos="fade-up" data-aos-delay="100" className="text-gray-600 max-w-2xl mx-auto text-lg">Với chuyên môn cao và tình yêu thương động vật, đội ngũ y bác sĩ tại VET&PET luôn sẵn sàng mang lại sự chăm sóc tốt nhất cho thú cưng của bạn.</p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 max-w-5xl mx-auto">
            {/* Doctor 1 */}
            <div data-aos="fade-up" data-aos-delay="100" className="group w-full md:w-1/2 flex flex-col items-center">
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden mb-6 shadow-xl border border-gray-100">
                <Image src="/doctor-phu.jpg" alt="BSTY Nguyễn Hoàng Phú" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold text-primary-dark mb-2">BSTY. NGUYỄN HOÀNG PHÚ</h3>
              <p className="text-gray-500 font-medium">Bác Sĩ Điều Trị Chính</p>
            </div>
            {/* Doctor 2 */}
            <div data-aos="fade-up" data-aos-delay="200" className="group w-full md:w-1/2 flex flex-col items-center">
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden mb-6 shadow-xl border border-gray-100">
                <Image src="/doctor-tran.jpg" alt="BSTY Lê Quyền Trân" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold text-primary-dark mb-2">BSTY. LÊ QUYỀN TRÂN</h3>
              <p className="text-gray-500 font-medium">Bác Sĩ Chăm Sóc & Siêu Âm</p>
            </div>
          </div>
        </div>
      </section>
"""

code = re.sub(r'\{/\* Features/Why Choose Us \*/\}.*?</section>', doctors_section, code, flags=re.DOTALL)

# Remove "Kiến Thức Hữu Ích"
code = re.sub(r'<h2.*?Kiến Thức Hữu Ích.*?</h2>', '', code)

with open('src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(code)
