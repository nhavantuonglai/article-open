---
pubDatetime: 2024-02-25T10:00:00Z
title: Clifford Stoll | Gián điệp mạng (Chương 55)
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

_Xin chào, có phải Markus Hess ở Hannover không?_

_Đúng._

_Tôi là Richard Covey, phóng viên ở California. Tôi có thể nói chuyện với anh không?_

_Tôi không thể nói chuyện._

_Về vụ xâm nhập máy tính này – anh có thể cho tôi biết anh làm một mình hay chung với ai khác không?_

_Tôi không thể trả lời được. Vụ này vẫn đang được thụ lý ở tòa án Đức._

_Mục đích của anh là gì?_

_Chỉ đơn thuần là sở thích thôi._

_Anh là sinh viên à?_

_À, vâng. Tôi không thể nói qua điện thoại vì tôi không tin cậy đường dây này. Có thể nó đang bị nghe lén._

_Anh có luật sư không?_

_Có._

_Tên của anh ta là gì?_

Không trả lời.

_Anh có biết Laszlo Balogh ở Pittsburgh không?_

_Không. Chưa hề nghe về anh ta, ngoại trừ những câu chuyện trên báo._

_Anh có thể đoán xem Balogh lấy được những dữ liệu giả này như thế nào không?_

_Tôi không thể trả lời câu hỏi này được._

_Anh có làm việc với ai không?_

_Tôi không nói được. Tôi không thoải mái khi nói chuyện. Tôi không chắc là đường dây này có sạch không._

_Anh có phải là gián điệp không?_

_Ha ha. Thật tức cười khi có người tin vào chuyện này. Tôi chỉ tò mò thôi._

_Anh có thể đoán làm sao dữ liệu lại tới được Pittsburgh không?_

_Không, tôi không đoán được. Tôi không cho ai xem nó cả. Nếu tôi còn tiếp tục nói nữa sẽ rất nguy hiểm, vì tôi không chắc đường dây này sạch._

_Anh có được trả thù lao không?_

_Tôi phải đi đây. Tôi không thể nói._

Markus Hess cúp máy. Vậy ra con chim tu hú của tôi tên là Markus Hess.

Hắn biết nói tiếng Anh, nhưng không nói theo lối tắt được. Và hắn vẫn mang thái độ đa nghi cả trên điện thoại lẫn trong máy tính – lúc nào cũng dè chừng. Báo chí Đức miêu tả Hess 25 tuổi, cao 1,78 mét, vai rộng, và được bạn bè miêu tả là một lập trình viên có kiến thức vững về Unix nhưng không quá thông minh. Và hắn nghiện thuốc lá của hãng Benson & Hedges. tôi lại mở cuốn danh bạ điện thoại của Hannover. Được rồi, vậy là tôi đã biết tên hắn, nhưng hắn là ai? Hắn định làm gì? Từ Berkeley, tôi sẽ không thể nào tìm hiểu ngọn ngành được.

Có lẽ tôi nên gọi cho ai đó ở Đức. Tôi biết những ai ở đó nhỉ? Vài sinh viên ở Viện Max Planck. Vài nhà thiên văn học ở Darmstadt. Và một người bạn đại học ở Hamburg.

Cuối mùa hè, một người bạn của bạn tôi gửi thư cho tôi: _Tôi cần một nơi để ở khi tới San Francisco. Anh có phiền nếu tôi xin ngủ trên sàn nhà anh không?_

Nghe như giọng của một học sinh cấp ba nước ngoài đi du lịch.

Martha, Claudia, và tôi không cung cấp dịch vụ nhà nghỉ cho giới trẻ, nhưng cửa nhà chúng tôi luôn rộng mở đón khách đến chơi. Michael Sperber nghỉ lại đây vài đêm và làm chúng tôi cười bò với những câu chuyện về chuyến tham quan nước Mỹ của anh. Nhưng có một điều thú vị đối với tôi: bố anh, Jochen Sperber, là một phóng viên ở miền Bắc nước Đức và có thể liên lạc với giới hacker khắp vùng Hannover. tôi gặp may rồi. Một cách tình cờ, tôi lại tìm được một người tò mò, kiên nhẫn, và có khả năng đào xới tìm sự thật ở Đức. Trong năm tháng tiếp theo, Jochen Sperber đã tìm đủ thông tin để có thể ghép lại được thành một câu chuyện ở đoạn cuối con đường.

