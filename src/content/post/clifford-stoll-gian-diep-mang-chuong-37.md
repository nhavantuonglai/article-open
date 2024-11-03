---
pubDatetime: 2018-12-07T10:10:00Z
title: Clifford Stoll | Gián điệp mạng (Chương 37)
description: Gián điệp mạng là câu chuyện người thật việc thật kể về cuộc săn đuổi hacker bất đắc dĩ của nhà khoa học chuyển tay ngang trở thành chuyên gia mạng máy tính ở Phòng Thí nghiệm Lawrence Berkeley, California, Mỹ.
featured: false
image: https://data.nhavantuonglai.com/image/illustrations/cover-nhavantuonglai-com-0238.jpg
tags:
  - clifford stoll
  - gian diep mang
  - an ninh mang
  - thu vien
  - van hoc
  - van hoc nuoc ngoai
---

Khoảng trưa Chủ nhật ngày 4 tháng Một, Martha và tôi đang khâu chăn thì máy nhắn tin vang lên. Tôi chạy đến máy tính, kiểm tra kỹ xem gã hacker có hoạt động không, rồi gọi cho Steve White. Anh nhanh chóng thực hiện cuộc lần dấu ngay tức khắc. tôi không thể ngồi yên chờ kết quả. Gã hacker đang ở trên máy của tôi, nên tôi hộc tốc đạp xe đến phòng thí nghiệm để theo dõi. Tôi mất 20 phút chạy xe lên đồi, nhưng lần này gã hacker rất thong thả: khi tôi tới trạm điều phối, hắn vẫn đang đánh máy.

Phía dưới máy in, một cuộn giấy in dày chừng 2cm đã chất đống. Hôm nay, gã hacker chăm chỉ hẳn. Dòng đầu tiên cho thấy hắn giả trang đằng sau cái tên Sventek. Sau khi kiểm tra chắc chắn rằng không có quản lý hệ thống nào đang hoạt động trên mạng, hắn quay trở lại cơ sở dữ liệu Optimis của Lầu Năm Góc. Hôm nay không được rồi, máy tính Lục quân trả lời: _Hôm nay bạn không được phép đăng nhập._

Ôi, thật tuyệt vời! Jim Christy hẳn đã gõ đúng đầu người cần gõ rồi.

Lướt nhìn bản in, tôi thấy gã hacker lại câu cá trên mạng Milnet. Hắn lọ mọ thử lần lượt 15 máy tính của Không quân tại các căn cứ như Eglin, Kirtland và Bolling. Không có may mắn nào. Hắn kết nối đến từng máy, xoay tay nắm cửa một, hai lần, rồi chuyển sang hệ thống tiếp theo.

Cho đến khi hắn thử tiếp cận Bộ Chỉ huy Hệ thống Không quân, Bộ phận Không gian.

Trước tiên, hắn xoay tay nắm cửa bằng cách thử tài khoản hệ thống là `System` với mật khẩu `Manager`.

Không được.

Sau đó là `Guest`, mật khẩu `Guest`.

Không ổn.

Tiếp đến là `Field`, mật khẩu `Service`:  Vậy là cánh cửa đã được mở rộng. Hắn đã đăng nhập vào trên cương vị _FIELD SERVICE._ Đây không phải là tài khoản của người dùng bình thường, mà là tài khoản đặc quyền.

Gã hacker không thể tin vào vận may của mình. Sau hàng chục lần thử, cuối cùng hắn cũng vớ bẫm. Người vận hành hệ thống.

Lệnh đầu tiên của hắn là liệt kê các đặc quyền đang có trong tay. Máy tính Không quân phản hồi tự động: Đặc quyền Hệ thống, và rất nhiều quyền hạn khác, bao gồm việc đọc, viết và xóa bất cứ tập tin nào trên hệ thống.

Hắn thậm chí còn được trao quyền chạy các chương trình kiểm tra an ninh trên hệ thống máy tính của Không quân. tôi có thể mường tượng ra cảnh hắn ngồi trước màn hình máy tính, mắt trợn trừng như vẫn chưa tin vào mẻ lưới vừa bắt được. Hắn không những có thể tha hồ sục sạo trong máy tính của Bộ phận Chỉ huy Không gian, mà còn kiểm soát nó.

