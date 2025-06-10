---
pubDatetime: 2020-10-19T10:10:00Z
title: Tìm hiểu về thuật toán Sesame – Quản lý phiên bản tin nhắn không đồng bộ đa thiết bị
description: Thuật toán SESAME là kiến trúc bảo mật tiên tiến được phát triển nhằm cung cấp giải pháp xác thực và quản lý khóa toàn diện trong môi trường phân tán.
image: https://banmaixanh.vercel.app/image/cover/001-467.jpg
tags:
  - developer
  - bao mat
  - mat ma hoc
  - signal protocol
  - ma hoa thong tin
  - bao mat thong tin
  - double ratchet
  - kdf
  - sesame
  - forward secrecy
  - future secrecy
  - key agreement
  - key agreement protocol
  - shared secret key
  - khoa bi mat chung
  - giao thuc bao mat
  - giao thuc nhan tin
  - ma hoa dau cuoi
  - tin nhan ma hoa dau cuoi
---

_SESAME là kiến trúc bảo mật tiên tiến được phát triển nhằm cung cấp giải pháp xác thực và quản lý khóa toàn diện trong môi trường phân tán._

# Giới thiệu

Bài viết này mô tả thuật toán Sesame để quản lý phiên mã hóa tin nhắn trong môi trường không đồng bộ và đa thiết bị.

SESAME là kiến trúc bảo mật tiên tiến được phát triển nhằm cung cấp giải pháp xác thực và quản lý khóa toàn diện trong môi trường phân tán. Thuật toán tập trung vào việc giải quyết các thách thức bảo mật phức tạp trong các hệ thống mạng lớn, với khả năng quản lý danh tính, kiểm soát truy cập và bảo vệ thông tin một cách hiệu quả. Nguyên lý hoạt động của SESAME dựa trên việc sử dụng các kỹ thuật mã hóa tiên tiến, cho phép xác thực người dùng và quản lý quyền truy cập một cách linh hoạt và an toàn.

Trong thực tế, SESAME được ứng dụng rộng rãi trong các hệ thống doanh nghiệp, mạng máy tính phức tạp, hệ thống điện toán đám mây và các môi trường yêu cầu quản lý truy cập nghiêm ngặt. Ưu điểm của thuật toán nằm ở khả năng cung cấp một khung bảo mật toàn diện, cho phép các tổ chức kiểm soát và bảo vệ tài nguyên thông tin một cách hiệu quả. SESAME giúp giảm thiểu rủi ro an ninh, đảm bảo tính toàn vẹn và bảo mật cho hệ thống thông tin.

