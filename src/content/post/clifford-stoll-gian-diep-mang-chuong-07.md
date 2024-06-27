---
pubDatetime: 2024-01-07T10:00:00Z
title: Clifford Stoll | Gián điệp mạng (Chương 07)
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

Buổi sáng sau hôm chúng tôi theo dõi gã hacker xâm nhập vào máy tính, sếp đi gặp Aletha Owens, luật sư của phòng thí nghiệm. Aletha không quan tâm đến chuyện máy tính, nhưng cảnh giác trước những vấn đề sắp xảy đến.

Cô vội vã gọi ngay cho FBI.

Văn phòng FBI địa phương thờ ơ trước tin này. Fred Wyniken, đặc vụ ở chi nhánh Oakland, ngờ vực hỏi: _Các vị gọi cho chúng tôi chỉ vì mất 75 xu thời gian sử dụng máy tính ư?_

Aletha cố gắng giải thích về an ninh thông tin và giá trị dữ liệu của chúng tôi. Wyniken cắt ngang: _Nghe này, nếu các vị chứng minh được rằng các vị bị thiệt hại hơn 1 triệu dollar, hoặc có kẻ tọc mạch vào dữ liệu mật, thì khi đó chúng tôi sẽ mở cuộc điều tra. Bằng không thì hãy để chúng tôi yên._

Vâng, tùy theo cách nhìn nhận của mỗi người, dữ liệu của chúng tôi hoặc là vô giá trị hoặc là đáng giá tỷ tỷ dollar. Cấu trúc của một enzyme đáng giá bao nhiêu? Giá trị của một chất siêu dẫn nhiệt độ cao là bao nhiêu? FBI nghĩ theo hướng những cuộc biển thủ ngân hàng; chúng tôi thì lại sống trong thế giới nghiên cứu. Dữ liệu mật ư? Chúng tôi đâu phải là căn cứ quân sự hay phòng thí nghiệm vũ khí nguyên tử.

Dù vậy, chúng tôi vẫn cần đến sự hợp tác của FBI. Lần tới, khi gã hacker này xuất hiện, chúng tôi sẽ bám theo hắn đến số điện thoại truy cập của Tymnet ở Oakland. Từ đó, tôi hy vọng có thể lần theo dấu vết điện thoại để tìm ra hắn. Nhưng nghe nói hãng điện thoại không đời nào chịu lần dấu đường dây khi không có lệnh lục soát. Và để có được lệnh đó, chúng tôi cần đến FBI.

Trước thái độ bất hợp tác của FBI, Aletha gọi cho ủy viên công tố quận.

Ngài công tố viên đại diện cho Oakland không hỏi vòng vo: _Có kẻ xâm nhập vào hệ thống của các vị sao? Tệ thật, hãy lấy lệnh lục soát và lần dấu vết theo các đường dây đi._

FBI có thể không thèm quan tâm, nhưng các vị công tố viên của chúng tôi lại rất sốt sắng trước câu chuyện này. Nhưng họ còn phải thuyết phục thẩm phán nữa. Lệnh lục soát kia ít nhất một tuần nữa mới về đến tay chúng tôi.

Quá 5 giờ một chút, Dave ghé vào văn phòng tôi và nói về vụ xâm nhập.

_Cliff này, gã hacker không đến từ Berkeley đâu._

_Làm sao anh biết?_

_Anh thấy hắn gõ lệnh ps – eafg, đúng không?_

_Đúng, bản in đây này,_ tôi trả lời. _Đó chỉ là một lệnh Unix bình thường để liệt kê tất cả các chương trình đang hoạt động – `ps` có nghĩa là print status (trạng thái in), còn bốn kí tự kia điều chỉnh màn hình hiển thị. Xét ở một góc độ, chúng giống như những núm điều chỉnh trên máy nghe nhạc vậy – chúng thay đổi cách vận hành của câu lệnh._

_Cliff, tôi biết anh quen thuộc với Unix phiên bản Berkeley. Kể từ khi Unix Berkeley ra đời đến nay, chúng ta gõ ps một cách máy móc để kiểm tra những gì đang diễn ra trong hệ thống. Nhưng anh thử nói tôi nghe xem nào, bốn kí tự kia điều chỉnh cái gì?_

Dave nắm thóp rằng tôi không biết gì về các lệnh bí ẩn của Unix. Tôi vận dụng hết những gì mình biết được để đưa ra câu trả lời: _À thì, cờ hiệu e có nghĩa là liệt kê cả tên chương trình và môi trường, cờ hiệu a liệt kê chương trình của tất cả mọi người chứ không chỉ liệt kê riêng chương trình của anh.

