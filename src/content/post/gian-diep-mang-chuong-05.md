---
pubDatetime: 2018-09-26T10:10:00Z
title: Gián điệp mạng | Chương 05
description: Gián điệp mạng kể về nhà khoa học chuyển nghề thành chuyên gia mạng, truy tìm hacker tại Phòng Thí nghiệm Lawrence Berkeley, California, Mỹ.
image: https://banmaixanh.vercel.app/image/cover/001-682.jpg
tags:
  - clifford stoll
  - gian diep mang
  - an ninh mang
  - thu vien
  - van hoc
  - van hoc nuoc ngoai
---

Buổi sáng thứ Hai đánh dấu tuần làm việc thứ hai của tôi ở đây. Xung quanh là các chuyên gia bơ phờ vì quá tải công việc, tôi đâm lóng ngóng vì không biết phải làm gì. Nhưng bất cứ chuyện gì cũng có thể xảy ra, nên tốt hơn hết là tôi phải kết thúc dự án hacker này đi đã.

Giống như một nhân viên mới mẫn cán, tôi ghi lại những hoạt động của ngày cuối tuần vào sổ nhật ký. Không phải tôi định dùng sổ nhật ký này, chẳng qua nhờ vậy tôi mới học được một chương trình soạn thảo văn bản trên chiếc máy Macintosh. Nguyên tắc vàng của giới thiên văn học là: Cái gì không được ghi lại thì không xảy ra. tôi chuyển kết quả cho những người này, thầm cầu nguyện rằng đừng ai nhận ra là tôi đã ngủ qua đêm ở phòng máy.

Vừa đến văn phòng, sếp đã cho gọi tôi. tôi đoán già đoán non rằng có lẽ sếp bực mình chuyện tôi tự ý trưng dụng tất cả các thiết bị đầu cuối. Việc quản lý có thể lỏng lẻo, nhưng không ai có thể nhắm mắt cho qua chuyện những kẻ cuồng máy tính đi mượn – khôngxin – phép hàng chồng thiết bị trong phòng thí nghiệm cả.

Nhưng Roy không càu nhàu về chuyện đó mà muốn biết về gã hacker kia.

_Hắn xuất hiện khi nào?_

_Sáng Chủ nhật, lúc 5 giờ, trong 3 tiếng._

_Có xóa tệp tin nào không?_

_Xóa một chương trình mà hắn nghi là đang theo dõi hắn._

_Chúng ta có đang gặp nguy hiểm không?_

_Hắn là siêu người dùng. Hắn có thể xóa tất cả các tệp tin của chúng ta._

_Chúng ta có thể ngăn chặn hắn được không?_

_Có thể. Chúng tôi biết lỗ hổng đó, khắc phục cũng nhanh thôi._

_Anh nghĩ làm thế sẽ ngăn chặn hắn được chứ?_ Tôi có thể cảm nhận được suy nghĩ của ông đang hướng về đâu. Roy không quan tâm đến việc đóng cánh cửa đó. Ông biết có thể nhanh chóng vô hiệu hóa tài khoản Sventek bị đánh cắp. Chúng tôi cũng đã nhận ra lỗ hổng của Gnu – Emacs nên việc xử lý sẽ không quá khó khăn: chỉ cần bổ sung hai dòng mã ra lệnh kiểm tra thư mục mục tiêu là được.

Nhưng nên đóng cửa lại hay cứ để mở? Dĩ nhiên, phản ứng rõ ràng nhất ở đây là đóng lại. Chúng tôi đã biết gã hacker xâm nhập vào hệ thống như thế nào và cũng biết cách đá hắn ra.

Nhưng có trục trặc nào khác nữa không? Liệu vị khách bí ẩn còn để lại cho chúng tôi những món quà nào khác? Hắn đã tiếp cận được bao nhiêu tài khoản? Đã xâm nhập vào những máy tính nào nữa? Còn một mối lo nữa. Cuộn giấy in cho thấy gã hacker là một lập trình viên hệ thống đáng nể, có thể lợi dụng những lỗi tinh vi mà chúng tôi chưa từng thấy trước kia. Liệu hắn còn làm những gì nữa? Trên cương vị siêu người dùng, bạn có thể thay đổi bất cứ tệp tin nào trong hệ thống. Liệu gã hacker này có chỉnh sửa chương trình hệ thống để mở một lối vào cửa hậu hay không? Liệu hắn có can thiệp để hệ thống chấp nhận một mật khẩu ma thuật nào đó không? Hắn có cấy virus vào máy tính không? Trên máy tính gia dụng, virus phát tán bằng cách tự sao chép sang các phần mềm khác. Khi bạn đưa phần mềm nhiễm virus cho người khác, virus sẽ tự sao chép vào phần mềm khác, và cứ thế lan truyền từ đĩa nọ sang đĩa kia.

