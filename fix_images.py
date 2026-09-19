import re

# Update src/app/page.tsx
with open('src/app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace(
    'className="relative w-full max-w-[280px] aspect-[3/4] rounded-2xl overflow-hidden mb-6 shadow-xl border border-gray-100"',
    'className="relative w-full max-w-[280px] aspect-[3/4] rounded-2xl overflow-hidden mb-6 shadow-xl border border-gray-100 bg-[#021428]"'
)
content = content.replace(
    'className="object-cover group-hover:scale-105 transition-transform duration-500"',
    'className="object-contain group-hover:scale-105 transition-transform duration-500"'
)

with open('src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

# Update src/app/gioi-thieu/page.tsx
with open('src/app/gioi-thieu/page.tsx', 'r', encoding='utf-8') as f:
    about_content = f.read()

about_content = about_content.replace(
    'className="relative w-full aspect-[3/4]"',
    'className="relative w-full aspect-[3/4] bg-[#021428]"'
)
about_content = about_content.replace(
    'className="object-cover"',
    'className="object-contain"'
)

with open('src/app/gioi-thieu/page.tsx', 'w', encoding='utf-8') as f:
    f.write(about_content)

print("Updated image aspect ratios to object-contain")