Một nơi nào đó ở El Segundo, Nam California, một máy tính Vax quan trọng đang bị một gã hacker cách nửa vòng trái đất xâm phạm.

Những động thái tiếp theo của hắn không có gì mới mẻ: Sau khi liệt kê các đặc quyền, hắn dừng chương trình kiểm tra các hoạt động của mình. Như vậy, hắn sẽ không để lại dấu vết nào, ít ra là hắn nghĩ thế. Làm sao hắn có thể biết tôi đang theo dõi hắn từ Berkeley chứ? Ung dung rằng mình không bị phát hiện, hắn lần mò đến các máy tính gần đó. Sau một lúc, hắn phát hiện ra bốn tài khoản đang hoạt động trên mạng lưới của Không quân, và một đường dẫn kết nối với các máy khác. Từ vị trí rất cao này, không gì có thể qua được mắt hắn; nếu mật khẩu của họ khó đoán, hắn sẽ đánh cắp bằng cách đặt những con ngựa thành Troy.

Chiếc máy tính mà hắn vừa lọt được vào không phải thứ máy bàn nhỏ xíu.

Hắn thấy hàng nghìn tập tin trong hệ thống, và hàng trăm người dùng. Hàng trăm người dùng? Đúng vậy. Hắn liệt kê thông tin về tất cả bọn họ.

Nhưng sự tham lam đã ngáng đường hắn. Hắn đặt lệnh để máy tính Không quân liệt kê tất cả các tập tin của nó; từng hàng chữ vui vẻ hiện ra với những cái tên như _Kế hoạch thiết kế laser_ hay _Danh mục hàng hóa vận hành tàu con thoi._

Nhưng trớ trêu thay, hắn không biết cách tắt vòi nước này. Suốt hai giờ, nó phun một dòng thác thông tin vào máy tính của hắn.

Cuối cùng, vào lúc 2 giờ 30 phút, hắn gác máy, đinh ninh rằng có thể đăng nhập trở lại vào máy tính Không quân. Nhưng không được rồi. Máy tính Không quân thông báo rằng: _Mật khẩu của bạn đã hết hạn. Xin hãy liên lạc với quản lý hệ thống._

Nhìn vào bản in, tôi nhận ra lỗi sai của hắn. Máy tính không quân đã vô hiệu hóa mật khẩu của tài khoản `field service`; hắn đã nhận được cảnh báo ngay lần đầu tiên xâm nhập vào đây. Có lẽ hệ thống tự động vô hiệu hóa các mật khẩu sau vài tháng.

Để tiếp tục ở trên máy này, lẽ ra hắn phải đặt lại mật khẩu ngay tức khắc.

Nhưng không, hắn đã bỏ qua yêu cầu này. Bây giờ, hệ thống sẽ không cho hắn quay lại nữa.

Cách đó hàng nghìn kilometer, tôi có thể cảm nhận được sự giận dữ của hắn.

Hắn rất muốn trở lại chiếc máy tính này, nhưng ước mơ đó không thành vì chính sai lầm ngu ngốc của hắn.

Hắn đã vớ được chùm chìa khóa xe Buick, nhưng lại để chúng trong xe rồi khóa cửa lại.

Sai lầm của gã hacker đã giải quyết được một vấn đề. Tôi có nên báo với Bộ phận Không gian của Không quân không? Hôm nay là Chủ nhật, có gọi chắc cũng không có người nghe. Và vì gã hacker đã tự khóa mình ở ngoài, nên hắn không còn là một mối nguy hiểm cho họ nữa. Tôi chỉ cần báo cáo vấn đề cho các thám tử của Không quân để họ xử lý là được.

Trong lúc gã hacker đang sục sạo quanh máy tính của Không quân, Steve White đã lần dấu theo đường dây Tymnet.

_Hắn đến đây thông qua RCA,_ Steve nói. _TAT – 6._

_Hả? Nghĩa là gì vậy?_

_Ồ, thật ra là không có gì. RCA là một trong những hãng viễn thông quốc tế, và hôm nay gã hacker đi qua đường dây cáp xuyên Đại Tây Dương số 6._

Steve xử lý các tuyến liên lạc quốc tế thành thục như một tài xế taxi trong thành phố.

