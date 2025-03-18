---
pubDatetime: 2025-03-27T10:10:00Z
title: Hướng dẫn tạo hiệu ứng nền vũ trụ đầy sao (starfield) trên website
description: Hiệu ứng vũ trụ đầy sao (Starfield) là một trong những kỹ thuật hiệu ứng hình ảnh động mang đến trải nghiệm đắm chìm cho người dùng.
featured: false
image: https://banmaixanh.vercel.app/image/cover/001-057.jpg
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
  - starfield
  - hieu ung starfield
  - css
  - javascript
---

_Hiệu ứng nền vũ trụ đầy sao (Starfield) là một trong những kỹ thuật hiệu ứng hình ảnh động được áp dụng phổ biến trong thiết kế website hiện đại, nhằm tạo nên cảm giác không gian ba chiều sâu rộng và mang đến trải nghiệm đắm chìm cho người dùng._ 

## Giới thiệu chung về hiệu ứng nền vũ trụ đầy sao (starfield)

Hiệu ứng vũ trụ đầy sao (Starfield) là một trong những kỹ thuật hiệu ứng hình ảnh động được áp dụng phổ biến trong thiết kế website hiện đại, nhằm tạo nên cảm giác không gian ba chiều sâu rộng và mang đến trải nghiệm đắm chìm cho người dùng. Kỹ thuật này mô phỏng cảm giác bay qua không gian vũ trụ với hàng trăm ngôi sao đang chuyển động, tạo ra một nền tảng trực quan và đầy nghệ thuật cho nội dung website. Bằng cách sử dụng Canvas API của HTML5, chúng ta có thể tạo ra các hạt sao với đặc tính vật lý như tốc độ, màu sắc, độ trong suốt và quỹ đạo chuyển động được tính toán một cách động học, mang đến hiệu ứng chuyển động mượt mà và chân thực.