Chuyện gì đã xảy ra? Đây là ước đoán của tôi, dựa vào những bài phỏng vấn, báo cáo của cảnh sát, thông tin trên mặt báo, và tin nhắn từ các lập trình viên người Đức.

Bấy lâu nay tôi đã đuổi theo một cái bóng. Giờ thì tôi có thể phác họa một bức chân dung được rồi.

Đầu thập niên 1980, Bundespost mở rộng dịch vụ điện thoại sang mảng kết nối dữ liệu, gọi là dịch vụ Datex. Tuy bắt đầu chậm chạp, nhưng tới năm 1985, các công ty và trường đại học bắt đầu đăng ký sử dụng. Đó là một phương thức thuận tiện – và rẻ – để liên kết các máy tính trên toàn nước Đức.

Cũng như ở mọi nơi khác, giới sinh viên bắt đầu khai thác dịch vụ này. Đầu tiên, họ phát hiện ra những thiếu sót trong hàng rào bảo vệ hệ thống; sau đó, họ tìm ra cách kết nối với nước ngoài thông qua mạng lưới này. Bundespost mải khởi động Datex nên gần như đã bỏ qua những hacker này.

Một nhóm hacker bắt đầu thành lập Câu lạc bộ Máy tính Hỗn loạn, với thành viên là những người chuyên tạo virus, xâm nhập máy tính, và được coi là thành phần nổi loạn trong cộng đồng máy tính. Một số là những kẻ nổi loạn trong không gian mạng; một số đã sử dụng máy tính rất thành thạo; số khác lại chỉ là những người mới bắt đầu. Thông qua các bảng tin điện tử và đường dây điện thoại, chúng trao đổi nặc danh với nhau số điện thoại của những máy tính đã bị đột nhập, cả mật khẩu và mã số thẻ tín dụng bị đánh cắp nữa.

Markus Hess biết về Câu lạc bộ Hỗn loạn, nhưng hắn chưa bao giờ là nhân vật trung tâm ở đó. Thực ra, hắn giữ khoảng cách với tổ chức này và làm hacker tự do. Ban ngày, hắn làm việc cho một công ty phần mềm nhỏ ở trung tâm thành phố Hannover.

Qua đường dây điện thoại bị nhiễu sóng, Jochen Sperber nói với tôi, _Anh thấy đấy, Hess biết Hagbard, người giữ liên lạc với các hacker khác ở Đức, như Pengo và Bresinsky. Hagbard là một biệt danh, chắc chắn rồi. Tên thật của hắn là…_

Hagbard. Tôi đã từng nghe đến tên này. Sau khi gác máy, tôi tìm kiếm từ Hagbard trong sổ ghi chép của mình. Đây rồi – hắn đã xâm nhập vào Fermilab và Stanford. Nhưng hình như tôi còn gặp ở đâu nữa thì phải. Tôi tìm kiếm cơ sở dữ liệu ở trường và hỏi bạn bè. Không có gì cả. Trong ba ngày tiếp theo, tôi hỏi tất cả mọi người mà tôi gặp với hy vọng sẽ có người chẳng may nhớ ra.

Cuối cùng, trong một hiệu sách ở Berkeley, một người phụ nữ đứng sau quầy nói, _Hagbard là anh hùng trong những cuốn sách về Illuminati._

Đó là một series tiểu thuyết khoa học viễn tưởng kể về một âm mưu kiểm soát thế giới. Illuminati vận hành – và phá hủy – mọi thứ. Trái với hội nhóm bí ẩn già cỗi này, Hagbard lãnh đạo một nhóm nhỏ gồm những kẻ theo chủ nghĩa vô chính phủ.

Như vậy, người đồng hương của Hess hoạt động dưới biệt danh Hagbard.

Chắc chắn hắn tin rằng có âm mưu nào đó. Và biết đâu hắn tin rằng tôi là một thành viên của hội Illuminati bí mật kia, chỉ nhăm nhe đi đàn áp người tốt! Có thể hắn đúng. Những người bạn cấp tiến của tôi có thể sẽ đồng quan điểm với hắn. Nhưng chắc chắn là tôi không biết bí mật nào cả.

Hagbard làm việc chặt chẽ với Markus Hess. Cả hai thường rủ nhau đi uống bia trong những quán bar ở Hannover, và tối tối lại chụm đầu trước màn hình máy tính của Hess.

