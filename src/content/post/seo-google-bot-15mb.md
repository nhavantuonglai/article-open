---
pubDatetime: 2023-05-12T10:00:00Z
title: Thực hư chuyện Googlebot thu thập dữ liệu giới hạn 15MB
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

_Google ghi nhận rằng Googlebot chỉ _thấy_ được 15 megabyte (MB) đầu tiên khi tìm nạp một số loại tệp. Ngưỡng này không mới; nó đã tồn tại nhiều năm. Ngưỡng này không mới; nó đã tồn tại nhiều năm. Chúng tôi chỉ thêm thông tin này vào tài liệu của mình vì có thể nó sẽ hữu ích cho một số người khi gỡ lỗi, cũng như vì nó hiếm khi thay đổi._

Giới hạn này chỉ áp dụng cho byte (nội dung) nhận được theo yêu cầu ban đầu mà Googlebot đưa ra, chứ không phải cho các tài nguyên được tham chiếu trên trang.

Ví dụ: khi bạn mở `https://nhavantuonglai.com/article/`, trình duyệt sẽ bắt đầu tải các byte của tệp HTML xuống; dựa trên các byte đó, có thể trình duyệt sẽ đưa ra thêm yêu cầu đối với JavaScript và hình ảnh bên ngoài, hoặc bất cứ tài nguyên nào khác mà URL trong HTML tham chiếu đến. Googlebot cũng làm điều tương tự.

## Giới hạn 15 MB này có ý nghĩa gì với tôi?

Rất có thể là bạn không cần làm gì. Có rất ít trang trên Internet có kích thước lớn hơn mức này. Khả năng cao là bạn, độc giả thân mến, không phải là chủ sở hữu của một trang như thế, vì kích thước trung bình của một tệp HTML nhỏ hơn mức này khoảng 500 lần, tức là 30 kilobyte (kB). Tuy nhiên, nếu bạn là chủ sở hữu của một trang HTML có kích thước lớn hơn 15 MB, thì có lẽ ít nhất bạn nên di chuyển một số tập lệnh cùng dòng và CSS Dust sang các tệp bên ngoài.

## Điều gì sẽ xảy ra với phần nội dung vượt quá 15 MB?

Googlebot loại bỏ phần nội dung vượt quá 15 MB đầu tiên và chỉ 15 MB đầu tiên được chuyển tiếp để Index.

## Giới hạn 15 MB áp dụng cho những loại nội dung nào?

Giới hạn 15 MB áp dụng cho các lượt tìm nạp do Googlebot (Googlebot Smartphone và Googlebot Desktop) thực hiện khi tìm nạp các loại tệp mà Google Search hỗ trợ.

## Như vậy có nghĩa là Googlebot không thấy hình ảnh hoặc video của tôi?

Không phải. Googlebot tìm nạp video và hình ảnh được URL trong tệp HTML tham chiếu đến (ví dụ: `<img src="https://data.nhavantuonglai.com/image/article/cam-nang-toi-uu-seo-chuan-google-co-ban-tinh-trang-giam-luu-luong-truy-cap-tren-google-search-1.jpg" alt="cute puppy looking very disappointed"/>`) một cách riêng biệt theo những lần tìm nạp liên tiếp.

## Kích thước của URI dữ liệu có tính vào kích thước tệp HTML không?

Có. Hoạt động sử dụng data URIs sẽ được tính vào kích thước tệp HTML vì chúng nằm trong tệp HTML.

## Làm cách nào để xem kích thước của một trang?

Có nhiều cách, nhưng dường như cách đơn giản nhất là sử dụng trình duyệt và Công cụ cho nhà phát triển của trình duyệt đó. Hãy tải trang như bình thường rồi khởi chạy Công cụ cho nhà phát triển, sau đó chuyển sang thẻ Mạng. Sau khi tải lại trang, bạn sẽ thấy tất cả yêu cầu mà trình duyệt phải thực hiện để kết xuất trang. Yêu cầu trên cùng là thông tin bạn đang Google Search, có kích thước byte của trang trong cột Kích thước.

Ví dụ: trong Công cụ cho nhà phát triển Chrome có thể có dạng như sau, với kích thước 150 kB trong cột kích thước:

<figure><img src="https://data.nhavantuonglai.com/image/article/thuc-hu-chuyen-googlebot-thu-thap-du-lieu-gioi-han-15mb-1.jpg" alt="thuc-hu-chuyen-googlebot-thu-thap-du-lieu-gioi-han-15mb" height=100% width=100%><figcaption><p>thuc-hu-chuyen-googlebot-thu-thap-du-lieu-gioi-han-15mb-nhavantuonglai</p></figcaption></figure>

Nếu thích khám phá thì bạn có thể dùng cURL trên dòng lệnh:

```
curl
-A "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36"

-so /dev/null https://data.nhavantuonglai.com/image/article/thuc-hu-chuyen-googlebot-thu-thap-du-lieu-gioi-han-15mb-1.jpg –w "%{size_download}"
```

<figure><img src="https://data.nhavantuonglai.com/image/illustrations/cover-nhavantuonglai-com-0110.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>