---
pubDatetime: 2024-01-01T10:00:00Z
title: Clifford Stoll | Gián điệp mạng (Chương 01)
description: Gián điệp mạng là câu chuyện người thật việc thật kể về cuộc săn đuổi hacker bất đắc dĩ của nhà khoa học chuyển tay ngang trở thành chuyên gia mạng máy tính ở Phòng Thí nghiệm Lawrence Berkeley, California, Mỹ.
featured: false
image: https://data.nhavantuonglai.com/image/illustrations/cover-nhavantuonglai-com-0357.jpg
tags:
  - clifford stoll
  - gian diep mang
  - an ninh mang
  - thu vien
  - van hoc
  - van hoc nuoc ngoai
---

Tôi mà là chuyên gia ư? Mới tuần trước, tôi vẫn còn là một nhà thiên văn học, bằng lòng với việc ngồi thiết kế thấu kính viễn vọng. Ngẫm lại, tôi đã sống trong thế giới thần tiên của giới hàn lâm. Suốt những năm tháng qua, tôi chưa từng nghĩ phải lập kế hoạch cho tương lai, cho đến tận khi nguồn trợ cấp của tôi cạn kiệt.

May mắn thay, phòng thí nghiệm của tôi lại _tái sử dụng_ các nhà thiên văn học hết thời. Thay vì phải gia nhập đội quân thất nghiệp, tôi được thuyên chuyển từ Đài Quan sát Keck thuộc Phòng Thí nghiệm Lawrence Berkeley xuống trung tâm máy tính ở ngay tầng 1 cùng tòa nhà. tôi có thể khua môi múa mép về tài năng máy tính để gây ấn tượng với các nhà thiên văn học, thậm chí có thể mày mò học hỏi nhanh đến mức bạn đồng nghiệp không đuổi kịp. Nhưng chuyên gia máy tính ư? Ồ, không phải tôi đâu nhé – tôi là một nhà thiên văn học.

Bây giờ thì sao? Tôi bần thần nhìn vào chiếc máy tính, nhưng tâm trí còn mải quay quanh quỹ đạo của các hành tinh và vật lý học thiên văn. Là người mới đến, tôi được phép lựa chọn chỗ ngồi: một ô làm việc có cửa sổ trổ ra Cầu Cổng vàng; hoặc một văn phòng bí hơi, bốn bề là những giá sách cao ngất. Tuy mắc chứng sợ không gian kín, song tôi vẫn quyết chí chọn văn phòng với suy nghĩ nếu tôi có ngủ gật ngay ở bàn thì cũng không ai phát giác. Hai bên hông là văn phòng của hai chuyên gia hệ thống lão luyện Wayne Graves và Dave Cleveland. Tôi sớm biết rõ về những người hàng xóm này thông qua các cuộc cãi vã lặt vặt giữa họ.

Với thái độ coi mọi người đều là những kẻ kém cỏi hoặc lười biếng, Wayne xích mích với tất cả. Nhưng anh hiểu tường tận về hệ thống, từ phần mềm ổ đĩa cho tới ăng – ten vi sóng. Wayne quen dùng dòng máy tính Vax của công ty Digital Equipment và kiên quyết không chấp nhận bất cứ loại nào khác: không IBM, không Unix, không Macintosh.

Dave Cleveland, vị Phật sống điềm đạm của Unix, thường kiên nhẫn ngồi nghe Wayne so sánh tràng giang đại hải các loại máy vi tính. Hiếm có cuộc gặp nào mà Wayne không tranh thủ quảng cáo: _Vax là lựa chọn của giới khoa học khắp mọi nơi và nó có đến 12 cách khác nhau để hỗ trợ xây dựng các chương trình mạnh mẽ._

Dave trả lời: _Thế này nhé, anh cứ việc vuốt ve mua vui cho những kẻ cuồng Vax, còn tôi sẽ lo phần còn lại của thế giới._