_Tại sao hắn không dùng liên kết vệ tinh?_

_Có lẽ vì hôm nay là Chủ nhật – kênh truyền tải dây cáp thường bớt đông đúc hơn._

_Ý anh là mọi người ưa thích dây cáp hơn là vệ tinh?_

_Chắc chắn rồi. Kết nối qua vệ tinh sẽ bị trễ ¼ giây. Đường dây cáp ngầm dưới biển không chậm như thế._

_Ai quan tâm chứ?_

_Hầu hết là những người gọi điện thoại,_ Steve nói. _Nhưng sự chậm trễ này khiến âm thanh bị giật. Anh biết đấy, khi hai người định nói cùng một lúc, họ đều bị bật trở lại._

_Như vậy, nếu các công ty điện thoại đều muốn định tuyến qua đường dây cáp, thì ai muốn dùng vệ tinh?_

_Hầu hết là các mạng truyền hình. Không thể nén tín hiệu tivi vào dây cáp ngầm được, nên họ phải sử dụng vệ tinh. Nhưng cáp quang sẽ làm thay đổi mọi thứ._ Tôi đã nghe về cáp quang. Truyền tải các tín hiệu liên lạc qua sợi thủy tinh thay vì sợi dây đồng. Nhưng ai đang vận hành các tuyến dây cáp quang dưới đại dương? _Tất cả mọi người đều muốn,_ Steve giải thích. _Các kênh vệ tinh có số lượng hạn chế, vì chỉ có thể đặt một số lượng vệ tinh nhất định trên đường xích đạo. Và các kênh vệ tinh không có tính riêng tư – bất cứ ai cũng có thể nghe được nó. Vệ tinh có thể phù hợp với truyền hình, nhưng dây cáp mới là lựa chọn lý tưởng cho dữ liệu._

Những cuộc trao đổi với Steve White luôn bắt đầu với việc lần dấu gã hacker, nhưng thế nào rồi cũng nhảy sang các chủ đề khác. Một cuộc nói chuyện ngắn với Steve thường trở thành một buổi phụ đạo về lý thuyết liên lạc.

Khi nhận ra rằng gã hacker vẫn đang kết nối, tôi hỏi Steve về chi tiết của cuộc lần dấu.

_À ừ. Tôi đã kiểm tra với Wolfgang Hoffmann ở Bundespost. Hôm nay vị khách của anh đến từ Karlsruhe. Đại học Karlsruhe._

_Nó ở đâu vậy?_

_Tôi không biết, có lẽ là ở Thung lũng Ruhr. Hình như dọc sông Rhine thì phải?_

Gã hacker vẫn ung dung nghịch ngợm trong máy tính Không quân, nhưng sau khi hắn rời đi, tôi lại lếch thếch chạy đến thư viện. Đúng rồi, có một nơi tên là Karlsruhe. Cách Hannover 500  kilometer về phía Nam.

Đường cáp TAT – 6 trải dọc dưới đáy biển Đại Tây Dương, kết nối châu Âu với châu Mỹ. Đầu phía Tây của kết nối này đi qua Tymnet, sau đó đến Phòng Thí nghiệm Lawrence Berkeley, Milnet, và kết thúc ở Bộ phận Không gian của Bộ Chỉ huy Hệ thống Không quân.

Một nơi nào đó ở Đức, gã hacker động vào đầu phía Đông của kết nối này, không biết rằng chúng tôi đang tập trung vào hắn.

Ba địa điểm khác nhau ở Đức. Gã hacker đang di chuyển khắp nơi. Hoặc hắn vẫn ở nguyên một địa điểm và chơi trò đánh lừa hệ thống điện thoại. Có lẽ hắn đúng là sinh viên, đến các trường đại học khác nhau để khoe khoang chiến tích này với bạn bè. Liệu tôi có dám chắc rằng chỉ có một hacker, hay tôi đang theo dõi vài người một lúc? Giải pháp ở đây phụ thuộc vào việc hoàn thành một cuộc lần dấu – không phải là cuộc lần dấu đến một quốc gia hay thành phố, mà đến tận cá nhân.

