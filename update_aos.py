import re

with open('src/app/page.tsx', 'r', encoding='utf-8') as f:
    code = f.read()

code = code.replace(
    '<div className="bg-white rounded-xl overflow-hidden shadow-md group hover:shadow-xl transition-all border border-gray-100">', 
    '<div data-aos="fade-up" className="bg-white rounded-xl overflow-hidden shadow-md group hover:shadow-xl transition-all border border-gray-100">'
)
code = code.replace(
    '<h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">', 
    '<h1 data-aos="fade-up" className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">'
)
code = code.replace(
    '<p className="text-xl md:text-2xl mb-8 max-w-2xl">', 
    '<p data-aos="fade-up" data-aos-delay="200" className="text-xl md:text-2xl mb-8 max-w-2xl">'
)
code = code.replace(
    '<div className="bg-secondary p-8 rounded-2xl shadow-sm border border-gray-100 relative flex flex-col">', 
    '<div data-aos="zoom-in" className="bg-secondary p-8 rounded-2xl shadow-sm border border-gray-100 relative flex flex-col">'
)

with open('src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(code)
