---
pubDatetime: 2018-11-16T10:10:00Z
title: Clifford Stoll | Gián điệp mạng (Chương 16)
description: Gián điệp mạng là câu chuyện người thật việc thật kể về cuộc săn đuổi hacker bất đắc dĩ của nhà khoa học chuyển tay ngang trở thành chuyên gia mạng máy tính ở Phòng Thí nghiệm Lawrence Berkeley, California, Mỹ.
featured: false
image: https://nhavantuonglai.com/image/cover/001-216.jpg
tags:
  - clifford stoll
  - gian diep mang
  - an ninh mang
  - thu vien
  - van hoc
  - van hoc nuoc ngoai
---

Đoàn điệp viên hẳn sẽ được xem một sô diễn ra trò nếu gã hacker xuất hiện đúng lúc họ đang có mặt ở đây. Nhưng 9 giờ 10 phút sáng hôm sau hắn mới hoạt động. Một lần nữa, chúng tôi lại bắt đầu cuộc lần dấu qua Tymnet và công ty điện thoại; và lại một lần nữa, chúng tôi đã đâm vào ngõ cụt ở đâu đó tại Virginia. Giá mà lệnh lục soát ở California của chúng tôi cũng có hiệu lực ở Virginia… Ngày hôm đó, gã hacker có vẻ tự tin, thậm chí còn kiêu ngạo. Vẫn những thao tác quen thuộc: kiểm tra xem ai đang ở trên hệ thống, chui qua lỗ hổng trong hệ điều hành, liệt kê email. Trước kia, khi thử gõ lệnh mới, thi thoảng hắn lại mắc lỗi. Hôm nay, hắn không sử dụng lệnh mới nào. Mọi thao tác đều trơn tru và dứt khoát. Không hề sai sót.

Cứ như thể hắn muốn khoe tài.

Hắn tiến thẳng vào Kho Quân nhu Anniston và in ra một tập tin ngắn phân tích mức độ sẵn sàng chiến đấu của hệ thống tên lửa trong Lục quân. Sau đó, hắn tìm cách xâm nhập vào Phòng Thí nghiệm Nghiên cứu Đạn đạo của Lục quân ở Aberdeen, Maryland. Chỉ mất một giây để kết nối vào Milnet, nhưng hắn không vượt qua được lớp mật khẩu của BRL.

Hắn khiến tôi mất cả buổi sáng khi cứ loay hoay sục sạo tập tin của các nhà khoa học để tìm kiếm mật khẩu. Ở một khu vực của các nhà vật lý học, hắn tìm thấy một tập tin cũ miêu tả cách truy cập vào một siêu máy tính Cray ở Phòng Thí nghiệm Lawrence Livermore.

Để tránh việc người lạ đoán ra mật khẩu nhằm tiếp cận siêu máy tính của mình, Livermore cũng sử dụng mật khẩu do máy tính tạo ngẫu nhiên, như agnitfom hay ngagk. Theo lẽ tự nhiên, không ai có thể nhớ được những mật khẩu này. Kết quả là gì? Một số người phải lưu mật khẩu trong tập tin ở máy tính. Khóa tổ hợp liệu còn tác dụng gì khi các ký tự trong tổ hợp lại được viết sẵn trên tường? Dave Cleveland, chuyên gia Unix của chúng tôi, theo dõi gã và nói, _Ít nhất thì hắn cũng không thể tiếp cận các máy tính tuyệt mật ở Livermore._

_Tại sao vậy?_

_Hệ thống tuyệt mật của họ được cô lập, hoàn toàn không có liên kết với mạng lưới._

_Vậy thì những mật khẩu này dẫn đến đâu?_

_Livermore có một số máy tính không bí mật, thực hiện các nghiên cứu về năng lượng nhiệt hạch._

_Sao nghe như họ đang chế tạo bom vậy,_ tôi nói. Với tôi, hễ liên quan đến nhiệt hạch có nghĩa là chế tạo bom.

_Họ đang xây dựng các lò phản ứng năng lượng nhiệt hạch để tạo ra nguồn điện giá rẻ. Tức là phản ứng nhiệt hạch trong các trường điện từ hình chiếc bánh donut ấy._

_Tôi biết rồi. Tôi nghịch trò này từ bé mà._

