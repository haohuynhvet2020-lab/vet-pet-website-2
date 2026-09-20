import os

file_path = 'src/app/cam-nang/[slug]/page.tsx'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace(
    'const article = articles.find((a) => a.slug === resolvedParams.slug);',
    'const article = articles.find((a) => decodeURIComponent(a.slug) === decodeURIComponent(resolvedParams.slug));'
)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated cam-nang/[slug]/page.tsx")
