import re

# Fix layout.tsx
with open('src/app/layout.tsx', 'r', encoding='utf-8') as f:
    code = f.read()

code = code.replace("import './globals.css';\n", "import './globals.css';\nimport Script from 'next/script';\n")

with open('src/app/layout.tsx', 'w', encoding='utf-8') as f:
    f.write(code)

# Fix page.tsx line 246
with open('src/app/page.tsx', 'r', encoding='utf-8') as f:
    code = f.read()

code = re.sub(
    r'"Mình chăm Bun hơi vụng.*?có tâm như vậy ạ.*?"',
    r'&quot;Mình chăm Bun hơi vụng nên gặp được bác sĩ ở Vet&Pet mình thấy yên tâm hẳn. Bun lớn tuổi rồi nên bác sĩ để ý sức khỏe rất kỹ rồi mới chọn cách điều trị phù hợp. Đặc biệt chị bác sĩ nữ rất nhiệt tình, chữa tai cho Bun cẩn thận, sau phẫu thuật còn đến nhà thay băng định kỳ... Chi phí khám, điều trị hợp lý, không bắt mua thêm cái này cái kia. Rất quý bác sĩ có tâm như vậy ạ🥰&quot;',
    code,
    flags=re.DOTALL
)

with open('src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(code)
