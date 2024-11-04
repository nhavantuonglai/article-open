---
pubDatetime: 2018-11-04T10:10:00Z
title: Clifford Stoll | Gián điệp mạng (Chương 04)
description: Gián điệp mạng là câu chuyện người thật việc thật kể về cuộc săn đuổi hacker bất đắc dĩ của nhà khoa học chuyển tay ngang trở thành chuyên gia mạng máy tính ở Phòng Thí nghiệm Lawrence Berkeley, California, Mỹ.
featured: false
image: https://nhavantuonglai.com/image/cover/001-204.jpg
tags:
  - clifford stoll
  - gian diep mang
  - an ninh mang
  - thu vien
  - van hoc
  - van hoc nuoc ngoai
---

Vậy là suốt ba giờ, một hacker đã ung dung dạo quanh hệ thống của chúng tôi, tùy nghi đọc mọi dữ liệu. Hắn không hay biết rằng chiếc máy Decwriter 1.200 baud của tôi đã ghi lại phiên truy cập của hắn trên một cuộn giấy in dài 24m. Từng dòng lệnh hắn đưa ra, từng lỗi đánh máy và từng phản hồi từ máy tính – tất cả đều được ghi lại.

Máy in theo dõi đường dây từ Tymnet. Tôi không nhận ra điều này, nhưng một số đường dây 1.200 baud của chúng tôi không phải là đường dây modem quay số mà đến từ Tymnet, một hãng viễn thông liên kết các máy tính trên thế giới.

Trước khi bị chia tách, Hệ thống Bell nắm độc quyền trong ngành viễn thông. AT&T là cách duy nhất để kết nối New York với Chicago. Bằng cách sử dụng modem, hệ thống điện thoại có thể xử lý dữ liệu, nhưng tạp âm và chi phí dịch vụ đường dài khiến giải pháp này không phù hợp với máy tính. Cuối thập niên 1970, một số công ty khác bắt đầu rụt rè tiến vào lĩnh vực còn mới mẻ này và cung cấp những dịch vụ chuyên biệt như điện thoại dữ liệu. Tymnet đã xây dựng một mạng lưới để kết nối máy tính ở các thành phố lớn.

Ý tưởng của Tymnet đơn giản nhưng khéo léo: Tạo ra một trục viễn thông số, cho phép tất cả mọi người kết nối vào trục này bằng cách thực hiện một cuộc gọi điện thoại cục bộ, sau đó gửi dữ liệu đến bất kỳ máy tính nào trong mạng lưới. Tymnet sẽ nén dữ liệu của vài chục người dùng thành một số gói dữ liệu, và gửi chúng đi khắp nước Mỹ với chi phí rất thấp. Hệ thống này miễn nhiễm với tạp âm, và người dùng lại có thể có được tốc độ nhanh tùy ý. Khách hàng tiết kiệm được chi phí vì có thể thực hiện một cuộc điện thoại cục bộ để truy cập vào một máy tính ở xa.

Để phục vụ giới khoa học cả nước, LBL đặt thuê dịch vụ của Tymnet. Một nhà nghiên cứu ở Stonybrook, New York muốn kết nối với máy tính của chúng tôi sẽ gọi vào số Tymnet cục bộ. Sau khi modem của anh ta kết nối với Tymnet, nhà nghiên cứu chỉ cần yêu cầu tiếp cận LBL là có thể làm việc như thể đang ở Berkeley. Giới vật lý học ở xa rất chuộng dịch vụ này, và chúng tôi cũng vui mừng khi thấy họ chi ngân sách nghiên cứu để thuê máy tính của chúng tôi thay vì sử dụng máy tính của họ.

Có người đã xâm nhập vào đây qua đường dây của Tymnet. Vì Tymnet kết nối máy tính trên cả nước, nên hacker của chúng tôi có thể ở bất cứ đâu.

Tuy nhiên, khi đó tôi không hề tò mò về vị trí của hacker mà băn khoăn không biết hắn đã làm gì trong suốt ba giờ đồng hồ đó. Dự đoán của tôi đã đúng: Tài khoản của Sventek đang được sử dụng để xâm nhập vào hệ thống Unix của chúng tôi.

Không đơn thuần là xâm nhập. Gã hacker này còn là siêu người dùng.

Hắn đã lẻn qua lỗ hổng trong hệ thống để trở thành một siêu người dùng – thậm chí hắn còn không cần đăng nhập vào tài khoản của quản lý hệ thống.

Hành tung của hắn giống như loài tu hú vậy.

Chim tu hú, một loài ký sinh nuôi dưỡng, đẻ nhờ trứng vào tổ của các loài chim khác để _nhờ_ nuôi con hộ. Mạng sống của tu hú con phụ thuộc vào sự hớ hênh, lơ đãng của những ông bố bà mẹ hờ này.