_Tôi cũng nghĩ vậy. Vì đây không phải là hoạt động nghiên cứu vũ khí, nên có thể tiếp cận số máy tính này qua các mạng lưới._

_Chúng ta nên cảnh báo Livermore để họ vô hiệu hóa tài khoản kia._

_Gượm đã. Từ đây không thể kết nối với máy tính của Mạng lưới Năng lượng Nhiệt hạch Từ tính được đâu. Anh bạn hacker của anh cố gắng chỉ mất công thôi._

_Chà, anh ta sẽ không thích điều này đâu._

_Tin tôi đi._

Gã hacker nán lại vài phút nữa rồi ngắt kết nối. Thậm chí hắn còn không tìm cách tiếp cận Livermore.

_Khỏi cần bàn về giả thiết này nữa nhé,_ Dave nhún vai.

Với hy vọng có thể dùng các bản in này làm bằng chứng, Dave và tôi cùng đặt bút ký. Chúng tôi để lại những chiếc máy in ở trạm điều phối, và tôi thong thả quay về văn phòng. Một giờ sau, thiết bị của tôi lại phát ra tiếng bíp: gã hacker đã trở lại.

Nhưng không máy in nào cho thấy dấu hiệu của hắn. Kiểm tra hệ thống Unix, tôi thấy hắn đăng nhập bằng tài khoản Sventek. Nhưng hắn không đi vào qua cổng Tymnet! Tôi vội vàng quét các modem quay số. Hai nhà khoa học đang chỉnh sửa chương trình, một công chức đang liệt kê các bản nháp của một hợp đồng và một sinh viên đang viết thư tình. Không có hoạt động xâm nhập nào. tôi chạy về văn phòng để kiểm tra trạng thái của máy Unix. Sventek, được rồi. Nhưng từ đâu đến? Đây rồi, gã hacker không vào qua đường dây 1.200 baud thông thường. Đó là lý do tại sao hắn không xuất hiện ở trạm điều phối. Không, hắn đến từ mạng cục bộ của chúng tôi. Ethernet. Đường dây cáp màu xanh liên kết hàng trăm thiết bị đầu cuối và trạm máy tính trong phòng thí nghiệm của chúng tôi. tôi chạy đến văn phòng của Wayne. _Này, gã hacker đang ở trên mạng cục bộ của chúng ta._

_Từ từ nào, Cliff. Để tôi xem thử._

Trong văn phòng của Wayne có năm thiết bị đầu cuối, mỗi thiết bị theo dõi một hệ thống riêng. _Đúng rồi, Sventek kìa, trên máy Unix – 4. Hắn muốn làm gì đây?_

_Nhưng hắn là hacker. Và hắn đến từ mạng ethernet dùng cho toàn bộ phòng thí nghiệm này._

_Chuyện lớn rồi. Có rất nhiều cách để đến đó._

Wayne quay sang thiết bị đầu cuối khác. _Tôi sẽ bật chương trình phân tích ethernet để xem ai đang làm gì._

Trong lúc Wayne gõ các thông số, tôi ngồi băn khoăn không biết nên nghĩ sao về việc tìm thấy gã hacker trên mạng cục bộ. Ethernet ở chỗ chúng tôi là một dường dây chung số đi qua mọi văn phòng. Việc hắn tìm được đường vào đây là một tin xấu: có nghĩa là hắn có thể tấn công cả các máy tính cá nhân gắn với đường dây ethernet này.

Nhưng biết đâu đây lại là một tin tốt. Có lẽ gã hacker sống ngay ở Berkeley và làm việc tại phòng thí nghiệm này. Nếu đúng vậy thì chúng tôi sẽ sớm tóm được hắn thôi. Wayne sẽ lần dấu theo đường ethernet để tiếp cận hắn trong bán kính vài mét.

_Kết nối của anh đây này. Hắn đến từ… máy tính kiểm soát mạng MFE._

_Ý anh là gã hacker vào đây qua mạng MFE sao?_

_Đúng. Hắn đến từ Phòng Thí nghiệm Lawrence Livermore. Mạng lưới Năng lượng Nhiệt hạch Từ tính (Magnetic Fusion Energy Network – MFE)._ Tôi chạy ra ngoài sảnh gọi lớn: _Này, Dave! Đoán xem ai đang viếng thăm Livermore kìa?_

