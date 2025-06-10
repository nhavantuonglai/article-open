---
pubDatetime: 2019-01-28T10:10:00Z
title: Gián điệp mạng | Chương 53
description: Gián điệp mạng kể về nhà khoa học chuyển nghề thành chuyên gia mạng, truy tìm hacker tại Phòng Thí nghiệm Lawrence Berkeley, California, Mỹ.
image: https://banmaixanh.vercel.app/image/cover/001-730.jpg
tags:
  - clifford stoll
  - gian diep mang
  - an ninh mang
  - thu vien
  - van hoc
  - van hoc nuoc ngoai
---

Một tháng trước khi gã hacker bị bắt, Darren Griffith từ Nam California chuyển về đây sống và tham gia vào nhóm của chúng tôi. Darren thích nhạc punk, mạng Unix, khắc chữ bằng laser, và giao du với những người bạn để kiểu tóc dựng đứng – theo thứ tự như vừa liệt kê. Ngoài những tiệm cà phê và những buổi nhạc hội, Berkeley còn thu hút anh chàng vì hàng trăm máy tính Unix được kết nối với nhau bằng ethernet, tạo nên một mê cung tinh vi để Darren tha hồ khám phá.

Ở chỗ làm, sếp tôi cho phép anh tự làm việc theo giờ giấc riêng và tham gia vào bất cứ dự án nào tùy thích. Sau năm giờ, khi những người bình thường rục rịch về nhà, anh bật radio cỡ lớn và ngồi viết chương trình trong giai điệu của U2. _Nhạc càng to thì viết càng tốt._

Tôi kể cho anh về vụ đột nhập trong năm vừa rồi, đoán rằng anh sẽ quan tâm đến lỗ hổng của Gnu – Emacs, nhưng anh chỉ nhún vai. _Chà, ai chẳng biết cách lợi dụng nó chứ. Mà nó chỉ có trên vài trăm hệ thống thôi. Nếu anh muốn xem một lỗ hổng an ninh thực sự, hãy kiểm tra VMS. Chúng có một lỗ hổng to tướng, xe tải chui lọt._

_Hả?_

_Đúng vậy. Lỗ hổng này tồn tại trên mọi máy tính Vax của Digital Equipment Corporation chạy hệ điều hành VMS phiên bản 4.5._

_Đó là vấn đề gì vậy?_

_Bất cứ ai đăng nhập vào hệ thống đều có thể trở thành quản lí hệ thống bằng cách chạy một chương trình ngắn. Không thể ngăn lại được._ Tôi chưa bao giờ nghe đến vấn đề này. _Vậy DEC có làm gì không? Chính họ bán ra những hệ thống đó mà._

_Ồ, chắc chắn rồi, họ đang gửi những bản vá lỗi. Nhưng họ kín tiếng về chuyện này lắm, vì sợ làm kinh động khách hàng._

_Nghe cũng hợp lí đấy nhỉ._

_Ừ, nhưng chẳng ai buồn cài đặt những bản vá lỗi này. Khi nhận được một cái đĩa gửi qua thư với lời nhắn, Vui lòng cài đặt chương trình này, nếu không hệ thống của bạn có thể phát sinh vấn đề… anh sẽ làm gì chứ? Dĩ nhiên là phớ lờ nó đi rồi, vì anh có những việc quan trọng hơn cần làm._

_Vậy tức là tất cả hệ thống này đều đang sơ hở?_

_Anh hiểu rồi đấy._

_Mà khoan đã. Hệ điều hành này do NSA chứng nhận. Họ đã kiểm định và chứng nhận an ninh cho nó rồi mà._

_Đúng, họ đã dành cả năm trời để kiểm định. Nhưng một tháng sau khi họ phê duyệt, DEC lại thay đổi một chút trong chương trình mật khẩu._

Bản thân chương trình xác nhận của Trung tâm An ninh Máy tính Quốc gia thậm chí cũng có lỗ hổng.