Nhưng tôi có thể làm gì để thực hiện một cuộc lần dấu điện thoại ở cách đây 10.000 km? Lệnh lục soát! Không biết FBI đã giao lệnh lục soát cho phía Đức chưa nhỉ? Mà tiện nhắc đến việc này, liệu họ đã thực sự mở cuộc điều tra chưa? Đến lúc phải gọi cho Mike Gibbons ở FBI rồi.

_Tôi nghe nói anh đã bị rút khỏi vụ này,_ tôi nói với Mike. _Tôi có thể làm được gì không?_

_Đừng lo,_ Mike nói. _Để tôi xử lý. Cứ yên lặng, chúng tôi đang có tiến triển._

_À, vậy có cuộc điều tra nào hay không?_

_Đừng hỏi tôi, vì tôi không thể nói. Cứ kiên nhẫn nhé, chúng tôi sẽ giải quyết._

Mike tránh né mọi câu hỏi. Biết đâu tôi có thể moi được chút thông tin gì từ anh ta nếu kể cho anh ta nghe chuyện chiếc máy tính của Không quân.

_Này, hôm qua gã hacker đã xâm nhập vào máy tính Không quân._

_Ở đâu?_

_Ồ, một nơi nào đó ở Nam California._ Tôi không nói nó ở 2400 Đại lộ East El Segundo, đối diện sân bay Los Angeles. Anh ta không chịu hé răng, thì tôi đành chơi trò mập mờ vậy.

_Ai quản lý nó?_

_Ai đó ở Không quân. Có vẻ giống như chỗ của Buck Rogers. Tôi không biết nữa._

_Anh nên gọi OSI của Không quân. Họ sẽ biết phải làm gì._

_Vậy tức là FBI sẽ không điều tra?_

_Tôi đã nói rồi. Chúng tôi đang điều tra. Chúng tôi đang có tiến triển. Chỉ là anh không được phép biết thông tin thôi._

Công cuộc moi tin từ FBI chỉ dừng lại ở đó.

Các thám tử của Không quân lại dễ bộc lộ cảm xúc hơn. Jim Christy ở OSI, Không quân nói ngắn gọn.

_Chỉ huy Hệ thống? Thằng khốn nạn._

_Vâng. Anh chàng này trở thành quản lý hệ thống ở đó._

_Quản lý hệ thống ở Bộ Chỉ huy Hệ thống. Thật nực cười. Hắn có lấy được dữ liệu mật nào không?_

_Làm sao tôi biết được? Nhưng hắn không lấy được gì nhiều, chỉ là tên của vài nghìn tập tin._

_Khốn kiếp. Tôi đã nói họ rồi. Tận hai lần._ Tôi đâm chột dạ, không biết mình có nên nghe tiếp hay không.

_Nhưng hắn sẽ không quay lại hệ thống của họ được đâu. Hắn đã tự khóa mình ở ngoài rồi._ Tôi kể về mật khẩu bị hết hạn.

_Thế là Bộ Chỉ huy Hệ thống may rồi,_ Jim nói, _nhưng còn bao nhiêu máy tính khác vẫn còn để hớ hênh như vậy? Nếu sau khi chúng tôi đã cảnh báo mà Bộ phận Không gian vẫn sơ sẩy thế, thì chúng tôi biết ăn nói thế nào đây?_

_Anh đã cảnh báo họ?_

_Tôi nói thẳng. Suốt sáu tháng qua, chúng tôi đã rà rã xúi những người vận hành hệ thống phải đổi tất cả các mật khẩu của họ. Anh nghĩ chúng tôi không nghe lời anh hay sao?_

Chúa ơi! Họ thực sự lắng nghe thông điệp của tôi, và đang lan truyền những thông tin này. Đây là lần đầu tiên có người bóng gió nói rằng việc làm của tôi có ích.

OSI của Không quân ở Washington báo tin cho đặc vụ của họ ở Căn cứ Không quân Vandenberg. Sau đó, người này đi gõ đầu những người chịu trách nhiệm ở Bộ phận Không gian, để họ đóng lại lỗ hổng này.

Hai ngày sau, Dave Cleveland và tôi ngồi trước máy tính của anh, mày mò sửa chữa những phần mềm bị hỏng. Máy nhắn tin của tôi vang lên, và Dave không nói không rằng chuyển ngay sang máy Unix. Sventek đang đăng nhập. Chúng tôi nhìn vào màn hình và gật đầu với nhau. Tôi chạy đến trạm điều phối để quan sát trực tiếp.