Dave thong thả đi tới văn phòng của Wayne. _Làm sao hắn vào được đó? Ở đó không có kết nối nào đến hệ thống Unix của chúng ta cả._

_Tôi không biết làm sao hắn vào được Livermore, nhưng hắn đang ở trên mạng ethernet của chúng ta, và hắn đến từ Livermore._

Dave nhíu mày. _Tôi không biết sao anh lại có thể làm được thế. Gã hacker của anh đã tìm được đường vào hệ thống Unix mà tôi chưa từng biết._

Wayne được cớ, lại tuôn ra những lời chỉ trích Unix quen thuộc. Tôi mặc kệ hai gã kẻ thù truyền kiếp này đấu khẩu với nhau, và gọi cho Livermore.

Phải mất ba cuộc gọi mới gặp được quản lý hệ thống của mạng MFE. _Xin chào, các vị không biết tôi đâu, nhưng có một gã hacker vừa xâm nhập vào hệ thống của các vị đấy._

Một phụ nữ trả lời: _Sao? Anh là ai?_

_Tôi làm việc ở LBL. Có kẻ đang sục sạo trong máy tính của tôi và hắn đến từ mạng MFE. Có vẻ hắn đăng nhập từ Livermore._

_Ôi, chết tiệt. Tôi sẽ quét người dùng… Chỉ có một chương trình đang kết nối từ Livermore đến Berkeley. Tài khoản 1674… của ai đó tên là Cromwell._

_Chính hắn đấy,_ tôi nói. _Gã hacker mới tìm được mật khẩu này khoảng hai giờ trước trong một tập tin lệnh ở Berkeley của chúng tôi._

_Tôi sẽ xóa tài khoản này. Khi nào học được cách giữ gìn mật khẩu, Cromwell sẽ được sử dụng hệ thống của chúng tôi._

Theo góc nhìn nhận của cô, vấn đề này là do những người dùng ngu ngốc gây ra, chứ không phải do hệ thống rắc rối, buộc mọi người phải sử dụng những mật khẩu khó hiểu như agnitfom.

_Cô có thể lần dấu theo kết nối này không?_ Tôi muốn Livermore giữ gã hacker này trên mạng lưới, ít nhất là để kịp thời gian lần dấu đường dây.

_Không, chúng tôi không được phép thực hiện bất kỳ cuộc lần dấu nào cả.

Anh phải nói chuyện với cấp quản lý của chúng tôi trước đã._

_Nhưng đợi tới khi có người ra quyết định, thì gã hacker đã cao chạy xa bay rồi._

_Chúng tôi vận hành một hệ thống an ninh,_ cô nói. _Nếu có người phát hiện ra gã hacker nào ở Livermore, thì nhiều người sẽ phải ra đi._

_Nhưng nếu không truy tìm xem gã hacker từ đâu đến, cô sẽ không thể biết được liệu hắn đã thoát khỏi hệ thống hay chưa._

_Nhiệm vụ của tôi là vận hành máy tính, không phải truy bắt tội phạm.

Đừng lôi tôi vào cuộc săn đuổi viển vông này._

Nói rồi, cô ngắt tất cả các kết nối và vô hiệu hóa tài khoản bị đánh cắp. Gã hacker biến mất khỏi các máy tính của cả Livermore và của chúng tôi.

Có lẽ đó lại là một điều tốt. Dù người quản lý hệ thống kia có thực hiện cuộc lần dấu, thì tôi cũng không thể theo dõi được hành tung của gã hacker. Tôi có thể phát hiện được hắn đang ở trong máy mình. Nhưng mạng MFE kết nối trực tiếp với máy tính của tôi mà không cần đi qua trạm điều phối, nên các máy in sẽ không ghi lại được những gì mà hắn gõ.

Chán nản, tôi quyết định ra canteen ăn trưa. Bất chợt, Luis Alvarez bước tới và ngồi xuống đối diện tôi. Là một nhà phát minh, nhà vật lý học, và từng nhận được giải Nobel, Luie là một nhà bác học của thế kỷ XX. Ông không lãng phí thời gian vào những thủ tục quan liêu mà chỉ quan tâm đến kết quả.

