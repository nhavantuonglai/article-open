---
pubDatetime: 2024-01-25T10:00:00Z
title: Clifford Stoll | Gián điệp mạng (Chương 25)
description: Gián điệp mạng là câu chuyện người thật việc thật kể về cuộc săn đuổi hacker bất đắc dĩ của nhà khoa học chuyển tay ngang trở thành chuyên gia mạng máy tính ở Phòng Thí nghiệm Lawrence Berkeley, California, Mỹ.
featured: false
image: https://data.nhavantuonglai.com/image/illustrations/cover-nhavantuonglai-com-0027.jpg
tags:
  - clifford stoll
  - gian diep mang
  - an ninh mang
  - thu vien
  - van hoc
  - van hoc nuoc ngoai
---

Sổ ghi chép, Chủ nhật, ngày 23 tháng Mười một, năm 1986.

```
10 giờ 30 phút sáng: Số truy cập Tymnet Oakland là 415/ 430 – 2900. Gọi từ máy Macintosh của tôi ở nhà. 1.200 baud, không dùng bit chẵn lẻ. Tymnet yêu cầu tên người dùng. Tôi gõ chữ MITRE. Trả lời: Chào mừng đến với Mitre – Bedford.

10 giờ 40 phút sáng: Mạng nội bộ của Mitre có một trình thực đơn. 14 mục, có lẽ đó là những máy tính khác nhau ở Mitre. Tôi thử lần lượt từng mục.

10 giờ 52 phút sáng: một mục là MWCC dẫn đến một trình thực đơn khác, có 12 mục. Một mục là DIAL. Tôi thử: DIAL 415 486 2984 không có gì DIAL 1 415 486 2984 không có gì DIAL 1 415 486 2984 Kết nối với máy tính Berkeley. Kết luận: người ngoài có thể kết nối với Mitre qua Tymnet. Không cần mật khẩu. Khi đã xâm nhập được vào Mitre, chúng có thể gọi ra ngoài, gọi trong vùng hay gọi đường dài đều được. MWCC là từ viết tắt của Mitre Washington Computing Center (Trung tâm Điện toán Mitre Washington); Bedford có nghĩa là Bedford Massachusetts. Tôi vừa truy cập vào Mitre ở Bedford, và thoát ra ngoài ở McLean, cách đó 800 kilometer.

11 giờ 3 phút sáng: Ngắt kết nối từ máy tính Berkeley, nhưng vẫn ở Mitre. tôi yêu cầu kết nối tới hệ thống AEROVAX. Nó hỏi tên người dùng. Tôi gõ `Guest`. Nó chấp nhận và cho tôi đăng nhập mà không cần mật khẩu. Khám phá máy tính Aerovax. Aerovax có các chương trình bảo đảm an toàn chuyến bay tại sân bay. Chương trình tìm góc hạ cánh khả thi cho cả phương án tiếp đất tốc độ cao và thấp. Có lẽ được chính phủ trợ cấp. Aerovax kết nối với một số máy tính khác ở mạng của Mitre. Có mật khẩu bảo vệ. `Guest` không phải là tên người dùng hợp lệ trên các máy tính này. (Thậm chí tôi còn không rõ chúng có ở Mitre không.) Khoan đã – hình như có gì đó sai sai ở đây thì phải. Phần mềm điều khiển mạng có vẻ không bình thường – thông điệp chào mừng xuất hiện quá nhanh, nhưng nó lại hoàn thành kết nối quá chậm. Không biết trong chương trình đó có gì nhỉ… À! Té ra là nó đã bị chỉnh sửa. Có người đã đưa một con ngựa thành Troy vào phần mềm mạng lưới của Aerovax để sao chép các mật khẩu của hệ thống vào một tập tin bí mật nhằm sử dụng về sau. Kết luận: có người đang can thiệp vào phần mềm của Mitre và đánh cắp thành công các mật khẩu ở đây.

11 giờ 35 phút sáng: Ngắt kết nối từ Mitre và cập nhật sổ ghi chép.

Ngày nay, khi ngồi đọc lại sổ ghi chép, tôi vẫn nhớ như in một giờ sục sạo trong mạng nội bộ của Mitre hôm ấy. Một cảm giác nửa háo hức nửa tội lỗi vì đang làm điều sai trái. Tôi sẵn sàng tinh thần chờ đến giây phút bất thình lình, ai đó gửi vào màn hình mình một tin nhắn: Bắt quả tang rồi nhé. Ra ngoài, giơ tay lên.
```

