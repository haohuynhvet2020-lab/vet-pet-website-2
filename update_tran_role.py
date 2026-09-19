import re

# Update src/app/gioi-thieu/page.tsx
with open('src/app/gioi-thieu/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace(
    'name: "BSTY. LÊ QUYỀN TRÂN",\n      role: "Bác Sĩ Nội Trú",',
    'name: "BSTY. LÊ QUYỀN TRÂN",\n      role: "Bác Sĩ Chính",'
)

with open('src/app/gioi-thieu/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

# Update src/app/page.tsx
with open('src/app/page.tsx', 'r', encoding='utf-8') as f:
    page_content = f.read()

page_content = page_content.replace(
    '{ name: "BSTY. LÊ QUYỀN TRÂN", role: "Bác Sĩ Nội Trú", image: "/doctor-tran-new.jpg" }',
    '{ name: "BSTY. LÊ QUYỀN TRÂN", role: "Bác Sĩ Chính", image: "/doctor-tran-new.jpg" }'
)

with open('src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(page_content)

print("Updated Tran to Bac Si Chinh")
