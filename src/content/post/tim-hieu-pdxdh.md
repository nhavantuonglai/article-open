---
pubDatetime: 2020-09-20T10:10:00Z
title: Tìm hiểu về thuật toán PQXDH – Thiết lập mã khóa chung giữa 2 thiết bị
description: Thuật toán PDXDH là phương pháp trao đổi khóa tiên tiến sử dụng phép ghép đôi cryptographic trên các đường cong elliptic, mang đến giải pháp an ninh thông tin vượt trội so với các phương pháp truyền thống.
image: https://banmaixanh.vercel.app/image/cover/001-321.jpg
tags:
  - developer
  - bao mat
  - mat ma hoc
  - signal protocol
  - ma hoa thong tin
  - bao mat thong tin
  - double ratchet
  - kdf
  - pqxdh
  - quantum key
  - active quantum adversaries
  - passive quantum adversaries
  - key compromise
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

_Thuật toán PDXDH là phương pháp trao đổi khóa tiên tiến sử dụng phép ghép đôi cryptographic trên các đường cong elliptic, mang đến giải pháp an ninh thông tin vượt trội so với các phương pháp truyền thống._

# Giới thiệu

Bài viết này mô tả giao thức thỏa thuận khóa _PQXDH_ (_Post Quantum Extended Diffie – Hellman_). PQXDH thiết lập một khóa bí mật chung giữa 2 thiết bị, những người xác thực lẫn nhau dựa trên khóa công khai. [PQXDH](https://nhavantuonglai.com/article/tim-hieu-pdxdh) cung cấp tính bảo mật chuyển tiếp hậu lượng tử và một dạng khả năng từ chối mật mã, nhưng vẫn dựa vào độ khó của bài toán logarit rời rạc để xác thực lẫn nhau trong phiên bản giao thức này.

Thuật toán PDXDH là phương pháp trao đổi khóa tiên tiến sử dụng phép ghép đôi cryptographic trên các đường cong elliptic, mang đến giải pháp an ninh thông tin vượt trội so với các phương pháp truyền thống. Nguyên lý hoạt động của thuật toán dựa trên việc sử dụng các phép toán phức tạp giữa các điểm trên đường cong, cho phép các bên thiết lập một khóa bí mật chung thông qua một kênh không an toàn mà không cần trao đổi trực tiếp khóa. Ưu điểm chính của PDXDH nằm ở khả năng cung cấp mức độ bảo mật cao, khả năng chống lại các cuộc tấn công máy tính lượng tử và hiệu quả trong việc xử lý các bài toán mật mã phức tạp.

Trong thực tế, PDXDH được ứng dụng rộng rãi trong nhiều lĩnh vực như an ninh mạng, điện toán đám mây, hệ thống thanh toán điện tử và các ứng dụng yêu cầu trao đổi thông tin an toàn. Các hệ thống ngân hàng, chính phủ và các tổ chức có yêu cầu bảo mật cao đặc biệt quan tâm đến thuật toán này do tính linh hoạt và độ tin cậy cao. Khả năng tạo ra các khóa mật với độ phức tạp toán học cao giúp PDXDH trở thành một giải pháp quan trọng trong việc bảo vệ thông tin nhạy cảm.

PQXDH được thiết kế cho các môi trường phi đồng bộ, trong đó một người dùng (Đan Nguyên) có thể ngoại tuyến nhưng đã công khai một số thông tin lên máy chủ. Một người dùng khác (Mỹ Anh) muốn sử dụng thông tin đó để gửi dữ liệu được mã hóa cho Đan Nguyên và thiết lập một khóa bí mật chung để liên lạc trong tương lai.

## Kiến thức cơ bản

### Tham số PQXDH

Một ứng dụng sử dụng PQXDH phải quyết định một số tham số sau:

| Tên | Định nghĩa |
|------|------------|
| curve | Một đường cong Montgomery mà XEdDSA được xác định, hiện tại là một trong hai: curve25519 hoặc curve448. |
| hash | Hàm băm 256 hoặc 512 bit (Ví dụ: SHA256 hoặc SHA512). |
| info | Chuỗi ASCII xác định ứng dụng, có độ dài tối thiểu 8 byte. |
| pqkem | Cơ chế đóng gói khóa hậu lượng tử có tính bảo mật IND – CCA hậu lượng tử (Ví dụ: Crystals – Kyber – 1024). |
| aead | Lược đồ mã hóa xác thực với dữ liệu liên quan, có tính bảo mật IND – CPA và INT – CTXT hậu lượng tử. |
| EncodeEC | Hàm mã hóa khóa công khai đường cong thành chuỗi byte. |
| DecodeEC | Hàm giải mã chuỗi byte thành khóa công khai đường cong, là hàm nghịch đảo của EncodeEC. |
| EncodeKEM | Hàm mã hóa khóa công khai pqkem thành chuỗi byte. |
| DecodeKEM | Hàm giải mã chuỗi byte thành khóa công khai pqkem, là hàm nghịch đảo của EncodeKEM. |

Ví dụ, một ứng dụng có thể chọn _curve_ là curve25519, _hash_ là SHA512, _info_ là _MyProtocol,_ và _pqkem_ là CRYSTALS-KYBER-1024.

Phạm vi của tất cả các hàm mã hóa phải không được trùng nhau.

Cách triển khai khuyến nghị của EncodeEC bao gồm một byte hằng số đại diện cho đường cong, tiếp theo là mã hóa little – endian của tọa độ _u_ như được chỉ định trong. Giá trị byte hằng số đại diện cho đường cong được xác định bởi người triển khai. Tương tự, cách triển khai khuyến nghị của DecodeEC là đọc byte đầu tiên để xác định tham số _curve._ Nếu byte đầu tiên không đại diện cho một đường cong đã biết, hàm sẽ thất bại. Nếu hợp lệ, nó sẽ thực hiện giải mã little – endian của tọa độ _u_ như được chỉ định trong.

Cách triển khai khuyến nghị của EncodeKEM bao gồm một byte hằng số đại diện cho _pqkem,_ tiếp theo là mã hóa của khóa công khai _pqkem_ được chỉ định bởi _pqkem._ Giá trị byte hằng số đại diện cho _pqkem_ được xác định bởi người triển khai. Tương tự, cách triển khai khuyến nghị của DecodeKEM là đọc byte đầu tiên để xác định tham số _pqkem._ Nếu byte đầu tiên không đại diện cho một cơ chế đóng gói khóa đã biết, hàm sẽ thất bại. Nếu hợp lệ, nó sẽ thực hiện giải mã theo cơ chế đóng gói khóa được chọn.

### Ký hiệu mật mã

Trong toàn bộ Bài viết này, tất cả các khóa công khai đều có khóa bí mật tương ứng, nhưng để đơn giản hóa mô tả, chúng ta sẽ chỉ xác định cặp khóa bằng khóa công khai và giả định rằng khóa bí mật tương ứng có thể được truy cập bởi chủ sở hữu khóa.

Bài viết này sử dụng các ký hiệu sau:

– Phép nối chuỗi byte _X_ và _Y_ được ký hiệu là _X || Y._

– _DH(PK1, PK2)_ đại diện cho một chuỗi byte là đầu ra khóa bí mật được chia sẻ từ hàm Diffie – Hellman đường cong elliptic, sử dụng cặp khóa được biểu diễn bởi khóa công khai _PK1_ và _PK2._ Hàm này có thể là _X25519_ hoặc _X448_ theo tham số _curve._

– _Sig(PK, M, Z)_ là chuỗi byte biểu diễn chữ ký XEdDSA trên chuỗi byte _M,_ được tạo bằng cách ký _M_ bằng khóa bí mật tương ứng với _PK_ và sử dụng 64 byte ngẫu nhiên _Z._ Chữ ký này có thể xác thực bằng khóa công khai _PK._ Các hàm ký và xác minh XEdDSA được chỉ định trong.

– _KDF(KM)_ là đầu ra 32 byte từ thuật toán _HKDF,_ sử dụng _hash_ với các đầu vào:

– _HKDF input key material = F || KM,_ trong đó _KM_ là chuỗi byte chứa thông tin khóa bí mật, còn _F_ là chuỗi byte gồm 32 byte 0xFF nếu _curve_ là _curve25519,_ hoặc 57 byte 0xFF nếu _curve_ là _curve448._ Giống như trong XEdDSA, _F_ đảm bảo rằng các bit đầu tiên của đầu vào _HKDF_ không bao giờ là một mã hóa hợp lệ của một vô hướng hoặc một điểm trên đường cong elliptic.

– _HKDF salt =_ Chuỗi byte có độ dài bằng với độ dài đầu ra của hàm băm, toàn bộ được điền bằng 0.

– _HKDF info =_ Chuỗi kết hợp các biểu diễn dạng chuỗi của 4 tham số PQXDH _info,_ _curve,_ _hash,_ và _pqkem_ thành một chuỗi duy nhất, ngăn cách bằng dấu gạch dưới, ví dụ: `MyProtocol_CURVE25519_SHA512_CRYSTALS-KYBER-1024`. Các biểu diễn chuỗi của các tham số PQXDH được xác định bởi người triển khai.

– _(CT, SS) = PQKEM – ENC(PK)_ là một bộ đôi (_tuple_) chứa chuỗi byte _CT_ là bản mã KEM đầu ra từ thuật toán _pqkem,_ cùng với chuỗi byte bí mật chung _SS_ được đóng gói bởi bản mã đó bằng khóa công khai _PK._

– _PQKEM – DEC(PK, CT)_ đại diện cho chuỗi byte bí mật chung _SS_ được giải mã từ bản mã _pqkem_ bằng khóa bí mật tương ứng với khóa công khai _PK._

### Vai trò

Giao thức PQXDH liên quan đến ba bên: _Mỹ Anh,_ _Đan Nguyên,_ và một máy chủ.

– Mỹ Anh muốn gửi dữ liệu ban đầu cho Đan Nguyên bằng cách mã hóa, đồng thời thiết lập một khóa bí mật chung có thể được sử dụng để liên lạc hai chiều.

– Đan Nguyên muốn cho phép các bên như Mỹ Anh thiết lập khóa chung với mình và gửi dữ liệu mã hóa. Tuy nhiên, Đan Nguyên có thể ngoại tuyến khi Mỹ Anh thực hiện điều này. Để hỗ trợ điều đó, Đan Nguyên có mối quan hệ với một máy chủ.

– _Máy chủ_ có thể lưu trữ tin nhắn từ Mỹ Anh gửi đến Đan Nguyên để Đan Nguyên có thể truy xuất sau. Máy chủ cũng cho phép Đan Nguyên công bố một số dữ liệu mà máy chủ sẽ cung cấp cho các bên như _Mỹ Anh._ Mức độ tin cậy đặt vào máy chủ.

Trong một số hệ thống, vai trò của máy chủ có thể được chia thành nhiều thực thể, nhưng để đơn giản, chúng ta giả định một máy chủ duy nhất cung cấp các chức năng trên cho Mỹ Anh và _Đan Nguyên._

### Khóa đường cong Elliptic

PQXDH sử dụng các khóa công khai đường cong elliptic sau:

| Tên | Định nghĩa |
|------|------------|
| IKA | Khóa định danh của Mỹ Anh. |
| IKB | Khóa định danh của Đan Nguyên. |
| EKA | Khóa tạm thời của Mỹ Anh. |
| SPKB | Khóa dự phòng có chữ ký của Đan Nguyên. |
| (OPKB1, OPKB2…) | Tập hợp các khóa dự phòng dùng một lần của Đan Nguyên. |

Các khóa công khai đường cong elliptic được sử dụng trong mỗi phiên PQXDH phải hoặc là toàn bộ thuộc dạng _curve25519,_ hoặc toàn bộ thuộc dạng _curve448,_ tùy theo tham số _curve._

Mỗi bên có một khóa công khai đường cong elliptic định danh dài hạn (_IKA_ đối với _Mỹ Anh,_ _IKB_ đối với Đan Nguyên).

Đan Nguyên cũng có một khóa dự phòng có chữ ký _SPKB,_ được thay đổi định kỳ và ký mỗi lần bằng _IKB,_ cùng với một tập hợp các khóa dự phòng dùng một lần (_OPKB1, OPKB2…_), mỗi khóa chỉ được sử dụng trong một phiên PQXDH duy nhất.

Đối với mỗi khóa dự phòng có chữ ký hoặc khóa dự phòng dùng một lần _K_ mà Đan Nguyên tạo ra, anh ấy cũng tính một định danh, ký hiệu là _IdEC(K),_ để xác định duy nhất khóa này trên thiết bị của _Đan Nguyên._ (_Khóa dự phòng_ được gọi như vậy vì chúng thực chất là các thông điệp giao thức mà Đan Nguyên công bố lên máy chủ, cùng với các định danh tương ứng của chúng, trước khi Mỹ Anh bắt đầu phiên giao thức.) Các khóa này sẽ được tải lên máy chủ.

Trong mỗi phiên giao thức, Mỹ Anh tạo một cặp khóa tạm thời mới với khóa công khai _EKA._

### Khóa đóng gói hậu lượng tử (Quantum key)

PQXDH sử dụng các khóa công khai đóng gói hậu lượng tử sau:

| Tên | Định nghĩa |
|------|------------|
| PQSPKB | Khóa dự phòng hậu lượng tử có chữ ký của Đan Nguyên. |
| (PQOPKB1, PQOPKB2…) | Tập hợp các khóa dự phòng hậu lượng tử dùng một lần có chữ ký của Đan Nguyên. |

Các khóa công khai _pqkem_ được sử dụng trong một phiên PQXDH phải đều sử dụng cùng một tham số _pqkem._

Đan Nguyên có một khóa dự phòng hậu lượng tử có chữ ký cuối cùng (_PQSPKB_), được thay đổi định kỳ và ký mỗi lần bằng _IKB,_ cùng với một tập hợp các khóa dự phòng hậu lượng tử dùng một lần (_PQOPKB1, PQOPKB2…_), cũng được ký bằng _IKB_ và mỗi khóa chỉ được sử dụng trong một phiên PQXDH duy nhất.

Đối với mỗi khóa _pqkem_ dự phòng hoặc tạm thời _K_ mà Đan Nguyên tạo ra, anh ấy cũng tính một định danh, ký hiệu là _IdKEM(K),_ để xác định duy nhất khóa này trên thiết bị của _Đan Nguyên._ Các khóa này và các định danh tương ứng của chúng sẽ được tải lên máy chủ như mô tả.

Tên gọi _dự phòng cuối cùng_ (_last – resort_) xuất phát từ việc khóa dự phòng cuối cùng chỉ được sử dụng khi không có khóa dự phòng _pqkem_ dùng một lần nào khả dụng. Trường hợp này xảy ra khi số lượng gói khóa dự phòng tải xuống cho Đan Nguyên vượt quá số lượng khóa dự phòng _pqkem_ dùng một lần mà Đan Nguyên đã tải lên.

Một cách triển khai nên cung cấp cho Đan Nguyên một phương thức để xác định liệu một khóa công khai _pqkem_ thuộc về loại khóa dự phòng _pqkem_ dùng một lần hay khóa dự phòng _pqkem_ cuối cùng.

## Giao thức PQXDH

### Tổng quan

PQXDH bao gồm ba giai đoạn:

Đan Nguyên công khai khóa nhận dạng đường cong elliptic, các khóa sơ bộ đường cong elliptic và các khóa sơ bộ pqkem lên máy chủ.

Mỹ Anh lấy một _gói khóa sơ bộ_ từ máy chủ và sử dụng nó để gửi một tin nhắn ban đầu cho Đan Nguyên.

Đan Nguyên nhận và xử lý tin nhắn ban đầu từ Mỹ Anh.

Các phần sau sẽ giải thích chi tiết các giai đoạn này.

### Công khai khóa

Đan Nguyên tạo một chuỗi các giá trị ngẫu nhiên 64 byte ZSPK, ZPQSPK, Z1, Z2… và công khai một tập hợp khóa lên máy chủ bao gồm:

– Khóa nhận dạng đường cong của Đan Nguyên IKB.

– Khóa sơ bộ đường cong đã ký của Đan Nguyên và định danh của nó _(SPKB, IdEC(SPKB))._

– Chữ ký của Đan Nguyên trên khóa sơ bộ đường cong _Sig(IKB, EncodeEC(SPKB), ZSPK)._

– Khóa sơ bộ pqkem _last – resort_ đã ký của Đan Nguyên và định danh của nó _(PQSPKB, IdKEM(PQSPKB))._

– Chữ ký của Đan Nguyên trên khóa sơ bộ pqkem _Sig(IKB, EncodeKEM(PQSPKB), ZPQSPK)._

– Một tập hợp các khóa sơ bộ đường cong một lần của Đan Nguyên _(OPKB1, OPKB2, OPKB3…)_ cùng với định danh của chúng _(IdEC(OPKB1), IdEC(OPKB2), IdEC(OPKB3)…)._

– Một tập hợp các khóa sơ bộ pqkem một lần đã ký của Đan Nguyên _(PQOPKB1, PQOPKB2, PQOPKB3…)_ cùng với định danh của chúng _(IdKEM(PQOPKB1), IdKEM(PQOPKB2), IdKEM(PQOPKB3)…)._

– Tập hợp các chữ ký của Đan Nguyên trên các khóa sơ bộ pqkem một lần đã ký _(Sig(IKB, EncodeKEM(PQOPKB1), Z1), Sig(IKB, EncodeKEM(PQOPKB2), Z2), Sig(IKB, EncodeKEM(PQOPKB3), Z3)…)._

Đan Nguyên chỉ cần tải lên khóa nhận dạng của mình lên máy chủ một lần. Tuy nhiên, Đan Nguyên có thể tải lên các khóa sơ bộ một lần mới vào các thời điểm khác (Ví dụ: khi máy chủ thông báo rằng kho khóa sơ bộ một lần của máy chủ sắp hết).

Đối với cả khóa sơ bộ đường cong đã ký và khóa sơ bộ pqkem _last – resort_ đã ký, Đan Nguyên sẽ tải lên một khóa sơ bộ mới cùng với chữ ký của nó bằng IKB theo một khoảng thời gian nhất định (Ví dụ: một tuần một lần hoặc một tháng một lần). Khóa sơ bộ mới đã ký và chữ ký của nó sẽ thay thế các giá trị trước đó.

Sau khi tải lên một cặp khóa sơ bộ đường cong đã ký và khóa sơ bộ pqkem _last – resort_ đã ký mới, Đan Nguyên có thể giữ lại khóa riêng tương ứng với cặp trước đó trong một khoảng thời gian để xử lý các tin nhắn sử dụng khóa này mà có thể đã bị trì hoãn khi truyền. Cuối cùng, Đan Nguyên nên xóa khóa riêng này để đảm bảo tính bảo mật về sau (các khóa riêng của khóa sơ bộ một lần sẽ bị xóa khi Đan Nguyên nhận tin nhắn sử dụng chúng).

### Gửi tin nhắn ban đầu

Để thực hiện thỏa thuận khóa PQXDH với Đan Nguyên, Mỹ Anh liên hệ với máy chủ và lấy một _gói khóa sơ bộ_ chứa các giá trị sau:

– Khóa nhận dạng đường cong của Đan Nguyên IKB.

– Khóa sơ bộ đường cong đã ký của Đan Nguyên cùng với định danh của nó _(SPKB, IdEC(SPKB))._

– Chữ ký của Đan Nguyên trên khóa sơ bộ đường cong _Sig(IKB, EncodeEC(SPKB), ZSPK)._

Một trong hai loại khóa:

– Khóa sơ bộ pqkem một lần đã ký của Đan Nguyên _PQOPKBn_ 

– Hoặc nếu không còn khóa sơ bộ pqkem một lần đã ký nào, thì sử dụng khóa sơ bộ pqkem _last – resort_ đã ký của Đan Nguyên _PQSPKB._

– Định danh của khóa trên _(IdKEM(PQPKB))._

– Chữ ký của Đan Nguyên trên khóa sơ bộ pqkem _Sig(IKB, EncodeKEM(PQPKB), ZPQPK)._

– _(Tùy chọn)_ Khóa sơ bộ đường cong một lần của Đan Nguyên _OPKBn_ và định danh của nó _IdEC(OPKBn)._

Máy chủ sẽ cung cấp một trong các khóa sơ bộ đường cong một lần của Đan Nguyên nếu có, và sau đó xóa nó. Nếu tất cả các khóa sơ bộ đường cong một lần của Đan Nguyên trên máy chủ đã bị xóa, gói khóa sẽ không chứa phần tử khóa sơ bộ đường cong một lần.

Máy chủ cũng sẽ ưu tiên cung cấp một trong các khóa sơ bộ pqkem một lần đã ký của Đan Nguyên _PQOPKBn_ nếu có, và sau đó xóa nó. Nếu tất cả các khóa sơ bộ pqkem một lần đã ký của Đan Nguyên trên máy chủ đã bị xóa, gói khóa sẽ chứa khóa sơ bộ pqkem _last – resort_ đã ký của Đan Nguyên _PQSPKB._

Mỹ Anh xác minh chữ ký trên các khóa sơ bộ. Nếu bất kỳ chữ ký nào không hợp lệ, Mỹ Anh hủy bỏ giao thức. Nếu tất cả chữ ký hợp lệ, Mỹ Anh tạo một cặp khóa đường cong tạm thời với khóa công khai _EKA._ Mỹ Anh cũng tạo một bí mật được bao bọc bằng pqkem:

```
(CT, SS) = PQKEM – ENC(PQPKB)
	shared secret SS
	ciphertext CT
```

Nếu gói khóa không chứa khóa sơ bộ đường cong một lần, Mỹ Anh tính toán:

```
DH1 = DH(IKA, SPKB)
DH2 = DH(EKA, IKB)
DH3 = DH(EKA, SPKB)
SK = KDF(DH1 || DH2 || DH3 || SS)
```

Nếu gói khóa chứa khóa sơ bộ đường cong một lần, Mỹ Anh tính toán thêm một giá trị DH:

```
DH4 = DH(EKA, OPKB)
SK = KDF(DH1 || DH2 || DH3 || DH4 || SS)
```

Sau khi tính toán _SK,_ Mỹ Anh xóa khóa riêng tạm thời, các giá trị DH và bí mật chung _SS._

Mỹ Anh sau đó tính toán một chuỗi byte _AD_ chứa thông tin nhận dạng của cả hai bên:

```
AD = EncodeEC(IKA) || EncodeEC(IKB)
```

Nếu _pqkem_ không bao gồm _PQPKB_ vào bản mã, Mỹ Anh phải thêm _EncodeKEM(PQPKB)_ vào _AD._ Mỹ Anh cũng có thể thêm thông tin bổ sung vào _AD,_ chẳng hạn như tên người dùng của Mỹ Anh và Đan Nguyên, chứng chỉ hoặc thông tin nhận dạng khác.

Mỹ Anh gửi tin nhắn ban đầu cho Đan Nguyên, bao gồm:

– Khóa nhận dạng của Mỹ Anh _IKA._

– Khóa tạm thời của Mỹ Anh _EKA._

– Bản mã pqkem _CT_ đóng gói _SS_ cho _PQPKB._

– Định danh của các khóa sơ bộ Đan Nguyên mà Mỹ Anh đã sử dụng.

– Bản mã ban đầu được mã hóa bằng một lược đồ AEAD sử dụng _AD_ làm dữ liệu liên kết và khóa mã hóa là _SK_ hoặc một giá trị được tạo từ _SK_ bằng một PRF mật mã.

Tin nhắn ban đầu thường là tin nhắn đầu tiên trong một giao thức liên lạc sau PQXDH.

Sau khi gửi tin nhắn, Mỹ Anh xóa bản mã _CT_ và có thể tiếp tục sử dụng _SK_ hoặc các khóa dẫn xuất từ _SK_ trong giao thức liên lạc sau – PQXDH với Đan Nguyên, tùy thuộc vào các cân nhắc bảo mật.

### Nhận tin nhắn ban đầu

Sau khi nhận tin nhắn ban đầu từ Mỹ Anh, Đan Nguyên trích xuất khóa nhận dạng và khóa tạm thời của Mỹ Anh. Đan Nguyên cũng tải khóa riêng nhận dạng của mình và sử dụng các định danh khóa để tải khóa riêng tương ứng với các khóa sơ bộ đã ký, khóa sơ bộ một lần và khóa KEM mà Mỹ Anh sử dụng.

Đan Nguyên tính toán _PQKEM – DEC(PQPKB, CT)_ để thu được bí mật chung _SS,_ sau đó lặp lại các phép tính DH và KDF để dẫn xuất _SK,_ rồi xóa các giá trị DH và _SS._

Đan Nguyên xây dựng chuỗi byte _AD_ và thử giải mã bản mã ban đầu. Nếu thất bại, Đan Nguyên hủy bỏ giao thức. Nếu thành công, Đan Nguyên có thể tiếp tục sử dụng _SK_ trong liên lạc sau – PQXDH với Mỹ Anh.

## Cân nhắc về bảo mật

Bảo mật của sự kết hợp giữa X3DH với [Double Ratchet](https://nhavantuonglai.com/article/tim-hieu-double-ratchet) đã được nghiên cứu chính thức trong và được chứng minh là an toàn theo giả định Gap Diffie – Hellman (GapDH), trong khi sử dụng các giả định đơn giản hóa để tránh mô hình hóa việc tái sử dụng IKB cho cả thỏa thuận khóa và ký. PQXDH khi kết hợp với Double Ratchet vẫn giữ được mức bảo mật này trước một kẻ tấn công không có quyền truy cập vào máy tính lượng tử, nhưng tăng cường bảo mật của bắt tay ban đầu bằng cách yêu cầu giải quyết cả GapDH và Module – LWE.

Trong, PQXDH đã được phân tích chính thức trong mô hình ký hiệu với ProVerif và trong mô hình tính toán với CryptoVerif. Với ProVerif, các tác giả chứng minh cả xác thực và tính bí mật trong mô hình ký hiệu và liệt kê các điều kiện cụ thể mà kẻ tấn công có thể phá vỡ các thuộc tính này. Các thuộc tính bảo mật này đặc biệt bao gồm tính bảo mật tiến về phía trước, khả năng chống lại các cuộc tấn công _thu thập ngay bây giờ, giải mã sau,_ khả năng chống lại mạo danh khi bị lộ khóa và tính độc lập của phiên.

Sử dụng trình chứng minh CryptoVerif, các tác giả chứng minh tính bảo mật tính toán và xác thực của bất kỳ trao đổi khóa nào đã hoàn thành theo giả định GapDH cho đường cong X25519, giả định UF – CMA trên XEdDSA (giả định không có sự tái sử dụng khóa giữa XEdDSA và X25519), mô hình hóa hàm băm như một _oracle_ ngẫu nhiên và giả định IND – CPA+INT – CTXT cho AEAD. Ngoài ra, họ cũng chứng minh tính bảo mật tiến về phía trước khi chữ ký có tính bảo mật UF – CMA vào thời điểm trao đổi khóa diễn ra, giả định bảo mật hậu lượng tử IND – CCA cho KEM, mô hình hóa hàm băm như một PRF và bảo mật IND – CPA+INT – CTXT cho AEAD.

Tuy nhiên, đối với cả PQXDH và X3DH, một bằng chứng đầy đủ về bảo mật dưới một giả định chung của GapDH và UF – CMA đối với X25519 và XEdDSA vẫn còn cần thiết.

### Xác thực

Trước hoặc sau một thỏa thuận khóa PQXDH, các bên có thể so sánh khóa công khai nhận dạng của họ IKA và IKB thông qua một kênh xác thực nào đó. Ví dụ, họ có thể so sánh dấu vân tay của khóa công khai theo cách thủ công hoặc bằng cách quét mã QR. Các phương pháp để làm điều này nằm ngoài phạm vi của Bài viết này.

Xác thực trong PQXDH không đảm bảo an toàn trước các cuộc tấn công lượng tử. Khi có sự hiện diện của một kẻ tấn công lượng tử chủ động, các bên không nhận được đảm bảo mật mã nào về người mà họ đang giao tiếp. Xác thực lẫn nhau có thể phủ nhận được và an toàn hậu lượng tử vẫn là một vấn đề nghiên cứu mở mà Signal hy vọng sẽ giải quyết trong phiên bản sau của giao thức này.

Nếu không thực hiện xác thực, các bên sẽ không nhận được bất kỳ đảm bảo mật mã nào về danh tính của người mà họ đang giao tiếp.

### Phát lại giao thức

Nếu thông điệp ban đầu của Mỹ Anh không sử dụng một khóa tạm thời một lần, nó có thể bị phát lại cho Đan Nguyên và anh ta sẽ chấp nhận nó. Điều này có thể khiến Đan Nguyên nghĩ rằng Mỹ Anh đã gửi cho anh ta cùng một thông điệp (hoặc nhiều thông điệp) lặp đi lặp lại.

Để giảm thiểu điều này, một giao thức hậu PQXDH có thể nhanh chóng đàm phán một khóa mã hóa mới cho Mỹ Anh dựa trên đầu vào ngẫu nhiên mới từ Đan Nguyên. Đây là hành vi điển hình của các giao thức dựa trên Diffie – Hellman có tính chất _ratcheting._

Đan Nguyên có thể thử các biện pháp giảm thiểu khác, chẳng hạn như duy trì danh sách đen các thông điệp đã quan sát, hoặc thay thế các khóa ký trước nhanh hơn. Phân tích các biện pháp giảm thiểu này nằm ngoài phạm vi của Bài viết này.

### Phát lại và tái sử dụng khóa

Một hệ quả khác của việc phát lại được thảo luận trong phần trước là một thông điệp ban đầu bị phát lại thành công có thể khiến Đan Nguyên tạo ra cùng một SK trong các lần thực thi giao thức khác nhau.

Vì lý do này, bất kỳ giao thức hậu PQXDH nào sử dụng SK để tạo ra các khóa mã hóa PHẢI thực hiện các biện pháp để ngăn chặn việc tái sử dụng khóa một cách nghiêm trọng. Ví dụ, Đan Nguyên có thể sử dụng một giao thức _ratcheting_ dựa trên DH để kết hợp SK với một đầu ra DH mới được tạo ngẫu nhiên nhằm tạo ra một khóa mã hóa ngẫu nhiên.

### Khả năng phủ nhận

Về mặt không chính thức, khả năng phủ nhận trong mật mã có nghĩa là một giao thức không cung cấp cho những người tham gia bằng chứng mật mã có thể công bố về nội dung của cuộc giao tiếp của họ hoặc bằng chứng về việc họ đã giao tiếp. PQXDH, giống như X3DH, nhằm mục đích cung cấp cho cả Mỹ Anh và Đan Nguyên khả năng phủ nhận việc họ đã giao tiếp với nhau trong một bối cảnh mà một _thẩm phán_ có thể có quyền truy cập vào khóa bí mật của một hoặc nhiều bên, khi đối mặt với một bản ghi được cho là do Mỹ Anh và Đan Nguyên tạo ra.

Signal tập trung vào khả năng phủ nhận ngoại tuyến vì nếu một trong hai bên hợp tác với bên thứ ba trong quá trình thực thi giao thức, họ sẽ có thể cung cấp bằng chứng về cuộc giao tiếp của mình cho bên thứ ba đó. Hạn chế này đối với khả năng phủ nhận _trực tuyến_ dường như là một đặc điểm cố hữu của môi trường không đồng bộ.

PQXDH có một số dạng khả năng phủ nhận mật mã. Được thúc đẩy bởi mục tiêu của X3DH, Brendel et al. giới thiệu một khái niệm về khả năng phủ nhận _1 – trong – 2_ đối với các bên bán trung thực và một _thẩm phán kiểu _big brother_ có quyền truy cập vào tất cả các khóa bí mật của các bên. Vì Mỹ Anh hoặc Đan Nguyên có thể tạo một bản ghi giả bằng cách chỉ sử dụng khóa bí mật của riêng họ, PQXDH có thuộc tính phủ nhận này. Vatandas et al. chứng minh rằng X3DH có thể phủ nhận theo một nghĩa khác, tùy thuộc vào một số _Giả định về Kiến Thức của Diffie – Hellman._ PQXDH cũng có thể phủ nhận theo nghĩa này đối với Mỹ Anh, với cùng các giả định, và Signal giả thuyết rằng nó cũng có thể phủ nhận đối với Đan Nguyên nếu có thêm giả định _Nhận Thức Văn Bản Thô_ (PA) đối với pqkem.

Signal lưu ý rằng Kyber sử dụng một biến thể của phép biến đổi Fujisaki – Okamoto với cơ chế từ chối ngầm và do đó không có thuộc tính PA. Tuy nhiên, trong PQXDH, một bản mã AEAD được mã hóa bằng khóa phiên luôn được gửi cùng với bản mã Kyber. Điều này có thể mang lại các đảm bảo tương tự như PA. Signal khuyến khích cộng đồng điều tra các thuộc tính phủ nhận chính xác của PQXDH.

Tất cả các khẳng định này đều liên quan đến khả năng phủ nhận trong môi trường cổ điển. Như đã thảo luận trong, Signal kỳ vọng rằng đối với các phiên bản tương lai của giao thức này (cung cấp xác thực lẫn nhau hậu lượng tử), các khẳng định về khả năng phủ nhận đối với các kẻ tấn công lượng tử bán trung thực sẽ vẫn giữ nguyên. Tuy nhiên, khả năng phủ nhận trước các kẻ tấn công lượng tử độc hại vẫn cần được nghiên cứu thêm.

### Chữ ký

Có thể sẽ có xu hướng muốn bỏ qua chữ ký khóa sơ bộ sau khi nhận thấy rằng việc xác thực lẫn nhau và bảo mật chuyển tiếp đã được đảm bảo thông qua các tính toán Diffie – Hellman (DH). Tuy nhiên, điều này có thể dẫn đến một cuộc tấn công _bảo mật chuyển tiếp yếu:_ Một máy chủ độc hại có thể cung cấp cho Mỹ Anh một gói khóa sơ bộ có chứa các khóa sơ bộ giả mạo, và sau đó, khi xâm phạm khóa nhận dạng của Đan Nguyên (IKB), có thể tính toán được khóa bí mật chung (SK).

Ngoài ra, cũng có thể có xu hướng muốn thay thế xác thực lẫn nhau dựa trên DH (tức là DH1 và DH2) bằng chữ ký từ các khóa nhận dạng. Tuy nhiên, điều này làm giảm tính từ chối (deniability), làm tăng kích thước của các thông điệp ban đầu, và làm gia tăng thiệt hại nếu các khóa riêng tạm thời hoặc khóa riêng sơ bộ bị xâm phạm, hoặc nếu sơ đồ chữ ký bị phá vỡ.

### Xâm phạm khóa (Key compromise)

Việc xâm phạm khóa riêng của một bên có ảnh hưởng nghiêm trọng đến bảo mật, mặc dù việc sử dụng các khóa tạm thời và khóa sơ bộ có thể giúp giảm thiểu một phần rủi ro.

Xâm phạm khóa riêng nhận dạng của một bên cho phép kẻ tấn công giả mạo bên đó đối với những người khác. Xâm phạm các khóa riêng sơ bộ của một bên có thể ảnh hưởng đến tính bảo mật của các giá trị SK cũ hoặc mới, tùy thuộc vào nhiều yếu tố khác nhau.

Việc phân tích đầy đủ tất cả các tình huống xâm phạm có thể xảy ra nằm ngoài phạm vi của Bài viết này, tuy nhiên, một số tình huống hợp lý có thể được phân tích như sau:

Nếu một khóa sơ bộ một lần trên đường cong elliptic (OPKB) hoặc một khóa sơ bộ một lần sử dụng kỹ thuật đóng gói khóa hậu lượng tử (PQOPKB) được sử dụng trong một phiên giao thức và bị xóa như quy định, thì việc xâm phạm khóa nhận dạng của Đan Nguyên và các khóa riêng sơ bộ của Đan Nguyên trong tương lai sẽ không làm lộ SK cũ.

Nếu khóa sơ bộ một lần không được sử dụng trong một phiên giao thức, thì việc xâm phạm các khóa riêng của IKB, SPKB và PQSPKB từ phiên giao thức đó sẽ dẫn đến việc lộ SK đã được tính toán trước đó. Việc thay thế thường xuyên các khóa sơ bộ có chữ ký có thể giúp giảm thiểu điều này, cũng như sử dụng một giao thức tăng tốc hậu PQXDH giúp thay thế nhanh chóng SK bằng các khóa mới để đảm bảo bảo mật chuyển tiếp.

Việc xâm phạm các khóa riêng sơ bộ có thể dẫn đến các cuộc tấn công kéo dài trong tương lai, chẳng hạn như tính toán thụ động các giá trị SK, và giả mạo danh tính của các bên khác đối với bên bị xâm phạm (_key – compromise impersonation_). Những cuộc tấn công này sẽ tiếp tục cho đến khi bên bị xâm phạm thay thế các khóa sơ bộ bị lộ trên máy chủ (trong trường hợp tấn công thụ động), hoặc xóa khóa riêng của khóa sơ bộ có chữ ký bị xâm phạm (trong trường hợp giả mạo danh tính).

### Đối thủ lượng tử thụ động (Passive quantum adversaries)

PQXDH được thiết kế để ngăn chặn các cuộc tấn công kiểu _thu thập trước, giải mã sau_ từ các đối thủ có quyền truy cập vào máy tính lượng tử có khả năng tính toán logarit rời rạc trên đường cong elliptic. Mặc dù tính bảo mật này chủ yếu dựa vào pqkem, nhưng nó cũng yêu cầu aead cung cấp bảo mật IND – CPA và INT – CTXT hậu lượng tử. Việc ước tính sức mạnh bảo mật hậu lượng tử của các hệ thống mật mã là rất khó, điều này khiến cho việc xác định yêu cầu này một cách chính xác trở nên thách thức.

Dựa trên các tiêu chí đánh giá của NIST đối với các đề xuất mật mã hậu lượng tử, một cuộc tấn công tìm kiếm khóa trên AES256 được xếp vào mức bảo mật cao nhất. Mặc dù điều này không hoàn toàn tương ứng với yêu cầu bảo mật của chúng ta, nhưng nó gợi ý rằng việc sử dụng một chế độ AEAD phù hợp với AES256 sẽ là đủ. Signal lưu ý một số đặc tính bảo mật của PQXDH trong bối cảnh này:

Nếu kẻ tấn công đã ghi lại thông tin công khai và thông điệp từ Mỹ Anh gửi đến Đan Nguyên, thì ngay cả khi có quyền truy cập vào máy tính lượng tử, kẻ tấn công cũng không thể xâm phạm SK.

Nếu một khóa sơ bộ một lần sử dụng kỹ thuật đóng gói khóa hậu lượng tử (PQOPKB) được sử dụng trong một phiên giao thức và bị xóa như quy định, thì ngay cả khi có quyền truy cập vào máy tính lượng tử trong tương lai, kẻ tấn công cũng không thể xâm phạm SK cũ.

Nếu các khóa sơ bộ một lần hậu lượng tử không được sử dụng trong một phiên giao thức, thì quyền truy cập vào máy tính lượng tử và việc xâm phạm khóa riêng của PQSPKB từ phiên giao thức đó sẽ làm lộ SK đã được tính toán trước đó. Việc thay thế thường xuyên các khóa sơ bộ có chữ ký giúp giảm thiểu rủi ro này, cũng như sử dụng một giao thức tăng tốc hậu PQXDH để thay thế nhanh chóng SK bằng các khóa mới nhằm đảm bảo bảo mật chuyển tiếp.

### Đối thủ lượng tử chủ động (Active quantum adversaries)

PQXDH không được thiết kế để bảo vệ chống lại các đối thủ lượng tử chủ động.

Một kẻ tấn công chủ động có quyền truy cập vào một máy tính lượng tử có khả năng tính toán logarit rời rạc trên đường cong elliptic có thể tính toán DH(PK1, PK2) và Sig(PK, M, Z) cho tất cả các khóa elliptic curve PK1, PK2 và PK. Điều này cho phép kẻ tấn công giả mạo Mỹ Anh bằng cách sử dụng máy tính lượng tử để tính toán khóa bí mật tương ứng với PKA, sau đó tiếp tục với giao thức.

Một máy chủ độc hại có quyền truy cập vào máy tính lượng tử như vậy có thể giả mạo Đan Nguyên bằng cách tạo ra các cặp khóa mới PQSPK’B và PQOPK’B, tính toán khóa bí mật tương ứng với PKB, sau đó sử dụng PKB để ký các khóa KEM hậu lượng tử vừa được tạo và cung cấp những khóa do kẻ tấn công tạo ra thay vì khóa KEM hậu lượng tử của Đan Nguyên khi Mỹ Anh yêu cầu gói khóa sơ bộ.

Có thể cân nhắc việc thêm một khóa nhận dạng hậu lượng tử để Đan Nguyên có thể sử dụng để ký các khóa sơ bộ hậu lượng tử của mình. Điều này sẽ ngăn chặn cuộc tấn công của máy chủ độc hại được mô tả ở trên và cung cấp cho Mỹ Anh một đảm bảo mật mã rằng cô ấy đang giao tiếp với Đan Nguyên. Tuy nhiên, nó không đảm bảo xác thực lẫn nhau, vì Đan Nguyên không có bất kỳ đảm bảo mật mã nào về người mà anh ta đang giao tiếp.

Các sơ đồ KEM và chữ ký hậu lượng tử đang được NIST tiêu chuẩn hóa không cung cấp cơ chế xác thực lẫn nhau có thể phủ nhận hậu lượng tử, mặc dù điều này có thể đạt được thông qua việc sử dụng chữ ký vòng hậu lượng tử hoặc chữ ký của trình xác minh được chỉ định. Signal kêu gọi cộng đồng hướng tới việc tiêu chuẩn hóa những cơ chế này hoặc các cơ chế khác cho phép xác thực lẫn nhau có thể phủ nhận.

### Tin cậy máy chủ

Một máy chủ độc hại có thể khiến giao tiếp giữa Mỹ Anh và Đan Nguyên thất bại (Ví dụ: bằng cách từ chối chuyển tiếp tin nhắn).

Nếu Mỹ Anh và Đan Nguyên xác thực lẫn nhau, thì cuộc tấn công duy nhất mà máy chủ có thể thực hiện thêm là từ chối cung cấp các khóa sơ bộ một lần, khiến cho bảo mật chuyển tiếp của SK phụ thuộc vào thời hạn của khóa sơ bộ có chữ ký.

Việc giảm mức độ bảo mật chuyển tiếp ban đầu này cũng có thể xảy ra nếu một bên độc hại cố tình làm cạn kiệt các khóa sơ bộ một lần của bên kia. Do đó, máy chủ nên cố gắng ngăn chặn điều này (Ví dụ: bằng cách giới hạn tốc độ truy xuất gói khóa sơ bộ).

### Ràng buộc nhận dạng (Identity binding)

Việc xác thực không nhất thiết ngăn chặn các cuộc tấn công _gán nhầm danh tính_ hoặc _chia sẻ khóa không xác định._

Điều này xảy ra khi một kẻ tấn công (_Kỳ Lân_) trình bày sai dấu vân tay khóa nhận dạng của Đan Nguyên cho Mỹ Anh như thể đó là của chính hắn, và sau đó hoặc là chuyển tiếp tin nhắn ban đầu của Mỹ Anh đến Đan Nguyên, hoặc trình bày sai thông tin liên lạc của Đan Nguyên như thể đó là của hắn.

Hệ quả là Mỹ Anh nghĩ rằng cô ấy đang gửi tin nhắn ban đầu đến Kỳ Lân trong khi thực tế lại đang gửi nó đến Đan Nguyên.

Để làm cho việc này trở nên khó khăn hơn, các bên có thể bao gồm nhiều thông tin nhận dạng hơn vào AD hoặc băm thêm thông tin nhận dạng vào dấu vân tay, chẳng hạn như tên người dùng, số điện thoại, tên thật hoặc các thông tin nhận dạng khác. Kỳ Lân sẽ buộc phải nói dối về các giá trị bổ sung này, điều này có thể gây khó khăn.

Tuy nhiên, không có cách nào để ngăn Kỳ Lân nói dối về các giá trị bổ sung một cách đáng tin cậy, và việc đưa thêm thông tin nhận dạng vào giao thức thường dẫn đến các đánh đổi liên quan đến quyền riêng tư, tính linh hoạt và giao diện người dùng. Việc phân tích chi tiết các đánh đổi này nằm ngoài phạm vi của Bài viết này.

### Rủi ro từ nguồn ngẫu nhiên yếu (weak randomness)

Ngoài các mối quan tâm về việc tạo khóa, tính bảo mật của bí mật chung PQKEM phụ thuộc vào nguồn ngẫu nhiên có sẵn trên thiết bị của Mỹ Anh tại thời điểm thực hiện thao tác PQKEM – ENC. Điều này dẫn đến một tình huống tương tự như trong trao đổi Diffie – Hellman.

Đối với cả Diffie – Hellman và Kyber, nếu Mỹ Anh có entropy yếu, thì bí mật chung thu được sẽ có entropy thấp khi được điều kiện hóa trên khóa công khai của Đan Nguyên. Do đó, cả bảo mật cổ điển và hậu lượng tử của SK đều phụ thuộc vào độ mạnh của nguồn ngẫu nhiên của Mỹ Anh.

Kyber băm khóa công khai của Đan Nguyên với các bit ngẫu nhiên của Mỹ Anh để tạo bí mật chung, làm cho khóa của Đan Nguyên có tính đóng góp, tương tự như trong trao đổi khóa Diffie – Hellman. Điều này không làm giảm sự phụ thuộc vào nguồn entropy của Mỹ Anh như đã mô tả ở trên, nhưng nó hạn chế khả năng của Mỹ Anh trong việc kiểm soát bí mật chung hậu lượng tử. Không phải tất cả các sơ đồ KEM đều làm cho khóa của Đan Nguyên có tính đóng góp, và đây là một đặc tính cần xem xét khi lựa chọn pqkem.

### Ngăn chặn các cuộc tấn công tái mã hóa KEM

Thông thường, khi sử dụng một KEM dựa trên mã hóa khóa công khai để mã hóa một bí mật chung mới, bí mật chung này không được gắn chặt với khóa công khai.

Một bí mật chung tương ứng với việc đóng gói (_encapsulation_) một khóa công khai bị xâm phạm có thể dễ dàng được đóng gói lại (_re encapsulated_) đối với một khóa công khai khác chưa bị xâm phạm.

Tính bảo mật IND – CCA của KEM không ngăn chặn hành vi này.

Đối với một KEM có thể bị tấn công theo cách này, ngay khi một PQPK bị xâm phạm, kẻ tấn công có thể buộc tất cả các bên khởi tạo sử dụng PQPK bị xâm phạm đó, và bằng cách luôn đóng gói lại bí mật chung đối với một PQPK mới chưa bị xâm phạm, khiến bên đáp ứng tin rằng không có gì bất thường xảy ra.

Điều này đặc biệt phá vỡ khái niệm độc lập phiên thông thường: Việc xâm phạm một PQPK của một bên đáp ứng thực tế có thể ảnh hưởng đến tính bảo mật của các phiên khác mà lẽ ra nên sử dụng các PQPK riêng biệt và độc lập.

Kyber KEM kết hợp khóa công khai KEM vào quá trình tạo bí mật chung, giúp ngăn chặn cuộc tấn công này.

Đối với một KEM IND – CCA tổng quát, có thể ngăn chặn cuộc tấn công này bằng cách thêm PQPKB vào AD của tin nhắn ban đầu. Xem để biết thêm chi tiết về cuộc tấn công này và các biện pháp giảm thiểu.

### Định danh khóa

Các định danh khóa công khai không phải là yếu tố quan trọng đối với bảo mật, vì giá trị thực tế của các khóa đã được ký hoặc được sử dụng trong AD.

Tuy nhiên, nếu các định danh trùng lặp quá thường xuyên, điều này có thể dẫn đến lỗi giải mã ở phía bên đáp ứng, vì bên này sẽ cố gắng hoàn tất trao đổi khóa với khóa công khai sai, và điều này sẽ thất bại.

Ứng dụng có thể chọn sử dụng khóa công khai làm định danh khóa, nhưng cũng có thể chọn một định danh có kích thước nhỏ hơn để giảm dung lượng tin nhắn, miễn là khả năng xảy ra xung đột là thấp.

Các phương pháp triển khai khả thi bao gồm sử dụng băm của khóa công khai, một giá trị ngẫu nhiên hoặc các giá trị được tạo tuần tự bắt đầu từ một độ lệch ngẫu nhiên.

<figure><img src="https://banmaixanh.vercel.app/image/cover/001-071.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>