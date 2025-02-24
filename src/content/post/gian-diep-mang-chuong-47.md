---
pubDatetime: 2018-12-17T10:10:00Z
title: Gián điệp mạng | Chương 47
description: Gián điệp mạng kể về nhà khoa học chuyển nghề thành chuyên gia mạng, truy tìm hacker tại Phòng Thí nghiệm Lawrence Berkeley, California, Mỹ.
featured: false
image: https://banmaixanh.org/image/cover/001-250.jpg
tags:
  - clifford stoll
  - gian diep mang
  - an ninh mang
  - thu vien
  - van hoc
  - van hoc nuoc ngoai
---

Trong suốt tháng Ba đến đầu tháng Tư, gã hacker ẩn mình, chỉ thi thoảng xuất hiện thấp thoáng, đủ để giữ các tài khoản của hắn trong danh sách các tài khoản đang hoạt động. Nhưng hắn có vẻ không còn hào hứng với việc tiếp cận các máy tính khác, và hầu như phớt lờ các tập tin `SDINET` mới của tôi. Điều gì đang xảy ra với gã này vậy? Nếu đã bị bắt giữ, hắn sẽ không thể xuất hiện ở đây nữa. Nếu đang bận rộn với những dự án khác, tại sao hắn chỉ xuất hiện trong một phút rồi biến mất? Ngày 14 tháng Tư, khi đang làm việc trên hệ thống Unix, tôi chợt thấy Marv Atchley đăng nhập vào hệ thống.

Thật lạ lùng. Marv đang ở trên tầng nói chuyện với một số lập trình viên cơ mà. Tôi lại gần góc làm việc của anh và ngó vào màn hình máy tính trên bàn. Máy thậm chí còn chưa được bật lên.

Ai đang sử dụng tài khoản của Marv? Tôi chạy đến trạm điều phối và thấy có người đang kết nối vào hệ thống qua cổng Tymnet bằng tài khoản của Marv Atchley. tôi gọi tới Tymnet – Steve nhanh chóng lần dấu đường dây. _Nó đến từ Hannover, Đức. Anh có chắc đây không phải là gã hacker đó chứ?_

_Khó nói lắm. Tôi sẽ gọi lại anh ngay._ Tôi chạy lên bốn tầng cầu thang và ngó nhìn vào phòng hội nghị. Marv Atchley vẫn ở đây, đang thao thao phát biểu trước 25 lập trình viên.

Khi tôi trở về trạm điều phối, Marv giả mạo đã biến mất. Nhưng rõ ràng, hắn đã xâm nhập vào hệ thống mà không cần bất kỳ mánh khóe nào, bởi nếu không, chuông báo động của tôi đã kêu váng lên rồi. Dù là ai, chắc chắn người này cũng đã nắm được mật khẩu của Marv.

Khi cuộc họp kết thúc, tôi đưa bản in cho Marv.

_Tôi thật không biết hắn là ai. Và tôi có thể khẳng định chắc chắn là tôi không hề đưa mật khẩu cho bất kỳ ai._

_Anh đổi mật khẩu lâu chưa?_

_Vài tuần trước._

_Mật khẩu là gì vậy?_

_`Messiah` [Chúa cứu thế]. Tôi sẽ đổi lại luôn._

Làm sao gã hacker lại lấy được mật khẩu của Marv nhỉ? Nếu hắn sử dụng con ngựa thành Troy, tôi sẽ nhận ra ngay. Liệu hắn có thể đoán ra từ `Messiah` không? Chà, chỉ có một cách thôi.

Chúng tôi lưu mật khẩu dưới dạng mật mã. Bạn có thể lục tung cả hệ thống vẫn không tìm được từ `Messiah` vì nó đã được mã hóa thành `p3kqznqiewe`.

Tập tin mật khẩu của chúng tôi chứa đầy những từ mã hóa vô nghĩa như vậy. Không thể từ món thịt xay tái tạo lại con lợn được.

Nhưng có thể đoán mò mật khẩu. Giả sử gã hacker thử đăng nhập với tên tài khoản Marv và mật khẩu `Aardvark`. Hệ thống sẽ báo: _Không được._

Vốn tính nhẫn nại, hắn thử sang mật khẩu `Aaron`. Một lần nữa, không được.

Hắn cứ lần mò thử như vậy với các mật khẩu tìm được trong từ điển. Cuối cùng, khi đến từ `Messiah`, cánh cửa chợt mở toang.