Vị khách bí ẩn đã _đẻ_ một chương trình vào máy tính của chúng tôi, để hệ thống ấp nở và nuôi nó lớn bằng thức ăn là những đặc quyền.

Sáng hôm đó, gã hacker đã viết một chương trình ngắn để cướp lấy đặc quyền. Thông thường, Unix sẽ không cho phép những chương trình như vậy hoạt động, vì nó không trao đặc quyền vượt quá giới hạn những quyền đã trao cho người dùng thông thường. Nhưng nếu chạy chương trình từ tài khoản siêu người dùng, hắn sẽ nắm đặc quyền trong tay. Công việc của hắn lúc này chỉ là hóa trang cho chương trình – hay trứng tu hú – để hệ thống ấp nở và nuôi lớn.

Cứ cách 5 phút, hệ thống Unix lại thực thi một chương trình riêng tên là atrun để sắp xếp lịch trình cho các tác vụ và thực hiện phận sự dọn dẹp định kỳ. Atrun vận hành ở chế độ đặc quyền, toàn bộ quyền năng và sự tín nhiệm của hệ điều hành là hậu thuẫn của nó. Nếu một chương trình atrun giả mạo thế chân, nó sẽ được thực thi trong vòng 5 phút với toàn bộ đặc quyền của hệ thống. Vì lý do đó, atrun nằm trong vùng hệ thống được bảo vệ và chỉ quản lý hệ thống mới tiếp cận được nó. Chỉ quản lý hệ thống mới có quyền can thiệp vào atrun.

Tổ tu hú nằm ở đây: Trong 5 phút, hắn sẽ đánh tráo trứng của mình với chương trình atrun của hệ thống.

Để chuẩn bị cho cuộc tấn công này, hắn phải tìm cách đưa được chương trình của mình vào cái tổ hệ thống đã được bảo vệ kỹ càng. Các hàng rào bảo vệ hệ điều hành được xây dựng chỉ để ngăn chặn âm mưu này. Các chương trình sao chép thông thường không thể vượt qua chúng; bạn không để ra lệnh: _Hãy sao chép chương trình của tôi vào vùng dữ liệu hệ thống._ Nhưng có một yếu tố bất ngờ mà chúng tôi chưa từng để ý đến. Richard Stallman, một lập trình viên tự do, luôn ủng hộ việc chia sẻ miễn phí thông tin. Các phần mềm của anh đều được phân phát rộng rãi – và tất cả đều là những chương trình tuyệt vời, được viết ra với kỹ năng của một bậc thầy.

Trong thập niên qua, Stallman đã thiết kế một chương trình biên tập rất hiệu quả gọi là Gnu – Emacs. Nhưng Gnu không chỉ là một chương trình biên tập văn bản đơn thuần. Bạn có thể dễ dàng tùy chỉnh nó theo ý muốn. Đó là nền tảng để xây dựng những chương trình khác. Nó thậm chí còn được tích hợp chức năng email riêng. Như một lẽ tự nhiên, các nhà vật lý học yêu cầu phải có Gnu; và vì muốn bán cho họ thêm nhiều chu kỳ điện toán nữa, chúng tôi sẵn lòng cài đặt chương trình này.

Tất cả đều ổn, ngoại trừ một vấn đề duy nhất: Có một lỗi trong phần mềm này.

Cơ chế cài đặt Gnu – Emacs vào máy tính Unix cho phép người dùng chuyển tiếp một tệp tin email từ thư mục của họ cho người khác theo cách rất kỳ quặc. Nó không kiểm tra xem người nhận là ai, hay liệu họ có muốn nhận không. Nó chỉ đặt lại tên tệp tin và thay đổi nhãn chủ sở hữu. Có nghĩa là người gửi đã bàn giao quyền sở hữu tệp tin này sang người nhận.

Bản thân việc gửi tệp tin từ vùng của bạn sang vùng của tôi không có vấn đề gì. Nhưng bạn không được phép chuyển tệp tin vào vùng hệ thống được bảo vệ, vì chỉ quản lý hệ thống mới được xuất hiện ở đây. Phần mềm của Stallman lẽ ra phải bảo đảm sao cho chuyện này không xảy ra.

Nhưng Gnu không kiểm tra. Nó cho phép bất cứ ai cũng có thể di chuyển tệp tin vào vùng hệ thống được bảo vệ. Gã hacker biết điều này; chúng tôi thì không.

Hắn dùng Gnu để đánh tráo tệp tin atrun giả mạo với phiên bản altrun chuẩn của hệ thống. 5 phút sau, hệ thống đã ấp xong quả trứng mà hắn gửi nhờ, và thế là hắn lấy được chìa khóa mở cổng vào máy tính của tôi.

