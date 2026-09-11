import re

with open('src/app/page.tsx', 'r', encoding='utf-8') as f:
    code = f.read()

# Add CallButton import
if "CallButton" not in code:
    code = code.replace(
        "import { ServiceCarousel } from '@/components/ServiceCarousel';",
        "import { ServiceCarousel } from '@/components/ServiceCarousel';\nimport { CallButton } from '@/components/CallButton';"
    )

# Replace the old call button anchor tag with the new CallButton component
# The old code: <a href="tel:0946884344" className="...">...</a>
code = re.sub(
    r'<a\s+href="tel:0946884344"\s+className="flex items-center justify-center gap-2 bg-primary-dark hover:bg-blue-800 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl"\s+>\s+<Phone className="w-6 h-6" />\s+G.*?</a>',
    '<CallButton />',
    code,
    flags=re.DOTALL
)

# Remove Phone import if no longer needed (keep it - used elsewhere)
with open('src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(code)
