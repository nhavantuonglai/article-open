---
pubDatetime: 2024-05-19T10:10:00Z
title: Hướng dẫn tạo thẻ tiến trình bài viết trên Webflow
description: Hướng dẫn thực hiện các thủ thuật công nghệ giúp bạn tiết kiệm thời gian, công sức và đầu tư vào những công việc hiệu quả hơn. Liên hệ info@nhavantuonglai.com để hỗ trợ thao tác.
featured: false
image: https://banmaixanh.org/image/cover/001-149.jpg
tags:
  - websiteflow
  - website
  - website builder
  - developer
---

_Webflow là nền tảng thiết kế website hiện đại, chuyên nghiệp và thân thiện với người dùng. Webflow cung cấp khả năng xây dựng, tùy biến website hoàn chỉnh mà không cần quan tâm, hiểu biết quá nhiều về kiến thức lập trình, code, html… và ghép lai giữa các nền tảng thiết kế website phổ biến như Wix, hay Wordpress, giúp việc làm quen với người dùng mới là không quá bỡ ngỡ._

## Webflow là gì?

Webflow là nền tảng thiết kế website hiện đại, chuyên nghiệp và thân thiện với người dùng. Webflow cung cấp khả năng xây dựng, tùy biến website hoàn chỉnh mà không cần quan tâm, hiểu biết quá nhiều về kiến thức lập trình, code, html… và ghép lai giữa các nền tảng thiết kế website phổ biến như Wix, hay Wordpress, giúp việc làm quen với người dùng mới là không quá bỡ ngỡ.

Tính hiện đại thể hiện qua các chức năng và khả năng xử lý đáp ứng nhu cầu từ cơ bản đến nâng cao về xây dựng website. Tính chuyên nghiệp thể hiện qua khả năng cộng tác, phân quyền, sao lưu dữ liệu, hỗ trợ từ cộng đồng cũng như flow thao tác khoa học, rõ ràng. Tính thân thiện thể hiện qua giao diện tương tác, và nhiều gói giá phù hợp với nhiều đối tượng, nhóm nhu cầu khác nhau.

## Ưu điểm khi sử dụng Webflow để thiết kế website

Đây cũng là nền tảng thiết kế website hiện đại, chuyên nghiệp và thân thiện với người dùng.

– Kho template (giao diện mẫu) đa dạng, đáp ứng phong phú nhu cầu và mục đích xây dựng website. Ngoài phân loại theo nhu cầu và cách xây dựng website, các template cũng được phân theo bản miễn phí và trả phí, với những tính năng nâng cao, cap cấp giúp website vận hành tốt hơn với một chi phí cạnh tranh hơn.

– Giao diện người dùng (UI) mượt mà, linh hoạt và dễ sử dụng, phân bổ chức năng theo nhóm, giúp người không chuyên dễ dàng làm quen và người dùng chuyên nghiệp biết nên tùy chỉnh website như thế nào.

– Code website sạch, không làm chậm, giảm hiệu năng của website, giúp hệ thống vận hành nhanh, trải nghiệm mượt mà, từ đó tạo nên trải nghiệm người dùng tích cực trên website của bạn.

– Quản lý hình động, nội dung tĩnh với các trình hỗ trợ CSS, JS, CMS… được tích hợp sẵn trên hệ thống, giúp tùy biến và tinh chỉnh website trở nên linh hoạt, dễ dàng hơn.

## Chi phí sử dụng Webflow là bao nhiêu?

Webflow là nền tảng thiết kế website hiện đại, chuyên nghiệp và thân thiện với người dùng. Để khai thác hết tiềm năng, người dùng cần trả phí thuê bao theo tháng, và có thể tính tiền theo năm để tiết kiệm hơn. Các plan website (gói giá dịch vụ) của Webflow bao gồm:

– 12$/ 1 tháng, để bật SSL, đấu domain, CDN tự động, dễ dàng thiết lập và tự động một số hạng mục.

– 16$/ 1 tháng, để triển khai website tĩnh, khai thác CMS hiệu quả hơn.

– 29$/ 1 tháng, để kích hoạt tính năng thương mại điện tử, giúp bán hàng và thanh toán trực tuyến ngay trên website.

– 36$/ 1 tháng, để mở rộng quy mô, phù hợp với các website có lưu lượng lớn, với nhiều nhu cầu và tính năng hiển thị trên website.

Ngoài ra, bạn cũng có thể sử dụng gói miễn phí để trải nghiệm, làm quen và xây dựng trước website. Gói này được phép tạo tối đa 2 website, dùng tên miền phụ là websiteflow.io. hạn chế tạo page mới và dùng các plugin của bên thứ 3. Còn lại gần như không khác gì phiên bản trả phí. Dưới đây là hướng dẫn tạo thẻ tiến trình viết trên Webflow. Chi tiết thực hiện vui lòng liên hệ info@nhavantuonglai.com để được hỗ trợ.

## Bước 1: Truy cập Webflow

– Truy cập: [https://websiteflow.com/dashboard](https://websiteflow.com/dashboard?).

– Chọn website cần tạo thẻ thời gian đọc bài viết trên Webflow.

## Bước 2: Chuyển sang chế độ cài đặt

– Tại trang CMS, truy cập chế độ Cài đặt thông qua icon bánh răng cưa.

– Dán script sau vào thẻ <body>:

```
<script src="https://tools.refokus.com/time-to-read.js"></script>
```

## Bước 4: Thiết lập thẻ thời gian đọc bài viết trên Webflow

Attribute: `time-to-read`

Giá trị (value): `.c-rich-content`

Tại block text muốn hiển thị thẻ thời gian đọc bài viết trên Webflow, thêm attribute và gán value theo đúng `rick text block` của bài viết.

## Bước 4: Tải lại trang và kiểm tra.

<figure><img src="https://banmaixanh.org/image/cover/001-139.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>