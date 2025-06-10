---
pubDatetime: 2020-01-19T10:10:00Z
title: Hướng dẫn tạo mục lục bài viết trên website
description: Mục lục bài viết không chỉ là một công cụ điều hướng đơn thuần mà còn là yếu tố quan trọng ảnh hưởng đến SEO, khả năng tiếp cận và tỷ lệ tương tác của người dùng.
image: https://banmaixanh.vercel.app/image/cover/001-159.jpg
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
  - muc luc bai viet
  - toc
  - table of contents
---

_Mục lục bài viết (Table of Contents – TOC) không chỉ là một công cụ điều hướng đơn thuần mà còn là yếu tố quan trọng ảnh hưởng đến SEO, khả năng tiếp cận và tỷ lệ tương tác của người dùng._

## Tìm hiểu về tạo mục lục bài viết trên website

Trong thời đại số hóa hiện tại, việc cung cấp trải nghiệm đọc tối ưu cho người dùng đã trở thành một yếu tố then chốt quyết định thành công của một website. Mục lục bài viết (Table of Contents – TOC) không chỉ là một công cụ điều hướng đơn thuần mà còn là yếu tố quan trọng ảnh hưởng đến SEO, khả năng tiếp cận và tỷ lệ tương tác của người dùng. Việc hiểu rõ bản chất, thời điểm sử dụng và cách thức triển khai mục lục bài viết sẽ giúp các nhà phát triển website tạo ra những sản phẩm chất lượng cao, đáp ứng được nhu cầu đa dạng của người dùng trong môi trường website ngày càng phức tạp.

### Mục lục bài viết trên website là gì?

Mục lục bài viết trên website là một hệ thống điều hướng được tạo ra tự động hoặc thủ công, cho phép người đọc có thể nhanh chóng di chuyển đến các phần cụ thể trong một bài viết dài. Về mặt kỹ thuật, mục lục là một danh sách có cấu trúc chứa các liên kết neo (anchor links) trỏ đến các tiêu đề phụ trong trang. Các liên kết này thường được tạo bằng cách sử dụng thuộc tính `id` của các thẻ HTML như `h2`, `h3`, `h4` và kết hợp với thuộc tính `href` của thẻ `<a>` để tạo ra khả năng nhảy trực tiếp đến vị trí mong muốn trong trang.

Từ góc độ người dùng, mục lục bài viết hoạt động như một bản đồ điều hướng giúp họ có cái nhìn tổng quan về nội dung bài viết trước khi đọc. Điều này đặc biệt hữu ích với những bài viết dài, phức tạp hoặc có tính chuyên môn cao. Người đọc có thể dễ dàng xác định được những phần nào phù hợp với nhu cầu tìm hiểu của mình và bỏ qua những phần không cần thiết. Về mặt tâm lý, việc có thể thấy được cấu trúc rõ ràng của bài viết giúp người đọc cảm thấy tự tin hơn khi tiếp cận với nội dung, đặc biệt là những chủ đề kỹ thuật hoặc học thuật.

Mục lục bài viết cũng đóng vai trò quan trọng trong việc cải thiện khả năng tiếp cận (accessibility) của website. Đối với những người sử dụng trình đọc màn hình hoặc có khó khăn trong việc điều hướng, mục lục cung cấp một phương thức thay thế hiệu quả để truy cập nội dung. Khi được thiết kế đúng cách với các thuộc tính ARIA phù hợp, mục lục có thể được nhận diện và sử dụng một cách dễ dàng bởi các công nghệ hỗ trợ, đảm bảo rằng website của bạn tuân thủ các tiêu chuẩn về khả năng tiếp cận quốc tế.

### Khi nào nên tạo mục lục bài viết trên website

Việc quyết định khi nào nên triển khai mục lục bài viết trên website không chỉ dựa trên độ dài của nội dung mà còn phụ thuộc vào nhiều yếu tố khác nhau. Thông thường, các bài viết có từ 1500 từ trở lên hoặc có cấu trúc phân cấp rõ ràng với nhiều tiêu đề phụ sẽ được hưởng lợi đáng kể từ việc có mục lục. Tuy nhiên, điều quan trọng hơn là phải xem xét đến độ phức tạp và tính chuyên môn của nội dung. Một bài viết kỹ thuật ngắn nhưng có nhiều khái niệm cần được giải thích từng bước cũng có thể cần đến mục lục để giúp người đọc theo dõi logic của bài viết.

Đối với các website giáo dục, blog công nghệ, tài liệu kỹ thuật hoặc hướng dẫn sử dụng, mục lục bài viết gần như là bắt buộc. Những loại nội dung này thường có tính chất tham khảo cao, người đọc có thể cần quay lại nhiều lần để tìm kiếm thông tin cụ thể. Mục lục không chỉ giúp họ định vị nhanh chóng mà còn tạo ra trải nghiệm đọc chuyên nghiệp, tăng độ tin cậy của nội dung. Ngoài ra, các bài viết dạng listicle, hướng dẫn từng bước, hoặc so sánh nhiều sản phẩm, dịch vụ cũng nên có mục lục để người đọc có thể nhanh chóng truy cập đến phần họ quan tâm nhất.

Từ góc độ SEO, việc có mục lục bài viết có thể giúp website đạt được rich snippets trong kết quả tìm kiếm của Google. Khi Google hiểu được cấu trúc của bài viết thông qua mục lục, nó có thể hiển thị các liên kết nhảy trực tiếp đến các phần cụ thể trong kết quả tìm kiếm, tăng khả năng click-through rate và cải thiện trải nghiệm tìm kiếm. Điều này đặc biệt quan trọng đối với các câu hỏi dài hoặc truy vấn tìm kiếm có tính chất tìm hiểu sâu. Tuy nhiên, cần lưu ý rằng việc lạm dụng mục lục cho những bài viết ngắn hoặc không phù hợp có thể gây phản tác dụng, làm người đọc cảm thấy bị làm phiền và ảnh hưởng tiêu cực đến trải nghiệm người dùng.

### Lợi ích của việc sử dụng mục lục bài viết tự động

Việc tạo mục lục bài viết tự động mang lại nhiều lợi ích vượt trội so với phương pháp tạo thủ công truyền thống. Đầu tiên và quan trọng nhất là tính nhất quán và chính xác. Khi sử dụng JavaScript để tự động quét và tạo mục lục dựa trên các thẻ tiêu đề có sẵn trong HTML, bạn loại bỏ hoàn toàn rủi ro về sai sót do con người gây ra. Hệ thống sẽ tự động phát hiện tất cả các tiêu đề, tạo ra các liên kết chính xác và đảm bảo rằng mục lục luôn phản ánh đúng cấu trúc thực tế của bài viết, ngay cả khi nội dung được chỉnh sửa hoặc cập nhật.

Tính linh hoạt trong việc bảo trì và mở rộng là một lợi thế khác không thể bỏ qua. Với hệ thống mục lục tự động, việc thêm, xóa hoặc sửa đổi các tiêu đề trong bài viết sẽ được phản ánh ngay lập tức trong mục lục mà không cần can thiệp thủ công. Điều này đặc biệt quan trọng đối với các website có nội dung được cập nhật thường xuyên hoặc có nhiều tác giả khác nhau đóng góp. Hệ thống tự động cũng cho phép tùy chỉnh dễ dàng các tính năng như ẩn/hiện một số mục nhất định, thay đổi cách hiển thị dựa trên cấp độ tiêu đề, hoặc thêm các hiệu ứng tương tác mà không cần phải chỉnh sửa lại toàn bộ mục lục.

Về mặt hiệu suất và trải nghiệm người dùng, mục lục tự động có thể được tối ưu để tải và hiển thị một cách mượt mà. Bằng cách sử dụng các kỹ thuật như lazy loading hoặc progressive enhancement, mục lục có thể được tạo ra sau khi DOM đã sẵn sàng mà không ảnh hưởng đến thời gian tải trang ban đầu. Hơn nữa, việc tích hợp với các thư viện như Intersection Observer API cho phép tạo ra các tính năng nâng cao như highlight mục đang được đọc, smooth scrolling, hoặc sticky navigation. Những tính năng này không chỉ cải thiện trải nghiệm người dùng mà còn tăng thời gian người dùng ở lại trang và giảm bounce rate.

## Hướng dẫn viết code tạo mục lục bài viết trên website