_Thiên văn học thế nào rồi?_

Tuy đã ở địa vị danh giá, ông vẫn dành thời gian nói chuyện với hạng tép riu như tôi. _Vẫn đang làm kính viễn vọng đấy chứ?_

_Không, bây giờ tôi đang làm việc ở trung tâm máy tính. Nhưng lẽ ra phải lo viết chương trình, thì tôi lại mất thời gian truy lùng một gã hacker._

_Có bắt được không?_

_Cứ như đang chơi trò trốn tìm trong đám dây rợ vậy. Ban đầu, tôi nghĩ hắn đến từ Berkeley, sau đó là Oakland, rồi đến Alabama, lại sang Virginia. Vừa rồi, tôi lại phát hiện ra dấu vết của hắn ở Livermore._

_Gọi FBI chưa?_

_Những sáu lần. Nhưng họ có nhiều việc trọng đại hơn phải lo. Bực nhất là không có ai hỗ trợ cả._

Rồi tôi kể cho ông nghe chuyện sáng nay ở Livermore.

_Làm thế là phải rồi. Họ phải lo giữ chỗ của mình chứ._

_Nhưng khỉ thật, tôi muốn giúp họ kia mà. Nhà hàng xóm bị trộm vào họ cũng mặc kệ ._

_Đừng có làm anh hùng nữa, Cliff. Sao anh không coi vấn đề này như chuyện nghiên cứu nhỉ. Không ai quan tâm cả – Livermore không, FBI không. Chúa ơi, trong đôi tuần nữa, có lẽ đến cả ban lãnh đạo phòng thí nghiệm của chúng ta cũng không nốt._

_Họ cho tôi ba tuần. Thời hạn sắp hết rồi._

_Ý tôi là thế đấy. Khi làm nghiên cứu thực sự, anh không thể biết được mình sẽ tốn bao nhiêu tiền, mất bao nhiêu thời gian, hoặc kết quả tìm được là gì.

Anh chỉ biết rằng đó là một lĩnh vực chưa được khám phá và có thể phát hiện được cái gì ở đó._

_Ở địa vị ông thì nói gì chẳng được. Chứ tôi còn phải gánh ba vị quản lý. tôi phải viết chương trình, phải quản lý hệ thống nữa._

_Thì sao nào? Anh đang lần theo một mùi hương thú vị. Anh là một nhà thám hiểm. Hãy hình dung xem đằng sau đó là ai. Một gián điệp quốc tế chưa biết chừng._

_Khả năng nhiều hơn là một tên nhóc cấp ba rỗi việc._

_Nếu vậy thì hãy quên kẻ gây sự đó đi,_ Luis nói. _Đừng cố làm cảnh sát nữa, hãy là một nhà khoa học. Hãy nghiên cứu về những mối liên hệ, những kỹ thuật, những lỗ hổng. Hãy áp dụng các nguyên tắc vật lý. Hãy tìm ra những phương pháp mới để giải quyết vấn đề. Hãy thu thập số liệu thống kê, công bố kết quả, và chỉ tin vào những gì có thể chứng minh. Nhưng đừng loại bỏ những giải pháp khó khả thi – hãy để tâm trí thật cởi mở._

_Nhưng tôi phải làm gì khi đâm vào ngõ cụt đây?_

_Giống như quản lý hệ thống của Livermore à?_ Luie hỏi.

_Hoặc như công ty điện thoại không chịu cung cấp kết quả của cuộc truy lùng. Hay FBI từ chối điều tra. Hay phòng thí nghiệm buộc tôi phải dừng việc này lại trong một vài ngày tới?_

_Ngõ cụt chỉ là ảo giác thôi. Anh để tấm biển _Cấm vào_ ngăn bước chân của mình từ bao giờ thế? Đụng tường thì vòng qua tường mà đi. Vòng qua không được thì trèo lên, trèo lên không được thì chui xuống. Đừng bỏ cuộc là được._

_Nhưng ai sẽ trả lương cho tôi đây?_

_Phép tắc, thứ chết tiệt! Tài trợ vốn, hãy quên nó đi. Không ai chịu trả tiền cho việc nghiên cứu cả đâu; họ chỉ quan tâm đến kết quả mà thôi,_ Luis nói.