Hagbard là ai? Theo tạp chí Der Spiegel của Đức, Hagbard – Karl Koch – là một lập trình viên 23 tuổi, lúc nào cũng cần tiền để thỏa mãn thói nghiện cocaine, chưa tính đến những hóa đơn điện thoại hàng tháng cho những chuyến phiêu lưu để đột nhập vào các mạng lưới ở nước ngoài.

Năm 1986, một số hacker ở Berlin và Hannover bàn bạc với nhau (qua rượu và ma túy) cách kiếm tiền.

Pengo – tên thật là Hans Huebner – là một lập trình viên xuất sắc mới 18 tuổi. Pengo khẳng định rằng hắn tham gia vào việc này chỉ vì những thách thức về mặt kỹ thuật. Do thấy nhàm chán với những máy tính mà hắn được tiếp cận hợp pháp, nên hắn bắt đầu xâm nhập vào các hệ thống khác thông qua các mạng lưới quốc tế. Trong một tin nhắn trên bảng thông báo, Pengo nói rằng hắn đang tham gia vào _một nhóm đang tìm cách hợp tác với một cơ quan mật vụ ở phía Đông._

Tại sao? Do phần mềm trên các hệ thống mà hắn được phép tiếp cận _không còn thú vị gì nữa, nên tôi chuyển sang khai thác hàng rào an ninh lỏng lẻo của những hệ thống mà tôi tiếp cận được qua các mạng lưới [quốc tế]._

Máy tính đã trở thành một thứ gây nghiện đối với Pengo.

Nhưng tại sao lại bán thông tin cho các gián điệp khối Xô – viết? Theo Der Spiegel, hắn cần tiền để đầu tư vào công ty máy tính riêng. Vậy là Pengo nhập bọn với hai người khác ở Tây Berlin. Một trong số đó là Dirk Brezinski, một lập trình viên và cũng là chuyên gia khắc phục sự cố cho công ty máy tính Siemens của Đức. Tên còn lại là Peter Carl, cũng ở Berlin, là một cựu điều phối viên sòng bài và _luôn có đủ cocaine._

Năm người này làm việc cùng nhau để tìm ra những con đường mới nhằm xâm nhập vào các máy tính, khám phá các mạng lưới quân sự và trau dồi kỹ năng bẻ gãy các hệ điều hành. Pengo chuyên về hệ điều hành Vax VMS của Digital và thường xuyên trao đổi với Hagbard.

Pengo không hề có chút đắn đo nào trong việc bán thông tin cho các điệp viên của khối Xô – viết. Hắn cho rằng mình là người trung lập về mặt đạo đức – hắn không muốn mang lại lợi thế nào cho người Nga, mà chỉ muốn dạo chơi trên các mạng lưới mà thôi.

Và tiện thể bỏ túi được ít tiền.

Hess cũng chỉ muốn dạo chơi quanh các mạng lưới, tìm cách kết nối cả thế giới. Hắn theo học chuyên ngành toán và vật lý học ở Đại học Hagen, nhưng rồi bỏ ngang.

Vậy là xuất phát từ một sở thích vô hại, hắn tìm cách vươn càng xa càng tốt.

Trước tiên, hắn thử kết nối đến thành phố Karlsruhe, sau đó là Bremen qua mạng Datex.

Sau một thời gian ngắn, hắn phát hiện ra rằng nhiều quản lý hệ thống chưa hề khóa cửa hậu của họ lại. Thường thì đó là máy tính của các trường đại học, nhưng rồi Markus Hess bắt đầu băn khoăn: Còn bao nhiêu hệ thống khác vẫn đang sơ hở? Có cách nào khác để xâm nhập vào các máy tính? Đầu năm 1986, Hagbard và Pengo thường xuyên xâm nhập vào các hệ thống ở Bắc Mỹ, hầu hết đều là máy tính của các phòng thí nghiệm vật lý năng lượng cao, cộng thêm một vài địa điểm ở NASA. Hagbard kể cho Hess nghe về những cuộc tấn công của mình.

Vậy là thách thức đã có. Hess bắt đầu khám phá bên ngoài nước Đức.

Nhưng hắn không còn quan tâm đến các trường đại học hay phòng thí nghiệm vật lý nữa – hắn muốn được trải nghiệm sự phấn khích thực sự. Hess và Hagbard sẽ nhắm đến quân đội.