Dave không bao giờ để Wayne được tức giận cho thỏa chí, và những lời phàn nàn của anh cuối cùng bị dập tắt dần thành những tràng lẩm bẩm.

Tuyệt vời! Ngay ngày đầu tiên đi làm, tôi đã bị kẹp giữa hai nhân vật thường xuyên lời qua tiếng lại, và niềm hy vọng được ngủ gật trong giờ làm của tôi cũng vì thế mà tiêu tan.

Nhưng ít ra, không ai có thể phàn nàn gì về diện mạo của tôi. Tôi mặc _bộ đồng phục_ tiêu chuẩn của các tập đoàn ở Berkeley: áo sơ – mi nhếch nhác bẩn thỉu, quần jeans bạc màu, mái tóc lòa xòa và đôi giày sneaker rẻ tiền.

Cấp quản lý thi thoảng đeo caravat, nhưng hễ ngày nào họ làm thế là y như rằng ngày đó năng suất làm việc lại đi xuống. tôi cùng với Wayne và Dave vận hành 12 máy tính cỡ lớn – những chú ngựa thồ với tổng giá trị lên tới khoảng 6 triệu dollar, dùng để xử lý các vấn đề về vật lý học – và coi đó là một loại hình dịch vụ tiện tích dành cho toàn bộ phòng thí nghiệm. Nhiệm vụ đặt ra là phải làm sao để các nhà khoa học sử dụng những chiếc máy tính này có thể thấy được một hệ thống điện toán đơn giản, mạnh mẽ và đáng tin cậy như một công ty điện lực. Tức là phải để máy vận hành 24/ 24. Và cũng tương tự công ty điện lực, chúng tôi tính phí cho mỗi chu kỳ điện toán được sử dụng.

Trong 4.000 nhân viên của phòng thí nghiệm, có đến 1.000 người – 1.000 tài khoản – sử dụng máy tính cỡ lớn, mỗi tài khoản trong đó đều được kiểm đếm hằng ngày, và ngay trong mỗi cỗ máy đều cài sẵn sổ cái. Với chi phí thực hiện tính toán là 300 dollar/ giờ, việc ghi chép sổ sách phải hết sức chuẩn xác, nên chúng tôi theo dõi từng trang giấy được in ra, từng khối dung lượng trong đĩa lưu trữ và từng phút thực hiện xử lý. Có một máy tính riêng đảm nhiệm việc thu thập các thông số thống kê này và gửi hóa đơn cho các bộ phận trong phòng thí nghiệm hằng tháng.

Vào ngày làm việc thứ hai, bất chợt Dave ghé vào phòng tôi, miệng lẩm bẩm rằng hệ thống kế toán Unix phát sinh lỗi gì đó. Chắc có người đã sử dụng vài giây tính toán mà không trả phí. Sổ sách trong máy tính thiếu cân đối; hóa đơn tháng trước là 2.387 dollar bị hụt 75 xu.

Một lỗi sai vài nghìn dollar thì ai cũng có thể thấy và rất dễ phát hiện. Nhưng lỗi sai ở đơn vị xu thường nảy sinh từ những vấn đề bị vùi lấp rất sâu, vì thế, một cách tự nhiên, các chuyên gia phần mềm mới vào nghề thường được yêu cầu tìm ra các lỗi kiểu này, như một dạng bài kiểm tra. Dave bảo tôi suy nghĩ về vấn đề đó.

_Ăn cắp cấp độ 1 phải không?_ Tôi hỏi lại.

_Cứ tìm hiểu đi, Cliff, rồi anh sẽ khiến tất cả mọi người ngạc nhiên,_ Dave nói.

Nghĩ đây là một trò hay ho, tôi mày mò tìm hiểu chương trình kế toán. Thì ra phần mềm kế toán của chúng tôi là tác phẩm chắp vá gồm nhiều chương trình được viết bởi những sinh viên thực tập hè vốn đã rời đi từ lâu. Bằng cách nào đó, mớ lộn xộn này lại hoạt động khá trơn tru nên không bị ai để ý.

