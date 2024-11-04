---
pubDatetime: 2018-11-02T10:10:00Z
title: Clifford Stoll | Gián điệp mạng (Chương 02)
description: Gián điệp mạng là câu chuyện người thật việc thật kể về cuộc săn đuổi hacker bất đắc dĩ của nhà khoa học chuyển tay ngang trở thành chuyên gia mạng máy tính ở Phòng Thí nghiệm Lawrence Berkeley, California, Mỹ.
featured: false
image: https://nhavantuonglai.com/image/cover/001-202.jpg
tags:
  - clifford stoll
  - gian diep mang
  - an ninh mang
  - thu vien
  - van hoc
  - van hoc nuoc ngoai
---

Chiều hôm đó, tôi ngồi chịu trận trong một buổi học không thể nhàm chán hơn về cấu trúc các thiên hà. Vị giáo sư uyên bác độc thoại với giọng đều đều và giăng kín bảng những phương trình toán học dài ngoằng.

Để đỡ buồn ngủ, tôi quay sang nghĩ vẩn vơ về những vấn đề mình mới gặp gần đây. Ai đó đã gây ra sự cố khi thêm vào một tài khoản mới. Một tuần sau, Sventek truy cập và tìm cách xâm nhập vào một máy tính nào đó ở Maryland. Bản ghi kế toán của sự kiện này có vẻ lộn xộn. Sventek hiện đang không ở đây. Có điều gì đó không đúng. Như thể ai đó đang cố tình tránh né chương trình kế toán. tôi thắc mắc: Cần phải làm gì để có thể sử dụng miễn phí các máy tính của chúng tôi? Phải chăng có người đã tìm được cách tránh hệ thống kế toán của chúng tôi? Máy tính lớn có hai loại phần mềm: phần mềm người dùng và phần mềm hệ thống. Những chương trình do bạn tự viết hay tự cài đặt chính là phần mềm người dùng – chẳng hạn, các đoạn chương trình về thiên văn học của tôi dùng để phân tích bầu khí quyển của các hành tinh.

Bản thân chương trình người dùng không mấy hữu ích. Chúng không giao tiếp trực tiếp với máy tính mà ra lệnh để hệ điều hành điều khiển máy tính.

Khi chương trình thiên văn học của tôi muốn viết gì đó, nó không chỉ ném chữ lên màn hình máy tính là xong. Thay vào đó, nó chuyển chữ này cho hệ điều hành, sau đó hệ điều hành sẽ ra lệnh để phần cứng viết ra từ này.

Hệ điều hành, cùng với các công cụ chỉnh sửa, thư viện phần mềm và các trình thông dịch ngôn ngữ tạo thành phần mềm hệ thống. Bạn không tự viết ra những chương trình này – chúng đi kèm với máy tính. Sau khi tất cả đã được cài đặt, không ai có thể can thiệp vào.

Chương trình kế toán là phần mềm hệ thống. Để chỉnh sửa hoặc né tránh nó, bạn phải là quản lý hệ thống, hoặc bằng cách nào đó có được một vị trí đặc quyền trong hệ điều hành.

Làm sao để có được vị trí đặc quyền? Cách hiển nhiên nhất là đăng nhập vào máy tính bằng mật khẩu của quản lý hệ thống. Chúng tôi chưa đổi mật khẩu suốt nhiều tháng qua, nhưng có lẽ không ai tiết lộ nó ra ngoài làm gì. Và người ngoài hẳn sẽ không đời nào đoán nổi mật khẩu ở đây lại là `wyvern1` – khi đoán mật khẩu của chúng tôi, có bao nhiêu người nghĩ đến hình ảnh một con rồng có cánh trong thần thoại chứ?

Nhưng cho dù là quản lý hệ thống, chưa chắc bạn đã muốn táy máy vào phần mềm kế toán. Nó quá rắc rối và không được lập hồ sơ đầy đủ. Dù vậy, tôi đã thấy nó hoạt động tốt.

