import re

with open('src/app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Escape quotes in testimonials
content = content.replace(
    '''<div className="text-primary-light text-4xl font-serif absolute top-4 left-6">"</div>''',
    '''<div className="text-primary-light text-4xl font-serif absolute top-4 left-6">&quot;</div>'''
)

content = content.replace(
    '''"Anh chị bác sĩ ở đây siêu nhiệt tình, hướng dẫn rất chi tiết khi bé nhà mình bệnh, mình theo ở đây từ lúc tiệm vừa mới mở, chi phí hợp lý, chữa bệnh dứt điểm."''',
    '''&quot;Anh chị bác sĩ ở đây siêu nhiệt tình, hướng dẫn rất chi tiết khi bé nhà mình bệnh, mình theo ở đây từ lúc tiệm vừa mới mở, chi phí hợp lý, chữa bệnh dứt điểm.&quot;'''
)

content = content.replace(
    '''"Lần đầu đến nhưng khá yên tâm về dịch vụ, chất lượng, tư vấn. Mình chỉ tiêm nhắc bệnh, tiêm dại thôi nên ko có gì phức tạp, bé chịu các cô tiêm và phối hợp, ko quậy, chắc do các bạn khá kinh nghiệm."''',
    '''&quot;Lần đầu đến nhưng khá yên tâm về dịch vụ, chất lượng, tư vấn. Mình chỉ tiêm nhắc bệnh, tiêm dại thôi nên ko có gì phức tạp, bé chịu các cô tiêm và phối hợp, ko quậy, chắc do các bạn khá kinh nghiệm.&quot;'''
)

content = content.replace(
    '''"Mình chăm Bun hơi vụng nên gặp được bác sĩ ở Vet&Pet mình thấy yên tâm hẳn. Bun lớn tuổi rồi nên bác sĩ để ý sức khỏe rất kỹ rồi mới chọn cách điều trị phù hợp. Đặc biệt chị bác sĩ nữ rất nhiệt tình, chữa tai cho Bun cẩn thận, sau phẫu thuật còn đến nhà thay băng định kỳ... Chi phí khám, điều trị hợp lý, không bắt mua thêm cái này cái kia. Rất quý bác sĩ có tâm như vậy ạ"''',
    '''&quot;Mình chăm Bun hơi vụng nên gặp được bác sĩ ở Vet&Pet mình thấy yên tâm hẳn. Bun lớn tuổi rồi nên bác sĩ để ý sức khỏe rất kỹ rồi mới chọn cách điều trị phù hợp. Đặc biệt chị bác sĩ nữ rất nhiệt tình, chữa tai cho Bun cẩn thận, sau phẫu thuật còn đến nhà thay băng định kỳ... Chi phí khám, điều trị hợp lý, không bắt mua thêm cái này cái kia. Rất quý bác sĩ có tâm như vậy ạ&quot;'''
)

with open('src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
