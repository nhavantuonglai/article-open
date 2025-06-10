---
pubDatetime: 2018-02-20T10:10:00Z
title: Gián điệp mạng | Chương 50
description: Gián điệp mạng kể về nhà khoa học chuyển nghề thành chuyên gia mạng, truy tìm hacker tại Phòng Thí nghiệm Lawrence Berkeley, California, Mỹ.
image: https://banmaixanh.vercel.app/image/cover/001-727.jpg
tags:
  - clifford stoll
  - gian diep mang
  - an ninh mang
  - thu vien
  - van hoc
  - van hoc nuoc ngoai
---

_Đừng nói cho ai cả!_

Qua điện thoại, Mike Gibbons bảo tôi như vậy, có ý ngăn tôi đừng báo gì với CIA.

_Ôi, tôi xin lỗi, Mike, nhưng tôi đã trót nói với Teejay rồi._

Không biết Mike có biết Teejay không nhỉ.

_Cứ để tôi lo chuyện đó. Bức thư anh gửi rất thú vị đấy. Chúng tôi đã thực hiện một số thử nghiệm với nó trong phòng thí nghiệm._

_Các anh thu được kết quả gì?_

Mike cởi mở hơn bình thường, nên tôi được đà lấn tới.

_Không thể nói cho anh biết được, nhưng chúng tôi không làm qua loa vụ này đâu. Ở đây có nhiều khía cạnh khá là… chà, thú vị._

Lần thứ hai Mike sử dụng từ này. Có điều gì đó đang diễn ra. _À, nhân tiện thì anh có thể gửi cho chúng tôi khoảng 10 tập tiêu đề thư của các anh không?_

FBI muốn sử dụng tiêu đề thư của phòng thí nghiệm chúng tôi? Có vẻ như họ định hồi âm cho Laszlo.

_Tôi_

sẽ nói gì với anh chàng này đây? Thế này có được không: Thân gửi ông Balogh, Ông đã được lựa chọn là người trúng giải đặc biệt trong trò rút thăm may mắn SDINET… Gã hacker chơi trò trốn tìm trong vài ngày tiếp theo. Hắn xuất hiện khoảng ba phút, nhìn vào file mật khẩu của chúng tôi, sau đó đăng xuất. Mồi nhử của tôi ngày một ngon hơn. Nhưng hắn vẫn chưa cắn câu.

Sáng thứ Hai, ngày 18 tháng Năm, hắn xuất hiện trong hệ thống của chúng tôi vào lúc 6:54. Vẫn còn ngái ngủ, tôi với tay tắt đồng hồ báo thức. Nhầm rồi – tiếng bíp vẫn tiếp tục vang lên. Ba tiếng. S nghĩa là Sventek. Gã hacker! Hắn đang ở trên máy Unix – 4 của tôi.

Tự động như một chiếc máy, tôi chạy đến máy Macintosh, bật lên, và gọi Steve White ở Tymnet.

_Steve, có kẻ vừa vướng vào chuông báo động của tôi,_ tôi nói trong cơn ngái ngủ. _Tôi vẫn chưa kiểm tra, nhưng anh có thể lần dấu bây giờ được không?_

_Được. Chờ 10 giây nhé,_ anh nói. _Đây rồi. Bắt nguồn từ vệ tinh Westar.

Địa chỉ gọi 2624 DNIC 5421 – 0421. Đó là Bremen. Tôi sẽ gọi Bundespost._ Tôi ghi lại dãy số trên; lúc này máy tính cá nhân của tôi đã khởi động xong.

Steve vừa mới hoàn thành cuộc lần dấu quốc tế trong chưa đầy một phút. tôi gọi đến hệ thống ở phòng thí nghiệm và kiểm tra máy Unix – 4. Sventek vừa mới rời đi.

Hắn hoạt động trong bốn phút. Đủ dài để phát hiện hắn và hoàn thành cuộc lần dấu. Đủ dài để phá hỏng buổi sáng của tôi. Không thể quay lại ngủ tiếp, tôi đạp xe tới phòng thí nghiệm. Bạn đường với tôi lúc này chỉ có ngôi sao hôm chếch ở phía đông. Đó là sao Kim.

Trong bốn phút, gã hacker đã nhòm ngó vào một phần mới trong hệ điều hành của tôi. Hắn tìm kiếm một chương trình gọi là X – preserve trên hệ thống Unix.