Gã hacker không màng gì đến các máy tính của tôi mà đi thẳng tới Milnet để kết nối đến Bộ phận Không gian của Không quân. Nhìn hắn bắt đầu đăng nhập với tài khoản Field Service, tôi đinh ninh hắn sẽ bị chặn lại.

Nhưng không! Hắn được chào mừng trở lại hệ thống của họ. Có người ở căn cứ Không quân đã tái kích hoạt tài khoản Field Service với mật khẩu y như cũ. Kỹ thuật viên dịch vụ có lẽ thấy tài khoản này đã hết hạn nên yêu cầu quản lý hệ thống khởi động lại mật khẩu.

Thật ngu xuẩn. Họ đã mở khóa cửa và cắm chìa ở ngay ổ khóa.

Gã hacker không bỏ phí một giây. Hắn đi thẳng vào phần mềm cấp phép và thêm một tài khoản mới. Không, không phải tài khoản mới. Hắn tìm một tài khoản cũ, không có người sử dụng và chỉnh sửa nó. Một sĩ quan Không quân nào đó, Đại tá Abrens, có tài khoản nhưng một năm nay không đăng nhập vào máy tính này.

Gã hacker thay đổi một chút tài khoản của Đại tá Abrens, trao cho nó các đặc quyền hệ thống và mật khẩu mới: `AFHACK`.

AFHACK – thật kiêu ngạo. Hắn đang chế giễu Không quân Hoa Kỳ.

Từ bây giờ, hắn không cần đến tài khoản Field Service nữa. Trong vỏ bọc ngụy trang là một sĩ quan Không quân, hắn có quyền tiếp cận không hạn chế với máy tính của Bộ phận Không gian.

Nhiệm vụ nặng nề đây. Hắn chưa sục sạo xung quanh. OSI của Không quân đã hết giờ làm việc. Tôi nên làm gì? Nếu cứ để hắn tiếp tục, những thông tin nhạy cảm của Không quân sẽ bị rò rỉ. Nhưng nếu ngắt kết nối hắn, hắn sẽ lại tìm một con đường khác, vòng qua các thiết bị theo dõi ở phòng thí nghiệm của tôi.

Phải chặn hắn ngay tại Bộ Chỉ huy Không gian.

Nhưng trước tiên, tôi muốn lần theo dấu vết hắn đã. Steve White nhanh chóng bắt tay vào cuộc. Trong vòng năm phút, anh đã lần đến Hannover, và gọi Bundespost.

Một vài phút im lặng. _Cliff, phiên kết nối này liệu có kéo dài không?_

_Tôi không dám khẳng định, nhưng tôi nghĩ vậy._

_Được rồi._

Steve gọi một đường dây khác; tôi chỉ nghe loáng thoáng thi thoảng có tiếng hét lớn.

Phút sau, Steve trở lại đường dây với tôi. _Wolfgang đang lần dấu cuộc gọi ở Hannover. Đó là một cuộc gọi nội vùng. Họ sẽ cố truy nó đến cùng._

Tin mới đây rồi! Một cuộc gọi nội vùng có nghĩa là gã hacker đang ở đâu đó tại Hannover.

Trừ trường hợp có một máy tính ở Hannover đang giúp hắn làm những công việc bẩn thỉu này.

Steve hét to lên những hướng dẫn từ Wolfgang: _Dù anh làm gì thì cũng đừng ngắt kết nối của gã hacker. Hãy giữ chân hắn càng lâu càng tốt!_

Nhưng hắn đang sục sạo các tập tin tại căn cứ Không quân. Như thế chẳng khác gì khoanh tay ngồi nhìn kẻ trộm khoắng đồ trong nhà cả. Tôi nên đá hắn ra hay để cuộc lần dấu tiếp tục? Thật khó quyết định quá.

Phải gọi cho cấp có thẩm quyền thôi. Mike Gibbons ở FBI thì sao nhỉ? Anh ta không ở đó.

Vậy thì Trung tâm An ninh Máy tính Quốc gia. Zeke Hanson sẽ biết phải làm điều gì.

