---
pubDatetime: 2022-08-07T10:10:00Z
title: Tìm hiểu về thuật toán X3DH – Giải pháp thiết lập khóa bí mật chung (Shared secret key)
description: Thuật toán X3DH là giao thức trao đổi khóa được thiết kế đặc biệt cho các ứng dụng nhắn tin mã hóa đầu cuối, với mục tiêu tối cao là đảm bảo tính bảo mật và chống lại các cuộc tấn công nghe trộm.
image: https://banmaixanh.vercel.app/image/cover/001-125.jpg
tags:
  - developer
  - bao mat
  - mat ma hoc
  - signal protocol
  - ma hoa thong tin
  - bao mat thong tin
  - double ratchet
  - kdf
  - x3dh
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

_Thuật toán X3DH là giao thức trao đổi khóa được thiết kế đặc biệt cho các ứng dụng nhắn tin mã hóa đầu cuối, với mục tiêu tối cao là đảm bảo tính bảo mật và chống lại các cuộc tấn công nghe trộm._

## Giới thiệu

Bài viết này mô tả giao thức thỏa thuận khóa _X3DH_ (hoặc _Extended Triple Diffie – Hellman_). X3DH thiết lập một khóa bí mật chung giữa hai bên, những người xác thực lẫn nhau dựa trên khóa công khai. X3DH cung cấp tính bảo mật chuyển tiếp và khả năng từ chối mật mã.

X3DH là giao thức trao đổi khóa được thiết kế đặc biệt cho các ứng dụng nhắn tin mã hóa đầu cuối, với mục tiêu tối cao là đảm bảo tính bảo mật và chống lại các cuộc tấn công nghe trộm. Khác biệt so với các phương pháp truyền thống, X3DH kết hợp ba phép trao đổi Diffie – Hellman để tạo ra một khóa phiên an toàn và độc đáo. Cơ chế hoạt động của thuật toán cho phép các bên xác minh danh tính và thiết lập một kênh liên lạc được mã hóa mà không cần trao đổi trực tiếp khóa công khai, qua đó tăng cường tính bảo mật của quá trình giao tiếp.

Ứng dụng thực tế của X3DH được chứng minh rõ nét trong các nền tảng nhắn tin an toàn như Signal, WhatsApp và một số ứng dụng liên lạc chuyên nghiệp khác. Thuật toán đảm bảo rằng các cuộc trò chuyện được bảo vệ hoàn toàn khỏi các mối đe dọa bảo mật, ngay cả khi kênh truyền không được coi là an toàn tuyệt đối. Tính năng quan trọng của X3DH nằm ở khả năng cung cấp tính toàn vẹn và bí mật của thông điệp, đồng thời hỗ trợ xác thực người dùng một cách hiệu quả.

