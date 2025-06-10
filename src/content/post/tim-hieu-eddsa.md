---
pubDatetime: 2020-10-03T10:10:00Z
title: Tìm hiểu về thuật toán EdDSA – Tạo và xác minh chữ ký tương thích
description: Thuật toán EdDSA là chữ ký số tiên tiến sử dụng các đường cong Edwards, được thiết kế nhằm cung cấp hiệu suất cao và tính bảo mật mạnh mẽ.
image: https://banmaixanh.vercel.app/image/cover/001-082.jpg
tags:
  - developer
  - bao mat
  - mat ma hoc
  - signal protocol
  - ma hoa thong tin
  - bao mat thong tin
  - double ratchet
  - kdf
  - eddsa
  - xed25519
  - xed448
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

_EdDSA là thuật toán chữ ký số tiên tiến sử dụng các đường cong Edwards, được thiết kế nhằm cung cấp hiệu suất cao và tính bảo mật mạnh mẽ._

# Giới thiệu

Bài viết này mô tả cách tạo và xác minh chữ ký tương thích với [EdDSA](https://nhavantuonglai.com/article/tim-hieu-eddsa) bằng cách sử dụng định dạng khóa công khai và khóa riêng ban đầu được xác định cho các hàm Diffie – Hellman đường cong elliptic X25519 và X448. Signal gọi đây là sơ đồ chữ ký _XEdDSA_ (hoặc _XEd25519_ hoặc _XEd448_ đối với các đường cong cụ thể).

EdDSA là thuật toán chữ ký số tiên tiến sử dụng các đường cong Edwards, được thiết kế nhằm cung cấp hiệu suất cao và tính bảo mật mạnh mẽ. So sánh với các thuật toán chữ ký truyền thống như RSA, EdDSA mang đến nhiều lợi thế đáng kể như tốc độ ký và xác minh nhanh chóng, kích thước chữ ký nhỏ gọn và khả năng chống lại các cuộc tấn công bên kênh. Nguyên lý hoạt động của thuật toán dựa trên việc sử dụng các đường cong elliptic đặc biệt (đường cong Edwards), cho phép tạo ra các chữ ký số an toàn và hiệu quả.

Ứng dụng của EdDSA rộng rãi trong các hệ thống an ninh mạng, giao thức blockchain, hệ thống thanh toán điện tử và các ứng dụng yêu cầu xác thực cao. Các nền tảng như Bitcoin, Ethereum và nhiều hệ thống mã hóa khác đã áp dụng EdDSA để tăng cường tính bảo mật và hiệu quả của quá trình xác thực điện tử. Ưu điểm nổi bật của thuật toán là khả năng tạo ra các chữ ký số nhanh chóng, an toàn và chiếm dụng ít tài nguyên tính toán.

XEdDSA cho phép sử dụng một định dạng cặp khóa duy nhất cho cả Diffie – Hellman đường cong elliptic và chữ ký. Trong một số trường hợp, nó cho phép sử dụng cùng một cặp khóa cho cả hai thuật toán.

Bài viết này cũng mô tả _VXEdDSA,_ một phần mở rộng của XEdDSA giúp nó trở thành một hàm ngẫu nhiên có thể xác minh được (_verifiable random function_ – VRF, như được định nghĩa trong và). Việc xác minh thành công một chữ ký VXEdDSA sẽ trả về một đầu ra VRF được đảm bảo là duy nhất cho thông điệp và khóa công khai. Đầu ra VRF cho một thông điệp và khóa công khai nhất định không thể phân biệt được với một giá trị ngẫu nhiên đối với bất kỳ ai chưa từng thấy chữ ký VXEdDSA của thông điệp và khóa đó.

## Kiến thức cơ bản

### Ký hiệu

Phép nhân hai số nguyên _a_ và _b_ theo modulo số nguyên tố _p_ được ký hiệu là _ab (mod p),_ hoặc _a b (mod p)._ Phép chia được ký hiệu là _a/b (mod p)_ và được tính bằng công thức _ab⁻¹ (mod p)._

Hàm _inv(a) (mod p)_ được định nghĩa để trả về _a⁻¹ (mod p)_ khi _a_ khác 0, và trả về 0 khi _a_ bằng 0. Điều này có thể được tính bằng công thức _inv(a) = a^(p – 2) (mod p),_ theo định lý Fermat.

Hàm _ceil_ và _floor_ lần lượt làm tròn lên hoặc làm tròn xuống đến số nguyên gần nhất.

Phép cộng và trừ giữa hai điểm _A_ và _B_ trên đường cong elliptic được ký hiệu là _A + B_ và _A – B._ Phép nhân vô hướng (_scalar multiplication_) của một số nguyên _a_ với một điểm đường cong elliptic _B_ sẽ tạo ra một điểm mới _C = aB._

Các biến số nguyên được viết thường (_x, y_). Các điểm và biến khác được viết hoa (_P, Q_). Các hằng số nguyên được viết thường ngoại trừ hằng số _A_ của đường cong Montgomery, theo quy ước.

Chuỗi byte được viết in đậm (_x, P_). Một số nguyên in đậm hoặc một điểm đường cong elliptic biểu thị một chuỗi byte có độ dài cố định mã hóa giá trị của nó.

Phép nối chuỗi byte _x_ và _P_ được ký hiệu là _x || P._

Việc kiểm tra hai số nguyên hoặc hai điểm có bằng nhau không được thực hiện bằng biểu thức _a == b._ Việc kiểm tra hai chuỗi byte có bằng nhau không được thực hiện bằng _bytes_equal(X, Y)._

### Thông số đường cong Elliptic

Một đường cong elliptic được sử dụng với XEdDSA hoặc VXEdDSA có các thông số sau:

– B: Điểm cơ sở (_Base point_).

– I: Điểm đơn vị (_Identity point_).

– p: Số nguyên tố trường (_Field prime_).

– q: Bậc của điểm cơ sở (số nguyên tố; _q < p;_ _qB = I_).

– c: Hệ số (_Cofactor_).

– d: Hằng số đường cong Edwards xoắn (_Twisted Edwards curve constant_).

– A: Hằng số đường cong Montgomery (_Montgomery curve constant_).

– n: Số nguyên không phải là bình phương theo modulo _p_.

– p: ceil(log₂(p)).

– q: ceil(log₂(q)).

– b: 8 (ceil((|p| + 1)/8)) (= độ dài bit cho điểm hoặc số nguyên được mã hóa).

Một số nguyên theo modulo _p_ được gọi là _phần tử trường_ (_field element_). Một số nguyên theo modulo _q_ được gọi là _số vô hướng_ (_scalar_).

Một đường cong elliptic là một tập hợp các cặp phần tử trường. Mỗi cặp là một _điểm,_ các phần tử trường trong một điểm là _tọa độ,_ và tọa độ của mỗi điểm phải thỏa mãn một phương trình xác định đường cong.

Hàm _on_curve(P)_ trả về _true_ nếu điểm _P_ thỏa mãn phương trình đường cong.

Đường cong elliptic cũng định nghĩa một phép cộng giữa các điểm và một phép lấy đối điểm (_negation_). Cùng với điểm đơn vị, các phép toán này tạo thành một cấu trúc nhóm trên các điểm của đường cong. Cộng một điểm _P_ với chính nó _k_ lần (_P + P + P + …_) chính là phép nhân vô hướng với _k,_ ký hiệu là _kP._

XEdDSA và VXEdDSA được định nghĩa trên các đường cong Edwards xoắn (_twisted Edwards curves_), trong đó các điểm được ký hiệu là _(x, y)._ Một đường cong Edwards xoắn tương đương song hữu tỷ với một đường cong Montgomery (_Montgomery curve_), trong đó các điểm được ký hiệu là _(u, v)._

Signal chủ yếu làm việc với đường cong Edwards xoắn, vì vậy khi đề cập đến điểm cơ sở _B_ và điểm đơn vị _I,_ Signal đang nói về các điểm trên đường cong Edwards xoắn.

Hàm _u_to_y_ áp dụng một phép biến đổi song hữu tỷ (_birational map_) cụ thể cho đường cong để chuyển đổi tọa độ _u_ của một điểm trên đường cong Montgomery thành tọa độ _y_ của điểm tương đương trên đường cong Edwards xoắn.

### Chuyển đổi đường cong Elliptic

Phép tính Diffie – Hellman trên đường cong elliptic thường được thực hiện bằng phương pháp _Montgomery ladder._ Cách tiếp cận này cung cấp một phép tính đơn giản và hiệu quả, đồng thời có khả năng chống lại các kênh rò rỉ thời gian một cách tự nhiên.

_Montgomery ladder_ cũng cho phép khóa công khai của mỗi bên là một tọa độ _u_ trên đường cong Montgomery. Việc sử dụng một tọa độ duy nhất thay vì toàn bộ điểm giúp giảm kích thước khóa công khai mà không cần đến quá trình giải mã điểm.

Tuy nhiên, chữ ký EdDSA được định nghĩa trên các đường cong Edwards xoắn, trong đó một khóa công khai là một điểm nén bao gồm tọa độ _y_ trên đường cong Edwards xoắn và một bit dấu _s_ có giá trị 0 hoặc 1. Tọa độ _y_ trên đường cong Edwards xoắn và bit dấu cung cấp một biểu diễn thay thế của một điểm trên đường cong Edwards xoắn, đồng thời xác định tọa độ _x_ theo quy tắc trong hoặc.

Chuyển đổi từ một tọa độ _u_ trên đường cong Montgomery sang một điểm _P_ trên đường cong Edwards xoắn có thể được thực hiện bằng hàm _convert_mont_ dưới đây. Hàm này trước tiên loại bỏ các bit cao dư thừa khỏi _u,_ đây là một thực hành tiêu chuẩn đối với các khóa công khai Montgomery Curve25519 và được quy định trong. Sau đó, hàm áp dụng phép biến đổi song hữu tỷ đặc trưng của đường cong để tính toán tọa độ _y_ trên đường cong Edwards xoắn, cuối cùng chọn bit dấu là 0.

```
convert_mont(u):
	umasked = u (mod 2|p|)
	P.y = u_to_y(umasked)
	P.s = 0
return P
```

Do _convert_mont_ không có giá trị _v_ của đường cong Montgomery, nên nó không thể phân biệt được hai khả năng khác nhau của bit dấu trên đường cong Edwards xoắn. Việc ép bit dấu về 0 là một ý tưởng từ Jivsov.

Để làm cho khóa riêng tương thích với phép chuyển đổi này, Signal định nghĩa khóa riêng trên đường cong Edwards xoắn là một số vô hướng _a,_ trong đó khóa công khai trên đường cong Edwards xoắn _A = aB_ có bit dấu bằng 0 (nhớ rằng _B_ là điểm cơ sở trên đường cong Edwards xoắn). Đối với khóa riêng trên đường cong Montgomery, Signal cho phép nó là bất kỳ số vô hướng nào.

Chuyển đổi một khóa riêng _k_ trên đường cong Montgomery thành một khóa công khai và khóa riêng trên đường cong Edwards xoắn (_A, a_) có thể được thực hiện bằng hàm _calculate_key_pair_ (ở đây _A_ là khóa công khai, không phải hằng số của đường cong Montgomery). Hàm này nhân khóa riêng Montgomery _k_ với điểm cơ sở _B_ trên đường cong Edwards xoắn, sau đó điều chỉnh khóa riêng nếu cần để đảm bảo bit dấu bằng 0, theo phương pháp trong.

```
calculate_key_pair(k):
	E = kB
	A.y = E.y
	A.s = 0
	if E.s == 1:
	a = – k (mod q)
	else:
		a = k (mod q)
	return A, a
```

#### Chuỗi byte

Một số nguyên được viết in đậm biểu thị một chuỗi byte dài _b_ bit, mã hóa số nguyên theo dạng _little – endian._ Một điểm trên đường cong elliptic được viết in đậm (Ví dụ _P_) mã hóa tọa độ _P.y_ dưới dạng số nguyên theo _little – endian_ với độ dài _b – 1_ bit, sau đó thêm một bit để lưu trữ giá trị _P.s._

### Hàm băm

XEdDSA và VXEdDSA yêu cầu một hàm băm mật mã. Hàm băm mặc định là SHA512.

Signal định nghĩa _hash_ là một hàm áp dụng thuật toán băm mật mã lên một chuỗi byte đầu vào, và trả về một số nguyên là kết quả của hàm băm được phân tích dưới dạng _little – endian._

Dựa vào _hash_ và các hằng số của đường cong _p_ và _b,_ Signal định nghĩa một họ các hàm băm được đánh số bởi các số nguyên không âm _i,_ sao cho _2|p| – 1 – i > p._

```
hashi(X):
	return hash(2b – 1 – i || X)
```

Vì vậy, _hash0_ băm một chuỗi gồm _b/8_ byte có giá trị _0xFF_ trước chuỗi byte đầu vào _X,_ _hash1_ thay đổi byte đầu tiên thành _0xFE,_ _hash2_ thay đổi byte đầu tiên thành _0xFD,_…

Các hàm _hashi_ khác nhau sẽ được sử dụng cho các mục đích khác nhau nhằm cung cấp khả năng phân tách miền mật mã. Lưu ý rằng _hashi_ sẽ không bao giờ gọi hàm _hash_ với _b_ bit đầu tiên mã hóa một số vô hướng hợp lệ hoặc một điểm trên đường cong elliptic, vì _|p|_ bit đầu tiên mã hóa một số nguyên lớn hơn _p._ Ngoài ra, _hash0_ được dành cho các đặc tả khác và không được sử dụng trong Bài viết này.

### Hàm băm thành điểm với Elligator 2

VXEdDSA yêu cầu ánh xạ một thông điệp đầu vào thành một điểm trên đường cong elliptic, được thực hiện bằng ánh xạ _Elligator 2._

Mô tả trong ngắn gọn và sử dụng ký hiệu khác, vì vậy Signal sẽ tóm tắt phương pháp _Elligator 2._ Phương trình đường cong Montgomery đối với các điểm _(u, v)_ là:

```
(u, v) is v2 = u(u2 + Au + 1) (mod p)
```

trong đó _A_ là một hằng số cụ thể của đường cong.

_Elligator 2_ ánh xạ một số nguyên _r_ thành một giá trị _u,_ sao cho _u(u² + Au + 1)_ có căn bậc hai _v_ theo modulo _p._

Hàm _elligator2_ thực hiện ánh xạ từ một số nguyên _r_ sang một số nguyên _u._

```
elligator2(r):
	u1 = – A inv(1 + nr²) (mod p)
	w1 = u1(u1² + Au1 + 1) (mod p)
	if w1^(p – 1)/2 == – 1 (mod p):
		u2 = – A – u1 (mod p)
		return u2
	return u1
```

(Hàm _inv_ được sử dụng một cách an toàn, vì nếu gọi _inv(0)_ khi _r² = – 1/n,_ thì nó chỉ ánh xạ _r_ đến _u = 0,_ là một tọa độ _u_ hợp lệ trên đường cong Montgomery.)

Để ánh xạ một chuỗi byte thành một điểm trên đường cong Edwards, Signal băm chuỗi byte đó và phân tích đầu ra của hàm băm để lấy một phần tử trường _r_ và một bit dấu _s._

_Hàm Elligator 2_ chuyển đổi _r_ thành một tọa độ _u_ trên đường cong Montgomery. _Phép biến đổi song hữu tỷ_ chuyển đổi tọa độ _u_ trên đường cong Montgomery thành một điểm trên đường cong Edwards.

Cuối cùng, Signal nhân điểm trên đường cong Edwards với hệ số _c_ để đảm bảo rằng điểm đó thuộc về tập con bậc _q_ được tạo ra bởi điểm cơ sở _B._

Hàm _hash to point_ thực hiện các bước này.

```
hash_to_point(X):
	h = hash2(X)
	r = h (mod 2|p|)
	s = floor((h mod 2b) / 2b – 1)
	u = elligator2(r)
	P.y = u_to_y(u)
	P.s = s
	return cP
```

## XEdDSA

Thuật toán ký XEdDSA yêu cầu các đầu vào sau:

| Tên | Định nghĩa |
|------|------------|
| k | Khóa riêng Montgomery (số nguyên theo modulo _q_). |
| M | Thông điệp cần ký (chuỗi byte). |
| Z | 64 byte dữ liệu ngẫu nhiên bảo mật (chuỗi byte). |

Đầu ra của thuật toán là một chữ ký _(R || s),_ một chuỗi byte có độ dài _2b_ bit, trong đó _R_ mã hóa một điểm và _s_ mã hóa một số nguyên theo modulo _q._

Thuật toán xác minh XEdDSA yêu cầu các đầu vào sau:


– u: Khóa công khai Montgomery (chuỗi byte có độ dài _b_ bit).

– M: Thông điệp cần xác minh (chuỗi byte).

– (R || s): Chữ ký cần xác minh (chuỗi byte có độ dài _2b_ bit).

Nếu xác minh XEdDSA thành công, thuật toán trả về _true;_ ngược lại, thuật toán trả về _false._ Dưới đây là mã giả cho các hàm _xeddsa_sign_ và _xeddsa_verify._

```
xeddsa_sign(k, M, Z):
	A, a = calculate_key_pair(k)
	r = hash1(a || M || Z) (mod q)
	R = rB
	h = hash(R || A || M) (mod q)
	s = r + ha (mod q)
	return R || s
```

và:

```
xeddsa_verify(u, M, (R || s)):
	if u >= p or R.y >= 2|p| or s >= 2|q|:
		return false
	A = convert_mont(u)
	if not on_curve(A):
		return false
	h = hash(R || A || M) (mod q)
	Rcheck = sB – hA
	if bytes_equal(R, Rcheck):
		return true
	return false
```

## VXEdDSA

Thuật toán ký VXEdDSA có các đầu vào giống như XEdDSA. Đầu ra gồm một cặp giá trị.

Thứ nhất, chữ ký _(V || h || s),_ một chuỗi byte có độ dài _3b_ bit, trong đó _V_ mã hóa một điểm và _h_ cùng _s_ mã hóa các số nguyên theo modulo _q._

Thứ hai, một chuỗi byte đầu ra VRF _v_ có độ dài _b_ bit, được tạo bằng cách nhân đầu ra _V_ với hệ số _c._

Thuật toán xác minh VXEdDSA có các đầu vào giống như XEdDSA, ngoại trừ chữ ký VXEdDSA thay vì chữ ký XEdDSA. Nếu xác minh VXEdDSA thành công, thuật toán trả về một chuỗi byte đầu ra VRF _v_ có độ dài _b_ bit; ngược lại, thuật toán trả về _false._

Dưới đây là mã giả cho các hàm _vxeddsa_sign_ và _vxeddsa_verify._

```
vxeddsa_sign(k, M, Z):
	A, a = calculate_key_pair(k)
	Bv = hash_to_point(A || M)
	V = aBv
	r = hash3(a || V || Z) (mod q)
	R = rB
	Rv = rBv
	h = hash4(A || V || R || Rv || M) (mod q)
	s = r + ha (mod q)
	v = hash5(cV) (mod 2b)
	return (V || h || s), v
```

và:

```
vxeddsa_verify(u, M, (V || h || s)):
	if u >= p or V.y >= 2|p| or h >= 2|q| or s >= 2|q|:
		return false
	A = convert_mont(u)
	Bv = hash_to_point(A || M)
	if not on_curve(A) or not on_curve(V):
		return false
	if cA == I or cV == I or Bv == I:
		return false
	R = sB – hA
	Rv = sBv – hV
	hcheck = hash4(A || V || R || Rv || M) (mod q)
	if bytes_equal(h, hcheck):
		v = hash5(cV) (mod 2b)
		return v
	return false
```

## Curve25519

Đường cong elliptic Curve25519 được quy định trong có thể được sử dụng với XEdDSA và VXEdDSA, tạo thành XEd25519 và VXEd25519. Đường cong này xác định các tham số sau:

– B: convert_mont(9).

– I: (x=0, y=1).

– p: 2²⁵⁵ – 19.

– q: 2²⁵² + 27742317777372353535851937790883648493.

– c: 8.

– d:  – 121665 / 121666 (mod p).

– A:  486662.

– n:  2.

– |p|:  255.

– |q|:  253.

– b: 256.

Phương trình đường cong Edwards xoắn là:

```
– x² + y² = 1 + dx²y²
```

Hàm _u to y_ thực hiện phép biến đổi song hữu tỷ từ bằng cách tính toán:

```
y = (u – 1) * inv(u + 1) (mod p)
```

Chữ ký XEd25519 là chữ ký Ed25519 hợp lệ và ngược lại, với điều kiện khóa công khai được chuyển đổi bằng phép biến đổi song hữu tỷ.

Ed25519 cho phép các triển khai có một số linh hoạt trong việc chấp nhận hoặc từ chối một số chữ ký không hợp lệ nhất định (Ví dụ: chữ ký với _s_ chưa được giảm, hoặc kiểm tra phương trình xác minh có hoặc không nhân hệ số _c_).

XEdDSA quy định chính xác quy trình xác minh, vì vậy có thể có sự khác biệt với một số triển khai Ed25519 trong việc chấp nhận hoặc từ chối các chữ ký như vậy (tương tự như cách một số triển khai Ed25519 có thể khác nhau).

Các bước xác minh cụ thể được chọn trong XEdDSA bao gồm việc từ chối _s_ nếu nó có các bit dư thừa nhưng không yêu cầu nó phải được giảm hoàn toàn, và kiểm tra xác minh mà không cần nhân hệ số _c._

Những lựa chọn này phù hợp với mã Ed25519 hiện có và dẫn đến các triển khai đơn giản hơn.

## Curve448

Đường cong elliptic Curve448 được quy định trong có thể được sử dụng với XEdDSA và VXEdDSA, tạo thành XEd448 và VXEd448. Đường cong này xác định các tham số sau:

– B: convert_mont(5).

– I: (x=0, y=1).

– p: 2⁴⁴⁸ – 2²²⁴ – 1.

– q: 2⁴⁴⁶ – 13818066809895115352007386748515426880336692474882178609894547503885.

– c: 4.

– d: 39082 / 39081 (mod p).

– A: 156326.

– n: – 1.

– |p: 448.

– |q: 446.

– b: 456.

Phương trình đường cong Edwards xoắn là:

```
x² + y² = 1 + dx²y²
```

Hàm _u to y_ thực hiện phép biến đổi song hữu tỷ từ bằng cách tính toán:

```
y = (1 + u) * inv(1 – u) (mod p)
```

XEd448 khác với EdDSA trong việc lựa chọn hàm băm. XEd448 sử dụng _SHA512,_ trong khi khuyến nghị sử dụng hàm băm có độ dài _912_ bit (_912 = 2b_). Nếu hàm băm là bảo mật, thì các đầu ra có độ dài lớn hơn _512_ bit không làm tăng mức độ bảo mật với _Curve448,_ vì vậy XEd448 chọn phương pháp đơn giản hơn.

XEd448 có thể khác với một số phương án triển khai EdDSA khác được đề xuất trong, những phương án này sử dụng đường cong _4 – isogenous_ từ thay vì đường cong _birationally equivalent._ Việc ánh xạ từ dạng Montgomery của _Curve448_ sang đường cong _isogenous_ phức tạp hơn.

## Các yếu tố ảnh hưởng đến hiệu suất

Phần này chứa danh sách chưa đầy đủ về các yếu tố ảnh hưởng đến hiệu suất.

Ký nhanh hơn: Việc gọi _calculate_key_pair_ cho mỗi chữ ký XEdDSA làm tăng gấp đôi thời gian ký so với EdDSA, vì _calculate_key_pair_ thực hiện thêm một phép nhân vô hướng _E = kB._ Ký VXEdDSA tốn kém hơn, vì vậy tác động này giảm tỷ lệ tương ứng. Để tránh chi phí này, bên ký có thể lưu vào bộ nhớ đệm điểm _E_ (không phải bí mật).

Tiền băm: Ngoại trừ xác minh XEdDSA, các thuật toán ký và xác minh đều băm thông điệp đầu vào hai lần. Đối với các thông điệp lớn, điều này có thể tốn kém, đồng thời yêu cầu bộ đệm lớn hoặc API phức tạp hơn.

Để ngăn chặn điều này, các API có thể quy định một kích thước thông điệp tối đa mà tất cả các triển khai phải có khả năng lưu trữ trong bộ nhớ. Các nhà thiết kế giao thức có thể quy định _tiền băm_ các trường thông điệp để phù hợp với giới hạn này. Họ được khuyến khích sử dụng tiền băm một cách có chọn lọc để hạn chế tác động tiềm tàng từ các cuộc tấn công va chạm, ví dụ: tiền băm các tệp đính kèm của một thông điệp nhưng không tiền băm tiêu đề hoặc nội dung chính của thông điệp.

## Các yếu tố ảnh hưởng đến bảo mật

Phần này chứa danh sách chưa đầy đủ về các yếu tố ảnh hưởng đến bảo mật.

Các đầu vào bí mật ngẫu nhiên: Chữ ký XEdDSA và VXEdDSA là chữ ký ngẫu nhiên, không phải chữ ký xác định theo nghĩa của hoặc. Người gọi phải cung cấp một giá trị bí mật ngẫu nhiên 64 byte mới mỗi khi gọi hàm ký.

Chữ ký xác định được thiết kế để ngăn chặn việc tái sử dụng cùng một _nonce_ (_r_) với các thông điệp khác nhau, vì điều này có thể làm lộ khóa riêng _a._ Xét hai chữ ký XEdDSA _(R || s₁)_ và _(R || s₂)_ với:

```
s₁ = r + h₁a \mod q
s₂ = r + h₂a \mod q
```

Khóa riêng _a_ có thể được tính bằng:

```
a = \frac{s₁ – s₂}{h₁ – h₂} \mod q
```

Một sơ đồ ký xác định sẽ băm _M_ cùng với một bí mật dài hạn để tính _r,_ thay vì lấy _r_ từ một bộ tạo số ngẫu nhiên. Vì _M_ cũng được băm để tính _h,_ xác suất các giá trị _h_ khác nhau nhận cùng một _r_ là rất nhỏ. Tuy nhiên, nếu cùng một thông điệp được ký nhiều lần, một lỗi trong quá trình tính toán _h_ có thể khiến điều này xảy ra (theo quan sát của _Benedikt Schmidt_). Ngoài ra, việc sử dụng lại _r_ có thể giúp kẻ tấn công thu thập thông tin về _r_ thông qua phân tích kênh bên.

Vì vậy, XEdDSA và VXEdDSA duy trì ý tưởng tính _r_ bằng cách băm một khóa bí mật dài hạn và thông điệp, nhưng bổ sung thêm một giá trị ngẫu nhiên vào tính toán để tăng độ bền vững.

Thời gian thực thi cố định: Các thuật toán ký không được thực hiện các truy cập bộ nhớ khác nhau hoặc mất thời gian khác nhau tùy thuộc vào thông tin bí mật. Điều này thường được đảm bảo bằng cách triển khai _thời gian thực thi cố định,_ trong đó các lệnh và truy cập bộ nhớ được thực thi theo một trình tự cố định, bất kể khóa bí mật hoặc nội dung thông điệp.

Cần đặc biệt chú ý đến hàm _calculate_key_pair_ do việc sử dụng câu lệnh rẽ nhánh có điều kiện. Hàm _hash_to_point_ cũng sử dụng rẽ nhánh có điều kiện (trong _elligator2_) và nên được thực hiện theo thời gian thực thi cố định, mặc dù nó chỉ xử lý thông điệp mà không liên quan đến khóa bí mật.

Tái sử dụng khóa: Việc sử dụng cùng một cặp khóa để tạo chữ ký XEdDSA và VXEdDSA là an toàn.

Về lý thuyết, trong một số trường hợp nhất định, có thể sử dụng một cặp khóa vừa để tạo chữ ký vừa để sử dụng trong một số giao thức dựa trên _Diffie – Hellman._ Tuy nhiên, trên thực tế, đây là một chủ đề phức tạp, đòi hỏi phân tích cẩn thận và nằm ngoài phạm vi của Bài viết này.

<figure><img src="https://banmaixanh.vercel.app/image/cover/001-071.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>