Nếu virus vô hại, tuy khó phát hiện nhưng có lẽ nó cũng không gây nhiều thiệt hại. Nhưng có thể dễ dàng tạo ra các virus độc hại biết tự nhân bản và xóa hết các tệp tin dữ liệu, hay các virus nằm im lìm hàng tháng trời rồi một ngày nào đó phát tác.

Virus là loài sinh vật ám ảnh lập trình viên trong những cơn ác mộng.

Trên cương vị siêu người dùng, gã hacker có thể gieo rắc virus vào hệ thống ở mức độ việc nhổ chúng tận gốc là bất khả thi. Virus của hắn có thể tự sao chép vào phần mềm hệ thống và ẩn nấp ở những vùng ngóc ngách tinh vi trong máy tính. Bằng cách tự sao chép từ chương trình này qua chương trình khác, chúng sẽ vô hiệu hóa các nỗ lực diệt trừ của chúng tôi.

Khác với các loại máy tính gia dụng có thể xây dựng lại hệ điều hành từ đầu, chúng tôi đã chỉnh sửa hệ điều hành nhiều tới nỗi không thể đi đến gặp nhà sản xuất và yêu cầu: _Hãy đưa cho chúng tôi một phiên bản gốc._

Khi bị nhiễm virus, chúng tôi chỉ có thể xây dựng lại hệ điều hành dựa trên những băng từ dự phòng. Nếu hắn cấy virus vào đây từ sáu tháng trước thì băng dự phòng của chúng tôi khéo cũng bị nhiễm rồi.

Biết đâu hắn đã cấy một quả bom logic – một chương trình hẹn giờ phát nổ vào một thời điểm nào đó trong tương lai. Hoặc cũng có thể kẻ xâm nhập chỉ mới cướp các tệp tin dữ liệu, tiêu diệt một vài chương trình và làm loạn phần mềm thống kê của chúng tôi. Nhưng làm sao để khẳng định rằng hắn chưa làm điều gì tồi tệ hơn? Máy tính của chúng tôi đã mở rộng cửa cho hắn suốt một tuần. Làm thế nào để chứng minh rằng hắn chưa quấy phá cơ sở dữ liệu? Làm thế nào để chúng tôi có thể tin cậy các chương trình và dữ liệu của mình một lần nữa? Chúng tôi không thể. Ngăn chặn hắn cũng vô ích, vì hắn sẽ tìm cách khác để luồn vào. Chúng tôi cần phải tìm hiểu xem hắn đã và đang định làm gì.

Trên hết, chúng tôi phải biết ai ở đầu dây bên kia.

_Chắc lại đám sinh viên ở trường Berkeley,_ tôi nói với Roy. _Chúng là bậc thầy Unix, và chúng vẫn coi chúng ta là những kẻ ngốc._

_Tôi không dám chắc._ Roy ngả người ra sau ghế. _Người ở Berkeley xâm nhập vào đây qua Tymnet làm gì, khi mà chúng có thể dễ dàng kết nối qua đường điện thoại?_

_Biết đâu Tymnet chỉ là lớp vỏ ngụy trang,_ tôi nói. _Một nơi để lẩn trốn. Nếu hắn kết nối trực tiếp với phòng thí nghiệm, chúng ta sẽ truy ra tung tích hắn. Nhưng bây giờ, chúng ta sẽ phải lần dấu theo cả Tymnet và đường dây điện thoại._

Lập luận của tôi không thuyết phục được sếp. Có lẽ xuất phát từ kinh nghiệm làm khoa học hay do tính đa nghi, Roy để ngỏ mọi khả năng: phải thấy người trước rồi mới kết luận. Bản in vào cuối tuần chứng tỏ đây là một lập trình viên giỏi, nhưng hắn có thể ở bất cứ đâu. Để tìm ra hắn, chúng tôi sẽ phải lần theo các đường dây điện thoại. Cái giá của bằng chứng vững chắc là mồ hôi nước mắt.