Thế là đã rõ, hệ thống của Mitre có một lỗ hổng to tướng. Bất kỳ ai cũng có thể thực hiện một cuộc gọi cục bộ, yêu cầu Tymnet kết nối với Mitre, và thong thả dành cả buổi chiều để tha hồ mò mẫm trong các máy tính của Mitre. Hầu hết các máy tính của họ đều được bảo vệ bằng mật khẩu, nhưng ít nhất một máy vẫn để mở. tôi chợt nhớ đến lời khẳng định chắc nịch của Mitre: _Chúng tôi vận hành một dịch vụ an ninh, và không ai có thể xâm nhập được._

Được rồi.

Tài khoản `Guest` trên máy Aerovax của họ mở cửa với tất cả mọi người.

Nhưng con ngựa thành Troy mới là tử huyệt. Có kẻ đã can thiệp vào chương trình mạng lưới của họ để sao chép mật khẩu vào một vùng đặc biệt. Mỗi lần một nhân viên hợp lệ sử dụng máy tính Aerovax, mật khẩu của họ sẽ bị đánh cắp. Và bằng cách đó, gã hacker đã thu thập được chìa khóa để tiếp cận các máy tính khác của Mitre. Khi đã đâm thủng được qua lớp áo giáp của họ, hắn có thể tung hoành khắp nơi.

Hệ thống của Mitre đã bị xâm nhập đến mức nào? Khi liệt kê thư mục của họ, tôi thấy con ngựa thành Troy đã xuất hiện từ ngày 17 tháng Sáu. Suốt sáu tháng, có kẻ đã lặng lẽ đặt bẫy các máy tính của họ. tôi không thể chứng minh rằng đó cũng là gã hacker mà tôi đang phải đối phó. Nhưng buổi thử làm hacker sáng nay đã cho thấy ai cũng có thể xâm nhập hệ thống của Mitre và gọi đến hệ thống máy tính ở Berkeley của tôi.

Như vậy, gã hacker không nhất thiết phải là người ở Mitre. Hắn có thể ở bất kỳ đâu.

Có lẽ Mitre đóng vai trò một trạm dừng chân, một bước đệm trên hành trình tấn công các hệ thống máy tính khác.

Vậy là đã lý giải được kết nối ở McLean. Có người đã quay số gọi đến Mitre, rồi lại từ Mitre gọi ra ngoài. Theo cách này, Mitre phải trả cước cuộc gọi cho cả hai chiều: chiều gọi đến từ Tymnet và chiều gọi đi đường dài.

Thậm chí, Mitre còn tốt bụng hơn nữa khi đóng vai trò là nơi ẩn giấu, một lỗ hổng trên tường không thể bị lần ra.

Mitre, nhà thầu quốc phòng có độ an ninh cao – tôi nghe người ta kháo nhau rằng không ai có thể bước qua sảnh chờ của họ khi chưa trình thẻ căn cước.

Rằng đội bảo vệ của họ được trang bị súng. Rằng các hàng rào của họ đều được làm từ dây thép gai. Ấy vậy mà chỉ cần một chiếc máy tính cá nhân đơn giản và một chiếc điện thoại, ai cũng có thể tha hồ quậy phá cơ sở dữ liệu của họ.

Sáng thứ Hai, tôi gọi cho Bill Chandler ở Mitre để báo tin này. Tôi không hy vọng anh ta sẽ tin tôi, nên cũng không lấy gì làm thất vọng khi nghe anh ta nhấn mạnh từng câu rằng Mitre _được đảm bảo an ninh ở mức cao và nhạy cảm với mọi vấn đề về an ninh._ Tôi đã nghe đến nhàm tai rồi. _Nếu các anh quan tâm đến an ninh như thế, vậy thì tại sao đến giờ vẫn chưa có ai kiểm tra hệ thống máy tính?_

