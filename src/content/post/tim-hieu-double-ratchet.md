---
pubDatetime: 2022-04-20T10:10:00Z
title: Tìm hiểu về thuật toán Double Ratchet – Mã hóa tin nhắn dựa trên khóa bí mật chung (Shared secret key)
description: Thuật toán Double Ratchet là cơ chế mã hóa tiên tiến được thiết kế đặc biệt cho các ứng dụng nhắn tin an toàn, với mục tiêu đảm bảo tính bảo mật tối đa trong quá trình trao đổi thông điệp.
image: https://banmaixanh.vercel.app/image/cover/001-584.jpg
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

_Thuật toán Double Ratchet là cơ chế mã hóa tiên tiến được thiết kế đặc biệt cho các ứng dụng nhắn tin an toàn, với mục tiêu đảm bảo tính bảo mật tối đa trong quá trình trao đổi thông điệp._

# Giới thiệu

Double Ratchet là cơ chế mã hóa tiên tiến được thiết kế đặc biệt cho các ứng dụng nhắn tin an toàn, với mục tiêu đảm bảo tính bảo mật tối đa trong quá trình trao đổi thông điệp. Nguyên lý hoạt động của thuật toán dựa trên việc liên tục tạo ra các khóa mới trong mỗi lần trao đổi tin nhắn, qua đó đảm bảo rằng ngay cả khi một khóa bị xâm phạm, các thông điệp trước và sau vẫn được bảo vệ an toàn. Cơ chế _ratchet kép_ cho phép các bên liên tục làm mới khóa mã hóa một cách độc lập và an toàn.

Ứng dụng phổ biến nhất của Double Ratchet được thể hiện trong ứng dụng nhắn tin Signal, một trong những nền tảng bảo mật hàng đầu thế giới. Thuật toán được sử dụng để bảo vệ các cuộc trò chuyện, đảm bảo rằng ngay cả khi một phần của quá trình liên lạc bị xâm phạm, toàn bộ lịch sử tin nhắn vẫn được giữ an toàn. Ưu điểm lớn nhất của Double Ratchet nằm ở khả năng cung cấp một lớp bảo mật động, liên tục và thích ứng với các mối đe dọa an ninh tiềm ẩn.