Khoan đã – phần mềm tự chế của chúng tôi hoạt động tốt, nhưng ai đó đã thêm vào một tài khoản mới mà không dùng đến nó. Vậy có lẽ họ không biết chăng. Người ngoài mới đến thường không nhận thức được những điểm bất cập nội bộ của chúng tôi. Nhưng các quản lý và người vận hành hệ thống đều biết. Joe Sventek, dù lúc này đã ở Anh, chắc chắn là biết.

Nhưng nếu đó là một người từ bên ngoài thì sao – một hacker? Bản thân từ hacker mang hai nét nghĩa khác hẳn nhau. Những người tự xưng là hacker mà tôi biết là các chuyên gia phần mềm, có tài lập trình sáng tạo để giải quyết các khó khăn gặp phải. Họ hiểu tường tận về hệ điều hành. Họ không phải là những kỹ sư phần mềm uể oải lờ đờ, chỉ làm việc 40 giờ/ tuần, mà là những lập trình viên sáng tạo, không rời máy tính cho đến khi cảm thấy mãn nguyện. Một hacker gắn bó với máy tính và hiểu nó như hiểu một người bạn.

Các nhà thiên văn học nhìn tôi như vậy đấy. _Cliff sao, anh ta không giống dân thiên văn học lắm, nhưng là một tay hacker cừ đấy!_

(Dĩ nhiên, giới chuyên gia máy tính lại có cái nhìn khác: _Cliff không phải lập trình viên, nhưng quả là một tay thiên văn học đại tài!_ May mắn thay, thời gian đào tạo sau đại học đã dạy tôi cách đánh lừa cả hai phía.)

Nhưng theo lối nói thông thường, hacker là kẻ xâm nhập trái phép vào các máy tính. Năm 1982, sau khi một nhóm sinh viên dùng các thiết bị đầu cuối, modem và dây điện thoại đường dài để xâm nhập vào Los Alamos và Trung tâm Y tế Columbia, thì cộng đồng máy tính mới chợt nhận ra lỗ hổng của các hệ thống kết nối mạng.

Liệu bộ phim War Games (Trò chơi chiến tranh) có thể xảy ra trong đời thực không – một hacker trẻ nào đó xâm nhập vào một máy tính của Lầu Năm Góc và gây ra chiến tranh không? tôi nghi ngờ điều đó. Dĩ nhiên, việc mò mẫm vào các máy tính ở trường đại học không khó, vì hệ thống này không cần đến an ninh. Thực ra, đến cửa vào các tòa nhà ở đó còn hiếm khi được khóa cẩn thận. Theo hình dung của tôi, máy tính quân sự là một câu chuyện hoàn toàn khác – hẳn là chúng sẽ được bảo vệ chặt chẽ như các căn cứ quân sự vậy. Mà dù bạn có thể xâm nhập được vào hệ thống đó đi nữa, thật nực cười khi nghĩ rằng bạn có thể gây ra một cuộc chiến. Tôi thầm nghĩ, máy tính không thể kiểm soát những điều đó.

Các máy tính ở LBL không được bảo vệ một cách quá đặc biệt, nhưng chúng tôi được yêu cầu phải làm sao để ngăn kẻ lạ xâm nhập và sử dụng chúng trái phép. Chúng tôi không lo máy tính bị phá hoại mà chỉ muốn cơ quan tài trợ là Bộ Năng Lượng đừng làm phiền. Nếu họ muốn sơn máy tính màu xanh, thì chúng tôi sẽ đặt mua chổi quét.

Nhưng để phục vụ các nhà khoa học tới thăm, chúng tôi cũng lập ra một số tài khoản máy tính dành cho khách. Với tên tài khoản là _guest_ (khách) và mật khẩu cũng là `guest`, bất cứ ai cũng có thể sử dụng hệ thống này, với điều kiện thời gian dùng máy tính của họ không quá một vài dollar. Hacker có thể dễ dàng xâm nhập vào tài khoản này vì nó không được bảo mật. Khó có thể coi đây là một vụ xâm nhập, vì thời gian đăng nhập chỉ giới hạn trong vòng 1 phút. Nhưng từ tài khoản này, bạn có thể quan sát hệ thống, đọc bất cứ tệp tin công khai nào, và biết những ai đang đăng nhập. Nhưng chúng tôi cho rằng có thể chấp nhận rủi ro an ninh nhỏ xíu này để đổi lấy sự tiện lợi.