_Có chứ. Chúng tôi ghi lại chi tiết thông tin sử dụng của từng máy,_ Bill nói.

_Nhưng là để dùng cho mục đích kế toán, chứ không nhằm dò tìm hacker._ Tôi chột dạ thắc mắc, không hiểu người ở chỗ anh ta sẽ xử lý ra sao khi gặp một sai sót về kế toán với khoản chênh lệch là 75 xu.

_Anh có biết hệ thống Aerovax không?_

_Có, có chuyện gì à?_

_Tôi hỏi thế thôi. Nó có lưu dữ liệu mật không?_

_Theo tôi biết thì không. Nó dùng cho hệ thống kiểm soát tại sân bay. Sao anh hỏi vậy?_

_À, tôi chỉ thắc mắc thôi. Nhưng anh nên kiểm tra nó đi._ Tôi không thể thú nhận rằng hôm qua tôi đã sục sạo trong hệ thống của anh ta và phát hiện ra con ngựa thành Troy. _Anh có biết hacker xâm nhập vào hệ thống của anh theo đường nào không?_

_Chuyện này là bất khả thi._

_Anh nên kiểm tra các cổng quay số công cộng, thử truy cập vào các máy tính của Mitre qua Tymnet. Bất kì ai cũng có thể kết nối được với hệ thống của anh, từ bất kỳ đâu._

Tin tức mới nhất này đã khiến Bill choàng tỉnh để nhìn ra những vấn đề nghiêm trọng trong hệ thống của mình. Mitre không phải đồ vô dụng. Chỉ là không dùng được mà thôi.

Bill phân vân không biết phải phản ứng ra sao, nhưng anh không thể tiếp tục để hệ thống hớ hênh nữa. Tôi không thể đổ lỗi cho anh. Nhưng các máy tính của anh đúng là đã không được bảo vệ.

Quan trọng nhất, anh muốn tôi giữ mồm giữ miệng. tôi sẽ giữ mồm giữ miệng, tốt thôi, với một điều kiện. Suốt bao nhiêu tháng trời qua, các máy tính của Mitre đã gọi đi khắp nước Mỹ qua hệ thống điện thoại đường dài đắt tiền của AT&T. Chắc chắn phải có hóa đơn điện thoại cho những cuộc gọi này.

Ở Berkeley, năm người chúng tôi cùng ở chung một nhà. Hằng tháng, hễ đến ngày nhận hóa đơn điện thoại, tất cả lại đánh bài lờ, chối đây đẩy rằng mình có bén mảng đến chỗ máy điện thoại đâu. Nhưng cuối cùng, bằng cách nào đó, mọi cuộc gọi đều có lời giải thích, và hóa đơn được thanh toán.

Nếu năm người chúng tôi có thể phân định rạch ròi về một hóa đơn điện thoại, thì hẳn là Mitre cũng có thể làm được chứ. Tôi hỏi Bill Chandler: _Ai trả cước điện thoại cho các máy tính của anh?_

_Tôi không rõ,_ anh trả lời. _Có lẽ là bộ phận kế toán trung tâm. Tôi chưa bao giờ gặp họ._

Lý do khiến gã hacker có thể ung dung hoạt động lâu như vậy là đây. Người thanh toán hóa đơn điện thoại không hề trao đổi với người quản lý máy tính.

Thật lạ lùng. Hay đây là chuyện thường gặp? Các modem máy tính khiến hóa đơn điện thoại đường dài tăng vọt. Công ty điện thoại gửi hóa đơn đến cho Mitre, và một kế toán viên vô danh nào đó đặt bút ký séc thanh toán.

Không có ai theo sát kiểm tra cả. Không ai thắc mắc về hàng chục cuộc gọi đến Berkeley cả.

