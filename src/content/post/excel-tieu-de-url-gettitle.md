---
pubDatetime: 2024-06-11T10:00:00Z
title: Trích xuất URL từ liên kết trong Google Sheet
description: Để lấy title (tiêu đề) của các url (liên kết) trong Google Sheets và hiển thị chúng trong cột tương ứng, bạn cần sử dụng Google Apps Script.
featured: false
image: https://data.nhavantuonglai.com/image/illustrations/cover-nhavantuonglai-com-0769.jpg
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

_Để lấy title (tiêu đề) của các url (liên kết) trong Google Sheets và hiển thị chúng trong cột tương ứng, bạn cần sử dụng Google Apps Script. Dưới đây là các bước chi tiết để thực hiện điều này_

## Đặt vấn đề

Từ một danh sách url có sẵn, làm thế nào để trích xuất title tương ứng?

Vấn đề này thường phát sinh trong các trường hợp:

– Thống kê, tổng hợp dữ liệu website.

– Hoàn thiện kế hoạch, chiến lược SEO.

– Phân loại, lọc ra các title bị trùng để chỉnh sửa.

– Mục đích khác.

## Giải quyết vấn đề

Các hàm Excel hiện nay không đáp ứng yêu cầu này, nhưng người dùng có thể sử dụng Script để khai thác. Hướng dẫn cụ thể sẽ được mô tả dưới đây.

### Tạo file dữ liệu bằng Google Sheets

– Tạo file [Google Sheets](https://docs.google.com/spreadsheets/u/0/).

– Cập nhật dữ liệu vào bảng tính, cụ thể là danh sách url vào cột `A` của bảng.

### Tạo đoạn Script

– Nhấp vào `Extensions` (Tiện ích mở rộng) > `Apps Script`.

– Thêm đoạn mã sau vào trình soạn thảo script:

```
function getTitle(url) {
	try {
		var response = UrlFetchApp.fetch(url);
		var content = response.getContentText();
		var title = content.match(/<title>(.*?)<\/title>/i)[1];
		return title;
	} catch (e) {
		return 'Error';
	}
}

function getTitles() {
	var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
	var range = sheet.getRange('A1:A');
	var urls = range.getValues();
	
	for (var i = 0; i < urls.length; i++) {
		var url = urls[i][0];
		if (url) {
			var title = getTitle(url);
			sheet.getRange(i + 1, 2).setValue(title);
		}
	}
}

```

### Khai thác hàm

– Lưu đoạn mã, và tắt Apps Script.

– Quay lại Google Sheets, tiếp tục nhấp vào `Extensions` (Tiện ích mở rộng) > `Macros` > `Import Macro`.

– Chọn `getTitles` và nhấn `Add Function`.

– Tiếp tục nhấp vào `Extensions` (Tiện ích mở rộng) > `Macros` > `getTitles` và cấp quyền truy cập.

– Sau đó, hàm `getTitles` sẽ duyệt qua tất cả các url trong cột `A` và lấy tiêu đề tương ứng cho mỗi url, sau đó ghi chúng vào cột `B`.

## Lưu ý

– Đảm bảo các URL trong cột A được nhập chính xác.

– Nếu gặp lỗi Error, có thể là do url không hợp lệ hoặc chọn sai hàm `getTitles` ở bước trên.

<figure><img src="https://data.nhavantuonglai.com/image/illustrations/cover-nhavantuonglai-com-0149.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>