Nhìn qua một lượt, tôi thấy phần mềm được viết bằng Assembler, Fortran và Cobol, những ngôn ngữ lập trình cổ xưa nhất, có thể ví như việc sử dụng cùng lúc ba ngôn ngữ cổ Hy Lạp, Latin và tiếng Phạn.

Cũng như với hầu hết phần mềm tự chế khác, không ai bận tâm lập hồ sơ ghi chép lại hệ thống kế toán của chúng tôi. Chỉ kẻ ngốc mới tay không sục sạo vào một mê hồn trận như thế.

Dẫu vậy, đây vẫn là một trò giải khuây cho buổi chiều, cũng là cơ hội để khám phá hệ thống. Dave chỉ cho tôi cách hệ thống ghi nhận mỗi lần có người kết nối với máy tính, đăng nhập vào tài khoản người dùng và truy cập vào thiết bị đầu cuối. Nó gắn nhãn thời gian cho từng phiên kết nối, ghi lại mọi tác vụ mà người dùng thực thi, số giây sử dụng bộ xử lý và thời điểm ngắt kết nối.

Dave cho biết chúng tôi có hai hệ thống kế toán độc lập. Phần mềm kế toán Unix thông thường chỉ lưu trữ các bản ghi đã gắn nhãn thời gian vào một tệp tin. Nhưng theo yêu cầu của một số lãnh đạo, Dave xây dựng một hệ thống kế toán thứ hai để lưu giữ các bản ghi chi tiết hơn về những người sử dụng máy tính.

Năm này qua năm khác, từng đoàn sinh viên thực tập hè rỗi việc ngồi gõ chương trình để phân tích tất cả các thông tin kế toán này. Chương trình thứ nhất thu thập dữ liệu rồi giấu vào một tệp tin. Chương trình thứ hai đọc tệp tin đó rồi tính ra mức phí cho phiên sử dụng trên. Chương trình thứ ba thu thập dữ liệu về tất cả các khoản phí này và in thành hóa đơn để gửi cho từng phòng ban. Chương trình cuối cùng cộng tổng tất cả các khoản phí lại rồi so sánh với kết quả lấy từ chương trình kế toán nội bộ của máy tính. Hai tệp tin kế toán riêng biệt, được lưu song song trong hai chương trình khác nhau, phải cho ra đáp án giống hệt nhau.

Suốt cả năm, các chương trình trên vận hành suôn sẻ, và chỉ sang tuần này mới phát sinh sự cố. Nghi phạm hiển nhiên ở đây là lỗi làm tròn. Có lẽ các mục nhập kế toán đều chính xác, nhưng khi cộng lại với nhau, những điểm chênh lệch nhỏ nhặt từ 1/ 10 xu đã tích dần thành 75 xu. Tôi phải chứng minh điều này bằng cách phân tích cách hoạt động của các chương trình này, hoặc kiểm tra chúng với những dữ liệu khác. tôi không tìm hiểu mã của từng chương trình mà viết một đoạn chương trình ngắn nhằm xác minh các tệp dữ liệu. Trong ít phút, tôi đã kiểm tra xong chương trình đầu tiên; kết quả: Không có vấn đề gì, nó đã thu thập dữ liệu kế toán một cách đúng đắn.

Chương trình thứ hai tốn nhiều thời gian hơn. Tôi mất một giờ tạo mã thay thế để chứng minh nó hoạt động tốt. Chương trình này chỉ cộng các khoảng thời gian sử dụng rồi đem nhân với mức phí. Như vậy, lỗi sai 75 xu không nằm ở chương trình này.