Như vậy, gã hacker này muốn biết về mọi chương trình đang chạy trong hệ thống.

_Anh nói đúng một nửa rồi. Vậy còn cờ hiệu `g` và `f` để làm gì?_

_Tôi không biết._

Dave dồn tôi đến khi tôi thừa nhận sự ngu dốt của mình.

_Cờ hiệu `g` là để liệt kê tất cả các chương trình thú vị và không thú vị. Mọi chương trình nhỏ nhặt, như kế toán, sẽ hiện ra. Các chương trình ẩn cũng vậy._

_Và chúng ta biết rằng hắn đang táy máy nghịch ngợm chương trình kế toán._

Dave cười. _Vậy là còn lại cờ hiệu `f`. Nó không tồn tại trong Unix Berkeley. Đó là cách liệt kê các tệp tin trong từng chương trình của Unix phiên bản AT&T. Unix Berkeley thực hiện việc này một cách tự động và không cần đến cờ hiệu `f`. Anh bạn của chúng ta không biết về Unix Berkeley. Hắn thuộc một trường phái Unix lỗi thời._

Hệ điều hành Unix được phát minh vào đầu thập niên 1970 tại Phòng Thí nghiệm Bell của AT&T ở New Jersey. Cuối thập niên 1970, những kẻ cuồng tín Unix từ Phòng Thí nghiệm Bell tới thăm Đại học Berkeley, và thế là một phiên bản Unix mới và phong phú hơn ra đời. Cùng với bồn tắm nước nóng, trường phái chính trị cánh tả và phong trào tự do ngôn luận, Berkeley còn nổi tiếng về việc triển khai hệ điều hành Unix riêng.

Một sự phân tách diễn ra giữa những người ủng hộ phiên bản Unix nhỏ gọn của AT&T và những người yêu thích phiên bản phức tạp hơn của Berkeley.

Nhiều hội thảo đã được tổ chức, nhiều tiêu chuẩn và lời hứa hẹn đã được đưa ra, nhưng bóng dáng của sự đồng thuận vẫn chưa thấy đâu, và thế giới tồn tại hai hệ điều hành Unix cạnh tranh nhau.

Dĩ nhiên, như tất cả những người có suy nghĩ đúng đắn khác, phòng thí nghiệm của chúng tôi sử dụng Unix Berkeley. Người ta nói rằng dân Bờ Đông thiên vị Unix của AT&T hơn, nhưng suy cho cùng thì họ đâu phải những người phát minh ra bồn tắm nước nóng.

Từ một ký tự đơn lẻ, Dave đã loại trừ toàn bộ cộng đồng máy tính của Bờ Tây. Một hacker ở Berkeley vẫn có thể sử dụng lệnh kiểu cũ, nhưng Dave bác bỏ khả năng đó. _Đây là kẻ chưa bao giờ sử dụng Unix Berkeley._

Anh hít một hơi thở sâu và thì thầm: _Một kẻ mọi rợ._

Wayne không đếm xỉa gì đến Unix. Là con nghiện VMS, Wayne là một kẻ vô đạo ở đây. Hơn nữa, anh cho rằng gã hacker không thể biết được điều gì từ tệp tin mật khẩu: _Không ai giải mã được đống mật khẩu đó. Hắn chỉ biết được tên chúng ta thôi. Sao phải bận tâm chuyện đó làm gì chứ?_

Thực ra tôi đã nghĩ về điều này rồi. Mật khẩu là trọng tâm an ninh ở máy tính lớn. Máy tính gia dụng không cần mật khẩu vì chỉ có một người dùng.

Bất kỳ ai ngồi ở bàn phím đều có thể cũng truy cập bất kỳ chương trình nào.

Nhưng khi có 10 hoặc 20 người cùng sử dụng chung một hệ thống, thì máy tính phải làm sao để bảo đảm rằng người ở thiết bị đầu cuối kia không phải là một kẻ mạo danh.

