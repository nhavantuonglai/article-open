---
pubDatetime: 2023-10-30T20:00:00Z
title: Hướng dẫn cách tải video TikTok về máy tính
description: Hướng dẫn thực hiện các thủ thuật công nghệ giúp bạn tiết kiệm thời gian, công sức và đầu tư vào những công việc hiệu quả hơn. Liên hệ info@nhavantuonglai.com để hỗ trợ thao tác.
featured: false
image: https://data.nhavantuonglai.com/image/illustrations/cover-nhavantuonglai-com-0127.jpg
tags:
  - website
  - website builder
  - tiktok
  - code
  - developer
---

_Hướng dẫn cách lưu và tải video trên TikTok về máy tính nhanh chóng bằng thủ thuật đơn giản, dễ làm với các đoạn code dưới đây._

Bước 1: Truy cập vào Tiktok bằng máy tính và đến video cần tải video TikTok về máy tính.

Bước 2: Thao tác `Ctrl + Shift + I` (trên Windos) hoặc `Command + Shift + I` (trên MacOS).

Bước 3: Dán đoạn code sau vào phần `Console:`

```
(function {
 const videoEl = document.querySelector(_video_);
 function downloadVideo(url) {
 fetch(url).then(response =>{
 if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
 return response.blob;
 }).then(blob =>{
 const link = document.createElement(_a_);
 link.href = URL.createObjectURL(blob);
 link.download = _video.mp4_;
 document.body.appendChild(link);
 link.click;
 document.body.removeChild(link);
 }).catch(error =>{
 alert(_Có lỗi trong quá trình tải video._);
 });
 }
 if (!videoEl) {
 alert(_Không tìm thấy video, bạn đã mở trang video chưa?_);
 } else {
 const videoSrc = videoEl.src;
 if (videoSrc || videoSrc.includes(_.tiktok.com/video/tos/alisg/_)) {
 downloadVideo(videoSrc);
 } else alert(_Video không hợp lệ_);
 }
});
```


Nếu cần tải video TikTok về máy tính thường xuyên, có thể thực hiện theo cách sau:

Bước 4: Thao tác `Ctrl + Shift + B` (trên Windos) hoặc `Command + Shift + B` (trên MacOS) để tạo bookmark.

Bước 5: Dán đoạn code sau vào ô url bookmark:

```
javascript:!function{let e=document.querySelector(_video_);if(e){let t=e.src;t||t.includes(_.tiktok.com/video/tos/alisg/_)?function e(t){fetch(t).then(e=>{if(!e.ok)throw Error(`HTTP error! Status: ${e.status}`);return e.blob}).then(e=>{let t=document.createElement(_a_);t.href=URL.createObjectURL(e),t.download=_video.mp4_,document.body.appendChild(t),t.click,document.body.removeChild(t)}).catch(e=>{alert(_Cxf3 lỗi trong quxe1 trxecnh tải video._)})}(t):alert(_Video khxf4ng hợp lệ_)}else alert(_Khxf4ng txecm thấy video, bạn đxe3 mở trang video chưa?_)};
```


Bước 6: Truy cập vào Tiktok bằng máy tính và đến video cần tải video TikTok về máy tính rồi nhấn vào bookmark đã tạo ở trên.

Bước 7: Lưu video cần tải video TikTok về máy tính với tên tùy ý để thực hiện lưu.

<figure><img src="https://data.nhavantuonglai.com/image/illustrations/cover-nhavantuonglai-com-0139.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>