Chương trình thứ ba cũng hoạt động trơn tru. Nhiệm vụ của nó là rà soát danh sách người dùng hợp lệ, tìm tài khoản phòng thí nghiệm của họ, rồi in hóa đơn. Lỗi làm tròn ư? Không, tất cả các chương trình này theo dõi dòng tiền với độ chính xác đến 1/ 100 xu. Thật kỳ lạ. Vậy thì lỗi sai 75 xu đến từ đâu? Vì đã trót bỏ ra hàng giờ loay hoay tìm hiểu vấn đề nhỏ nhặt này, nên tôi trở thành kẻ ngoan cố: Chết tiệt, tôi sẽ ở đây đến tận khuya, nếu cần.

Sau khi thực hiện một số kiểm thử khác, tôi bắt đầu tin tưởng đống chương trình kế toán hỗn độn rất _cây nhà lá vườn_ này. Đúng là số dư các tài khoản không cân bằng, nhưng những chương trình này tuy không hoàn hảo song cũng không để lọt xu nào cả. Lúc này, tôi đã tìm được hết các danh sách người dùng hợp lệ, đồng thời cũng hiểu được cách các chương trình này sử dụng cấu trúc dữ liệu để lập hóa đơn cho các phòng ban khác nhau. Khoảng 7 giờ tối, tôi chợt chú ý đến một người dùng là Hunter. Anh chàng này không có địa chỉ xuất hóa đơn hợp lệ.

Đây rồi! Tháng trước Hunter đã sử dụng máy tính, tính ra hết 75 xu phí, nhưng chưa có phòng ban nào đứng ra thanh toán cho anh ta.

Vậy ra đây là nguyên do của khoản chênh lệch. Ai đó đã gây ra sự cố này khi thêm người dùng vào hệ thống của chúng tôi. Một vấn đề nhỏ nhặt do một sai sót nhỏ nhặt gây ra.

Tới lúc ăn mừng được rồi. Khi tôi đang hí hoáy ghi lại chiến công nhỏ đầu tiên này vào trang đầu tiên trong cuốn sổ tay cá nhân, bạn gái tôi, Martha, ghé vào chơi và chúng tôi ăn mừng bằng những ly cappuccino muộn trong quán cà phê Roma ở Berkeley.

Một chuyên gia thực thụ sẽ giải quyết vấn đề này trong vài phút. Nhưng đối với tôi, đây là lĩnh vực còn nhiều lạ lẫm, và việc tìm hiểu nó không hề dễ dàng. Bù lại, qua đó tôi có cơ hội tìm hiểu về hệ thống kế toán và thực hành một số ngôn ngữ lập trình lỗi thời. Ngày hôm sau, tôi gửi email cho Dave, chỉ ra vấn đề để gây ấn tượng với anh ta.

Tới trưa, Dave mang đến một chồng sách hướng dẫn, và lạnh lùng nói rằng anh không hề thêm người dùng nào tên là Hunter – chắc một người quản lý hệ thống khác đã làm điều này.

Wayne trả lời cụt ngủn: _Không phải tôi. ĐTLHDĐ._

Hầu hết những câu nói của anh đều kết thúc với một cụm từ viết tắt, và cụm vừa rồi có nghĩa là: _Đọc tài liệu hướng dẫn đi!_

Nhưng tôi đã đọc sách hướng dẫn rồi. Người quản lý hệ thống không được phép thêm người dùng mới không có tài khoản. Ở các trung tâm máy tính khác, bạn chỉ cần đăng nhập vào một tài khoản đặc quyền và ra lệnh cho hệ thống thêm vào một người dùng mới. Nhưng vì còn phải thực hiện một số mục nhập kế toán nên chúng tôi không thể sử dụng những hệ thống đơn giản như vậy. Hệ thống của chúng tôi tương đối phức tạp và có những chương trình đặc biệt, có thể tự động thực hiện các công việc giấy tờ và sắp xếp lại hệ thống.