Đóng vai trò như một chữ ký điện tử, mật khẩu thẩm định sự xác thực của một giao dịch. Máy ATM, thẻ điện thoại, mạng chuyển tiền điện tử, thậm chí cả máy trả lời điện thoại trong gia đình đều phụ thuộc vào mật khẩu. Bằng cách đánh cắp hoặc giả mạo mật khẩu, hacker có thể tạo tài sản giả tạo, đánh cắp các dịch vụ, hay chuyển tiền vào những rubber check. Khi tiền được lưu trữ trong két, những kẻ phá két phải tấn công vào khóa tổ hợp . Còn trong trường hợp này, hàng rào an ninh chỉ là các bit trong bộ nhớ máy tính, kẻ trộm sẽ nhắm vào mật khẩu.

Khi máy tính của bạn có 50 hay 100 người dùng, có lẽ bạn sẽ lưu mật khẩu của từng người vào một tệp tin. Khi người dùng đăng nhập, bạn chỉ cần hỏi mật khẩu và so sánh nó với mật khẩu tương ứng lưu trong tệp tin. Trong một môi trường thân thiện thì không có vấn đề gì. Nhưng làm thế nào để ngăn người khác khỏi tọc mạch nhìn lén vào tệp tin mật khẩu? Câu trả lời là hãy bảo vệ tệp tin mật khẩu sao cho chỉ hệ thống mới có thể đọc nó.

Dù bạn đã bảo vệ tệp tin mật khẩu, nhưng thi thoảng tất cả các tệp tin lại được sao chép vào băng dự phòng. Một lập trình viên mới vào nghề cũng có thể đọc được các băng này trên một máy tính khác và liệt kê ra nội dung của tệp tin mật khẩu. Như vậy, việc bảo vệ tệp tin đơn thuần là chưa đủ.

Năm 1975, Bob Morris và Fred Grampp của Phòng Thí nghiệm Bell đã tìm ra một cách giúp bảo vệ mật khẩu, ngay cả khi tệp tin chứa chúng không được bảo đảm an ninh. Phương pháp của họ dựa vào việc mã hóa chứ không dựa vào việc bảo vệ tệp tin. Nếu bạn chọn mật khẩu là `cradle`, máy tính sẽ không đơn thuần lưu sự lựa chọn đó vào tệp tin mật khẩu. Thay vào đó, Unix sẽ làm làm rối tung các ký tự thành một từ được mã hóa, ví dụ `pn6yywersyq`. Tức là máy tính sẽ lưu mật khẩu mã hóa chứ không lưu văn bản thuần túy.

Như vậy, một tệp tin mật khẩu của Unix sẽ trông như sau: `Aaron: fnqs24lkcvs Blacker: anvpqw0xcsr Blatz: pn6yywersyq Goldman: mwe785jcy12 Henderson: rp2d9cl49b7`.

Sau mỗi tên tài khoản là một mật khẩu đã được mã hóa. Như Wayne đã nói, việc đánh cắp tệp tin mật khẩu chỉ cho ra một danh sách người dùng.

Chương trình máy tính thực hiện quá trình mã hóa từ `cradle` thành `pn6yywersyq` được xây dựng dựa trên thuật toán cửa lật, tức một quá trình rất dễ thực hiện theo chiều xuôi, nhưng rất khó đảo lại theo chiều ngược.

Khi Sally Blatz đăng nhập, cô gõ tên tài khoản của mình là Blatz và mật khẩu `cradle`. Hệ thống sẽ mã hóa mật khẩu này thành `pn6yywersyq` rồi so sánh với mục nhập tương ứng trong tệp tin mật khẩu. Nếu hai mục nhập đã được mã hóa này không khớp với nhau, Sally sẽ không được truy cập nữa.

Yếu tố được so sánh ở đây không phải là mật khẩu bằng văn bản thuần túy, mà là phiên bản mã hóa của nó. Sự an nguy của mật khẩu phụ thuộc vào hàm cửa lật.

Có thể ví hàm cửa lật như bánh cóc toán học: Bạn có thể xoay nó về phía trước, nhưng không thể xoay nó về phía sau. Hàm này nhanh chóng phiên dịch văn bản thành mật mã. Để ngăn chặn việc đánh cắp những chiếc khóa này, phải làm sao để việc đảo ngược thuật toán trở thành bất khả thi.

Các hàm cửa lật của chúng tôi được xây dựng dựa trên Tiêu chuẩn Mã hóa Dữ liệu (Data Encryption Standard – DES) do IBM và Cơ quan An ninh Quốc gia (National Security Agency – NSA) phát triển. Chúng tôi có nghe râm ran tin đồn rằng các điệp viên của NSA đã làm suy yếu DES để NSA có thể bẻ mã được nhưng vẫn giữ nó ở mức đủ mạnh để người bình thường không thể quấy phá. Cũng theo tin đồn, việc này giúp NSA có thể bẻ mã và đọc nội dung tin nhắn, nhưng ngoài họ ra, không có ai khác làm được chuyện này.