Việc phát triển một hệ thống mục lục bài viết hiệu quả đòi hỏi sự kết hợp khéo léo giữa HTML semantic, CSS styling và JavaScript functionality. Quá trình này không chỉ đơn thuần là việc tạo ra một danh sách liên kết mà còn phải đảm bảo tính tương thích, khả năng mở rộng và hiệu suất tối ưu. Việc hiểu rõ từng bước trong quá trình xây dựng sẽ giúp bạn tạo ra một giải pháp vừa mạnh mẽ vừa linh hoạt, có thể thích ứng với nhiều loại nội dung và yêu cầu khác nhau.

### Chuẩn bị cấu trúc HTML cơ bản

Trước khi bắt đầu viết JavaScript để tạo mục lục, việc thiết lập một cấu trúc HTML phù hợp là bước nền tảng quan trọng nhất. Cấu trúc HTML không chỉ cần đảm bảo tính semantic đúng đắn mà còn phải hỗ trợ tốt cho việc xử lý JavaScript sau này. Điểm khởi đầu là việc tạo ra một container chứa mục lục với `id` duy nhất để JavaScript có thể dễ dàng tham chiếu. Thông thường, container này được đặt ở đầu bài viết hoặc trong sidebar, tùy thuộc vào thiết kế tổng thể của website.

Việc sử dụng các thẻ tiêu đề (`h1`, `h2`, `h3`, `h4`, `h5`, `h6`) một cách có hệ thống và logic là yếu tố quyết định chất lượng của mục lục. Các tiêu đề cần được sắp xếp theo thứ tự phân cấp rõ ràng, không được bỏ qua các cấp độ. Ví dụ, sau `h2` không nên nhảy trực tiếp đến `h4` mà phải thông qua `h3`. Mỗi tiêu đề cần có một `id` duy nhất để có thể tạo ra anchor link. Nếu website của bạn sử dụng CMS và các tiêu đề chưa có `id`, JavaScript sẽ cần được viết để tự động tạo ra các `id` này dựa trên nội dung của tiêu đề.

Việc cân nhắc về accessibility (khả năng tiếp cận) ngay từ giai đoạn thiết kế HTML là điều không thể thiếu. Container chứa mục lục nên được đánh dấu với các thuộc tính ARIA phù hợp như `role="navigation"` và `aria-label="Mục lục bài viết"` để các công nghệ hỗ trợ có thể nhận diện đúng chức năng của nó. Bên cạnh đó, việc sử dụng thẻ `<nav>` để bao quanh mục lục cũng giúp tăng tính semantic của trang website. Đặc biệt quan trọng là việc đảm bảo rằng cấu trúc HTML vẫn có ý nghĩa và sử dụng được ngay cả khi JavaScript bị vô hiệu hóa.

```
<!DOCTYPE html>
<html lang="vi">

	<head>

		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">

		<title>Bài viết với mục lục tự động</title>

		<style>
			.toc-container {
				background-color: #f8f9fa;
				border: 1px solid #e9ecef;
				padding: 20px;
				margin: 20px 0;
				border-radius: 8px;
			}
			.toc-title {
				font-size: 1.2em;
				font-weight: bold;
				margin-bottom: 15px;
				color: #495057;
			}
		</style>

	</head>

	<body>

		<article class="max-w-4xl mx-auto px-4">

			<h1>Tiêu đề chính của bài viết</h1>

			<nav class="toc-container" role="navigation" aria-label="Mục lục bài viết">
				<div class="toc-title">Mục lục</div>
				<div id="table-of-contents">
					<!-– Mục lục sẽ được tạo tự động ở đây -->
				</div>
			</nav>

			<h2 id="phan-1">Phần 1: Giới thiệu</h2>
			<p>Nội dung phần 1…</p>

			<h3 id="phan-1-1">1.1 Khái niệm cơ bản</h3>
			<p>Nội dung phần 1.1…</p>

			<h3 id="phan-1-2">1.2 Tầm quan trọng</h3>
			<p>Nội dung phần 1.2…</p>

			<h2 id="phan-2">Phần 2: Thực hành</h2>
			<p>Nội dung phần 2…</p>

		</article>

	</body>

</html>
```

### Xây dựng function JavaScript cơ bản

Việc xây dựng function JavaScript để tạo mục lục tự động đòi hỏi một cách tiếp cận có hệ thống và tính toán kỹ lưỡng. Function chính cần thực hiện ba nhiệm vụ cốt lõi: quét tài liệu để tìm các tiêu đề, tạo ra cấu trúc mục lục phân cấp, và cuối cùng là chèn mục lục vào vị trí định sẵn trong DOM. Quá trình bắt đầu bằng việc sử dụng `document.querySelectorAll()` để lấy tất cả các thẻ tiêu đề trong phạm vi được xác định. Việc chọn lọc các cấp độ tiêu đề cần được cân nhắc cẩn thận – thông thường chỉ nên bao gồm từ `h2` đến `h4` để tránh mục lục quá phức tạp và khó theo dõi.

Xử lý việc tạo `id` cho các tiêu đề chưa có `id` là một phần quan trọng của function. Thuật toán tạo `id` cần đảm bảo tính duy nhất và có ý nghĩa, thường dựa trên nội dung text của tiêu đề. Quá trình này bao gồm việc loại bỏ dấu câu, chuyển đổi sang chữ thường, thay thế khoảng trắng bằng dấu gạch ngang, và xử lý các ký tự đặc biệt. Đặc biệt với tiếng Việt, cần có function chuyển đổi từ có dấu sang không dấu để tạo ra các `id` tương thích với tiêu chuẩn website. Việc kiểm tra và xử lý trùng lặp `id` cũng cần được tính đến để đảm bảo tính duy nhất.

Tạo cấu trúc phân cấp cho mục lục là phần phức tạp nhất của function. Hệ thống cần theo dõi cấp độ hiện tại và tạo ra các danh sách lồng nhau (`<ul>` và `<li>`) phù hợp. Điều này đòi hỏi việc duy trì một stack hoặc hệ thống tracking để biết được vị trí hiện tại trong cây phân cấp. Khi gặp một tiêu đề cấp cao hơn (ví dụ từ `h3` lên `h2`), function cần "đóng" các cấp thấp hơn và quay lại cấp độ phù hợp. Ngược lại, khi gặp tiêu đề cấp thấp hơn, cần tạo ra các danh sách con mới.

```
function generateTableOfContents() {

	const tocContainer = document.getElementById('table-of-contents');
	if (!tocContainer) {
		console.warn('Không tìm thấy container cho mục lục');
		return;
	}

	const headings = document.querySelectorAll('h2, h3, h4');

	if (headings.length === 0) {
		tocContainer.innerHTML = '<p>Không có tiêu đề nào được tìm thấy</p>';
		return;
	}

	const mainList = document.createElement('ul');
	mainList.className = 'toc-list';

	let currentLevel = 2;
	let currentList = mainList;
	let listStack = [mainList];

	headings.forEach((heading, index) => {
		if (!heading.id) {
			heading.id = generateSlug(heading.textContent);
		}

		const level = parseInt(heading.tagName.charAt(1));

		if (level > currentLevel) {
			const subList = document.createElement('ul');
			subList.className = 'toc-sublist';
			const lastItem = currentList.lastElementChild;
			if (lastItem) {
				lastItem.appendChild(subList);
				listStack.push(subList);
				currentList = subList;
			}
		} else if (level < currentLevel) {
			const levelDiff = currentLevel – level;
			for (let i = 0; i < levelDiff && listStack.length > 1; i++) {
				listStack.pop();
			}
			currentList = listStack[listStack.length – 1];
		}

		currentLevel = level;

		const listItem = document.createElement('li');
		listItem.className = `toc-item toc-level-${level}`;

		const link = document.createElement('a');
		link.href = `#${heading.id}`;
		link.textContent = heading.textContent;
		link.className = 'toc-link';

		link.addEventListener('click', function(e) {
			e.preventDefault();
			const target = document.getElementById(heading.id);
			if (target) {
				target.scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				});
			}
		});

		listItem.appendChild(link);
		currentList.appendChild(listItem);
	});

	tocContainer.appendChild(mainList);
}

function generateSlug(text) {
	return text
		.toLowerCase()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(/[^a-z0-9\s-]/g, '')
		.trim()
		.replace(/\s+/g, '-')
		.substring(0, 50);
}

