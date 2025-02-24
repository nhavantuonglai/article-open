---
pubDatetime: 2018-11-17T10:10:00Z
title: Gián điệp mạng | Chương 17
description: Gián điệp mạng kể về nhà khoa học chuyển nghề thành chuyên gia mạng, truy tìm hacker tại Phòng Thí nghiệm Lawrence Berkeley, California, Mỹ.
featured: false
image: https://banmaixanh.org/image/cover/001-517.jpg
tags:
  - clifford stoll
  - gian diep mang
  - an ninh mang
  - thu vien
  - van hoc
  - van hoc nuoc ngoai
---

Gã hacker biết rõ đường đi lối lại ở Milnet. Giờ thì tôi đã thấy rõ sự vô ích của việc đóng chặt cửa để chặn hắn ở ngoài, vì hắn sẽ tìm cửa khác để vào. tôi có thể khóa cửa nẻo chỗ mình, nhưng hắn sẽ trèo vào các hệ thống khác.

Không ai phát hiện ra hắn. Rộng đường, hắn tha hồ lẻn vào Livermore, SRI, Anniston, và MIT.

Không có ai truy bắt hắn. FBI thì chắc chắn là không rồi. CIA và Văn phòng Điều tra Đặc biệt (OSI) của Không quân không thể hoặc không muốn làm bất cứ điều gì.

Vâng, gần như là không có ai. Tôi bám theo hắn, nhưng chưa thể nghĩ ra cách nào để bắt hắn. Những cuộc truy lùng qua đường dây điện thoại không mang lại kết quả. Mà hắn sử dụng đến vài mạng lưới khác, làm sao tôi biết hắn đến từ đâu? Hôm nay, hắn có thể vào phòng thí nghiệm của tôi rồi tiếp cận một máy tính ở Massachusetts, nhưng ngày mai, biết đâu hắn lại mò vào mạng lưới khác rồi tiếp cận nơi khác. Tôi chỉ có thể theo dõi khi hắn động vào hệ thống của tôi.

Đã đến lúc bỏ cuộc và quay về với thiên văn học và lập trình, hoặc làm sao khiến địa điểm của tôi trở nên hấp dẫn đến nỗi hắn chỉ thích lấy Berkeley này làm nơi khởi sự.

Có lẽ phương án bỏ cuộc hợp lý hơn cả. Thời hạn ba tuần của tôi đã hết, và tôi cũng nghe được loáng thoáng những lời càu nhàu về _cuộc truy tìm Chén Thánh của Cliff._ Chỉ cần cuộc lùng sục này có dấu hiệu khả quan, phòng thí nghiệm sẽ thông cảm cho tôi, nhưng chẳng gì thì tôi cũng phải cho thấy rằng có sự tiến triển. Nhưng trong cả tuần qua, chỉ gã hacker mới có tiến triển.

_Hãy làm nghiên cứu đi,_ Luis Alvarez đã nói với tôi như vậy. Được rồi, tôi sẽ theo dõi gã này và gọi đây là khoa học. Để xem tôi có thể học được gì về mạng lưới, an ninh máy tính, và biết đâu là về cả chính gã hacker nữa.

Vậy là tôi mở lại cửa và quả nhiên, gã hacker lại mò vào rồi sục sạo quanh hệ thống. Hắn tìm thấy một tập tin thú vị mô tả các kỹ thuật thiết kế vi mạch mới. Tôi ngồi quan sát hắn kích hoạt Kermit, chương trình chuyển tập tin phổ biến, để di chuyển tập tin của chúng tôi tới máy tính của hắn.

Chương trình Kermit không chỉ sao chép tập tin từ máy tính này sang máy tính khác mà còn liên tục kiểm tra xem có lỗi nào phát sinh trong quá trình di chuyển không. Vì vậy, khi gã hacker bật chương trình Kermit của chúng tôi lên, tôi biết rằng hắn cũng đồng thời khởi động chương trình Kermit tương tự ở máy của hắn. Tôi không biết hắn đang ở đâu, nhưng chắc chắn hắn đang sử dụng máy tính, chứ không chỉ là một thiết bị đầu cuối đơn giản.

Điều này có nghĩa rằng hắn có thể lưu trữ toàn bộ các phiên truy cập của mình trên một bản in hoặc đĩa mềm. Hắn không cần phải chép tay các ghi chú.

Kermit sao chép tập tin từ hệ thống này sang hệ thống khác. Hai máy tính phải hợp tác với nhau – một máy gửi tập tin, còn máy kia nhận. Kermit chạy trên cả hai máy: một Kermit nói, Kermit còn lại lắng nghe.

Để chắc chắn rằng nó không phạm lỗi gì, Kermit gửi sẽ tạm dừng sau mỗi dòng để Kermit nghe có cơ hội thông báo: _Tôi đã nhận dòng này, hãy gửi dòng tiếp theo đi._

Kermit gửi chờ lời xác nhận rồi tiếp tục gửi dòng tiếp theo. Nếu phát sinh vấn đề, Kermit gửi sẽ thử lại cho đến khi nhận được xác nhận. Việc này cũng giống như một cuộc nói chuyện qua điện thoại, trong đó cứ sau vài câu một người lại gật gù nói: _Ừ… ừ._

Vị trí theo dõi của tôi nằm giữa Kermit của chúng tôi và Kermit của gã hacker. Không hẳn chính xác là ở giữa. Máy in của tôi ghi lại cuộc trao đổi này giữa hai Kermit, nhưng nó được đặt ở đầu Berkeley trong một kết nối đường dài. Tôi quan sát máy tính của gã hacker lấy dữ liệu của chúng tôi và đưa ra những phản hồi xác nhận.

