import re

# 1. Fix Slogan in src/app/page.tsx
with open('src/app/page.tsx', 'r', encoding='utf-8') as f:
    page_content = f.read()

old_slogan = '''&quot;TẤT CẢ VÌ THÚ CƯNG NHÀ BẠN - MỖI SINH MỆNH, MỖI PHƯỚC LÀNH.&quot;'''
new_slogan = '''&quot;TẤT CẢ VÌ THÚ CƯNG NHÀ BẠN <br className="hidden md:block" />- MỖI SINH MỆNH, MỖI PHƯỚC&nbsp;LÀNH.&quot;'''

page_content = page_content.replace(old_slogan, new_slogan)

with open('src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(page_content)


# 2. Fix Address in src/app/lien-he/page.tsx
with open('src/app/lien-he/page.tsx', 'r', encoding='utf-8') as f:
    contact_content = f.read()

contact_content = contact_content.replace(
    '''Cơ sở 2 - Phan Văn Trị, Bình Thạnh''',
    '''Cơ sở 2 - 393 Phan Văn Trị, Bình Thạnh'''
)
contact_content = contact_content.replace(
    '''Phan Văn Trị, Phường 11, Bình Thạnh, TP.HCM''',
    '''393 Phan Văn Trị, Phường 11, Bình Thạnh, TP.HCM'''
)
contact_content = contact_content.replace(
    '''Cơ sở 2 (Phan Văn Trị, Q. Bình Thạnh)''',
    '''Cơ sở 2 (393 Phan Văn Trị, Q. Bình Thạnh)'''
)

with open('src/app/lien-he/page.tsx', 'w', encoding='utf-8') as f:
    f.write(contact_content)


# 3. Fix Address in src/components/layout/Footer.tsx
with open('src/components/layout/Footer.tsx', 'r', encoding='utf-8') as f:
    footer_content = f.read()

footer_content = footer_content.replace(
    '''393 Phan Văn Trị, Phường Bình Lợi Trung, Bình Tân, TP.HCM''',
    '''393 Phan Văn Trị, Phường 11, Bình Thạnh, TP.HCM'''
)

with open('src/components/layout/Footer.tsx', 'w', encoding='utf-8') as f:
    f.write(footer_content)

print("Updated text.")
