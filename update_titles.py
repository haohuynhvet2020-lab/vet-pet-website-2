with open('src/app/page.tsx', 'r', encoding='utf-8') as f:
    code = f.read()

# Replace Phú
code = code.replace(
    '<p className="text-gray-500 font-medium">Bác Sĩ Điều Trị Chính</p>',
    '<p className="text-gray-500 font-medium">Bác Sĩ Nội Trú</p>'
)

# Replace Trân
code = code.replace(
    '<p className="text-gray-500 font-medium">Bác Sĩ Chăm Sóc & Siêu Âm</p>',
    '<p className="text-gray-500 font-medium">Bác Sĩ Chính</p>'
)

# Replace Hào
code = code.replace(
    '<p className="text-gray-500 font-medium">Bác Sĩ Cận Lâm Sàng</p>',
    '<p className="text-gray-500 font-medium">Bác Sĩ Chính</p>'
)

with open('src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(code)