document.addEventListener('DOMContentLoaded', generateTableOfContents);
```

### Tối ưu và xử lý các trường hợp đặc biệt

Việc tối ưu mã JavaScript cho mục lục không chỉ tập trung vào hiệu suất mà còn phải xử lý được các trường hợp ngoại lệ và edge cases có thể xảy ra trong thực tế. Một trong những vấn đề thường gặp là việc xử lý các tiêu đề có cấu trúc không tuần tự – ví dụ như có `h2` sau đó nhảy trực tiếp đến `h4` mà bỏ qua `h3`. Hệ thống cần có khả năng nhận diện và xử lý những tình huống này một cách uyển chuyển, có thể thông qua việc tự động điều chỉnh cấp độ hoặc cảnh báo về cấu trúc không chuẩn.

Xử lý performance là một khía cạnh quan trọng khác, đặc biệt đối với các bài viết rất dài có nhiều tiêu đề. Việc sử dụng DocumentFragment thay vì thao tác trực tiếp với DOM có thể cải thiện đáng kể tốc độ xử lý. Bên cạnh đó, việc implement debouncing cho các event như resize hoặc scroll cũng giúp tránh việc gọi function quá thường xuyên. Đối với các website sử dụng Single Page Application (SPA), cần đảm bảo rằng mục lục được cập nhật đúng cách khi nội dung thay đổi dynamically.

Việc handle các trường hợp đặc biệt như tiêu đề trống, tiêu đề chỉ chứa HTML tags, hoặc tiêu đề có nội dung đặc biệt cũng cần được tính đến. Function cần có khả năng extract text thuần túy từ các tiêu đề có thể chứa các thẻ HTML khác, đồng thời đảm bảo rằng các liên kết được tạo ra vẫn có ý nghĩa. Việc implement fallback options cho trường hợp JavaScript bị disable cũng là một practice tốt để đảm bảo accessibility.

```
class TableOfContentsGenerator {
	constructor(options = {}) {
		this.options = {
			containerSelector: '#table-of-contents',
			headingSelectors: 'h2, h3, h4',
			maxDepth: 4,
			minItems: 2,
			smoothScroll: true,
			includeHome: false,
			…options
		};

		this.tocContainer = null;
		this.headings = [];
		this.generated = false;
	}

	init() {
		if (document.readyState === 'loading') {
			document.addEventListener('DOMContentLoaded', () => this.generate());
		} else {
			this.generate();
		}
	}

	generate() {
		try {
			this.tocContainer = document.querySelector(this.options.containerSelector);
			if (!this.tocContainer) {
				console.warn(`TOC: Container ${this.options.containerSelector} không tồn tại`);
				return false;
			}

			this.collectHeadings();

			if (this.headings.length < this.options.minItems) {
				this.tocContainer.style.display = 'none';
				return false;
			}

			const fragment = this.buildTOCStructure();
			this.tocContainer.innerHTML = '';
			this.tocContainer.appendChild(fragment);

			this.attachEventListeners();
			this.generated = true;

			document.dispatchEvent(new CustomEvent('tocGenerated', {
				detail: { headings: this.headings }
			}));

			return true;
		} catch (error) {
			console.error('TOC Generation Error:', error);
			return false;
		}
	}

	collectHeadings() {
		const allHeadings = document.querySelectorAll(this.options.headingSelectors);
		this.headings = [];

		allHeadings.forEach((heading, index) => {
			const textContent = this.extractTextContent(heading);
			if (!textContent.trim()) return;

			if (!heading.id) {
				heading.id = this.generateUniqueId(textContent);
			}

			const level = parseInt(heading.tagName.charAt(1));

			this.headings.push({
				element: heading,
				text: textContent,
				id: heading.id,
				level: level,
				index: index
			});
		});

		this.normalizeHeadingLevels();
	}

	extractTextContent(element) {
		const clone = element.cloneNode(true);

		const unwantedTags = clone.querySelectorAll('script, style, noscript');
		unwantedTags.forEach(tag => tag.remove());

		return clone.textContent || clone.innerText || '';
	}

	generateUniqueId(text) {
		let baseId = text
			.toLowerCase()
			.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, '')
			.replace(/[^a-z0-9\s-]/g, '')
			.trim()
			.replace(/\s+/g, '-')
			.substring(0, 50);

		if (!baseId) baseId = 'heading';

		let uniqueId = baseId;
		let counter = 1;

		while (document.getElementById(uniqueId)) {
			uniqueId = `${baseId}-${counter}`;
			counter++;
		}

		return uniqueId;
	}

	normalizeHeadingLevels() {
		if (this.headings.length === 0) return;

		const minLevel = Math.min(…this.headings.map(h => h.level));

		this.headings.forEach(heading => {
			heading.normalizedLevel = heading.level – minLevel + 1;
		});
	}

	buildTOCStructure() {
		const fragment = document.createDocumentFragment();
		const mainList = document.createElement('ul');
		mainList.className = 'toc-main-list';

		let currentLevel = 1;
		let listStack = [mainList];
		let parentStack = [null];

		this.headings.forEach(heading => {
			const targetLevel = heading.normalizedLevel;

			while (currentLevel < targetLevel && listStack.length < this.options.maxDepth) {
				const newList = document.createElement('ul');
				newList.className = `toc-sublist toc-level-${currentLevel + 1}`;

				const lastParent = parentStack[parentStack.length – 1];
				if (lastParent) {
					lastParent.appendChild(newList);
				}

				listStack.push(newList);
				parentStack.push(null);
				currentLevel++;
			}

			while (currentLevel > targetLevel && listStack.length > 1) {
				listStack.pop();
				parentStack.pop();
				currentLevel--;
			}

			const listItem = this.createTOCItem(heading);
			listStack[listStack.length – 1].appendChild(listItem);
			parentStack[parentStack.length – 1] = listItem;

			currentLevel = targetLevel;
		});

		fragment.appendChild(mainList);
		return fragment;
	}

	createTOCItem(heading) {
		const listItem = document.createElement('li');
		listItem.className = `toc-item toc-level-${heading.normalizedLevel}`;

		const link = document.createElement('a');
		link.href = `#${heading.id}`;
		link.textContent = heading.text;
		link.className = 'toc-link';
		link.setAttribute('data-heading-id', heading.id);

		listItem.appendChild(link);
		return listItem;
	}

	attachEventListeners() {
		if (!this.options.smoothScroll) return;

		const links = this.tocContainer.querySelectorAll('.toc-link');
		links.forEach(link => {
			link.addEventListener('click', this.handleLinkClick.bind(this));
		});
	}

	handleLinkClick(event) {
		event.preventDefault();
		const targetId = event.target.getAttribute('data-heading-id');
		const targetElement = document.getElementById(targetId);

		if (targetElement) {
			targetElement.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});

			if (history.pushState) {
				history.pushState(null, null, `#${targetId}`);
			}
		}
	}

	refresh() {
		if (this.generated) {
			this.generate();
		}
	}

	destroy() {
		if (this.tocContainer) {
			this.tocContainer.innerHTML = '';
		}
		this.generated = false;
	}
}

const toc = new TableOfContentsGenerator({
	containerSelector: '#table-of-contents',
	headingSelectors: 'h2, h3, h4',
	minItems: 3,
	smoothScroll: true
});

toc.init();
```

## Hướng dẫn thêm tạo mục lục bài viết trên website

Sau khi đã nắm vững các kiến thức cơ bản về việc tạo mục lục bài viết, bước tiếp theo là tích hợp và triển khai hệ thống này vào website thực tế. Quá trình này đòi hỏi sự cân nhắc kỹ lưỡng về nhiều yếu tố khác nhau từ thiết kế giao diện, tối ưu hiệu suất cho đến đảm bảo tính tương thích với các hệ thống và framework khác nhau. Việc hiểu rõ cách thức tích hợp đúng đắn sẽ giúp tránh được các vấn đề phổ biến và tạo ra một giải pháp ổn định, có thể mở rộng trong tương lai.

### Tích hợp mục lục vào các CMS phổ biến

Việc tích hợp hệ thống mục lục tự động vào các Content Management System (CMS) như WordPress, Drupal, hoặc Joomla đòi hỏi một cách tiếp cận khác biệt so với việc triển khai trên static website. Mỗi CMS có cấu trúc riêng và cách thức quản lý nội dung khác nhau, do đó cần phải điều chỉnh code cho phù hợp. Đối với WordPress, việc tạo mục lục có thể được thực hiện thông qua việc tạo plugin hoặc thêm code vào functions.php của theme. Cần lưu ý rằng WordPress thường wrap nội dung bài viết trong các class và container cụ thể, do đó selector cho việc tìm kiếm headings cần được điều chỉnh phù hợp.

Khi làm việc với WordPress, việc hook vào các action và filter phù hợp là rất quan trọng. Function tạo mục lục nên được gọi trong hook `wp_enqueue_scripts` để đảm bảo script được load đúng thời điểm, và có thể sử dụng `the_content` filter để tự động chèn mục lục vào đầu mỗi bài viết dài. Điều đặc biệt cần chú ý là WordPress có thể sử dụng AJAX để tải nội dung, do đó cần đảm bảo mục lục được regenerate khi có nội dung mới được load. Việc tương thích với các plugin khác như caching plugins hoặc SEO plugins cũng cần được kiểm tra kỹ lưỡng.

Đối với các headless CMS như Strapi, Contentful, hoặc Ghost, việc tích hợp mục lục thường được thực hiện ở phía frontend framework như React, Vue.js, hoặc Next.js. Trong trường hợp này, mục lục có thể được tạo ra trong quá trình build time hoặc runtime tùy thuộc vào architecture của website. Việc sử dụng các hook như `useEffect` trong React hoặc `mounted` trong Vue.js để trigger việc tạo mục lục sau khi component đã render là approach phổ biến. Cần đặc biệt chú ý đến việc xử lý Server Side Rendering (SSR) để tránh hydration mismatch.

```php
<?php
wp-content/plugins/auto-toc/auto-toc.php