Nhờ mánh khóe này, hắn đã lừa được máy tính trao quyền cho mình. Hắn cài chương trình giả mạo vào nơi mà hệ thống đinh ninh rằng nó sẽ tìm thấy một chương trình hợp lệ. Ngay khi Unix thực thi chương trình atrun giả này, gã hacker sẽ trở thành siêu người dùng. Toàn bộ kế hoạch phụ thuộc vào việc hắn có thể tùy nghi di chuyển tệp tin tới bất cứ nơi nào trong hệ thống.

Gnu chính là lỗ hổng an ninh trong hệ thống của chúng tôi. Một lỗi tinh vi trong ngóc ngách xó xỉnh của một phần mềm phổ biến. Nhờ các lập trình viên hệ thống của chúng tôi vô tư cài đặt mà không kiểm tra kỹ, có ai ngờ rằng lại có ngày nó phá hủy toàn bộ hàng rào an ninh của hệ thống như thế này.

Vậy là tôi hiểu rồi. Anh bạn này đã đăng nhập bằng tài khoản khách, rồi tận dụng lỗ hổng của Gnu để chiếm lấy các đặc quyền, sau đó bổ sung một tài khoản mới vào các tệp tin của máy tính.

Trước mắt tôi lúc này, mọi thứ hiện ra thật rõ ràng: vài mét đầu tiên của cuộn giấy in diễn cảnh con chim tu hú chuẩn bị tổ, đẻ trứng vào và ngồi chờ trứng nở. Và hơn 20m giấy tiếp theo là cảnh tu hú non tập vỗ cánh.

Với vị thế siêu người dùng, hắn được toàn quyền sử dụng hệ thống của chúng tôi. Việc đầu tiên hắn làm là xóa dấu vết: chuyển phiên bản atrun chuẩn trở về vị trí cũ. Sau đó, hắn lập danh sách email của tất cả người dùng, đọc tin tức, các câu chuyện phiếm và những bức thư tình. Hắn nắm rõ mọi thay đổi về máy tính, các đề xuất xin trợ cấp và nhân viên mới tuyển dụng trong tháng qua. Hắn tìm kiếm những thay đổi trong tệp tin của quản lý hệ thống, và phát hiện ra rằng tôi chỉ vừa mới tới làm việc ở đây. Hắn kiểm tra mức lương và sơ yếu lí lịch của tôi. Đáng sợ hơn, hắn nhận ra tôi là một quản lý hệ thống, và biết tên tài khoản của tôi.

Tại sao lại là tôi? Tôi đã làm gì chứ? Nhưng dù gì, từ bây giờ trở đi, tốt nhất tôi nên dùng tên khác.

Cứ cách 10 phút, gã hacker lại gõ lệnh _who_ để liệt kê danh sách những người đang đăng nhập vào máy tính. Rõ ràng, hắn lo mình bị theo dõi hay nhỡ có người tình cờ thấy hắn kết nối. Sau đó, hắn tìm kiếm xem hệ điều hành có gì thay đổi không – nếu tôi thay đổi các chương trình daemon để ghi lại phiên đăng nhập của hắn như ý định ban đầu, chắc chắn hắn sẽ phát hiện ra ngay. Tôi chợt cảm thấy mình như một đứa trẻ đang chơi trò trốn tìm, khi người đi tìm đi qua, chỉ cách nơi mình đang trốn vài xăng – timét.

Trong giờ đầu tiên, hắn viết một chương trình quét nội dung email của tất cả mọi người, xem có ai nhắc đến hành tung của hắn không. Từ khóa tìm kiếm của hắn là _hacker_ và _an ninh._

Dịp cuối tuần qua, một nhà khoa học đã khởi động một chương trình mang tên _thu thập_ để tổng hợp dữ liệu từ một thí nghiệm. Cứ cách vài phút, phần mềm này lại thu thập – một cách vô hại – các thông tin rồi đưa vào một tệp tin. Gã hacker nhìn thấy chương trình này, loay hoay mất 10 phút để tìm hiểu xem nó đang làm gì, và cuối cùng ra tay hủy nó.

Chà! Gã này quả là có tinh thần cảnh giác cao độ, liên tục kiểm tra xem có ai lảng vảng xung quanh không. Hắn kết liễu bất cứ chương trình nào mà hắn nghi là đang theo dõi hắn. Hắn mở hộp thư của tôi để xem có ai viết gì về hacker không. Wayne nói đúng: nếu bạn ở ngoài sáng, hắn sẽ biết bạn đang theo dõi. Từ nay về sau, chúng tôi sẽ phải tinh vi hơn và hoạt động vô hình.

Khi không phải kiểm tra để đảm bảo sự an nguy của mình, hắn đọc tệp tin.

