---
pubDatetime: 2022-03-13T10:10:00Z
title: Hướng dẫn xóa dòng trống trong Notepad++
description: Trong bài này, hãy tìm hiểu cách xóa dòng trống trong Notepad++ trong mỗi đoạn văn mà không làm thay đổi định dạng văn bản.
featured: false
image: https://banmaixanh.vercel.app/image/cover/001-636.jpg
tags:
  - developer
  - soan thao van ban
  - markdown
  - notepad
---

_Trong bài viết này, chúng ta sẽ tìm hiểu cách xóa dòng trống trong Notepad++ trong mỗi đoạn văn mà không làm thay đổi các dòng trống hoặc định dạng văn bản khác._

## Giới thiệu

Khi xử lý các tệp văn bản hoặc dữ liệu trong Notepad++, một trình soạn thảo văn bản mạnh mẽ, bạn có thể thường gặp tình trạng có khoảng trống thừa sau mỗi đoạn văn. Việc này có thể gây khó chịu, làm giảm tính thẩm mỹ của văn bản, thậm chí ảnh hưởng đến việc phân tích hoặc xử lý dữ liệu. Đặc biệt khi bạn cần tối ưu văn bản để sử dụng cho mục đích lập trình, định dạng nội dung hay lưu trữ tệp HTML, Markdown, XML, khoảng trống dư thừa là điều không mong muốn.

Trong bài viết này, chúng ta sẽ tìm hiểu cách sử dụng Notepad++ để [xóa toàn bộ khoảng trống dư thừa](https://nhavantuonglai.com/article/xoa-khoang-trang-thua) sau mỗi đoạn văn mà không làm thay đổi các dòng trống hoặc định dạng văn bản khác. Các hướng dẫn này sẽ giúp bạn xử lý tệp văn bản nhanh chóng và chính xác, ngay cả khi bạn làm việc với các tệp lớn hoặc nhiều tệp cùng lúc.

## Xóa dòng trống trong Notepad++ đầu dòng như thế nào?

Trong mở tệp văn bản cần chỉnh sửa, bước tiếp theo là sử dụng chức năng _Find and Replace_ để tìm và xóa khoảng trống thừa đầu mỗi đoạn văn.

1. Nhấn tổ hợp phím Ctrl + H hoặc vào menu _Search_ trên thanh công cụ và chọn _Replace._

2. Nhập nội dung vào ô _Find what_ (Tìm kiếm):

```
^\s+–
```

– ^ là ký tự đại diện cho đầu dòng, \s+ là một hoặc nhiều khoảng trống, và – là ký tự gạch ngang cần giữ lại (tùy chọn thêm).

3. Nhập nội dung vào ô _Replace with_ (Thay thế bằng):

```
–
```

4. Chọn chế độ tìm kiếm:

– Chọn _Search mode_ (Chế độ tìm kiếm) là _Regular expression_ (Biểu thức chính quy).

– Bỏ chọn mục _Match case_ nếu bạn không cần phân biệt chữ hoa và chữ thường.

Với biểu thức chính quy này, Notepad++ sẽ chỉ tìm kiếm và thay thế khoảng trống thừa ký tự đầu của mỗi đoạn văn mà không ảnh hưởng đến dòng trống giữa các đoạn.

## Xóa dòng trống trong Notepad++ cuối dòng như thế nào?

Trong mở tệp văn bản cần chỉnh sửa, bước tiếp theo là sử dụng chức năng _Find and Replace_ để tìm và xóa khoảng trống thừa sau mỗi đoạn văn.

1. Nhấn tổ hợp phím Ctrl + H hoặc vào menu _Search_ trên thanh công cụ và chọn _Replace._

2. Nhập nội dung vào ô _Find what_ (Tìm kiếm):

```
(\S)\h+(\R)
```

– `\S`: Đại diện cho bất kỳ ký tự nào không phải khoảng trống, thường là ký tự cuối cùng của một câu hoặc đoạn văn.

– `\h+`: Đại diện cho một hoặc nhiều khoảng trống nằm sau ký tự cuối cùng nhưng trước dấu xuống dòng.

– `\R`: Đại diện cho ký tự xuống dòng (có thể là `\n`, `\r`, hoặc `\r\n` tùy hệ điều hành).

3. Nhập nội dung vào ô _Replace with_ (Thay thế bằng):

```
\1\2
```

– `\1`: Đại diện cho ký tự cuối cùng của đoạn văn (giữ nguyên).

– `\2`: Đại diện cho ký tự xuống dòng (không thay đổi).

4. Chọn chế độ tìm kiếm:

– Chọn _Search mode_ (Chế độ tìm kiếm) là _Regular expression_ (Biểu thức chính quy).

– Bỏ chọn mục _Match case_ nếu bạn không cần phân biệt chữ hoa và chữ thường.

Với biểu thức chính quy này, Notepad++ sẽ chỉ tìm kiếm và thay thế khoảng trống thừa sau ký tự cuối cùng của mỗi đoạn văn mà không ảnh hưởng đến dòng trống giữa các đoạn.

## Kết luận

Việc xóa khoảng trống thừa sau mỗi đoạn văn giúp văn bản của bạn trở nên gọn gàng, dễ đọc và chuyên nghiệp hơn. Đặc biệt khi bạn làm việc với các tệp lớn hoặc cần chuẩn hóa dữ liệu để xử lý tự động, các bước trên sẽ giúp bạn tiết kiệm thời gian đáng kể. Notepad++ là công cụ tuyệt vời để thực hiện các chỉnh sửa hàng loạt nhanh chóng và hiệu quả, và biểu thức chính quy là chìa khóa giúp bạn làm chủ công việc này.

<figure><img src="https://banmaixanh.vercel.app/image/cover/001-124.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>