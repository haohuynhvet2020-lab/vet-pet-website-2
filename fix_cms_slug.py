import os

file_path = 'public/admin/config.yml'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Add slug settings
if 'slug:' not in content:
    # Actually, we can just replace 'slug: "{{slug}}"' with the full object, but config.yml might already have 'slug: "{{slug}}"' inside collections.
    content = content.replace('slug: "{{slug}}"', 'slug: "{{slug}}"\n    editor: { preview: false }')
    # Wait, the global slug configuration is at the root.
    slug_config = """
backend:
  name: git-gateway
  branch: main

slug:
  encoding: "ascii"
  clean_accents: true
  sanitize_replacement: "-"
"""
    content = content.replace('backend:\n  name: git-gateway\n  branch: main', slug_config)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated config.yml for clean slugs")