Không may rồi. Zeke không ở văn phòng, và giọng nói ở đầu dây bên kia giải thích: _Tôi cũng muốn giúp anh, nhưng chúng tôi thiết kế những máy tính có độ an ninh cao. Chúng tôi không tham gia vào khía cạnh vận hành._ Tôi biết rồi, cảm ơn! Vậy là chỉ còn nước báo cho Không quân. Tôi kết nối với Trung tâm Thông tin Mạng Milnet và tìm số điện thoại của họ. Không dưng họ lại thay đổi số điện thoại, rồi đến mã vùng cũng ghi sai. Đến khi tôi gặp được đúng người, gã hacker đã tung hoành khắp hệ thống máy tính của họ.

_Xin chào, tôi muốn gặp quản lý hệ thống của máy tính Vax, Bộ Chỉ huy Không gian._

_Trung úy Thomas đây. Tôi là quản lý._

_À, tôi không biết phải giải thích thế nào, nhưng có một hacker trong máy tính của các anh._

(Trong lúc đó, tôi bụng bảo dạ: _Anh ta sẽ chẳng tin mình và sẽ tra khảo xem mình là ai._) _Hả? Anh là ai?_

Ngay cả trên điện thoại, tôi cũng có thể hình dung ra ánh mắt nguy hiểm của anh ta dành cho mình.

_Tôi là một nhà thiên văn học ở Phòng Thí nghiệm Lawrence Berkeley._

(Lỗi đầu tiên, tôi nghĩ, không ai chịu tin điều này đâu.) _Sao anh biết có hacker?_

_Tôi đang theo dõi hắn xâm nhập vào máy tính của anh qua Milnet._

_Anh nghĩ là tôi sẽ tin à?_

_Cứ kiểm tra hệ thống của anh đi. Liệt kê người dùng đi._

_Được._

Tiếng gõ bàn phím lách cách vang lên.

_Không có gì lạ thường cả. Có 57 người đang trên mạng, và hệ thống hoạt động bình thường._

_Anh có thấy ai mới không?_ Tôi hỏi.

_Để tôi xem… Không, tất cả đều bình thường._ Tôi nên nói thẳng hay chơi trò vòng vo tam quốc đây? _Anh có biết ai tên là Abrens không?_

_Có. Đại tá Abrens. Anh ấy đang đăng nhập. Mà này, anh định ám chỉ gì vậy?_

_Anh có chắc tài khoản Abren này là hợp lệ?_

_Chà, đúng mà. Đại tá đấy. Anh đừng đùa với quan lớn._

Cứ hỏi nhử kiểu này cũng chẳng đi đến đâu. Tốt nhất nên nói thẳng. _À, một gã hacker đã đánh cắp tài khoản của Abrens. Hắn đang đăng nhập và kết xuất các tập tin của anh._

_Làm sao anh biết?_

_Tôi đã theo dõi hắn. Tôi có bản in,_ tôi nói. _Hắn vào bằng tài khoản Field Service, sau đó đặt lại mật khẩu của Abren. Ngay lúc này, hắn đang có đặc quyền hệ thống trong tay._

_Không thể nào. Tôi mới đặt lại mật khẩu cho tài khoản Field Service ngày hôm qua. Trước đó nó đã hết hạn._

_Đúng, tôi biết. Nhưng anh đặt mật khẩu thành service, giống hệt năm ngoái. Giới hacker quá rành điều này._

_Ôi, chết mất. Giữ máy nhé._

Qua điện thoại, tôi nghe tiếng Trung úy Thomas gọi ai đó. Vài phút sau, anh trở lại đường dây.

_Anh muốn chúng tôi làm gì?_

Anh ta hỏi. _Tôi có thể đóng hệ thống ngay bây giờ._

_Đừng, hãy chờ một chút,_ tôi nói. _Chúng tôi đang lần dấu hắn, và đã đến gần hắn rồi._

Đây không phải lời nói đùa; Steve White vừa chuyển tiếp yêu cầu của Wolfgang Hoffmann là giữ chân gã hacker trên đường dây càng lâu càng tốt. Tôi không muốn Trung úy Thomas ra tay chặn khi cuộc truy lùng vẫn đang dở dang.

_Được thôi, nhưng tôi sẽ gọi cho sĩ quan chỉ huy. Ông ấy sẽ ra quyết định cuối cùng._

