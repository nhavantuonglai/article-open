---
pubDatetime: 2023-04-20T10:10:00Z
title: Tại sao lỗi 4xx không tốt cho việc hạn chế tốc độ của Googlebot?
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

Vài tháng qua, gia tăng số lượng chủ sở hữu website và mạng phân phối nội dung (CDN) cố gắng sử dụng 404 và các lỗi ứng dụng khách 4xx khác (nhưng không phải 429) để cố gắng giảm tốc độ thu thập dữ liệu của Googlebot.

Tóm lại là: vui lòng không làm việc đó; chúng tôi có tài liệu về cách giảm tốc độ thu thập dữ liệu của Googlebot. Hãy đọc báo cáo đó và tìm hiểu cách quản lý tốc độ thu thập dữ liệu của Googlebot sao cho hiệu quả.

## Trở lại những điều cơ bản: lỗi 4xx là lỗi của ứng dụng khách

Máy chủ báo lỗi `4xx` trả về máy khách là một tín hiệu từ máy chủ cho biết rằng yêu cầu của máy khách không chính xác theo nghĩa nào đó. Hầu hết các lỗi trong danh mục này đều khá vô hại: lỗi _không tìm thấy,_ _bị cấm,_ _tôi là chiếc ấm trà_ (có thứ như vậy đấy). Chúng không cho thấy bất cứ điều gì xảy ra với máy chủ.

Một trường hợp ngoại lệ là `429`, tức là _quá nhiều yêu cầu._ Lỗi này là một tín hiệu rõ ràng cho bất kỳ rô-bốt hoạt động tốt nào (kể cả Googlebot yêu quý) rằng nó cần chậm lại vì nó đang làm quá tải máy chủ.

## Tại sao lỗi `4xx` không tốt cho việc hạn chế tốc độ của Googlebot (ngoại trừ `429`)

Lỗi ứng dụng khách chỉ là: lỗi ứng dụng khách. Chúng thường không gợi ý rằng có lỗi trong máy chủ: không phải là quá tải, không phải là do gặp lỗi nghiêm trọng cũng không phải là không thể phản hồi yêu cầu. Đơn giản chỉ là yêu cầu của ứng dụng khách không tốt theo một cách nào đó. Không có cách hợp lý nào tương đương, ví dụ như lỗi `404` đối với máy chủ bị quá tải. Hãy hình dung xem đây có phải là trường hợp của bạn hay không: bạn nhận được vô số lỗi `404` từ bạn bè khi vô tình liên kết nhầm website trên website của bạn và khi đó Googlebot sẽ chậm lại trong quá trình thu thập dữ liệu. Điều đó khá tệ. Tương tự như vậy đối với `403`, `410`, `418`.

Và một lần nữa, ngoại lệ lớn là mã trạng thái `429` nghĩa là _quá nhiều yêu cầu._

## Googlebot sẽ áp dụng những hạn chế nào đối với `4xx`

Tất cả mã trạng thái HTTP `4xx` (một lần nữa, ngoại trừ `429`) sẽ khiến nội dung của bạn bị xoá khỏi Google Search. Hơn nữa, nếu bạn cũng phân phát tệp robots.txt của mình bằng mã trạng thái HTTP `4xx`, thì tệp đó sẽ bị coi là không tồn tại. Nếu bạn có một quy tắc trong đó không cho phép thu thập dữ liệu rác, thì giờ đây Googlebot cũng biết về nó; không tốt cho bên nào cả.

## Cách đúng để giảm tốc độ thu thập dữ liệu của Googlebot

Chúng tôi có nhiều tài liệu về cách giảm tốc độ thu thập dữ liệu của Googlebot cũng như cách Googlebot (và chỉ mục của Google Search) xử lý các mã trạng thái HTTP; đừng quên xem những nội dung đó. Tóm lại, bạn nên làm một trong hai việc sau:

– Sử dụng Search Console để tạm thời giảm tốc độ thu thập dữ liệu.

– Trả về mã trạng thái HTTP `500`, `503` hoặc `429` cho Googlebot khi Google thu thập dữ liệu quá nhanh.

<figure><img src="https://data.nhavantuonglai.com/image/illustrations/cover-nhavantuonglai-com-0110.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>