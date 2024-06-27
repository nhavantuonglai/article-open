---
pubDatetime: 2023-10-30T20:00:00Z
title: Hướng dẫn chống sao chép nội dung website bằng code
description: Vấn đề bản quyền nội dung website ở Việt Nam chưa được coi trọng, nên nội dung trên các website thường bị ăn cắp, sao chép để đăng tải trái phép, ảnh hưởng đến tác giả, website gốc ban đầu.
featured: false
image: https://data.nhavantuonglai.com/image/illustrations/cover-nhavantuonglai-com-0149.jpg
tags:
  - website
  - website builder
  - code
  - seo
  - developer
---

_Vấn đề bản quyền nội dung website ở Việt Nam chưa được coi trọng, nên nội dung trên các website thường bị ăn cắp, sao chép để đăng tải trái phép, ảnh hưởng đến tác giả, website gốc ban đầu._

## Phát hiện nội dung website bị sao chép

Nếu website sao chép nội dung thực hiện ẩu, họ sẽ copy các internal link có trong bài. Thông qua Google Webmaster Tool, chúng ta sẽ biết được đâu là website đã sao chép nội dung.

### Bước 1: Đăng nhập vào Google Search Console

– Truy cập mục Liên kết.

– Truy cập mục Các website liên kết hàng đầu, và chọn xem thêm. Tại đây, sẽ liệt kê toàn bộ các website đã backlink về website của bạn, kèm thông tin chi tiết.

<figure><img src="https://data.nhavantuonglai.com/image/article/huong-dan-chong-sao-chep-noi-dung-website-bang-code-01.jpg" alt=""><figcaption></figcaption></figure>

### Bước 2: Kiểm tra nội dung website có bị sao chép không

– Truy cập vào liên kết có backlink.

– Xem xét nội dung có bị sao chép không.

### Bước 3: Kiểm tra trên công cụ tìm kiếm

– Sao chép một đoạn văn bất kỳ trong bài viết, và đưa lên Google Search để kiểm tra.

– Nếu description: có đoạn in đậm là đoạn văn vừa Google Search, đó là nội dung website đã bị sao chép.

## Bảo vệ nội dung website, tránh bị đối thủ sao chép

Sao khi nhập bài viết mới lên website, người dùng cần nhanh chóng Index (index) bài viết đó với Google để khai báo nội dung, và được đánh dấu nội dung gốc. Cách Index bài viết trên Google như sau:

### Bước 1: Đăng nhập vào Google Search Console

– Truy cập mục Kiểm tra URL.

– Dán url bài viết lên thanh tìm kiếm và thực hiện truy vấn.

<figure><img src="https://data.nhavantuonglai.com/image/article/huong-dan-chong-sao-chep-noi-dung-website-bang-code-02.jpg" alt=""><figcaption></figcaption></figure>

### Bước 2: Yêu cầu Index bài viết

– Thực hiện Index bài viết.

### Bước 3: Kiểm tra nội dung đã được Index hay chưa

– Sau khoảng 01 ngày, thực hiện lại 2 bước trên, nếu có thông báo URL nằm trên Google tức nội dung đã được khai báo thành công.

<figure><img src="https://data.nhavantuonglai.com/image/article/huong-dan-chong-sao-chep-noi-dung-website-bang-code-03.jpg" alt=""><figcaption></figcaption></figure>

– Nếu chưa có, vui lòng đợi và thực hiện lại sau.

## Bảo vệ nội dung website chủ động, tránh bị đối thủ sao chép

Cách trên nhằm khai báo nội dung chính thức, bạn cũng có thể chống sao chép nội dung website bằng code. Cách thực hiện sau:

### Trong CSS

```
css
body {
 user-select: none;
}
```

### Trong HTML

```
html
<body oncopy=_return false;">
	<!-–Nội dung website –->
</body>
```

### Trong JavaScript

```
javascript
	document.addEventListener(_copy_, function (e) {
	e.preventDefault;
});
```

Tuy nhiên, bạn cũng nên lưu ý rằng các phương pháp này không thể hoàn toàn ngăn chặn việc sao chép nội dung, bởi vì người dùng vẫn có thể sử dụng các công cụ khác như chụp màn hình, xem mã nguồn, hoặc sử dụng các trình duyệt khác. Do đó, bạn nên cân nhắc kỹ trước khi áp dụng các phương pháp này, bởi vì chúng có thể gây khó khăn cho người dùng trung thực và ảnh hưởng đến trải nghiệm của họ.

<figure><img src="https://data.nhavantuonglai.com/image/illustrations/cover-nhavantuonglai-com-0139.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>