Các lãnh đạo của Câu lạc bộ Máy tính Hỗn loạn đã cảnh báo thành viên: _Không bao giờ xâm nhập vào máy tính quân sự. Các chuyên gia an ninh đó sẽ chơi lại các bạn, như đấu cờ vậy. Hãy nhớ rằng họ đã luyện trò này suốt bao thế kỷ rồi._

Nhưng Markus Hess không chịu nghe.

Hess tìm được đường vào một máy tính không được bảo vệ thuộc một chi nhánh tại Đức của Mitre, nhà thầu quốc phòng Mỹ. Sau khi vào được hệ thống này, có lẽ hắn đã phát hiện ra những hướng dẫn chi tiết để liên kết với các máy tính của Mitre ở Bedford, Massachusett và McLean, Virginia.

Tại sao lại không vào chứ? Cửa đã mở sẵn, và cho phép hắn gọi đến bất cứ đâu ở Mỹ.

Mùa hè năm 1986, Hess và Hagbard hoạt động độc lập nhưng thường xuyên so sánh các ghi chép với nhau. Chúng hợp tác một cách bài bản trong việc xâm nhập vào các mạng lưới quân sự.

Trong lúc đó, ở Hannover, Hess phụ trách lập trình cho các máy tính Vax và quản lý một số hệ thống. Cấp trên biết về nghề tay trái của hắn và chấp nhận việc này, vì cho rằng hành vi khai thác mạng lưới của hắn phù hợp với các kế hoạch kinh doanh tổng thể của họ (ngay đến bây giờ, tôi vẫn thắc mắc không biết các kế hoạch đó rốt cuộc là gì!) Hess nhanh chóng mở rộng vị trí đổ bộ ở Mitre. Hắn khám phá bên trong hệ thống của họ, sau đó vươn vòi bạch tuộc đến những máy tính khác ở Mỹ.

Hắn thu thập các số điện thoại và địa chỉ mạng, để rồi thực hiện những cuộc tấn công bài bản vào những hệ thống này. Ngày 20 tháng Tám, hắn vớ được Phòng Thí nghiệm Lawrence Berkeley.

Tới tận khi đó, Hess vẫn chỉ có ý định chơi đùa. Hắn đã nhận ra rằng mình đang thọc mạch vào các bí mật – cả bí mật công nghiệp và bí mật quốc gia – nhưng vẫn không nói với ai. Sau đó, vào khoảng cuối tháng Chín, trong một vườn bia đầy khói ở Hannover, hắn kể cho Hagbard nghe về cuộc tấn công mới nhất của mình.

Xâm nhập vào trường học thì không thể kiếm được tiền. Có ai đi quan tâm đến dữ liệu của các phòng thí nghiệm vật lý đâu, ngoại trừ một nhúm sinh viên? Nhưng căn cứ quân sự và nhà thầu quốc phòng à? Hagbard ngửi thấy mùi tiền.

Và Hagabard cũng biết cần liên lạc với ai: Pengo, ở Tây Berlin.

Sẵn mối quen biết với giới hacker trên khắp nước Đức, Peng biết cách sử dụng thông tin của Hess. Một hacker ở Berlin cầm những bản in của Hess đi qua Đông Berlin và gặp các điệp viên từ KGB của Xô – viết.

Thỏa thuận đã được thiết lập: gần 30.000 mark Đức – 18.000 dollar – để đổi lấy các bản in và mật khẩu.

Nhưng KGB không chỉ trả tiền mua các bản in. Có vẻ Hess và đồng bọn còn bán cả các kĩ thuật của bọn chúng: Làm thế nào để xâm nhập vào các máy tính Vax; cần sử dụng mạng lưới nào để băng qua Đại Tây Dương; các chi tiết về cách vận hành của mạng Milnet.

Nhưng điều quan trọng hơn đối với KGB là thu thập các dữ liệu nghiên cứu về công nghệ của phương Tây, bao gồm thiết kế vi mạch, công nghệ sản xuất với sự hỗ trợ của máy tính, và đặc biệt là phần mềm hệ điều hành lúc này đang bị Mỹ thắt chặt việc xuất khẩu. Họ ra mức giá 250.000 mark Đức (130.000 dollar) để lấy các bản sao của hệ điều hành VMS của Digital Equipment.

Rõ ràng là Peter Carl và Dirk Brezinski đã gặp gỡ KGB nhiều lần để đáp ứng các yêu cầu từ phía họ: mã nguồn của hệ điều hành Unix, những thiết kế của vi mạch gallium – arsen tốc độ cao, và những chương trình thiết kế chip nhớ máy tính.

