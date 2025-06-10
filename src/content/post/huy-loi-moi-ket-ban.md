---
pubDatetime: 2021-02-01T10:10:00Z
title: Hướng dẫn tự động hủy tất cả lời mời kết bạn đã gửi trên Facebook
description: Bạn đang tìm kiếm cách tự động hủy tất cả lời mời kết bạn đã gửi trên Facebook để tiết kiệm thời gian? Hãy làm theo hướng dẫn dưới đây để thực hiện nhanh chóng bằng code, đảm bảo hiệu quả và an toàn cho tài khoản của bạn.
image: https://banmaixanh.vercel.app/image/cover/001-523.jpg
tags:
  - facebook
  - code
  - developer
  - huy loi moi ket ban
  - javascript
---

_Bạn đang tìm kiếm cách tự động hủy tất cả lời mời kết bạn đã gửi trên Facebook để tiết kiệm thời gian? Hãy làm theo hướng dẫn dưới đây để thực hiện nhanh chóng bằng code, đảm bảo hiệu quả và an toàn cho tài khoản của bạn._

## Bước 1: Truy cập danh sách lời mời kết bạn đã gửi

Đầu tiên, bạn cần truy cập vào Faceook và đến trang danh sách Lời mời kết bạn. Cụ thể:

1. Mở Facebook trên trình duyệt máy tính.

2. Truy cập danh sách [Lời mời kết bạn đã gửi](https://www.facebook.com/friends/requests) và chọn tiếp mục _Lời mời đã gửi_ để xem toàn bộ danh sách.

## Bước 2: Mở chế độ Developer Tools

Tiếp theo, bạn cần chạy đoạn script để [tự động hủy tất cả lời mời kết bạn đã gửi](https://nhavantuonglai.com/article/huy-loi-moi-ket-ban). Cụ thể:

1. Nhấn F12 hoặc Ctrl + Shift + I (Windows), hoặc Cmd + Option + I (Mac). Bạn cũng có thể click chuột phải và chọn `Inspect` để mở chế độ Developer Tools.

2. Chuyển sang tab `Console` và kéo danh sách lời mời xuống để tải thêm lời mời (nếu cần).

## Bước 3: Dán đoạn mã Javascript và thực thi

Cuối cùng, bạn cần dán đoạn mã dưới đây vào tab Console, sau đó nhấn Enter để bắt đầu hủy lời mời:

```
(async () => {
		let buttons = Array.from(document.querySelectorAll('div[aria-label="Hủy lời mời"]'));
		while (buttons.length) {
				for (let button of buttons) {
						button.click();
						console.log('Đã hủy lời mời kết bạn');
						await new Promise(resolve => setTimeout(resolve, 500));
				}
				window.scrollBy(0, 500);
				await new Promise(resolve => setTimeout(resolve, 500));
				buttons = Array.from(document.querySelectorAll('div[aria-label="Hủy lời mời"]'));
		}
		console.log('Hoàn thành hủy tất cả lời mời kết bạn đã gửi.');
})();
```

Sau khi hoàn tất, bạn cần tải lại trang để kiểm tra, nếu vẫn còn sót lời mời kết bạn, thì khởi chạy lại đoạn Javascript ở trên thêm một lần nữa theo hướng dẫn.

<figure><img src="https://banmaixanh.vercel.app/image/article/huy-loi-moi-ket-ban-01.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>

## Lưu ý quan trọng

– Không nên lạm dụng cách này để tránh vi phạm chính sách của Facebook.

– Facebook có thể thay đổi giao diện hoặc cấu trúc, làm đoạn mã trên không hoạt động.

– Javascript chỉ hoạt động trên trình duyệt máy tính, với giao diện desktop.

– Javascript được viết để hoạt động trên Facebook tiếng Việt, nếu bạn sử dụng ngôn ngữ khác, thì cần chỉnh sửa các nội dung truy vấn trong đoạn Javascript trên theo nội dung tương ứng để Javascript hoạt động hiệu quả.

## Lợi ích của việc tự động hủy lời mời kết bạn đã gửi

1. Tiết kiệm thời gian hủy từng lời mời thủ công.

2. Giữ tài khoản Facebook sạch sẽ và tránh bị giới hạn lời mời trong tương lai.

3. Tập trung vào việc kết nối với những người thực sự quan trọng.

Nếu bạn gặp khó khăn khi thực hiện, hãy liên hệ qua email info@nhavantuonglai.com để được hỗ trợ chi tiết. Hãy thử ngay và tối ưu cách sử dụng Facebook của bạn!

<figure><img src="https://banmaixanh.vercel.app/image/cover/001-464.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>