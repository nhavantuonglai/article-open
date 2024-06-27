---
pubDatetime: 2023-05-12T10:00:00Z
title: Giải thích dễ hiểu những lỗi Google Search Console thường gặp
description: Giúp Google và người dùng tìm thấy nội dung website hướng dẫn nâng cao những kỹ thuật giúp tối ưu SEO hiệu quả, đem lại thứ hạng tốt trên công cụ tìm kiếm.
featured: false
image: https://data.nhavantuonglai.com/image/illustrations/cover-nhavantuonglai-com-0349.jpg
tags:
  - google
  - google console
  - seo
  - google seo
  - content
  - developer
---
 
_Giải thích dễ hiểu những lỗi Google Search Console thường gặp, khi nhiều người bối rối những vấn đề phát sinh trong quá trình index website. Điều này cũng dễ hiểu: Có nhiều vấn đề có thể phát sinh khi truy cập website, nhưng tất cả (không có ngoại lệ) đều dẫn tới một hệ thống nào đó khiến cho việc truy cập khả thi. Trong bài viết dưới đây, hãy cùng làm sáng tỏ về các lỗi và có lẽ làm cho chúng bớt đáng sợ hơn một chút._

## Mở đầu

Tôi thích sách, vì vậy khi tôi còn nhỏ, trong khi mọi người mơ ước trở thành phi hành gia và lính cứu hoả, tôi muốn mở một thư viện. Trong một toà lâu đài. Nhưng sau đó, tôi bắt đầu suy nghĩ về tất cả vấn đề mà mọi người có thể gặp phải khi vào thư viện mới của tôi và xem qua sách trên kệ. Bạn biết không, lâu đài của tôi nằm ở một nơi rất xa và mỗi năm tôi lại cơi nới thêm một chút (xây thêm hào chẳng hạn), gây rắc rối cho người vẽ bản đồ địa phương.

## Chương 1: Lỗi DNS

Chúng ta đang nói về một lâu đài, địa điểm này hơi mơ hồ và khó tìm. Nhưng đừng lo: mọi người có thể sử dụng bản đồ. Nhưng nếu đó là một bản đồ lỗi thời không có hào của tôi hoặc đó là một bản đồ cũ bị mờ gần hết chữ rồi thì sao?

<figure><img src="https://data.nhavantuonglai.com/image/article/giai-thich-de-hieu-nhung-loi-google-search-console-thuong-gap-1.jpg" alt="giai-thich-de-hieu-nhung-loi-google-search-console-thuong-gap" height=100% width=100%><figcaption><p>giai-thich-de-hieu-nhung-loi-google-search-console-thuong-gap-nhavantuonglai</p></figcaption></figure>

Đây chính là lỗi DNS (trái với quan niệm phổ biến, không liên quan đến Dungeons N Snakes hay Dangerous Navigation System): ứng dụng của bạn tham khảo bản đồ (máy chủ DNS) nhưng không tìm thấy vị trí đó vì nhiều lý do. Lý do có thể là bản đồ đó thậm chí không có vị trí của thư viện (vì vậy được gọi là lỗi `NXDOMAIN` theo thuật ngữ về DNS) hoặc sử dụng ngôn ngữ mà người dùng không đọc được (có thể coi là `FormErr` theo thuật ngữ về DNS).

Lỗi DNS thường là do một số chế độ cài đặt (hoặc thiếu chế độ cài đặt) trên máy chủ DNS. Tức là trừ phi bạn tự quản lý máy chủ DNS (bạn vẽ bản đồ cho khách), bạn sẽ phải liên hệ với nhà cung cấp DNS (hay người vẽ bản đồ địa phương) để khắc phục lỗi. Nếu bạn không biết nhà cung cấp DNS của mình là ai, hãy thử hỏi nhà cung cấp dịch vụ lưu trữ của bạn hoặc bất cứ nơi nào bạn đăng ký tên miền.

Mặc dù phía khách cũng có thể gặp sự cố, chẳng hạn như khi họ quên kính và không nhìn thấy chữ trên bản đồ, nhưng rất có thể sự cố này xảy ra là do chính bản đồ.

## Chương 2: Lỗi mạng

Khi vị khách dũng cảm của chúng ta biết con đường dẫn tới lâu đài thư viện, việc tới được đó cũng thực sự là một cuộc phiêu lưu: dò dẫm trong ngục tối, băng qua biển cá ăn thịt người trong hào của tôi và có lúc còn phải chiến đấu với rồng.

<figure><img src="https://data.nhavantuonglai.com/image/article/giai-thich-de-hieu-nhung-loi-google-search-console-thuong-gap-2.jpg" alt="giai-thich-de-hieu-nhung-loi-google-search-console-thuong-gap" height=100% width=100%><figcaption><p>giai-thich-de-hieu-nhung-loi-google-search-console-thuong-gap-nhavantuonglai</p></figcaption></figure>