À – tôi biết hắn định làm gì rồi. Hắn tìm kiếm lỗ hổng X – preserve trong VIeditor. Dave Cleveland và tôi đã lấp lỗ hổng này lại gần một năm trước.

Nhưng bây giờ gã hacker mới tìm cách khai thác nó.

VI là trình biên tập màn hình của Unix. Khi Bill Joy viết chương trình này vào năm 1980, mọi người cho rằng đây là phát minh tuyệt vời nhất. Nó cho phép bạn nhìn thấy hoạt động của mình khi di chuyển từ ngữ! Nếu muốn loại bỏ một từ ở giữa đoạn, bạn chỉ cần chuyển cái ô đang nhấp nháy đến từ đó là xong.

VI là tiền thân của hàng trăm hệ thống soạn thảo văn bản. Ngày nay, người dùng Unix coi nó là đồ cổ – nó không có sự linh hoạt của Gnu – Emacs, hay sự thân thiện của các trình biên tập hiện đại hơn. Dẫu vậy, VI vẫn xuất hiện trong mọi hệ thống Unix.

Điều gì sẽ xảy ra nếu trong khi bạn đang viết một bài dài thì máy tính đột nhiên giở chứng, như mất điện đột ngột hay có kẻ dở hơi nào rút dây cắm? Nếu là trước đây, bạn sẽ mất toàn bộ nội dung vừa gõ.

VI – editor dùng X – preserve để khôi phục những gì bạn vừa làm. Khi máy tính hoạt động trở lại, X – preserve sẽ lắp ghép lại những mảnh công việc của bạn. Sau đó, nó sẽ hỏi xem bạn muốn lưu file mới được khớp lại ở đâu. Hầu hết mọi người sẽ nói, _Ồ, hãy đặt nó vào thư mục cá nhân của tôi._

Nhưng X – preserve không kiểm tra nơi bạn lưu file này. Nếu bạn ra lệnh, _Đưa file này vào thư mục hệ thống,_ nó sẽ làm như vậy.

Gã hacker định thử mẹo đó: Tạo một file và ra lệnh, _Hãy trao đặc quyền hệ thống cho Sventek._

Hắn khởi động VI – editor, rồi nhập kí tự ngắt quãng để phần mềm này tưởng rằng máy tính đang gặp sự cố, nên thực hiện lưu trữ file của hắn theo nhiều phân mảnh.

Tiếp đến, hắn ra lệnh cho X – preserve thả file này vào thư mục hệ thống. Sau một vài phút, Unix sẽ ấp nó, và hắn sẽ trở thành quản lí hệ thống.

Nhưng quả trứng tu hú này đã rơi ra khỏi tổ. Chúng tôi đã khắc phục chương trình X – preserve, nên bây giờ nó sẽ kiểm tra xem bạn là ai và không cho phép bạn chuyển file vào vùng hệ thống.

Tội nghiệp anh chàng này. Chắc hắn thất vọng lắm. Đó là một mánh khóe khéo léo để xâm nhập vào các hệ thống, nhưng lại mất công hiệu ở Berkeley này.

Ồ, nhưng tôi vẫn để ngỏ các lỗ hổng khác. Hắn vẫn có thể sử dụng GnuEmacs để đẻ trứng vào cái ổ hệ thống. Và tôi cũng cố ý để chừa ra hai lỗ hổng nữa trong hệ thống, chỉ chờ hắn phát hiện ra. Cũng là một cách thử tài hắn. Cho đến nay, hắn mới phát hiện ra một trong ba lỗ hổng đó.

Tất cả chỉ mất ba phút. Hắn đưa chương trình vào một cách suôn sẻ, không một lỗi đánh máy. Hắn thao tác thuần thục như thể đã quen tay, như đã luyện tập xâm nhập vào những máy tính khác rồi.

Có bao nhiêu quản lí hệ thống khác chưa vá lỗi của X – preserve? Có bao nhiêu lỗ hổng khác đang hớ hênh chờ người phát hiện? Tôi nên tìm tới đâu để cảnh báo mọi người về việc này? Làm thế nào để báo tin cho những người mũ trắng mà không đánh động những kẻ mũ đen? Quá muộn rồi. Những kẻ mũ đen đã biết rồi.

Tuy phiên kết nối này chỉ kéo dài vài phút ở Berkeley, nhưng Đại học Bremen lại cho biết hắn đã kết nối trong 45 phút. Còn Bundespost một lần nữa lần dấu toàn bộ đường dây và vẫn dẫn đến cá nhân đó ở Hannover.