_Dĩ nhiên, anh có thể viết một đề án chi tiết để xin được truy bắt gã hacker này. Trong 50 trang giấy, anh sẽ tường trình về những gì anh biết, những gì anh kỳ vọng, và số tiền cần cho vụ này là bao nhiêu. Hãy nhớ kể ra tên của ba người tham khảo uy tín, tính toán tỷ lệ lợi ích đạt được so với chi phí bỏ ra, và liệt kê các công trình anh đã viết. À, đừng quên phần giải trình về mặt lý thuyết._

_Hoặc nếu không, cứ việc truy bắt gã khốn này. Hãy chạy nhanh hơn hắn.

Nhanh hơn ban lãnh đạo phòng thí nghiệm. Đừng đợi chờ ai cả, hãy làm một mình. Hãy khiến sếp vui vẻ, nhưng đừng để ông ta bó tay buộc chân tay anh.

Đừng đưa cho họ một mục tiêu đứng yên._ Tôi hiểu vì sao Luis lại giành được giải Nobel rồi. Vấn đề không phải ông làm gì, mà là ông làm như thế nào. Ông quan tâm đến mọi thứ. Từ một vài viên đá giàu hàm lượng nguyên tố iridium, ông suy luận rằng cách đây khoảng 65 triệu năm, có lẽ các thiên thạch (nguồn iridium) đã va đập vào Trái đất. Trước con mắt nghi ngờ của các nhà cổ sinh vật học, ông khẳng định rằng các thiên thạch này chính là hồi chuông báo tử cho loài khủng long.

Luis Alvarez chưa hề được tận mắt nhìn thấy các phân mảnh hạ nguyên tử đã mang lại giải Nobel cho ông. Ông chỉ chụp ảnh vết tích của chúng trong buồng bọt rồi đem phân tích – từ độ dài của chúng, ông tính ra được tuổi thọ của các hạt này; và qua độ cong, ông tính được điện tích và khối lượng của chúng.

Nghiên cứu của tôi có là gì so với ông, nhưng tôi có gì để mất nào? Biết đâu cách làm của ông cũng sẽ phát huy hiệu quả đối với tôi. Làm thế nào để nghiên cứu một gã hacker theo cách khoa học? 6 giờ 19 phút chiều hôm đó, gã hacker quay trở lại, lần này là qua Tymnet. tôi không buồn nghĩ đến chuyện bám theo nữa – bắt mọi người phải bỏ dở bữa tối làm gì khi mà họ một mực không chịu cung cấp số điện thoại cho tôi.

Thay vào đó, tôi ngồi xem gã hacker kết nối với máy MX, một máy tính PDP – 10 tại phòng thí nghiệm trí tuệ nhân tạo ở MIT, Cambridge, Massachusetts. Hắn đăng nhập bằng tên tài khoản Litwin, và loay hoay mất gần một giờ đồng hồ để học cách sử dụng máy này. Hắn có vẻ chưa quen với hệ thống của MIT, và thường xuyên phải dùng đến tính năng hỗ trợ tự động.

Sau một giờ, hầu như hắn mới chỉ biết được cách liệt kê tập tin.

Có lẽ do những nghiên cứu về trí tuệ nhân tạo quá bí ẩn, nên hắn không tìm được gì nhiều. Dĩ nhiên, hệ điều hành đồ cổ này không có gì che chắn cả – ai cũng đọc được tập tin của nhau. Nhưng gã hacker không nhận ra được điều này: Bản thân việc không thể hiểu được hệ thống này đã là lớp rào chắn tuyệt vời bảo vệ thông tin của họ. tôi lo ngại không biết gã hacker định lạm dụng các kết nối mạng của chúng tôi trong dịp cuối tuần như thế nào. Nhưng thay vì ăn ngủ dầm dề ở phòng máy tính, tôi ngắt tất cả các kết nối. Để che dấu vết, tôi đăng một thông báo cho những người dùng đăng nhập vào hệ thống: _Do việc xây dựng tòa nhà nên tất cả các mạng lưới sẽ bị ngắt cho đến thứ Hai._

Điều này chắc chắn sẽ cách ly gã hacker khỏi Milnet. Bằng cách đếm số lượng những lời phàn nàn, tôi có thể biết bao nhiêu người đang phụ thuộc vào mạng lưới này.

