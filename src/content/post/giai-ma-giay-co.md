---
pubDatetime: 2021-09-09T10:10:00Z
title: Cách ba sinh viên viết nên lịch sử khi thắng giải Vesuvius Challenge
description: Những cuộn giấy cổ này là thư viện duy nhất còn nguyên vẹn của La Mã cổ đại – và chúng sẽ vỡ vụn khi chạm vào.
image: https://banmaixanh.vercel.app/image/cover/001-657.jpg
tags:
  - khoa hoc
  - nghien cuu
  - chu viet
  - dao phuc sinh
  - ngon ngu hoc
  - vesuvius challenge
  - thaumatoanakalyptor
---

_Những cuộn giấy cổ này là thư viện duy nhất còn nguyên vẹn của La Mã cổ đại – và chúng sẽ vỡ vụn khi chạm vào._

Trong gần 20 năm, giáo sư khoa học máy tính Brent Seales tại Đại học Kentucky đã nỗ lực phát triển phần mềm để mở những cuộn giấy cổ đã bị cháy và chôn vùi trong vụ phun trào của núi lửa Vesuvius vào năm 79 sau Công Nguyên. Cuối cùng, ông nhận ra rằng công việc này quá lớn để một nhóm đơn lẻ có thể hoàn thành, nên ông bắt đầu cân nhắc việc sử dụng những tiến bộ nhanh chóng trong lĩnh vực trí tuệ nhân tạo. Sau đó, ông nảy ra một ý tưởng táo bạo hơn: biến dự án thành một cuộc thi mã nguồn mở toàn cầu.

## Bước đột phá được tiếp lửa bởi cuộc thi Vesuvius

Kết hợp hai ý tưởng này đã mang đến một bước đột phá. Kể từ khi ra mắt vào tháng 3 năm 2023, cuộc thi Vesuvius Challenge – được tài trợ bởi các nhà đầu tư công nghệ như Nat Friedman (cựu CEO của Github) và doanh nhân Daniel Gross – đã đạt được tiến bộ lớn hơn bất kỳ ai có thể tưởng tượng trong việc mở và đọc các cuộn giấy cổ. Học máy đã tự động hóa các quy trình mà con người sẽ mất hàng thập kỷ để hoàn thành, trong khi cuộc thi tạo ra một mạng lưới các tài năng trẻ từ khắp nơi trên thế giới hợp tác cùng nhau thay vì cạnh tranh.

Tài năng thường xuất hiện từ những nơi bất ngờ, và cuộc thi Vesuvius Challenge không phải là ngoại lệ. Người chiến thắng giải Grand Prize danh giá – trị giá lên tới 700.000 USD được trao vào ngày 5 tháng 2 – không phải là các giáo sư danh tiếng từ các trường đại học hàng đầu, mà là ba sinh viên trẻ đầy triển vọng, trong đó có một người vẫn còn đang học đại học.

## Vấn đề giải cuộn giấy

Julian Schilliger biết đến cuộc thi Vesuvius Challenge vào tháng mà cuộc thi được công bố. Dựa vào những kiến thức anh đã học về khoa học dữ liệu tại Đại học Freie Universität Berlin và kinh nghiệm xây dựng robot hình người trong thời gian rảnh, anh lao vào giải quyết vấn đề đầu tiên và có lẽ là tốn thời gian nhất của cuộc thi: phân đoạn hình ảnh. Trong ngôn ngữ của Vesuvius, phân đoạn nghĩa là tạo mã có thể _mở cuộn_ các bản chụp CT của những cuộn giấy, vốn quá dễ vỡ để có thể xử lý bằng tay, từ đó cho phép trí tuệ nhân tạo tìm kiếm những vết mực mờ trên bề mặt đen xỉn.

_Đây là một vấn đề về thị giác máy tính,_ anh nói với Freethink. _Các cuộn giấy làm từ papyrus cuộn tròn rất khó đọc, chứ chưa nói đến việc chiết xuất. Phần mềm của tôi đã nâng cấp một công cụ có sẵn do EduceLab phát triển, gọi là Volume Cartographer, cho phép công cụ này mở rộng từ các đoạn nhỏ 2 mm đến gần 3.000 cm² – cải thiện việc trích xuất trang gấp 10.000 lần!_

## Tạo ra ThaumatoAnakalyptor

Dù đã thắng một số giải thưởng nhỏ hơn của cuộc thi, bước đột phá này giúp Schilliger kết nối với Youssef Nader và Luke Farritor, những người đã phát hiện ra các chữ đầu tiên trong cuộc thi và giành giải thưởng First Letters trị giá 40.000 USD vào tháng 10. _Đối với họ, điều này rất rõ ràng,_ Schilliger suy ngẫm. _Giải quyết vấn đề phân đoạn là một trong những yêu cầu của giải Grand Prize, và do đó họ muốn tôi tham gia vào đội của họ._

