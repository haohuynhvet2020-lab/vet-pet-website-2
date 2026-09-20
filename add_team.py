import re

# Update src/app/page.tsx
with open('src/app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Insert new doctor
content = content.replace(
    '{ name: "BSTY. KHÊ NỮ THUỶ TIÊN", role: "Bác Sĩ Nội Trú", image: "/doctor-tien.jpg" }',
    '{ name: "BSTY. KHÊ NỮ THUỶ TIÊN", role: "Bác Sĩ Nội Trú", image: "/doctor-tien.jpg" },\n                { name: "BSTY. VÕ HỒNG ĐAN NGỌC", role: "Bác Sĩ Nội Trú", image: "/doctor-dan-ngoc.jpg" }'
)

# Insert new groomer
# Wait, in page.tsx, Ngoc Tuyen might have role "Chuyên Viên Spa" or "Chuyên Viên Spa Chuyên Nghiệp"
content = content.replace(
    '{ name: "LÊ NGUYỄN NGỌC TUYỀN", role: "Chuyên Viên Spa", image: "/groomer-tuyen-v2.jpg" }',
    '{ name: "LÊ NGUYỄN NGỌC TUYỀN", role: "Chuyên Viên Spa", image: "/groomer-tuyen-v2.jpg" },\n                { name: "NGUYỄN NGỌC THIÊN THANH", role: "Groomer Chuyên Nghiệp", image: "/groomer-thanh.jpg" }'
)
# Just in case the role was different:
content = content.replace(
    '{ name: "LÊ NGUYỄN NGỌC TUYỀN", role: "Chuyên Viên Spa Chuyên Nghiệp", image: "/groomer-tuyen-v2.jpg" }',
    '{ name: "LÊ NGUYỄN NGỌC TUYỀN", role: "Chuyên Viên Spa Chuyên Nghiệp", image: "/groomer-tuyen-v2.jpg" },\n                { name: "NGUYỄN NGỌC THIÊN THANH", role: "Groomer Chuyên Nghiệp", image: "/groomer-thanh.jpg" }'
)

with open('src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

# Update src/app/gioi-thieu/page.tsx
with open('src/app/gioi-thieu/page.tsx', 'r', encoding='utf-8') as f:
    about_content = f.read()

# Insert new doctor in gioi-thieu
# Look for the end of the doctors array
doc_insert = """,
    {
      name: "BSTY. VÕ HỒNG ĐAN NGỌC",
      role: "Bác Sĩ Nội Trú",
      image: "/doctor-dan-ngoc.jpg",
      description: "Với sự cẩn thận và tình yêu thương động vật, bác sĩ Đan Ngọc luôn mang đến sự an tâm và chăm sóc tận tình cho các bé thú cưng."
    }"""
about_content = about_content.replace(
    'image: "/doctor-tien.jpg",\n      description: "Tận tâm và tỉ mỉ trong từng ca khám, bác sĩ Tiên luôn đảm bảo thú cưng nhận được phác đồ điều trị phù hợp nhất."\n    }',
    'image: "/doctor-tien.jpg",\n      description: "Tận tâm và tỉ mỉ trong từng ca khám, bác sĩ Tiên luôn đảm bảo thú cưng nhận được phác đồ điều trị phù hợp nhất."\n    }' + doc_insert
)

# Insert new groomer in gioi-thieu
groomer_insert = """,
    {
      name: "NGUYỄN NGỌC THIÊN THANH",
      role: "Groomer Chuyên Nghiệp",
      image: "/groomer-thanh.jpg",
      description: "Tỉ mỉ và khéo léo trong từng đường kéo, Thiên Thanh luôn biến các bé thú cưng trở nên xinh đẹp và gọn gàng nhất."
    }"""
about_content = about_content.replace(
    'image: "/groomer-tuyen-v2.jpg",\n      description: "Am hiểu sâu sắc về chăm sóc da và lông thú cưng, Ngọc Tuyền cung cấp các liệu trình spa chuyên sâu giúp các bé luôn sạch sẽ, khỏe mạnh và thơm tho."\n    }',
    'image: "/groomer-tuyen-v2.jpg",\n      description: "Am hiểu sâu sắc về chăm sóc da và lông thú cưng, Ngọc Tuyền cung cấp các liệu trình spa chuyên sâu giúp các bé luôn sạch sẽ, khỏe mạnh và thơm tho."\n    }' + groomer_insert
)

with open('src/app/gioi-thieu/page.tsx', 'w', encoding='utf-8') as f:
    f.write(about_content)

print("Added new team members")