Sesame được thiết kế để quản lý các phiên Double Ratchet được tạo bằng thỏa thuận khóa X3DH. Tuy nhiên, [Sesame](https://nhavantuonglai.com/article/tim-hieu-sesame) là một thuật toán tổng quát có thể hoạt động với bất kỳ thuật toán mã hóa tin nhắn dựa trên phiên nào đáp ứng một số điều kiện nhất định.

## Kiến thức cơ bản

### Tổng quan

Các giao thức thỏa thuận khóa không đồng bộ như X3DH cho phép một bên tạo một phiên mã hóa tin nhắn và sử dụng phiên đó để mã hóa một tin nhắn ban đầu gửi đến người nhận, ngay cả khi người nhận đang ngoại tuyến. Người nhận sau đó có thể truy xuất tin nhắn và sử dụng nó để tính toán một phiên khớp, được sử dụng để giải mã tin nhắn.

Các thuật toán Ratcheting như Double Ratchet cho phép hai bên cập nhật khóa phiên trong quá trình liên lạc, đảm bảo tính bảo mật chuyển tiếp.

Việc kết hợp các thuật toán này trong bối cảnh thực tế đưa ra một số vấn đề mới:

Mỹ Anh và Đan Nguyên có thể sở hữu nhiều thiết bị, do đó việc mã hóa tin nhắn từ Mỹ Anh gửi đến Đan Nguyên có thể yêu cầu tạo các phiên từ thiết bị gửi của Mỹ Anh đến tất cả các thiết bị của Đan Nguyên, cũng như đến các thiết bị khác của Mỹ Anh (để nhận được một bản sao tin nhắn).

Mỹ Anh và Đan Nguyên có thể thêm hoặc xóa thiết bị, vì vậy họ sẽ cần thêm hoặc xóa các phiên để xử lý những thay đổi này.

Mỹ Anh và Đan Nguyên có thể đồng thời khởi tạo một phiên mới với nhau, dẫn đến việc tạo ra hai phiên mới. Để [Double Ratchet](https://nhavantuonglai.com/article/tim-hieu-double-ratchet) hoạt động hiệu quả tối đa, Mỹ Anh và Đan Nguyên phải gửi và nhận tin nhắn bằng các phiên khớp nhau, do đó họ cần có cách thống nhất về phiên nào sẽ được sử dụng.

Mỹ Anh có thể chọn xóa trạng thái phiên trên thiết bị của mình hoặc khôi phục từ một bản sao lưu, dẫn đến việc Mỹ Anh hoặc Đan Nguyên có thể giữ các phiên bị mồ côi không còn khớp với bất kỳ phiên nào của bên kia.

Các giải pháp cho các vấn đề trên phải tính đến khả năng tin nhắn bị mất hoặc đến không theo thứ tự, rằng đồng bộ hóa thời gian không đáng tin cậy, và rằng kẻ tấn công có thể xâm phạm thiết bị và/hoặc can thiệp vào quá trình liên lạc.

Thuật toán Sesame quản lý việc tạo, xóa và sử dụng các phiên để hỗ trợ các yêu cầu này. Ý tưởng cốt lõi là mỗi thiết bị theo dõi một phiên _hoạt động_ với mỗi thiết bị khác mà nó đang giao tiếp, và sử dụng phiên hoạt động khi gửi tin nhắn đến thiết bị đó. Khi một tin nhắn được nhận qua một phiên _không hoạt động,_ phiên đó trở thành phiên hoạt động mới. Thông qua quá trình này, mỗi thiết bị sẽ dần thống nhất việc sử dụng một phiên duy nhất cho mỗi thiết bị từ xa mà nó giao tiếp.

### Giả định

Thuật toán Sesame dựa trên các giả định sau:

Máy chủ:

– Có một máy chủ lưu trữ thông tin hiện tại của tất cả người dùng và thiết bị.

– Máy chủ lưu trữ tạm thời các tin nhắn mà các thiết bị gửi cho nhau, cho đến khi các tin nhắn được truy xuất.

Người dùng:

– Tại bất kỳ thời điểm nào, có một tập hợp người dùng.

– Người dùng có thể được thêm hoặc xóa bất cứ lúc nào.

– Mỗi người dùng có một UserID (Ví dụ: tên người dùng hoặc số điện thoại).

– Sau khi một người dùng bị xóa, UserID của họ có thể được một người dùng mới sử dụng.

Thiết bị:

– Tại bất kỳ thời điểm nào, mỗi người dùng có một tập hợp thiết bị không rỗng.

– Người dùng có thể thêm hoặc xóa thiết bị bất cứ lúc nào.

– Mỗi thiết bị có một DeviceID duy nhất trong phạm vi UserID của người dùng đó.

– Các thiết bị có thể yêu cầu máy chủ cung cấp thông tin về những người dùng và thiết bị khác.

– Các thiết bị có thể lưu trữ trạng thái, nhưng tại bất kỳ thời điểm nào, trạng thái này có thể bị xóa toàn bộ hoặc một phần (Ví dụ: do lỗi phần cứng hoặc do hành động của người dùng), hoặc bị khôi phục về trạng thái trước đó (Ví dụ: khi khôi phục từ một bản sao lưu).

– Các thiết bị có đồng hồ đo thời gian trôi qua, nhưng không được đồng bộ hóa.

Hộp thư

– Máy chủ lưu trữ một hộp thư cho mỗi thiết bị.

– Một hộp thư chứa một tập hợp các tin nhắn được gửi đến thiết bị đó.

– Các tin nhắn bị xóa khỏi hộp thư khi được truy xuất.

– Các thiết bị có thể gửi tin nhắn đến hộp thư của các thiết bị khác. Máy chủ sẽ lưu trữ UserID và DeviceID của thiết bị gửi kèm theo tin nhắn.

– Các thiết bị có thể truy xuất tin nhắn từ hộp thư của chính chúng. Thiết bị nhận truy xuất tin nhắn cùng với UserID và DeviceID của thiết bị gửi từ máy chủ.

– Tin nhắn gửi đến hộp thư không đáng tin cậy trong hoạt động bình thường – chúng có thể bị hỏng, bị xóa, bị sắp xếp lại, bị trì hoãn hoặc bị trùng lặp trước khi đến hộp thư.

– Trong hoạt động bình thường, một tin nhắn không đến được hộp thư trong một khoảng thời gian nhất định (MAXLATENCY) được coi là đã bị mất.

– Tin nhắn gửi đến hộp thư có thể bị tác động bởi kẻ tấn công – một kẻ tấn công (bao gồm cả máy chủ) có thể làm hỏng, xóa, sắp xếp lại, trùng lặp hoặc giả mạo tin nhắn trước khi chúng đến hộp thư.

Phiên:

– Tin nhắn có thể được mã hóa và giải mã bằng một phiên, đây là một dữ liệu bí mật được lưu trữ bởi thiết bị.

– Việc giải mã một tin nhắn có thể thất bại (Ví dụ: nếu văn bản mã hóa bị giả mạo hoặc bị thay đổi, dẫn đến lỗi kiểm tra xác thực).

– Một tin nhắn được mã hóa chỉ có thể được giải mã bằng một phiên khớp.

– Mỗi phiên có một SessionID duy nhất.

– Một phiên có thể chứa dữ liệu khác nhau sau khi mã hóa hoặc giải mã một tin nhắn (Ví dụ: khóa có thể bị xóa sau khi sử dụng để đảm bảo tính bảo mật chuyển tiếp).

### Tạo phiên cho thiết bị gửi

– Mỗi thiết bị có một cặp khóa nhận dạng bao gồm khóa công khai và khóa riêng tư.

– Một thiết bị có thể tạo một phiên khởi tạo mới bất cứ lúc nào.

– Việc tạo một phiên khởi tạo yêu cầu chỉ định khóa công khai nhận dạng của thiết bị nhận được chỉ định để nhận phiên khớp.

– Việc tạo một phiên mới có thể thất bại (Ví dụ: thiết bị gửi có thể cần truy xuất và xác thực mật mã các tham số liên quan đến thiết bị nhận, chẳng hạn như prekeys).

### Tạo phiên cho thiết bị nhận

– Tất cả tin nhắn được mã hóa bởi một phiên khởi tạo đều là tin nhắn khởi tạo.

– Tất cả tin nhắn khởi tạo đều chứa khóa công khai nhận dạng của thiết bị gửi trong phần tiêu đề không mã hóa.

– Khi nhận được một tin nhắn khởi tạo, thiết bị nhận có thể tạo một phiên khớp, được sử dụng để giải mã tin nhắn khởi tạo.

– Việc tạo một phiên khớp có thể thất bại (Ví dụ: nếu quá trình xác thực mật mã của tin nhắn khởi tạo thất bại).

– Khi giải mã một tin nhắn lần đầu tiên, một phiên khởi tạo trở thành phiên thông thường (không khởi tạo), và do đó ngừng tạo tin nhắn khởi tạo.

## Thuật toán Sesame

Thuật toán Sesame định nghĩa trạng thái mà mỗi thiết bị lưu trữ, cũng như các thuật toán sử dụng trạng thái này để gửi và nhận tin nhắn được mã hóa.

### Trạng thái thiết bị

Mỗi thiết bị lưu trữ một tập hợp các _UserRecord_ (Bản ghi người dùng) cho các đối tác liên lạc của mình, được lập chỉ mục theo _UserID._

Mỗi _UserRecord_ chứa một tập hợp các _DeviceRecord_ (Bản ghi thiết bị), được lập chỉ mục theo _DeviceID._

Mỗi _DeviceRecord_ có thể chứa một phiên hoạt động và/hoặc một danh sách có thứ tự các phiên không hoạt động.

Mỗi thiết bị lưu trữ một _UserRecord_ cho chính _UserID_ của nó, nhưng không lưu trữ một _DeviceRecord_ cho chính _DeviceID_ của nó. _UserRecord_ này cho phép thiết bị gửi một bản sao của mỗi tin nhắn gửi đi đến các thiết bị khác của người dùng.

Một _UserRecord_ hoặc _DeviceRecord_ có thể được đánh dấu là _stale_ (cũ), nghĩa là bản ghi tương ứng với một người dùng hoặc thiết bị đã bị xóa nhưng vẫn được giữ lại để giải mã các tin nhắn bị trễ.

Một bản ghi cũ có thể bị xóa bởi thiết bị gửi bất cứ lúc nào (bao gồm ngay sau khi bị đánh dấu là cũ). Để xử lý các tin nhắn bị trễ, chính sách xóa được khuyến nghị là bản ghi cũ nên chứa một dấu thời gian ghi lại thời điểm nó được đánh dấu là cũ. Khi dấu thời gian này cũ hơn _MAXLATENCY,_ bản ghi cũ có thể được xóa một cách an toàn (mà không sợ mất tin nhắn) sau lần tiếp theo khi thiết bị tìm nạp và xử lý tất cả các tin nhắn từ hộp thư của nó.

Mỗi thiết bị lưu trữ một cặp khóa danh tính (_identity key pair,_ gồm khóa công khai và khóa riêng tư) để xác thực mật mã. Một thiết bị sẽ luôn có cùng một _DeviceID_ và cặp khóa danh tính (để thay đổi những giá trị này trên một thiết bị vật lý, thiết bị đó phải bị xóa logic và sau đó được thêm lại với các giá trị mới).

Sesame hỗ trợ hai mô hình khóa khác nhau:

– Với khóa danh tính theo người dùng (_per – user identity keys_), tất cả các thiết bị của một người dùng chia sẻ cùng một cặp khóa.

– Với khóa danh tính theo thiết bị (_per – device identity keys_), mỗi thiết bị có thể có một cặp khóa khác nhau.

Với khóa danh tính theo người dùng, khóa công khai danh tính của các thiết bị khác được lưu trữ trong _UserRecord._ Với khóa danh tính theo thiết bị, khóa công khai danh tính của các thiết bị khác được lưu trữ trong _DeviceRecord._

### Cập nhật trạng thái thiết bị

Các thiết bị có thể sửa đổi trạng thái cục bộ của chúng theo nhiều cách:

– Thiết bị có thể xóa _UserRecord,_ _DeviceRecord_ và các phiên.

– Nếu phiên cuối cùng trong một _DeviceRecord_ bị xóa, thì _DeviceRecord_ cũng bị xóa.

– Nếu _DeviceRecord_ cuối cùng trong một _UserRecord_ bị xóa, thì _UserRecord_ cũng bị xóa.

– Thiết bị có thể chèn phiên mới vào _DeviceRecord._ Phiên được chèn luôn trở thành phiên hoạt động của _DeviceRecord,_ và phiên hoạt động trước đó (nếu có) được di chuyển lên đầu danh sách các phiên không hoạt động.

– Nếu danh sách các phiên không hoạt động trở nên quá lớn, các phiên có thể bị xóa từ cuối danh sách.

– Thiết bị có thể kích hoạt một phiên không hoạt động trong _DeviceRecord,_ điều này sẽ chuyển phiên không hoạt động thành phiên hoạt động, và phiên hoạt động trước đó (nếu có) sẽ được di chuyển lên đầu danh sách các phiên không hoạt động.

– Thiết bị có thể đánh dấu _UserRecord_ hoặc _DeviceRecord_ là cũ.

– Thiết bị có thể cập nhật có điều kiện bản ghi của mình dựa trên bộ ba _(UserID, DeviceID, public key)._

### Gửi tin nhắn

Đầu vào của quá trình gửi tin nhắn của Sesame là một đoạn văn bản thuần túy (_plaintext_) và một tập hợp các _UserID_ người nhận. Tập hợp người nhận bao gồm cả _UserID_ của thiết bị gửi.

Văn bản thuần túy được mã hóa và gửi đi bởi thiết bị gửi bằng quy trình sau cho mỗi _UserID_ người nhận:

1. Nếu một _UserRecord_ không cũ tồn tại cho _UserID_ người nhận, thì đối với mỗi _DeviceRecord_ không cũ trong _UserRecord_ có chứa một phiên hoạt động, thiết bị gửi sẽ mã hóa văn bản thuần túy bằng phiên hoạt động đó.

2. _UserID_ người nhận được gửi đến máy chủ, cùng với danh sách tin nhắn đã mã hóa và danh sách tương ứng các _DeviceID_ chỉ ra hộp thư người nhận cho mỗi tin nhắn. Nếu không có phiên hoạt động nào phù hợp, danh sách này sẽ trống.

3. Nếu _UserID_ người nhận đang được sử dụng và danh sách _DeviceID_ của người gửi là hiện tại đối với _UserID_ người nhận, thì máy chủ chấp nhận các tin nhắn và gửi chúng đến các hộp thư tương ứng.

4. Nếu không, máy chủ từ chối tin nhắn và thông báo cho thiết bị gửi nếu _UserID_ người nhận không tồn tại, hoặc cung cấp danh sách _DeviceID_ cũ và mới để thiết bị gửi cập nhật thông tin của mình.

5. Nếu máy chủ chỉ ra rằng _UserID_ người nhận không tồn tại, thiết bị gửi đánh dấu _UserRecord_ liên quan (nếu có) là cũ và dừng quá trình gửi cho _UserID_ đó.

6. Đối với mỗi _DeviceID_ cũ, thiết bị gửi đánh dấu _DeviceRecord_ liên quan là cũ.

7. Đối với mỗi _DeviceID_ mới, thiết bị gửi chuẩn bị mã hóa với bộ ba _(UserID, DeviceID, public key)._

8. Quá trình này được khởi động lại từ bước 1 cho _UserID_ người nhận hiện tại.

9. Nếu xảy ra lỗi trong quá trình mã hóa (Ví dụ: phản hồi máy chủ không hợp lệ hoặc lỗi khi tạo phiên), thiết bị gửi sẽ hủy bỏ bất kỳ thay đổi nào đối với _UserRecord_ liên quan để tránh trạng thái không nhất quán.

10. Để tránh vòng lặp vô hạn do máy chủ độc hại hoặc lỗi, thiết bị nên đặt giới hạn số lần lặp lại quá trình gửi tin nhắn cho một người nhận.

### Nhận tin nhắn

Đầu vào của quá trình nhận tin nhắn Sesame là một tin nhắn được mã hóa cùng với UserID và DeviceID của người gửi, tất cả đều được truy xuất từ máy chủ.

Cách thức lấy tin nhắn không thuộc phạm vi của Bài viết này. Các thiết bị có thể định kỳ truy vấn máy chủ hoặc nhận thông báo khi có tin nhắn mới sẵn sàng để truy xuất.

Một tin nhắn được mã hóa sẽ được giải mã bởi thiết bị nhận theo quy trình sau:

Nếu tin nhắn được mã hóa là một tin nhắn khởi tạo và thiết bị nhận không có một DeviceRecord tương ứng chứa phiên có thể giải mã tin nhắn, thì các bước sau được thực hiện:

Khóa công khai liên quan được trích xuất từ phần tiêu đề của tin nhắn.

Thiết bị cập nhật có điều kiện các bản ghi của nó dựa trên bộ giá trị (UserID của người gửi, DeviceID của người gửi, khóa công khai liên quan).

Thiết bị tạo một phiên mới bằng cách sử dụng tin nhắn khởi tạo và chèn phiên mới vào DeviceRecord tương ứng.

Nếu không có phiên nào trong DeviceRecord liên quan có thể giải mã tin nhắn, thì tin nhắn được mã hóa sẽ bị loại bỏ, tất cả các thay đổi trạng thái thiết bị bị hủy bỏ, và quy trình này kết thúc.

Ngược lại, tin nhắn được giải mã bằng phiên tương ứng.

Nếu phiên liên quan không ở trạng thái hoạt động, nó sẽ được kích hoạt.

Nếu xảy ra bất kỳ lỗi nào trong quá trình phân tích hoặc xử lý tin nhắn, bao gồm lỗi mật mã trong quá trình tạo phiên hoặc giải mã tin nhắn, thì thiết bị sẽ hủy bỏ tất cả các thay đổi trạng thái, loại bỏ tin nhắn được mã hóa và kết thúc quy trình giải mã.

## Các tính năng tùy chọn

### Yêu cầu gửi lại và biên nhận giao hàng (delivery receipts)

Nếu trạng thái của thiết bị gửi hoặc nhận đã bị khôi phục về trạng thái trước đó hoặc trạng thái của thiết bị nhận đã bị xóa, thì có khả năng thiết bị nhận sẽ nhận được một tin nhắn hợp lệ nhưng không thể giải mã được.

Để xử lý tình huống này mà không làm mất tin nhắn, thiết bị gửi có thể lưu trữ một tập hợp các _MessageRecord,_ được lập chỉ mục bằng một _MessageID_ duy nhất cho mỗi tin nhắn được mã hóa. Nếu một tin nhắn được mã hóa và gửi đến nhiều thiết bị nhận, thì thiết bị gửi sẽ lưu một _MessageRecord_ riêng biệt cho từng thiết bị nhận, mỗi bản ghi có một _MessageID_ riêng. Mỗi _MessageRecord_ chứa các giá trị sau:

- Nội dung văn bản gốc của tin nhắn đã mã hóa.

- _UserID_ của thiết bị nhận.

- _SessionID_ của phiên đã được sử dụng để mã hóa tin nhắn.

Khi thiết bị nhận nhận được một tin nhắn không thể giải mã, thiết bị nhận sẽ gửi một tin nhắn yêu cầu gửi lại không mã hóa đến hộp thư của thiết bị gửi ban đầu, trong đó chứa _MessageID_ của tin nhắn không thể giải mã.

Khi thiết bị gửi ban đầu truy xuất một yêu cầu gửi lại, cùng với _UserID_ và _DeviceID_ của thiết bị đã gửi yêu cầu đó, nó sẽ thực hiện quy trình gửi lại như sau:

1. Nếu _MessageID_ không trỏ đến bất kỳ _MessageRecord_ hiện tại nào, thì yêu cầu gửi lại sẽ bị loại bỏ và quy trình này sẽ kết thúc.

2. Nếu _MessageRecord_ liên quan không chứa một _UserID_ trùng với _UserID_ đã gửi yêu cầu gửi lại, thì yêu cầu gửi lại sẽ bị loại bỏ và quy trình này sẽ kết thúc.
 (_Lưu ý rằng không có kiểm tra tương tự đối với _DeviceID;_ để linh hoạt hơn, yêu cầu gửi lại được phép đến từ một _DeviceID_ khác với thiết bị ban đầu đã nhận tin nhắn._)

3. Nếu không tồn tại một _UserRecord_ hợp lệ và một _DeviceRecord_ hợp lệ với một phiên đang hoạt động cho _UserID_ và _DeviceID_ tương ứng; hoặc nếu có một phiên nhưng nó trùng với _SessionID_ trong _MessageRecord,_ thì:

– Thiết bị gửi lại truy vấn máy chủ để lấy khóa công khai nhận dạng tương ứng với _UserID_ và _DeviceID._

– Nếu máy chủ cho biết rằng _UserID_ hoặc _DeviceID_ của người nhận không tồn tại, thì các bản ghi liên quan sẽ bị đánh dấu là không hợp lệ (_stale_), yêu cầu gửi lại sẽ bị loại bỏ và quy trình này sẽ kết thúc.

4. Thiết bị gửi chuẩn bị mã hóa lại tin nhắn với bộ ba (_UserID,_ _DeviceID,_ khóa công khai).

5. Nếu phiên hoạt động trong _DeviceRecord_ trùng với _SessionID_ từ _MessageRecord,_ thì thiết bị gửi sẽ tạo một phiên mới với khóa công khai tương ứng của _DeviceRecord._ Phiên mới này sẽ được chèn vào _DeviceRecord._ (_Điều này ngăn thiết bị gửi tiếp tục gửi tin nhắn bằng một phiên cũ đã bị tách rời và không còn tương thích với thiết bị nhận._)

6. Thiết bị gửi lại mã hóa nội dung tin nhắn từ _MessageRecord_ bằng phiên đang hoạt động từ _DeviceRecord_ tương ứng.

7. Thiết bị gửi lại gửi tin nhắn đã mã hóa đến máy chủ, kèm theo _UserID_ và _DeviceID_ để chỉ định hộp thư nhận.

8. Nếu máy chủ cho biết rằng _UserID_ hoặc _DeviceID_ của người nhận không tồn tại, thì các bản ghi liên quan sẽ bị đánh dấu là không hợp lệ, yêu cầu gửi lại sẽ bị loại bỏ và quy trình này sẽ kết thúc.

9. Nếu không có vấn đề gì, máy chủ sẽ chấp nhận tin nhắn và gửi nó đến hộp thư liên quan. Thiết bị gửi lại sẽ xóa _MessageRecord_ cũ và thêm một _MessageRecord_ mới cho tin nhắn đã mã hóa mới.

Các _MessageRecord_ có thể bị xóa sau một khoảng thời gian nhất định hoặc nếu nội dung văn bản gốc mà chúng tham chiếu đã bị người dùng xóa khỏi thiết bị gửi. Ngoài ra, các thiết bị có thể gửi biên nhận giao hàng sau khi giải mã tin nhắn thành công.

- Biên nhận giao hàng liên kết với một _MessageID_ cụ thể và thông báo cho thiết bị gửi rằng _MessageRecord_ có thể bị xóa.

- Biên nhận giao hàng có thể được mã hóa hoặc không mã hóa. (_Vì chúng đi kèm với mỗi tin nhắn nhận được, nên việc mã hóa chúng không mang lại nhiều lợi ích._)

Để tránh gửi lại quá mức, các thiết bị nên đặt giới hạn về số lần chúng chấp nhận gửi lại một tin nhắn. Nếu có bất kỳ lỗi nào khác xảy ra, thiết bị gửi lại sẽ hủy mọi thay đổi trạng thái và kết thúc quy trình.

### Hết hạn phiên

Có thể cần thay thế định kỳ các phiên cũ bằng các phiên mới để tăng cường bảo mật. Một cách tiếp cận là gán một dấu thời gian cho mỗi phiên. Dấu thời gian được đặt thành thời gian hiện tại khi một phiên khởi tạo được tạo. Khi các tin nhắn khởi tạo được truy xuất, máy chủ thông báo cho thiết bị nhận về khoảng thời gian giữa lúc tin nhắn đến hộp thư và thời điểm hiện tại. Thiết bị nhận đặt dấu thời gian cho bất kỳ phiên nào được khởi tạo thành thời gian hiện tại trừ đi khoảng thời gian này.

Hai hằng số thời gian MAXSEND và MAXRECV được định nghĩa, trong đó MAXRECV phải lớn hơn MAXSEND + 2(MAXLATENCY). Sau khoảng thời gian MAXSEND kể từ dấu thời gian của nó, một phiên không còn được sử dụng để mã hóa nữa và sẽ được chuyển lên đầu danh sách các phiên không hoạt động nếu nó đang hoạt động. Các nỗ lực kích hoạt một phiên như vậy sẽ không có hiệu lực. Sau khoảng thời gian MAXRECV kể từ dấu thời gian của một phiên, phiên đó có thể bị xóa, sau khi đã truy xuất và xử lý tất cả các tin nhắn trong hộp thư.

## Cân nhắc triển khai

## Máy chủ

Để đơn giản hóa việc trình bày, Bài viết này thảo luận về một máy chủ (server) duy nhất xử lý tất cả các bản ghi của người dùng và thiết bị, cũng như tất cả các tin nhắn. Trong một hệ thống thực tế, các chức năng này có thể được phân bổ cho nhiều thực thể khác nhau.

Ví dụ, các máy chủ khác nhau có thể xử lý các nhóm người dùng khác nhau. Trong trường hợp này, Mỹ Anh sẽ gửi tin nhắn đến Đan Nguyên bằng cách liên hệ với máy chủ của Đan Nguyên, và Đan Nguyên sẽ gửi tin nhắn đến Mỹ Anh bằng cách liên hệ với máy chủ của Mỹ Anh.

Một ví dụ khác là các máy chủ xử lý bản ghi của người dùng và thiết bị có thể được tách biệt khỏi các máy chủ xử lý hộp thư.

Các phân chia nhiệm vụ khác cũng có thể được thực hiện, nhưng việc phân tích tất cả các khả năng này nằm ngoài phạm vi của Bài viết này.

### X3DH và Double Ratchet

Sesame được thiết kế để sử dụng với các phiên Double Ratchet được tạo thông qua thỏa thuận khóa X3DH.

Trong cách triển khai này, các thiết bị sẽ công bố các khóa tạm thời sử dụng một lần và các khóa tạm thời có chữ ký lên máy chủ, cùng với khóa công khai định danh của chúng.

Để tạo một phiên khởi tạo, thiết bị gửi sẽ liên hệ với máy chủ và truy xuất một gói khóa tạm thời chứa khóa công khai định danh của thiết bị nhận, khóa tạm thời có chữ ký, và một khóa tạm thời sử dụng một lần (nếu có sẵn). Các giá trị này sẽ được thuật toán X3DH sử dụng để tạo ra cả khóa bí mật khởi tạo một phiên Double Ratchet và một tin nhắn khởi tạo X3DH.

Tin nhắn khởi tạo X3DH được đính kèm vào mọi tin nhắn khởi tạo để người nhận có thể sử dụng nó để tạo một phiên Double Ratchet tương ứng. Khi nhận được phản hồi từ tin nhắn khởi tạo, người gửi ban đầu sẽ ngừng đính kèm tin nhắn khởi tạo X3DH vào các tin nhắn tiếp theo, và từ đó các thiết bị sẽ chỉ giao tiếp bằng Double Ratchet.

## Cân nhắc bảo mật

### Xác thực

Sesame dựa vào người dùng để xác thực khóa công khai định danh của đối tác liên lạc. Ví dụ, hai người dùng có thể so sánh dấu vân tay của khóa công khai cho tất cả thiết bị của họ theo cách thủ công hoặc bằng cách quét mã QR. Chi tiết của các phương thức xác thực nằm ngoài phạm vi của Bài viết này.

Nếu xác thực không được thực hiện, người dùng sẽ không nhận được bất kỳ đảm bảo mật mã nào về danh tính của đối tác liên lạc.

Một thiết bị Sesame có thể gặp phải sự thay đổi khóa công khai định danh của một người dùng từ xa khi gửi, nhận hoặc gửi lại tin nhắn.

Điều này có thể chỉ ra rằng một người dùng mới đang sử dụng UserID, rằng người dùng đã cài đặt lại ứng dụng, hoặc rằng người dùng đã thêm thiết bị mới (nếu đang sử dụng khóa định danh riêng cho từng thiết bị). Điều này cũng có thể là dấu hiệu của một nỗ lực giả mạo danh tính người dùng từ xa bởi một máy chủ độc hại hoặc một kẻ tấn công đã chiếm đoạt UserID của người dùng ban đầu.

Bất cứ khi nào phát hiện sự thay đổi trong khóa định danh, người dùng phải thực hiện lại quy trình xác thực, nếu không, họ sẽ không có đảm bảo mật mã về danh tính của người liên lạc. Một thiết bị có thể muốn tạm dừng (hoặc hủy bỏ) quá trình gửi, nhận hoặc gửi lại tin nhắn nếu phát hiện sự thay đổi khóa, và chỉ tiếp tục (hoặc khởi động lại) quá trình này khi người dùng xác nhận sự thay đổi. Trong trường hợp này, thao tác cập nhật có điều kiện sẽ tạm dừng (hoặc tạo lỗi) khi phát hiện sự thay đổi khóa.

### Thiết bị bị xâm nhập

Bảo mật sẽ bị phá vỡ nghiêm trọng nếu kẻ tấn công biết được các giá trị bí mật của thiết bị, chẳng hạn như khóa riêng định danh và trạng thái phiên. Để khắc phục tình trạng thiết bị bị xâm nhập, người dùng phải thay thế thiết bị bị xâm nhập, thay đổi cặp khóa định danh bị xâm nhập, và thông báo cho tất cả đối tác liên lạc về khóa công khai mới.

Kẻ tấn công có thể lợi dụng sự xâm nhập theo nhiều cách:

– Nếu kẻ tấn công có khóa riêng định danh của thiết bị, họ có thể giả mạo thiết bị đó để giao tiếp với các thiết bị khác.

– Nếu kẻ tấn công có thể xâm nhập thiết bị, họ có thể duy trì quyền truy cập cửa hậu vào thiết bị hoặc làm giảm độ an toàn của nó trong tương lai (Ví dụ: làm suy yếu trình tạo số ngẫu nhiên).

– Nếu kẻ tấn công có thể đánh cắp các khóa bí mật của thiết bị, họ cũng có thể đánh cắp văn bản thuần của các tin nhắn đã lưu trữ cục bộ và bất kỳ văn bản thuần nào trong MessageRecords.

– Kẻ tấn công có thể cố gắng sử dụng các khóa bị xâm nhập để giải mã thụ động. Ví dụ, họ có thể cố gắng giải mã ngược các tin nhắn cũ hoặc giải mã lén lút các tin nhắn trong tương lai.

Sesame kế thừa khả năng chống lại giải mã thụ động từ các thuật toán tạo phiên và mã hóa tin nhắn mà nó sử dụng. Ví dụ, khi Sesame sử dụng X3DH và thuật toán Double Ratchet, việc giải mã thụ động các tin nhắn trước và sau khi xâm nhập bị hạn chế nghiêm ngặt nhờ vào việc sử dụng các khóa tạm thời, khóa tiền thiết lập và cơ chế ratcheting.

Tuy nhiên, không có biện pháp nào có thể loại bỏ hoàn toàn các rủi ro này. Một khi thiết bị bị xâm nhập, cách duy nhất để đảm bảo an toàn là thay thế hoàn toàn thiết bị và tất cả các khóa bị xâm nhập.

### Bảo vệ giao tiếp với máy chủ

Giao tiếp giữa các thiết bị và máy chủ nên được mã hóa và xác thực. Điều này giúp giảm thiểu lượng siêu dữ liệu bị lộ ra trước những kẻ nghe trộm, đồng thời làm cho việc thực hiện các cuộc tấn công chủ động hoặc thụ động vào giao tiếp giữa các thiết bị trở nên khó khăn hơn.

Nếu kẻ tấn công có thể giả mạo một thiết bị nạn nhân khi xác thực với máy chủ, họ có thể lấy được các tin nhắn gửi đến thiết bị này. Mặc dù họ không thể giải mã các tin nhắn, nhưng vẫn có thể biết được UserID và DeviceID của người gửi.

Để giảm thiểu điều này, máy chủ có thể gán DeviceID ngẫu nhiên để tránh việc sử dụng lại hoặc yêu cầu người đăng ký chứng minh quyền sở hữu khóa riêng định danh (Ví dụ: bằng cách ký một nonce trong quá trình đăng ký).

### Xóa dữ liệu cũ

Khi người dùng chọn xóa một tin nhắn văn bản từ thiết bị của họ, tất cả các MessageRecords chứa bản sao của tin nhắn đó cũng nên bị xóa.

Sesame sử dụng ngưỡng thời gian để xác định khi nào có thể xóa các phiên cũ một cách an toàn. Ý tưởng là đợi một khoảng thời gian MAXLATENCY sau khi tin nhắn cuối cùng có thể đã được gửi, để đảm bảo rằng tin nhắn đã đến hộp thư của người nhận hoặc bị mất.

Nếu có lỗi đồng hồ, người nhận có thể xóa phiên quá sớm, dẫn đến các tin nhắn bị trì hoãn không thể giải mã được. Ngược lại, nếu đồng hồ không cập nhật chính xác, các phiên cũ có thể không bao giờ bị xóa.

Để giảm thiểu rủi ro này, các máy khách nên sử dụng đồng hồ an toàn và đáng tin cậy, không thể bị kẻ tấn công thao túng.

### Xóa dữ liệu cũ

Khi người dùng chọn xóa một tin nhắn văn bản từ thiết bị của họ, tất cả các MessageRecords chứa bản sao của tin nhắn đó cũng nên bị xóa.

Sesame sử dụng các ngưỡng thời gian để xác định khi nào có thể xóa các phiên cũ một cách an toàn (Ví dụ: xóa các UserRecords và DeviceRecords cũ, cũng như hết hạn phiên). Ý tưởng là người nhận sẽ đợi một khoảng thời gian MAXLATENCY sau khi tin nhắn cuối cùng có thể đã được gửi mà vẫn yêu cầu phiên cũ. Sau thời gian này, các tin nhắn đó đã đến hộp thư của người nhận hoặc bị mất. Khi người nhận truy xuất và xử lý tất cả tin nhắn trong hộp thư, họ có thể chắc chắn rằng không còn tin nhắn nào cần đến phiên cũ, và do đó có thể xóa các phiên này.

Nếu có lỗi đồng hồ khiến người nhận xóa phiên quá sớm, thì có nguy cơ các tin nhắn bị trì hoãn có thể đến mà không thể giải mã được. Nếu đồng hồ của người nhận không cập nhật đúng cách, thì các phiên cũ có thể không bao giờ bị xóa.

Để giảm thiểu rủi ro này, các máy khách nên sử dụng đồng hồ an toàn và đáng tin cậy, không thể bị kẻ tấn công thao túng. Máy khách cũng có thể kết hợp kiểm tra thời gian với các phương pháp kiểm tra khác (Ví dụ: đếm số vòng tin nhắn hoặc các sự kiện khác) để đảm bảo rằng các lỗi đồng hồ ngắn không dẫn đến việc xóa dữ liệu quan trọng.

### Vòng lặp giới hạn và lưu trữ giới hạn (Bounded loops and bounded storage)

Vòng lặp gửi tin nhắn sẽ liên tục cố gắng điều chỉnh bản ghi thiết bị sao cho khớp với bản ghi của máy chủ. Quá trình gửi lại cũng có thể được kích hoạt nhiều lần để gửi lại một tin nhắn đến người nhận.

Để tránh vòng lặp quá mức trong cả hai trường hợp, các thiết bị được khuyến nghị sử dụng một bộ đếm với mỗi quy trình (Ví dụ: bộ đếm được lưu trữ trong bộ nhớ trong quá trình gửi và được lưu trong MessageRecord đối với quá trình gửi lại). Nếu số lần thử gửi hoặc gửi lại tin nhắn vượt quá một mức nhất định, thiết bị sẽ kích hoạt lỗi.

Một thiết bị cũng có thể bị buộc phải tạo một số lượng quá lớn DeviceRecords hoặc phiên cho một UserID nào đó. Để kiểm soát điều này, thiết bị có thể đặt một giới hạn hợp lý về số lượng DeviceRecords mà nó lưu trữ cho một UserRecord. Tương tự, thiết bị có thể đặt giới hạn về số lượng phiên mà nó lưu trữ cho một DeviceRecord. Nếu vượt quá giới hạn này, các phiên cũ nhất trong danh sách các phiên không hoạt động sẽ bị xóa.

## Xử lý lỗi

Cần đảm bảo rằng bất kỳ lỗi nào trong quá trình gửi, nhận hoặc gửi lại tin nhắn đều kết thúc quá trình liên quan và hủy bỏ bất kỳ thay đổi nào có thể khiến thiết bị rơi vào trạng thái không nhất quán.

Lỗi trong quá trình gửi hoặc gửi lại tin nhắn có thể khiến một tin nhắn được gửi đến một số hộp thư người nhận nhưng không phải tất cả.

Các giao thức cấp cao hơn được xây dựng trên Sesame phải sẵn sàng xử lý tình trạng tin nhắn chỉ được gửi một phần đến một nhóm người nhận. Một giải pháp khả thi là bổ sung cơ chế giao dịch, trong đó tin nhắn chỉ được xác nhận trong hộp thư nếu việc gửi thành công đến tất cả người dùng. Đồng thời, giao thức cũng nên hỗ trợ tính năng gửi lại tin nhắn để tăng khả năng tin nhắn được chuyển đi thành công.

<figure><img src="https://banmaixanh.vercel.app/image/cover/001-071.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>