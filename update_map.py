import re

with open('src/app/lien-he/page.tsx', 'r', encoding='utf-8') as f:
    code = f.read()

# Replace CS1 map
new_cs1_map = 'src="https://maps.google.com/maps?q=10.8008112,106.5915344+(THÚ%20Y%20-%20TRUNG%20TÂM%20THÚ%20Y%20VET%26PET)&hl=vi&z=17&output=embed"'
code = re.sub(r'src="https://www\.google\.com/maps/embed\?pb=[^"]*"', new_cs1_map, code, count=1)

with open('src/app/lien-he/page.tsx', 'w', encoding='utf-8') as f:
    f.write(code)
