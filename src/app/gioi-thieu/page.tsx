import Image from 'next/image';

export default function AboutPage() {
      
  const groomers = [
    {
      name: "TRẦN THỊ MỸ LINH",
      role: "Groomer Chuyên Nghiệp",
      image: "/groomer-linh.jpg",
      description: "Với đôi bàn tay khéo léo và gu thẩm mỹ tinh tế, Mỹ Linh luôn biết cách biến hóa để các bé thú cưng trở nên xinh xắn và đáng yêu nhất."
    },
    {
      name: "NGUYỄN THANH TÚ",
      role: "Groomer Chuyên Nghiệp",
      image: "/groomer-tu.jpg",
      description: "Đam mê và nhiệt huyết với nghề, Thanh Tú không chỉ mang lại vẻ ngoài hoàn hảo mà còn giúp các bé cảm thấy thư giãn, thoải mái trong suốt quá trình làm đẹp."
    },
    {
      name: "LÊ NGUYỄN NGỌC TUYỀN",
      role: "Chuyên Viên Spa Chuyên Nghiệp",
      image: "/groomer-tuyen-v2.jpg",
      description: "Am hiểu sâu sắc về chăm sóc da và lông thú cưng, Ngọc Tuyền cung cấp các liệu trình spa chuyên sâu giúp các bé luôn sạch sẽ, khỏe mạnh và thơm tho."
    },
    {
      name: "NGUYỄN NGỌC THIÊN THANH",
      role: "Groomer Chuyên Nghiệp",
      image: "/groomer-thanh.jpg",
      description: "Tỉ mỉ và khéo léo trong từng đường kéo, Thiên Thanh luôn biến các bé thú cưng trở nên xinh đẹp và gọn gàng nhất."
    }
  ];

  const doctors = [
    {
      name: "BSTY. HUỲNH NHẬT HÀO",
      role: "Bác Sĩ Chính",
      image: "/doctor-hao.jpg",
      description: "Thế mạnh về phẫu thuật ngoại khoa và xương khớp, bác sĩ Hào đã trực tiếp điều trị thành công hàng ngàn ca bệnh khó."
    },
    {
      name: "BSTY. ĐẶNG THỊ TUYẾT NGA",
      role: "Bác Sĩ Chính",
      image: "/doctor-nga.jpg",
      description: "Với kiến thức vững vàng và kinh nghiệm thực tiễn, bác sĩ Nga là người bạn đồng hành đáng tin cậy của mọi gia đình."
    },
    {
      name: "BSTY. LÊ QUYỀN TRÂN",
      role: "Bác Sĩ Chính",
      image: "/doctor-tran-new.jpg",
      description: "Kinh nghiệm dày dặn trong chẩn đoán hình ảnh và điều trị bệnh lý phức tạp, mang lại sự an tâm tuyệt đối cho khách hàng."
    },
    {
      name: "BSTY. NGUYỄN HOÀNG PHÚ",
      role: "Bác Sĩ Nội Trú",
      image: "/doctor-phu-new.jpg",
      description: "Được đào tạo chuyên sâu về nội khoa, bác sĩ Phú luôn tận tâm theo dõi và chăm sóc sức khỏe toàn diện cho các bé thú cưng."
    },
    {
      name: "BSTY. TRẦN THỊ THUÝ NGỌC",
      role: "Bác Sĩ Nội Trú",
      image: "/doctor-ngoc.jpg",
      description: "Chuyên môn cao và tình yêu thương động vật sâu sắc, bác sĩ Ngọc luôn mang đến sự chăm sóc nhẹ nhàng và hiệu quả."
    },
    {
      name: "BSTY. KHÊ NỮ THUỶ TIÊN",
      role: "Bác Sĩ Nội Trú",
      image: "/doctor-tien.jpg",
      description: "Tận tâm và tỉ mỉ trong từng ca khám, bác sĩ Tiên luôn đảm bảo thú cưng nhận được phác đồ điều trị phù hợp nhất."
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6 leading-tight uppercase">Về TRUNG TÂM THÚ Y VET&PET</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-primary-light mb-4">TẬN TÂM Y ĐỨC, GẮN KẾT YÊU THƯƠNG</h2>
          <p className="text-gray-700 text-lg leading-relaxed text-justify md:text-center mt-6">
            Được xây dựng từ tâm huyết và ngọn lửa yêu nghề, <strong>Trung Tâm Thú Y Vet&Pet</strong> tự hào là điểm tựa sức khỏe vững chắc cho những người bạn bốn chân. Trải qua chặng đường <strong>5 năm hình thành và phát triển</strong>, kế thừa nền tảng <strong>hơn 10 năm kinh nghiệm lâm sàng</strong> thực tiễn của BSTY. Hào cùng đội ngũ cộng sự, Vet&Pet đã không ngừng lớn mạnh. Hiện tại, chúng tôi sẵn sàng phục vụ và đồng hành cùng khách hàng tại hai cơ sở khang trang, hiện đại tọa lạc ở khu vực <strong>Bình Tân</strong> và <strong>Bình Thạnh</strong>.
          </p>
        </div>

        {/* Brand Philosophy */}
        <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center uppercase">Triết lý thương hiệu: Sự gắn kết tuyệt đối</h2>
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                <p className="text-gray-700 text-lg leading-relaxed mb-4 text-justify">
                    Nhìn vào nhận diện thương hiệu của Vet&Pet, bạn sẽ thấy sự lồng ghép tinh tế giữa hai chữ cái <strong>V (Vet - Bác sĩ thú y)</strong> và <strong>P (Pet - Thú cưng)</strong> tạo thành một khối vững chãi như một vòng tay che chở. Hình ảnh người bác sĩ đứng sát cánh cùng chó mèo bên trong biểu tượng ấy không chỉ là một bức tranh, mà là lời cam kết sâu sắc về <strong>sự gắn kết tuyệt đối giữa tinh thần, trách nhiệm y đức và tình yêu thương</strong>.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed text-justify font-medium italic text-primary-dark">
                    &quot;Chúng tôi tâm niệm rằng: Quá trình chữa lành không chỉ đến từ máy móc hay thuốc men, mà còn bắt nguồn từ sự thấu cảm, trân trọng sinh mệnh và cái &apos;tâm&apos; của người làm nghề.&quot;
                </p>
            </div>
        </div>

        {/* Medical Standards */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center uppercase">Tiêu chuẩn y khoa khắt khe & toàn diện</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-10 text-justify md:text-center">
            Tại Vet&Pet, mọi quyết định y khoa đều được cá thể hóa, dựa trên bằng chứng khoa học và quá trình biện luận chẩn đoán nghiêm ngặt. Để hiện thực hóa sứ mệnh chăm sóc sức khỏe toàn diện, chúng tôi đầu tư đồng bộ hệ thống trang thiết bị tiên tiến cùng hệ sinh thái dịch vụ đa dạng:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-primary-light">
                <h3 className="font-bold text-xl text-primary-dark mb-2">Khám Tổng Quát</h3>
                <p className="text-gray-600">Tầm soát chuyên sâu, giúp phát hiện và điều trị kịp thời các bệnh lý tiềm ẩn, đảm bảo thú cưng luôn trong trạng thái sức khỏe tốt nhất.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-primary-light">
                <h3 className="font-bold text-xl text-primary-dark mb-2">Chẩn Đoán Hình Ảnh (Siêu Âm & X-Ray)</h3>
                <p className="text-gray-600">Ứng dụng công nghệ siêu âm an toàn, không xâm lấn cùng hệ thống chụp X-quang kỹ thuật số hiện đại, hỗ trợ đắc lực trong việc chẩn đoán các bệnh lý về nội tạng, xương khớp, hô hấp và tuần hoàn.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-primary-light">
                <h3 className="font-bold text-xl text-primary-dark mb-2">Xét Nghiệm Sinh Hóa - Huyết Học</h3>
                <p className="text-gray-600">Hệ thống máy xét nghiệm tân tiến cho kết quả nhanh chóng, chuẩn xác, phục vụ tối đa cho việc chẩn đoán nguyên nhân gây bệnh.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-primary-light">
                <h3 className="font-bold text-xl text-primary-dark mb-2">Phẫu Thuật Ngoại Khoa (Mô Mềm & Xương Khớp)</h3>
                <p className="text-gray-600">Hệ thống phòng mổ vô trùng tiêu chuẩn cùng đội ngũ bác sĩ tay nghề cao, xử lý an toàn từ các ca phẫu thuật mô mềm thông thường đến chấn thương xương khớp phức tạp.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-primary-light">
                <h3 className="font-bold text-xl text-primary-dark mb-2">Nội Trú Điều Trị - Hotel</h3>
                <p className="text-gray-600">Không gian lưu trú điều trị vô trùng, tách biệt, theo dõi sinh hiệu 24/7 với chế độ chăm sóc chuẩn y khoa giúp bệnh súc mau chóng hồi phục.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-primary-light">
                <h3 className="font-bold text-xl text-primary-dark mb-2">Tiêm Phòng & Tẩy Giun</h3>
                <p className="text-gray-600">Cung cấp đầy đủ các loại vaccine phòng bệnh truyền nhiễm nguy hiểm với lịch trình tiêm phòng chuẩn quốc tế.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-primary-light md:col-span-2">
                <h3 className="font-bold text-xl text-primary-dark mb-2">Spa & Grooming</h3>
                <p className="text-gray-600">Dịch vụ tắm gội, cắt tỉa lông nghệ thuật và vệ sinh tai móng chuyên nghiệp, giúp thú cưng luôn sạch sẽ, thơm tho và lộng lẫy.</p>
            </div>
          </div>

          <div className="bg-primary-dark text-white p-8 md:p-12 rounded-3xl shadow-2xl text-center relative overflow-hidden">
            <div className="relative z-10">
                <p className="text-lg leading-relaxed mb-6 italic opacity-95">
                    &quot;Hành trình hơn một thập kỷ gắn bó với nghề y là minh chứng rõ nét nhất cho sự kiên định của Vet&Pet với sứ mệnh bảo vệ nụ cười cho các gia đình yêu thú cưng. Dù là một mũi tiêm phòng đơn giản hay một ca bệnh phức tạp, Vet&Pet luôn sẵn sàng dốc hết tâm sức để mỗi nhịp đập, mỗi hơi thở của người bạn nhỏ đều được nâng niu trọn vẹn nhất.&quot;
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mt-8">Vet&Pet – Nơi sức khỏe thú cưng được đặt lên hàng đầu!</h3>
            </div>
          </div>
        </div>

        {/* Doctors */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 uppercase">Đội Ngũ Bác Sĩ Chuyên Môn</h2>
            <p className="text-gray-600 text-lg">Với chuyên môn cao và tình yêu thương động vật, đội ngũ y bác sĩ tại VET&PET luôn sẵn sàng mang lại sự chăm sóc tốt nhất cho thú cưng của bạn.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {doctors.map((doc, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden text-center hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#021428]">
                  <Image src={doc.image} alt={doc.name} fill className="object-contain group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary-dark mb-1">{doc.name}</h3>
                  <p className="text-primary-light font-bold mb-4">{doc.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{doc.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Groomers */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 uppercase">Đội Ngũ Grooming - Spa</h2>
            <p className="text-gray-600 text-lg">Bên cạnh y tế, đội ngũ chuyên viên Grooming - Spa tận tâm của VET&PET sẽ mang lại vẻ ngoài hoàn hảo và trải nghiệm thư giãn nhất cho các bé.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {groomers.map((doc, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden text-center hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#021428]">
                  <Image src={doc.image} alt={doc.name} fill className="object-contain group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary-dark mb-1">{doc.name}</h3>
                  <p className="text-primary-light font-bold mb-4">{doc.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{doc.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
