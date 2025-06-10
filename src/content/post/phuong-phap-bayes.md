---
pubDatetime: 2023-07-23T10:10:00Z
title: Tìm đồ thất lạc với phương pháp tìm kiếm Bayes
description: Khi bạn làm mất điện thoại, ví, hoặc chìa khóa, bạn có thể áp dụng vài mẹo nhỏ để tìm lại.
image: https://banmaixanh.vercel.app/image/cover/001-398.jpg
tags:
  - phat trien ban than
  - khoa hoc
  - ky nang
  - ky nang chuyen mon
  - tam ly hoc
  - nhan thuc ban than
  - cai thien ban than
  - phuong phap tim kiem bayes
  - tim do that lac
---

_Tìm ví, chìa khóa – hoặc thậm chí tàu ngầm hạt nhân._

## Khi làm mất đồ, bạn nên làm gì?

Khi bạn làm mất điện thoại, ví, hoặc chìa khóa, bạn có thể áp dụng vài mẹo nhỏ để tìm lại. Có thể bạn sẽ đi ngược lại các bước bạn đã đi. Hoặc bạn sẽ kiểm tra từng vị trí mà bạn thường đặt chúng. Cũng có thể bạn cố nhớ lại những nơi đặc biệt mà mình đã ghé qua gần đây. Tất cả những lựa chọn này đều hợp lý.

Khi một tổ chức có nguồn lực lớn làm mất một thứ có giá trị cực cao, chẳng hạn như tàu ngầm hạt nhân, họ sẽ dùng đến lý thuyết tìm kiếm Bayes. May mắn thay, những nguyên tắc cơ bản của phương pháp này khá đơn giản để áp dụng vào việc tìm những món đồ thường ngày. Dù món đồ thất lạc chỉ có giá trị vài trăm đô la, quá trình toán học này có thể giúp bạn tìm kiếm logic hơn, tiết kiệm thời gian và công sức.

## Xe tôi đâu rồi?

Xác suất một món đồ bị thất lạc nằm ở chỗ này hay chỗ khác là một khái niệm trực giác có thể biến thành đối tượng toán học. Một bản đồ đơn giản được chia thành lưới, mỗi ô được gán một xác suất chứa đồ vật, chính là một dạng của hàm mật độ xác suất.

Giả sử bạn để xe ở một bãi đỗ có 100 chỗ và giờ bạn quên mất mình đã đỗ ở đâu. Hàm mật độ xác suất cơ bản nhất sẽ chia đều mỗi ô với xác suất là 1/100 (hoặc 0,01).

Giả sử thêm rằng bạn không phải người khuyết tật, và trong bãi có 10 chỗ dành riêng. Lúc này, hàm mật độ xác suất sẽ thay đổi thành 0,011 cho 90 chỗ còn lại và 0,001 cho mỗi chỗ dành cho người khuyết tật (với xác suất 10% là bạn đỗ nhầm).

Tiếp tục đưa thêm dữ liệu. Nếu 10 chỗ xa nhất khỏi cửa hàng trống không, xác suất xe bạn ở đó là 0. Lúc này, hàm mật độ xác suất chỉ còn lại 80 ô với xác suất ~0,0125 mỗi ô. Nếu bạn thường hay đỗ xe gần cửa nhất, các chỗ gần cửa sẽ có xác suất cao hơn chút, còn các chỗ xa hơn sẽ giảm xác suất.

Điểm mấu chốt là mỗi khi bạn thu thập thêm thông tin, hàm mật độ xác suất sẽ thay đổi. Vì thế, bạn có thể thu hẹp phạm vi và đẩy nhanh quá trình tìm kiếm bằng cách bắt đầu từ những chỗ có xác suất cao nhất, sau đó kiểm tra các chỗ ít khả năng nhất cuối cùng.

## Chó có ăn mất bài tập không?

Bản đồ đầu tiên rất hữu ích, nhưng một bản đồ thứ hai sẽ còn tốt hơn. Bản đồ này thể hiện khả năng bạn thực sự tìm thấy món đồ nếu nó thực sự ở một vị trí cụ thể.

Ví dụ khác: nếu bài tập của bạn mất tích, độ dễ hay khó khi tìm kiếm sẽ khác nhau tùy theo nơi bạn tìm. Nếu bài tập nằm trên bàn trống, bạn sẽ chắc chắn nhìn thấy. Nếu nó nằm trên bàn lộn xộn đầy giấy tờ, cơ hội sẽ thấp hơn. Nếu nó bay ra ngoài cửa sổ, khả năng nó còn trong sân sẽ thấp hơn nhiều vì có gió. Nếu chó đã ăn mất, xác suất tìm lại là 0.

Khi kết hợp hai bản đồ xác suất này lại, bạn sẽ có kết quả nhân xác suất. Khu vực vừa có khả năng chứa đồ vừa dễ tìm sẽ có số liệu lớn hơn, là nơi tốt để bắt đầu tìm kiếm. Những khu vực hoặc khó tìm hoặc ít khả năng chứa đồ sẽ có số liệu nhỏ hơn, ưu tiên thấp hơn.

Những nơi vừa không có khả năng chứa đồ vừa khó tìm – ví dụ chú chó – nên là lựa chọn cuối cùng.

## Tìm kẻ trốn chạy

Khi bạn tìm kiếm những khu vực có xác suất kết hợp cao nhất, bạn cần đánh giá lại giả định và cập nhật bản đồ xác suất trong suốt quá trình.

Hãy thử một ví dụ khác. Giờ đây, bạn đang tìm một tên tội phạm vượt ngục. Đàn chó săn có thể ngửi thấy dấu vết nơi hắn vừa đi qua. Gần nhà tù có một con đường dẫn đến trạm xe buýt. Xác suất hắn chạy lên đường để bắt xe buýt là khá cao, và cơ hội bạn phát hiện hắn ở đường lớn (khác với trong rừng) cũng cao.

Nếu đàn chó không phát hiện mùi nào trên đường, xác suất hắn ở các vị trí xa hơn trên con đường đó sẽ giảm đi nhiều. Tương tự, trạm xe buýt cũng sẽ trở thành vị trí ít khả năng hơn. Ngược lại, nếu chó phát hiện mùi, xác suất hắn ở trạm xe buýt sẽ tăng lên.

## Tìm kiếm Bayes: Thông thường + Toán học

Trong trường hợp tàu mất tích, bạn có thể tạo nhiều trường xác suất dựa trên các giả thuyết khác nhau. Giả thuyết đầu tiên có thể là vị trí gần nơi có liên lạc radio cuối cùng, với xác suất giảm dần khi cách xa vị trí đó.

Một giả thuyết khác có thể là nếu khu vực có bão đi qua, con tàu có thể đã chìm gần đường đi của tâm bão. Nếu tìm thấy một mảnh vỡ nổi ở một khu vực, xác suất tàu đắm gần đó sẽ tăng lên, trong khi xa hơn sẽ giảm. Nếu dòng hải lưu chảy qua khu vực có mảnh vỡ, đường đi ngược dòng chảy sẽ có xác suất cao hơn, kéo dài về phía nó đã trôi.

Phương pháp Bayes là sự chắt lọc của tư duy thông minh, được chính thức hóa và tăng độ chính xác bằng các khái niệm toán học đơn giản. Dù bạn tìm kiếm kho báu tỷ đô hay ví tiền thất lạc, việc áp dụng nhanh phương pháp Bayes sẽ giúp tiết kiệm thời gian và tăng cơ hội thành công.

<figure><img src="https://banmaixanh.vercel.app/image/cover/001-129.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>