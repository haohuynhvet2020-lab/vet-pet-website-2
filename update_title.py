import re

with open('src/app/cam-nang/page.tsx', 'r', encoding='utf-8') as f:
    code = f.read()

code = code.replace(
    '<h1 className="text-3xl font-bold text-primary-dark mb-2">Cẩm Nang Chuyên Gia</h1>',
    '<h1 className="text-3xl md:text-4xl font-bold text-primary-dark mb-2">CẨM NANG CHĂM SÓC VÀ CA BỆNH TẠI VET&PET</h1>'
)

with open('src/app/cam-nang/page.tsx', 'w', encoding='utf-8') as f:
    f.write(code)