Hóa ra Đại học Bremen cũng in ra dữ liệu về những luồng di chuyển của gã hacker. Vậy là hai bên chúng tôi lúc này đang cùng theo dõi hắn. Hắn có thể chạy, nhưng không thể trốn.

Trong mấy tháng qua, hắn đã đớp mồi là các file SDINET. Hắn đã thấy tên các file này và cũng thấy tôi đều đặn hằng ngày bổ sung các biên bản ghi nhớ cũng như các loại thư từ mới, nhưng không vồ vập đọc ngay. Tôi bắt đầu nghi ngờ, không biết hắn còn quan tâm đến những sản phẩm sáng tạo của chúng tôi nữa hay không.

Sang thứ Tư, ngày 20 tháng Năm, những nghi ngờ của tôi được làm sáng tỏ.

Hắn kết nối vào lúc 5 giờ sáng và sao chép tất cả các file `SDINET`: Có file là bức thư yêu cầu Lầu Năm Góc rót thêm kinh phí, có file nói về _radar ở đường chân trời_ – một cụm từ mà tôi gặp được trong một tạp chí điện tử, và có file miêu tả các bài thử nghiệm một siêu máy tính mới được trang bị các bộ xử lí song song. Tôi cố gắng che đậy sự mù tịt của mình về những chủ đề này bằng cách nhét đầy thuật ngữ vào các tài liệu đó.

Hắn nuốt trọn chúng, được rồi. Từng file một. Tôi muốn hắn lấy riêng từng file thay vì tham lam lấy tất cả. Vì vậy, tôi bổ sung một số yếu tố gây nhiễu, tức những file quá dài không thể đánh máy, và những file ngắn chứa đầy những thứ vô nghĩa. Vì không thể in ra những file đã bị đầu độc này, nên hắn buộc phải kiểm tra từng file trước. Điều này khiến hắn chậm lại và phải ở trên hệ thống lâu hơn, cũng đồng nghĩa với việc chúng tôi có thêm thời gian để lần dấu hắn.

Đã chín tháng rồi ư? Chúng tôi đã theo dõi con rắn quỷ quyệt này được gần một năm rồi. Các hóa đơn điện thoại của Mitre cho thấy hắn đã xâm nhập được hơn một năm. Thật là một sự kiên nhẫn phi thường! Tôi lại băn khoăn thêm lần nữa, động cơ khích lệ hắn là gì vậy? Nếu là tôi, có lẽ tôi sẽ hào hứng được một, hai đêm. Thậm chí vài tuần. Nhưng một năm ư? Đêm này qua đêm khác, kiên nhẫn xoay tay nắm cửa của từng chiếc máy tính? Phải có người chịu bỏ tiền ra trả công, tôi mới chịu thế.

Trả công? Phải chăng có người đang trả công cho gã hacker này? Vào những lần hắn xuất hiện tiếp theo, tôi không bổ sung thêm tài liệu gì.

Cô thư kí ma của tôi, Barbara Sherwin, đã viết một thông báo bằng chương trình soạn thảo văn bản để xin nghỉ phép một tuần. Gã hacker đã đọc được nên hắn sẽ hiểu vì sao lại có ít thông tin mới như vậy.

Vậy là thay vì sục sạo các file của LBL, hắn ra ngoài để vào Milnet, và lại kiên trì chơi trò đoán mò mật khẩu một lần nữa. Một báo cáo `SDINET` ma của tôi có nhắc đến một dự án đặc biệt ở Bãi thử Tên lửa White Sands; quả nhiên, hắn dành 15 phút để tìm cách vào đó. Các máy tính của White Sands ghi nhận hơn 10 lần thử xâm nhập, nhưng không lần nào thành công.

Trong vòng một giờ, Chris McDonald, chuyên gia hàng đầu về an ninh máy tính tại White Sands, gọi cho tôi. _Có người đang làm kêu chuông báo động trong máy tính WSMR05 của tôi._

_Tôi biết. Gã hacker đó đấy._

_Hắn đang thử những tài khoản không hề tồn tại. Những cái tên như SDINET. Hắn không thể vào đây bằng cách đó được,_ Chris nói một cách tự tin. _Máy tính này đòi hỏi hai mật khẩu, mà chúng tôi đã thay đổi toàn bộ mật khẩu vào tuần trước rồi._