Ngẫm nghĩ về tình huống này, tôi không khỏi hoài nghi rằng hacker nào đó đã táy máy nghịch ngợm hệ thống của tôi. Ai quan tâm tới lĩnh vực vật lý hạt làm gì chứ! Chà, thực ra giới khoa học có lẽ sẽ phấn khởi lắm nếu có người chịu đọc các công trình của họ. Ở đây không có gì đặc biệt thu hút các hacker cả – không có siêu máy tính thời thượng, không có những bí mật thương mại hấp dẫn, không có dữ liệu tuyệt mật. Cái được nhất khi làm việc ở LBL là bầu không khí hàn lâm và cởi mở.

Cách đó 80 kilometer, Phòng Thí nghiệm Lawrence Livermore quả thực có tiến hành công việc bí mật là phát triển bom hạt nhân và những dự án kiểu Star Wars. Đó mới là mục tiêu tấn công khả dĩ của hacker. Nhưng không thể tiếp cận các máy tính của Livermore được, vì chúng không kết nối với bên ngoài. Dữ liệu mật của họ được bảo vệ bằng một phương thức cực đoan: cô lập.

Nếu có người xâm nhập vào hệ thống của chúng tôi, thì họ sẽ được điều gì? Họ có thể đọc mọi tệp tin ở chế độ công khai. Đa phần các nhà khoa học đều chọn cơ chế hiển thị này để các cộng sự cùng đọc. Một số phần mềm hệ thống cũng được đặt ở chế độ công khai.

Tuy chúng tôi gọi là công khai, song người ngoài không thể tiếp cận được.

Trong số đó có những dữ liệu độc quyền hoặc đã đăng kí bản quyền, chẳng hạn các thư viện phần mềm và chương trình soạn thảo văn bản. Một số cơ sở dữ liệu khác không phù hợp với tất cả mọi người – như danh sách địa chỉ nhân viên hay báo cáo tiến độ công việc. Nhưng khó có để coi đây là những tài liệu nhạy cảm và càng không thể gọi là tuyệt mật.

Không, tôi không lo chuyện có người xâm nhập vào hệ thống máy tính của chúng tôi bằng tài khoản khách rồi lấy trộm số điện thoại của ai đó. Vấn đề khiến tôi bận tâm còn lớn hơn thế nhiều: Liệu một người lạ có thể trở thành siêu người dùng không?

Để đáp ứng nhu cầu của 100 người dùng cùng lúc, hệ điều hành máy tính phải phân chia tài nguyên phần cứng hệt như cách người ta chia một tòa chung cư thành nhiều căn hộ độc lập. Trong khi người ở căn hộ này xem tivi, thì người ở căn hộ khác nói chuyện qua điện thoại, người khác nữa lại rửa bát. Các dịch vụ tiện ích – điện, nước, điện thoại – do quản lý tòa nhà cung cấp. Mọi cư dân đều phàn nàn về dịch vụ chậm chạp và mức giá thuê nhà cắt cổ.

Trong hệ thống máy tính, một người dùng có thể ngồi giải toán trong khi người khác gửi email đến Toronto, và người nữa thì viết thư. Các tiện ích trong máy tính do phần mềm hệ thống và hệ điều hành cung cấp; người dùng nào cũng càu nhàu về phần mềm không đáng tin cậy, tài liệu rắc rối và phí sử dụng trên trời.

Sự riêng tư ở khu chung cư được kiểm soát bằng ổ khóa và chìa khóa. Một cư dân không thể bước vào căn hộ của cư dân khác mà không có chìa khóa, và hoạt động của các cư dân sẽ không ảnh hưởng đến nhau (nếu các bức tường đủ kiên cố). Với máy tính, hệ điều hành sẽ đảm bảo quyền riêng tư của người dùng. Bạn không thể tiếp cận lãnh địa của người khác mà không có mật khẩu đúng, và các chương trình do người dùng sử dụng sẽ không can thiệp lẫn nhau (nếu hệ điều hành phân bổ tài nguyên một cách công bằng).

