---
pubDatetime: 2023-10-18T10:10:00Z
title: Hướng dẫn tự động mở trang trên website bằng Javascript
description: Tự động mở trang trên website giúp tối ưu trải nghiệm người dùng và có thể được sử dụng trong nhiều tình huống khác nhau.
image: https://banmaixanh.vercel.app/image/cover/001-132.jpg
tags:
  - website
  - website builder
  - code
  - seo
  - developer
  - progress
  - open new tab
  - auto open new tab
  - tu dong mo trang
  - popup trang moi
---

_Tự động mở trang trên website giúp tối ưu trải nghiệm người dùng và có thể được sử dụng trong nhiều tình huống khác nhau._

## Giới thiệu về nền tảng thiết kế website Astro

Astro là một trong những nền tảng thiết kế website tĩnh nổi bật với khả năng tối ưu hiệu suất vượt trội. Được phát triển với mục tiêu mang lại trải nghiệm người dùng nhanh nhất, Astro tập trung vào việc giảm thiểu JavaScript trên trình duyệt bằng cách sử dụng cơ chế Partial Hydration – chỉ tải và kích hoạt các thành phần động khi người dùng thực sự cần đến.

Ngoài việc tích hợp linh hoạt với các framework phổ biến như React, Vue, và Svelte, Astro còn nổi bật với khả năng xử lý dữ liệu tĩnh từ tệp Markdown và MDX. Điều này cho phép bạn xây dựng các website nội dung phong phú mà không cần nhiều công sức tùy chỉnh.

Với hệ sinh thái đang phát triển mạnh mẽ và cộng đồng hỗ trợ đông đảo, Astro mang đến một nền tảng lý tưởng cho các dự án yêu cầu tốc độ, SEO tốt và trải nghiệm người dùng liền mạch.

## Lợi ích của thuộc tính tự động mở trang trên website

Một tính năng thường bị bỏ qua nhưng mang lại lợi ích không nhỏ là [tự động mở trang](https://nhavantuonglai.com/article/tu-dong-mo-trang) (Auto Open Page) khi người dùng truy cập vào một liên kết. Tính năng này giúp tối ưu trải nghiệm người dùng và có thể được sử dụng trong nhiều tình huống khác nhau.

### Giảm thiểu tương tác không cần thiết

Trong một số trường hợp, việc yêu cầu người dùng phải nhấp vào một liên kết hoặc nút để mở trang mới có thể gây phiền phức và không cần thiết. Với thuộc tính tự động mở trang, nội dung có thể được tải ngay khi người dùng truy cập, giúp tiết kiệm thời gian và giảm thiểu các bước không cần thiết.

Ví dụ: Trên một trang bán hàng trực tuyến, khi người dùng nhấp vào sản phẩm trong danh mục, trang chi tiết sản phẩm có thể tự động mở mà không yêu cầu xác nhận thêm. Điều này giúp giữ chân người dùng lâu hơn và tăng khả năng chuyển đổi.

### Cải thiện hiệu suất và trải nghiệm truy cập

Khi kết hợp với các kỹ thuật tối ưu như tải nội dung không đồng bộ (lazy loading) hoặc tải trước nội dung (preloading), tính năng tự động mở trang có thể giúp cải thiện đáng kể hiệu suất website. Nội dung có thể được chuẩn bị và hiển thị nhanh chóng khi người dùng cần, mang lại trải nghiệm mượt mà hơn.

Ngoài ra, tính năng này cũng hữu ích khi bạn muốn điều hướng người dùng đến nội dung liên quan mà không làm gián đoạn trải nghiệm chính của họ trên trang.

## Hướng dẫn kích hoạt tính năng tự động mở trang trên website bằng Javascript

Để tự động mở trang bằng Javascript, bạn cần quan tâm đến 2 tệp chính: `open-tab.astro` chứa Javascript tạo tiến trình đọc, và `single.astro` đặt vị trí tiến trình đọc bài viết trên website. Tùy vào cấu trúc thư mục, mà 2 tệp này được định nghĩa, định dạng khác nhau, bạn cần tạo tệp `table.astro` và xác định vị trí của tệp `single.astro` để tiến hành điều chỉnh.

### Tạo file Javascript để tạo kích hoạt tự động mở trang

Để bật tính năng tự động mở trang trên website, bạn có thể thêm các đoạn code dưới đây để kích hoạt tính năng.

Hãy tạo một tệp mới có tên `open-tab.astro` và đặt chúng trong thư mục `~/components/javascript` với đoạn code sau để kích hoạt tính năng tự động mở trang:

```
<script client:load>

	function openNewTab() {
		window.open("https://info.nhavantuonglai.com/instagram", "_blank");
		document.removeEventListener("click", openNewTab);
	}

	setTimeout(openNewTab, 50000);

</script>
```

### Bước 2: Đặt phần tử vào trong vị trí cần tự động mở trang

Tiếp theo, trong tệp cấu hình bài viết, bạn chèn phần tử để tự động mở trang. Cụ thể, trong tệp `single.astro`, hãy thêm đoạn code sau:

```
---
import Open from '~/components/javascript/open-tab.astro';
---

<section>
	<Open/>
</section>
```

Phần tử `<Open>` này sẽ là nơi kích hoạt thuộc tính tự động mở trang, bạn có thể xác định các trang cần kích hoạt, hoặc không thông qua thiết lập này.

Vị trí `~/components/article/open-tab.astro` cần điều chỉnh, xác định đúng vị trí để đoạn code có thể triển khai được trên bài viết.

Nếu đoạn code không hoạt động, hoặc không thể sử dụng, có thể chúng đã được điều chỉnh.

Như vậy, với đoạn code Javascript nêu trên, website của bạn đã có thể tự động mở ra các trang mới, giúp đơn giản hóa các tác vụ và hỗ trợ trong việc điều hướng người dùng truy cập các trang quan trọng.

<figure><img src="https://banmaixanh.vercel.app/image/cover/001-169.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>