Quả thực, White Sands đã không đùa.

Hắn lãng phí thời gian để thử 30 máy tính khác nữa. Viện Khoa học Công nghệ Nâng cao Hàn Quốc. Trung tâm An toàn Lục quân ở Pháo đài Rucker.

Bộ Chỉ huy Chiến lược Không quân. Cơ quan Phòng vệ Hạt nhân ở Căn cứ Không quân Kirtland. Tuy vẫn thử những tài khoản như `guest` và `system`, hắn cũng thử thêm cả `SDINET` nữa. Vậy là hắn đã tin sái cổ rồi.

Gã hacker xâm nhập vào hệ thống của tôi ngày càng thường xuyên hơn. Tôi vẫn chạy đến trạm điều phối khi máy nhắn tin kêu, nhưng có lẽ tôi đã quen với việc có con chuột này trong lồng rồi. tôi đã đợi tám tháng nên tôi vẫn có thể đợi thêm. Vào tuần thứ hai của tháng Sáu, hắn hoạt động trên máy tính của tôi từ 3:38 đến 4:13 giờ chiều.

Chúng tôi đã lần dấu hắn tới tận nơi – lại là Hannover – đồng thời giữ liên lạc với FBI trong suốt khoảng thời gian đó.

Ngay sau khi đăng nhập vào máy tính ở Berkeley, hắn lập tức nhảy sang Milnet và tìm cách đăng nhập vào một số máy tính ở công ty Unisys ở Paoli, Pennsylvania. Những hệ thống có tên là `Omega`, `Bigburd`, và `Rosencrantz` (tôi vẫn đợi để thấy Guildenstern, nhưng hắn không tìm thấy nó). Sau đó hắn thử hệ thống Burdvax của Unisys.

Hắn vào được ngay lần thử đầu tiên. Tên tài khoản `Ingres`, mật khẩu `Ingres`.

Không tệ… Hắn vẫn nhớ cơ sở dữ liệu Ingres. Nhưng tại sao hắn lại thử máy tính của Unisys? Điều gì đã khiến hắn chú ý đến chúng? Có lẽ có người đã mớm thông tin cho hắn.

Có lẽ Laszlo Balogh ở Pittsburg làm việc ở Paoli. Cuốn atlas lại nói điều ngược lại. Paoli là một vùng ngoại ô của Philadelphia cách Pittsburg hàng trăm cây số.

Với tài khoản Ingres, gã hacker chỉ có đặc quyền hạn chế, nhưng hắn tận dụng tất cả những gì mình có. Điều hữu ích nhất với hắn là hắn đã tìm được cách để đọc file mật khẩu của Unisys. Hắn sao chép toàn bộ file này về máy riêng, rồi liệt kê một vài file lẽ ra không nên để ở chế độ công khai: danh sách các số điện thoại mà máy tính Unysis biết, và file địa chỉ mạng của Unisys. tôi biết hắn sẽ làm gì với file mật khẩu của Unisys. Hắn sẽ giải mã chúng bằng một cuốn từ điển, sau đó đăng nhập vào một tài khoản có nhiều đặc quyền hơn để vơ lấy nhiều sức mạnh hơn.

Những file khác cũng đáng lo lắng không kém. Chúng cung cấp cho gã hacker số điện thoại của những máy tính gần đó và một bản đồ mạng nội bộ của Unisys. Bây giờ thì hắn sẽ biết cách kết nối từ Burdvax đến các máy tính khác. Hắn sẽ không cần phải lùng sục thăm dò nữa.

Nhưng trong lúc tôi đang theo dõi thì hắn lại ngắt kết nối. Phải chăng là hắn sợ? Không, chỉ là hắn đang kiên nhẫn thôi. Hắn muốn kiểm tra những máy tính khác. Trước tiên là hệ thống ở Pháo đài Bucker tại Okinawa. Mật khẩu cũ của hắn vẫn dùng được ở đây. Vậy là tuy chúng tôi đã cảnh báo, họ vẫn mặc kệ.

Tiếp theo, hắn thử Bộ Chỉ huy Hệ thống Bờ biển ở thành phố Panama, Florida. Nhưng hắn không thể tiếp cận bằng tài khoản Ingres cũ. Họ đã thay đổi mật khẩu của hắn.

Nhưng điều này không khiến hắn nao núng. Hắn quay sang thử đăng nhập với tài khoản `Ovca` và mật khẩu `Baseball`.

