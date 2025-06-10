---
pubDatetime: 2018-09-10T10:10:00Z
title: Gián điệp mạng | Chương 18
description: Gián điệp mạng kể về nhà khoa học chuyển nghề thành chuyên gia mạng, truy tìm hacker tại Phòng Thí nghiệm Lawrence Berkeley, California, Mỹ.
image: https://banmaixanh.vercel.app/image/cover/001-695.jpg
tags:
  - clifford stoll
  - gian diep mang
  - an ninh mang
  - thu vien
  - van hoc
  - van hoc nuoc ngoai
---

Cuối tháng Chín, cứ hai ngày gã hacker lại xuất hiện một lần. Hắn thường phóng kính tiềm vọng nhìn xung quanh, rồi biến mất sau vài phút. Không đủ thời gian để lần dấu, và dường như cũng không có gì đáng để hào hứng về hắn. tôi căng thẳng và cảm thấy có phần tội lỗi. Tôi thường bỏ ăn tối ở nhà để lén lút theo dõi tên hacker thêm một chút.

Cách duy nhất để tôi có thể tiếp tục bám theo gã hacker là giả vờ như đang làm việc nghiêm túc. Tôi nghịch ngợm đống đồ họa máy tính để đáp ứng yêu cầu của các nhà vật lý học và thiên văn học, sau đó lại mày mò các kết nối mạng để thỏa mãn sự tò mò của chính mình. Thực ra, một số phần mềm mạng lưới đang rất cần tôi phải để mắt đến, nhưng thường thì tôi chỉ nghịch ngợm để xem chúng vận hành như thế nào. Tôi giả vờ gọi đến các trung tâm máy tính khác để giải quyết các vấn đề về mạng lưới. Nhưng kỳ thực, khi nói chuyện với họ, tôi thường thận trọng thảy ra chủ đề về hacker – liệu còn ai khác cũng gặp phải các rắc rối này? Don Kolkowitz ở Đại học Stanford nhận thức khá rõ về các hacker trong máy tính của mình. Nơi anh ở chỉ cách Berkeley một giờ lái ô tô, nhưng tương đương với cả ngày đạp xe. Vì vậy, chúng tôi so sánh những ghi chú qua điện thoại để xem liệu có phải cả hai đều cùng theo dõi một con chuột đang gặm nhấm hệ thống của chúng tôi hay không.

Kể từ khi bắt đầu quan sát các thiết bị theo dõi, thi thoảng tôi lại thấy một kẻ quấy phá tìm cách xâm nhập máy tính của mình. Cứ cách vài ngày lại có kẻ gọi đến hệ thống, cố gắng đăng nhập bằng tài khoản system hoặcguest. Dĩ nhiên, mọi cố gắng này đều thất bại nên tôi không bận tâm theo dõi chúng.

Tình huống của Dan thì tệ hơn rất nhiều.

_Có vẻ như mọi đứa nhóc ở Thung lũng Silicon đều muốn xâm nhập vào Stanford,_ Dan than van. _Bọn chúng tìm ra được mật khẩu của các tài khoản sinh viên hợp lệ, sau đó lãng phí thời gian kết nối và tính toán. Bực mình lắm, nhưng đây là điều mà chúng tôi sẽ phải chịu đựng vì Stanford sắp sửa vận hành một hệ thống mở._

_Anh có nghĩ đến việc sẽ thắt chặt hơn không?_

_Thắt chặt an ninh sẽ khiến mọi người đều không vui,_ Dan nói. _Mọi người đều muốn chia sẻ thông tin, nên họ đặt chế độ sao cho ai cũng có thể đọc được các tập tin trên máy tính của mình. Họ sẽ phàn nàn nếu bị chúng tôi yêu cầu đổi mật khẩu. Ấy thế nhưng họ lại đòi dữ liệu của mình phải được bảo mật._

Người ta chú ý đến việc khóa xe ô tô hơn là bảo mật dữ liệu của mình.

Có một gã hacker đã khiến Dan hết sức bực mình. _Tệ nhất là hắn tìm được một lỗ hổng trong hệ thống Unix của Stanford. Nhưng hắn to gan đến nỗi gọi điện cho tôi, nói chuyện suốt hai giờ, đồng thời mò mẫm sục sạo các tập tin hệ thống của tôi._

_Anh có lần dấu hắn không?_

_Tôi đã thử. Trong lúc tiếp chuyện hắn, tôi gọi cho cảnh sát nội bộ của Stanford và công ty điện thoại. Hắn nói chuyện suốt hai giờ, nhưng họ không thể lần ra dấu hắn._ Tôi thoáng nghĩ đến Lee Cheng ở Pacific Bell. Anh chỉ cần 10 phút để hoàn tất cuộc truy lùng khắp cả nước. Và Tymnet phân tích mạng lưới của họ trong chưa đầy một phút.

Chúng tôi so sánh hai gã hacker. _Anh chàng của tôi không phá hoại gì cả,_ tôi nói. _Hắn chỉ quét tập tin và sử dụng các kết nối từ mạng của tôi thôi._