_Và bây giờ thì 50.000 máy tính đang bị sơ hở._ Tôi không thể tin vào việc này. Nếu gã hacker của tôi biết, hắn sẽ tha hồ khai thác. Thật may là chúng tôi đã bắt được hắn.

Vấn đề này có vẻ quan trọng, nên tôi gọi cho Bob Morris ở Trung tâm An ninh Máy tính Quốc gia. Anh cũng chưa từng nghe chuyện đó, nhưng hứa sẽ kiểm tra. Tôi đã làm công việc của mình là báo cho cấp có thẩm quyền.

Vào khoảng cuối tháng Bảy, Darren nhận được một thông tin nhắn từ mạng.

Roy Omond, một quản lý hệ thống ở Heidelberg, Đức, đã phát hiện ra một nhóm gọi là Câu lạc bộ Máy tính Hỗn loạn khi chúng xâm nhập vào máy Vax của anh. Chúng sử dụng lỗ hổng mà Darren đã nhắc đến. Tin nhắn của Omond nêu chi tiết cách chúng xâm nhập vào hệ thống, cài đặt những con ngựa thành Troy để lấy mật khẩu, và xóa dấu vết.

Câu lạc bộ Máy tính Hỗn loạn? Tôi có nghe đồn rằng từ năm 1985, một vài hacker người Đức đã tập hợp nhau lại để _khám phá_ các mạng máy tính.

Đối với chúng, sự độc quyền của chính phủ chỉ tổ gây rắc rối – chúng gọi Bundespost là _Bundespest._ Lối chơi chữ từ chữ Bundespost, pest có nghĩa là loài gây hại.

Nhóm này nhanh chóng phát triển thành một băng nhóm tấn công có hệ thống vào các máy tính ở Đức, Thụy Sỹ, Pháp, và sau đó là Mỹ. Những biệt danh tôi đã từng nghe đến – Pengo, Zombie, Frimp – đều là của thành viên nhóm này. Chúng tự gọi mình là những kẻ nổi loạn trong không gian mạng, lấy niềm tự hào là số lượng máy tính mà chúng có thể xâm nhập được.

Nghe quen quá.

Tới cuối mùa hè, vấn đề này đã lan rộng. Câu lạc bộ Máy tính Hỗn loạn đã xâm nhập vào cả trăm máy tính trên toàn thế giới bằng cách sử dụng mạng SPAN của NASA. Máy Petvax! Những tiếng chuông báo động hồi tháng Sáu – tôi đã lần dấu chúng đến mạng lưới của NASA. Tôi cá rằng các kết nối sẽ dẫn đường tới nước Đức. Chà chà. tôi nhanh chóng nhận thức được những gì đang diễn ra. Câu lạc bộ Máy tính Hỗn loạn đã xâm nhập vào các máy tính của phòng thí nghiệm vật lý CERN ở Thụy Sỹ và gây náo loạn ở đây – người ta nói rằng chúng đã đánh cắp mật khẩu, phá hoại các phần mềm, và đánh sập các hệ thống thí nghiệm.

Tất cả chỉ để cho vui.

Từ phòng thí nghiệm ở Thụy Sỹ, nhóm này đánh cắp mật khẩu để vươn tới hệ thống máy tính ở các phòng thí nghiệm vật lý của Mỹ – Fermilab ở Illinois, Caltech, và Stanford. Từ đó, chỉ cần thêm một bước nhảy ngắn là với tới mạng lưới và các máy tính của NASA.