Trước dấu vết của vị khách bí ẩn, Roy chỉ nhìn thấy những dấu chân. Tôi thì lại thấy một kẻ xâm phạm.

Quyết định của Roy là chưa đưa ra quyết định nào. _Hôm nay hãy đóng tất cả các đường kết nối mạng lại. Sáng mai tôi sẽ gặp giám đốc xem nên làm gì._

Chúng tôi có thể trì hoãn, nhưng sớm muộn gì thì chúng tôi cũng phải hoặc là truy tìm hắn, hoặc là chặn cửa vào của hắn. tôi có muốn rong ruổi khắp thành phố để đuổi theo ai đó không? Tôi sẽ phải bỏ công bỏ việc, không được làm những công việc tính toán liên quan đến khoa học. Nó cũng chẳng liên quan gì đến thiên văn học hay vật lý học.

Nghe giống trò săn bắt cướp hơn – hay trò trốn tìm.

Tuy nhiên, nhìn vào mặt tích cực, có thể tôi sẽ học được dăm ba điều hay ho về dấu vết điện thoại và mạng lưới. Tuyệt nhất là ngồi mường tượng ra nét mặt của nhóc choai choai nào đó khi chúng tôi phá cửa xông vào phòng ký túc xá của hắn và hét lên: _Đứng yên! Bỏ tay ra khỏi bàn phím!_

Chiều thứ Ba, Roy gọi cho tôi. _Giám đốc nói: Đây là khủng bố điện tử. Hãy huy động mọi nguồn lực cần thiết để bắt được tên khốn này. Mất bao lâu cũng được. Dành hẳn ba tuần, nếu phải thế. Hãy tóm bằng được hắn._

Vậy là nếu tôi muốn săn gã hacker này, ban lãnh đạo sẽ hậu thuẫn cho tôi.

Đọc [Gián điệp mạng, chương 01](/article/gian-diep-mang-chuong-01) tại đây.

Đọc [Gián điệp mạng, chương 02](/article/gian-diep-mang-chuong-02) tại đây.

Đọc [Gián điệp mạng, chương 03](/article/gian-diep-mang-chuong-03) tại đây.

Đọc [Gián điệp mạng, chương 04](/article/gian-diep-mang-chuong-04) tại đây.

Đọc [Gián điệp mạng, chương 05](/article/gian-diep-mang-chuong-05) tại đây.

Đọc [Gián điệp mạng, chương 06](/article/gian-diep-mang-chuong-06) tại đây.

Đọc [Gián điệp mạng, chương 07](/article/gian-diep-mang-chuong-07) tại đây.

Đọc [Gián điệp mạng, chương 09](/article/gian-diep-mang-chuong-09) tại đây.

Đọc [Gián điệp mạng, chương 10](/article/gian-diep-mang-chuong-10) tại đây.

Đọc [Gián điệp mạng, chương 11](/article/gian-diep-mang-chuong-11) tại đây.

Đọc [Gián điệp mạng, chương 12](/article/gian-diep-mang-chuong-12) tại đây.

Đọc [Gián điệp mạng, chương 13](/article/gian-diep-mang-chuong-13) tại đây.

Đọc [Gián điệp mạng, chương 14](/article/gian-diep-mang-chuong-14) tại đây.

Đọc [Gián điệp mạng, chương 15](/article/gian-diep-mang-chuong-15) tại đây.

Đọc [Gián điệp mạng, chương 16](/article/gian-diep-mang-chuong-16) tại đây.

Đọc [Gián điệp mạng, chương 17](/article/gian-diep-mang-chuong-17) tại đây.

Đọc [Gián điệp mạng, chương 18](/article/gian-diep-mang-chuong-18) tại đây.

Đọc [Gián điệp mạng, chương 19](/article/gian-diep-mang-chuong-19) tại đây.

Đọc [Gián điệp mạng, chương 20](/article/gian-diep-mang-chuong-20) tại đây.

Đọc [Gián điệp mạng, chương 21](/article/gian-diep-mang-chuong-21) tại đây.