Khó có thể đổ lỗi cho họ. Một gã hoàn toàn xa lạ từ Berkeley gọi đến báo có kẻ đang xâm nhập vào hệ thống của họ.

Vừa nghe điện thoại, tôi vừa theo dõi máy in nhả ra từng dòng lệnh của gã hacker. Hôm nay, hắn không liệt kê tên của tất cả các tập tin. Ngược lại: hắn liệt kê từng tập tin riêng lẻ. Hắn đã biết tên các tập tin cần tìm, nên không cần phải sục sạo tìm tên chúng nữa.

Manh mối quan trọng đây rồi. Ba ngày trước, hắn liệt kê tên của 1.000 tập tin. Hôm nay, hắn đi thẳng đến những tập tin mà hắn quan tâm. Tức là hắn phải in toàn bộ phiên truy cập của mình. Nếu không, hắn sẽ quên hết tên của những tập tin này.

Vậy là gã hacker in ra mọi thứ mà hắn có. Tôi đã biết hắn giữ một sổ tay ghi chép chi tiết, vì nếu không, hắn sẽ quên một số hạt giống đã gieo từ vài tháng trước. Tôi nhớ lần gặp mặt với CIA, khi đó Teejay thắc mắc không biết gã hacker có ghi lại các phiên hoạt động của mình hay không. Bây giờ thì tôi đã biết.

Ở đầu kia của kết nối này, ở nơi nào đó tại Đức là một gián điệp làm việc có phương pháp và có lòng quyết tâm. Mọi bản in xuất hiện ở bộ theo dõi của tôi đều được sao chép lần hai tại hang ổ của hắn.

Hắn liệt kê những tập tin nào? Hắn bỏ qua mọi chương trình và phớt lờ những hướng dẫn quản lý hệ thống. Thay vào đó, hắn tìm đến những kế hoạch vận hành. Những hồ sơ miêu tả trang thiết bị của Không quân cho tàu con thoi. Những kết quả thử nghiệm từ các hệ thống phát hiện vệ tinh.

Những đề án nghiên cứu của SDI. Bản miêu tả chi tiết về một hệ thống camera do các nhà du hành vũ trụ vận hành.

Không có thông tin nào kể trên gắn nhãn _tuyệt mật._ Không có gì là bí mật, tối mật, thậm chí riêng tư cũng không. Ít nhất, không có tập tin nào gắn những nhãn như vậy.

Thực ra, không có máy tính quân sự nào trên mạng Milnet được phép chứa thông tin mật. Có một mạng máy tính khác, hoàn toàn tách biệt, chuyên xử lý dữ liệu mật. Như vậy, theo một nghĩa nào đó, Bộ phận Không gian của Bộ Chỉ huy Hệ thống không có gì để mất, vì máy tính của họ không phải là bí mật.

Nhưng có một vấn đề ở tầng sâu hơn. Từng tài liệu công khai riêng lẻ không chứa thông tin mật. Nhưng khi gom nhiều tài liệu lại, chúng có thể hé lộ những bí mật. Dĩ nhiên, đơn đặt mua titan từ một nhà sản xuất máy bay không phải là bí mật. Thông tin rằng họ đang thiết kế một máy bay ném bom mới cũng vậy. Nhưng khi kết hợp hai trường dữ liệu trên lại với nhau, thì đây có thể là dấu hiệu chắc chắn cho thấy máy bay ném bom mới của Boeing sẽ được làm từ titan, do đó phải có tốc độ siêu thanh (vì nhôm bình thường không thể chịu được nhiệt độ cao.) Trước đây, để thu thập thông tin từ nhiều nguồn khác nhau, bạn sẽ phải dành hàng tuần trời nghiền ngẫm trong thư viện. Ngày nay, với máy tính và mạng, bạn có thể khớp các bộ dữ liệu trong nháy mắt – cứ xem cách tôi phân tích các hóa đơn điện thoại đường dài của Mitre để tìm ra những nơi gã hacker đã viếng thăm thì biết. Bằng cách phân tích dữ liệu công khai với sự trợ giúp của máy tính, người ta có thể phát hiện ra những bí mật mà không cần xem cơ sở dữ liệu mật.

