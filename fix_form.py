import os

file_path = 'src/app/lien-he/page.tsx'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the try/catch block
old_block = """      try {
        const response = await fetch('https://formspree.io/f/mjyvjmyr', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            'H? tn': formData.name,
            'S? di?n tho?i': formData.phone,
            'Co s?': formData.branch === 'cs1' ? 'Co s? 1 - KDC Vinh L?c, Bnh Tn' : 'Co s? 2 - 393 Phan Van Tr?, Bnh Th?nh',
            'Ngy khm': formData.date,
            'Gi? d? ki?n': formData.time,
            'Th cung': formData.pet,
            'D?ch v?': formData.service || 'Khm t?ng qut',
            'Ghi ch': formData.notes,
            '_replyto': 'Haohuynhvet2020@gmail.com',
            '_subject': `[D?t l?ch m?i] ${formData.name} - ${formData.phone}`,
          }),
        });
        
        if (response.ok) {
          setIsSubmitted(true);
        }
      } catch {
        // fallback - still show success and let user contact via Zalo
        setIsSubmitted(true);
      } finally {
        setIsLoading(false);
      }"""

# Since unicode might not match exactly, let's use regex
import re

new_block = """      try {
        const response = await fetch('https://formspree.io/f/mjyvjmyr', {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            'Họ tên': formData.name,
            'Số điện thoại': formData.phone,
            'Cơ sở': formData.branch === 'cs1' ? 'Cơ sở 1 - KDC Vĩnh Lộc, Bình Tân' : 'Cơ sở 2 - 393 Phan Văn Trị, Bình Thạnh',
            'Ngày khám': formData.date,
            'Giờ dự kiến': formData.time,
            'Thú cưng': formData.pet,
            'Dịch vụ': formData.service || 'Khám tổng quát',
            'Ghi chú': formData.notes,
            '_replyto': 'Haohuynhvet2020@gmail.com',
            '_subject': `[Đặt lịch mới] ${formData.name} - ${formData.phone}`,
          }),
        });
        
        if (response.ok) {
          setIsSubmitted(true);
        } else {
          alert("Hệ thống báo bận (chưa xác thực Formspree). Vui lòng xác nhận để chuyển sang đặt lịch tự động qua Zalo nhé!");
          window.open(getZaloLink(), '_blank');
          setIsSubmitted(true);
        }
      } catch (e) {
        alert("Lỗi mạng. Vui lòng xác nhận để chuyển sang Zalo!");
        window.open(getZaloLink(), '_blank');
        setIsSubmitted(true);
      } finally {
        setIsLoading(false);
      }"""

content = re.sub(r'try\s*\{\s*const response = await fetch\(\'https://formspree\.io.*?finally\s*\{\s*setIsLoading\(false\);\s*\}', new_block, content, flags=re.DOTALL)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated Formspree logic")