Chỉ mã nguồn của Unix thì không đáng giá 130.000 dollar. Thiết kế chip? Có lẽ chấp nhận được. Nhưng một chương trình thiết kế máy tính phức tạp thì quả là đáng đồng tiền bát gạo rồi.

Nhưng Hagbard không chỉ muốn tiền. Hắn còn đòi cả cocaine. Và KGB sẵn sàng cung cấp.

Hagbard chia một phần tiền cho Hess (nhưng không chia cocaine) để đổi lấy những bản in, mật khẩu, và thông tin mạng lưới. Phần tiền của Hagbard dùng để trả cước điện thoại, vì có khi hóa đơn lên tới hơn 1.000 dollar mỗi tháng, do hắn gọi đến các máy tính ở khắp nơi trên thế giới.

Hess lưu lại tất cả mọi thứ. Hắn giữ một cuốn sổ tay ghi chép chi tiết và lưu lại mọi phiên xâm nhập vào đĩa mềm. Như vậy, sau khi ngắt kết nối khỏi một máy tính quân sự, hắn có thể in ra những phần thú vị và chuyển chúng cho Hagbard và sau đó là KGB.

Trong danh sách yêu cầu của KGB cũng có cả các dữ liệu về SDI, vì thôi thấy Hess tìm kiếm chúng. Và Chiến dịch Vòi hoa sen của Martha đã mang về cho hắn được khối tiền.

Nhưng liệu KGB có tin vào những bản in này không? Làm sao họ biết chắc rằng Hagbard không tự bịa ra để thỏa mãn cơn nghiện cocaine của hắn? KGB quyết định kiểm tra nhóm hacker người Đức này. Barbara Sherwin bí ẩn là một cách hoàn hảo để kiểm chứng hình thức gián điệp kiểu mới này.

Chẳng phải cô ta đã mời mọi người viết thư đến để xin thêm thông tin hay sao? Nhưng các cơ quan mật vụ không xử lý mọi thứ trực tiếp mà qua trung gian.

KGB liên lạc với một cơ quan khác – có thể là cơ quan mật vụ của Hungary hay Bulgaria. Bọn họ có lẽ có mối quan hệ nghề nghiệp với một đầu mối ở Pittsburgh tên là Laszlo Balogh.

Đại sứ quán Bulgaria ở Mỹ có lẽ đã có một thỏa thuận cứng với Laszlo với nội dung như, _Chúng tôi sẽ trả anh 100 dollar để gửi bức thư sau đây…_

Laszlo Balogh không bận tâm đến chi tiết. Theo tờ Pittsburgh Post – Gazette, Laszlo khai hắn là người tị nạn Hungary; nghệ nhân; nhân viên một công ty tín dụng; chủ sở hữu một công ty vận tải; người mua bán kim cương; người du lịch vòng quanh thế giới; bảo vệ cho các công chúa ở Kuwait; sát thủ của CIA; và người đưa tin cho FBI.

Tờ báo viết rằng, _Mặc dù hắn nói hắn có nhiều mối quan hệ ở các chính phủ nước ngoài và lái những chiếc xe nước ngoài đắt tiền, nhưng hắn đã có lần xác nhận rằng mình gặp khó khăn trong việc ghi lén những cuộc đối thoại cho FBI vì máy ghi âm cứ trượt xuống trong bộ quần áo thể dục của mình._

Có lẽ Balogh vận hành một công ty đã ngừng hoạt động vì hắn sử dụng một ngân phiếu giả từ một ngân hàng không hề tồn tại để thực hiện một hợp đồng thu gom rác. Có lần hắn tham gia vào các âm mưu đánh cắp số kim cương trị giá 38.000 dollar, và bán thiết bị máy tính cho Xô – viết. Thực ra, có lần hắn khai đã từng bị giam ở Đại sứ quán Xô – viết.

Laszlo chỉ quan tâm đến tiền, không cần biết nó đến từ đâu. Hắn không biết gì về SDINET, không biết ai ở Hannover, và cho hay hắn thậm chí còn không có máy tính.