Lỗi mạng giống như chướng ngại vật cho khách: thành phần mạng giữa máy khách (trình duyệt, trình thu thập dữ liệu…) và máy chủ đang chặn lưu lượng truy cập. Việc chặn có thể là do vô tình, ví dụ: nếu một bộ định tuyến lớn bị lỗi hoặc có chủ ý, chẳng hạn như tường lửa chặn lưu lượng truy cập.

Thật không may, việc gỡ lỗi trong tình huống này thật khó chịu: bạn cần xác định thành phần nào trong tuyến từ máy khách đến máy chủ đang thực hiện việc chặn. Không may là có thể có hàng tá thành phần độc lập trong tuyến, hầu hết đều do ứng dụng hoặc máy chủ quản lý và không có cách nào nhanh gọn để xác định thành phần nào đang chặn đường dẫn. Tuy nhiên, cũng may là việc chặn thường do tường lửa ngay trước máy chủ hoặc ở điểm cuối CDN của bạn; hãy liên hệ với nhà cung cấp dịch vụ lưu trữ hoặc CDN của bạn nếu bạn không thích đụng chạm vào tường lửa.

## Chương 3: Lỗi máy chủ

Tuy vậy, kể cả khi khách tới được thư viện rồi thì có thể chính thư viện vẫn có vấn đề. Ví dụ: có thể các thẻ thư viện bị hỏng do nước và không thể tìm được sách nữa, hoặc thậm chí tệ hơn – những chú rồng mà khách chiến đấu trên đường đến thư viện có thể đã đốt cháy toàn bộ toà lâu đài.

<figure><img src="https://data.nhavantuonglai.com/image/article/giai-thich-de-hieu-nhung-loi-google-search-console-thuong-gap-3.jpg" alt="giai-thich-de-hieu-nhung-loi-google-search-console-thuong-gap" height=100% width=100%><figcaption><p>giai-thich-de-hieu-nhung-loi-google-search-console-thuong-gap-nhavantuonglai</p></figcaption></figure>

Về cơ bản, đây là lỗi máy chủ: có sự cố xảy ra với dịch vụ khiến khách truy cập không thể nhận được nội dung (sách) mà họ cần Google Search. Nếu bạn không thể tìm ra nguyên nhân, hãy liên hệ với người quản lý máy chủ hoặc nhà cung cấp dịch vụ lưu trữ của bạn. Tiếc là khách của bạn không thể làm được gì với vấn đề đó; họ sẽ phải rời đi mà không xem được sách.

## Chương 4: Lỗi máy khách

Khi ở trong thư viện, đôi khi vị khách mọt sách của chúng ta hỏi về một cuốn tiểu thuyết không còn nữa (vì một độc giả khác đã mượn rồi) hoặc đơn giản là không được phép tiếp cận (vì sách đó nằm trong khu vực cấm). Đây là các lỗi máy khách: có thể coi như khách yêu cầu thứ gì đó không đúng, dù rằng không đúng ở đây có thể chỉ là do bạn hiện không có.

<figure><img src="https://data.nhavantuonglai.com/image/article/giai-thich-de-hieu-nhung-loi-google-search-console-thuong-gap-4.jpg" alt="giai-thich-de-hieu-nhung-loi-google-search-console-thuong-gap" height=100% width=100%><figcaption><p>giai-thich-de-hieu-nhung-loi-google-search-console-thuong-gap-nhavantuonglai</p></figcaption></figure>

Cũng có lúc, sách mà khách Google Search lại nằm trong phần bị cấm của thư viện, nên họ cần phải đáp ứng một số tiêu chí, chẳng hạn như nhắc lại cụm mật khẩu để vào được khu vực đó.

<figure><img src="https://data.nhavantuonglai.com/image/article/giai-thich-de-hieu-nhung-loi-google-search-console-thuong-gap-5.jpg" alt="giai-thich-de-hieu-nhung-loi-google-search-console-thuong-gap" height=100% width=100%><figcaption><p>giai-thich-de-hieu-nhung-loi-google-search-console-thuong-gap-nhavantuonglai</p></figcaption></figure>

Tóm lại thì tất cả lỗi máy khách đều chỉ khách mới khắc phục được: bạn có thể trợ giúp họ bằng cách chuyển hướng URL (đề xuất một cuốn sách thay thế), nhưng thường thì đơn giản là yêu cầu của khách không thể thực hiện được.

## Lời kết

Mọi chuyện đều kết thúc tốt đẹp: Nếu vị khách của chúng ta có thể vượt mọi chướng ngại để đến thư viện, tìm thấy sách và làm thủ tục mượn, thì rốt cuộc họ có thể thưởng thức cuốn sách về ma cà rồng lấp lánh mà họ yêu thích. Nội dung của bạn cũng vậy, nếu bạn là chủ sở hữu website.

<figure><img src="https://data.nhavantuonglai.com/image/illustrations/cover-nhavantuonglai-com-0310.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>