Cứ cho là mỗi lần thử mất khoảng vài giây. Các ngón tay của hắn sẽ bải hoải trước khi thử xong cả cuốn từ điển. Phương thức đoán mò thô kệch kiểu vét cạn này chỉ hiệu quả đối với những máy tính được quản lý kém.

Nhưng tôi đã thấy gã hacker này sao chép tập tin mật khẩu của chúng tôi về máy của hắn. Hắn sử dụng danh sách mật khẩu mã hóa này như thế nào vậy? Cơ chế mật khẩu của Unix sử dụng một chương trình mã hóa được đăng tải công khai trên các bảng tin, bất kỳ ai cũng có thể sao chép về. Với hàng trăm nghìn máy tính Unix trên toàn thế giới, không thể giữ kín chương trình này được.

Chương trình mã hóa của Unix chỉ hoạt động theo một chiều: nó sẽ mã hóa các từ tiếng Anh thành những thứ vô nghĩa. Không thể đảo chiều quá trình này để phiên dịch mật khẩu mã hóa thành từ tiếng Anh ban đầu.

Nhưng với chương trình này, bạn có thể mã hóa mọi từ trong từ điển. Tức là từ đầu vào là cuốn từ điển, bạn có thể tạo ra một danh sách các từ tiếng Anh mã hóa. Sau đó, việc so sánh tập tin mật khẩu của tôi với danh sách mật khẩu mã hóa bạn vừa tạo ra sẽ trở nên rất đơn giản. Có lẽ, gã hacker đã bẻ gãy mật khẩu bằng cách này.

Trên máy tính của mình ở Hannover, hắn sẽ chạy chương trình mã hóa mật khẩu của Unix. Hắn đưa vào đó toàn bộ cuốn từ điển, rồi chương trình sẽ mã hóa từng từ trong tiếng Anh. Ví dụ như sau: Aardvark được mã hóa thành `vi4zkcvlsfz`. Nó có giống với `p3kqznqiewe` không? Không. Vậy thì chuyển sang từ khác trong từ điển.

Aeron được mã hóa thành `zzole9cklg8`. Không giống với `p3kqznqiewe`, vậy thì lại chuyển sang từ tiếp theo trong từ điển.

Cuối cùng, chương trình này sẽ khám phá ra rằng từ Messiah được mã hóa thành `p3kqznqiewe`.

Khi tìm ra được một cặp khớp, chương trình này sẽ in nó ra.

Gã hacker bẻ gãy mật khẩu bằng cách sử dụng từ điển. Hắn có thể mò ra được mật khẩu của bất kỳ ai, miễn đó là một từ tiếng Anh.

Đây là vấn đề nghiêm trọng. Như vậy, mỗi lần tôi thấy hắn sao chép một tập tin mật khẩu, tức là hắn có thể biết được mật khẩu của những người dùng hợp lệ. Tin xấu rồi. Tôi kiểm tra sổ ghi chép. Hắn đã sao chép các tập tin mật khẩu từ máy Unix của chúng tôi, hệ thống của Anniston và Cục Chỉ huy Bờ biển của Hải quân. Không biết hắn đã quay trở lại những máy tính này chưa.

Vậy là tôi đã chứng minh được rằng hắn đang thực hiện hành vi bẻ gãy mật khẩu trên máy tính của mình. Trong một cuốn từ điển tiếng Anh thông thường, có khoảng 100.000 từ. Hắn đã sao chép tập tin mật khẩu của tôi được ba tuần. Nếu chương trình phá mật khẩu của hắn hoạt động liên tục suốt ba tuần qua, liệu đến lúc này hắn đã đoán ra được mật khẩu của Marv chưa? Trên máy tính Vax thông thường, việc mã hóa một mật khẩu sẽ mất khoảng một giây. Như vậy, 100.000 từ sẽ mất khoảng một ngày. Với máy tính cá nhân của IBM, quá trình này có thể kéo dài một tháng. Siêu máy tính của Cray thì có khi lại chỉ cần đến một giờ.

Nhưng theo thông tin từ Marv, thì có lẽ gã hacker đã phá được mật khẩu trong chưa đến ba tuần. Vậy là hắn không sử dụng máy tính gia dụng bình thường. Có lẽ, hắn chạy chương trình phá mật khẩu trên máy Vax hoặc Sun.