_Tôi cũng thấy thế. Tôi đã thay đổi hệ điều hành để có thể theo dõi xem hắn làm gì._

Thiết bị theo dõi của tôi thuộc các máy tính cá nhân IBM, không phải phần mềm sửa đổi, nhưng nguyên tắc thì giống nhau. _Anh có thấy hắn đánh cắp các tập tin mật khẩu và tiện ích hệ thống không?_

_Có. Hắn sử dụng mật danh là Pfloyd… Tôi cá hắn là người hâm mộ Pink Floyd. Hắn chỉ hoạt động về đêm._

Ở đây có sự khác biệt. Tôi thường gặp gã hacker của mình vào buổi trưa. Có vẻ Stanford đang bám theo những kẻ hoàn toàn khác nhau. Dù sao thì gã hacker ở Berkeley có vẻ thích cái tên `Hunter` hơn, dù hắn còn sử dụng vài tên tài khoản khác đánh cắp được.

Ba ngày sau, tờ San Francisco Examiner số ra ngày 3 tháng Mười chạy hàng tít: _Thám tử máy tính săn lùng một hacker xuất chúng._

Nhà báo John Markoff đã đánh hơi được câu chuyện ở Stanford. Bài báo này còn nhắc đến chuyện gã hacker này cũng đã xâm nhập vào hệ thống máy tính của LBL.

Chuyện này có thể nào là thật không? Bài báo mô tả những cái bẫy của Dan cũng như việc anh không bắt được gã hacker Pfloyd ở Stanford. Nhưng nhà báo trên đã viết sai mật danh thành _một gã hacker xảo quyệt với tên gọi Pink Floyd._ Tôi buông lời chửi thề kẻ đã làm lộ câu chuyện trên và chuẩn bị khép lại toàn bộ sự việc này. Đột nhiên, Bruce Bauer thuộc ban cảnh sát nội bộ của phòng thí nghiệm gọi đến hỏi tôi đã đọc bài báo hôm nay chưa.

_Vâng. Thật là một thảm họa. Gã hacker sẽ không xuất đầu lộ diện nữa đâu._

_Đừng có chắc chắn như vậy,_ Bruce nói. _Biết đâu đấy lại là điều may mắn mà chúng ta đang tìm kiếm._

_Nhưng hắn sẽ không xuất hiện nữa đâu, vì giờ hắn đã biết chúng ta biết có hacker trong hệ thống._

_Có thể. Nhưng hắn sẽ muốn kiểm tra xem liệu anh đã chặn hắn chưa. Và biết đâu hắn đang đắc chí rằng nếu có thể qua mặt được những người ở Stanford, thì hắn cũng có thể qua mặt được chúng ta nữa._

_Đúng, nhưng chúng ta còn lâu mới lần dấu được hắn._

_Vì chuyện này mà tôi mới gọi cho anh đây. Chắc phải hai tuần nữa chúng ta mới xin được lệnh lục soát, nhưng tôi muốn anh cứ tiếp tục để ngỏ hệ thống._

Sau khi gác máy, tôi thắc mắc sao anh ta lại đột nhiên quan tâm đến chuyện này thế. Do bài báo trên chăng? Hay cuối cùng FBI cũng chịu để mắt đến? Ngày hôm sau, chắc chắn là nhờ tác động của Bruce Bauer, Roy Kerth bảo tôi tiếp tục theo dõi gã hacker, không quên nói rõ rằng các công việc thường nhật của tôi mới là ưu tiên hàng đầu.

Vấn đề của tôi nằm ở đó. Mỗi khi gã hacker xuất hiện, tôi lại loay hoay cả giờ đồng hồ tìm hiểu xem hắn làm gì và lần này có liên quan như thế nào đến các phiên truy cập trước. Tiếp đến là vài giờ gọi điện cho hết người này đến người nọ để báo tin xấu. Tiếp nữa, tôi ngồi ghi lại những gì đã xảy ra vào sổ ghi chép. Tới lúc xong việc thì cũng hết ngày. Vậy đấy, việc theo dõi vị khách không mời này đã biến thành công việc toàn thời gian lúc nào không hay.

Trong trường hợp của tôi, linh cảm của Bruce Bauer đã đúng. Một tuần sau bài báo trên, gã hacker quay trở lại. Lúc 1 giờ 41 phút ngày Chủ nhật, 12 tháng Mười, khi tôi đang vò đầu bứt tóc với một vấn đề thiên văn liên quan đến đa thức trực giao thì chuông báo động hacker reo lên. tôi chạy xuống sảnh và thấy hắn đăng nhập bằng tài khoản cũ của Sventek.

Trong 12 phút, hắn sử dụng máy tính của tôi để kết nối với Milnet. Từ đó, hắn nhảy sang căn cứ Lục quân Anniston và dễ dàng đăng nhập với tài khoản Hunt. Hắn chỉ kiểm tra tập tin của mình rồi ngắt kết nối.