Thành công rồi.

A ha! Vậy là tôi lại có thêm bằng chứng về việc hắn bẻ gãy mật khẩu. Hai tháng trước, hắn đăng nhập vào máy tính đó của hải quân với tài khoản _Ingres,_ rồi sao chép file mật khẩu mã hóa. Bây giờ, mặc dù họ đã xóa tài khoản Ingres, nhưng hắn vẫn có thể đăng nhập bằng một tài khoản khác.

Những kẻ ngốc kia chỉ thay đổi một mật khẩu. Và mật khẩu họ sử dụng chỉ đơn thuần là những từ tiếng Anh thông thường. Ôi Chúa ơi.

Trong thời gian ở đó, hắn kiểm tra những chốn đi về cũ. Căn cứ Không quân Ramstein. Pháo đài Stewart. Đại học Rochester. Trung tâm Dữ liệu Optimis của Lầu Năm Góc. Sau cùng, hắn rời mạng lưới này.

Ngày hôm nay, hắn xâm nhập vào một máy tính mới ở Unisys. Tôi đã nghe cái tên này ở đâu rồi nhỉ? À, dĩ nhiên rồi – họ là nhà thầu quốc phòng sản xuất máy tính cho quân đội. Không phải máy tính thông thường, mà là máy tính bảo đảm an ninh, những hệ thống bất khả xâm phạm.

Tuyệt.

Khoan đã. Còn những nhà thầu quốc phòng nào khác bị tấn công? Tôi vội lôi giấy viết ra một danh sách Unisys. Nhà sản xuất máy tính bảo đảm an ninh TRW. Nhà sản xuất máy tính cho quân đội và máy tính phục vụ các dự án không gian SRI. Họ có những hợp đồng quân sự để thiết kế hệ thống an ninh máy tính.

Mitre. Họ thiết kế những máy tính có mức an ninh cao cho quân đội. Là đơn vị kiểm định máy tính của NSA.

BBN. Những người xây dựng nên Milnet.

Có điều gì đó sai sai ở đây. Tất cả đều là những người thiết kế, xây dựng, và kiểm định an ninh cho các hệ thống. Thế nhưng gã hacker lại tung hoành ngang dọc trong những máy tính của họ.

Mà ngân sách của những công ty này đâu có nhỏ. Chính phủ của chúng ta phải chi cho họ hàng chục triệu dollar để phát triển các phần mềm an ninh.

Vậy là đã rõ quá rồi: Con thợ giày lại đang nhông nhông chạy chân đất kìa. tôi đã thấy gã hacker xâm nhập vào các máy tính quân sự, nhà thầu quốc phòng, trường đại học, và phòng thí nghiệm. Nhưng chưa có ngân hàng nào.

Ồ – tôi hiểu tại sao lại thế. Các mạng lưới của ngân hàng không hoạt động ở chế độ công khai như Arpanet. Nhưng nếu hắn vào được các hệ thống này, tôi dám chắc hắn cũng sẽ thành công như vậy.

Bởi lẽ, việc xâm nhập vào máy tính không đòi hỏi đến tài năng sáng chói hay sự khéo léo. Chỉ cần kiên nhẫn là được. Tuy thiếu sự sáng tạo, nhưng gã hacker đã kịp bù đắp cho thiếu sót đó bằng sự kiên trì. Chỉ có một số ít các lỗ hổng mà hắn khai thác là tôi chưa biết tới, chẳng hạn Gnu – Emacs. Nhưng hầu hết hắn chỉ nhăm nhe lợi dụng sự ngớ ngẩn của những người quản lí. Để mật khẩu dễ đoán. Gửi email tiết lộ mật khẩu cho nhau. Không theo dõi kiểm tra những thay đổi trong cơ sở dữ liệu.

Mà liệu việc cứ để ngỏ hệ thống có phải là ngu ngốc không? Đã gần 10 tháng trôi qua rồi, và hắn vẫn còn tự do. Hắn đã xâm nhập vào hơn 30 máy tính, Laszlo đã gửi thư từ Pittsburg, và vô vàn cuộc lần dấu đã được thực hiện, ấy vậy mà đến giờ này, gã hacker vẫn nhởn nhơ. Điều này sẽ còn kéo dài đến bao giờ?

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

<figure><img src="https://banmaixanh.vercel.app/image/cover/001-260.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>