Hóa ra là rất nhiều – đủ để đưa tôi vào rắc rối.

Roy Kerth là người đầu tiên. _Cliff, chúng ta đang bị la ó vì mạng bị ngắt. Hàng chục người than phiền họ không nhận được email. Anh kiểm tra xem thế nào?_

Chắc là ông ấy tin lời thông báo trên rồi! _Vâng, được ạ. Để tôi thử giải quyết xem sao._

Chỉ mất năm phút để cắm lại mạng. Sếp kinh ngạc tưởng tôi có phép màu, còn tôi thì ngậm hột thị.

Nhưng trong lúc mạng bị ngắt, gã hacker lại xuất hiện. Dữ liệu duy nhất được ghi lại là một bản in ra từ thiết bị theo dõi, nhưng chừng đó là đủ. Hắn hoạt động vào lúc 5 giờ 15 phút sáng, và cố gắng kết nối vào một cổng Milnet ở Omaha, Nebraska, nhưng hai phút sau thì biến mất. Từ thư mục mạng lưới, tôi thấy hắn định xâm nhập vào SRI, một nhà thầu quốc phòng tại đây. tôi gọi cho SRI và gặp được Ken Crepea, nhưng anh không thấy ai có ý định tấn công. _Tôi sẽ gọi lại anh nếu thấy điều gì bất thường._

Hai giờ sau, Ken gọi lại. _Cliff, anh sẽ không tin đâu, tôi đã kiểm tra các tập tin kế toán, và đúng là có người vừa xâm nhập vào máy tính của tôi._ Thực ra, tôi tin. _Sao anh biết?_

_Dịp cuối tuần có vài kết nối từ một số địa điểm, qua những tài khoản lẽ ra đã chết rồi._

_Từ những địa điểm nào?_

_Anniston, Alabama, và Livermore, California. Có người đã sử dụng tài khoản cũ của chúng tôi là SAC, trước đây được dùng cho Bộ Chỉ huy Không quân Chiến lược (Strategic Air Command – SAC) ở Omaha này._

_Anh có biết nó bị xâm nhập như thế nào không?_

_Mật khẩu bảo vệ không được tốt lắm,_ Ken nói. _Mật khẩu cũng là SAC. Chúng tôi tệ quá phải không?_

_Hắn định làm gì?_

_Hồ sơ kế toán không cho biết hắn làm gì. Tôi chỉ biết thời điểm hắn kết nối thôi._ Tôi ghi lại thông tin này vào sổ ghi chép. Để bảo vệ hệ thống của mình, Ken sẽ phải thay đổi mật khẩu của tất cả các tài khoản, và yêu cầu từng người đích thân đến nhận mật khẩu mới.

Gã hacker đã ở trên Milnet qua ít nhất hai máy tính khác là Anniston và Livermore. Và có lẽ cả MIT nữa.

MIT! Tôi quên chưa báo cho họ rồi! Tôi gọi tới phòng máy tính của họ, gặp Karren Sollins và nói với cô về vụ xâm nhập tối thứ Sáu. _Đừng lo,_ cô nói, _không có gì nhiều trên máy tính đó đâu, vài tuần nữa chúng tôi cũng thanh lý nó rồi._

_Thật may quá. Cô có thể cho tôi biết ai sở hữu tài khoản Litwin không?_ Tôi muốn biết gã hacker lấy mật khẩu của Litwin từ đâu.

_Anh ấy là một nhà vật lý học plasma ở Đại học Wisconsin,_ cô nói. _Anh ấy sử dụng các máy tính cỡ lớn ở Livermore và chuyển kết quả về hệ thống của chúng tôi._

Chắc anh ấy đã để lại mật khẩu ở MIT trong máy tính ở Livermore.

Gã hacker đã âm thầm theo chân các nhà khoa học từ máy tính này sang máy tính khác, nhặt lấy những mẩu vụn dữ liệu mà họ để lại. Hắn không biết rằng lúc này cũng đang có người âm thầm nhặt lấy những mẩu vụ dữ liệu mà hắn để lại.

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

<figure><img src="https://nhavantuonglai.com/image/cover/001-356.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>