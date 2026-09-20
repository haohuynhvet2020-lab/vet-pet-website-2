import re

file_path = 'src/app/page.tsx'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Remove Dan Ngoc from the bottom
content = content.replace(
    '},\n                { name: "BSTY. VÕ HỒNG ĐAN NGỌC", role: "Bác Sĩ Nội Trú", image: "/doctor-dan-ngoc.jpg" }',
    '}'
)

# Insert Dan Ngoc after Le Quyen Tran
content = content.replace(
    '{ name: "BSTY. LÊ QUYỀN TRÂN", role: "Bác Sĩ Chính", image: "/doctor-tran-new.jpg" },',
    '{ name: "BSTY. LÊ QUYỀN TRÂN", role: "Bác Sĩ Chính", image: "/doctor-tran-new.jpg" },\n                { name: "BSTY. VÕ HỒNG ĐAN NGỌC", role: "Bác Sĩ Chính", image: "/doctor-dan-ngoc.jpg" },'
)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

file_path = 'src/app/gioi-thieu/page.tsx'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Remove Dan Ngoc from the bottom
dan_ngoc_str = """,
    {
      name: "BSTY. VÕ HỒNG ĐAN NGỌC",
      role: "Bác Sĩ Nội Trú",
      image: "/doctor-dan-ngoc.jpg",
      description: "Với sự cẩn thận và tình yêu thương động vật, bác sĩ Đan Ngọc luôn mang đến sự an tâm và chăm sóc tận tình cho các bé thú cưng."
    }"""
content = content.replace(dan_ngoc_str, "")

# Insert Dan Ngoc after Le Quyen Tran
tran_str = """    {
      name: "BSTY. LÊ QUYỀN TRÂN",
      role: "Bác Sĩ Chính",
      image: "/doctor-tran-new.jpg",
      description: "Với chuyên môn cao và tình yêu thương động vật, bác sĩ Quyền Trân luôn mang đến sự an tâm tuyệt đối cho khách hàng khi gửi gắm thú cưng."
    },"""
dan_ngoc_insert = """
    {
      name: "BSTY. VÕ HỒNG ĐAN NGỌC",
      role: "Bác Sĩ Chính",
      image: "/doctor-dan-ngoc.jpg",
      description: "Với sự cẩn thận và tình yêu thương động vật, bác sĩ Đan Ngọc luôn mang đến sự an tâm và chăm sóc tận tình cho các bé thú cưng."
    },"""

content = content.replace(tran_str, tran_str + dan_ngoc_insert)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated Dan Ngoc role and position")