Bill muốn tôi giữ im lặng về những vấn đề này. Được thôi, nhưng tôi muốn trao đổi. _Bill này, anh có thể gửi tôi bản sao các hóa đơn điện thoại thực hiện qua hệ thống máy tính của anh không?_

_Để làm gì vậy?_

_Để xem gã hacker này còn mò vào những đâu nữa._

Hai tuần sau, tôi nhận được một phong bì dày cộp, bên trong là các hóa đơn điện thoại đường đài từ Chesapeake và Potomac. tôi với các bạn cùng nhà chỉ quen cãi nhau vặt về những hóa đơn điện thoại vẻn vẹn 20 dollar. Tôi chưa thấy hóa đơn nào lên tới hàng nghìn dollar cả.

Vậy mà hằng tháng, Mitre phải thanh toán cước phí của hàng trăm cuộc gọi đường dài trên khắp Bắc Mỹ.

Nhưng đây không phải là những cuộc gọi giữa người với người. Các hóa đơn này cho thấy máy tính của Mitre đã gọi cho hàng trăm máy tính khác.

(Tôi chứng minh điều đó bằng cách gọi thử vài số, và lần nào cũng vậy, chỉ có modem bắt máy với âm thanh cao vút như tiếng huýt sáo.) Nhưng đây mới là chút thông tin hữu ích. Có lẽ Mitre không bận tâm phân tích, nhưng cùng với sổ ghi chép của mình, tôi có thể biết gã hacker đã xâm nhập xa tới đâu. Chỉ cần tìm ra cách tách riêng các cuộc gọi của hắn với các cuộc gọi bình thường là được.

Rất nhiều cuộc gọi rõ ràng là của hacker. Có những cuộc gọi đến Anniston, Alabama. Và có những cuộc gọi đến Tymnet ở Oakland – để lần dấu hết chỗ này, chắc tôi phải tốn cả một gia tài! Nhưng hóa đơn phải có một số cuộc gọi chính đáng chứ. Suy cho cùng, nhân viên của Mitre cũng phải gọi cho các máy tính để chuyển dữ liệu hay sao chép các phần mềm mới nhất từ Bờ Tây chứ. Làm sao để tách riêng các cuộc gọi của gã hacker đây? Ở nhà chúng tôi, khi nhận hóa đơn điện thoại, Martha thường hí húi nấu bữa tối, Claudia làm món salad trộn, còn tôi nướng bánh quy. Sau đó, khi bụng dạ đã no nê, chúng tôi mới ngồi chia hóa đơn điện thoại.

Việc tìm ra ai thực hiện cuộc gọi đường dài nào ghi trên hóa đơn không thành vấn đề đối với chúng tôi. Giả dụ tôi gọi một cuộc đến Buffalo từ 9 giờ 30 phút đến 9 giờ 35 phút, và một cuộc gọi khác đến Baltimore từ 9 giờ 35 phút đến 9 giờ 45 phút, thì rất có khả năng tôi cũng là người thực hiện cuộc gọi đến New York từ 9 giờ 46 phút đến 9 giờ 52 phút.

Nhìn vào hóa đơn điện thoại của Mitre, tôi biết chỉ có gã hacker mới gọi đến căn cứ Lục quân ở Anniston, Alabama. Vậy thì khả năng cao là cuộc gọi thực hiện một phút sau đó cũng là của hắn. Cuộc gọi kết thúc ngay trước cuộc gọi đến Alabama cũng vậy.

Trong vật lý học, đây được gọi là phân tích tương quan. Nếu hôm nay bạn thấy một vết lóa mặt trời và đến tối lại quan sát thấy một cực quang, thì có thể hai hiện tượng này có mối tương quan với nhau. Bạn nhìn vào những sự kiện diễn ra gần nhau về mặt thời gian, và thử tìm xác suất cho mối liên hệ giữa chúng.

Phân tích tương quan trong vật lý học là lối tư duy thường tình.