Đột nhiên tôi nảy ra một ý. Chuyện này cũng giống như việc ngồi cạnh một người đang hét to để truyền thông tin qua một hẻm núi. Những tiếng vọng cho bạn biết âm thanh di chuyển được bao xa. Để tính khoảng cách tới vách núi, chỉ cần nhân độ trễ của tiếng vọng với một nửa tốc độ âm thanh. Một kiến thức vật lý đơn giản. tôi vội vàng gọi cho các kỹ thuật viên điện tử. Lloyd Bellknap biết cách đo thời gian của tiếng vọng. _Anh chỉ cần một dao động ký, và cả máy đếm nữa._

Phút sau, Lloyd lôi từ đâu ra được một dao động ký từ thời thượng cổ, khi ống chân không vẫn còn thịnh hành.

Nhưng chúng tôi cũng chỉ cần có thế để thấy được những xung động này.

Chúng tôi theo dõi dấu vết và đo thời gian của tiếng vọng. Ba giây. Ba giây rưỡi. Ba giây một phần tư.

Ba giây cho một chuyến đi khứ hồi? Nếu tín hiệu di chuyển với vận tốc ánh sáng (không phải là một giả định tồi), thì điều đó có nghĩa là gã hacker đang ở cách đây khoảng 450.000 kilometer.

Với sự trịnh trọng hợp lý, tôi thông báo với Lloyd: _Từ kiến thức vật lý cơ bản, tôi kết luận rằng gã hacker đang sống ở cung trăng._

Lloyd nắm rõ về lĩnh vực viễn thông. _Tôi sẽ nêu ra ba lý do giải thích vì sao anh sai._

_Được rồi, tôi biết một lý do trong số đó,_ tôi nói. _Tín hiệu của gã hacker có thể di chuyển qua một liên kết vệ tinh. Sóng vi ba đi từ Trái đất đến vệ tinh và quay trở về trong một phần tư giây._

Các vệ tinh liên lạc quay trên một quỹ đạo cách đường xích đạo 37.000 kilometer.

_Đúng, đó là một lý do,_ Lloyd nói. _Nhưng phải có 12 chặng vệ tinh mới ra được độ trễ ba giây kia. Lý do thực sự cho độ trễ này là gì nào?_

_Có thể máy tính của gã hacker chạy chậm._

_Không chậm đến thế đâu, dù rằng có thể hắn đã lập trình để chương trình Kermit phản ứng chậm. Đó là lý do thứ hai._

_A! Tôi biết lý do thứ ba rồi. Gã hacker sử dụng các mạng lưới di chuyển dữ liệu theo gói. Các gói này liên tục bị định tuyến lại, tập hợp, rồi phân tách.

Mỗi lần chúng di chuyển qua một nút mạng mới, tốc độ của hắn sẽ bị chậm đi._

_Chính xác. Nếu không đếm được số lượng nút mạng, anh sẽ không thể biết hắn cách đây bao xa. Nói cách khác,Anh thua rồi._

Lloy ngáp dài và quay về hí hoáy với một thiết bị đầu cuối đang sửa dở dang.

Nhưng vẫn còn một cách nữa để xác định khoảng cách của gã hacker. Sau khi hắn bỏ đi, tôi gọi cho một người bạn ở Los Angeles và bảo anh ấy kết nối với máy của tôi qua AT&T và Tymnet. Khi anh bắt đầu chạy Kermit, tôi đo thời gian của tiếng vọng từ anh. Rất ngắn, chỉ mất chừng một phần mười giây.

Một người bạn khác, lần này là ở Houston, Texas. Tiếng vọng của anh có độ trễ khoảng 0,15 giây. Ba người khác lần lượt ở Baltimore, New York, và Chicago đều có độ trễ tiếng vọng dưới một giây.

New York cách Berkeley hơn 3.000 kilometer, và độ trễ tiếng vọng là khoảng một giây. Như vậy, độ trễ ba giây có nghĩa là khoảng 10.000 kilometer. Có thể sai khác trên hoặc dưới 2.000 kilometer.

Kỳ lạ thật. Con đường dẫn tới gã hacker chắc phải vòng vèo hơn dự đoán của tôi. tôi đưa chứng cứ mới này cho Dave Cleveland. _Giả sử gã hacker sống ở California, gọi cho Bờ Đông, sau đó kết nối với Berkeley. Như vậy mới có thể lý giải cho các độ trễ dài như thế này._

_Gã hacker không đến từ California,_ vị chuyên gia của tôi trả lời. _Tôi đã nói rồi, hắn không biết gì về Unix phiên bản Berkeley._

_Vậy thì chắc máy tính của hắn rất chậm._

_Khó có khả năng đó, vì hắn không phải tay mơ về Unix._

_Hắn cố tình làm chậm đi các thông số của Kermit?_

_Không ai làm thế cả, rất mất thời gian khi chuyển tập tin._ Tôi nghĩ về ý nghĩa đằng sau thước đo này. Các kết nối thử của bạn bè đã cho tôi biết độ trễ của Tymnet và AT&T. Chưa đến một giây. Vậy là hai giây còn lại vẫn chưa có lời giải thích.

Có thể tôi đã sử dụng phương pháp sai. Có thể đúng là máy tính của gã hacker kia rất chậm. Hoặc cũng có thể hắn đến thông qua một mạng lưới khác ngoài các đường dây điện thoại của AT&T. Một mạng lưới mà tôi không hề biết.

Mỗi mảnh dữ liệu mới lại chỉ đến một hướng khác. Tymnet nói đó là Oakland. Công ty điện thoại bảo Virginia. Tiếng vọng của hắn lại nói về một nơi cách Virginia hơn 6.000 kilometer.

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

<figure><img src="https://banmaixanh.org/image/cover/001-548.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>