backend:
  name: git-gateway
  branch: main

media_folder: "public/uploads"
public_folder: "/uploads"

collections:
  - name: "articles"
    label: "Cẩm Nang / Ca Bệnh"
    folder: "content/articles"
    create: true
    slug: "{{slug}}"
    fields:
      - {label: "Tiêu đề", name: "title", widget: "string"}
      - {label: "Danh mục", name: "category", widget: "select", options: ["Chó", "Mèo", "Dinh dưỡng", "Sức khỏe", "Sơ cứu"]}
      - {label: "Ảnh đại diện", name: "image", widget: "image"}
      - {label: "Mô tả ngắn", name: "excerpt", widget: "text"}
      - {label: "Ngày đăng", name: "date", widget: "datetime", format: "DD/MM/YYYY", date_format: "DD/MM/YYYY", time_format: false}
      - {label: "Nội dung", name: "body", widget: "markdown"}