Nhưng tôi cũng cần thận trọng, không nên vội vàng kết luận ngay. Biết đâu hắn sử dụng một thuật toán nhanh hơn, hoặc đợi một vài ngày sau khi bẻ gãy mật khẩu của Marv rồi mới hành động.

Dẫu sao, tôi cũng cứ tự khen mình trước đã. Chỉ qua việc nhận ra rằng hắn thực hiện bẻ gãy mật khẩu, tôi đã biết loại máy tính hắn đang sử dụng là gì.

Đây mới đúng là hoạt động thám tử từ xa đích thực.

Điều này lý giải tại sao hắn luôn sao chép các tập tin mật khẩu của chúng tôi về máy. Hóa ra là để thực hiện phá giải chúng tại Đức.

Chỉ cần đoán được một mật khẩu đã là nguy hiểm rồi. Nếu tôi xóa tài khoản của Sventek, hắn lại lẻn vào qua một tài khoản khác. Thật may, tôi vẫn chưa đóng cửa chặn hắn. Mật khẩu, thứ mà tôi tưởng là chiếc áo giáp chống đạn hiệu quả, hóa ra lại lỗ chỗ đầy những lỗ hổng.

Bẻ gãy mật khẩu. Tôi chưa từng gặp chuyện này bao giờ, nhưng có lẽ giới chuyên gia thì đã quen thuộc rồi. Không biết họ sẽ nói gì nhỉ? Tôi nhấc máy gọi cho Bob Morris, một nhân vật quan trọng mà tôi mới được gặp ở NSA.

Anh ta là người đã phát minh ra hệ thống mã hóa của Unix.

_Tôi nghĩ gã hacker đang thực hiện phá giải các mật khẩu,_ tôi nói với Bob.

_Hả?_ Bob không giấu giếm sự quan tâm. _Hắn sử dụng từ điển hay đã đảo ngược được thuật toán mã hóa dữ liệu?_

_Từ điển, tôi nghĩ vậy._

_Chuyện lớn đấy. Xem nào, tôi có ba chương trình bẻ mật khẩu khá tốt. Một chương trình trong đó tính toán trước mật khẩu, nên nó chạy nhanh gấp khoảng vài trăm lần. Anh muốn có một bản sao không?_

Chúa ơi, anh ta đang ngỏ ý cho tôi một chương trình bẻ mật khẩu! _À ừ, không, tôi không lấy đâu,_ tôi nói. _Khi nào cần giải mã mật khẩu, tôi sẽ nhờ anh sau. Mà cho tôi hỏi, người ta biết đến trò bẻ mật khẩu này bao lâu rồi?_

_Cái trò đoán mò kiểu vét cạn này hả? Có lẽ được 5 – 10 năm rồi. Trò trẻ con ấy mà._

Bẻ mật khẩu chỉ là một trò chơi thôi sao? Anh chàng này là kiểu người gì vậy chứ? Bob nói tiếp. _Việc đoán mò sẽ không hiệu quả nếu anh biết chọn mật khẩu tốt. Điều khiến chúng tôi quan tâm hơn là các chương trình mã hóa. Nếu có người tìm ra được cách đảo ngược chương trình này, chúng tôi sẽ gặp rắc rối lớn._ Tôi hiểu ý anh ta rồi. Chương trình phiên dịch `Messiah` thành `p3kqznquiewe` là đường một chiều. Nó chỉ cần một giây để mã hóa mật khẩu. Nhưng nếu có người tìm ra được cách quay ngược lại cái máy đó – để thịt xay biến trở lại thành con lợn – để chuyển `p3kqznqiewe` thành `Messiah`, thì chúng có thể tìm ra được mọi mật khẩu mà không cần phải đoán mò.