Sau khi tham khảo ý kiến xung quanh, tôi thấy mọi người đều nhất trí cho rằng hệ thống tự động này ưu việt đến mức không có ai có thể tùy ý thêm người dùng mới bằng phương thức thủ công. Và hệ thống tự động cũng sẽ không mắc phải sai lầm này. tôi không thể tìm ra người đã mắc sai lầm ngớ ngẩn này. Không ai biết Hunter là ai, mà cũng không hề có tài khoản nào lập riêng cho anh ta. Vậy nên, tôi đã xóa tên này ra khỏi hệ thống – nếu anh ta lên tiếng thắc mắc, chúng tôi sẽ mở tài khoản đàng hoàng.

Một ngày sau, một máy tính lạ có tên Dockmaster gửi email cho chúng tôi.

Quản lý hệ thống của nó cho biết vào cuối tuần qua, có người từ phòng thí nghiệm của chúng tôi đã tìm cách xâm nhập vào máy tính của anh ta.

Các dấu hiệu cho thấy địa chỉ hồi âm của Dockmaster có thể là ở Maryland.

Email này đã đi qua khoảng 12 máy tính khác nhau, và mỗi máy tính đều để lại dấu bưu chính.

Dave trả lời với giọng lấp lửng: _Chúng tôi sẽ xem xét việc này._

Chắc chắn rồi, chúng tôi sẽ xem xét khi mọi vấn đề khác của chúng tôi được xử lý xong.

Các máy tính trong phòng thí nghiệm của chúng tôi kết nối với hàng nghìn hệ thống khác thông qua hàng chục mạng lưới khác nhau. Các nhà khoa học ở đây có thể đăng nhập vào hệ thống máy tính, rồi kết nối với một máy tính ở xa. Sau đó, họ có thể truy cập vào máy tính ở xa kia bằng cách nhập tên tài khoản và mật khẩu. Về mặt nguyên tắc, thứ duy nhất bảo vệ cho một máy tính đã được nối mạng là mật khẩu, vì tên tài khoản rất dễ phát hiện. (Bạn tìm tên tài khoản bằng cách nào? Chỉ cần sử dụng danh bạ điện thoại – hầu hết mọi người đều lấy tên mình làm tên tài khoản trên máy tính.) Email của Dockmaster đã gây tò mò, và Dave chuyển tiếp nó cho Wayne cùng với một câu hỏi: _Dockmaster là ai vậy?_

Wayne chuyển tiếp email đó cho tôi kèm lời phỏng đoán: _Có lẽ là một ngân hàng nào đó._

Cuối cùng, Wayne hỏi ý kiến tôi. Theo tôi, Dockmaster là một xưởng đóng tàu của Hải quân. Chuyện đó không quan trọng, nhưng dù sao cũng nên tìm hiểu qua một chút.

Email trên cho biết thời gian người ở hệ thống máy tính Unix của chúng tôi tìm cách truy cập vào máy tính của Dockmaster. Vì thế, tôi lại sục sạo đống tệp tin dữ liệu kế toán, săm soi bản ghi các hoạt động vào sáng thứ Bảy. Một lần nữa, hai hệ thống kế toán lại mâu thuẫn nhau. Tệp tin kế toán của hệ thống Unix cho thấy một người dùng tên Sventek đã đăng nhập vào lúc 8 giờ 25 phút sáng nhưng không có hoạt động gì trong nửa giờ, sau đó ngắt kết nối. Không có hoạt động gắn nhãn thời gian nào trong khoảng này. Phần mềm tự chế của chúng tôi cũng ghi nhận hoạt động của Sventek, nhưng nó chỉ ra rằng anh ta đã sử dụng mạng từ 8 giờ 31 phút đến 9 giờ 31 phút sáng.

Tệ quá! Vậy là lại có thêm một vấn đề nữa về kế toán. Các nhãn thời gian không khớp nhau. Một hệ thống ghi nhận có hoạt động trong khi hệ thống kia lại không báo gì.

