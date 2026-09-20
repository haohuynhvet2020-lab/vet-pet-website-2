import os

file_path = 'src/lib/articles.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the sort logic with safe logic
safe_sort = """
  return allArticles.sort((a, b) => {
    try {
      const dateA_str = a.date || '01/01/2000';
      const dateB_str = b.date || '01/01/2000';
      const partsA = dateA_str.split('/');
      const partsB = dateB_str.split('/');
      
      const dateA = new Date(`${partsA[2] || '2000'}-${partsA[1] || '01'}-${partsA[0] || '01'}`);
      const dateB = new Date(`${partsB[2] || '2000'}-${partsB[1] || '01'}-${partsB[0] || '01'}`);
      
      if (dateA < dateB) return 1;
      return -1;
    } catch (e) {
      return 0;
    }
  });
"""

import re
content = re.sub(r'return allArticles\.sort\(\(a, b\) => \{.*?\}\);', safe_sort, content, flags=re.DOTALL)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated articles.ts safe sort")