Chà. Tôi nhìn vào bức thư của Laszlo. Nó được tạo ra từ chương trình soạn thảo văn bản chứ không phải từ máy đánh chữ. Nếu Laszlo Balogh không có máy tính, thì ai tạo ra bức thư này? Đại sứ quán Bulgaria chăng? Liệu FBI có đủ bằng chứng để kết tội Laszlo Balogh không? Họ không đời nào chịu hé răng với tôi. Nhưng theo chỗ tôi thấy, Laszlo đang gặp rắc rối lớn: FBI đang theo dõi hắn, còn kẻ giật dây cho hắn tất nhiên là không hài lòng.

Mặt khác, cảnh sát Tây Đức lại có bằng chứng dồi dào để chống lại Markus Hess. Bản in, những cuộc lần dấu điện thoại, và sổ ghi chép của tôi. Ngày 29 tháng Sáu năm 1987, khi ập vào căn hộ của hắn, họ tịch thu cả trăm đĩa mềm, một máy tính, và một hồ sơ miêu tả mạng Milnet của Mỹ. Mọi chuyện đã quá rõ ràng.

Nhưng khi cảnh sát đột kích căn hộ của Hess, không có ai ở nhà. Trong lúc tôi vẫn kiên nhẫn chờ hắn xuất hiện trên máy tính của mình, cảnh sát Đức lại xông vào hang ổ của hắn lúc hắn không kết nối mạng.

Trong lần xét xử đầu tiên, Hess thoát tội nhờ kháng cáo. Luật sư của hắn lập luận rằng vì tại thời điểm căn hộ bị đột kích, Hess không kết nối mạng, nên có thể hắn không tham gia vào hoạt động xâm nhập máy tính trái phép. Lập luận này, cùng với trục trặc về lệnh lục soát, là đủ để xoay ngược tình thế trong vụ án chống lại Hess. Nhưng cảnh sát liên bang Đức vẫn tiếp tục điều tra.

Ngày 2 tháng Ba năm 1989, nhà chức trách Đức kết tội gián điệp đối với năm người: Pengo, Hagbard, Peter Carl, Dirk Bresinsky, và Markus Hess.

Peter Carl thường xuyên gặp gỡ các điệp viên KGB ở Đông Berlin để bán những dữ liệu mà những người khác tìm được. Vào thời điểm bị BKA bắt, hắn đang trên đường đào thoát sang Tây Ban Nha. Hiện hắn đang ngồi tù đợi xét xử, còn Dirk Bresinsky đã bị phạt tù vì tội đào ngũ khỏi Quân đội Đức.

Pengo thay đổi quan điểm về quãng thời gian làm việc cho KGB. Hắn nói hắn hi vọng rằng mình _đã làm điều đúng đắn khi cung cấp cho cảnh sát Đức thông tin chi tiết về sự tham gia của tôi._

Nhưng chừng nào vụ án hình sự này còn tiếp diễn, thì hắn sẽ không chịu nói thêm gì.

Dẫu sao, vụ việc bại lộ cũng khiến công việc của hắn bị lao đao. Các đối tác làm ăn rút lui, và một số dự án máy tính bị hủy bỏ. Ngoài những mất mát trong việc làm ăn, tôi không dám chắc là hắn thực lòng ăn năn về những gì mình đã làm.

Markus Hess, nhờ trả tiền bảo lãnh, hiện vẫn đang được tự do ở Hannover trong lúc chờ phiên tòa xét xử tội gián điệp. Hắn vẫn hút thuốc Benson & Hedges. Và vẫn cảnh giác cao độ.

Hagbard, hacker đồng hành với Hess trong một năm, cố gắng cai nghiện cocaine vào cuối năm 1988. Nhưng quyết định này xuất hiện sau khi hắn đã tiêu pha hết số tiền kiếm được từ KGB, lún sâu trong nợ nần và thất nghiệp.

Mùa xuân năm 1989, hắn tìm được việc làm ở văn phòng của một đảng chính trị tại Hannover. Nhờ thái độ hợp tác với cảnh sát, hắn và Pengo không bị truy tố tội gián điệp.

Người ta nhìn thấy Hagbard lần cuối cùng vào ngày 23 tháng Năm năm 1989. Trong một khu rừng hẻo lánh bên ngoài địa phận Hannover, cảnh sát tìm thấy bộ xương cháy đen của hắn bên cạnh một can xăng. Gần đó là một chiếc xe đi mượn, chìa vẫn đang cắm vào ổ.

Không tìm thấy lá thư tuyệt mệnh nào.

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

<figure><img src="https://data.nhavantuonglai.com/image/illustrations/cover-nhavantuonglai-com-0265.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>