Ít nhất thì tôi cũng đã báo với NSA. Có lẽ họ đã biết những kỹ thuật này từ lâu rồi, nhưng bây giờ thì họ mới chính thức biết rằng có người khác cũng đang áp dụng chúng. Liệu họ có công bố chuyện này không? Nhưng nói đi thì cũng phải nói lại, nếu NSA đã biết điều này suốt 10 năm qua, vậy tại sao đến giờ họ vẫn chưa chịu nói gì? Các nhà thiết kế hệ thống cần phải biết về vấn đề này – để xây dựng những hệ điều hành mạnh mẽ hơn. Các quản lý máy tính cũng cần phải biết. Và nhìn chung, tất cả những người sử dụng đến mật khẩu đều cần được cảnh báo. Đó là một nguyên tắc đơn giản: Đừng chọn mật khẩu có thể xuất hiện trong một cuốn từ điển. Tại sao chưa ai nói với tôi về điều này? Trung tâm An ninh Máy tính Quốc gia có vẻ không mấy quan tâm đến những vấn đề thiết thực của hàng nghìn máy tính Unix ở khắp nơi. Tôi muốn biết về những điểm yếu trong hệ thống Unix của mình. Những vấn đề nào đã được báo cáo? Trước đây, tôi đã phát hiện ra một lỗi trong trình biên tập Gnu – Emacs. Một lỗ hổng an ninh trên diện rộng. Tôi đã thực hiện nghĩa vụ của mình là báo cáo điều đó lên Trung tâm An ninh Máy tính Quốc gia.

Nhưng họ lại không thông báo vấn đề đó cho ai khác nữa cả. Giờ thì tôi lại còn phát hiện ra rằng các mật khẩu có mặt trong từ điển là không an toàn.

Còn bao nhiêu lỗ hổng an ninh nữa đang tồn tại kín đáo trong hệ thống của tôi? NCSC có thể biết, nhưng không đời nào họ chịu nói.

Có lẽ họ đang nghiêm túc thực thi phương châm của NSA, _Không bao giờ nói gì._

Nhưng khi giữ im lặng trước những vấn đề về an ninh máy tính như thế này, tức là họ làm hại tất cả mọi người. Tôi thấy rõ rằng giới hacker đã phát hiện và lợi dụng những lỗ hổng này từ lâu. Tại sao không ai cảnh báo cho những người tốt? _Việc đó không thuộc phạm vi thẩm quyền của chúng tôi,_ Bob Morris nói.

_Chúng tôi thu thập các thông tin này để thiết kế những máy tính tốt hơn trong tương lai._

Tại một nơi nào đó và bằng một cách nào đó, có điều gì đó không đúng ở đây. Những kẻ mũ đen biết các tổ hợp để mở khóa vào các căn hầm của chúng tôi. Nhưng những người mũ trắng lại im lặng. Thôi vậy, tạm thời hãy quên NSA đi. Tôi có thể làm gì hơn? Đến lúc thúc giục các cơ quan khác rồi.

Tới cuối tháng Tư, Bundespost vẫn chưa nhận được giấy tờ từ phía Mỹ. Họ thực hiện các cuộc lần dấu dựa trên đơn khiếu nại chính thức của Đại học Bremen.

Bundespost đã hoàn thành một số cuộc lần dấu, nhưng do quy định của luật pháp Đức, họ chưa thể cho tôi biết tên hay số điện thoại của nghi phạm.

Điều này nghe quen quá. Trong đầu tôi chợt nảy ra một ý tưởng: Không biết bà chị Jennie của tôi có sẵn lòng thăm dò quanh Hannover không nhỉ? Cho đến lúc này, chị ấy vẫn là thám tử điều tra nhiệt tình nhất. Tôi gọi Mike Gibbons. _Chúng tôi không còn coi đây là một vụ án hình sự nữa,_ anh ta nói.

_Tại sao lại bỏ cuộc khi phía Đức đã lần dấu đường dây xong xuôi và biết tên của nghi phạm?_

_Tôi có nói chúng tôi bỏ cuộc đâu. Tôi chỉ nói rằng FBI không còn coi đây là một vụ án hình sự nữa._

Như vậy tức là sao? Như thường lệ, Mike ngậm chặt miệng mỗi khi tôi đặt câu hỏi.

Không quân có tiến triển nào chưa? Họ đang lặng lẽ truyền tin rằng trong mạng Milnet đang có bò sát trườn bò khắp nơi hòng tìm cách đột nhập vào các máy tính quân sự. Lần lượt từng địa điểm đang thắt chặt an ninh.

Nhưng Không quân phải dựa vào FBI mới bắt được gã hacker. Ann Funk và Jim Christy nói họ cũng rất muốn giúp, nhưng không làm gì được.

_Hãy cho tôi biết bất kỳ lý do nào, ngoại trừ, Việc đó không thuộc thẩm quyền của tôi,_ tôi nói.

_Được rồi,_ Ann trả lời, _việc đó không thuộc quyền chỉ đạo của tôi._

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

<figure><img src="https://banmaixanh.org/image/cover/001-257.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>