Nhưng ở đây lại là hóa đơn điện thoại của những sáu tháng. Ngày tháng, giờ giấc, số điện thoại và các thành phố. Có khi tổng cộng lên đến 5.000 số cả thảy chứ chẳng chơi. Không thể phân tích thủ công được. Phải dùng đến máy tính. Phần mềm chuyên tìm kiếm các mối tương quan thì không thiếu, tôi chỉ việc nhập các số điện thoại vào máy và chạy một vài chương trình là xong.

Bạn đã bao giờ gõ 5.000 số điện thoại chưa? Nghe đã thấy muốn bỏ cuộc rồi, huống hồ tôi còn phải làm hai lượt, để đảm bảo không có sai sót gì. Việc này làm tôi mất đứt hai ngày.

Hai ngày nhập dữ liệu, và một giờ phân tích. Tôi đặt lệnh cho chương trình giả định rằng mọi cuộc gọi đến căn cứ Lục quân Anniston đều là của gã hacker, rồi yêu cầu tìm kiếm tất cả những cuộc gọi ngay trước và sau đó.

Một phút sau có kết quả: Gã hacker đã gọi cho Tymnet chi nhánh Oakland rất nhiều lần. Chà, chương trình này cũng khá đấy. tôi hí hoáy với chương trình này suốt buổi chiều, hoàn thiện các kỹ thuật thống kê của nó và quan sát tác động của các thuật toán khác nhau lên kết quả đầu ra. Nó tính xác suất gã hacker gọi đối với từng cuộc gọi. Tuyệt lắm, dùng thứ này để dàn xếp các cuộc tranh cãi trong nhà thì còn gì bằng.

Phải đến tối tôi mới nhận ra thông điệp mà chương trình này muốn nói với tôi: Gã hacker không chỉ xâm nhập vào máy tính của tôi, mà còn tiếp cận hơn 6, thậm chí là hơn 10 máy tính khác nữa.

Từ Mitre, hắn thiết lập những kết nối đường dài đến Norfolk, Oak Ridge, Omaha, San Diego, Pasadena, Livermore và Atlanta.

Có một điều nữa cũng thú vị không kém: hắn thực hiện hàng trăm cuộc gọi kéo dài một phút đến các căn cứ Không quân, bến tàu Hải quân, hãng sản xuất máy bay, và nhà thầu quốc phòng. Bạn gọi đến khu thử nghiệm của quân đội trong một phút để làm gì? Suốt sáu tháng, gã hacker đã xâm nhập vào các căn cứ và hệ thống máy tính của Không quân trên khắp nước. Không ai hay biết gì cả. Một mình hắn tha hồ tung hoành, lặng lẽ, giấu mặt, kiên trì và thành công – nhưng tại sao? Hắn theo đuổi điều gì? Hắn đã biết được những gì? Và hắn định làm gì với những thông tin này?

