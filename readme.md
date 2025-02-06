Dựa trên template AstroWind, sử dụng Astro 5.0 và Tailwind CSS, \article-open là template website mã nguồn mở, truy cập miễn phí và không giới hạn các tính năng. Kế thừa tinh hoa của AstroWind, \article-open cập nhật và làm tốt hơn các tính năng cũ khi:

- Cải thiện cấu trúc code, giúp mọi thứ trở nên đơn giản và dễ dàng tiếp cận.

- Đồng bộ, áp dụng components cho tất cả các trang, giúp cấu trúc trở nên dễ hiểu và cập nhật.

- Tối ưu kỹ thuật SEO, khi cung cấp thẻ schema tiêu chuẩn, meta tag generator nâng cao, giúp website dễ dàng được các công cụ tìm kiếm nhận diện và index trang.

- Áp dụng hiệu ứng chuyển động, giúp giao diện trở nên hiện đại và thân thiện với người dùng.

Dự án cũng giữ lại, đảm bảo điểm PageSpeed Insights ấn tượng, chế độ Dark mode và nhiều tính năng tiên tiến khác, giúp đây trở thành template website Astro lý tưởng cho các developer, SEOer lẫn Editor website bán chuyên và chuyên nghiệp.

## Cấu trúc thư mục dự án

Cấu trúc thư mục của \article-open được tổ chức lại, bổ sung thêm các file, folder mới, giúp mọi thứ trở nên khoa học và dễ bảo trì, cập nhật. Cụ thể:

```
article-open/
└── src/ | folder tổng
	├── assets/ | cấu hình chung
	│	├── favicons/
	│	│	├── core.astro
	│	│	├── logo.astro | logo
	│	├── styles/
	│	│	├── custom.astro
	│	│	├── framer.jsx | hiệu ứng
	│	│	├── tailwind.css | giao diện
	├── components/
	│	├── analytics/ | cấu hình công cụ
	│	│	├── /
	│	├── article/
	│	│	├── bloglist.astro | danh sách bài viết
	│	│	├── diagram.astro
	│	│	├── grid.astro | sắp xếp xếp danh sách bài viết
	│	│	├── headline.astro | headline bài viết
	│	│	├── highlighted.astro | highlighted bài viết
	│	│	├── latest.astro | bài viết mới nhất
	│	│	├── link.astro | liên kết bài viết
	│	│	├── list.astro | danh sách bài viết
	│	│	├── pagination.astro | phân trang
	│	│	├── related.astro | bài viết liên quan
	│	│	├── single.astro | cấu hình nội dung bài viết
	│	│	├── table.astro | cấu hình mục lục
	│	│	├── tags.astro | cấu hình thẻ bài viết
	│	├── common/
	│	│	├── image.astro | cấu hình hình ảnh
	│	│	├── meta.astro | cấu hình meta tag generator
	│	│	├── metadata.astro | cấu hình meta tag generator
	│	│	├── social.astro | cấu hình chia sẻ lên mạng xã hội
	│	│	├── toggle-menu.astro | cấu hình menu
	│	│	├── toggle-theme.astro | cấu hình giao diện dark mode
	│	├── content/
	│	│	├── analytics/ | nội dung các công cụ
	│	│	│ 	├── ///
	│	│	├── services/ | nội dung các dịch vụ
	│	│	│ 	├── ///
	│	│	├── action.astro | nội dung CTA
	│	│	├── article.astro | nội dung danh sách bài viết
	│	│	├── asked.astro | câu hỏi thường gặp
	│	│	├── brands.astro | danh sách thương hiệu, đối tác
	│	│	├── hero.astro | nội dung giới thiệu
	│	│	├── prices.astro | nội dung chính sách giá
	│	│	├── testimonials.astro | nội dung chứng thực xã hội
	│	├── javascript/
	│	│	├── analytics.astro
	│	│	├── anti-copy.astro | chặn copy, áp dụng trong bài viết
	│	│	├── basic.astro
	│	│	├── color.astro
	│	│	├── dcma.astro | bảo vệ nội dung
	│	│	├── openstatus.astro | theo dõi trạng thái website
	│	│	├── open-tab.astro | tự động mở trang
	│	│	├── progress.astro | tiến trình đọc bài viết
	│	│	├── schema.astro | thẻ schema
	│	│	├── table.astro | mục lục bài viết
	│	├── ui/ | cấu hình giao diện tương tác
	│	│	├── background.astro | cấu hình nền trang
	│	│	├── block.astro
	│	│	├── button.astro | cấu hình nút CTA
	│	│	├── divide.astro
	│	│	├── headline.astro | cấu hình heading
	│	│	├── wrapper.astro
	│	├── widgets/ | cấu hình giao diện
	│	│	├── analytics.astro | tracking google analytics
	│	│	├── brands.astro | cấu hình giao diện thương hiệu
	│	│	├── footer.astro | cấu hình chân trang
	│	│	├── header.astro | cấu hình menu đầu trang
	│	│	├── hero.astro | cấu hình giới thiệu
	│	│	├── pricing.astro | cấu hình chính sách giá
	│	│	├── question.astro | cấu hình câu hỏi thường gặp
	│	│	├── services.astro | cấu hình dịch vụ
	│	│	├── testimonials.astro | cấu hình chứng thực xã hội
	├── content/
	│	├── blog/ | danh sách bài viết
	│	│	├── | danh sách bài viết, với slug là tiêu đề
	│	├── config.ts | cấu hình bài viết
	├── integration/
	│	│	│	├── config-builder.ts
	│	│	├── utils
	│	│	├── index.mjs
	│	│	├── types.d.ts
	├── layouts/
	│	│	├── main.astro | cấu hình giao diện chính
	│	│	├── markdown.astro | cấu hình trang định dạng markdown
	│	│	├── page.astro | cấu hình trang bài viết
	├── pages/
	│	├── [...blog]/
	│	│	├── [tag]/
	│	│	│	├── [...page].astro | cấu hình danh sách thẻ bài viết
	│	│	├── [...page].astro | cấu hình danh sách bài viết
	│	│	├── index.astro | cấu hình giao diện bài viết
	│	├── analytics/ | cấu hình giao diện trang công cụ
	│	│	├── ///
	│	├── services/ | cấu hình giao diện trang dịch cụ
	│	│	├── ///
	│	├── 404.astro | cấu hình giao diện trang 404
	│	├── about.md
	│	├── policy.md
	│	├── term.md
	│	├── version.md
	│	├── contact.astro
	│	├── index.astro | cấu hình giao diện trang chủ
	│	├── rss.xml.ts
	├── utils/
	│	├── blog.ts
	│	├── directories.ts
	│	├── frontmatter.mjs
	│	├── images.ts
	│	├── optimization.ts
	│	├── permalinks.ts
	│	├── utils.ts
```