Làm việc cùng Nader và Farritor, Schilliger phát triển ThaumatoAnakalyptor, một công cụ phân đoạn hoàn toàn tự động có thể mở cuộn giấy mà không cần mở thực tế. _Nó hoạt động bằng cách trích xuất các điểm bề mặt từ bản chụp CT và nhóm các điểm thành các tấm,_ Schilliger giải thích. _Các tấm này sau đó được dịch sang dạng lưới sử dụng phương pháp tái cấu trúc bề mặt Poisson, từ đó có thể sử dụng để tạo kết cấu cho một hình ảnh mở cuộn._

Nhờ có ThaumatoAnakalyptor, Nader và Farritor giờ đây đã có một bề mặt phẳng lớn để làm việc, điều này rất cần thiết vì giải Grand Prize yêu cầu họ phải khôi phục không chỉ các từ mà là cả câu: cụ thể là 4 đoạn văn, mỗi đoạn dài 140 ký tự.

## Tìm kiếm vết mực

Phát hiện mực cũng là một vấn đề lớn trong cuộc thi. _Vì mực và papyrus đều được làm từ carbon, chúng có bề ngoài tương tự nhau trong tia X, nên không dễ để thấy mực trong các bản chụp,_ Stephen Parsons, một học giả tại UK Digital Restoration Initiative và cố vấn nghiên cứu cho Vesuvius Challenge, giải thích. _Trong một số trường hợp, mực đủ dày để có thể quan sát kết cấu của nó, giống như lớp sơn bị bong tróc hoặc bùn nứt nẻ. Những vết này có thể được đánh dấu, chỉ ra cho thuật toán rằng đó là mực. Thuật toán có thể được đào tạo và sử dụng để phát hiện những nơi khác có mực. Bằng cách lặp đi lặp lại quá trình này và làm sạch các dự đoán, dần dần các thuật toán học cách phát hiện ra các dấu vết tinh tế hơn. Khi nó được áp dụng cho một phần của cuộn giấy, nó sẽ hiển thị văn bản._

_Thử thách lớn nhất,_ Nader nói với Freethink, _là làm sao để có thêm các chữ cái. Có những khu vực hoàn toàn tối và chúng tôi đang cố gắng hiểu tại sao chữ cái không xuất hiện ở đó. Chúng tôi kết luận rằng có lẽ các chữ cái không bị mất trong quá trình phân đoạn, mà các mô hình mực cần được cải thiện. Tôi đã dành rất nhiều thời gian để tạo ra các mô hình mạnh hơn để ép các chữ cái đó ra, và cuối cùng chúng tôi đã đạt được điều kiện thắng là 85% khả năng đọc._

Vào cuối năm đầu tiên, Vesuvius Challenge đã giải mã được 5% của một cuộn giấy cổ, hồi sinh văn bản chưa từng được đọc trong hàng thiên niên kỷ. Một dòng văn bản viết: _Về vấn đề thực phẩm, chúng tôi không tin ngay rằng những thứ hiếm có thì nhất định là dễ chịu hơn những thứ dồi dào._ Một dòng khác viết: _…chúng tôi không kiêng khem trong việc chất vấn một số thứ, nhưng hiểu/nhớ lại những thứ khác._ _Và mong rằng điều đó sẽ rõ ràng cho chúng tôi để nói sự thật, như chúng có thể đã nhiều lần hiện ra!_

Robert Fowler, giáo sư danh dự về tiếng Hy Lạp tại Đại học Bristol, người phân tích văn bản, cho rằng nó có thể là một bản sao của tác phẩm của Philodemus, một học trò của nhà triết học nổi tiếng Epicurus.

## Vesuvius 2024

Vesuvius Challenge chưa kết thúc. Trái lại, nó mới chỉ bắt đầu, với năm 2024 mang đến các nhiệm vụ tham vọng hơn và phần thưởng lớn hơn. Giải Grand Prize 2024 sẽ thuộc về đội đầu tiên giải mã ít nhất 90% văn bản – một thành tựu sẽ mang về cho họ tổng cộng 100.000 USD. Những người tổ chức cuộc thi hy vọng rằng, với cột mốc này, AI sẽ có thể đọc được tất cả 1.800 cuộn giấy đã được thu hồi từ đống đổ nát gần Vesuvius, và có thể là hàng ngàn cuộn giấy khác chưa được phát hiện.

Mặc dù nhiều người kinh ngạc trước thành công của cuộc thi, Seales thực ra đã thấy trước điều đó. _Tôi có thể là người duy nhất dự đoán khả năng thành công đạt đến 90% hoặc gần như chắc chắn,_ ông thừa nhận. _Nhưng cơ sở khoa học cho kỳ vọng của tôi đã rõ ràng trước khi chúng tôi bắt đầu cuộc thi. Tôi tin rằng đó là vấn đề về thời gian và tốc độ, điều mà cuộc thi đã cung cấp chính xác._

<figure><img src="https://banmaixanh.vercel.app/image/cover/001-646.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>