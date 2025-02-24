---
pubDatetime: 2018-11-08T10:10:00Z
title: Gián điệp mạng | Chương 08
description: Gián điệp mạng kể về nhà khoa học chuyển nghề thành chuyên gia mạng, truy tìm hacker tại Phòng Thí nghiệm Lawrence Berkeley, California, Mỹ.
featured: false
image: https://banmaixanh.org/image/cover/001-508.jpg
tags:
  - clifford stoll
  - gian diep mang
  - an ninh mang
  - thu vien
  - van hoc
  - van hoc nuoc ngoai
---

Thật đúng lúc! Vào 7 giờ 51 phút sáng thứ Tư ngày 10 tháng Chín, gã hacker xuất hiện trong hệ thống của chúng tôi trong sáu phút, đủ thời gian để báo động cho thiết bị đầu cuối của tôi, nhưng không kịp để có hành động gì.

Tối đó tôi ở nhà, vì Martha thấy rằng năm ngày ở phòng thí nghiệm là đủ rồi. tôi không có mặt ở phòng thí nghiệm để chứng kiến sự việc, nhưng máy in đã ghi lại ba trang dữ liệu hoạt động của gã hacker. Hắn đã đăng nhập vào máy Unix – 4 bằng tài khoản Sventek. Điều đó thì tôi biết rồi – hắn có mật khẩu của Sventek và truy cập từ Tymnet.

Nhưng hắn không loanh quanh ở máy Unix – 4 mà nhảy cóc qua nó và đáp xuống Milnet. Lúc này, sự tồn tại của Milnet đã được nhiều người biết tới – nó là một phần của Internet, mạng máy tính liên kết với hàng mạng lưới khác. Từ máy Unix ở phòng thí nghiệm, chúng tôi có thể tiếp cận được với Internet, từ đó tìm đến Milnet.

Milnet thuộc về Bộ Quốc phòng.

Gã hacker kết nối với một địa chỉ Milnet là `26.0.0.113`, đăng nhập vào đây với tài khoản `Hunter` và kiểm tra xem hắn có một bản sao của Gnu – Emacs không, sau đó biến mất.

Buổi trưa, khi tôi đạp xe đến phòng thí nghiệm thì chưa có dấu hiệu ngược dòng nào để bám theo. Nhưng gã hacker đã để lại một dấu vết xuôi dòng không thể xóa bỏ. Địa chỉ Milnet đó ở đâu? Trung tâm Thông tin Mạng đã giải mã giúp tôi: Kho Quân nhu Lục quân Mỹ tại Anniston, Alabama. Đây là căn cứ của phức hợp tên lửa Redstone của Lục quân, và nó cách Berkeley 3.200 kilometer.

Chỉ trong vài phút, hắn đã kết nối với một căn cứ quân sự thông qua phòng thí nghiệm của chúng tôi. Bản in này là bằng chứng khá rõ rằng đây chính là một gã hacker. Không có ai ngoài hắn sử dụng tài khoản của Sventek. Và còn ai ngoài hắn lại đi kiểm tra lỗ hổng an ninh của Gnu – Emacs trên một máy tính ở Alabama? Xung quanh không có người để gàn, vậy là tôi nhấc máy gọi cho cơ quan cung cấp thông tin về Anniston. Đúng như dự đoán, Kho Quân nhu Lục quân có một trung tâm máy tính, và sau một lúc hỏi lòng vòng, tôi tìm được Chuck McNatt, chuyên gia Unix ở đó.

_Chào Chuck. Anh không quen tôi nhưng có lẽ chúng tôi biết có kẻ đang sục sạo trong máy tính của các anh đấy._

_Anh là ai? Có gì để chứng minh rằng anh không có ý định xâm nhập vào hệ thống này?_

Sau vài phút ngờ vực, anh ta hỏi số điện thoại của tôi rồi gác máy, sau đó gọi lại. Đây là người không dễ tin người lạ. Hay cũng có khi anh ta gọi lại cho tôi qua đường dây an ninh chăng? _Có tin xấu đây,_ tôi nói. _Tôi thấy có kẻ đột nhập vào hệ thống của các anh._

