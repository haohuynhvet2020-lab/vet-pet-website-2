import os

file_path = 'src/app/lien-he/page.tsx'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

import re

new_handler = """  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mở Zalo ngay lập tức (không dùng setTimeout) để trình duyệt không chặn Popup
    window.open(getZaloLink(), '_blank');
    setIsSubmitted(true);
  };"""

content = re.sub(r'const handleSubmit = \(e: React\.FormEvent\) => \{.*?\}, 600\);\n  \};', new_handler, content, flags=re.DOTALL)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed popup blocker issue")