Do bận vài việc khác cấp bách hơn, tôi tạm gác lại việc này. Sau khi đã lãng phí cả buổi chiều bám theo sai lầm của một quản lý hệ thống nào đó, tôi chưa định động vào hệ thống kế toán một lần nữa.

Trong bữa trưa với Dave, tôi nói rằng Sventek là người duy nhất truy cập mạng lưới vào thời điểm Dockmaster báo có xâm nhập. Dave tròn mắt nhìn tôi và nói: _Joe Sventek à? Anh ta đang ở Cambridge kia mà. Cambridge, tận bên Anh ấy. Anh ta quay lại đây làm gì?_

Hóa ra trước đây, Joe Sventek là chuyên gia về Unix của phòng thí nghiệm này, một bậc thầy về phần mềm đã xây dựng nên hàng chục chương trình quan trọng trong suốt 10 năm qua.

Một năm trước, Joe chuyển tới Anh sinh sống, nhưng tiếng tăm của anh vẫn lừng lẫy khắp cộng đồng máy tính ở California.

Dave không cho rằng Joe đã quay về, vì bạn bè Joe cũng không hay biết gì cả. _Chắc anh ta truy cập vào hệ thống của chúng ta từ mạng máy tính nào đó,_ Dave nói.

_Vậy là theo anh, Joe là nguyên nhân của vấn đề này?_ Tôi hỏi Dave.

_Không thể nào,_ Dave trả lời. _Joe là hacker thuộc trường phái cũ. Một tay lập trình viên thông minh, nhanh nhẹn và giỏi giang. Không phải đám ngựa non háu đá ngày nay đang làm vấy bẩn danh xưng hacker. Hơn nữa, Sventek tìm cách xâm nhập vào máy tính ở Maryland làm gì. Mà nếu đúng thế đi nữa, thì anh ta chắc chắn sẽ làm được và không để lại dấu vết gì._

Thật kỳ quặc: Joe Sventek đã ở Anh suốt một năm qua, vậy mà lại đường đột xuất hiện vào sáng sớm ngày thứ Bảy, tìm cách xâm nhập vào một máy tính ở Maryland, rồi ngắt kết nối, để lại đằng sau một hệ thống kế toán mất cân đối. Tôi kể chuyện này với Wayne khi gặp anh ở sảnh, nhưng Wayne lại tình cờ biết được tin rằng Joe vẫn ở Anh và đang đi nghỉ trong một vùng rừng hẻo lánh, không có máy tính. _Quên cái email của Dockmaster đi. Sventek sắp về thăm Berkeley STM, và anh ta sẽ phá tan mọi nghi ngờ._ STM? Sớm Thôi Mà. Đó là cách nói của Wayne, dịch nghĩa ra là: _Tôi không biết đến bao giờ._

Nhưng mối lo lắng của tôi không nằm ở Sventek, mà ở những tài khoản thiếu cân đối. Tại sao hai hệ thống kế toán lại duy trì hai hệ thời gian khác nhau? Và tại sao lại có một số hoạt động được hệ thống này ghi lại mà hệ thống kia thì không? Tiếp tục loay hoay với hệ thống kế toán thêm một buổi chiều nữa, tôi phát hiện ra rằng sự chênh lệch 5 phút giữa hai nhãn thời gian là do số giờ bị lệch của các máy tính khác nhau trong phòng thí nghiệm cộng lại qua các tháng.

Mỗi ngày, một máy tính của chúng tôi lại chậm đi vài giây.

Nhưng lẽ ra các hoạt động của Sventek đều phải được ghi lại trong cả 2 hệ thống chứ! Điều này có liên quan gì đến vấn đề kế toán trước đó không? Tôi có làm gì sơ sẩy khi sục sạo vào hệ thống tuần trước không? Hay liệu có lời giải thích nào khác không?

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

<figure><img src="https://data.nhavantuonglai.com/image/illustrations/cover-nhavantuonglai-com-0211.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>