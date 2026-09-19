import os

filename = 'src/components/ui/FloatingContact.tsx'
with open(filename, 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace(
    'href="https://m.me/"',
    'href="https://m.me/VetAndPet1907"'
)

with open(filename, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated Messenger link.")
