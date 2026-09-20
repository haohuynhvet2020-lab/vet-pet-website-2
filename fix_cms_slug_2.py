import os

file_path = 'public/admin/config.yml'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

slug_config = """
slug:
  encoding: "ascii"
  clean_accents: true
  sanitize_replacement: "-"
"""

if 'clean_accents' not in content:
    content = slug_config + content
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

print("Updated config.yml for clean slugs (prepended)")