Vào thứ Hai, Chuck McNatt từ Anniston gọi tới.

_Tôi kết xuất các tập tin kế toán vào cuối tuần và lại thấy gã hacker._

_Đúng vậy, hắn ở trong hệ thống của các anh vài phút, đủ lâu để xem có ai đang theo dõi không._

Bản in của tôi đã kể toàn bộ câu chuyện này.

_Tôi nghĩ tôi nên chặn hắn lại,_ Chuck nói. _Ở đây có quá nhiều thứ đang gặp rủi ro, mà công cuộc lần dấu hắn của chúng ta lại có vẻ vẫn giậm chân tại chỗ._

_Anh có thể để ngỏ hệ thống lâu hơn chút nữa không?_

_Một tháng rồi còn gì, tôi sợ hắn sẽ xóa các tập tin._ Chuck biết rõ những mối nguy hại đang trực chờ.

_Chà, thế thì đành vậy thôi. Chỉ cần anh bảo đảm loại bỏ hắn hoàn toàn là được._

_Tôi biết. Tôi sẽ thay đổi toàn bộ mật khẩu và kiểm tra xem có lỗ hổng nào trong hệ thống không._

Chao ôi. Những người khác có vẻ không còn đủ kiên nhẫn để mở cửa cho gã hacker này. Hay phải chăng đó là do sự ngu ngốc? 10 ngày sau, gã hacker xuất hiện trở lại. Tôi chạy đến trạm điều phối ngay lúc hắn đang cố xâm nhập Anniston.

```
LBL > Telnet.

ANAD.ARPA.

Kết nối đến 26.1.2.22.

Chào mừng đến Kho Quân nhu Lục quân Anniston.

Đăng nhập: `Hunt`.

Mật khẩu: `jeager`.

Đăng nhập xấu.

Thử lại lần nữa.

Đăng nhập: `Bin`.

Mật khẩu: `jabber`.

Chào mừng đến kho Quân nhu Lục quân Anniston.

Cảnh báo Đội Hổ!

Cảnh giác với người dùng lạ.

Cảnh báo tất cả người lạ đang sử dụng máy tính này.
```

Chuck đã vô hiệu hóa tài khoản `Hunt`, nhưng chưa thay đổi mật khẩu cho tài khoản hệ thống là `Bin`.

Thông điệp chào mừng cảnh báo gã hacker rằng có người đã để ý đến hắn.

Hắn vội vã kiểm tra các tập tin Gnu – Emacs, và thấy rằng chúng đã bị xóa.

Hắn tìm quanh hệ thống Anniston và thấy một tập tin được tạo vào ngày 3 tháng Bảy. File này sẽ cho hắn đặc quyền của siêu người dùng. Nó được giấu trong thư mục công khai là `/usr/lib`. Đây là khu vực mà ai cũng có thể viết vào. Hắn đặt tên tập tin là `.d`

Đó cũng là tên mà hắn dùng để giấu tập tin của mình trong hệ thống LBL của chúng tôi.

Nhưng hắn không thực thi chương trình này. Thay vào đó, hắn đăng xuất khỏi hệ thống Anniston và ngắt kết nối từ LBL.

Chuck đã không để ý đến tập tin đặc biệt này. Trên điện thoại, anh nói đã thay đổi toàn bộ mật khẩu người dùng – tổng cộng là 200. Nhưng anh chưa thay đổi bất kỳ mật khẩu hệ thống nào, như Bin, vì anh đinh ninh rằng chỉ mình anh mới biết chúng. Anh nghĩ rằng anh đã xóa tất cả những tập tin nguy hiểm, nhưng lại bỏ qua một số tập tin.

Tập tin `.d` này ở Anniston là một điểm tham khảo hữu dụng. Gã hacker đã đẻ quả trứng này vào ngày 3 tháng Bảy, và ba tháng sau hắn vẫn còn nhớ chính xác nơi đã giấu nó.

Hắn không ngồi đoán hay sục sạo để tìm được tập tin .d này, mà hắn tiến thẳng đến chỗ của nó.

Sau ba tháng thì tôi không thể nhớ nổi mình đã cất tập tin ở đâu, trừ khi có ghi chép lại cẩn thận.

Vậy thì chắc chắn gã hacker cũng đang theo dõi nghiêm ngặt mọi việc hắn đã làm. tôi nhìn vào sổ ghi chép của mình. Ở một nơi nào đó, một ai đó cũng đang giữ một cuốn sổ tay giống hệt tôi.

Một đứa nhóc trong cuộc vui cuối tuần sẽ không ghi chép chi tiết mọi việc.

Một sinh viên ưa nghịch ngợm sẽ không kiên nhẫn chờ ba tháng mới kiểm tra xem trò chơi khăm của mình phát huy tác dụng ra sao. Không, chúng tôi đang theo dõi một cuộc tấn công bài bản và có chủ đích, từ một người biết rõ hắn đang làm gì.

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

<figure><img src="https://banmaixanh.vercel.app/image/cover/001-238.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>