class AutoTOC {

	public function __construct() {
		add_action('wp_enqueue_scripts', array($this, 'enqueue_scripts'));
		add_filter('the_content', array($this, 'insert_toc_placeholder'));
		add_action('wp_ajax_generate_toc', array($this, 'ajax_generate_toc'));
		add_action('wp_ajax_nopriv_generate_toc', array($this, 'ajax_generate_toc'));
	}

	public function enqueue_scripts() {
		if (is_single() && $this->should_show_toc()) {
			wp_enqueue_script(
				'auto-toc-js',
				plugin_dir_url(__FILE__) . 'assets/auto-toc.js',
				array('jquery'),
				'1.0.0',
				true
			);

			wp_enqueue_style(
				'auto-toc-css',
				plugin_dir_url(__FILE__) . 'assets/auto-toc.css',
				array(),
				'1.0.0'
			);

			wp_localize_script('auto-toc-js', 'autoTocAjax', array(
				'ajax_url' => admin_url('admin-ajax.php'),
				'nonce' => wp_create_nonce('auto_toc_nonce')
			));
		}
	}

	public function insert_toc_placeholder($content) {
		if (is_single() && $this->should_show_toc()) {
			$toc_placeholder = '<div id="auto-toc-container" class="auto-toc-wrapper">
				<div class="auto-toc-header">
					<h3>Mục lục</h3>
					<button class="auto-toc-toggle" aria-label="Thu gọn/Mở rộng mục lục">
						<span class="auto-toc-toggle-icon">−</span>
					</button>
				</div>
				<div id="auto-toc-list" class="auto-toc-content">
				</div>
			</div>';

			$paragraphs = explode('</p>', $content);
			if (count($paragraphs) > 1) {
				$content = $paragraphs[0] . '</p>' . $toc_placeholder . 
						  implode('</p>', array_slice($paragraphs, 1));
			} else {
				$content = $toc_placeholder . $content;
			}
		}

		return $content;
	}

	private function should_show_toc() {
		global $post;

		if (!$post) return false;

		$word_count = str_word_count(strip_tags($post->post_content));
		if ($word_count < 800) return false;

		$heading_count = preg_match_all('/<h[2-4][^>]*>/i', $post->post_content);
		if ($heading_count < 3) return false;

		$disable_toc = get_post_meta($post->ID, '_disable_auto_toc', true);
		if ($disable_toc) return false;

		return true;
	}

	public function ajax_generate_toc() {
		check_ajax_referer('auto_toc_nonce', 'nonce');

		$post_id = intval($_POST['post_id']);
		$post = get_post($post_id);

		if (!$post) {
			wp_die('Post not found');
		}

		$toc_html = $this->generate_toc_from_content($post->post_content);

		wp_send_json_success(array(
			'toc_html' => $toc_html
		));
	}

	private function generate_toc_from_content($content) {
		preg_match_all('/<h([2-4])[^>]*id=["\']([^"\']*)["\'][^>]*>(.*?)<\/h[2-4]>/i', 
					  $content, $matches, PREG_SET_ORDER);

		if (empty($matches)) return '';

		$toc_items = array();
		foreach ($matches as $match) {
			$level = intval($match[1]);
			$id = $match[2];
			$text = strip_tags($match[3]);

			$toc_items[] = array(
				'level' => $level,
				'id' => $id,
				'text' => $text
			);
		}

		return $this->build_toc_html($toc_items);
	}