Đọc [Gián điệp mạng, chương 01](https://nhavantuonglai.com/article/clifford-stoll-gian-diep-mang-chuong-01) tại đây.

Đọc [Gián điệp mạng, chương 02](https://nhavantuonglai.com/article/clifford-stoll-gian-diep-mang-chuong-02) tại đây.

Đọc [Gián điệp mạng, chương 03](https://nhavantuonglai.com/article/clifford-stoll-gian-diep-mang-chuong-03) tại đây.

Đọc [Gián điệp mạng, chương 04](https://nhavantuonglai.com/article/clifford-stoll-gian-diep-mang-chuong-04) tại đây.

Đọc [Gián điệp mạng, chương 05](https://nhavantuonglai.com/article/clifford-stoll-gian-diep-mang-chuong-05) tại đây.

Đọc [Gián điệp mạng, chương 06](https://nhavantuonglai.com/article/clifford-stoll-gian-diep-mang-chuong-06) tại đây.

Đọc [Gián điệp mạng, chương 07](https://nhavantuonglai.com/article/clifford-stoll-gian-diep-mang-chuong-07) tại đây.

Đọc [Gián điệp mạng, chương 09](https://nhavantuonglai.com/article/clifford-stoll-gian-diep-mang-chuong-09) tại đây.

Đọc [Gián điệp mạng, chương 10](https://nhavantuonglai.com/article/clifford-stoll-gian-diep-mang-chuong-10) tại đây.

Đọc [Gián điệp mạng, chương 11](https://nhavantuonglai.com/article/clifford-stoll-gian-diep-mang-chuong-11) tại đây.

Đọc [Gián điệp mạng, chương 12](https://nhavantuonglai.com/article/clifford-stoll-gian-diep-mang-chuong-12) tại đây.

Đọc [Gián điệp mạng, chương 13](https://nhavantuonglai.com/article/clifford-stoll-gian-diep-mang-chuong-13) tại đây.

Đọc [Gián điệp mạng, chương 14](https://nhavantuonglai.com/article/clifford-stoll-gian-diep-mang-chuong-14) tại đây.

Đọc [Gián điệp mạng, chương 15](https://nhavantuonglai.com/article/clifford-stoll-gian-diep-mang-chuong-15) tại đây.

Đọc [Gián điệp mạng, chương 16](https://nhavantuonglai.com/article/clifford-stoll-gian-diep-mang-chuong-16) tại đây.

Đọc [Gián điệp mạng, chương 17](https://nhavantuonglai.com/article/clifford-stoll-gian-diep-mang-chuong-17) tại đây.

Đọc [Gián điệp mạng, chương 18](https://nhavantuonglai.com/article/clifford-stoll-gian-diep-mang-chuong-18) tại đây.

Đọc [Gián điệp mạng, chương 19](https://nhavantuonglai.com/article/clifford-stoll-gian-diep-mang-chuong-19) tại đây.

Đọc [Gián điệp mạng, chương 20](https://nhavantuonglai.com/article/clifford-stoll-gian-diep-mang-chuong-20) tại đây.

Đọc [Gián điệp mạng, chương 21](https://nhavantuonglai.com/article/clifford-stoll-gian-diep-mang-chuong-21) tại đây.

Đọc [Gián điệp mạng, chương 22](https://nhavantuonglai.com/article/clifford-stoll-gian-diep-mang-chuong-22) tại đây.

Đọc [Gián điệp mạng, chương 23](https://nhavantuonglai.com/article/clifford-stoll-gian-diep-mang-chuong-23) tại đây.

Đọc [Gián điệp mạng, chương 24](https://nhavantuonglai.com/article/clifford-stoll-gian-diep-mang-chuong-24) tại đây.

Đọc [Gián điệp mạng, chương 25](https://nhavantuonglai.com/article/clifford-stoll-gian-diep-mang-chuong-25) tại đây.

Đọc [Gián điệp mạng, chương 26](https://nhavantuonglai.com/article/clifford-stoll-gian-diep-mang-chuong-26) tại đây.

Đọc [Gián điệp mạng, chương 27](https://nhavantuonglai.com/article/clifford-stoll-gian-diep-mang-chuong-27) tại đây.

Đọc [Gián điệp mạng, chương 28](https://nhavantuonglai.com/article/clifford-stoll-gian-diep-mang-chuong-28) tại đây.

Đọc [Gián điệp mạng, chương 29](https://nhavantuonglai.com/article/clifford-stoll-gian-diep-mang-chuong-29) tại đây.

Đọc [Gián điệp mạng, chương 30](https://nhavantuonglai.com/article/clifford-stoll-gian-diep-mang-chuong-30) tại đây.

Đọc [Gián điệp mạng, chương 31](https://nhavantuonglai.com/article/clifford-stoll-gian-diep-mang-chuong-31) tại đây.

Đọc [Gián điệp mạng, chương 32](https://nhavantuonglai.com/article/clifford-stoll-gian-diep-mang-chuong-32) tại đây.

Đọc [Gián điệp mạng, chương 33](https://nhavantuonglai.com/article/clifford-stoll-gian-diep-mang-chuong-33) tại đây.

Đọc [Gián điệp mạng, chương 34](https://nhavantuonglai.com/article/clifford-stoll-gian-diep-mang-chuong-34) tại đây.

Đọc [Gián điệp mạng, chương 35](https://nhavantuonglai.com/article/clifford-stoll-gian-diep-mang-chuong-35) tại đây.

Đọc [Gián điệp mạng, chương 36](https://nhavantuonglai.com/article/clifford-stoll-gian-diep-mang-chuong-36) tại đây.

Đọc [Gián điệp mạng, chương 37](https://nhavantuonglai.com/article/clifford-stoll-gian-diep-mang-chuong-37) tại đây.

Đọc [Gián điệp mạng, chương 38](https://nhavantuonglai.com/article/clifford-stoll-gian-diep-mang-chuong-38) tại đây.

Đọc [Gián điệp mạng, chương 39](https://nhavantuonglai.com/article/clifford-stoll-gian-diep-mang-chuong-39) tại đây.

Đọc [Gián điệp mạng, chương 40](https://nhavantuonglai.com/article/clifford-stoll-gian-diep-mang-chuong-40) tại đây.

Đọc [Gián điệp mạng, chương 41](https://nhavantuonglai.com/article/clifford-stoll-gian-diep-mang-chuong-41) tại đây.

Đọc [Gián điệp mạng, chương 42](https://nhavantuonglai.com/article/clifford-stoll-gian-diep-mang-chuong-42) tại đây.

Đọc [Gián điệp mạng, chương 43](https://nhavantuonglai.com/article/clifford-stoll-gian-diep-mang-chuong-43) tại đây.

Đọc [Gián điệp mạng, chương 44](https://nhavantuonglai.com/article/clifford-stoll-gian-diep-mang-chuong-44) tại đây.

Đọc [Gián điệp mạng, chương 45](https://nhavantuonglai.com/article/clifford-stoll-gian-diep-mang-chuong-45) tại đây.

Đọc [Gián điệp mạng, chương 46](https://nhavantuonglai.com/article/clifford-stoll-gian-diep-mang-chuong-46) tại đây.

Đọc [Gián điệp mạng, chương 47](https://nhavantuonglai.com/article/clifford-stoll-gian-diep-mang-chuong-47) tại đây.

Đọc [Gián điệp mạng, chương 48](https://nhavantuonglai.com/article/clifford-stoll-gian-diep-mang-chuong-48) tại đây.

Đọc [Gián điệp mạng, chương 49](https://nhavantuonglai.com/article/clifford-stoll-gian-diep-mang-chuong-49) tại đây.

Đọc [Gián điệp mạng, chương 50](https://nhavantuonglai.com/article/clifford-stoll-gian-diep-mang-chuong-50) tại đây.

Đọc [Gián điệp mạng, chương 51](https://nhavantuonglai.com/article/clifford-stoll-gian-diep-mang-chuong-51) tại đây.

Đọc [Gián điệp mạng, chương 52](https://nhavantuonglai.com/article/clifford-stoll-gian-diep-mang-chuong-52) tại đây.

Đọc [Gián điệp mạng, chương 53](https://nhavantuonglai.com/article/clifford-stoll-gian-diep-mang-chuong-53) tại đây.

Đọc [Gián điệp mạng, chương 54](https://nhavantuonglai.com/article/clifford-stoll-gian-diep-mang-chuong-54) tại đây.

Đọc [Gián điệp mạng, chương 55](https://nhavantuonglai.com/article/clifford-stoll-gian-diep-mang-chuong-55) tại đây.

Đọc [Gián điệp mạng, chương 56](https://nhavantuonglai.com/article/clifford-stoll-gian-diep-mang-chuong-56) tại đây.

Đọc [Gián điệp mạng, chương 57](https://nhavantuonglai.com/article/clifford-stoll-gian-diep-mang-chuong-57) tại đây.

Đọc [Gián điệp mạng, toàn tập](https://data.nhavantuonglai.com/ebook/clifford-stoll-gian-diep-mang.pdf) tại đây.

<figure><img src="https://data.nhavantuonglai.com/image/illustrations/cover-nhavantuonglai-com-0035.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>