_Chết tiệt – là gã khốn Hunter phải không?_

_Đúng. Sao anh biết?_

_Tôi đã từng thấy cái đuôi của hắn rồi._

Với giọng nói chậm và lè nhè đậm chất vùng Alabama, Chuck McNail cho tôi hay rằng Kho Vũ khí Tên lửa Redstone theo dõi các nguồn cung ứng quân nhu trên một số máy tính Unix. Để các đơn hàng được xử lý nhanh chóng, họ kết nối với máy tính của Chuck tại Kho Quân nhu Anniston. Hầu hết các lưu lượng dữ liệu của họ đều là thông tin cập nhật – không có nhiều người từ xa đăng nhập vào đây.

Một buổi sáng thứ Bảy, để tránh cái nóng nực của tiết trời tháng Tám, Chuck đi làm và kiểm tra xem có những ai đang đăng nhập vào hệ thống do anh phụ trách. Một người dùng tên Hunter đang sử dụng một khối lượng thời gian điện toán khổng lồ. Ngạc nhiên khi thấy có người làm việc vào ngày thứ Bảy, Chuck bắn một tin nhắn lên màn hình của Hunter và yêu cầu, _Này! Trình thông tin nhận dạng ra đi!_

Hunter bí ẩn đánh máy trả lời lại: _Anh nghĩ tôi là ai?_

Chuck không dễ bị mắc lừa. Anh gửi một tin nhắn khác: _Hãy trình thông tin nhận dạng, nếu không tôi sẽ đá anh ra khỏi hệ thống!_

Hunter đáp lại: _Tôi không thể nói được._

_Vậy là tôi tống cổ hắn ra khỏi hệ thống,_ Chuck nói. _Chúng tôi có gọi cho FBI, nhưng họ không thèm quan tâm. Vậy nên chúng tôi thuyết phục CID lần theo dấu vết mọi kết nối tới đây qua đường dây điện thoại._

_CID là cái của khỉ gì vậy?_

_Nghiêm túc đi nào,_ Chuck nói. _CID là cảnh sát của Lục quân, là Cục Điều tra Hình sự [Crime Investigation Division – CID]. Nhưng họ cũng không làm gì mấy._

_Không bị mất tài liệu mật nào chứ?_

Văn phòng thường trực của FBI ở Montgomery, Alabama, cũng nói với Chuck hệt như những gì mà văn phòng của họ ở Oakland đã nói với tôi. Họ chỉ điều tra khi 1 triệu dollar biến mất. Bằng không, đừng làm phiền họ. Tội phạm máy tính có gì hay ho đâu.

_Anh tìm thấy ai?_

_Kỳ quặc lắm,_ Chuck nói tiếp. _Tôi bắt gặp gã Hunter lẻn vào hệ thống hai hay ba lần nữa, nhưng bộ ghi âm điện thoại lại không có thông tin gì._

_Tôi cá là tôi biết tại sao đấy. Hắn tiếp cận các anh qua cửa hậu. Kết nối Milnet. Dạo này có một gã hacker nào đó thường xuyên xâm nhập vào hệ thống của chúng tôi, và sáng nay hắn đi vào hệ thống của các anh._

Chuck buột miệng chửi thề – vậy là anh đã bỏ lỡ ba phút kết nối này. Anh đã giăng bẫy trên mọi đường dây điện thoại, song lại chưa nghĩ đến việc phải theo dõi các liên kết mạng của mình.

_Chúng tôi đang cố gắng tìm hiểu xem kẻ đang xâm nhập vào hệ thống của mình là ai,_ tôi nói. _Chúng tôi cho rằng đó là một sinh viên ở Berkeley, và đã sẵn sàng mọi thứ để truy lùng hắn. Dấu vết đầu tiên tìm được chỉ đến Oakland hay Berkeley._

