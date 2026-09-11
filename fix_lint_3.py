import re

with open('src/app/layout.tsx', 'r', encoding='utf-8') as f:
    code = f.read()

# Replace <script ...> with <Script ... strategy="beforeInteractive" />
if "import Script from 'next/script';" not in code:
    code = code.replace("import './globals.css';", "import './globals.css';\nimport Script from 'next/script';")

code = code.replace(
    '<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>',
    '<Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" strategy="beforeInteractive" />'
)

with open('src/app/layout.tsx', 'w', encoding='utf-8') as f:
    f.write(code)