Thuật toán [Double Ratchet](https://nhavantuonglai.com/article/tim-hieu-double-ratchet) được sử dụng để hai bên trao đổi tin nhắn được mã hóa dựa trên một khóa bí mật chung. Thông thường, các bên sẽ sử dụng một giao thức thỏa thuận khóa (chẳng hạn như X3DH) để đồng thuận về khóa bí mật chung. Sau đó, các bên sẽ sử dụng Double Ratchet để gửi và nhận các tin nhắn được mã hóa.

Các bên sẽ tạo ra khóa mới cho mỗi tin nhắn Double Ratchet để đảm bảo rằng các khóa trước đó không thể bị tính toán lại từ các khóa sau này. Đồng thời, các bên cũng gửi các giá trị công khai Diffie – Hellman gắn kèm với tin nhắn của họ. Kết quả của các phép tính Diffie – Hellman sẽ được trộn vào các khóa dẫn xuất, đảm bảo rằng các khóa sau không thể bị tính toán lại từ các khóa trước. Những tính chất này giúp bảo vệ tin nhắn được mã hóa trong trường hợp khóa của một bên bị xâm phạm.

## Kiến thức cơ bản

### Chuỗi KDF

Chuỗi KDF là một khái niệm cốt lõi trong thuật toán Double Ratchet.

Signal định nghĩa KDF là một hàm mật mã nhận vào một khóa KDF bí mật và ngẫu nhiên cùng với một số dữ liệu đầu vào, sau đó trả về dữ liệu đầu ra. Dữ liệu đầu ra này không thể phân biệt với dữ liệu ngẫu nhiên miễn là khóa không bị lộ (tức là một KDF phải đáp ứng yêu cầu của một _PRF_ mật mã). Nếu khóa không phải là bí mật và ngẫu nhiên, KDF vẫn phải cung cấp một hàm băm mật mã an toàn từ khóa và dữ liệu đầu vào. Các cấu trúc HMAC và HKDF, khi được khởi tạo bằng một thuật toán băm an toàn, sẽ đáp ứng định nghĩa của KDF.

<figure><img src="https://banmaixanh.vercel.app/image/article/tim-hieu-signal-protocol-01.jpg" alt="Tìm hiểu về Double Ratchet" height=100% width=100%><figcaption><p>Tìm hiểu về Double Ratchet</p></figcaption></figure>

Signal sử dụng thuật ngữ _chuỗi KDF_ khi một phần dữ liệu đầu ra từ KDF được sử dụng làm khóa đầu ra, còn một phần khác được sử dụng để thay thế khóa KDF, sau đó có thể tiếp tục được dùng với một đầu vào khác. Sơ đồ dưới đây minh họa một chuỗi KDF xử lý ba đầu vào và tạo ra ba khóa đầu ra:

Chuỗi KDF có các thuộc tính sau (sử dụng thuật ngữ được điều chỉnh từ):

– Khả năng chống chịu (Resilience): Các khóa đầu ra trông giống ngẫu nhiên đối với kẻ tấn công không biết khóa KDF. Điều này đúng ngay cả khi kẻ tấn công có thể kiểm soát dữ liệu đầu vào của KDF.

– Bảo mật tiến về phía trước (Forward security): Các khóa đầu ra trong quá khứ vẫn trông như ngẫu nhiên đối với kẻ tấn công ngay cả khi tại một thời điểm nào đó, kẻ tấn công có thể biết khóa KDF.

– Khả năng phục hồi sau xâm nhập (Break – in recovery): Các khóa đầu ra trong tương lai trông như ngẫu nhiên đối với kẻ tấn công nếu tại một thời điểm nào đó, kẻ tấn công biết khóa KDF, miễn là các đầu vào tương lai có đủ độ ngẫu nhiên được bổ sung.

Trong một phiên Double Ratchet giữa Mỹ Anh và Đan Nguyên, mỗi bên sẽ lưu trữ một khóa KDF cho ba chuỗi: _chuỗi gốc_ (root chain), _chuỗi gửi_ (sending chain) và _chuỗi nhận_ (receiving chain). Chuỗi gửi của Mỹ Anh sẽ khớp với chuỗi nhận của Đan Nguyên và ngược lại.

Khi Mỹ Anh và Đan Nguyên trao đổi tin nhắn, họ cũng trao đổi các khóa công khai Diffie – Hellman mới, và các bí mật đầu ra của Diffie – Hellman trở thành đầu vào cho chuỗi gốc. Các khóa đầu ra từ chuỗi gốc sẽ trở thành các khóa KDF mới cho chuỗi gửi và chuỗi nhận. Đây được gọi là _bộ tăng Diffie – Hellman_ (Diffie – Hellman ratchet).

Chuỗi gửi và chuỗi nhận sẽ được cập nhật mỗi khi tin nhắn được gửi và nhận. Các khóa đầu ra của chúng sẽ được sử dụng để mã hóa và giải mã tin nhắn. Đây được gọi là _bộ tăng khóa đối xứng_ (symmetric – key ratchet).

### Bộ tăng khóa đối xứng (Symmetric key ratchet)

Mỗi tin nhắn được gửi hoặc nhận đều được mã hóa bằng một khóa tin nhắn duy nhất. Các khóa tin nhắn này là các khóa đầu ra từ chuỗi KDF gửi và nhận. Các khóa KDF của những chuỗi này được gọi là _khóa chuỗi_ (chain keys).

Các đầu vào KDF cho chuỗi gửi và chuỗi nhận là cố định, vì vậy những chuỗi này không cung cấp khả năng phục hồi sau xâm nhập. Chuỗi gửi và chuỗi nhận chỉ đảm bảo rằng mỗi tin nhắn được mã hóa bằng một khóa duy nhất có thể bị xóa sau khi mã hóa hoặc giải mã. Việc tính toán khóa chuỗi tiếp theo và khóa tin nhắn từ một khóa chuỗi nhất định là một bước _tăng_ (ratchet step) trong bộ tăng khóa đối xứng. Sơ đồ dưới đây minh họa hai bước như vậy:

<figure><img src="https://banmaixanh.vercel.app/image/article/tim-hieu-signal-protocol-02.jpg" alt="Tìm hiểu về Double Ratchet" height=100% width=100%><figcaption><p>Tìm hiểu về Double Ratchet</p></figcaption></figure>

Vì các khóa tin nhắn không được sử dụng để tạo ra bất kỳ khóa nào khác, chúng có thể được lưu trữ mà không ảnh hưởng đến tính bảo mật của các khóa tin nhắn khác. Điều này hữu ích trong việc xử lý các tin nhắn bị mất hoặc đến không theo thứ tự.

## Bộ tăng Diffie – Hellman (Diffie – Hellman ratchet)

Nếu một kẻ tấn công đánh cắp các khóa chuỗi gửi và nhận của một bên, chúng có thể tính toán tất cả các khóa tin nhắn trong tương lai và giải mã tất cả tin nhắn sau đó. Để ngăn chặn điều này, thuật toán Double Ratchet kết hợp bộ tăng khóa đối xứng với một _bộ tăng Diffie – Hellman_ (DH ratchet), giúp cập nhật khóa chuỗi dựa trên các đầu ra của Diffie – Hellman.

Để triển khai bộ tăng DH, mỗi bên tạo một cặp khóa DH (bao gồm khóa công khai và khóa riêng Diffie – Hellman), được gọi là cặp khóa _tăng_ hiện tại (ratchet key pair). Mỗi tin nhắn từ một bên sẽ bắt đầu với một tiêu đề chứa khóa công khai tăng hiện tại của người gửi. Khi nhận được một khóa công khai tăng mới từ phía đối phương, một bước tăng DH sẽ được thực hiện, thay thế cặp khóa tăng hiện tại của bên nhận bằng một cặp khóa mới.

Điều này tạo ra một hành vi _ping – pong,_ trong đó các bên lần lượt thay thế cặp khóa tăng. Một kẻ nghe lén có thể tạm thời xâm nhập vào một trong hai bên và biết được giá trị của khóa riêng tăng hiện tại, nhưng khóa riêng đó cuối cùng sẽ bị thay thế bởi một khóa không bị xâm nhập. Khi đó, phép tính Diffie – Hellman giữa các cặp khóa tăng sẽ tạo ra một đầu ra DH mà kẻ tấn công không thể biết được.

Các sơ đồ sau đây minh họa cách bộ tăng DH tạo ra một chuỗi đầu ra DH chung.

Mỹ Anh được khởi tạo với khóa công khai tăng của Đan Nguyên, nhưng khóa công khai tăng của Mỹ Anh vẫn chưa được Đan Nguyên biết đến. Là một phần của quá trình khởi tạo, Mỹ Anh thực hiện một phép tính DH giữa khóa riêng tăng của cô ấy và khóa công khai tăng của Đan Nguyên:

<figure><img src="https://banmaixanh.vercel.app/image/article/tim-hieu-signal-protocol-03.jpg" alt="Tìm hiểu về Double Ratchet" height=100% width=100%><figcaption><p>Tìm hiểu về Double Ratchet</p></figcaption></figure>

Các tin nhắn ban đầu của Mỹ Anh chứa khóa công khai tăng của cô ấy. Khi Đan Nguyên nhận được một trong những tin nhắn này, anh ấy thực hiện một bước tăng DH: Anh ấy tính toán đầu ra DH giữa khóa công khai tăng của Mỹ Anh và khóa riêng tăng của anh ấy, giá trị này bằng với đầu ra DH ban đầu của Mỹ Anh. Sau đó, Đan Nguyên thay thế cặp khóa tăng của mình và tính toán một đầu ra DH mới:

<figure><img src="https://banmaixanh.vercel.app/image/article/tim-hieu-signal-protocol-04.jpg" alt="Tìm hiểu về Double Ratchet" height=100% width=100%><figcaption><p>Tìm hiểu về Double Ratchet</p></figcaption></figure>

Các tin nhắn do Đan Nguyên gửi sẽ chứa khóa công khai mới của anh ấy. Cuối cùng, Mỹ Anh sẽ nhận được một trong các tin nhắn của Đan Nguyên và thực hiện một bước tăng DH, thay thế cặp khóa tăng của cô ấy và tạo ra hai đầu ra DH, một trong số đó khớp với đầu ra mới nhất của Đan Nguyên và một đầu ra mới khác:

<figure><img src="https://banmaixanh.vercel.app/image/article/tim-hieu-signal-protocol-05.jpg" alt="Tìm hiểu về Double Ratchet" height=100% width=100%><figcaption><p>Tìm hiểu về Double Ratchet</p></figcaption></figure>

Các tin nhắn do Mỹ Anh gửi sẽ chứa khóa công khai mới của cô ấy. Cuối cùng, Đan Nguyên sẽ nhận được một trong những tin nhắn này và thực hiện bước tăng DH tiếp theo, và chu trình tiếp tục:

<figure><img src="https://banmaixanh.vercel.app/image/article/tim-hieu-signal-protocol-06.jpg" alt="Tìm hiểu về Double Ratchet" height=100% width=100%><figcaption><p>Tìm hiểu về Double Ratchet</p></figcaption></figure>

Các đầu ra DH được tạo ra trong mỗi bước tăng DH sẽ được sử dụng để tạo các khóa chuỗi gửi và nhận mới. Sơ đồ dưới đây minh họa lại bước tăng đầu tiên của Đan Nguyên. Đan Nguyên sử dụng đầu ra DH đầu tiên để tạo chuỗi nhận khớp với chuỗi gửi của Mỹ Anh. Sau đó, Đan Nguyên sử dụng đầu ra DH thứ hai để tạo một chuỗi gửi mới:

<figure><img src="https://banmaixanh.vercel.app/image/article/tim-hieu-signal-protocol-07.jpg" alt="Tìm hiểu về Double Ratchet" height=100% width=100%><figcaption><p>Tìm hiểu về Double Ratchet</p></figcaption></figure>

Khi các bên thay phiên nhau thực hiện các bước tăng DH, họ cũng lần lượt giới thiệu các chuỗi gửi mới:

<figure><img src="https://banmaixanh.vercel.app/image/article/tim-hieu-signal-protocol-08.jpg" alt="Tìm hiểu về Double Ratchet" height=100% width=100%><figcaption><p>Tìm hiểu về Double Ratchet</p></figcaption></figure>

Tuy nhiên, mô hình trên chỉ là một sự đơn giản hóa. Thay vì lấy trực tiếp khóa chuỗi từ các đầu ra DH, các đầu ra DH này được sử dụng làm đầu vào KDF cho một _chuỗi gốc_ (root chain), và các đầu ra KDF từ chuỗi gốc này sẽ được sử dụng làm khóa chuỗi gửi và nhận mới. Việc sử dụng một chuỗi KDF trong trường hợp này giúp cải thiện khả năng chống chịu và phục hồi sau xâm nhập.

Do đó, một bước tăng DH đầy đủ bao gồm hai lần cập nhật chuỗi KDF gốc và sử dụng các khóa đầu ra KDF làm khóa chuỗi nhận và gửi mới.

<figure><img src="https://banmaixanh.vercel.app/image/article/tim-hieu-signal-protocol-09.jpg" alt="Tìm hiểu về Double Ratchet" height=100% width=100%><figcaption><p>Tìm hiểu về Double Ratchet</p></figcaption></figure>

### Double ratchet

Việc kết hợp bộ tăng khóa đối xứng và bộ tăng Diffie – Hellman tạo thành thuật toán Double Ratchet:

– Khi một tin nhắn được gửi hoặc nhận, một bước tăng khóa đối xứng sẽ được áp dụng cho chuỗi gửi hoặc nhận để tạo ra khóa tin nhắn.

– Khi một khóa công khai tăng mới được nhận, một bước tăng DH sẽ được thực hiện trước khi áp dụng bước tăng khóa đối xứng nhằm thay thế các khóa chuỗi.

Trong sơ đồ dưới đây, Mỹ Anh được khởi tạo với khóa công khai tăng của Đan Nguyên và một bí mật chung, đây chính là khóa gốc ban đầu. Trong quá trình khởi tạo, Mỹ Anh tạo ra một cặp khóa tăng mới và sử dụng đầu ra DH để làm đầu vào cho KDF gốc nhằm tính toán một khóa gốc (RK) mới và một khóa chuỗi gửi (CK):

<figure><img src="https://banmaixanh.vercel.app/image/article/tim-hieu-signal-protocol-10.jpg" alt="Tìm hiểu về Double Ratchet" height=100% width=100%><figcaption><p>Tìm hiểu về Double Ratchet</p></figcaption></figure>

Khi Mỹ Anh gửi tin nhắn đầu tiên A1, cô ấy áp dụng một bước tăng khóa đối xứng vào khóa chuỗi gửi của mình, tạo ra một khóa tin nhắn mới (các khóa tin nhắn sẽ được gắn nhãn theo tin nhắn mà chúng mã hóa hoặc giải mã). Khóa chuỗi mới sẽ được lưu trữ, nhưng khóa tin nhắn và khóa chuỗi cũ có thể bị xóa:

<figure><img src="https://banmaixanh.vercel.app/image/article/tim-hieu-signal-protocol-11.jpg" alt="Tìm hiểu về Double Ratchet" height=100% width=100%><figcaption><p>Tìm hiểu về Double Ratchet</p></figcaption></figure>

Nếu Mỹ Anh nhận được phản hồi B1 từ Đan Nguyên, tin nhắn đó sẽ chứa một khóa công khai tăng mới (các khóa công khai của Đan Nguyên được gắn nhãn theo tin nhắn mà chúng lần đầu tiên được nhận). Mỹ Anh thực hiện một bước tăng DH để tạo ra các khóa chuỗi nhận và gửi mới. Sau đó, cô ấy thực hiện một bước tăng khóa đối xứng vào chuỗi nhận để lấy khóa tin nhắn cho tin nhắn nhận được:

<figure><img src="https://banmaixanh.vercel.app/image/article/tim-hieu-signal-protocol-12.jpg" alt="Tìm hiểu về Double Ratchet" height=100% width=100%><figcaption><p>Tìm hiểu về Double Ratchet</p></figcaption></figure>

Giả sử Mỹ Anh tiếp tục gửi tin nhắn A2, nhận tin nhắn B2 với khóa công khai tăng cũ của Đan Nguyên, sau đó gửi tiếp A3 và A4. Chuỗi gửi của Mỹ Anh sẽ tiến ba bước, và chuỗi nhận của cô ấy sẽ tiến một bước:

<figure><img src="https://banmaixanh.vercel.app/image/article/tim-hieu-signal-protocol-13.jpg" alt="Tìm hiểu về Double Ratchet" height=100% width=100%><figcaption><p>Tìm hiểu về Double Ratchet</p></figcaption></figure>

Tiếp theo, Mỹ Anh nhận được tin nhắn B3 và B4 với khóa tăng tiếp theo của Đan Nguyên, sau đó cô ấy gửi tin nhắn A5. Trạng thái cuối cùng của Mỹ Anh sẽ như sau:

<figure><img src="https://banmaixanh.vercel.app/image/article/tim-hieu-signal-protocol-14.jpg" alt="Tìm hiểu về Double Ratchet" height=100% width=100%><figcaption><p>Tìm hiểu về Double Ratchet</p></figcaption></figure>

### Xử lý tin nhắn đến không theo thứ tự (Out of order messages)

Thuật toán Double Ratchet xử lý các tin nhắn bị mất hoặc đến không theo thứ tự bằng cách bao gồm trong mỗi tiêu đề tin nhắn một số thứ tự của tin nhắn trong chuỗi gửi (_N=0,1,2,…_) và độ dài (số lượng khóa tin nhắn) của chuỗi gửi trước đó (_PN_). Điều này cho phép bên nhận tiến đến khóa tin nhắn phù hợp đồng thời lưu trữ các khóa tin nhắn bị bỏ qua trong trường hợp tin nhắn đó đến sau.

Khi nhận được một tin nhắn, nếu một bước tăng DH được kích hoạt, thì giá trị _PN_ nhận được trừ đi độ dài của chuỗi nhận hiện tại chính là số lượng tin nhắn bị bỏ qua trong chuỗi nhận đó. Giá trị _N_ nhận được chính là số lượng tin nhắn bị bỏ qua trong chuỗi nhận mới (tức là chuỗi sau bước tăng DH).

Nếu không có bước tăng DH nào được kích hoạt, thì giá trị _N_ nhận được trừ đi độ dài của chuỗi nhận chính là số lượng tin nhắn bị bỏ qua trong chuỗi đó.

Ví dụ, xét chuỗi tin nhắn từ phần trước khi tin nhắn B2 và B3 bị bỏ qua. Tin nhắn B4 sẽ kích hoạt bước tăng DH của Mỹ Anh (thay vì B3). Tin nhắn B4 sẽ có _PN=2_ và _N=1._ Khi nhận được B4, Mỹ Anh sẽ có một chuỗi nhận có độ dài là 1 (chỉ chứa B1), vì vậy Mỹ Anh sẽ lưu trữ các khóa tin nhắn cho B2 và B3 để chúng có thể được giải mã nếu đến sau.

<figure><img src="https://banmaixanh.vercel.app/image/article/tim-hieu-signal-protocol-15.jpg" alt="Tìm hiểu về Double Ratchet" height=100% width=100%><figcaption><p>Tìm hiểu về Double Ratchet</p></figcaption></figure>

## Double catchet

### Chức năng bên ngoài

Để khởi tạo Double Ratchet, cần định nghĩa các hàm sau.

– GENERATE_DH(): Trả về một cặp khóa Diffie – Hellman mới.

– DH(dh_pair, dh_pub): Trả về đầu ra của phép tính Diffie – Hellman giữa khóa riêng tư từ cặp khóa DH _dh_pair_ và khóa công khai DH _dh_pub._ Nếu hàm DH từ chối các khóa công khai không hợp lệ, thì hàm này có thể ném ra một ngoại lệ để chấm dứt quá trình xử lý.

– KDF_RK(rk, dh_out): Trả về một cặp _(Khóa gốc 32 byte, Khóa chuỗi 32 byte)_ làm đầu ra của việc áp dụng một hàm dẫn xuất khóa (KDF) với khóa gốc 32 byte _rk_ lên đầu ra Diffie – Hellman _dh_out._

– KDF_CK(ck): Trả về một cặp _(Khóa chuỗi 32 byte, Khóa tin nhắn 32 byte)_ làm đầu ra của việc áp dụng một KDF với khóa chuỗi 32 byte _ck_ lên một hằng số.

– ENCRYPT(mk, plaintext, associated_data): Trả về một bản mã hóa AEAD của _plaintext_ bằng khóa tin nhắn _mk._ _associated_data_ được xác thực nhưng không được đưa vào bản mã. Vì mỗi khóa tin nhắn chỉ được sử dụng một lần, nonce AEAD có thể được xử lý theo nhiều cách khác nhau: cố định ở một giá trị hằng số; được tạo ra từ _mk_ cùng với một khóa mã hóa AEAD độc lập; được tạo ra như một đầu ra bổ sung từ _KDF_CK;_ hoặc được chọn ngẫu nhiên và truyền đi.

– DECRYPT(mk, ciphertext, associated_data): Trả về bản giải mã AEAD của _ciphertext_ bằng khóa tin nhắn _mk._ Nếu xác thực thất bại, một ngoại lệ sẽ được ném ra để chấm dứt quá trình xử lý.

– HEADER(dh_pair, pn, n): Tạo một tiêu đề tin nhắn mới chứa khóa công khai DH Ratchet từ cặp khóa trong _dh_pair,_ độ dài chuỗi trước đó _pn,_ và số thứ tự tin nhắn _n._ Đối tượng tiêu đề được trả về chứa khóa công khai Ratchet _dh_ và các số nguyên _pn_ và _n._

– CONCAT(ad, header): Mã hóa một tiêu đề tin nhắn thành một chuỗi byte có thể phân tích, thêm chuỗi byte _ad_ vào phía trước, và trả về kết quả. Nếu _ad_ không được đảm bảo là một chuỗi byte có thể phân tích, một giá trị độ dài nên được thêm vào đầu ra để đảm bảo đầu ra có thể được phân tích như một cặp duy nhất _(ad, header)._

Một hằng số _MAX_SKIP_ cũng cần được định nghĩa. Hằng số này chỉ định số lượng tối đa các khóa tin nhắn có thể bị bỏ qua trong một chuỗi. Giá trị này nên đủ lớn để chịu được việc mất hoặc trì hoãn tin nhắn thông thường, nhưng đủ nhỏ để ngăn chặn việc tính toán quá mức do một kẻ gửi độc hại gây ra.

### Biến trạng thái

Mỗi bên theo dõi các biến trạng thái sau:

– DHs: Cặp khóa Ratchet DH (khóa Ratchet _gửi_ hoặc _tự thân_).

– DHr: Khóa công khai Ratchet DH (_nhận_ hoặc _từ xa_).

– RK: Khóa gốc 32 byte.

– CKs, CKr: Các khóa chuỗi 32 byte dành cho việc gửi và nhận.

– Ns, Nr: Số thứ tự tin nhắn dành cho việc gửi và nhận.

– PN: Số lượng tin nhắn trong chuỗi gửi trước đó.

– MKSKIPPED: Từ điển chứa các khóa tin nhắn bị bỏ qua, được lập chỉ mục theo khóa công khai Ratchet và số thứ tự tin nhắn. Nếu có quá nhiều phần tử được lưu trữ, một ngoại lệ sẽ được ném ra.

Trong đoạn mã Python tiếp theo, các biến trạng thái được truy cập như là các thành viên của một đối tượng trạng thái.

### Khởi tạo

Trước khi khởi tạo, cả hai bên phải sử dụng một giao thức thỏa thuận khóa để thống nhất về một khóa bí mật chung 32 byte (_SK_) và khóa công khai Ratchet của Đan Nguyên. Các giá trị này sẽ được sử dụng để khởi tạo khóa chuỗi gửi của Mỹ Anh và khóa gốc của Đan Nguyên. Các khóa chuỗi của Đan Nguyên và khóa chuỗi nhận của Mỹ Anh sẽ để trống, vì chúng sẽ được thiết lập trong bước Ratchet DH đầu tiên của mỗi bên.

(Giả sử Mỹ Anh bắt đầu gửi tin nhắn trước và Đan Nguyên không gửi tin nhắn cho đến khi nhận được một trong các tin nhắn của Mỹ Anh. Để cho phép Đan Nguyên gửi tin nhắn ngay sau khi khởi tạo, khóa chuỗi gửi của Đan Nguyên và khóa chuỗi nhận của Mỹ Anh có thể được khởi tạo bằng một khóa bí mật chung. Tuy nhiên, để đơn giản hóa, chúng ta sẽ không xem xét điều này thêm.)

Sau khi Mỹ Anh và Đan Nguyên đồng thuận về _SK_ và khóa công khai Ratchet của Đan Nguyên, Mỹ Anh gọi _RatchetInitMyAnh_ và Đan Nguyên gọi _RatchetInitDanNguyen():_

```
def RatchetInitMyAnh(state, SK, DanNguyen _dh_public_key):
		state.DHs = GENERATE_DH()
		state.DHr = Đan Nguyên_dh_public_key
		state.RK, state.CKs = KDF_RK(SK, DH(state.DHs, state.DHr)) 
		state.CKr = None
		state.Ns = 0
		state.Nr = 0
		state.PN = 0
		state.MKSKIPPED = {}

def RatchetInitĐan Nguyên(state, SK, Đan Nguyên_dh_key_pair):
		state.DHs = Đan Nguyên_dh_key_pair
		state.DHr = None
		state.RK = SK
		state.CKs = None
		state.CKr = None
		state.Ns = 0
		state.Nr = 0
		state.PN = 0
		state.MKSKIPPED = {}
```

### Mã hóa tin nhắn

_Hàm RatchetEncrypt()_ được gọi để mã hóa tin nhắn. Hàm này thực hiện một bước Ratchet với khóa đối xứng, sau đó mã hóa tin nhắn bằng khóa tin nhắn được tạo ra. Ngoài nội dung tin nhắn, hàm này còn nhận vào một chuỗi byte _AD,_ chuỗi này sẽ được thêm vào phần tiêu đề để tạo dữ liệu liên kết cho quá trình mã hóa AEAD:

```
def RatchetEncrypt(state, plaintext, AD):
		state.CKs, mk = KDF_CK(state.CKs)
		header = HEADER(state.DHs, state.PN, state.Ns)
		state.Ns += 1
		return header, ENCRYPT(mk, plaintext, CONCAT(AD, header))
```

### Giải mã tin nhắn

_Hàm RatchetDecrypt()_ được gọi để giải mã tin nhắn. Hàm này thực hiện các bước sau:

– Nếu tin nhắn tương ứng với một khóa tin nhắn bị bỏ qua trước đó, hàm sẽ giải mã tin nhắn, xóa khóa tin nhắn đó và trả về nội dung tin nhắn.

– Nếu một khóa Ratchet mới đã được nhận, hàm sẽ lưu trữ các khóa tin nhắn bị bỏ qua từ chuỗi nhận hiện tại, thực hiện một bước Ratchet DH để thay thế các chuỗi gửi và nhận.

– Sau đó, hàm lưu trữ các khóa tin nhắn bị bỏ qua từ chuỗi nhận hiện tại, thực hiện một bước Ratchet với khóa đối xứng để dẫn xuất khóa tin nhắn liên quan và khóa chuỗi tiếp theo, rồi giải mã tin nhắn.

– Nếu có ngoại lệ xảy ra (Ví dụ: lỗi xác thực tin nhắn), tin nhắn sẽ bị loại bỏ và các thay đổi đối với đối tượng trạng thái sẽ không được lưu lại. Ngược lại, nếu giải mã thành công, nội dung tin nhắn sẽ được chấp nhận và các thay đổi đối với đối tượng trạng thái sẽ được lưu lại.

```
def RatchetDecrypt(state, header, ciphertext, AD):
		plaintext = TrySkippedMessageKeys(state, header, ciphertext, AD)
		if plaintext != None:
				return plaintext
		if header.dh != state.DHr:								 
				SkipMessageKeys(state, header.pn)
				DHRatchet(state, header)
		SkipMessageKeys(state, header.n)						 
		state.CKr, mk = KDF_CK(state.CKr)
		state.Nr += 1
		return DECRYPT(mk, ciphertext, CONCAT(AD, header))
```

_Hàm TrySkippedMessageKeys()_ kiểm tra xem tin nhắn có thể được giải mã bằng một khóa tin nhắn bị bỏ qua trước đó hay không. Nếu có, nó giải mã tin nhắn, xóa khóa tin nhắn đó khỏi bộ nhớ, rồi trả về nội dung tin nhắn.

```
def TrySkippedMessageKeys(state, header, ciphertext, AD):
		if (header.dh, header.n) in state.MKSKIPPED:
				mk = state.MKSKIPPED[header.dh, header.n]
				del state.MKSKIPPED[header.dh, header.n]
				return DECRYPT(mk, ciphertext, CONCAT(AD, header))
		else:
				return None
```

_Hàm SkipMessageKeys()_ xử lý việc bỏ qua các khóa tin nhắn bị mất. Nếu số lượng tin nhắn bị bỏ qua vượt quá _MAX_SKIP,_ một ngoại lệ sẽ được ném ra. Nếu _CKr_ không rỗng, hàm này sẽ tạo và lưu trữ các khóa tin nhắn bị bỏ qua cho đến khi đạt đến giới hạn được chỉ định.

```
def SkipMessageKeys(state, until):
		if state.Nr + MAX_SKIP < until:
				raise Error()
		if state.CKr != None:
				while state.Nr < until:
						state.CKr, mk = KDF_CK(state.CKr)
						state.MKSKIPPED[state.DHr, state.Nr] = mk
						state.Nr += 1
```

_Hàm DHRatchet()_ thực hiện một bước Ratchet Diffie – Hellman khi nhận được một khóa Ratchet mới. Nó cập nhật các biến trạng thái, thực hiện phép tính DH để tạo khóa gốc mới, rồi dẫn xuất các khóa chuỗi mới.

```
def DHRatchet(state, header):
		state.PN = state.Ns													
		state.Ns = 0
		state.Nr = 0
		state.DHr = header.dh
		state.RK, state.CKr = KDF_RK(state.RK, DH(state.DHs, state.DHr))
		state.DHs = GENERATE_DH()
		state.RK, state.CKs = KDF_RK(state.RK, DH(state.DHs, state.DHr))
```

## Double ratchet với mã hóa tiêu đề (header encryption)

### Tổng qan

Tiêu đề của tin nhắn chứa các khóa công khai ratchet và các giá trị (PN, N). Trong một số trường hợp, có thể cần mã hóa tiêu đề để kẻ nghe lén không thể xác định tin nhắn nào thuộc về phiên nào hoặc thứ tự của các tin nhắn trong một phiên.

Với mã hóa tiêu đề, mỗi bên lưu trữ một khóa tiêu đề đối xứng và khóa tiêu đề tiếp theo cho cả hai hướng gửi và nhận. Khóa tiêu đề gửi được sử dụng để mã hóa tiêu đề cho chuỗi gửi hiện tại.

Khi người nhận nhận được một tin nhắn, trước tiên cô ấy phải liên kết tin nhắn với phiên Double Ratchet tương ứng (giả sử cô ấy có các phiên khác nhau với các bên khác nhau). Cách thực hiện điều này nằm ngoài phạm vi của Bài viết này, mặc dù giao thức Pond cung cấp một số ý tưởng.

Sau khi liên kết tin nhắn với một phiên, người nhận cố gắng giải mã tiêu đề bằng khóa tiêu đề nhận, khóa tiêu đề tiếp theo của phiên đó và bất kỳ khóa tiêu đề nào tương ứng với các tin nhắn đã bị bỏ qua. Giải mã thành công bằng khóa tiêu đề tiếp theo cho thấy người nhận phải thực hiện một bước DH ratchet. Trong bước DH ratchet, các khóa tiêu đề tiếp theo thay thế các khóa tiêu đề hiện tại và các khóa tiêu đề tiếp theo mới được tạo ra từ đầu ra bổ sung của root KDF.

Trong sơ đồ dưới đây, Mỹ Anh đã được khởi tạo với khóa công khai ratchet của Đan Nguyên và các bí mật chung cho khóa gốc ban đầu, khóa tiêu đề gửi (HK) và khóa tiêu đề nhận tiếp theo (NHK). Như một phần của quá trình khởi tạo, Mỹ Anh tạo ra cặp khóa ratchet của cô ấy và cập nhật chuỗi gốc để tạo ra khóa gốc mới, khóa chuỗi gửi và khóa tiêu đề gửi tiếp theo (NHK):

<figure><img src="https://banmaixanh.vercel.app/image/article/tim-hieu-signal-protocol-16.jpg" alt="Tìm hiểu về Double Ratchet" height=100% width=100%><figcaption><p>Tìm hiểu về Double Ratchet</p></figcaption></figure>

Khi Mỹ Anh gửi tin nhắn đầu tiên A1, cô ấy mã hóa tiêu đề của nó bằng khóa tiêu đề gửi mà cô ấy đã được khởi tạo:

<figure><img src="https://banmaixanh.vercel.app/image/article/tim-hieu-signal-protocol-17.jpg" alt="Tìm hiểu về Double Ratchet" height=100% width=100%><figcaption><p>Tìm hiểu về Double Ratchet</p></figcaption></figure>

Nếu Mỹ Anh tiếp theo nhận được phản hồi B1 từ Đan Nguyên, tiêu đề của nó sẽ được mã hóa bằng khóa tiêu đề nhận tiếp theo mà cô ấy đã được khởi tạo. Mỹ Anh thực hiện một bước DH ratchet, trong đó các khóa tiêu đề tiếp theo được chuyển thành các khóa tiêu đề hiện tại và các khóa tiêu đề tiếp theo mới được tạo ra:

<figure><img src="https://banmaixanh.vercel.app/image/article/tim-hieu-signal-protocol-18.jpg" alt="Tìm hiểu về Double Ratchet" height=100% width=100%><figcaption><p>Tìm hiểu về Double Ratchet</p></figcaption></figure>

Mỹ Anh tiếp theo gửi một tin nhắn A2, sau đó nhận được một tin nhắn B2 sử dụng khóa tiêu đề nhận hiện tại và chứa cùng một khóa công khai ratchet mà cô ấy đã nhận trong tin nhắn B1. Mỹ Anh sau đó gửi các tin nhắn A3 và A4. Các khóa tiêu đề hiện tại được sử dụng cho tất cả các tin nhắn đã gửi và nhận:

<figure><img src="https://banmaixanh.vercel.app/image/article/tim-hieu-signal-protocol-19.jpg" alt="Tìm hiểu về Double Ratchet" height=100% width=100%><figcaption><p>Tìm hiểu về Double Ratchet</p></figcaption></figure>

Mỹ Anh sau đó nhận được tin nhắn B3 chứa khóa ratchet tiếp theo của Đan Nguyên và có tiêu đề được mã hóa bằng khóa tiêu đề nhận tiếp theo. Giải mã tiêu đề thành công với khóa tiêu đề tiếp theo sẽ kích hoạt một bước DH ratchet. Mỹ Anh sau đó nhận được B4 với cùng khóa ratchet và khóa tiêu đề, sau đó gửi tin nhắn A5. Trạng thái cuối cùng của Mỹ Anh sẽ như sau:

<figure><img src="https://banmaixanh.vercel.app/image/article/tim-hieu-signal-protocol-20.jpg" alt="Tìm hiểu về Double Ratchet" height=100% width=100%><figcaption><p>Tìm hiểu về Double Ratchet</p></figcaption></figure>

### Các hàm bên ngoài

Các hàm bổ sung được yêu cầu để mã hóa tiêu đề:

– HENCRYPT(hk, plaintext): Trả về bản mã hóa AEAD của plaintext với khóa tiêu đề hk. Vì cùng một hk sẽ được sử dụng nhiều lần, nonce AEAD phải là một giá trị không lặp lại có trạng thái hoặc một giá trị ngẫu nhiên không lặp lại được chọn với ít nhất 128 bit entropy.

– HDECRYPT(hk, ciphertext): Trả về bản giải mã xác thực của ciphertext với khóa tiêu đề hk. Nếu xác thực thất bại hoặc nếu khóa tiêu đề hk trống (None), trả về None.

– KDF_RK_HE(rk, dh_out): Trả về một khóa gốc mới, khóa chuỗi và khóa tiêu đề tiếp theo như đầu ra của việc áp dụng KDF được khóa bởi khóa gốc rk vào đầu ra Diffie – Hellman dh_out.

### Biến trạng thái

Các biến trạng thái bổ sung được yêu cầu:

– HKs, HKr: Khóa Tiêu Đề 32-byte cho gửi và nhận.

– NHKs, NHKr: Khóa Tiêu Đề Tiếp Theo 32-byte cho gửi và nhận.

Định nghĩa của biến sau bị thay đổi:

– MKSKIPPED: Từ điển các khóa tin nhắn bị bỏ qua, được lập chỉ mục theo khóa tiêu đề và số tin nhắn. Gây ra ngoại lệ nếu có quá nhiều phần tử được lưu trữ.

### Khởi tạo

Một số bí mật chung bổ sung phải được sử dụng để khởi tạo các khóa tiêu đề:

– Khóa tiêu đề gửi của Mỹ Anh và khóa tiêu đề nhận tiếp theo của Đan Nguyên phải được đặt cùng giá trị, để tin nhắn đầu tiên của Mỹ Anh kích hoạt một bước DH ratchet cho Đan Nguyên.

– Khóa tiêu đề nhận tiếp theo của Mỹ Anh và khóa tiêu đề gửi tiếp theo của Đan Nguyên phải được đặt cùng giá trị, để sau bước DH ratchet đầu tiên của Đan Nguyên, tin nhắn tiếp theo của Đan Nguyên kích hoạt một bước DH ratchet cho Mỹ Anh.

Khi Mỹ Anh và Đan Nguyên đã đồng ý về SK, khóa công khai ratchet của Đan Nguyên và các giá trị bổ sung này, Mỹ Anh gọi `RatchetInitMỹ AnhHE` và Đan Nguyên gọi `RatchetInitĐan NguyênHE`:

```
def RatchetInitMyAnhHE(state, SK, DanNguyen_dh_public_key, shared_hka, shared_nhkb):
		state.DHRs = GENERATE_DH()
		state.DHRr = Đan Nguyên_dh_public_key
		state.RK, state.CKs, state.NHKs = KDF_RK_HE(SK, DH(state.DHRs, state.DHRr))
		state.CKr = None
		state.Ns = 0
		state.Nr = 0
		state.PN = 0
		state.MKSKIPPED = {}
		state.HKs = shared_hka
		state.HKr = None
		state.NHKr = shared_nhkb

def RatchetInitĐan NguyênHE(state, SK, Đan Nguyên_dh_key_pair, shared_hka, shared_nhkb):
		state.DHRs = Đan Nguyên_dh_key_pair
		state.DHRr = None
		state.RK = SK
		state.CKs = None
		state.CKr = None
		state.Ns = 0
		state.Nr = 0
		state.PN = 0
		state.MKSKIPPED = {}
		state.HKs = None
		state.NHKs = shared_nhkb
		state.HKr = None
		state.NHKr = shared_hka
```

### Mã hóa tin nhắn

Hàm RatchetEncryptHE() được gọi để mã hóa tin nhắn (encrypting messages) với mã hóa tiêu đề:

```
def RatchetEncryptHE(state, plaintext, AD):
		state.CKs, mk = KDF_CK(state.CKs)
		header = HEADER(state.DHRs, state.PN, state.Ns)
		enc_header = HENCRYPT(state.HKs, header)
		state.Ns += 1
		return enc_header, ENCRYPT(mk, plaintext, CONCAT(AD, enc_header))
```

### Giải mã tin nhắn

Hàm RatchetDecryptHE() được gọi để giải mã tin nhắn (decrypting messages) với mã hóa tiêu đề:

```
def RatchetDecryptHE(state, enc_header, ciphertext, AD):
		plaintext = TrySkippedMessageKeysHE(state, enc_header, ciphertext, AD)
		if plaintext != None:
				return plaintext
		header, dh_ratchet = DecryptHeader(state, enc_header)
		if dh_ratchet:
				SkipMessageKeysHE(state, header.pn)
				DHRatchetHE(state, header)
		SkipMessageKeysHE(state, header.n)
		state.CKr, mk = KDF_CK(state.CKr)
		state.Nr += 1
		return DECRYPT(mk, ciphertext, CONCAT(AD, enc_header))

def TrySkippedMessageKeysHE(state, enc_header, ciphertext, AD):
		for ((hk, n), mk) in state.MKSKIPPED.items():
				header = HDECRYPT(hk, enc_header)
				if header != None and header.n == n:
						del state.MKSKIPPED[hk, n]
						return DECRYPT(mk, ciphertext, CONCAT(AD, enc_header))
		return None
	
def DecryptHeader(state, enc_header):
		header = HDECRYPT(state.HKr, enc_header)
		if header != None:
				return header, False
		header = HDECRYPT(state.NHKr, enc_header)
		if header != None:
				return header, True
		raise Error()

def SkipMessageKeysHE(state, until):
		if state.Nr + MAX_SKIP < until:
				raise Error()
		if state.CKr != None:
				while state.Nr < until:
						state.CKr, mk = KDF_CK(state.CKr)
						state.MKSKIPPED[state.HKr, state.Nr] = mk
						state.Nr += 1
 
def DHRatchetHE(state, header):
		state.PN = state.Ns
		state.Ns = 0
		state.Nr = 0
		state.HKs = state.NHKs
		state.HKr = state.NHKr
		state.DHRr = header.dh
		state.RK, state.CKr, state.NHKr = KDF_RK_HE(state.RK, DH(state.DHRs, state.DHRr))
		state.DHRs = GENERATE_DH()
		state.RK, state.CKs, state.NHKs = KDF_RK_HE(state.RK, DH(state.DHRs, state.DHRr))
```

## Cân nhắc triển khai

### Tích hợp với X3DH

Thuật toán Double Ratchet có thể được sử dụng kết hợp với giao thức thỏa thuận khóa X3DH. Double Ratchet đóng vai trò như một giao thức _sau X3DH,_ nhận khóa phiên SK do X3DH đàm phán và sử dụng nó làm khóa gốc ban đầu của Double Ratchet.

Các đầu ra sau đây từ X3DH được Double Ratchet sử dụng:

– Đầu ra SK từ X3DH trở thành đầu vào SK cho khởi tạo Double Ratchet.

– Đầu ra AD từ X3DH trở thành đầu vào AD cho mã hóa và giải mã Double Ratchet.

– Khóa tiền ký của Đan Nguyên từ X3DH (SPKB) trở thành khóa công khai ratchet ban đầu của Đan Nguyên (và cặp khóa tương ứng) để khởi tạo Double Ratchet.

– Bất kỳ tin nhắn Double Ratchet nào được mã hóa bằng chuỗi gửi ban đầu của Mỹ Anh có thể đóng vai trò như một _mã hóa ban đầu_ cho X3DH. Để xử lý khả năng mất hoặc nhận sai thứ tự tin nhắn, một mô hình được khuyến nghị là Mỹ Anh lặp lại gửi cùng một tin nhắn X3DH ban đầu được ghép vào tất cả tin nhắn Double Ratchet của cô ấy cho đến khi nhận được phản hồi Double Ratchet đầu tiên từ Đan Nguyên.

### Các thuật toán mật mã khuyến nghị

Các lựa chọn sau được khuyến nghị để triển khai các hàm mật mã:

– `GENERATE_DH()`: Được khuyến nghị để tạo một cặp khóa dựa trên đường cong elliptic Curve25519 hoặc Curve448.

– `DH(dh_pair, dh_pub)`: Được khuyến nghị để trả về đầu ra từ hàm X25519 hoặc X448 như được định nghĩa trong. Không cần kiểm tra các khóa công khai không hợp lệ.

– `KDF_RK(rk, dh_out)`: Được khuyến nghị triển khai bằng HKDF với SHA256 hoặc SHA512, sử dụng rk làm muối HKDF, dh_out làm dữ liệu đầu vào khóa HKDF và một chuỗi byte cụ thể cho ứng dụng làm thông tin HKDF.

– `KDF_CK(ck)`: HMAC với SHA256 hoặc SHA512 được khuyến nghị, sử dụng ck làm khóa HMAC và sử dụng các hằng số riêng biệt làm đầu vào (Ví dụ: một byte đơn 0x01 làm đầu vào để tạo khóa tin nhắn, và một byte đơn 0x02 làm đầu vào để tạo khóa chuỗi tiếp theo).

– `ENCRYPT(mk, plaintext, associated_data)`: Được khuyến nghị triển khai với một sơ đồ mã hóa AEAD dựa trên SIV hoặc sự kết hợp của CBC với HMAC. Những sơ đồ này cung cấp một số khả năng chống lạm dụng trong trường hợp một khóa vô tình được sử dụng nhiều lần.

Một khuyến nghị cụ thể dựa trên CBC và HMAC như sau:

– HKDF được sử dụng với SHA256 hoặc SHA512 để tạo 80 byte đầu ra. Muối HKDF được đặt thành một chuỗi byte toàn số không có độ dài bằng với đầu ra của băm. Dữ liệu đầu vào HKDF được đặt thành mk. Thông tin HKDF được đặt thành một chuỗi byte cụ thể của ứng dụng, khác biệt với các cách sử dụng HKDF khác trong ứng dụng.

– Đầu ra HKDF được chia thành khóa mã hóa 32 byte, khóa xác thực 32 byte và IV 16 byte.

– Văn bản gốc được mã hóa bằng AES-256 ở chế độ CBC với đệm PKCS#7, sử dụng khóa mã hóa và IV từ bước trước.

– HMAC được tính toán bằng khóa xác thực và cùng một hàm băm như trên. Đầu vào HMAC là associated_data được ghép vào bản mã. Đầu ra HMAC được ghép vào bản mã.

## Các vấn đề bảo mật

### Xóa an toàn

Thuật toán Double Ratchet được thiết kế để cung cấp bảo mật chống lại kẻ tấn công ghi lại các tin nhắn được mã hóa và sau đó xâm nhập vào thiết bị của người gửi hoặc người nhận vào một thời điểm sau đó.

Tuy nhiên, bảo mật này có thể bị phá vỡ nếu văn bản gốc đã bị xóa hoặc các khóa có thể được kẻ tấn công khôi phục bằng cách truy cập cấp thấp vào thiết bị bị xâm nhập.

Việc khôi phục dữ liệu đã xóa từ phương tiện lưu trữ là một chủ đề phức tạp, nằm ngoài phạm vi của Bài viết này.

### Khôi phục sau khi bị xâm nhập (Recovery from compromise)

Bộ khuếch đại DH được thiết kế để khôi phục bảo mật trước một kẻ nghe lén thụ động, kẻ quan sát các tin nhắn được mã hóa sau khi đã xâm nhập vào một hoặc cả hai bên của phiên giao tiếp.

Mặc dù có cơ chế giảm thiểu này, việc bị xâm nhập khóa bí mật hoặc tính toàn vẹn của thiết bị sẽ có tác động nghiêm trọng đến bảo mật của các giao tiếp trong tương lai.

Ví dụ:

– Kẻ tấn công có thể sử dụng các khóa bị xâm nhập để mạo danh bên bị xâm nhập (Ví dụ: sử dụng khóa riêng tư của danh tính bên bị xâm nhập với X3DH để tạo phiên mới).

– Kẻ tấn công có thể thay thế khóa bộ khuếch đại của mình thông qua một cuộc tấn công trung gian chủ động liên tục để duy trì việc nghe lén trên phiên giao tiếp bị xâm nhập.

– Kẻ tấn công có thể sửa đổi trình tạo số ngẫu nhiên (RNG) của bên bị xâm nhập để các khóa riêng tư của bộ khuếch đại trong tương lai trở nên dự đoán được.

Nếu một bên nghi ngờ khóa hoặc thiết bị của mình đã bị xâm nhập, họ phải thay thế chúng ngay lập tức.

### Phân tích mật mã và khóa công khai của bộ khuếch đại (Cryptanalysis and ratchet public keys)

Vì tất cả các tính toán bộ khuếch đại DH đều được trộn vào khóa gốc, một kẻ tấn công có thể giải mã một phiên bằng phân tích mật mã thụ động có thể mất khả năng này nếu họ không quan sát được một số khóa công khai của bộ khuếch đại.

Tuy nhiên, đây không phải là một biện pháp đối phó đáng tin cậy chống lại phân tích mật mã.

Nếu có bất kỳ điểm yếu nào được phát hiện trong bất kỳ thuật toán mật mã nào mà một phiên giao tiếp dựa vào, thì phiên đó nên bị hủy bỏ và thay thế bằng một phiên mới sử dụng mật mã mạnh.

### Xóa các khóa tin nhắn bị bỏ qua (Deletion of skipped message keys)

Việc lưu trữ các khóa tin nhắn bị bỏ qua có thể gây ra một số rủi ro:

– Một kẻ gửi độc hại có thể khiến người nhận lưu trữ một số lượng lớn các khóa tin nhắn bị bỏ qua, có thể dẫn đến tấn công từ chối dịch vụ do tiêu tốn dung lượng lưu trữ.

– Các tin nhắn bị mất có thể đã được kẻ tấn công quan sát (và ghi lại), ngay cả khi chúng không đến được người nhận.

– Kẻ tấn công có thể xâm nhập vào người nhận dự định tại một thời điểm sau đó để truy xuất các khóa tin nhắn bị bỏ qua.

Để giảm thiểu rủi ro đầu tiên, các bên nên đặt giới hạn hợp lý cho mỗi phiên về số lượng khóa tin nhắn bị bỏ qua sẽ được lưu trữ (Ví dụ: 1000).

Để giảm thiểu rủi ro thứ hai, các bên nên xóa các khóa tin nhắn bị bỏ qua sau một khoảng thời gian thích hợp.

Việc xóa có thể được kích hoạt bởi bộ đếm thời gian hoặc bằng cách đếm số lượng sự kiện (tin nhắn nhận được, bước bộ khuếch đại DH…).

### Hoãn việc tạo khóa bộ khuếch đại mới (Deferring new ratchet key generation)

Trong mỗi bước bộ khuếch đại DH, một cặp khóa bộ khuếch đại mới và chuỗi gửi tin nhắn được tạo ra.

Vì chuỗi gửi tin nhắn chưa cần sử dụng ngay lập tức, các bước này có thể bị hoãn lại cho đến khi bên gửi chuẩn bị gửi một tin nhắn mới.

Điều này có thể giúp tăng nhẹ mức độ bảo mật bằng cách rút ngắn thời gian tồn tại của các khóa bộ khuếch đại, nhưng sẽ làm tăng độ phức tạp của hệ thống.

### Cắt bớt thẻ xác thực (Truncating authentication tags)

Nếu hàm ENCRYPT được triển khai bằng CBC và HMAC, thì việc cắt bớt đầu ra cuối cùng của HMAC xuống 128 bit để giảm kích thước tin nhắn là chấp nhận được.

Việc cắt bớt nhiều hơn có thể được chấp nhận nhưng cần phân tích cẩn thận.

Trong mọi trường hợp, HMAC cuối cùng không nên bị cắt xuống dưới 64 bit.

Nếu hàm ENCRYPT được triển khai theo cách khác, thì việc cắt bớt có thể yêu cầu phân tích phức tạp hơn và không được khuyến nghị.

### Nhận dạng dấu vết triển khai (Implementation fingerprinting)

Nếu giao thức này được sử dụng trong môi trường có các bên ẩn danh, cần đảm bảo rằng các triển khai hoạt động giống nhau trong mọi trường hợp.

Trong bối cảnh ẩn danh, các triển khai được khuyến nghị tuân theo chính xác các thuật toán.

Ngoài ra, các triển khai cũng nên sử dụng các giới hạn giống nhau cho số lượng khóa tin nhắn bị bỏ qua được lưu trữ và chính sách xóa khóa tin nhắn bị bỏ qua giống nhau.

Chính sách xóa nên dựa trên các sự kiện có tính chất xác định (Ví dụ: tin nhắn nhận được) thay vì dựa trên thời gian.

<figure><img src="https://banmaixanh.vercel.app/image/cover/001-071.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>