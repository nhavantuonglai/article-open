---
pubDatetime: 2024-05-03T10:10:00Z
title: Hướng dẫn chèn popup social chat trên website bằng code
description: Popup social chat (Plugin chat) là tính năng cho phép người dùng kết nối với quản trị viên website. Popup social chat (Plugin chat) giúp tăng tương tác, giải quyết những vấn đề mà người dùng gặp phải.
featured: false
image: https://banmaixanh.org/image/cover/001-649.jpg
tags:
  - websiteflow
  - website
  - website builder
  - developer
---

_Popup social chat (Plugin chat) là tính năng cho phép người dùng kết nối với quản trị viên website. popup social chat (plugin chat) giúp tăng tương tác, giải quyết những vấn đề mà người dùng gặp phải trong quá trình thao tác, Google Search thông tin trên website. Với các giải pháp, popup social chat (plugin chat) được sử dụng để tạo kênh thông tin liên lạc, từ đó giúp người dùng dễ dàng kết nối với giải pháp hơn._

## Popup social chat (Plugin chat) trên website là gì

Popup social chat (Plugin chat) là tính năng cho phép người dùng kết nối với quản trị viên website. popup social chat (plugin chat) giúp tăng tương tác, giải quyết những vấn đề mà người dùng gặp phải trong quá trình thao tác, Google Search thông tin trên website. Với các giải pháp, popup social chat (plugin chat) được sử dụng để tạo kênh thông tin liên lạc, từ đó giúp người dùng dễ dàng kết nối với giải pháp hơn.

## Lợi ích mà popup social chat (plugin chat) đem lại cho các giải pháp là

– Tăng khả năng giữ chân người dùng: Khi người dùng có thể trò chuyện với nhau trên website, họ sẽ cảm thấy thú vị, hứng thú và muốn quay lại nhiều lần. Họ cũng có thể tìm được bạn bè, đối tác hoặc khách hàng tiềm năng thông qua popup social chat (plugin chat).

– Tăng uy tín và niềm tin của người dùng: Khi người dùng thấy có nhiều người khác đang truy cập và trò chuyện trên website, họ sẽ cảm thấy website là nơi đáng tin cậy, có giá trị và chất lượng. Họ cũng có thể nhận được sự hỗ trợ, tư vấn hoặc phản hồi từ những người dùng khác thông qua popup social chat (plugin chat).

– Tăng doanh thu và lợi nhuận: Khi người dùng gắn bó với website và nhau qua popup social chat (plugin chat), họ sẽ có xu hướng sử dụng nhiều hơn các sản phẩm, dịch vụ hoặc quảng cáo của website. Họ cũng có thể giới thiệu website cho người khác, tạo ra hiệu ứng lan tỏa và tăng lượng truy cập.

## Một số nền tảng popup social chat (plugin chat) phổ biến

### Chatwing

Một công cụ cho phép tạo ra popup social chat (plugin chat) cho bất kỳ website nào chỉ với vài bước đơn giản. Chatwing có nhiều tính năng tiện ích, như tích hợp với các mạng xã hội, hỗ trợ nhiều ngôn ngữ, cho phép điều chỉnh giao diện và màu sắc, cung cấp bảng điều khiển quản lý và thống kê…

### RumbleTalk

Một giải pháp cho phép tạo ra popup social chat (plugin chat) chuyên nghiệp cho website. RumbleTalk có nhiều tính năng cao cấp, như hỗ trợ âm thanh và video, cho phép gửi file và ảnh, tích hợp với các hệ thống thanh toán, cho phép tạo ra các nhóm chat riêng tư hoặc công khai…

### Chatra

Một ứng dụng cho phép tạo ra popup social chat (plugin chat) thông minh cho website. Chatra có nhiều tính năng thông minh, như tự động gửi tin nhắn chào mừng, thu thập thông tin liên hệ, phân loại và chuyển hướng người dùng, theo dõi hành vi và lịch sử của người dùng…

## Hướng dẫn chèn popup social chat (plugin chat) trên website bằng code

### Bước 1: Chèn script vào thẻ _<body>_ của website