Mỗi lần xâm nhập, chúng khai thác lỗi sai để trở thành quản lý hệ thống. Sau đó, chúng chỉnh sửa hệ điều hành để có thể đi vào đó bằng một mật khẩu đặc biệt mà chỉ chúng biết rõ. Như vậy, chỉ cần sử dụng mật khẩu thần kì đó trên máy Vax đã bị xâm nhập, chúng sẽ vào được hệ thống, kể cả khi lỗ hổng ban đầu đã được khắc phục! Chà! Vấn đề nghiêm trọng đây. Hàng trăm máy tính đang gặp rủi ro. Chúng có thể bẻ gãy phần mềm trên từng hệ thống. Nhưng phải làm gì đây? NASA không phụ trách mọi máy tính kết nối vào mạng của họ. Phân nửa trong số đó là máy tính của các trường đại học đang thực hiện những thí nghiệm khoa học. NASA có lẽ thậm chí còn không có danh sách của tất cả các máy tính đang kết nối vào mạng của họ.

Giống như Milnet, mạng lưới của NASA là một xa lộ kết nối các máy tính trên khắp cả nước. Hiển nhiên, trộm cũng có thể sử dụng xa lộ này, và khó có thể quy lỗi đó cho những người đã xây dựng nên nó. Trách nhiệm duy nhất của NASA là giữ cho xa lộ được nguyên vẹn. Vấn đề an ninh của các máy tính được đặt vào tay của những người vận hành chúng.

Câu lạc bộ Máy tính Hỗn loạn đã khiến cho các chuyên gia máy tính phải đau đầu nhiều phen – chúng gây rắc rối cho hàng trăm quản lý hệ thống và hàng nghìn nhà khoa học. Nếu sở hữu một máy Vax, để khắc phục sự cố này, bạn sẽ phải xây dựng lại phần mềm hệ thống từ đầu. Việc này chỉ mất một buổi chiều là xong. Nhưng nếu nhân nó với 1.000 địa điểm thì sẽ thế nào đây? Hoặc là 50.000? Cuối cùng, Câu lạc bộ Hỗn loạn cũng tự hào tuyên bố với báo giới về những cuộc xâm nhập của chúng, và tự xưng là những lập trình viên xuất chúng. tôi tìm xem chúng có nhắc gì đến phòng thí nghiệm của mình, Milnet, hay Hannover không. Không có gì. Có vẻ chúng chưa hề biết đến gã hacker của tôi. Nhưng thật trùng hợp: Vài tháng sau khi tôi bắt được một gã hacker người Đức xâm nhập vào các mạng lưới, thì một câu lạc bộ của Đức ra mặt, tuyên bố rằng chúng đã xâm nhập được vào các mạng lưới của NASA.

Liệu có phải đây cũng là những kẻ đã xâm nhập vào máy tính của tôi? Tôi nghĩ một lúc về điều này. Có vẻ nhóm Hỗn loạn hoạt động trên hệ điều hành VMS và chỉ biết một chút về Unix. Gã hacker của tôi chắc chắn biết về VMS, nhưng có vẻ hắn thành thạo Unix hơn. Và hắn không ngần ngại khai thác bất cứ lỗ hổng nào trong máy tính. Hannover gần với Hamburg, nơi ở của nhóm Hỗn loạn. Chưa đầy 160 kilometer.

Nhưng gã hacker của tôi đã bị bắt giữ vào ngày 20 tháng Sáu. Câu lạc bộ Hỗn loạn lại xâm nhập vào các hệ thống hồi tháng Tám.

Chà. Nếu gã hacker LBL ở Hannover có liên lạc với Câu lạc bộ Hỗn loạn, thì thông tin về việc bắt giữ hắn sẽ khiến cả băng nhóm kia sửng sốt. Ngay khi nghe tin có thành viên bị bắt, chúng sẽ lo tẩu tán càng sớm càng tốt.

Thêm một tình tiết nữa… NASA không có bí mật. Ồ, có lẽ các loại hàng hóa mà tàu con thoi quân sự chở là thông tin bí mật. Nhưng hầu hết mọi thứ khác về NASA đều công khai. Ngay cả đến bản thiết kế tên lửa của họ cũng để tênh hênh. Chúa ơi, bạn có thể mua được cả bản kế hoạch thiết kế tàu con thoi không gian. Chốn này đâu cần đến gián điệp làm gì chứ.

