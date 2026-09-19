import os

for filename in ['src/app/page.tsx', 'src/app/gioi-thieu/page.tsx']:
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    content = content.replace('"/groomer-tuyen.jpg"', '"/groomer-tuyen-v2.jpg"')
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)

print("Updated image references to bust cache.")