Từ năm 1985, Phó Đô đốc John Poindexter đã lo lắng về vấn đề này. Ông định tạo ra một tầng phân loại thông tin mới là _Nhạy cảm nhưng không phân loại._

Những thông tin kiểu này phù hợp ở mức bên dưới các mức độ Tối mật, Bí mật và Riêng tư; nhưng một số người nước ngoài sẽ bị từ chối quyền tiếp cận chúng.

Poindexter vụng về thử áp dụng nó trong nghiên cứu hàm lâm – một cách tự nhiên, các trường đại học không đồng tình, và ý tưởng này chết yểu sau đó.

Giờ đây, đứng trước thiết bị theo dõi và nhìn gã hacker sục sạo khắp hệ thống của Bộ Chỉ huy Không gian, tôi mới chợt nhận ra dụng ý của ông. Các dự án SDI của Không quân có thể không phải là những thứ tối mật, nhưng chắc chắn là chúng nhạy cảm.

Cái gì? Tôi đồng tình với Phó Đô đốc Poindexter sao? Người đã tuồn vũ khí cho Iran? Làm sao mà tôi có thể đứng về cùng phe với sếp của Ollie North được chứ? Nhưng những gì đang nhảy múa trên màn hình của tôi đây chính là thứ mà ông đã nói đến: dữ liệu nhạy cảm nhưng không phân loại.

Tymnet trở lại đường dây điện thoại. _Tôi xin lỗi, Cliff, nhưng việc lần dấu ở Đức đang gặp trở ngại._

_Họ không thể lần dấu được cuộc gọi à?_ Tôi hỏi, tuy cũng không biết _họ_

mà tôi nói ở đây là những ai.

_Đường dây của gã hacker đến từ Hannover,_ Steve trả lời. _Nhưng các đường dây điện thoại của Hannover lại kết nối thông qua các bộ chuyển mạch cơ học – những thiết bị phức tạp và đầy tạp âm – mà những thứ này chỉ có thể do con người lần dấu. Không thể lần dấu cuộc gọi với máy tính được._ Tôi bắt đầu hiểu ra. _Ý anh là phải có người ở tổng đài điện thoại để lần dấu cuộc gọi?_

_Đúng. Và bây giờ đã là 10 giờ tối ở Hannover, không có ai ở đó cả._

_Việc cử người đến tổng đài điện thoại sẽ mất bao lâu?_

_Khoảng ba giờ._

Để lần dấu đường dây, kỹ thuật viên của Bundespost sẽ phải trực tiếp đến tổng đài và lần theo các thiết bị chuyển mạch và đường dây. Với những gì tôi biết thì thậm chí anh ta còn phải trèo lên cột dây điện thoại nữa. Quả là tin xấu.

Trong lúc đó, gã hacker vẫn đang tha hồ sục sạo trong máy tính của Không quân. Trung úy Thomas vẫn đang giữ máy – có lẽ lúc này anh ta đang cuống quýt gọi cho tất cả các vị tai to mặt lớn của Không quân. tôi chuyển sang đường dây của Không quân. _À, hôm nay chúng tôi không thể lần dấu thêm được._

_Tôi hiểu rồi. Chúng tôi sẽ chặn gã hacker luôn._

_Đợi đã,_ tôi nói. _Đừng để hắn thấy anh vừa đá hắn ra khỏi hệ thống. Hãy làm sao để hắn không nghi ngờ rằng anh đã biết được hắn._

_Được rồi. Chúng tôi đã có kế hoạch,_ Trung úy Thomas trả lời. _Chúng tôi sẽ gửi thông báo đến tất cả mọi người trong hệ thống rằng máy tính đang gặp trục trặc, cần phải bảo dưỡng._

Hoàn hảo. Gã hacker sẽ tưởng hệ thống được tắt đi để sửa chữa. tôi đợi một lát và thấy ở giữa trang một đề án SDI, một tin nhắn hiện ra trên màn hình của gã hacker.

Đóng hệ thống để bảo dưỡng, sẽ hoạt động trở lại sau 2 giờ.

Nhìn thấy tin nhắn, gã hacker lập tức đăng xuất và biến mất vào hư không.

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

<figure><img src="https://data.nhavantuonglai.com/image/illustrations/cover-nhavantuonglai-com-0147.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>