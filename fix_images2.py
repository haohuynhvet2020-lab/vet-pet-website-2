import re

# Update src/app/gioi-thieu/page.tsx
with open('src/app/gioi-thieu/page.tsx', 'r', encoding='utf-8') as f:
    about_content = f.read()

# Fix the doctors grid
about_content = about_content.replace(
    'className="relative w-full max-w-[280px] aspect-[3/4] rounded-2xl overflow-hidden mb-6 shadow-xl border border-gray-100"',
    'className="relative w-full max-w-[280px] aspect-[3/4] rounded-2xl overflow-hidden mb-6 shadow-xl border border-gray-100 bg-[#021428]"'
)
about_content = about_content.replace(
    'className="object-cover group-hover:scale-105 transition-transform duration-500"',
    'className="object-contain group-hover:scale-105 transition-transform duration-500"'
)

# Wait, in the Groomers section of gioi-thieu, it might just use object-cover!
about_content = about_content.replace(
    'className="object-contain"',
    'className="object-contain bg-[#021428]"'
)

# Just to be safe, replace all Image tags with object-cover in a 3/4 box.
# Let's write a regex for the groomers section.
about_content = re.sub(
    r'<div className="relative w-full aspect-\[3/4\]( bg-\[#[a-fA-F0-9]{6}\])?">',
    r'<div className="relative w-full aspect-[3/4] bg-[#021428]">',
    about_content
)

about_content = re.sub(
    r'className="object-cover"',
    r'className="object-contain"',
    about_content
)

with open('src/app/gioi-thieu/page.tsx', 'w', encoding='utf-8') as f:
    f.write(about_content)

print("Fixed gio-thieu")