Không, gã hacker của tôi không thuộc nhóm Hỗn loạn. Có thể hắn có mối liên hệ lỏng lẻo với nhóm này, chẳng hạn hắn xem bảng tin điện tử của chúng. Nhưng chúng không biết về hắn.

Các thành viên của Câu lạc bộ Hỗn loạn biện hộ cho hành động của mình bằng những nguyên tắc đạo đức kì cục. Chúng tuyên bố rằng việc sục sạo vào cơ sở dữ liệu của người khác là hoàn toàn chấp nhận được, miễn là chúng không phá hoại bất cứ thông tin nào. Nói cách khác, chúng tin rằng sự hiếu kì của giới kĩ thuật phải được ưu tiên hơn sự riêng tư của cá nhân.

Chúng cho rằng mình có quyền được lục lọi bất cứ máy tính nào chúng xâm nhập được.

Thông tin trong cơ sở dữ liệu ư? Chúng chỉ quan tâm tới việc tìm ra cách lấy được thông tin, chứ không hề có chút dằn vặt nào trong lương tâm cả. Giả dụ đó là danh sách các bệnh nhân AIDS thì sao? Hay là bản kê thuế thu nhập năm ngoái của bạn? Hay lịch sử tín dụng của tôi? Trao đổi những vấn đề này với Darren thì rất tuyệt, vì anh am hiểu về các mạng lưới, đồng thời cũng có đôi mắt sắc sảo để phát hiện ra các lỗ hổng.

Nhưng hễ nói chuyện với nhau, anh lại có vẻ hài hước và xa cách; anh coi vấn đề hacker thuần túy là một trò chơi trí tuệ. Tôi cảm giác rằng anh coi thường tôi vì tôi bị cuốn vào việc này, và cứ nhăm nhe đi đuổi bắt gã hacker.

Cuối cùng, vào một buổi chiều, sau khi kiên nhẫn lắng nghe tôi than vãn về gã hacker và những tiên đoán ảm đảm của tôi về những rắc rối trong tương lai, Darren nhìn chằm chằm vào tôi.

_Cliff,_ anh nói, _anh là một lão già cổ hủ. Tại sao anh phải quá để ý đến chuyện có người sục sạo trong hệ thống của mình làm gì? Đó có thể là chính là anh thời trẻ đấy. Anh từng trân trọng chủ nghĩa vô chính phủ sáng tạo mà, bây giờ cái trân trọng ấy ở đâu rồi?_ Tôi cố biện hộ cho mình – như tôi đã thử với Laurie vài tháng trước. Tôi không có sự chuẩn bị để trở thành một cảnh sát mạng. Tôi chỉ bắt đầu với một bài toán đơn giản: Tại sao tài khoản của tôi lại có một lỗi sai 75 xu? Chuyện này dẫn tới chuyện kia, và rồi cuối cùng thành ra tôi đi truy bắt một gã hacker.

Nhưng tôi không mù quáng hành động theo cơn giận dữ bốc đồng, không cố gắng bắt bằng được kẻ xâm phạm chỉ bởi vì hắn đã cả gan xuất hiện trong hệ thống của mình. Tôi còn đi tìm hiểu về các mạng lưới. Trước đây, tôi cứ tưởng rằng chúng là một thiết bị kỹ thuật phức tạp, một mớ dây rợ và mạch điện rối rắm. Nhưng còn hơn cả thế – đó là một cộng đồng người lỏng lẻo, gắn kết với nhau bằng niềm tin và sự hợp tác. Nếu niềm tin đó bị phá vỡ, cộng đồng này sẽ vĩnh viễn biến mất.

