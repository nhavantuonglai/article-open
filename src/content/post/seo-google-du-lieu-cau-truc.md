---
pubDatetime: 2023-05-12T10:00:00Z
title: Ưu và nhược điểm của dữ liệu cấu trúc trong Google Search
description: Giúp Google và người dùng tìm thấy nội dung website hướng dẫn nâng cao những kỹ thuật giúp tối ưu SEO hiệu quả, đem lại thứ hạng tốt trên công cụ tìm kiếm.
featured: false
image: https://data.nhavantuonglai.com/image/illustrations/cover-nhavantuonglai-com-0149.jpg
tags:
  - google
  - google console
  - google search
  - seo
  - google seo
  - content
  - developer
---

Các bài đánh giá sản phẩm là một tài nguyên hữu ích giúp người dùng tìm hiểu sản phẩm để mua. Các bài đánh giá sản phẩm thường chứa danh sách ưu và nhược điểm. Nghiên cứu của chúng tôi cho thấy người mua sắm khá quen thuộc với loại danh sách này khi họ đưa ra quyết định mua hàng. Do tầm quan trọng của chúng đối với người dùng, Google Search có thể làm nổi bật ưu và nhược điểm trong đoạn trích thông tin đánh giá sản phẩm trên kết quả của Google Search.

Bạn có thể cho Google biết về các ưu và nhược điểm bằng cách cung cấp dữ liệu có cấu trúc cho ưu và nhược điểm trên các trang đánh giá biên tập. Khi thêm dữ liệu có cấu trúc vào các website, bạn có thể dùng công cụ `Kiểm tra kết quả nhiều định dạng` để đảm bảo dữ liệu đó chính xác và hợp lệ cho Google Search. Công cụ này mới mở rộng để kiểm tra dữ liệu có cấu trúc cho ưu và nhược điểm (bên cạnh mọi loại dữ liệu có cấu trúc khác mà Google Search hỗ trợ).

Nếu bạn không cung cấp dữ liệu có cấu trúc, có thể Google sẽ cố gắng tự động xác định các ưu và nhược điểm được nêu trên website. Google sẽ ưu tiên dữ liệu có cấu trúc mà bạn cung cấp thay vì dữ liệu được trích xuất tự động. Chúng tôi đã thử nghiệm tính năng này với các chủ sở hữu website và nhận được ý kiến phản hồi tích cực.

Sau đây là ví dụ về một website sử dụng dữ liệu có cấu trúc JSON-LD có thể dùng cho trải nghiệm kết quả Google Search ở trên. Xin lưu ý rằng văn bản trong dữ liệu có cấu trúc phải khớp với văn bản trên trang của bạn.

```
<html>
	<head>
	<title>Cheese Knife Pro review</title>
	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "Product",
		"name": "Cheese Knife Pro",
		"review": {
		"@type": "Review",
		"name": "Cheese Knife Pro review",
		"author": {
			"@type": "Person",
			"name": "Pascal Van Cleeff"
		},
		"positiveNotes": {
			"@type": "ItemList",
			"itemListElement": [
			{
				"@type": "ListItem",
				"position": 1,
				"name": "Consistent results"
			},
			{
				"@type": "ListItem",
				"position": 2,
				"name": "Still sharp after many uses"
			}
			]
		},
		"negativeNotes": {
			"@type": "ItemList",
			"itemListElement": [
			{
				"@type": "ListItem",
				"position": 1,
				"name": "No child protection"
			},
			{
				"@type": "ListItem",
				"position": 2,
				"name": "Lacking advanced features"
			}
			]
		}
		}
	}
	</script>
 </head>
 <body>
 …
	<p>Pros:</p>
	<ul>
	<li>Consistent results</li>
	<li>Still sharp after many uses</li>
	</ul>
	<p>Cons:</p>
	<ul>
	<li>No child protection</li>
	<li>Lacking advanced features</li>
	</ul>
 …
 </body>
</html>
```

Hiện tại, chỉ các trang biên tập đánh giá về sản phẩm mới đủ điều kiện xuất hiện kèm theo ưu và nhược điểm trên Google Search; các trang sản phẩm của người bán và bài đánh giá sản phẩm của người dùng thì không. Chúng tôi cung cấp trải nghiệm này bằng tiếng Hà Lan, tiếng Anh, tiếng Pháp, tiếng Đức, tiếng Ý, tiếng Nhật, tiếng Ba Lan, tiếng Bồ Đào Nha, tiếng Tây Ban Nha và tiếng Thổ Nhĩ Kỳ ở mọi quốc gia có Google Search.

<figure><img src="https://data.nhavantuonglai.com/image/illustrations/cover-nhavantuonglai-com-0110.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>