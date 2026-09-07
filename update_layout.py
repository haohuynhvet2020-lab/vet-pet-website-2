import re

with open('src/app/layout.tsx', 'r', encoding='utf-8') as f:
    code = f.read()

code = code.replace(
    '<html lang="vi">',
    '<html lang="vi">\n      <head>\n        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>\n      </head>'
)

with open('src/app/layout.tsx', 'w', encoding='utf-8') as f:
    f.write(code)