Đọc [Gián điệp mạng, chương 22](/article/gian-diep-mang-chuong-22) tại đây.

Đọc [Gián điệp mạng, chương 23](/article/gian-diep-mang-chuong-23) tại đây.

Đọc [Gián điệp mạng, chương 24](/article/gian-diep-mang-chuong-24) tại đây.

Đọc [Gián điệp mạng, chương 25](/article/gian-diep-mang-chuong-25) tại đây.

Đọc [Gián điệp mạng, chương 26](/article/gian-diep-mang-chuong-26) tại đây.

Đọc [Gián điệp mạng, chương 27](/article/gian-diep-mang-chuong-27) tại đây.

Đọc [Gián điệp mạng, chương 28](/article/gian-diep-mang-chuong-28) tại đây.

Đọc [Gián điệp mạng, chương 29](/article/gian-diep-mang-chuong-29) tại đây.

Đọc [Gián điệp mạng, chương 30](/article/gian-diep-mang-chuong-30) tại đây.

Đọc [Gián điệp mạng, chương 31](/article/gian-diep-mang-chuong-31) tại đây.

Đọc [Gián điệp mạng, chương 32](/article/gian-diep-mang-chuong-32) tại đây.

Đọc [Gián điệp mạng, chương 33](/article/gian-diep-mang-chuong-33) tại đây.

Đọc [Gián điệp mạng, chương 34](/article/gian-diep-mang-chuong-34) tại đây.

Đọc [Gián điệp mạng, chương 35](/article/gian-diep-mang-chuong-35) tại đây.

Đọc [Gián điệp mạng, chương 36](/article/gian-diep-mang-chuong-36) tại đây.

Đọc [Gián điệp mạng, chương 37](/article/gian-diep-mang-chuong-37) tại đây.

Đọc [Gián điệp mạng, chương 38](/article/gian-diep-mang-chuong-38) tại đây.

Đọc [Gián điệp mạng, chương 39](/article/gian-diep-mang-chuong-39) tại đây.

Đọc [Gián điệp mạng, chương 40](/article/gian-diep-mang-chuong-40) tại đây.

Đọc [Gián điệp mạng, chương 41](/article/gian-diep-mang-chuong-41) tại đây.

Đọc [Gián điệp mạng, chương 42](/article/gian-diep-mang-chuong-42) tại đây.

Đọc [Gián điệp mạng, chương 43](/article/gian-diep-mang-chuong-43) tại đây.

Đọc [Gián điệp mạng, chương 44](/article/gian-diep-mang-chuong-44) tại đây.

Đọc [Gián điệp mạng, chương 45](/article/gian-diep-mang-chuong-45) tại đây.

Đọc [Gián điệp mạng, chương 46](/article/gian-diep-mang-chuong-46) tại đây.

Đọc [Gián điệp mạng, chương 47](/article/gian-diep-mang-chuong-47) tại đây.

Đọc [Gián điệp mạng, chương 48](/article/gian-diep-mang-chuong-48) tại đây.

Đọc [Gián điệp mạng, chương 49](/article/gian-diep-mang-chuong-49) tại đây.

Đọc [Gián điệp mạng, chương 50](/article/gian-diep-mang-chuong-50) tại đây.

Đọc [Gián điệp mạng, chương 51](/article/gian-diep-mang-chuong-51) tại đây.

Đọc [Gián điệp mạng, chương 52](/article/gian-diep-mang-chuong-52) tại đây.

Đọc [Gián điệp mạng, chương 53](/article/gian-diep-mang-chuong-53) tại đây.

Đọc [Gián điệp mạng, chương 54](/article/gian-diep-mang-chuong-54) tại đây.

Đọc [Gián điệp mạng, chương 55](/article/gian-diep-mang-chuong-55) tại đây.

Đọc [Gián điệp mạng, chương 56](/article/gian-diep-mang-chuong-56) tại đây.

Đọc [Gián điệp mạng, chương 57](/article/gian-diep-mang-chuong-57) tại đây.

Đọc [Gián điệp mạng, toàn tập](https://banmaixanh.vercel.app/ebook/gian-diep-mang.pdf) tại đây.

<figure><img src="https://banmaixanh.vercel.app/image/cover/001-315.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>