Nhưng trên thực tế, các bức tường chung cư chưa bao giờ đủ kiên cố, nên hễ khi nào hàng xóm tổ chức tiệc tùng, phòng ngủ nhà tôi lại rung lên từng chập. Và máy tính của tôi thường chạy chậm lại khi có quá 100 người cùng sử dụng một lúc. Vì thế, tòa chung cư mới cần đến ban quản lý còn máy tính mới cần các quản lý hệ thống, hay siêu người dùng.

Với chìa khóa chủ, người quản lý chung cư có thể vào bất kỳ căn hộ nào. Từ tài khoản đặc quyền, quản lí hệ thống có thể đọc hay điều chỉnh bất kỳ chương trình hoặc dữ liệu nào trên máy tính. Người dùng đặc quyền có thể vượt qua các lớp bảo vệ của hệ điều hành và toàn quyền sử dụng máy tính.

Họ cần quyền lực này để duy trì phần mềm hệ thống (_Sửa chương trình chỉnh sửa này đi!_), điều chỉnh hoạt động của hệ điều hành (_Hôm nay máy chạy chậm quá!_) và cho phép người khác sử dụng máy tính (_Này, tạo cho Barbara một tài khoản nhé._) Người dùng đặc quyền sẽ phải hành động thật thận trọng. Nếu chỉ có đặc quyền đọc tệp tin, họ sẽ không thể gây ra quá nhiều thiệt hại. Nhưng với tấm kim bài của siêu người dùng, bạn có thể thay đổi bất kỳ phần nào trong hệ thống – không có cơ chế bảo vệ nào trước những sai lầm của siêu người dùng cả.

Đúng vậy đấy, siêu người dùng là đấng toàn năng, có thể tha hồ tung hoành ngang dọc. Đến thời điểm đổi giờ, anh ta cài đặt lại đồng hồ của hệ thống.

Một đĩa lưu trữ mới ư? Anh ta là người duy nhất có thể tích hợp phần mềm cần thiết vào hệ thống. Các hệ điều hành khác nhau gọi tài khoản đặc quyền bằng nhiều tên khác nhau – siêu người dùng, gốc, quản lý hệ thống – và những tài khoản này phải luôn được bảo vệ rất chặt chẽ để kẻ lạ không thể xâm nhập.

Điều gì sẽ xảy ra nếu một hacker bên ngoài trở thành người dùng đặc quyền trên hệ thống của chúng tôi? Chắc chắn là hắn ta có thể tạo thêm tài khoản người dùng mới.

Một hacker có những đặc quyền của siêu người dùng sẽ giữ máy tính làm con tin. Với chìa khóa chủ trong tay, hắn có thể tùy ý đánh sập hệ thống hay khiến hệ thống hoạt động chập chờn. Hắn có thể đọc, viết hay thay đổi bất kì thông tin nào trên máy tính. Từ vị thế đặc quyền này, hắn có thể tiếp cận mọi tệp tin của người dùng. Các tệp tin hệ thống cũng sẽ do hắn tùy nghi xử lý – hắn có thể đọc email trước khi nó được gửi đi.

Thậm chí, hắn còn có thể điều chỉnh các tệp tin kế toán để xóa dấu vết của mình.

Vị giáo sư vẫn tiếp tục nói về sóng hấp dẫn với giọng đều đều. Tôi bừng tỉnh khỏi dòng suy nghĩ miên man khi chợt nhận thức được điều gì đang diễn ra trong máy tính của chúng tôi. Tôi cố chờ đến phần hỏi đáp, đặt một câu hỏi chiếu lệ, rồi hấp tấp chạy ra ngoài, lấy xe đạp và phóng thẳng lên đồi, tới Phòng Thí nghiệm Lawrence Berkeley.

Một hacker siêu người dùng. Có kẻ đã xâm nhập vào hệ thống của chúng tôi, tìm chìa khóa chủ, tự cho mình các đặc quyền và trở thành một hacker siêu người dùng. Ai? Bằng cách nào? Ở đâu? Và quan trọng nhất, tại sao?

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

Đọc [Gián điệp mạng, toàn tập](https://nhavantuonglai.com/ebook/clifford-stoll-gian-diep-mang.pdf) tại đây.

<figure><img src="https://nhavantuonglai.com/image/cover/001-212.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>