```
<style>
.cta-action img {width: 40px;height: 40px;}
.cta-zalo {width: 40px;height: 40px;position: fixed;bottom: 180px;left: 15px;z-index: 9999;border-radius: 20px;animation: zalo 2s ease infinite;-websitekit-backface-visibility: hidden;-moz-backface-visibility: hidden;-ms-backface-visibility: hidden;backface-visibility: hidden;transition: all 0.3s;}
.cta-zalo:after {content: ;_display: block;color: #fff;background-color: #f04c28;width: 10px;height: 10px;border-radius: 20px;position: absolute;top: 0;right: 2px;font-size: 10px;text-align: center;}
.cta-mes {width: 40px;height: 40px;position: fixed;bottom: 120px;left: 15px;z-index: 9999;border-radius: 20px;animation: zalo 2s ease infinite;-websitekit-backface-visibility: hidden;-moz-backface-visibility: hidden;-ms-backface-visibility: hidden;backface-visibility: hidden;transition: all 0.3s;}
.cta-mes:after {content: _1;_display: block;color: #fff;background-color: #f04c28;width: 15px;height: 15px;border-radius: 20px;position: absolute;top: – 3px;right: 0;font-size: 10px;text-align: center;z-index: 9999;}.cta-call {position: fixed;bottom: 60px;left: 15px;z-index: 9999;}
.cta-call i {width: 40px;height: 40px;display: block;text-align: center;background-color: #ff0000;color: #fff;line-height: 40px;margin: 0 auto;border-radius: 35px;animation: call 2s ease infinite;-websitekit-backface-visibility: hidden;-moz-backface-visibility: hidden;-ms-backface-visibility: hidden;backface-visibility: hidden;transition: all 0.3s;}

@keyframes call {0% {transform: scale(1)}15% {box-shadow: 0 0 0 3px rgb(255 7 7 / 40%);}25% {box-shadow: 0 0 0 6px rgb(255 0 0 / 40%), 0 0 0 12px rgb(255 7 7 / 20%);}25% {box-shadow: 0 0 0 9px rgb(255 7 7 / 40%), 0 0 0 18px rgb(255 193 7 / 20%);}}
@keyframes zalo {0% {transform: scale(1)}15% {box-shadow: 0 0 0 3px rgb(0 154 255 / 40%)}25% {box-shadow: 0 0 0 6px rgb(0 154 255 / 40%), 0 0 0 12px rgb(0 154 255 / 20%)}25% {box-shadow: 0 0 0 9px rgb(0 154 255 / 40%), 0 0 0 18px rgb(0 154 255 / 20%)}}
@media (max-width: 575px) {.cta-zalo {bottom:180px}.cta-mes {bottom: 120px}.cta-call {bottom: 60px}}

</style>

<div class="cta-action">

<!  - – hotline zalo – ->
<a href="https://zalo.me/088xxx7749" class="cta-zalo"><img src="https://banmaixanh.org/image/favicon/zalo.png" alt=" data-lazy-src="https://banmaixanh.org/image/favicon/zalo.png" class="lazyloaded_ data-was-processed=_true"><noscript><img src="https://banmaixanh.org/image/favicon/zalo.png" alt=""></noscript></a>

<!  - – fanpage – ->
<a href="https://www.facebook.com/100124394769344" class="cta-mes"><img src="https://banmaixanh.org/image/favicon/messenger.png" alt=" data-lazy-src="https://banmaixanh.org/image/favicon/messenger.png" class="lazyloaded_ data-was-processed=_true"><noscript><img src="https://banmaixanh.org/image/favicon/messenger.png" alt=""></noscript></a>

<!  - – hotline tele – ->
<a href="tel:088xxx7749" class="cta-call"><i class="fa fa-phone_ aria-hidden=_true"></i></a></div>
```

### Bước 2: Tải lại trang và kiểm tra

## Hướng dẫn chèn popup Messenger bằng Fanpage trên website

### Bước 1: Truy cập Fanpage muốn chèn popup Messenger bằng Fanpage trên website

– Chuyển quyền quản lý sang Fanpage muốn chèn popup Messenger bằng Fanpage trên website.

– Truy cập mục `Messenger` của Fanpage.

– Truy cập mục `Xem tất cả cài đặt`, ở góc trên bên phải màn hình.

<figure><img src="https://banmaixanh.org/image/article/website-popup-social-chat-01.jpg" alt="website-popup-social-chat" height=100% width=100%><figcaption><p>website-popup-social-chat-nhavantuonglai</p></figcaption></figure>

– Truy cập mục `Plugin chat`.

<figure><img src="https://banmaixanh.org/image/article/website-popup-social-chat-02.jpg" alt="website-popup-social-chat" height=100% width=100%><figcaption><p>website-popup-social-chat-nhavantuonglai</p></figcaption></figure>

### Bước 2: Tùy chỉnh Plugin chat theo nhu cầu

<figure><img src="https://banmaixanh.org/image/article/website-popup-social-chat-03.jpg" alt="website-popup-social-chat" height=100% width=100%><figcaption><p>website-popup-social-chat-nhavantuonglai</p></figcaption></figure>

### Bước 3: Truy cập mục Thiết lập ở đầu trang

– Chọn nền tảng build website.

– Nếu nền tảng build website không được liệt kê, chọn `Tiêu chuẩn` để lấy script.

<figure><img src="https://banmaixanh.org/image/article/website-popup-social-chat-04.jpg" alt="website-popup-social-chat" height=100% width=100%><figcaption><p>website-popup-social-chat-nhavantuonglai</p></figcaption></figure>

### Bước 4: Chèn script vào thẻ _<body>_ của website

```
<!  - – Messenger Plugin chat Code – ->
<div id="fb-root"></div>

<!  - – Your Plugin chat code – ->
<div id="fb-customer-chat" class="fb-customerchat">
</div>

<script>
var chatbox = document.getElementById(_fb-customer-chat_);
chatbox.setAttribute(_page_id,_ _100124394769344_);
chatbox.setAttribute(_attribution,_ _biz_inbox_);
</script>

<!  - – Your SDK code – ->
<script>
window.fbAsyncInit = function {
FB.init({
xfbml: true,
version: _v18.0_
});
};

(function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) return;
js = d.createElement(s); js.id = id;
js.src = _https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js;_
fjs.parentNode.insertBefore(js, fjs);
}(document, _script,_ _facebook-jssdk_));
</script>
```

### Bước 5: Tải lại trang và kiểm tra

Cập nhật: Từ ngày 09/05/2024, bạn sẽ không truy cập được vào bất kỳ tính năng nào của Plugin chat nữa. Plugin chat ở chế độ khách cũng sẽ ngay lập tức ngừng hoạt động. Bạn vẫn có thể dùng các tính năng khác như liên kết m.me.

Popup social chat (Plugin chat) là một tính năng hữu ích và hiệu quả cho website. Nó không chỉ giúp tăng tương tác và gắn kết giữa người dùng, mà còn giúp tăng uy tín, doanh thu và lợi nhuận cho website. popup social chat (plugin chat) là một xu hướng không thể bỏ qua trong thời đại số hóa và kết nối ngày nay.

<figure><img src="https://banmaixanh.org/image/cover/001-639.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>