[Hiệu ứng starfield](https://nhavantuonglai.com/article/hieu-ung-starfield) đặc biệt phù hợp với các website có chủ đề liên quan đến công nghệ, khoa học, giáo dục, vũ trụ hoặc các lĩnh vực cần thể hiện sự sáng tạo và đổi mới. Trong bối cảnh của một website học thuật hoặc tri thức, hiệu ứng này tạo ra ẩn dụ trực quan về sự vô tận của kiến thức và khám phá không ngừng. Điểm mạnh của hiệu ứng này là khả năng tạo ra sự thu hút ngay từ khoảnh khắc người dùng truy cập vào trang, đồng thời không gây xao nhãng quá mức đối với nội dung chính của website nhờ vào việc được đặt ở lớp nền với mức độ tương tác thấp. Mỗi ngôi sao trong hiệu ứng được tạo ra từ điểm trung tâm và lan tỏa ra xa theo một quỹ đạo ngẫu nhiên, tạo cảm giác người dùng đang di chuyển qua một không gian rộng lớn đầy những điểm sáng, phản ánh sự mênh mông và đa dạng của kiến thức.

## Chi tiết về hiệu ứng nền starfield và trải nghiệm của hiệu ứng

Khi hiệu ứng starfield được triển khai, người dùng sẽ được chào đón bởi một không gian động với 200 điểm sáng được khởi tạo ngay lập tức tại thời điểm website được tải. Các điểm sáng này xuất hiện từ tâm màn hình và chuyển động theo hướng hướng tâm ra các viền của trình duyệt, tạo cảm giác người dùng đang bay vào trong không gian sâu thẳm của vũ trụ. Mỗi ngôi sao được thiết kế với kích thước ngẫu nhiên từ 0.5 đến 2 pixel, kết hợp với hiệu ứng ánh sáng mờ (glow effect) cho những ngôi sao lớn hơn 1 pixel, tạo nên cảm giác chiều sâu và không gian ba chiều thực sự. Bảng màu được lựa chọn cẩn thận với các tông màu đỏ cam ấm áp (như '#ff725e', '#ffb199', '#ff8c73', '#ff4832'), tạo nên một không gian vũ trụ độc đáo, khác biệt so với màu xanh lạnh thông thường thường thấy trong các hiệu ứng _space themed_ truyền thống.

<figure><img src="https://banmaixanh.vercel.app/image/article/hieu-ung-starfield-02.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>

Trải nghiệm của người dùng được tăng cường bởi cơ chế sinh sao liên tục, với 30 ngôi sao mới xuất hiện mỗi giây, đảm bảo không gian luôn được lấp đầy và sống động. Độ trong suốt của mỗi ngôi sao được tính toán dựa trên khoảng cách của nó đến tâm và thời gian tồn tại, tạo ra hiệu ứng _fade out_ tự nhiên khi sao di chuyển ra xa tầm nhìn. Tốc độ của mỗi ngôi sao cũng tỷ lệ thuận với kích thước của nó, tạo ra hiệu ứng parallax (chuyển động khác nhau ở các lớp khác nhau) làm tăng cảm giác về chiều sâu không gian. Khi người dùng thay đổi kích thước trình duyệt, hiệu ứng ngay lập tức được điều chỉnh để phủ toàn bộ không gian màn hình mới, đảm bảo trải nghiệm mượt mà và liền mạch. Với thuộc tính `pointer-events: none` trong CSS, hiệu ứng không can thiệp vào khả năng tương tác của người dùng với các phần tử khác trên trang, cho phép họ tập trung vào nội dung chính trong khi vẫn được đắm chìm trong không gian vũ trụ được tạo ra.

## Hướng dẫn cách thực thi hiệu ứng nền starfield chi tiết trên website

Để triển khai hiệu ứng starfield trên website của bạn, chúng ta sẽ bắt đầu bằng việc thiết lập cấu trúc HTML cơ bản. Đầu tiên, thêm một phần tử canvas vào tài liệu HTML của bạn với ID là _starfield._ Phần tử này sẽ đóng vai trò là khung vẽ cho hiệu ứng của chúng ta. Tiếp theo, thêm một phần tử script ngay sau canvas để chứa mã Javascript điều khiển hiệu ứng. Đối với phong cách, chúng ta sẽ sử dụng CSS để định vị canvas ở chế độ fixed, bao phủ toàn bộ viewport với chỉ số z-index âm để đảm bảo nó nằm phía sau tất cả các phần tử khác trên trang. Thuộc tính `pointer-events: none` quan trọng để ngăn canvas can thiệp vào các tương tác của người dùng với nội dung chính của website. Đoạn mã HTML và CSS cơ bản như sau:

```html
<canvas id="starfield"></canvas>

<style>
	#starfield {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: -1;
		pointer-events: none;
	}
</style>
```

Bây giờ, chúng ta sẽ đi vào phần Javascript, nơi thực sự tạo ra hiệu ứng. Phần đầu tiên của mã Javascript thiết lập các biến cần thiết như lấy tham chiếu tới canvas, thiết lập bối cảnh vẽ 2D, và xác định các tham số cấu hình như số lượng sao ban đầu, tốc độ sinh sao mới, kích thước sao và bảng màu. Chúng ta định nghĩa hàm `createStar()` tạo ra một đối tượng sao với các thuộc tính như vị trí, góc, bán kính, kích thước, tốc độ, màu sắc và độ trong suốt. Mỗi ngôi sao bắt đầu từ tâm màn hình và di chuyển theo một góc ngẫu nhiên. Hàm `init()` khởi tạo canvas với kích thước cửa sổ hiện tại và tạo số lượng sao ban đầu. Đặc biệt lưu ý rằng chúng ta đăng ký sự kiện _resize_ để đảm bảo canvas luôn điều chỉnh theo kích thước cửa sổ.

Tiếp theo, chúng ta cần triển khai các hàm để quản lý vòng đời của các ngôi sao. Hàm `addNewStars()` thêm sao mới dựa trên thời gian trôi qua và tốc độ sinh sao đã cấu hình. Hàm `updateStars()` cập nhật vị trí của mỗi ngôi sao dựa trên tốc độ và góc của nó, đồng thời loại bỏ những ngôi sao đã di chuyển quá xa khỏi tầm nhìn. Hàm `drawStars()` xóa canvas và vẽ lại tất cả các ngôi sao với hiệu ứng ánh sáng mờ cho những ngôi sao lớn. Cuối cùng, hàm `animate()` kết hợp tất cả lại, tạo ra vòng lặp hoạt hình liên tục bằng cách sử dụng `requestAnimationFrame`. Chúng ta cũng cần thiết lập một `MutationObserver` để theo dõi thay đổi trong DOM và đảm bảo hiệu ứng vẫn hoạt động bình thường khi có thay đổi về lớp của các phần tử. Sau khi tất cả các hàm được định nghĩa, chúng ta gọi `init()` để khởi tạo và bắt đầu vòng lặp hoạt hình.

Kết quả, chúng ta có đoạn code hoàn chỉnh với các cấu trúc CSS và Javascript tương ứng, để triển khai hiệu ứng starfield trên trang:

```
<canvas id="starfield"></canvas>

<script client:load>

	const canvas = document.getElementById("starfield");
	const ctx = canvas.getContext("2d");
	let stars = [];
	const initialStarCount = 200;
	const newStarsPerSecond = 30;
	const minSize = 0.5;
	const maxSize = 2;
	const speedMultiplier = 0.5;
	const colors = ['#ff725e', '#ffb199', '#ff8c73', '#ff4832'];
	let lastAddTime = 0;
	let animationId = null;
	let isPageVisible = true;
	
	function createStar() {
		const centerX = canvas.width / 2;
		const centerY = canvas.height / 2;
		const angle = Math.random() * Math.PI * 2;
		const size = Math.random() * (maxSize - minSize) + minSize;
		const speed = size * speedMultiplier;
		return {
			x: centerX,
			y: centerY,
			angle: angle,
			radius: 0,
			maxRadius: Math.max(canvas.width, canvas.height) * 1.2,
			size: size,
			speed: speed,
			color: colors[Math.floor(Math.random() * colors.length)],
			opacity: Math.random() * 0.7 + 0.3
		};
	}
	
	function init() {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		stars = [];
		for (let i = 0; i < initialStarCount; i++) {
			stars.push(createStar());
		}
		lastAddTime = performance.now();
	}
	
	function addNewStars(currentTime) {
		const elapsedSeconds = (currentTime - lastAddTime) / 1000;
		const starsToAdd = Math.floor(newStarsPerSecond * elapsedSeconds);
		if (starsToAdd > 0) {
			for (let i = 0; i < starsToAdd; i++) {
				stars.push(createStar());
			}
			lastAddTime = currentTime;
		}
	}
	
	function updateStars() {
		for (let i = stars.length - 1; i >= 0; i--) {
			const star = stars[i];
			star.radius += star.speed;
			star.x = canvas.width / 2 + Math.cos(star.angle) * star.radius;
			star.y = canvas.height / 2 + Math.sin(star.angle) * star.radius;
			if (star.radius > star.maxRadius) {
				stars.splice(i, 1);
			}
		}
	}
	
	function drawStars() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		for (const star of stars) {
			const distanceRatio = star.radius / star.maxRadius;
			const adjustedOpacity = star.opacity * (1 - Math.min(0.95, distanceRatio));
			ctx.globalAlpha = adjustedOpacity;
			if (star.size > 1) {
				const glow = star.size * 2;
				const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, glow);
				gradient.addColorStop(0, star.color);
				gradient.addColorStop(1, 'transparent');
				ctx.fillStyle = gradient;
				ctx.beginPath();
				ctx.arc(star.x, star.y, glow, 0, Math.PI * 2);
				ctx.fill();
			}
			ctx.fillStyle = star.color;
			ctx.beginPath();
			ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
			ctx.fill();
		}
		ctx.globalAlpha = 1.0;
	}
	
	function animate(currentTime) {
		if (!isPageVisible) return;
		
		addNewStars(currentTime);
		updateStars();
		drawStars();
		animationId = requestAnimationFrame(animate);
	}
	
	function handleVisibilityChange() {
		if (document.hidden) {
			isPageVisible = false;

			if (animationId !== null) {
				cancelAnimationFrame(animationId);
				animationId = null;
			}

			stars = [];

			ctx.clearRect(0, 0, canvas.width, canvas.height);
		} else {
			isPageVisible = true;

			init();

			if (animationId === null) {
				animationId = requestAnimationFrame(animate);
			}
		}
	}
	
	document.addEventListener("visibilitychange", handleVisibilityChange);
	
	const observer = new MutationObserver(() => {
		if (isPageVisible) {
			drawStars();
		}
	});
	
	observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
	window.addEventListener("resize", init);
	
	init();
	animationId = requestAnimationFrame(animate);

</script>

<style>

	#starfield {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: -1;
		pointer-events: none;
	}

</style>
```

Nếu đoạn code không hoạt động, hoặc không thể sử dụng, có thể chúng đã được điều chỉnh. Truy cập vào đây để tiếp cận [đoạn hiệu ứng starfield](https://github.com/nhavantuonglai/article-open/blob/main/src/components/javascript/starfield.astro) mới nhất để dễ dàng áp dụng trên website của bạn.

## Kết luận

Hiệu ứng starfield mà chúng ta đã triển khai tạo nên một trải nghiệm đắm chìm và thẩm mỹ cao cho website. Thông qua việc kết hợp các kỹ thuật lập trình canvas, animations và toán học, chúng ta đã mô phỏng thành công một không gian vũ trụ động với các ngôi sao tạo cảm giác chiều sâu và chuyển động liên tục. Hiệu ứng này không chỉ làm tăng giá trị thẩm mỹ cho website mà còn tạo ra một ẩn dụ trực quan cho sự vô tận của kiến thức và khám phá mà người dùng có thể trải nghiệm trên website của bạn. Việc sử dụng các thuộc tính như kích thước ngẫu nhiên, góc di chuyển đa dạng và hiệu ứng ánh sáng động đã tạo ra một không gian ba chiều thực sự sống động trên nền tảng hai chiều của trình duyệt website.

Với code được tổ chức rõ ràng và có khả năng tùy chỉnh cao, bạn có thể dễ dàng điều chỉnh các tham số như bảng màu, số lượng sao, tốc độ và kích thước để phù hợp với phong cách và chủ đề cụ thể của website của bạn. Ví dụ, bạn có thể thay đổi bảng màu từ tông đỏ cam sang xanh lam để tạo cảm giác không gian vũ trụ truyền thống hơn, hoặc tăng số lượng sao và giảm tốc độ để tạo cảm giác chuyển động chậm rãi hơn. Hiệu ứng này đặc biệt hiệu quả cho các website về giáo dục, khoa học, công nghệ hoặc bất kỳ lĩnh vực nào muốn truyền tải cảm giác khám phá và khả năng vô tận. Bằng cách tích hợp hiệu ứng này vào website của bạn, bạn không chỉ tạo ra một giao diện người dùng hấp dẫn mà còn tạo nên một trải nghiệm độc đáo và đáng nhớ cho người dùng, khuyến khích họ dành nhiều thời gian hơn để khám phá nội dung của bạn.

<figure><img src="https://banmaixanh.vercel.app/image/cover/001-171.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>