	private function build_toc_html($items) {
		if (empty($items)) return '';

		$html = '<ul class="auto-toc-list">';
		$current_level = 2;

		foreach ($items as $item) {
			$level_diff = $item['level'] – $current_level;

			if ($level_diff > 0) {
				$html .= str_repeat('<li><ul class="auto-toc-sublist">', $level_diff);
			} elseif ($level_diff < 0) {
				$html .= str_repeat('</ul></li>', abs($level_diff));
			}

			$html .= sprintf(
				'<li class="auto-toc-item auto-toc-level-%d">
					<a href="#%s" class="auto-toc-link">%s</a>
				</li>',
				$item['level'],
				esc_attr($item['id']),
				esc_html($item['text'])
			);

			$current_level = $item['level'];
		}

		$html .= '</ul>';

		return $html;
	}
}
new AutoTOC();
?>
```

### Styling và responsive design cho mục lục

Thiết kế giao diện cho mục lục bài viết không chỉ đơn thuần là việc tạo ra một danh sách đẹp mắt mà còn phải đảm bảo tính khả dụng (usability) và trải nghiệm người dùng tối ưu trên mọi thiết bị. Việc styling mục lục cần cân bằng giữa việc làm nổi bật để người dùng dễ nhận thấy và không làm phân tán sự chú ý khỏi nội dung chính. Thông thường, mục lục nên có một background color nhẹ nhàng, border subtle và typography phù hợp với tổng thể thiết kế của website. Việc sử dụng icon hoặc numbering system cũng có thể giúp cải thiện visual hierarchy.

Responsive design cho mục lục đòi hỏi sự cân nhắc đặc biệt về việc hiển thị trên các thiết bị mobile. Trên màn hình nhỏ, mục lục có thể chiếm quá nhiều không gian và ảnh hưởng đến trải nghiệm đọc. Một approach phổ biến là tạo ra collapsible/expandable table of contents trên mobile, cho phép người dùng có thể ẩn/hiện mục lục khi cần thiết. Việc sử dụng CSS media queries để điều chỉnh kích thước font, spacing và layout của mục lục trên các breakpoint khác nhau là rất quan trọng. Ngoài ra, sticky positioning có thể được áp dụng để giữ mục lục luôn hiển thị khi người dùng scroll, nhưng cần cẩn thận để không che khuất nội dung.

Advanced styling techniques như CSS animations và transitions có thể được sử dụng để tạo ra các hiệu ứng mượt mà khi người dùng interact với mục lục. Việc highlight mục hiện tại đang được đọc (current section highlighting) có thể được implement bằng cách sử dụng Intersection Observer API kết hợp với CSS transitions. Tuy nhiên, cần đảm bảo rằng các animation này không gây distraction hoặc ảnh hưởng đến performance, đặc biệt trên các thiết bị có cấu hình thấp.

```
.auto-toc-wrapper {
	background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
	border: 1px solid #dee2e6;
	border-radius: 12px;
	margin: 2rem 0;
	padding: 0;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
	transition: all 0.3s ease;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.auto-toc-wrapper:hover {
	box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
	transform: translateY(-2px);
}

.auto-toc-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1.5rem 2rem 1rem;
	border-bottom: 1px solid #e9ecef;
	background: linear-gradient(90deg, #ffffff 0%, #f8f9fa 100%);
	border-radius: 12px 12px 0 0;
}

.auto-toc-header h3 {
	margin: 0;
	font-size: 1.25rem;
	font-weight: 600;
	color: #495057;
	display: flex;
	align-items: center;
}

.auto-toc-header h3::before {
	content: "📋";
	margin-right: 0.5rem;
	font-size: 1.1rem;
}

.auto-toc-toggle {
	background: none;
	border: none;
	font-size: 1.5rem;
	color: #6c757d;
	cursor: pointer;
	padding: 0.25rem;
	border-radius: 4px;
	transition: all 0.2s ease;
	width: 32px;
	height: 32px;
	display: flex;
	align-items: center;
	justify-content: center;
}

.auto-toc-toggle:hover {
	background-color: #e9ecef;
	color: #495057;
	transform: scale(1.1);
}

.auto-toc-content {
	padding: 1.5rem 2rem 2rem;
	transition: all 0.3s ease;
	overflow: hidden;
}

.auto-toc-content.collapsed {
	max-height: 0;
	padding-top: 0;
	padding-bottom: 0;
	opacity: 0;
}

.auto-toc-list {
	list-style: none;
	margin: 0;
	padding: 0;
	position: relative;
}

.auto-toc-list::before {
	content: '';
	position: absolute;
	left: 0;
	top: 0;
	bottom: 0;
	width: 3px;
	background: linear-gradient(to bottom, #007bff, #6610f2);
	border-radius: 2px;
}

.auto-toc-item {
	margin: 0;
	padding: 0;
	position: relative;
}

.auto-toc-link {
	display: block;
	padding: 0.75rem 0 0.75rem 1.5rem;
	color: #495057;
	text-decoration: none;
	font-size: 0.95rem;
	line-height: 1.4;
	border-radius: 6px;
	transition: all 0.2s ease;
	position: relative;
	border-left: 3px solid transparent;
	margin-left: 3px;
}

.auto-toc-link::before {
	content: '';
	position: absolute;
	left: -1.5rem;
	top: 50%;
	transform: translateY(-50%);
	width: 6px;
	height: 6px;
	background-color: #6c757d;
	border-radius: 50%;
	transition: all 0.2s ease;
}

.auto-toc-link:hover {
	background-color: rgba(0, 123, 255, 0.08);
	color: #007bff;
	border-left-color: #007bff;
	transform: translateX(4px);
}

.auto-toc-link:hover::before {
	background-color: #007bff;
	transform: translateY(-50%) scale(1.2);
}

.auto-toc-link.active {
	background-color: rgba(0, 123, 255, 0.12);
	color: #007bff;
	font-weight: 600;
	border-left-color: #007bff;
}

.auto-toc-link.active::before {
	background-color: #007bff;
	transform: translateY(-50%) scale(1.3);
}

.auto-toc-sublist {
	list-style: none;
	margin: 0.5rem 0 0 1rem;
	padding: 0;
	border-left: 2px solid #e9ecef;
	position: relative;
}

.auto-toc-level-3 .auto-toc-link {
	font-size: 0.9rem;
	padding-left: 1rem;
	color: #6c757d;
}

.auto-toc-level-4 .auto-toc-link {
	font-size: 0.85rem;
	padding-left: 0.75rem;
	color: #868e96;
	font-style: italic;
}

@media (max-width: 768px) {
	.auto-toc-wrapper {
		margin: 1.5rem -1rem;
		border-radius: 0;
		border-left: none;
		border-right: none;
	}
	
	.auto-toc-header {
		padding: 1rem 1.5rem 0.75rem;
	}
	
	.auto-toc-header h3 {
		font-size: 1.1rem;
	}
	
	.auto-toc-content {
		padding: 1rem 1.5rem 1.5rem;
	}
	
	.auto-toc-link {
		padding: 0.6rem 0 0.6rem 1rem;
		font-size: 0.9rem;
	}
	
	.auto-toc-sublist {
		margin-left: 0.75rem;
	}
	
	.auto-toc-level-3 .auto-toc-link {
		font-size: 0.85rem;
		padding-left: 0.75rem;
	}
	
	.auto-toc-level-4 .auto-toc-link {
		font-size: 0.8rem;
		padding-left: 0.5rem;
	}
}

@media (max-width: 480px) {
	.auto-toc-wrapper {
		margin: 1rem -0.5rem;
	}
	
	.auto-toc-header {
		padding: 0.75rem 1rem 0.5rem;
	}
	
	.auto-toc-content {
		padding: 0.75rem 1rem 1rem;
	}
	
	.auto-toc-link {
		padding: 0.5rem 0 0.5rem 0.75rem;
		font-size: 0.85rem;
	}
}

@media (min-width: 1200px) {
	.auto-toc-wrapper.sticky {
		position: sticky;
		top: 2rem;
		max-height: calc(100vh – 4rem);
		overflow-y: auto;
		z-index: 100;
	}
	
	.auto-toc-wrapper.sticky .auto-toc-content {
		max-height: calc(100vh – 8rem);
		overflow-y: auto;
	}
}

@keyframes progressAnimation {
	from {
		transform: scaleX(0);
	}
	to {
		transform: scaleX(1);
	}
}

.auto-toc-progress {
	position: absolute;
	top: 0;
	left: 0;
	height: 3px;
	background: linear-gradient(90deg, #007bff, #6610f2);
	transform-origin: left;
	animation: progressAnimation 0.3s ease-out;
}

@media (prefers-color-scheme: dark) {
	.auto-toc-wrapper {
		background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%);
		border-color: #4a5568;
		color: #e2e8f0;
	}
	
	.auto-toc-header {
		background: linear-gradient(90deg, #2d3748 0%, #4a5568 100%);
		border-bottom-color: #4a5568;
	}
	
	.auto-toc-header h3 {
		color: #e2e8f0;
	}
	
	.auto-toc-link {
		color: #cbd5e0;
	}
	
	.auto-toc-link:hover {
		background-color: rgba(66, 153, 225, 0.15);
		color: #63b3ed;
	}
	
	.auto-toc-link.active {
		background-color: rgba(66, 153, 225, 0.2);
		color: #63b3ed;
	}
}
```

### Tối ưu SEO và accessibility

Việc tối ưu SEO cho mục lục bài viết không chỉ giúp cải thiện thứ hạng tìm kiếm mà còn tăng khả năng hiển thị rich snippets trong kết quả tìm kiếm của Google. Structured data markup theo schema.org là một trong những yếu tố quan trọng nhất cần được implement. Việc sử dụng JSON-LD hoặc microdata để đánh dấu cấu trúc mục lục giúp search engine hiểu rõ hơn về tổ chức nội dung của trang. Bên cạnh đó, việc sử dụng proper heading hierarchy (h1, h2, h3…) một cách logic và có hệ thống cũng đóng vai trò quan trọng trong việc SEO on-page.

Accessibility (khả năng tiếp cận) là một khía cạnh không thể thiếu khi thiết kế mục lục. Việc sử dụng các thuộc tính ARIA như `role="navigation"`, `aria-label`, `aria-expanded` cho collapsible elements, và `aria-current` cho active items giúp screen readers và các assistive technologies có thể hiểu và tương tác với mục lục một cách hiệu quả. Focus management cũng rất quan trọng – khi người dùng click vào một link trong mục lục, focus nên được chuyển đến heading tương ứng một cách smooth và có thể nhận biết được bởi keyboard users.

Việc implement skip links và keyboard navigation support cũng là những yếu tố quan trọng cho accessibility. Users nên có thể navigate through mục lục bằng Tab key và activate links bằng Enter hoặc Space. Đối với những người dùng có visual impairments, việc cung cấp thông tin về vị trí hiện tại trong mục lục (Ví dụ: Mục 2 trong tổng số 5 mục) thông qua screen reader announcements sẽ rất hữu ích. Color contrast cũng cần được kiểm tra để đảm bảo đạt tiêu chuẩn WCAG 2.1 AA.

```
<nav class="auto-toc-wrapper" 
	 role="navigation" 
	 aria-label="Mục lục bài viết"
	 id="article-table-of-contents">
	 
	<div class="auto-toc-header">
		<h3 id="toc-heading">Mục lục</h3>
		<button class="auto-toc-toggle" 
				aria-expanded="true"
				aria-controls="auto-toc-list"
				aria-describedby="toc-heading"
				title="Thu gọn hoặc mở rộng mục lục">
			<span class="auto-toc-toggle-icon" aria-hidden="true">−</span>
			<span class="sr-only">Thu gọn mục lục</span>
		</button>
	</div>
	
	<div id="auto-toc-list" 
		 class="auto-toc-content"
		 aria-labelledby="toc-heading">
		 
		<ol class="auto-toc-list" role="list">
			<li class="auto-toc-item auto-toc-level-2" role="listitem">
				<a href="#section-1" 
				   class="auto-toc-link"
				   aria-describedby="toc-description-1">
					<span class="auto-toc-number" aria-hidden="true">1.</span>
					Giới thiệu về mục lục tự động
				</a>
				<span id="toc-description-1" class="sr-only">
					Chuyển đến phần giới thiệu về mục lục tự động
				</span>
				
				<ol class="auto-toc-sublist" role="list">
					<li class="auto-toc-item auto-toc-level-3" role="listitem">
						<a href="#section-1-1" 
						   class="auto-toc-link"
						   aria-current="false">
							<span class="auto-toc-number" aria-hidden="true">1.1.</span>
							Lợi ích của mục lục tự động
						</a>
					</li>
					<li class="auto-toc-item auto-toc-level-3" role="listitem">
						<a href="#section-1-2" 
						   class="auto-toc-link active"
						   aria-current="page">
							<span class="auto-toc-number" aria-hidden="true">1.2.</span>
							Khi nào nên sử dụng
						</a>
					</li>
				</ol>
			</li>
		</ol>
	</div>
</nav>

<script type="application/ld+json">
{
	"@context": "https://schema.org",
	"@type": "Article",
	"headline": "Hướng dẫn tạo mục lục bài viết trên website",
	"description": "Hướng dẫn chi tiết cách tạo và tối ưu mục lục tự động cho website",
	"tableOfContents": [
		{
			"@type": "ListItem",
			"position": 1,
			"name": "Giới thiệu về mục lục tự động",
			"url": "#section-1"
		},
		{
			"@type": "ListItem", 
			"position": 2,
			"name": "Cách triển khai mục lục",
			"url": "#section-2"
		}
	],
	"author": {
		"@type": "Person",
		"name": "Tác giả"
	},
	"datePublished": "2025-01-01",
	"publisher": {
		"@type": "Organization",
		"name": "Website Name"
	}
}
</script>
```

#### Structured Data và Schema Markup cho Search Engines

Việc implementation structured data cho mục lục bài viết là yếu tố then chốt giúp search engines hiểu rõ cấu trúc nội dung và có thể hiển thị rich snippets trong kết quả tìm kiếm. JSON-LD là format được Google khuyến nghị nhất vì tính dễ đọc và maintain. Khi implement schema markup cho article với `tableOfContents` property, Google có thể hiển thị jump links trực tiếp trong search results, giúp users có thể nhảy đến phần nội dung mong muốn ngay từ trang tìm kiếm.

Schema.org cung cấp nhiều loại markup khác nhau cho các content type khác nhau. Đối với blog posts, nên sử dụng `Article` schema với các properties như `headline`, `description`, `author`, `datePublished`, và quan trọng nhất là `tableOfContents`. Mỗi item trong table of contents nên được markup như `ListItem` với `position`, `name`, và `url`. Việc này không chỉ giúp SEO mà còn cải thiện user experience khi users có thể preview nội dung bài viết ngay từ search results.

Ngoài JSON-LD, việc sử dụng microdata hoặc RDFa cũng được support, tuy nhiên JSON-LD được ưa chuộng hơn vì không can thiệp vào HTML structure và dễ dàng maintain hơn. Khi implement structured data, cần chú ý đến việc validate thông qua Google's Rich Results Test và Schema Markup Validator để đảm bảo markup được recognize correctly. Việc monitor performance trong Google Search Console cũng rất quan trọng để track được việc rich snippets có được hiển thị hay không.

```
function generateStructuredData() {
	const article = {
		"@context": "https://schema.org",
		"@type": "Article",
		"headline": document.querySelector('h1').textContent,
		"description": document.querySelector('meta[name="description"]')?.content || '',
		"tableOfContents": [],
		"author": {
			"@type": "Person",
			"name": document.querySelector('meta[name="author"]')?.content || "Tác giả"
		},
		"datePublished": document.querySelector('meta[property="article:published_time"]')?.content || new Date().toISOString().split('T')[0],
		"publisher": {
			"@type": "Organization",
			"name": document.querySelector('meta[property="og:site_name"]')?.content || "Website"
		}
	};

	const headings = document.querySelectorAll('h2, h3, h4');
	let position = 1;

	headings.forEach(heading => {
		if (heading.id) {
			article.tableOfContents.push({
				"@type": "ListItem",
				"position": position++,
				"name": heading.textContent.trim(),
				"url": `${window.location.origin}${window.location.pathname}#${heading.id}`
			});
		}
	});

	const script = document.createElement('script');
	script.type = 'application/ld+json';
	script.textContent = JSON.stringify(article, null, 2);
	document.head.appendChild(script);
}

document.addEventListener('DOMContentLoaded', () => {
	setTimeout(generateStructuredData, 1000);
});
```

#### ARIA Labels và Screen Reader Support

Việc implement proper ARIA labels và support cho screen readers là fundamental requirement để đảm bảo mục lục có thể accessible bởi tất cả users. `role="navigation"` giúp screen readers identify mục lục như một navigation landmark, trong khi `aria-label` cung cấp descriptive label cho toàn bộ navigation section. Đối với collapsible table of contents, `aria-expanded` attribute phải được update dynamically để reflect current state của toggle button.

`aria-current` attribute đóng vai trò quan trọng trong việc indicate current page hoặc section đang được view. Khi user đang ở một section cụ thể, corresponding link trong mục lục nên có `aria-current="page"` hoặc `aria-current="location"` để screen readers có thể announce current position. Việc này đặc biệt hữu ích cho users với visual impairments vì họ có thể orientation được vị trí hiện tại trong document structure.

Live regions cũng rất quan trọng để announce changes. Khi users navigate through mục lục hoặc khi current section thay đổi, việc sử dụng `aria-live="polite"` regions có thể announce updates một cách không invasive. Screen reader users cũng benefit từ việc có clear heading hierarchy và descriptive link text. Thay vì chỉ sử dụng "Click here" hoặc generic text, link text nên descriptive và meaningful khi đọc out of context.

```
.sr-only {
	position: absolute;
	width: 1px;
	height: 1px;
	padding: 0;
	margin: -1px;
	overflow: hidden;
	clip: rect(0, 0, 0, 0);
	white-space: nowrap;
	border: 0;
}

.auto-toc-link:focus {
	outline: 2px solid #007cba;
	outline-offset: 2px;
	background-color: rgba(0, 124, 186, 0.1);
	border-radius: 3px;
}

.auto-toc-toggle:focus {
	outline: 2px solid #007cba;
	outline-offset: 2px;
	box-shadow: 0 0 0 2px rgba(0, 124, 186, 0.2);
}

@media (prefers-contrast: high) {
	.auto-toc-link {
		border: 1px solid currentColor;
		background-color: Canvas;
		color: CanvasText;
	}
	
	.auto-toc-link:hover,
	.auto-toc-link:focus {
		background-color: Highlight;
		color: HighlightText;
	}
}

@media (prefers-reduced-motion: reduce) {
	.auto-toc-content {
		transition: none;
	}
	
	.auto-toc-link {
		scroll-behavior: auto;
	}
}

.auto-toc-link {
	color: #1a1a1a;
}

.auto-toc-link:visited {
	color: #6f2c91;
}

.auto-toc-link:hover,
.auto-toc-link:focus {
	color: #004080;
	background-color: #f0f8ff;
}
```

#### Keyboard Navigation và Focus Management

Keyboard navigation support là requirement bắt buộc cho accessibility compliance và cung cấp better user experience cho nhiều user groups khác nhau. Users phải có thể navigate through tất cả interactive elements trong mục lục bằng Tab key và activate links bằng Enter hoặc Space key. Focus indicators phải visible và có sufficient contrast để users có thể track được current focus position.

Focus management trở nên phức tạp hơn với collapsible table of contents. Khi users collapse hoặc expand mục lục, focus nên được maintained appropriately. Nếu users đang focus vào một item trong collapsed section, focus nên được moved đến toggle button hoặc next available focusable element. Khi expand lại, có thể restore focus đến previously focused element nếu appropriate.

Arrow keys navigation cũng có thể được implement để enhance keyboard experience. Users có thể sử dụng Up và Down arrows để move through mục lục items, và Left/Right arrows để collapse/expand subsections. Tuy nhiên, việc này cần được implement carefully để không conflict với browser's default keyboard behaviors và cần có clear indication cho users về available keyboard shortcuts thông qua instruction text hoặc help documentation.

```
class AccessibleTableOfContents {
	constructor(tocElement) {
		this.toc = tocElement;
		this.focusableElements = [];
		this.currentFocusIndex = -1;
		this.init();
	}

	init() {
		this.updateFocusableElements();
		this.bindKeyboardEventListeners();
		this.bindClickEventListeners();
		this.setupAriaLiveRegion();
	}

	updateFocusableElements() {
		this.focusableElements = Array.from(
			this.toc.querySelectorAll('a[href], button:not([disabled])')
		);
	}

	bindKeyboardEventListeners() {
		this.toc.addEventListener('keydown', (e) => {
			switch(e.key) {
				case 'ArrowDown':
					e.preventDefault();
					this.moveFocus(1);
					break;
				case 'ArrowUp':
					e.preventDefault();
					this.moveFocus(-1);
					break;
				case 'Home':
					e.preventDefault();
					this.setFocus(0);
					break;
				case 'End':
					e.preventDefault();
					this.setFocus(this.focusableElements.length – 1);
					break;
				case 'Enter':
				case ' ':
					if (e.target.classList.contains('auto-toc-toggle')) {
						e.preventDefault();
						this.toggleSection(e.target);
					}
					break;
			}
		});
	}

	moveFocus(direction) {
		if (this.focusableElements.length === 0) return;
		
		const currentElement = document.activeElement;
		const currentIndex = this.focusableElements.indexOf(currentElement);
		
		let newIndex = currentIndex + direction;
		
		if (newIndex < 0) {
			newIndex = this.focusableElements.length – 1;
		} else if (newIndex >= this.focusableElements.length) {
			newIndex = 0;
		}
		
		this.setFocus(newIndex);
	}

	setFocus(index) {
		if (index >= 0 && index < this.focusableElements.length) {
			this.focusableElements[index].focus();
			this.currentFocusIndex = index;
			this.announceCurrentItem(index);
		}
	}

	toggleSection(toggleButton) {
		const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
		const targetId = toggleButton.getAttribute('aria-controls');
		const targetElement = document.getElementById(targetId);
		
		toggleButton.setAttribute('aria-expanded', !isExpanded);
		
		if (targetElement) {
			targetElement.style.display = isExpanded ? 'none' : 'block';
			
			const icon = toggleButton.querySelector('.auto-toc-toggle-icon');
			if (icon) {
				icon.textContent = isExpanded ? '+' : '−';
			}
			
			const srText = toggleButton.querySelector('.sr-only');
			if (srText) {
				srText.textContent = isExpanded ? 'Mở rộng mục lục' : 'Thu gọn mục lục';
			}
			
			this.announceToggle(!isExpanded);
		}
		
		setTimeout(() => {
			this.updateFocusableElements();
		}, 100);
	}

	setupAriaLiveRegion() {
		if (!document.getElementById('toc-announcements')) {
			const liveRegion = document.createElement('div');
			liveRegion.id = 'toc-announcements';
			liveRegion.setAttribute('aria-live', 'polite');
			liveRegion.setAttribute('aria-atomic', 'true');
			liveRegion.className = 'sr-only';
			document.body.appendChild(liveRegion);
		}
	}

	announceCurrentItem(index) {
		const element = this.focusableElements[index];
		const liveRegion = document.getElementById('toc-announcements');
		
		if (element && liveRegion) {
			const itemText = element.textContent.trim();
			const totalItems = this.focusableElements.length;
			const announcement = `${itemText}, mục ${index + 1} trong ${totalItems}`;
			
			liveRegion.textContent = announcement;
		}
	}

	announceToggle(isExpanded) {
		const liveRegion = document.getElementById('toc-announcements');
		if (liveRegion) {
			liveRegion.textContent = isExpanded ? 'Mục lục đã được mở rộng' : 'Mục lục đã được thu gọn';
		}
	}

	handleLinkClick(link) {
		const targetId = link.getAttribute('href').substring(1);
		const targetElement = document.getElementById(targetId);
		
		if (targetElement) {
			targetElement.scrollIntoView({ 
				behavior: 'smooth', 
				block: 'start' 
			});
			
			setTimeout(() => {
				if (targetElement.setAttribute) {
					targetElement.setAttribute('tabindex', '-1');
					targetElement.focus();
					
					setTimeout(() => {
						targetElement.removeAttribute('tabindex');
					}, 1000);
				}
			}, 500);
		}
	}
}

document.addEventListener('DOMContentLoaded', () => {
	const tocElement = document.getElementById('article-table-of-contents');
	if (tocElement) {
		new AccessibleTableOfContents(tocElement);
		
		tocElement.addEventListener('click', (e) => {
			if (e.target.matches('a[href^="#"]')) {
				e.preventDefault();
				const toc = new AccessibleTableOfContents(tocElement);
				toc.handleLinkClick(e.target);
			}
		});
	}
});
```

## Kết luận

Việc tạo mục lục bài viết tự động trên website là một kỹ thuật quan trọng giúp cải thiện đáng kể trải nghiệm người dùng và hiệu quả SEO. Thông qua các hướng dẫn chi tiết trong bài viết này, chúng ta đã tìm hiểu từ những khái niệm cơ bản về table of contents (mục lục) cho đến các kỹ thuật triển khai phức tạp và tối ưu chuyên sâu. Mục lục không chỉ đơn thuần là một danh sách các tiêu đề, mà còn là một navigation tool mạnh mẽ giúp users có thể dễ dàng điều hướng qua nội dung dài và phức tạp.

### Tổng quan lại về phương pháp tạo mục lục bài viết trên website

Từ phần đầu của bài viết, chúng ta đã hiểu rõ được tầm quan trọng của mục lục trong việc cải thiện user experience, đặc biệt đối với những bài viết dài có nhiều sections và subsections. Việc có một mục lục tốt không chỉ giúp readers có thể scan qua nội dung một cách nhanh chóng mà còn cho phép họ jump đến phần nội dung mong muốn ngay lập tức. Điều này đặc biệt quan trọng trong thời đại digital hiện tại khi attention span của users ngày càng ngắn và họ muốn access thông tin một cách nhanh chóng và hiệu quả.

Về mặt kỹ thuật, chúng ta đã học được cách implement một hệ thống mục lục hoàn chỉnh từ HTML structure cơ bản cho đến JavaScript logic phức tạp. Việc sử dụng `document.querySelectorAll()` để tự động detect headings, tạo navigation structure, và implement smooth scrolling đã được trình bày một cách chi tiết với các ví dụ code thực tế. Quan trọng hơn, chúng ta đã tìm hiểu cách customize mục lục để phù hợp với design và functionality requirements cụ thể của từng website.

Phần tích hợp với các CMS phổ biến như WordPress, Drupal, và các JavaScript frameworks đã cung cấp những insights thực tế về cách deploy mục lục trong production environments. Việc hiểu được cách mục lục tương tác với existing themes, plugins, và custom code là crucial để avoid conflicts và ensure compatibility. Responsive design considerations cũng được emphasis để đảm bảo mục lục hoạt động tốt trên tất cả devices và screen sizes.

```
class CompleteTOCSystem {
	constructor(options = {}) {
		this.options = {
			containerSelector: options.containerSelector || '#index',
			headingSelectors: options.headingSelectors || 'h2, h3, h4, h5, h6',
			maxItems: options.maxItems || null,
			enableSmoothScroll: options.enableSmoothScroll !== false,
			enableKeyboardNav: options.enableKeyboardNav !== false,
			enableAccessibility: options.enableAccessibility !== false,
			enableSEO: options.enableSEO !== false,
			autoCollapse: options.autoCollapse || false,
			activeClass: options.activeClass || 'active',
			…options
		};
		
		this.container = document.querySelector(this.options.containerSelector);
		this.headings = [];
		this.tocElement = null;
		this.isInitialized = false;
		
		if (this.container) {
			this.init();
		}
	}
	
	init() {
		this.collectHeadings();
		this.generateTOC();
		this.bindEvents();
		this.setupAccessibility();
		this.generateStructuredData();
		this.isInitialized = true;
		
		this.container.dispatchEvent(new CustomEvent('tocInitialized', {
			detail: { toc: this }
		}));
	}
	
	collectHeadings() {
		const headings = document.querySelectorAll(this.options.headingSelectors);
		this.headings = Array.from(headings).map((heading, index) => {
			if (!heading.id) {
				heading.id = `heading-${index + 1}`;
			}
			
			return {
				element: heading,
				id: heading.id,
				text: heading.textContent.trim(),
				level: parseInt(heading.tagName.charAt(1)),
				index: index
			};
		});
		
		if (this.options.maxItems && this.headings.length > this.options.maxItems) {
			this.headings = this.headings.slice(0, this.options.maxItems);
		}
	}
	
	generateTOC() {
		if (this.headings.length === 0) return;
		
		const tocWrapper = document.createElement('nav');
		tocWrapper.className = 'auto-toc-wrapper';
		tocWrapper.setAttribute('role', 'navigation');
		tocWrapper.setAttribute('aria-label', 'Mục lục bài viết');
		
		const tocHeader = document.createElement('div');
		tocHeader.className = 'auto-toc-header';
		tocHeader.innerHTML = `
			<h3>Mục lục</h3>
			${this.options.autoCollapse ? `
				<button class="auto-toc-toggle" aria-expanded="true">
					<span aria-hidden="true">−</span>
					<span class="sr-only">Thu gọn mục lục</span>
				</button>
			` : ''}
		`;
		
		const tocList = this.createNestedList();
		tocWrapper.appendChild(tocHeader);
		tocWrapper.appendChild(tocList);
		
		this.container.appendChild(tocWrapper);
		this.tocElement = tocWrapper;
	}
	
	createNestedList() {
		const rootList = document.createElement('ol');
		rootList.className = 'auto-toc-list';
		
		let currentList = rootList;
		let listStack = [rootList];
		let lastLevel = 0;
		
		this.headings.forEach(heading => {
			const listItem = document.createElement('li');
			listItem.className = `auto-toc-item auto-toc-level-${heading.level}`;
			
			const link = document.createElement('a');
			link.href = `#${heading.id}`;
			link.textContent = heading.text;
			link.className = 'auto-toc-link';
			
			if (this.options.enableAccessibility) {
				link.setAttribute('aria-describedby', `toc-desc-${heading.index}`);
				const description = document.createElement('span');
				description.id = `toc-desc-${heading.index}`;
				description.className = 'sr-only';
				description.textContent = `Chuyển đến phần ${heading.text}`;
				listItem.appendChild(description);
			}
			
			listItem.appendChild(link);
			
			if (heading.level > lastLevel) {
				const newList = document.createElement('ol');
				newList.className = 'auto-toc-sublist';
				const lastItem = currentList.lastElementChild;
				if (lastItem) {
					lastItem.appendChild(newList);
				}
				listStack.push(newList);
				currentList = newList;
			} else if (heading.level < lastLevel) {
				const levelDiff = lastLevel – heading.level;
				for (let i = 0; i < levelDiff; i++) {
					listStack.pop();
				}
				currentList = listStack[listStack.length – 1];
			}
			
			currentList.appendChild(listItem);
			lastLevel = heading.level;
		});
		
		return rootList;
	}
	
	bindEvents() { /* … */ }
	setupAccessibility() { /* … */ }
	generateStructuredData() { /* … */ }
	updateActiveItem() { /* … */ }
	destroy() { /* … */ }
}

document.addEventListener('DOMContentLoaded', () => {
	const toc = new CompleteTOCSystem({
		containerSelector: '#table-of-contents',
		headingSelectors: 'h2, h3, h4',
		maxItems: 50,
		enableSmoothScroll: true,
		enableKeyboardNav: true,
		enableAccessibility: true,
		enableSEO: true,
		autoCollapse: true
	});
	
	document.addEventListener('tocInitialized', (e) => {
		console.log('Table of Contents initialized:', e.detail.toc);
	});
});
```

### Tương lai và xu hướng phát triển khi tạo mục bài viết

Nhìn về tương lai, technology stack cho việc tạo mục lục sẽ tiếp tục evolve với sự phát triển của website standards và user expectations. Progressive Website Apps (PWAs) và mobile-first design đang trở thành standard, điều này đòi hỏi mục lục phải được optimize cho touch interactions và smaller screens. Machine learning và AI cũng sẽ đóng vai trò quan trọng trong việc automatically generate more intelligent table of contents dựa trên content analysis và user behavior patterns.

Voice search và voice navigation cũng là một trend quan trọng cần được consider. Với sự phát triển của voice assistants và voice-controlled browsing, mục lục cần được design để support voice commands và audio feedback. Điều này đòi hỏi việc implement advanced ARIA markup và speech synthesis capabilities. Virtual và Augmented Reality cũng sẽ tạo ra new opportunities cho immersive navigation experiences, đặc biệt trong educational và technical documentation contexts.

Website Components và modern JavaScript frameworks như React, Vue, và Angular đang reshape cách chúng ta build interactive elements. Future table of contents implementations sẽ likely leverage these technologies để create more modular, reusable, và maintainable solutions. Server-side rendering và static site generation cũng đang become more important cho SEO và performance, điều này đòi hỏi careful consideration về cách mục lục được generated và rendered.

```
.auto-toc-wrapper {
	container-type: inline-size;

	display: grid;
	grid-template-rows: auto 1fr;
	gap: 1rem;

	--toc-bg-color: light-dark(#ffffff, #1a1a1a);
	--toc-text-color: light-dark(#333333, #e0e0e0);
	--toc-accent-color: light-dark(#007cba, #4a9eff);
	--toc-border-radius: 0.5rem;
	--toc-spacing: 1rem;

	background-color: var(--toc-bg-color);
	color: var(--toc-text-color);
	border-radius: var(--toc-border-radius);
	padding: var(--toc-spacing);
	
	backdrop-filter: blur(10px) saturate(180%);
	border: 1px solid color-mix(in srgb, currentColor 10%, transparent);
}

@container (max-width: 300px) {
	.auto-toc-wrapper {
		font-size: 0.875rem;
		--toc-spacing: 0.75rem;
	}
}

@container (min-width: 600px) {
	.auto-toc-wrapper {
		position: sticky;
		top: 2rem;
		max-height: calc(100vh – 4rem);
		overflow-y: auto;
	}
}

.auto-toc-wrapper[data-theme="dark"] {
	--toc-bg-color: #2d2d2d;
	--toc-text-color: #e0e0e0;
	--toc-accent-color: #4a9eff;
}

.auto-toc-wrapper[data-theme="high-contrast"] {
	--toc-bg-color: Canvas;
	--toc-text-color: CanvasText;
	--toc-accent-color: Highlight;
	border: 2px solid currentColor;
}

.auto-toc-link {
	transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
	border-radius: 0.25rem;
	padding: 0.25rem 0.5rem;
	display: block;
	text-decoration: none;
	color: inherit;
	
	&:hover {
		background-color: color-mix(in srgb, var(--toc-accent-color) 10%, transparent);
		transform: translateX(0.25rem);
	}
	
	&:focus-visible {
		outline: 2px solid var(--toc-accent-color);
		outline-offset: 2px;
	}
	
	&.active {
		background-color: var(--toc-accent-color);
		color: white;
		font-weight: 600;
	}
}

@supports (animation-timeline: scroll()) {
	.auto-toc-progress {
		animation: toc-progress linear;
		animation-timeline: scroll(root);
	}
	
	@keyframes toc-progress {
		from { width: 0%; }
		to { width: 100%; }
	}
}
```

Kết luận lại, việc master technique tạo mục lục bài viết tự động không chỉ improve technical skills mà còn demonstrate understanding về user experience, accessibility, và SEO best practices. Đây là một skill set valuable trong modern website development và sẽ continue to be relevant khi website standards và user expectations evolve. Việc implement một mục lục comprehensive đòi hỏi sự kết hợp của technical expertise, design sensibility, và user empathy – tất cả đều là qualities quan trọng của một website developer giỏi.

Thông qua hành trình tìm hiểu từ những khái niệm cơ bản cho đến các kỹ thuật advanced, chúng ta đã thấy rằng một mục lục tốt không chỉ đơn thuần là một danh sách links mà là một navigation system hoàn chỉnh, được thiết kế để serve users với diverse needs và capabilities. Từ việc đảm bảo accessibility cho người khuyết tật, tối ưu SEO cho search engines, cho đến việc cung cấp smooth user experience trên mọi devices – tất cả đều yêu cầu sự chú ý đến detail và understanding sâu sắc về website technologies.

Điều quan trọng nhất là luôn nhớ rằng technology chỉ là công cụ để solve real problems và improve lives. Một mục lục được implement tốt có thể dramatically improve reading experience, giúp users save time, reduce frustration, và access information more effectively. Đây chính là lý do tại sao việc đầu tư thời gian và effort để tạo ra high-quality table of contents là absolutely worthwhile cho bất kỳ website nào có content dài và structured.

<figure><img src="https://banmaixanh.vercel.app/image/cover/001-144.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>