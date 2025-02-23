---
pubDatetime: 2025-02-15T10:10:00Z
title: Hướng dẫn xây dựng website dựa trên mã nguồn mở
description: Article Open là phiên bản mã nguồn mở của Article với quyền truy cập miễn phí và giới hạn tính năng.
featured: false
image: https://banmaixanh.org/image/cover/001-779.jpg
tags:
  - website
  - tao website
  - tao website don gian
  - tao website github
  - ma nguon mo
  - website nhavantuonglai
  - github
  - repository
  - visual studio code
  - npm
  - astro
  - framework
  - vercel
  - template website
  - open source
  - template website open source
---

`\article` là mã nguồn website [nhavantuonglai.com](https://nhavantuonglai.com/), hạn chế quyền truy cập và không giới hạn các tính năng.

[\article-open](https://github.com/nhavantuonglai/article-open) là phiên bản mã nguồn mở của `\article` với quyền truy cập miễn phí và giới hạn tính năng.

<figure><img src="https://banmaixanh.org/image/article/ma-nguon-mo-02.jpg" alt="vercel-website-deploy-nhavantuonglai" title="vercel-website-deploy-nhavantuonglai" height=100% width=100%><figcaption><p>vercel-website-deploy-nhavantuonglai</p></figcaption></figure>

Mã nguồn dựa trên template AstroWind, sử dụng Astro 5.0 và Tailwind CSS, kế thừa tinh hoa của AstroWind, `\article-open` cập nhật và làm tốt hơn các tính năng cũ khi:

– Cải thiện cấu trúc code, giúp mọi thứ trở nên đơn giản và dễ dàng tiếp cận.

– Đồng bộ, áp dụng components cho tất cả các trang, giúp cấu trúc trở nên dễ hiểu và cập nhật.

– Tối ưu kỹ thuật SEO, khi cung cấp thẻ schema tiêu chuẩn, meta tag generator nâng cao, giúp website dễ dàng được các công cụ tìm kiếm nhận diện và index trang.

– Áp dụng hiệu ứng chuyển động, giúp giao diện trở nên hiện đại và thân thiện với người dùng.

<figure><img src="https://banmaixanh.org/image/article/ma-nguon-mo-01.jpg" alt="vercel-website-deploy-nhavantuonglai" title="vercel-website-deploy-nhavantuonglai" height=100% width=100%><figcaption><p>vercel-website-deploy-nhavantuonglai</p></figcaption></figure>

Dự án cũng giữ lại, đảm bảo điểm `PageSpeed Insights` ấn tượng, chế độ Dark mode và nhiều tính năng tiên tiến khác, giúp đây trở thành template website [Astro](https://nhavantuonglai.com/article/astro) lý tưởng cho các developer, SEOer lẫn Editor website bán chuyên và chuyên nghiệp.

<figure><img src="https://banmaixanh.org/image/article/ma-nguon-mo-03.jpg" alt="vercel-website-deploy-nhavantuonglai" title="vercel-website-deploy-nhavantuonglai" height=100% width=100%><figcaption><p>vercel-website-deploy-nhavantuonglai</p></figcaption></figure>

## Cấu trúc thư mục dự án

Cấu trúc thư mục của `\article-open` được tổ chức lại, bổ sung thêm các file, folder mới, giúp mọi thứ trở nên khoa học và dễ bảo trì, cập nhật. Cụ thể:

```

article-open/
├── public/ | folder tài liệu.
└── src/ | folder tổng.
	├── assets/ | Cấu hình chung.
	│	├── favicons/
	│	│	├── core.astro
	│	│	├── logo.astro | Cấu hình logo.
	│	├── styles/
	│	│	├── custom.astro
	│	│	├── framer.jsx | Cấu hình hiệu ứng.
	│	│	├── tailwind.css | Cấu hình giao diện.
	├── components/
	│	├── analytics/ | Cấu hình công cụ.
	│	│	├──  Danh sách trang.
	│	├── article/
	│	│	├── bloglist.astro | Danh sách bài viết.
	│	│	├── diagram.astro
	│	│	├── grid.astro | Sắp xếp xếp danh sách bài viết.
	│	│	├── headline.astro | Headline bài viết.
	│	│	├── highlighted.astro | Highlighted bài viết.
	│	│	├── latest.astro | Bài viết mới nhất.
	│	│	├── link.astro | Liên kết bài viết.
	│	│	├── list.astro | Danh sách bài viết.
	│	│	├── pagination.astro | Phân trang.
	│	│	├── related.astro | Bài viết liên quan.
	│	│	├── single.astro | Cấu hình nội dung bài viết.
	│	│	├── table.astro | Cấu hình mục lục.
	│	│	├── tags.astro | Cấu hình thẻ bài viết.
	│	├── common/
	│	│	├── image.astro | Cấu hình hình ảnh.
	│	│	├── meta.astro | Cấu hình meta tag generator.
	│	│	├── metadata.astro | Cấu hình meta tag generator.
	│	│	├── social.astro | Cấu hình chia sẻ lên mạng xã hội.
	│	│	├── toggle-menu.astro | Cấu hình menu.
	│	│	├── toggle-theme.astro | Cấu hình giao diện dark mode.
	│	├── content/
	│	│	├── analytics/ | Nội dung các công cụ.
	│	│	│ 	├── Danh sách trang.
	│	│	├── services/ | nội dung các dịch vụ.
	│	│	│ 	├── Danh sách trang.
	│	│	├── action.astro | Nội dung CTA.
	│	│	├── article.astro | Nội dung danh sách bài viết.
	│	│	├── asked.astro | Câu hỏi thường gặp.
	│	│	├── brands.astro | Danh sách thương hiệu, đối tác
	│	│	├── hero.astro | Nội dung giới thiệu.
	│	│	├── prices.astro | Nội dung chính sách giá.
	│	│	├── testimonials.astro | Nội dung chứng thực xã hội.
	│	├── javascript/
	│	│	├── analytics.astro
	│	│	├── anti-copy.astro | Chặn copy, áp dụng trong bài viết.
	│	│	├── basic.astro
	│	│	├── color.astro
	│	│	├── dcma.astro | Bảo vệ nội dung.
	│	│	├── openstatus.astro | Theo dõi trạng thái website.
	│	│	├── open-tab.astro | Tự động mở trang.
	│	│	├── progress.astro | Tiến trình đọc bài viết.
	│	│	├── schema.astro | Thẻ schema.
	│	│	├── table.astro | Mục lục bài viết.
	│	├── ui/ | Cấu hình giao diện tương tác.
	│	│	├── background.astro | Cấu hình nền trang.
	│	│	├── block.astro
	│	│	├── button.astro | Cấu hình nút CTA.
	│	│	├── divide.astro
	│	│	├── headline.astro | Cấu hình heading.
	│	│	├── wrapper.astro
	│	├── widgets/ | Cấu hình giao diện.
	│	│	├── analytics.astro | Tracking google analytics.
	│	│	├── brands.astro | Cấu hình giao diện thương hiệu.
	│	│	├── footer.astro | Cấu hình chân trang.
	│	│	├── header.astro | Cấu hình menu đầu trang.
	│	│	├── hero.astro | Cấu hình giới thiệu.
	│	│	├── pricing.astro | Cấu hình chính sách giá.
	│	│	├── question.astro | Cấu hình câu hỏi thường gặp.
	│	│	├── services.astro | Cấu hình dịch vụ.
	│	│	├── testimonials.astro | Cấu hình chứng thực xã hội.
	├── content/
	│	├── blog/ | Danh sách bài viết.
	│	│	├── | Danh sách bài viết, với slug là tiêu đề.
	│	├── config.ts | Cấu hình bài viết.
	├── integration/
	│	│	├── config-builder.ts
	│	│	├── utils
	│	│	├── index.mjs
	│	│	├── types.d.ts
	├── layouts/
	│	│	├── main.astro | Cấu hình giao diện chính.
	│	│	├── markdown.astro | Cấu hình trang định dạng markdown.
	│	│	├── page.astro | Cấu hình trang bài viết.
	├── pages/
	│	├── […blog]/
	│	│	├── [tag]/
	│	│	│	├── […page].astro | Cấu hình danh sách thẻ bài viết.
	│	│	├── […page].astro | Cấu hình danh sách bài viết.
	│	│	├── index.astro | Cấu hình giao diện bài viết.
	│	├── analytics/ | Cấu hình giao diện trang công cụ.
	│	│	├── Danh sách trang.
	│	├── services/ | Cấu hình giao diện trang dịch cụ.
	│	│	├── Danh sách trang.
	│	├── 404.astro | Cấu hình giao diện trang 404.
	│	├── about.md
	│	├── policy.md
	│	├── term.md
	│	├── version.md
	│	├── contact.astro
	│	├── index.astro | Cấu hình giao diện trang chủ.
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

Dựa trên cấu trúc thư mục, website sẽ được triển khai thành các trang, trang con như sau:

```

Trang chủ/
├── Giới thiệu.
├── Bài viết.
│	├── Trang 0.
│	│	├── Bài viết 1.
│	│	├── Bài viết 2.
│	│	├── Bài viết 3.
│	├── Trang 1.
│	├── Trang 1.
│	└── Trang 2.
├── Thẻ bài.
│	├── Thẻ bài 1.
│	│	├── Trang thẻ bài 1.
│	│	│	 ├── Bài viết 1.
│	│	│	 ├── Bài viết 2.
│	│	│	 ├── Bài viết 3.
│	│	├── Trang thẻ bài 2.
│	│	├── Trang thẻ bài 3.
│	├── Thẻ bài 2.
│	├── Thẻ bài 3.
├── Dịch vụ.
├── Liên hệ.
├── Điều khoản.
├── Chính sách.
└── Phiên bản.

```

Mỗi mục trên trang chính dẫn đến một trang hoặc phần khác của website, giúp người dùng dễ dàng điều hướng và tìm kiếm thông tin.

<figure><img src="https://banmaixanh.org/image/article/ma-nguon-mo-04.jpg" alt="vercel-website-deploy-nhavantuonglai" title="vercel-website-deploy-nhavantuonglai" height=100% width=100%><figcaption><p>vercel-website-deploy-nhavantuonglai</p></figcaption></figure>

## Hướng dẫn triển khai dự án qua Vercel

Quá trình tạo website dựa trên mã nguồn `\article-open` có thể thực hiện theo hai phương pháp chính, mỗi phương pháp đều có những ưu điểm và hạn chế riêng. Việc lựa chọn phương pháp phù hợp sẽ phụ thuộc vào nhu cầu cụ thể của dự án và mức độ kinh nghiệm của bạn.

### Triển khai trực tiếp qua Vercel

Triển khai dự án trực tiếp qua [Vercel](https://nhavantuonglai.com/article/vercel) là phương pháp nhanh chóng, đơn giản nhất để public website từ mã nguồn `\article-open.`

Đầu tiên, [đăng ký và đăng nhập Vercel](https://vercel.com/new) tại đây. Quá trình này yêu cầu tạo mới tài khoản [GitHub](https://nhavantuonglai.com/article/github), hoặc liên kết với tài khoản sẵn có để lưu trữ mã nguồn.

Sau đó, click vào _New project_ và chọn _Import git repository,_ và nhập url repository của dự án `\article-open` tại:

```
https://github.com/nhavantuonglai/article-open.git
```

Dựa trên mã nguồn đầu vào, Vercel sẽ tạo repository mới cho bạn trong Github. Như vậy, website đã được deploy thành công.

Phương pháp này rất nhanh và đơn giản, phù hợp với những ai muốn trải nghiệm giao diện của `\article-open` ngay lập tức. Nhưng việc cập nhật rất hạn chế, và bảo trì mã nguồn cũng gặp khó khăn.

### Triển khai gián tiếp thông qua Github

Với phương pháp này, bạn cũng cần tạo và sử dụng Github để quản lý mã nguồn. Đầu tiên, cần clone repository `\article-open` về tài khoản cá nhân bằng cách nhập:

```
gh repo clone nhavantuonglai/article-open
```

Sau đó, truy cập vào Vercel, đăng ký tài khoản hoặc lựa chọn đăng nhập bằng Github, rồi _Import repository_ tương tự như trên. Mã nguồn sẽ được lưu, quản lý và điều chỉnh trực tiếp trên tài khoản của bạn, giúp các cập nhật, bảo trì trở nên dễ dàng và thuận tiện. Tuy vậy, quá trình này tốn nhiều bước, và không phải ai lúc ban đầu cũng làm quen được.

<figure><img src="https://banmaixanh.org/image/article/website-deploy-05.jpg" alt="vercel-website-deploy-nhavantuonglai" title="vercel-website-deploy-nhavantuonglai" height=100% width=100%><figcaption><p>vercel-website-deploy-nhavantuonglai</p></figcaption></figure>

Sau khi hoàn tất, bạn có thể truy cập vào _Domain_ để chỉnh lại subdomain mặc định, hoặc gán domain cá nhân vào.

## Hướng dẫn cập nhật giao diện, nội dung website bằng VS Code

Để bắt đầu, bạn cần tải và cài đặt [Visual Studio Code](https://nhavantuonglai.com/article/vs-code), Node.js và các điều chỉnh liên quan. Sau đó, mở folder chứa mã nguồn dự án rồi chạy lệnh sau để cài đặt các node liên quan:

```
npm install
```

Sau khi hoàn tất, chạy tiếp lệnh:

```
npm run dev
```

Tiếp theo nữa, truy cập vào url sau  để xem giao diện website trên máy cục bộ (localhost):

```
http://localhost:4321/
```

Để điều chỉnh, cập nhật các nội dung hiển thị trên website, bạn cần tìm đúng folder, file tương ứng như phần _Cấu trúc thư mục dự án_ nêu trên để điều chỉnh, sau khi lưu thì giao diện website ở localhost cũng nhanh chóng được cập nhật, và nếu gặp lỗi thì sẽ báo tức thì.

Sau khi hoàn tất, bạn chỉ cần mở Github Desktop lên, commit các thay đổi rồi đợi deploy website, và như vậy, website đã được cập nhật thành công.

<figure><img src="https://banmaixanh.org/image/article/vercel-website-deploy-01.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>

## Contact Information

– Email: [info@nhavantuonglai.com](mailto:info@nhavantuonglai.com).

– Website: [nhavantuonglai.com](https://nhavantuonglai.com/).

If you have any questions, need support, or wish to collaborate, do not hesitate to contact github/nhavantuonglai via email at [info@nhavantuonglai.com](mailto:info@nhavantuonglai.com) for the quickest and most convenient connection.

<figure><img src="https://banmaixanh.org/image/cover/001-524.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>