_Vâng, tôi hiểu suy nghĩ của anh. Ở Alabama, chúng tôi cũng đồ rằng đó là một sinh viên,_ Chuck nói. _Chúng tôi cũng từng nghĩ đến chuyện đóng mạng lại, nhưng rồi lại quyết tâm bắt hắn cho bằng được. Thà thấy hắn ngồi sau song sắt hơn là ngồi sau một chiếc máy tính._ Tôi chợt lo lắng cho sự an nguy của gã hacker. Nếu bị Lục quân tóm, hắn sẽ gặp khó khăn đây.

_Chuck này, tôi có tin bất ngờ cho anh đây. Tôi dám cá hắn là siêu người dùng trên hệ thống của các anh._

_Không. Hắn có thể đánh cắp tài khoản, nhưng không đời nào trở thành siêu người dùng được đâu. Chúng tôi là căn cứ quân sự chứ đâu phải trường đại học ngu ngốc nào đó._ Tôi bấm bụng cho qua lời sỉ nhục trên đối với Berkeley. _Hắn đang tìm kiếm tệp tin movemail34 trong Gnu – Emacs của các anh đấy._

_Vâng. Thì sao?_

_Anh có biết thói quen làm tổ của loài tu hú không?_ Tôi giải thích về cơ chế của lổ hỗng an ninh trong Gnu – Emacs.

Chuck kinh ngạc. _Ý anh là chúng tôi đã có lỗ hổng này từ lúc được White Sands35 gửi cho tệp tin Gnu?_

Anh huýt sáo. _Không biết hắn đã lảng vảng ở đây bao lâu rồi._

Vậy là Chuck đã hiểu về lỗ hổng này cũng như những hệ quả của nó.

Gã hacker liệt kê các tệp tin trong hệ thống Anniston. Nhìn vào dữ liệu ngày tháng của các tệp tin này, có thể đoán hắn đã quanh quẩn trong các máy tính của Anniston từ đầu tháng Sáu. Vậy là suốt bốn tháng, một quản lí hệ thống bất hợp pháp đã ngang nhiên sử dụng máy tính của Lục quân Alabama. Và hắn chỉ được phát hiện một cách tình cờ, không phải do một quả bom logic phát nổ hay có thông tin nào bị đánh cắp.

Không có thiệt hại rõ ràng nào.

Xem kỹ cuộn giấy in buổi sáng, tôi thấy gã hacker đã thực thi lệnh thay đổi mật khẩu. Trên máy tính của Anniston, hắn đổi mật khẩu của Hunter thành _Hedges._ Ơn Chúa, cuối cùng thì cũng có một manh mối xuất hiện: Trong vô vàn các phương án đặt mật khẩu, tại sao hắn lại chọn chữ Hedges? Hedges Hunter? Hunter Hedges? Hay đó không phải tên riêng mà là từ chỉ một thợ săn quỹ – hedge hunter? Tôi lật đật chạy đi tìm cuốn danh bạ điện thoại Berkeley và giở đến mục H.

Tôi gọi điện thoại cho ba người có tên H. Hunter và biết được họ lần lượt là Harold, Heidi và Hilda Hunter.

_Xin chào, ông bà có muốn đặt tạp chí Computer Reviews miễn phí không ạ?_

Không thu được thành quả gì. Tất cả đều nói họ không quan tâm đến máy tính.

Điểm tương đồng giữa một phòng thí nghiệm vật lý ở Berkeley và một kho quân nhu ở Anniston, Alabama là gì? Về mặt chính trị, đây là hai địa điểm không thể mâu thuẫn hơn: một bên là một căn cứ quân sự ngoan đạo, còn một bên là một thị trấn đậm màu sắc hippie với những tư tưởng cấp tiến.

Tuy nhiên, về mặt kỹ thuật, chúng tôi có một số điểm chung. Các máy tính của cả hai bên đều chạy hệ điều hành Unix và kết nối qua mạng Milnet.

Nhưng đợi đã – hệ thống của Anniston chạy Unix phiên bản AT&T, không phải thứ phương ngữ Berkeley chúng tôi. Nếu Dave Cleveland nói đúng thì gã hacker này đã dựng nhà trên hệ thống của Annistion. Phải chăng đây là một gã hacker miền Nam?