Darren và những lập trình viên khác đôi khi tỏ ra khâm phục giới hacker vì họ kiểm tra độ chắc chắn của các hệ thống, vạch ra những lỗ hổng và điểm yếu của hệ thống. Tôi có thể tôn trọng quan điểm này – phải là người có suy nghĩ trung thực và nghiêm túc mới cảm thấy biết ơn người đã chỉ ra sai lầm cho mình – nhưng tới giờ thì tôi không thể tiếp tục nhất trí với cách nhìn đó nữa. Tôi không coi gã hacker là kiện tướng cờ vua đang giảng dạy những bài học giá trị bằng cách lợi dụng những điểm yếu trong hệ thống phòng vệ của chúng ta, mà là một kẻ phá hoại đang gieo mầm ngờ vực và nghi hoặc vào cộng đồng.

Trong một thị trấn nhỏ, nơi người dân không có thói quen khóa cửa, liệu chúng ta có nên ca ngợi tên trộm đầu tiên vì hắn đã khiến người dân được sáng mắt ra để thấy rằng việc để cửa mở là ngu xuẩn? Sau khi vụ trộm đó xảy ra, thị trấn này sẽ không bao giờ có thể tiếp tục thói quen để cửa mở nữa.

Hoạt động xâm nhập trái phép sẽ buộc các mạng lưới phải xây dựng các hàng rào khóa và các chốt kiểm soát. Những người dùng hợp lệ sẽ cảm thấy khó giao tiếp tự do hơn, khiến họ ngại ngần hơn khi chia sẻ thông tin với nhau. Để sử dụng mạng lưới, chúng ta có thể sẽ phải trải qua bước xác nhận danh tính và thông báo về mục đích truy cập – tức là sẽ không còn những lần đăng nhập cho vui để tám chuyện, vẽ bậy, hoặc chỉ đơn giản là xem ai đang ở trên mạng.

Trên các mạng lưới, có rất nhiều cơ hội cho _chủ nghĩa vô chính phủ sáng tạo_

– không có ai kiểm soát các mạng lưới, không có ai tạo ra nguyên tắc – chúng tồn tại đơn thuần nhờ vào những nỗ lực hợp tác và chúng phát triển tự do tùy theo mong muốn của người dùng. Việc giới hacker lạm dụng sự cởi mở này có thể là dấu chấm hết cho phương thức vận hành mang tính suồng sã, cộng đồng của các mạng lưới.

Cuối cùng tôi cũng có thể trả lời Darren. Việc tôi giao du với các điệp viên vận comple tề chỉnh và vào vai cảnh sát máy tính xuất phát từ sự trân trọng dành cho chủ nghĩa vô chính phủ sáng tạo. Để các mạng lưới trở thành sân chơi chung, chúng ta phải gìn giữ được cảm thức về niềm tin; và để làm được điều này, chúng ta phải nghiêm túc xử lí khi có người phá vỡ niềm tin này.

Vậy là cuối cùng, tôi cũng cảm thấy đã hiểu ra vì sao mình lại làm thế; nhưng dẫu vậy, tôi vẫn không biết mình đã làm gì. Tên của gã ở Hannover là gì? Ai đứng đằng sau tất cả mọi việc? Không ai chịu nói cho tôi cả.

Khi mùa hè dần qua, vụ việc này có vẻ như đã chìm xuồng. Mike Gibbons không chủ động gọi và cũng hầu như không nhấc máy khi tôi gọi. Mọi việc như thể chưa có gì xảy ra cả. tôi hiểu rõ các khía cạnh kĩ thuật của vụ này – những lỗ hổng của máy tính và vị trí của gã hacker. Chẳng phải đó là tất cả những gì tôi muốn biết hay sao? Nhưng có điều gì đó không đúng. Tôi vẫn chưa thấy thỏa lòng. tôi đã biết cái gì và bằng cách nào. Nhưng tôi còn muốn biết ai và tại sao.

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

<figure><img src="https://banmaixanh.vercel.app/image/cover/001-263.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>