## Hướng dẫn triển khai dự án qua Vercel

Quá trình triển khai AstroWind qua Vercel có thể thực hiện theo hai phương pháp chính, mỗi phương pháp đều có những ưu điểm và hạn chế riêng. Việc lựa chọn phương pháp phù hợp sẽ phụ thuộc vào nhu cầu cụ thể của dự án và mức độ kinh nghiệm của bạn.

### Triển khai trực tiếp qua Vercel

Triển khai dự án trực tiếp qua Vercel là phương pháp nhanh chóng, đơn giản nhất để public website từ mã nguồn \article-open.

Đầu tiên, đăng ký và đăng nhập Vercel tại đây. Quá trình này yêu cầu tạo mới tài khoản Github, hoặc liên kết với tài khoản sẵn có. Github được sử dụng để lưu trữ mã nguồn.

Sau đó, click vào _New Project_ và chọn _Import Git Repository,_ và nhập url repository của dự án \article-open tại:

```
gh repo clone nhavantuonglai/article-open
```

Như vậy, website đã được deploy thành công.

Phương pháp này rất nhanh và đơn giản, phù hợp với những ai muốn trải nghiệm giao diện. Nhưng việc cập nhật rất hạn chế, và bảo trì mã nguồn cũng gặp khó khăn.

### Triển khai gián tiếp thông qua Github

Với phương pháp này, bạn cũng cần tạo và sử dụng Github để quản lý mã nguồn.

Đầu tiên, cần clone repository \article-open về tài khoản, bằng cách nhập:

```
gh repo clone nhavantuonglai/article-open
```

Sau đó, truy cập vào Vercel, đăng ký tài khoản hoặc lựa chọn đăng nhập bằng Github, rồi _Import repository_ tương tự như trên. Mã nguồn sẽ được lưu, quản lý và điều chỉnh trực tiếp trên tài khoản của bạn, giúp các cập nhật, bảo trì trở nên dễ dàng và thuận tiện. Tuy vậy, quá trình này tốn nhiều bước, và không phải ai lúc ban đầu ucxng làm quen được.

## Hướng dẫn cập nhật giao diện, nội dung website bằng VS Code

VS Code là công cụ quản lý, cập nhật code mạnh mẽ.

Để bắt đầu, bạn cần tải và cài đặt VS Code, Node.js và các điều chỉnh liên quan.

Sau đó, mở folder chứa mã nguồn dự án rồi chạy lệnh sau để cài đặt các node liên quan:

```
npm install
```

Sau khi hoàn tất, chạy tiếp lệnh:

```
npm run dev
```

Tiếp theo nữa, truy cập vào url sau  để xem giao diện website trên máy cục bộ (local):

```
http://localhost:4321/
```

Để điều chỉnh, cập nhật các nội dung hiển thị trên website, bạn cần tìm đúng folder, file tương ứng như phần Cấu trúc thư mục dự án nêu trên để điều chỉnh, sau khi lưu thì giao diện website ở localhost cũng nhanh chóng được cập nhật, và nếu gặp lỗi thì sẽ báo tức thì.

Sau khi hoàn tất, bạn chỉ cần mở Github Desktop lên, commit các thay đổi rồi đợi deploy website, và như vậy, website đã được cập nhật thành công.

If you have any questions, need support, or wish to collaborate, do not hesitate to contact **github/nhavantuonglai** via email at [info@nhavantuonglai.com](mailto:info@nhavantuonglai.com) for the quickest and most convenient connection.