Đọc [Gián điệp mạng, chương 01](https://nhavantuonglai.com/article/gian-diep-mang-chuong-01) tại đây.

Đọc [Gián điệp mạng, chương 02](https://nhavantuonglai.com/article/gian-diep-mang-chuong-02) tại đây.

Đọc [Gián điệp mạng, chương 03](https://nhavantuonglai.com/article/gian-diep-mang-chuong-03) tại đây.

Đọc [Gián điệp mạng, chương 04](https://nhavantuonglai.com/article/gian-diep-mang-chuong-04) tại đây.

Đọc [Gián điệp mạng, chương 05](https://nhavantuonglai.com/article/gian-diep-mang-chuong-05) tại đây.

Đọc [Gián điệp mạng, chương 06](https://nhavantuonglai.com/article/gian-diep-mang-chuong-06) tại đây.

Đọc [Gián điệp mạng, chương 07](https://nhavantuonglai.com/article/gian-diep-mang-chuong-07) tại đây.

Đọc [Gián điệp mạng, chương 09](https://nhavantuonglai.com/article/gian-diep-mang-chuong-09) tại đây.

Đọc [Gián điệp mạng, chương 10](https://nhavantuonglai.com/article/gian-diep-mang-chuong-10) tại đây.

Đọc [Gián điệp mạng, chương 11](https://nhavantuonglai.com/article/gian-diep-mang-chuong-11) tại đây.

Đọc [Gián điệp mạng, chương 12](https://nhavantuonglai.com/article/gian-diep-mang-chuong-12) tại đây.

Đọc [Gián điệp mạng, chương 13](https://nhavantuonglai.com/article/gian-diep-mang-chuong-13) tại đây.

Đọc [Gián điệp mạng, chương 14](https://nhavantuonglai.com/article/gian-diep-mang-chuong-14) tại đây.

Đọc [Gián điệp mạng, chương 15](https://nhavantuonglai.com/article/gian-diep-mang-chuong-15) tại đây.

Đọc [Gián điệp mạng, chương 16](https://nhavantuonglai.com/article/gian-diep-mang-chuong-16) tại đây.

Đọc [Gián điệp mạng, chương 17](https://nhavantuonglai.com/article/gian-diep-mang-chuong-17) tại đây.

Đọc [Gián điệp mạng, chương 18](https://nhavantuonglai.com/article/gian-diep-mang-chuong-18) tại đây.

Đọc [Gián điệp mạng, chương 19](https://nhavantuonglai.com/article/gian-diep-mang-chuong-19) tại đây.

Đọc [Gián điệp mạng, chương 20](https://nhavantuonglai.com/article/gian-diep-mang-chuong-20) tại đây.

Đọc [Gián điệp mạng, chương 21](https://nhavantuonglai.com/article/gian-diep-mang-chuong-21) tại đây.

Đọc [Gián điệp mạng, chương 22](https://nhavantuonglai.com/article/gian-diep-mang-chuong-22) tại đây.

Đọc [Gián điệp mạng, chương 23](https://nhavantuonglai.com/article/gian-diep-mang-chuong-23) tại đây.

Đọc [Gián điệp mạng, chương 24](https://nhavantuonglai.com/article/gian-diep-mang-chuong-24) tại đây.

Đọc [Gián điệp mạng, chương 25](https://nhavantuonglai.com/article/gian-diep-mang-chuong-25) tại đây.

Đọc [Gián điệp mạng, chương 26](https://nhavantuonglai.com/article/gian-diep-mang-chuong-26) tại đây.

Đọc [Gián điệp mạng, chương 27](https://nhavantuonglai.com/article/gian-diep-mang-chuong-27) tại đây.

Đọc [Gián điệp mạng, chương 28](https://nhavantuonglai.com/article/gian-diep-mang-chuong-28) tại đây.

Đọc [Gián điệp mạng, chương 29](https://nhavantuonglai.com/article/gian-diep-mang-chuong-29) tại đây.

Đọc [Gián điệp mạng, chương 30](https://nhavantuonglai.com/article/gian-diep-mang-chuong-30) tại đây.

Đọc [Gián điệp mạng, chương 31](https://nhavantuonglai.com/article/gian-diep-mang-chuong-31) tại đây.

Đọc [Gián điệp mạng, chương 32](https://nhavantuonglai.com/article/gian-diep-mang-chuong-32) tại đây.

Đọc [Gián điệp mạng, chương 33](https://nhavantuonglai.com/article/gian-diep-mang-chuong-33) tại đây.

Đọc [Gián điệp mạng, chương 34](https://nhavantuonglai.com/article/gian-diep-mang-chuong-34) tại đây.

Đọc [Gián điệp mạng, chương 35](https://nhavantuonglai.com/article/gian-diep-mang-chuong-35) tại đây.

Đọc [Gián điệp mạng, chương 36](https://nhavantuonglai.com/article/gian-diep-mang-chuong-36) tại đây.

Đọc [Gián điệp mạng, chương 37](https://nhavantuonglai.com/article/gian-diep-mang-chuong-37) tại đây.

Đọc [Gián điệp mạng, chương 38](https://nhavantuonglai.com/article/gian-diep-mang-chuong-38) tại đây.

Đọc [Gián điệp mạng, chương 39](https://nhavantuonglai.com/article/gian-diep-mang-chuong-39) tại đây.

Đọc [Gián điệp mạng, chương 40](https://nhavantuonglai.com/article/gian-diep-mang-chuong-40) tại đây.

Đọc [Gián điệp mạng, chương 41](https://nhavantuonglai.com/article/gian-diep-mang-chuong-41) tại đây.

Đọc [Gián điệp mạng, chương 42](https://nhavantuonglai.com/article/gian-diep-mang-chuong-42) tại đây.

Đọc [Gián điệp mạng, chương 43](https://nhavantuonglai.com/article/gian-diep-mang-chuong-43) tại đây.

Đọc [Gián điệp mạng, chương 44](https://nhavantuonglai.com/article/gian-diep-mang-chuong-44) tại đây.

Đọc [Gián điệp mạng, chương 45](https://nhavantuonglai.com/article/gian-diep-mang-chuong-45) tại đây.

Đọc [Gián điệp mạng, chương 46](https://nhavantuonglai.com/article/gian-diep-mang-chuong-46) tại đây.

Đọc [Gián điệp mạng, chương 47](https://nhavantuonglai.com/article/gian-diep-mang-chuong-47) tại đây.

Đọc [Gián điệp mạng, chương 48](https://nhavantuonglai.com/article/gian-diep-mang-chuong-48) tại đây.

Đọc [Gián điệp mạng, chương 49](https://nhavantuonglai.com/article/gian-diep-mang-chuong-49) tại đây.

Đọc [Gián điệp mạng, chương 50](https://nhavantuonglai.com/article/gian-diep-mang-chuong-50) tại đây.

Đọc [Gián điệp mạng, chương 51](https://nhavantuonglai.com/article/gian-diep-mang-chuong-51) tại đây.

Đọc [Gián điệp mạng, chương 52](https://nhavantuonglai.com/article/gian-diep-mang-chuong-52) tại đây.

Đọc [Gián điệp mạng, chương 53](https://nhavantuonglai.com/article/gian-diep-mang-chuong-53) tại đây.

Đọc [Gián điệp mạng, chương 54](https://nhavantuonglai.com/article/gian-diep-mang-chuong-54) tại đây.

Đọc [Gián điệp mạng, chương 55](https://nhavantuonglai.com/article/gian-diep-mang-chuong-55) tại đây.

Đọc [Gián điệp mạng, chương 56](https://nhavantuonglai.com/article/gian-diep-mang-chuong-56) tại đây.

Đọc [Gián điệp mạng, chương 57](https://nhavantuonglai.com/article/gian-diep-mang-chuong-57) tại đây.

Đọc [Gián điệp mạng, toàn tập](https://banmaixanh.org/ebook/gian-diep-mang.pdf) tại đây.

<figure><img src="https://banmaixanh.org/image/cover/001-308.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>