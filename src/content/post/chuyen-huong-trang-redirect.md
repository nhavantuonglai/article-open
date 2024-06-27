---
pubDatetime: 2021-05-11T10:00:00Z
title: Hướng dẫn cài đặt lệnh chuyển hướng trang (redirect)
description: Lệnh chuyển hướng trang là phân giải trang hiện tại (cũ) thành trang khác (mới), qua đó thông báo với người dùng và công cụ tìm kiếm biết rằng website đã có địa chỉ mới.
featured: false
image: https://data.nhavantuonglai.com/image/illustrations/cover-nhavantuonglai-com-0127.jpg
tags:
  - google
  - google console
  - seo
  - google seo
  - redirect
  - website
  - website builder
  - developer
---

_Lệnh chuyển hướng trang là phân giải trang hiện tại (cũ) thành trang khác (mới), qua đó thông báo với người dùng và công cụ tìm kiếm biết rằng website đã có địa chỉ mới._

## Lệnh chuyển hướng trang (redirect) là gì?

Lệnh chuyển hướng trang là phân giải trang hiện tại (cũ) thành trang khác (mới), qua đó thông báo với người dùng và công cụ tìm kiếm biết rằng website đã có địa chỉ mới. Ví dụ:

– Khi truy cập [https://nhavantuonglai.com/article/](https://nhavantuonglai.com/article/), người dùng sẽ được chuyển hướng sang [https://nhavantuonglai.com/article/](https://nhavantuonglai.com/article/).

– Trong đó, [https://nhavantuonglai.com/article/](https://nhavantuonglai.com/article/) là website cũ, vận hành trên nền tảng cũ; còn [https://nhavantuonglai.com/article/](https://nhavantuonglai.com/article/) là website mới, vận hành trên nền tảng mới, linh hoạt hơn.

## Lệnh chuyển hướng trang hữu ích trong các trường hợp nào?

– Website của bạn thay đổi địa chỉ, chuyển từ domain cũ sang domain mới.

– Người dùng không xác định đúng trang chính xác. Ví dụ: cùng là nhavantuonglai.com, người dùng có thể truy cập thông qua [https://nhavantuonglai.com](https://nhavantuonglai.com/article/), [http://nhavantuonglai.com](http://nhavantuonglai.com), [https://info.nhavantuonglai.com](https://info.nhavantuonglai.com), [http://info.nhavantuonglai.com](http://info.nhavantuonglai.com).

– Hợp nhất các tên miền, và đảm bảo mọi trang cũ, lỗi thời đều được chuyển hướng đúng đích.

## Tại sao cần dùng lệnh chuyển hướng trang (redirect)?

– Bảo mật: Chuyển hướng người dùng từ một trang không an toàn (HTTP) sang một trang an toàn (HTTPS).

– Thân thiện với người dùng: Chuyển hướng người dùng từ một trang bị lỗi hoặc không tồn tại sang một trang khác có nội dung liên quan hoặc thông báo lỗi.

– Tối ưu hóa SEO: Chuyển hướng người dùng từ một trang có trang dài hoặc khó nhớ sang một trang có trang ngắn hoặc dễ nhớ.

– Thống kê: Chuyển hướng người dùng qua một trang trung gian để theo dõi số lượt truy cập, thời gian truy cập, nguồn gốc truy cập…

## Các loại lệnh chuyển hướng trang (redirect)

Người dùng không phân biệt được các lệnh chuyển hướng trang, nhưng với công cụ tìm kiếm thì có; chúng như tín hiệu, thông điệp về trang chính tắc. Chính vì vậy, website của bạn cần xác định đúng loại lệnh chuyển hướng trang, và muốn công cụ tìm kiếm hiển thị trang nào trên kết quả Google Search.

Có 2 lệnh chuyển hướng cơ bản, đó là:

– Chuyển hướng vĩnh viễn: Trang mới sẽ hiển thị trên kết quả Google Search.

– Chuyển hướng tạm thời: Trang cũ sẽ hiển thị trên kết quả Google Search.

Từ đó, bạn có thể lựa chọn mô hình lệnh chuyển hướng phù hợp, giúp công cụ tìm kiếm hiểu đúng và thực thi lệnh chuyển hướng đáp ứng yêu cầu của website. Có 2 hình thức tạo lệnh chuyển hướng, đó là:

– Chuyển hướng trên phía máy chủ (Server-side redirect): Là loại chuyển hướng được thực hiện bởi máy chủ website, thông qua các mã trạng thái HTTP như 301 (Moved Permanently), 302 (Found), 303 (See Other)… Loại chuyển hướng này có tốc độ nhanh, ít bị ảnh hưởng bởi các thiết bị hoặc trình duyệt của người dùng, và thường được sử dụng để tối ưu hóa SEO. Ví dụ về chuyển hướng trên phía máy chủ bằng PHP:


```
php
<?php
// Chuyển hướng người dùng sang nhavantuonglai.com
header(_location: https://nhavantuonglai.com_);
exit;
?>
```


_– Chuyển hướng trên phía khách hàng (Client-side redirect):* Là loại chuyển hướng được thực hiện bởi trình duyệt của người dùng, thông qua các ngôn ngữ lập trình như HTML, JavaScript… Loại chuyển hướng này có tốc độ chậm hơn, có thể bị chặn bởi các thiết bị hoặc trình duyệt của người dùng, và thường được sử dụng để tạo hiệu ứng hoặc thông báo cho người dùng. Ví dụ về chuyển hướng trên phía khách hàng bằng HTML:


```
<html>
<head>
<meta http-equiv=_refresh" content="1;url=https://nhavantuonglai.com">
</head>
</html>
```


Như vậy, lệnh chuyển hướng trang (redirect) là kỹ thuật quan trọng trong lập trình website, có nhiều ứng dụng và cách thực hiện khác nhau. Tùy vào mục đích và yêu cầu của từng website, lập trình viên website có thể lựa chọn loại chuyển hướng phù hợp nhất.

<figure><img src="https://data.nhavantuonglai.com/image/illustrations/cover-nhavantuonglai-com-0139.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>