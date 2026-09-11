import re

def escape_jsx_string(text):
    return text.replace('"', '&quot;').replace("'", "&apos;")

# Fix gioi-thieu
with open('src/app/gioi-thieu/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace(
    '''"Chúng tôi tâm niệm rằng: Quá trình chữa lành không chỉ đến từ máy móc hay thuốc men, mà còn bắt nguồn từ sự thấu cảm, trân trọng sinh mệnh và cái 'tâm' của người làm nghề."''',
    '''&quot;Chúng tôi tâm niệm rằng: Quá trình chữa lành không chỉ đến từ máy móc hay thuốc men, mà còn bắt nguồn từ sự thấu cảm, trân trọng sinh mệnh và cái &apos;tâm&apos; của người làm nghề.&quot;'''
)

content = content.replace(
    '''"Hành trình hơn một thập kỷ gắn bó với nghề y là minh chứng rõ nét nhất cho sự kiên định của Vet&Pet với sứ mệnh bảo vệ nụ cười cho các gia đình yêu thú cưng. Dù là một mũi tiêm phòng đơn giản hay một ca bệnh phức tạp, Vet&Pet luôn sẵn sàng dốc hết tâm sức để mỗi nhịp đập, mỗi hơi thở của người bạn nhỏ đều được nâng niu trọn vẹn nhất."''',
    '''&quot;Hành trình hơn một thập kỷ gắn bó với nghề y là minh chứng rõ nét nhất cho sự kiên định của Vet&Pet với sứ mệnh bảo vệ nụ cười cho các gia đình yêu thú cưng. Dù là một mũi tiêm phòng đơn giản hay một ca bệnh phức tạp, Vet&Pet luôn sẵn sàng dốc hết tâm sức để mỗi nhịp đập, mỗi hơi thở của người bạn nhỏ đều được nâng niu trọn vẹn nhất.&quot;'''
)

with open('src/app/gioi-thieu/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

# Fix page.tsx
with open('src/app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace(
    '''"TẤT CẢ VÌ THÚ CƯNG NHÀ BẠN - MỖI SINH MỆNH, MỖI PHƯỚC LÀNH."''',
    '''&quot;TẤT CẢ VÌ THÚ CƯNG NHÀ BẠN - MỖI SINH MỆNH, MỖI PHƯỚC LÀNH.&quot;'''
)

# And other quotes in page.tsx
content = content.replace(
    '''"Sự sống của thú cưng là trách nhiệm lớn nhất"''',
    '''&quot;Sự sống của thú cưng là trách nhiệm lớn nhất&quot;'''
)
content = content.replace(
    '''"Quy trình chuyên nghiệp - Tận tâm - An toàn"''',
    '''&quot;Quy trình chuyên nghiệp - Tận tâm - An toàn&quot;'''
)
content = content.replace(
    '''"Hơn 10 năm kinh nghiệm trong ngành thú y"''',
    '''&quot;Hơn 10 năm kinh nghiệm trong ngành thú y&quot;'''
)

with open('src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