Bằng cách sục sạo các tệp tin lệnh và tập lệnh của một số nhà khoa học, hắn lùng ra đường dẫn đến máy tính khác ở phòng thí nghiệm. Mỗi đêm, máy tính của chúng tôi lại tự động gọi cho 20 máy khác để trao đổi email và tin tức mạng lưới. Khi gã hacker đọc được các số điện thoại này, nghĩa là hắn tìm thêm được 20 mục tiêu mới.

Từ tệp tin email của một kỹ sư: _Chào Ed! Hai tuần tới tôi sẽ đi nghỉ mát. Nếu anh cần lấy dữ liệu của tôi, hãy đăng nhập vào tài khoản của tôi ở máy Vax. Tên tài khoản là Wilson, mật khẩu là Maryanne (tên vợ tôi). Chúc anh vui vẻ!_ Gã hacker hẳn là vui lắm, dù Ed chắc là không được vui đến thế. Hắn dùng mạng nội bộ của chúng tôi để kết nối với máy Vax đó, và dễ dàng đăng nhập vào tài khoản của Wilson. Wilson sẽ không nhận ra rằng các tệp tin của mình đang bị đọc lén, mà có lẽ anh ta cũng chẳng quan tâm. Bởi lẽ, chúng chỉ chứa dữ liệu số, chỉ một nhà vật lý hạt nhân đồng nghiệp với anh mới hiểu.

Vị khách không mời này biết rõ các mạng nội bộ trong phòng thí nghiệm. 12 cỗ máy tính lớn được kết nối với 100 máy tính phòng thí nghiệm thông qua cổng ethernet, đường dây nối tiếp và kẹo cao su. Khi những nhà vật lý học muốn lấy dữ liệu từ một máy tính ở máy gia tốc cyclotron để đưa vào máy tính lớn ở chỗ chúng tôi, sự thanh lịch chẳng có nghĩa lý gì với họ cả. Họ sẽ dùng bất kỳ cổng nào, bất kỳ đường dây nào, bất kỳ mạng lưới nào. Suốt ngần ấy năm, các kỳ thuật viên đã dệt lên một mạng lưới dây cáp đan xen chằng chịt xung quanh phòng thí nghiệm, kết nối các máy tính với bất kỳ thứ gì có vẻ hoạt động được. Mạng nội bộ này lan tới từng văn phòng, kết nối máy tính cá nhân, máy Macintosh và các thiết bị đầu cuối vào những cỗ máy tính cỡ lớn của chúng tôi.

Thông thường, các máy tính trong mạng lưới được sắp xếp để tin tưởng lẫn nhau. Nếu một máy tính chấp nhận bạn, thì máy tính khác cũng vậy. Điều này giúp tiết kiệm một chút thời gian: mọi người chỉ phải khai một mật khẩu khi sử dụng nhiều máy cùng lúc.

Gã hacker đã lợi dụng sự tín nhiệm này để xâm nhập vào sáu máy tính. Trên cương vị siêu người dùng ở máy tính Unix chính của chúng tôi, hắn ngụy trang dưới danh nghĩa tên tài khoản của người khác. Sau đó, chỉ cần gõ cửa một máy khác trong mạng lưới là hắn có thể được chấp nhận mà không cần phải khai mật khẩu. Vị khách của chúng tôi không biết những hệ thống này được dùng để làm gì; tuy vậy, hắn vẫn mò mẫm khắp nơi để tìm kiếm đường dẫn kết nối tới những máy tính mà hắn chưa khám phá.

Tới cuối phiên truy cập này, máy in hết mực. Tôi cà nhẹ bút chì trên mặt giấy để làm hiện lên những nét ấn của đầu in, và biết được rằng gã hacker đã sao chép tệp tin mật khẩu rồi ngắt kết nối.

Tiếng guitar bass bập bùng cắt ngang dòng suy nghĩ của tôi. Bên ngoài, The Grateful Dead26 đang chơi nhạc ở Nhà hát Berkeley Greek dưới chân đồi, chỉ cách phòng thí nghiệm khoảng 100m. Người hâm mộ ngồi tràn khắp bãi cỏ để ngóng vào trong nhà hát, khiến cảnh sát cũng không cản nổi; tôi vội vã chạy xuống, hòa mình vào hàng nghìn người khác trong những chiếc áo phông in loang lổ. Những gã ăn xin mệt mỏi còn sót lại từ thập niên 1960 len lỏi vào đám đông xin xỏ vé, gạ bán tranh ảnh và cần sa. Màn độc diễn trống ở nhóm khác vọng ra từ Thung lũng Strawberry đã bổ sung thêm một tiết tấu mạnh mẽ mà chỉ lũ bần cùng chúng tôi đang lê la ngoài bãi cỏ mới tán thưởng. Cuộc sống thế là trọn vẹn rồi: hacker cỡ mấy cũng không đáng để phải bỏ lỡ một buổi biểu diễn của Dead.

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

<figure><img src="https://nhavantuonglai.com/image/cover/001-214.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>