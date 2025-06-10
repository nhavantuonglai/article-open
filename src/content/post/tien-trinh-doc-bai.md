---
pubDatetime: 2020-03-27T10:10:00Z
title: Hướng dẫn tạo thanh tiến trình đọc trên website
description: Thanh tiến trình đọc (Reading Progress Bar) là một yếu tố giao diện nhỏ nhưng mang lại giá trị lớn cho trải nghiệm người dùng.
image: https://banmaixanh.vercel.app/image/cover/001-173.jpg
tags:
  - website
  - tao website
  - tao website don gian
  - tao website github
  - website nhavantuonglai
  - tinh nang website
  - framework
  - open source
  - css
  - javascript
  - developer
  - astro
  - code
  - seo
  - progress
  - reading progress bar
  - thanh tien trinh doc
  - progress bar
  - toi uu website
  - giao dien website
  - tuong tac website
---

_Thanh tiến trình đọc bài không chỉ giúp người dùng dễ dàng quay lại đầu trang mà còn trực quan hóa quá trình đọc của họ, tạo nên một trải nghiệm tương tác hoàn chỉnh và chuyên nghiệp._

## Giới thiệu chung về thanh tiến trình đọc bài

Trong thời đại số hóa hiện nay, trải nghiệm người dùng (UX) là một trong những yếu tố quan trọng quyết định sự thành công của một website. Khi nội dung trên các website ngày càng phong phú và dài hơn, việc cung cấp các công cụ điều hướng thuận tiện trở nên vô cùng cần thiết. Nút cuộn lên đầu trang kết hợp với hiển thị [tiến trình đọc bài](https://nhavantuonglai.com/article/tien-trinh-doc-bai) là một giải pháp thông minh đáp ứng nhu cầu này. Hiệu ứng này không chỉ giúp người dùng dễ dàng quay lại đầu trang mà còn trực quan hóa quá trình đọc của họ, tạo nên một trải nghiệm tương tác hoàn chỉnh và chuyên nghiệp. Với thiết kế tối giản nhưng hiệu quả, nút này thường xuất hiện khi người dùng cuộn xuống một khoảng cách nhất định và biến mất khi họ ở gần đầu trang, đảm bảo không làm rối mắt hoặc chiếm quá nhiều không gian trên giao diện.

Từ góc độ kỹ thuật, hiệu ứng này là sự kết hợp hoàn hảo giữa HTML, CSS và JavaScript để tạo ra một thành phần tương tác động. Nút cuộn này không chỉ đơn thuần là một nút bấm thông thường mà còn tích hợp chức năng hiển thị tiến trình đọc thông qua gradient hình tròn (conic gradient), làm nổi bật phần trăm nội dung mà người dùng đã đọc. Điều đặc biệt của hiệu ứng này là khả năng tự động lấy màu chủ đạo từ theme của website, đảm bảo tính nhất quán trong thiết kế. Mã nguồn được tối ưu để hoạt động trơn tru trên các trình duyệt hiện đại, với các xử lý thông minh như kiểm tra việc hiển thị nội dung và cập nhật tiến trình cuộn một cách liên tục, mang đến trải nghiệm mượt mà cho người dùng.

## Chi tiết về thanh tiến trình đọc bài và trải nghiệm của hiệu ứng

Giao diện của hiệu ứng nút cuộn và hiển thị tiến trình đọc được thiết kế với sự tinh tế và tối giản, nhằm tạo sự chuyên nghiệp mà không gây phân tâm cho người dùng. Nút này có hình dạng tròn với kích thước vừa phải (40x40 pixel), đặt cố định ở góc dưới của website, đảm bảo người dùng dễ dàng nhận diện và sử dụng. Đặc biệt, nút được thiết kế với một vòng tròn gradient thể hiện tiến trình đọc, với phần đã đọc được hiển thị bằng màu chủ đạo của website, trong khi phần còn lại được làm mờ với độ trong suốt 30%. Điểm nhấn của nút là biểu tượng mũi tên chỉ lên được tạo bằng CSS thuần túy, sử dụng kỹ thuật border để tạo hình tam giác, giúp người dùng dễ dàng hiểu được chức năng của nút ngay lập tức mà không cần văn bản giải thích bổ sung.

Về trải nghiệm người dùng, hiệu ứng này mang đến nhiều lợi ích vượt trội. Thứ nhất, nút chỉ xuất hiện khi người dùng đã cuộn xuống đủ xa so với đầu trang và đang xem nội dung chính, tránh gây phiền nhiễu khi đang đọc phần đầu. Thứ hai, việc hiển thị tiến trình đọc giúp người dùng nắm bắt được vị trí hiện tại của họ trong toàn bộ nội dung, tạo cảm giác kiểm soát và động lực hoàn thành việc đọc. Khi người dùng tiếp tục cuộn, vòng tròn tiến trình sẽ được cập nhật theo thời gian thực, với mỗi phần trăm thay đổi được phản ánh ngay lập tức. Điều này không chỉ mang lại trải nghiệm tương tác mà còn cung cấp phản hồi trực quan về hành động của người dùng. Khi nút được bấm, website sẽ mượt mà cuộn lên đầu với hiệu ứng _smooth scroll,_ tạo cảm giác chuyển động tự nhiên thay vì nhảy đột ngột. Hiệu ứng hover nhẹ với sự thay đổi độ mờ (opacity) khi người dùng di chuột qua nút cũng góp phần tăng tính tương tác của giao diện.

## Hướng dẫn cách kích hoạt thanh tiến trình đọc bài chi tiết trên website

Việc triển khai hiệu ứng nút cuộn và hiển thị tiến trình đọc trên website của bạn bắt đầu từ việc thêm đoạn mã HTML, CSS và JavaScript vào website. Bước đầu tiên, bạn cần thêm phần HTML cho nút vào vị trí thích hợp trong trang, tốt nhất là ngay trước thẻ đóng `</body>`. Đoạn HTML đơn giản chỉ gồm một thẻ `<button>` với id là _scrollon_ để JavaScript có thể dễ dàng tham chiếu, class _scroll-button_ để áp dụng style CSS, và thuộc tính title _Lên đầu trang._ giúp hiển thị gợi ý khi người dùng di chuột qua nút.

Tiếp theo, thêm phần CSS vào trang của bạn, có thể đặt trong thẻ `<style>` ở phần `<head>` hoặc trong một file CSS riêng. CSS định nghĩa vị trí cố định của nút ở góc dưới trang, kích thước 40px, hình dạng tròn thông qua border-radius, và thiết lập mask để tạo hiệu ứng vòng tròn với phần trung tâm trong suốt. Đặc biệt, phần CSS còn tạo mũi tên chỉ lên bằng cách sử dụng pseudo-element `:after` với kỹ thuật tạo hình từ border, và thiết lập hiệu ứng hover đơn giản để tăng tính tương tác.

Phần quan trọng nhất của việc triển khai là mã JavaScript, nơi xử lý logic hiển thị và hoạt động của nút. Mã JavaScript được đặt trong sự kiện _DOMContentLoaded_ để đảm bảo các phần tử HTML đã được tải đầy đủ trước khi thực thi. Trong đó, hàm `getPrimaryColor()` là một điểm sáng đặc biệt, cho phép tự động trích xuất màu chủ đạo từ theme của website bằng cách tạo một phần tử tạm thời với class _bg-primary,_ lấy giá trị màu từ CSS tính toán, sau đó xóa phần tử này. Màu được trích xuất sẽ được sử dụng cho vòng tiến trình, tạo sự nhất quán với thiết kế tổng thể của website.

Tiếp theo, hàm `checkContentVisibility()` kiểm tra xem người dùng đã cuộn qua phần đầu của nội dung chưa, và hàm `updateScrollProgress()` tính toán phần trăm tiến trình dựa trên vị trí cuộn hiện tại so với chiều cao có thể cuộn của trang. Sự kiện `window.onscroll` kết hợp hai hàm này để quyết định khi nào hiển thị nút và cập nhật tiến trình. Cuối cùng, một sự kiện click được gắn vào nút để kích hoạt cuộn mượt lên đầu trang khi người dùng bấm vào.

Kết quả, chúng ta có đoạn code hoàn chỉnh với các cấu trúc CSS và Javascript tương ứng, để triển khai thanh tiến trình đọc bài trên trang:

```
<button id="scrollon" title="Lên đầu trang." class="scroll-button"></button>

<script>

	document.addEventListener("DOMContentLoaded", function() {
		const scrollon = document.getElementById("scrollon");
		const contentElement = document.querySelector(".prose");
		
		function getPrimaryColor() {
			const tempElement = document.createElement('div');
			tempElement.classList.add('bg-primary');
			document.body.appendChild(tempElement);
			
			const computedStyle = window.getComputedStyle(tempElement);
			const primaryColor = computedStyle.backgroundColor;
			
			document.body.removeChild(tempElement);
			
			const primaryRGB = primaryColor.match(/\d+/g);
			const primaryAlpha = `rgba(${primaryRGB[0]}, ${primaryRGB[1]}, ${primaryRGB[2]}, 0.3)`;
			
			return { primaryColor, primaryAlpha };
		}
		
		const { primaryColor, primaryAlpha } = getPrimaryColor();
		
		function checkContentVisibility() {
			if (!contentElement) return false;
			
			const contentRect = contentElement.getBoundingClientRect();
			const windowHeight = window.innerHeight;
			
			const isContentVisible = contentRect.top < windowHeight && contentRect.bottom > 0;
			const hasScrolledPastContent = contentRect.top < 0;
			const hasNotScrolledPastEnd = contentRect.bottom > 500;
			
			return isContentVisible && hasScrolledPastContent && hasNotScrolledPastEnd;
		}
		
		function updateScrollProgress() {
			const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
			const scrolled = window.scrollY;
			const progress = Math.min(100, Math.max(0, (scrolled / scrollableHeight) * 100));
			
			scrollon.style.background = `conic-gradient(${primaryColor} ${progress}%, ${primaryAlpha} ${progress}% 100%)`;
		}
		
		window.onscroll = function() {
			updateScrollProgress();
			
			if (checkContentVisibility()) {
				scrollon.style.display = "block";
			} else {
				scrollon.style.display = "none";
			}
		};
		
		setTimeout(function() {
			window.onscroll();
		}, 100);
		
		scrollon.addEventListener("click", function() {
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			});
		});

	});

</script>

<style>

	.scroll-button {
		position: fixed;
		bottom: 40px;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		cursor: pointer;
		display: none;
		z-index: 2;
		
		mask: radial-gradient(circle at center, transparent 15px, black 16px);
		-webkit-mask: radial-gradient(circle at center, transparent 15px, black 16px);
	}
	
	.scroll-button:after {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		width: 8px;
		height: 8px;
		border-top: 2px solid var(--color-primary);
		border-left: 2px solid var(--color-primary);
		transform: translate(-50%, -25%) rotate(45deg);
	}
	
	.scroll-button:hover {
		opacity: 0.9;
	}

</style>
```

Nếu đoạn code không hoạt động, hoặc không thể sử dụng, có thể chúng đã được điều chỉnh.

## Kết luận

Việc tích hợp nút cuộn lên đầu trang kết hợp với hiển thị tiến trình đọc mang lại nhiều giá trị đáng kể cho trải nghiệm người dùng trên website của bạn. Thành phần này không chỉ giải quyết vấn đề điều hướng trên các trang có nội dung dài mà còn tạo điểm nhấn thẩm mỹ và chuyên nghiệp cho giao diện. Với khả năng tự động điều chỉnh màu sắc theo theme của website và hiển thị trực quan tiến trình đọc, hiệu ứng này mang đến sự nhất quán trong thiết kế và tăng cường khả năng tương tác. Đặc biệt, hiệu suất của mã được tối ưu với việc sử dụng các kỹ thuật như kiểm tra hiển thị nội dung, cập nhật tiến trình theo thời gian thực, và áp dụng hiệu ứng cuộn mượt, đảm bảo trải nghiệm người dùng luôn trơn tru trên các thiết bị và trình duyệt khác nhau. Với lượng mã tương đối nhỏ gọn nhưng chức năng đầy đủ, việc triển khai hiệu ứng này là một đầu tư hiệu quả cho việc cải thiện trải nghiệm người dùng.

Nhìn xa hơn, hiệu ứng này còn có thể mở rộng và tùy chỉnh theo nhiều cách khác nhau để phù hợp với nhu cầu cụ thể của từng website. Ví dụ, bạn có thể điều chỉnh vị trí, kích thước hoặc kiểu dáng của nút để phù hợp với thiết kế tổng thể của trang. Thêm vào đó, logic hiển thị có thể được tinh chỉnh để phù hợp với cấu trúc cụ thể của nội dung, như chỉ hiển thị trên các trang bài viết dài mà không xuất hiện trên trang chủ hoặc trang liên hệ.

Điều đáng chú ý là hiệu ứng này không chỉ mang lại lợi ích cho người dùng mà còn giúp tăng thời gian lưu trú trên trang và khả năng đọc hết nội dung, từ đó gián tiếp cải thiện các chỉ số quan trọng như tỷ lệ thoát và thời gian lưu trú trung bình. Với những lợi ích rõ ràng và chi phí triển khai thấp, việc tích hợp nút cuộn lên đầu trang kết hợp hiển thị tiến trình đọc là một quyết định sáng suốt cho bất kỳ website nào có nội dung phong phú.

<figure><img src="https://banmaixanh.vercel.app/image/cover/001-149.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>