[X3DH](https://nhavantuonglai.com/article/tim-hieu-x3dh) được thiết kế cho môi trường không đồng bộ, nơi một người dùng (Đan Nguyên) đang ngoại tuyến nhưng đã công bố một số thông tin lên máy chủ. Một người dùng khác (Mỹ Anh) muốn sử dụng thông tin đó để gửi dữ liệu được mã hóa cho Đan Nguyên và đồng thời thiết lập một khóa bí mật chung cho các lần liên lạc trong tương lai.

## Kiến thức cơ bản

### Các tham số của X3DH

Một ứng dụng sử dụng X3DH phải quyết định một số tham số sau:

| Tên | Định nghĩa |
|-------|-----------|
| Curve | X25519 hoặc X448. |
| Hàm băm (hash) | Một hàm băm 256 hoặc 512 bit (Ví dụ: SHA256 hoặc SHA512). |
| Mô tả | Một chuỗi ASCII xác định ứng dụng. |

Ví dụ, một ứng dụng có thể chọn đường cong _X25519,_ hàm băm _SHA512_ và thông tin ứng dụng là _MyProtocol._

Ngoài ra, ứng dụng phải xác định một hàm mã hóa _Encode(PK)_ để mã hóa một khóa công khai X25519 hoặc X448 thành một dãy byte. Cách mã hóa được khuyến nghị bao gồm một hằng số một byte để biểu thị loại đường cong, tiếp theo là mã hóa _little endian_ của tọa độ _u_ theo tiêu chuẩn trong.

### Ký hiệu mật mã

X3DH sử dụng các ký hiệu sau:

– Phép nối hai dãy byte _X_ và _Y_ được ký hiệu là _X || Y._

– _DH(PK1, PK2)_ biểu thị một dãy byte là đầu ra của một hàm Elliptic Curve Diffie – Hellman, được tính dựa trên cặp khóa liên quan đến các khóa công khai _PK1_ và _PK2._ Hàm này có thể là _X25519_ hoặc _X448_ từ, tùy thuộc vào tham số đường cong.

– _Sig(PK, M)_ biểu thị một dãy byte là chữ ký _XEdDSA_ trên chuỗi byte _M,_ có thể được xác minh bằng khóa công khai _PK_ và được tạo ra bằng cách ký _M_ với khóa riêng tương ứng của _PK._ Chức năng ký và xác minh của _XEdDSA_ được mô tả trong.

– _KDF(KM)_ biểu thị đầu ra 32 byte từ thuật toán _HKDF_ với các đầu vào:

– Khóa đầu vào _HKDF_ = _F || KM,_ trong đó _KM_ là một dãy byte chứa dữ liệu bí mật, và _F_ là một dãy byte chứa 32 byte _0xFF_ nếu đường cong là _X25519,_ hoặc 57 byte _0xFF_ nếu đường cong là _X448._ _F_ được sử dụng để phân tách miền mật mã với _XEdDSA._

– Muối _HKDF_ = một dãy byte có độ dài bằng độ dài đầu ra của hàm băm và chứa toàn số 0.

– Thông tin _HKDF_ = tham số _info._

### Các vai trò

Giao thức X3DH bao gồm ba thực thể: _Mỹ Anh,_ _Đan Nguyên,_ và một _máy chủ._

– Mỹ Anh muốn gửi dữ liệu ban đầu cho Đan Nguyên bằng cách sử dụng mã hóa và thiết lập một khóa bí mật chung có thể được sử dụng cho liên lạc hai chiều.

– Đan Nguyên muốn cho phép những người như Mỹ Anh thiết lập khóa chung với mình và gửi dữ liệu được mã hóa. Tuy nhiên, Đan Nguyên có thể ngoại tuyến khi Mỹ Anh thực hiện thao tác này. Để hỗ trợ điều này, Đan Nguyên có một mối quan hệ với một máy chủ.

– _Máy chủ_ có thể lưu trữ tin nhắn từ Mỹ Anh gửi cho _Đan Nguyên,_ để Đan Nguyên có thể truy xuất sau này. Máy chủ cũng cho phép Đan Nguyên công bố một số dữ liệu mà nó sẽ cung cấp cho những người như _Mỹ Anh._

Trong một số hệ thống, vai trò của máy chủ có thể được chia cho nhiều thực thể khác nhau, nhưng để đơn giản, giả định rằng chỉ có một máy chủ cung cấp các chức năng trên cho Mỹ Anh và _Đan Nguyên._

### Các khóa

X3DH sử dụng các khóa công khai đường cong elliptic sau:

| Tên | Định nghĩa |
|-------|-----------|
| IKA | Khóa nhận dạng của _Mỹ Anh. |
| EKA | Khóa tạm thời của _Mỹ Anh. |
| IKB | Khóa nhận dạng của _Đan Nguyên. |
| SPKB | Khóa tiền ký (prekey) có chữ ký của _Đan Nguyên. |
| OPKB | Khóa tiền một lần (one-time prekey) của _Đan Nguyên. |

Tất cả các khóa công khai đều có khóa riêng tương ứng, nhưng để đơn giản hóa mô tả, chỉ tập trung vào khóa công khai.

Các khóa công khai được sử dụng trong một phiên _X3DH_ phải tất cả ở dạng _X25519_ hoặc tất cả ở dạng _X448,_ tùy thuộc vào tham số đường cong.

Mỗi bên có một khóa công khai nhận dạng dài hạn (_IKA_ cho _Mỹ Anh,_ _IKB_ cho Đan Nguyên).

Đan Nguyên cũng có một khóa _SPKB_ (khóa tiền ký), được thay đổi định kỳ, và một tập hợp khóa _OPKB_ (khóa tiền một lần), mỗi khóa chỉ được sử dụng trong một phiên _X3DH_ duy nhất. (_Prekeys_ được gọi như vậy vì chúng thực chất là các thông điệp giao thức mà Đan Nguyên công bố lên máy chủ trước khi Mỹ Anh bắt đầu phiên giao thức).

Trong mỗi phiên giao thức, Mỹ Anh tạo một cặp khóa tạm thời mới với khóa công khai _EKA._

Sau khi phiên giao thức hoàn tất thành công, Mỹ Anh và Đan Nguyên sẽ chia sẻ một khóa bí mật 32 byte _SK._ Khóa này có thể được sử dụng trong một giao thức bảo mật sau _X3DH._

## Giao thức X3DH

### Tổng quan

X3DH có ba giai đoạn:

– Đan Nguyên công bố khóa nhận dạng và các khóa tiền (_prekeys_) lên máy chủ.

– Mỹ Anh lấy một _gói khóa tiền_ (_prekey bundle_) từ máy chủ và sử dụng nó để gửi một tin nhắn ban đầu đến _Đan Nguyên._

– Đan Nguyên nhận và xử lý tin nhắn ban đầu từ _Mỹ Anh._

Các phần sau đây sẽ giải thích chi tiết từng giai đoạn.

### Công bố khóa

Đan Nguyên công bố một tập hợp các khóa công khai đường cong elliptic lên máy chủ, bao gồm:

– Khóa nhận dạng của Đan Nguyên (_IKB_).

– Khóa tiền có chữ ký của Đan Nguyên (_SPKB_).

– Chữ ký khóa tiền _Sig(IKB, Encode(SPKB))._

– Một tập hợp các khóa tiền một lần của Đan Nguyên (_OPKB1, OPKB2, OPKB3,…_).

Đan Nguyên chỉ cần tải lên khóa nhận dạng của mình một lần duy nhất. Tuy nhiên, Đan Nguyên có thể tải lên các khóa tiền một lần mới bất cứ lúc nào (Ví dụ: khi máy chủ thông báo rằng kho khóa tiền một lần trên máy chủ đang cạn dần).

Đan Nguyên cũng sẽ tải lên một khóa tiền có chữ ký mới và chữ ký khóa tiền theo một khoảng thời gian nhất định (Ví dụ: mỗi tuần hoặc mỗi tháng). Khóa tiền có chữ ký mới sẽ thay thế khóa tiền trước đó.

Sau khi tải lên một khóa tiền có chữ ký mới, Đan Nguyên có thể giữ lại khóa riêng tương ứng với khóa tiền có chữ ký trước đó trong một thời gian ngắn để xử lý các tin nhắn đã bị trì hoãn trong quá trình truyền. Tuy nhiên, cuối cùng, Đan Nguyên nên xóa khóa riêng này để đảm bảo tính bảo mật chuyển tiếp. (Các khóa riêng của khóa tiền một lần sẽ được xóa ngay khi Đan Nguyên nhận được tin nhắn sử dụng chúng).

### Gửi tin nhắn ban đầu

Để thực hiện thỏa thuận khóa _X3DH_ với _Đan Nguyên,_ Mỹ Anh liên hệ với máy chủ và lấy một _gói khóa tiền_ (_prekey bundle_) chứa các giá trị sau:

– Khóa nhận dạng của Đan Nguyên (_IKB_).

– Khóa tiền có chữ ký của Đan Nguyên (_SPKB_).

– Chữ ký khóa tiền _Sig(IKB, Encode(SPKB))._

– (_Tùy chọn_) Khóa tiền một lần của Đan Nguyên (_OPKB_).

Máy chủ nên cung cấp một khóa tiền một lần của Đan Nguyên nếu còn tồn tại và sau đó xóa khóa đó. Nếu tất cả các khóa tiền một lần của Đan Nguyên trên máy chủ đã bị xóa, _gói khóa tiền_ sẽ không chứa khóa tiền một lần.

Mỹ Anh xác minh chữ ký khóa tiền và hủy giao thức nếu xác minh thất bại. Sau đó, Mỹ Anh tạo một cặp khóa tạm thời mới với khóa công khai là _EKA._

Nếu _gói khóa tiền_ không chứa khóa tiền một lần, Mỹ Anh thực hiện các tính toán sau:

```
DH1 = DH(IKA, SPKB)
DH2 = DH(EKA, IKB)
DH3 = DH(EKA, SPKB)
SK = KDF(DH1 || DH2 || DH3)
```

Nếu _gói khóa tiền_ có chứa khóa tiền một lần, phép tính sẽ được mở rộng để bao gồm thêm một giá trị _DH:_

```
DH4 = DH(EKA, OPKB)
SK = KDF(DH1 || DH2 || DH3 || DH4)
```

Sơ đồ sau đây minh họa các phép tính _DH_ giữa các khóa. Lưu ý rằng _DH1_ và _DH2_ cung cấp xác thực lẫn nhau, trong khi _DH3_ và _DH4_ cung cấp tính bảo mật chuyển tiếp.

<figure><img src="https://banmaixanh.vercel.app/image/article/tim-hieu-signal-protocol-21.jpg" alt="Tìm hiểu về X3HD" height=100% width=100%><figcaption><p>Tìm hiểu về X3DH</p></figcaption></figure>

Sau khi tính toán _SK,_ Mỹ Anh xóa khóa riêng tạm thời của mình và các giá trị _DH_ đã tính toán.

Mỹ Anh sau đó tính toán một dãy byte _AD_ (_associated data_) chứa thông tin nhận dạng của cả hai bên:

```
AD = Encode(IKA) || Encode(IKB)
```

Mỹ Anh có thể tùy chọn thêm thông tin bổ sung vào _AD,_ chẳng hạn như tên người dùng của Mỹ Anh và _Đan Nguyên,_ chứng chỉ hoặc các thông tin nhận dạng khác.

Sau đó, Mỹ Anh gửi cho Đan Nguyên một tin nhắn ban đầu chứa:

– Khóa nhận dạng của Mỹ Anh (_IKA_).

– Khóa tạm thời của Mỹ Anh (_EKA_).

– Các định danh chỉ ra khóa tiền nào của Đan Nguyên mà Mỹ Anh đã sử dụng.

– Một bản mã ban đầu được mã hóa bằng một sơ đồ mã hóa _AEAD,_ sử dụng _AD_ làm dữ liệu liên kết và sử dụng khóa mã hóa là _SK_ hoặc đầu ra của một _PRF_ mật mã được khóa bằng _SK._

Bản mã ban đầu này thường là tin nhắn đầu tiên trong một giao thức liên lạc bảo mật sau _X3DH._ Nói cách khác, nó có hai vai trò: vừa là tin nhắn đầu tiên trong giao thức bảo mật sau _X3DH,_ vừa là một phần của tin nhắn ban đầu trong _X3DH._

Sau khi gửi tin nhắn này, Mỹ Anh có thể tiếp tục sử dụng _SK_ hoặc các khóa dẫn xuất từ _SK_ trong giao thức bảo mật sau _X3DH_ để liên lạc với _Đan Nguyên,_ với các cân nhắc bảo mật.

## Nhận tin nhắn ban đầu

Sau khi nhận được tin nhắn ban đầu từ _Mỹ Anh,_ Đan Nguyên trích xuất khóa nhận dạng và khóa tạm thời của Mỹ Anh từ tin nhắn. Đan Nguyên cũng tải khóa riêng của mình, cũng như khóa riêng tương ứng với khóa tiền có chữ ký và khóa tiền một lần (nếu có) mà Mỹ Anh đã sử dụng.

Sử dụng các khóa này, Đan Nguyên thực hiện lại các phép tính _DH_ và _KDF_ từ mục trước để tạo ra _SK,_ sau đó xóa các giá trị _DH._

Đan Nguyên sau đó tạo dãy byte _AD_ bằng cách sử dụng _IKA_ và _IKB,_ như đã mô tả trong mục trước. Cuối cùng, Đan Nguyên cố gắng giải mã bản mã ban đầu bằng _SK_ và _AD._ Nếu quá trình giải mã thất bại, Đan Nguyên hủy giao thức và xóa _SK._

Nếu bản mã ban đầu được giải mã thành công, giao thức hoàn tất đối với _Đan Nguyên._ Đan Nguyên xóa khóa riêng của khóa tiền một lần đã được sử dụng để đảm bảo tính bảo mật chuyển tiếp. Sau đó, Đan Nguyên có thể tiếp tục sử dụng _SK_ hoặc các khóa dẫn xuất từ _SK_ trong giao thức bảo mật sau _X3DH_ để liên lạc với _Mỹ Anh,_ với các cân nhắc bảo mật.

## Cân nhắc về bảo mật

### Xác thực

Trước hoặc sau khi thực hiện thỏa thuận khóa _X3DH,_ các bên có thể so sánh khóa công khai nhận dạng _IKA_ và _IKB_ của nhau thông qua một kênh xác thực. Ví dụ, họ có thể so sánh dấu vân tay của khóa công khai theo cách thủ công hoặc bằng cách quét mã _QR._ Các phương pháp để thực hiện việc này nằm ngoài phạm vi của Bài viết này.

Nếu không thực hiện xác thực, các bên sẽ không có bất kỳ đảm bảo mật mã nào về danh tính của người mà họ đang liên lạc.

### Phát lại giao thức

Nếu tin nhắn ban đầu của Mỹ Anh không sử dụng khóa tiền một lần, tin nhắn đó có thể bị phát lại đến _Đan Nguyên,_ và anh ấy vẫn sẽ chấp nhận nó. Điều này có thể khiến Đan Nguyên nghĩ rằng Mỹ Anh đã gửi cùng một tin nhắn (hoặc nhiều tin nhắn) lặp đi lặp lại.

Để giảm thiểu vấn đề này, một giao thức sau _X3DH_ có thể nhanh chóng đàm phán một khóa mã hóa mới cho Mỹ Anh dựa trên đầu vào ngẫu nhiên mới từ _Đan Nguyên._ Đây là hành vi phổ biến của các giao thức _Diffie – Hellman_ có cơ chế tăng tiến (_ratcheting_).

Đan Nguyên cũng có thể áp dụng các biện pháp giảm thiểu khác, chẳng hạn như duy trì một danh sách đen các tin nhắn đã quan sát được hoặc thay thế các khóa tiền có chữ ký cũ nhanh hơn. Việc phân tích các biện pháp giảm thiểu này nằm ngoài phạm vi của Bài viết này.

### Phát lại và tái sử dụng khóa

Một hệ quả khác của việc phát lại được đề cập trong phần trước là một tin nhắn ban đầu được phát lại thành công có thể khiến Đan Nguyên tạo ra cùng một _SK_ trong các lần thực thi giao thức khác nhau.

Vì lý do này, bất kỳ giao thức sau _X3DH_ nào CẦN PHẢI ngẫu nhiên hóa khóa mã hóa trước khi Đan Nguyên gửi dữ liệu đã mã hóa. Ví dụ, Đan Nguyên có thể sử dụng một giao thức tăng tiến dựa trên _DH_ để kết hợp _SK_ với một giá trị _DH_ mới được tạo ra để có được một khóa mã hóa ngẫu nhiên.

Việc không ngẫu nhiên hóa khóa mã hóa của Đan Nguyên có thể dẫn đến thảm họa do tái sử dụng khóa.

### Khả năng chối bỏ

_X3DH_ không cung cấp cho Mỹ Anh hoặc Đan Nguyên bằng chứng mật mã có thể công khai về nội dung cuộc giao tiếp của họ hoặc việc họ đã giao tiếp.

Giống như trong giao thức _OTR,_ trong một số trường hợp, một bên thứ ba đã xâm phạm khóa riêng hợp lệ của Mỹ Anh hoặc Đan Nguyên có thể nhận được một bản ghi cuộc giao tiếp trông giống như giữa Mỹ Anh và _Đan Nguyên._ Bản ghi này chỉ có thể được tạo bởi một bên khác cũng có quyền truy cập vào các khóa riêng hợp lệ của Mỹ Anh hoặc Đan Nguyên (tức là chính Mỹ Anh hoặc _Đan Nguyên,_ hoặc một người nào đó đã xâm phạm khóa riêng của họ).

Nếu một trong hai bên hợp tác với bên thứ ba trong khi thực thi giao thức, họ sẽ có thể cung cấp bằng chứng về cuộc giao tiếp của mình cho bên thứ ba đó. Hạn chế này đối với khả năng chối bỏ _trực tuyến_ dường như là đặc điểm cố hữu của mô hình giao tiếp không đồng bộ.

### Chữ ký

Có thể sẽ hấp dẫn khi nhận thấy rằng xác thực lẫn nhau và tính bảo mật chuyển tiếp đã được đảm bảo bởi các phép tính _DH,_ và do đó loại bỏ chữ ký khóa tiền. Tuy nhiên, điều này sẽ dẫn đến một cuộc tấn công _bảo mật chuyển tiếp yếu:_

Một máy chủ độc hại có thể cung cấp cho Mỹ Anh một _gói khóa tiền_ chứa các khóa tiền giả mạo, và sau đó xâm phạm khóa nhận dạng _IKB_ của Đan Nguyên để tính toán _SK._

Ngoài ra, cũng có thể sẽ hấp dẫn khi thay thế cơ chế xác thực lẫn nhau dựa trên _DH_ (tức là _DH1_ và _DH2_) bằng các chữ ký từ các khóa nhận dạng. Tuy nhiên, điều này sẽ làm giảm khả năng chối bỏ, tăng kích thước của các tin nhắn ban đầu, và gia tăng thiệt hại nếu các khóa riêng tạm thời hoặc khóa riêng của khóa tiền bị xâm phạm, hoặc nếu thuật toán chữ ký bị phá vỡ.

### Xâm phạm khóa

Việc xâm phạm khóa riêng của một bên có thể gây ra hậu quả nghiêm trọng đối với bảo mật, mặc dù việc sử dụng khóa tạm thời và khóa tiền có thể giúp giảm thiểu tác động phần nào.

Xâm phạm khóa riêng nhận dạng của một bên cho phép kẻ tấn công giả mạo danh tính của bên đó đối với những người khác. Xâm phạm khóa riêng của khóa tiền có thể ảnh hưởng đến bảo mật của các giá trị _SK_ cũ hoặc mới, tùy thuộc vào nhiều yếu tố.

Phân tích đầy đủ về tất cả các kịch bản xâm phạm có thể xảy ra nằm ngoài phạm vi của Bài viết này. Tuy nhiên, dưới đây là phân tích một số tình huống khả thi:

– Nếu các khóa tiền một lần được sử dụng trong quá trình thực thi giao thức, thì việc xâm phạm khóa nhận dạng của Đan Nguyên và các khóa riêng của khóa tiền vào một thời điểm nào đó trong tương lai sẽ không ảnh hưởng đến _SK_ cũ, miễn là khóa riêng của _OPKB_ đã bị xóa.

– Nếu các khóa tiền một lần không được sử dụng, thì việc xâm phạm khóa riêng của _IKB_ và _SPKB_ trong một lần thực thi giao thức sẽ làm lộ _SK_ đã được tính toán trước đó. Việc thay thế thường xuyên các khóa tiền có chữ ký giúp giảm thiểu rủi ro này, cũng như sử dụng một giao thức tăng tiến sau _X3DH,_ giúp nhanh chóng thay thế _SK_ bằng các khóa mới để đảm bảo bảo mật chuyển tiếp liên tục.

Xâm phạm khóa riêng của khóa tiền có thể tạo điều kiện cho các cuộc tấn công trong tương lai, chẳng hạn như tính toán thụ động các giá trị _SK_ và giả mạo danh tính của bất kỳ bên nào với bên bị xâm phạm (_key-compromise impersonation_). Những cuộc tấn công này có thể tiếp diễn cho đến khi bên bị xâm phạm thay thế các khóa tiền bị xâm phạm trên máy chủ (trong trường hợp tấn công thụ động) hoặc xóa khóa riêng của khóa tiền có chữ ký bị xâm phạm (trong trường hợp giả mạo danh tính).

### Tin tưởng vào máy chủ

Một máy chủ độc hại có thể khiến cuộc giao tiếp giữa Mỹ Anh và Đan Nguyên thất bại (Ví dụ: bằng cách từ chối chuyển tiếp tin nhắn).

Nếu Mỹ Anh và Đan Nguyên xác thực lẫn nhau, thì cuộc tấn công bổ sung duy nhất mà máy chủ có thể thực hiện là từ chối cung cấp khóa tiền một lần, khiến tính bảo mật chuyển tiếp của _SK_ phụ thuộc vào vòng đời của khóa tiền có chữ ký (như đã phân tích trong phần trước).

Việc giảm mức độ bảo mật chuyển tiếp ban đầu này cũng có thể xảy ra nếu một bên độc hại cố tình làm cạn kiệt các khóa tiền một lần của bên khác. Do đó, máy chủ nên cố gắng ngăn chặn điều này, chẳng hạn bằng cách giới hạn tần suất truy vấn _gói khóa tiền._

### Ràng buộc nhận dạng

Xác thực không nhất thiết ngăn chặn được một cuộc tấn công _gán nhầm danh tính_ hoặc _chia sẻ khóa không xác định._

Để làm cho cuộc tấn công này khó khăn hơn, các bên có thể đưa thêm thông tin nhận dạng vào _AD_ hoặc mã hóa thêm thông tin nhận dạng vào dấu vân tay, chẳng hạn như tên người dùng, số điện thoại hoặc tên thật. Tuy nhiên, không có cách nào đảm bảo ngăn chặn hoàn toàn kẻ tấn công giả mạo thông tin này mà không gây ảnh hưởng đến quyền riêng tư, tính linh hoạt và giao diện người dùng.

<figure><img src="https://banmaixanh.vercel.app/image/cover/001-071.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>