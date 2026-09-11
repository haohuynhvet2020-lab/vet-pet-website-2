import re

with open('src/app/lien-he/page.tsx', 'r', encoding='utf-8') as f:
    code = f.read()

# Replace CS2 map
new_cs2_map = 'src="https://maps.google.com/maps?q=10.8191021,106.6945392+(Thú%20Y%20Vet%26Pet%20Bình%20Thạnh)&hl=vi&z=17&output=embed"'
code = re.sub(r'src="https://www\.google\.com/maps/embed\?pb=[^"]*"', new_cs2_map, code, count=1)

with open('src/app/lien-he/page.tsx', 'w', encoding='utf-8') as f:
    f.write(code)