Phần mềm mã hóa theo chuẩn DES trong máy Unix của chúng tôi được để ở chế độ công khai. NSA đã phân tích những điểm mạnh và điểm yếu của nó, nhưng những báo cáo này được giữ bí mật. Thi thoảng lại dấy lên những đồn đoán rằng có người đang tìm cách giải mật mã này, nhưng chưa có ai thành công. Trong lúc chờ NSA công bố những phân tích về DES, chúng tôi không có sự lựa chọn nào khác ngoài việc tin tưởng rằng quá trình mã hóa của mình là chắc chắn.

Wayne và tôi đã chứng kiến cảnh gã hacker xâm nhập và đánh cắp tệp tin mật khẩu. Bây giờ, hắn đã biết tên của vài trăm nhà khoa học. Chưa biết chừng hắn cũng đã kịp truy vấn danh bạ điện thoại của chúng tôi – ít nhất thì danh bạ cũng có thông tin địa chỉ trong đó. Trừ khi hắn sở hữu trong tay một siêu máy tính của Cray, hắn sẽ không thể đảo ngược hàm cửa lật, và mật khẩu của chúng tôi vẫn an toàn.

Những Wayne vẫn chưa hết lo lắng. _Biết đâu hắn đã tìm ra cách khôn ngoan nào đó để đảo ngược hàm cửa lật. Cẩn tắc vô ưu, hãy thay đổi những mật khẩu quan trọng của chúng ta đi._ Tôi khó lòng mà phản đối được. Suốt mấy năm nay mật khẩu hệ thống vẫn giữ nguyên, dù rằng người đến người đi cũng khá nhiều rồi. Tôi không phiền hà chuyện đổi mật khẩu; để chắc ăn, mỗi máy tôi lại dùng một mật khẩu khác. Nếu gã hacker lần ra được mật khẩu của tôi ở máy Unix – 4, hắn vẫn không thể đoán được mật khẩu ở những máy khác.

Trước khi đạp xe về nhà, tôi nghiền ngẫm lại bản in phiên truy cập ngày hôm trước. Ẩn giấu trong 10 trang giấy này là những manh mối về con người, vị trí và mục đích của gã hacker. Nhưng có quá nhiều điểm mâu thuẫn: Chúng tôi bám theo dấu vết của hắn từ Tymnet tới Oakland, California. Nhưng Dave không cho rằng hắn đến từ Berkeley. Hắn sao chép tệp tin mật khẩu, nhưng chương trình mã hóa của chúng tôi đã biến nó thành đồ bỏ đi. Hắn đang làm gì với những mật khẩu mã hóa đó? Xét ở góc độ nào đó, chuyện này giống như trong ngành thiên văn học vậy.

Chúng tôi thụ động quan sát một hiện tượng, và từ một vài manh mối, chúng tôi tìm cách giải thích sự kiện và tìm kiếm điểm khởi nguồn của nó. Giới thiên văn học đã quen với việc thu thập dữ liệu trong yên lặng, thường là bằng cách đứng yên bất động đằng sau ống kính viễn vọng trên một đỉnh núi. Còn ở đây, dữ liệu thi thoảng lại xuất hiện, từ một nguồn gốc bí ẩn.

Thay vì tìm hiểu nhiệt động lực học và quang học, tôi cần phải tìm hiểu về mật mã học và các hệ điều hành. Theo một cách nào đó, có tồn tại một kết nối vật lý giữa hệ thống của chúng tôi với thiết bị đầu cuối xa lạ kia. Khi vận dụng kiến thức vật lý thông thường, có lẽ chúng tôi sẽ hiểu được điều gì đang diễn ra.

Vật lý học: đó là chìa khóa. Hãy ghi lại những quan sát của bạn. Hãy áp dụng các nguyên tắc vật lý. Có thể phỏng đoán, nhưng chỉ tin tưởng vào những kết luận đã được chứng minh. Để tiếp tục, tôi sẽ phải coi nhiệm vụ này như bài toán vật lý của một người mới vào nghề. Đến lúc phải cập nhật sổ ghi chép rồi.

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

<figure><img src="https://data.nhavantuonglai.com/image/illustrations/cover-nhavantuonglai-com-0017.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>