import { getBlogPermalink } from './utils/permalinks';

export const headerData = {

	links: [

		{
			text: "Trang chủ",
			links: [
				{ text: "Về trang chủ", href: "https://nhavantuonglai.com" },
				{ text: "Giới thiệu", href: "https://nhavantuonglai.com/about" },
				{
					text: "Thông tin",
					href: "https://nhavantuonglai.com",
					links: [
						{ text: "Điều khoản", href: "https://nhavantuonglai.com/term" },
						{ text: "Chính sách", href: "https://nhavantuonglai.com/policy" },
						{ text: "Phiên bản", href: "https://nhavantuonglai.com/version" },
					],
				},
				{
					text: "Nguồn dữ liệu",
					href: "https://nhavantuonglai.com",
					links: [
						{ text: "RSS", href: "https://nhavantuonglai.com/rss.xml" },
						{ text: "Sitemaps", href: "https://nhavantuonglai.com/sitemap-0.xml" },
					],
				},
				{ text: "Trạng thái", href: "https://info.nhavantuonglai.com/openstatus" },
			],
		},

		{
			text: "Viết lách",
			links: [
				{ text: "Bài mới nhất", href: "https://nhavantuonglai.com/article" },
				{ text: "Tuyển tập viết lách", href: "https://nhavantuonglai.com/tags/tuyen-tap-viet-lach" },
				{
					text: "Kỹ năng viết lách",
					href: "https://nhavantuonglai.com/tags/ky-nang-viet",
					links: [
						{ text: "Viết sách", href: "https://nhavantuonglai.com/tags/viet-sach" },
						{ text: "Viết content", href: "https://nhavantuonglai.com/tags/viet-content" },
						{ text: "Content SEO", href: "https://nhavantuonglai.com/tags/content-seo" },
						{ text: "Tối ưu content", href: "https://nhavantuonglai.com/tags/toi-uu-content" },
					],
				},
			],
		},

		{
			text: "Tự nhiên",
			links: [
				{ text: "Tổng quát", href: "https://nhavantuonglai.com/tags/khoa-hoc" },
				{ text: "Toán học", href: "https://nhavantuonglai.com/tags/vat-ly-hoc" },
				{ text: "Sinh học", href: "https://nhavantuonglai.com/tags/sinh-hoc" },
				{ text: "Vật lý học", href: "https://nhavantuonglai.com/tags/vat-ly-hoc" },
				{
					text: "Vũ trụ học",
					href: "https://nhavantuonglai.com/tags/vu-tru",
					links: [
						{ text: "Ngoại hành tinh", href: "https://nhavantuonglai.com/tags/ngoai-hanh-tinh" },
						{ text: "Trái đất", href: "https://nhavantuonglai.com/tags/trai-dat" },
						{ text: "Mặt trời", href: "https://nhavantuonglai.com/tags/mat-troi" },
						{ text: "Vật chất tối", href: "https://nhavantuonglai.com/tags/vat-chat-toi" },
						{ text: "Vật lý lượng tử", href: "https://nhavantuonglai.com/tags/vat-ly-luong-tu" },
					],
				},
			],
		},

		{
			text: "Xã hội",
			links: [
				{ text: "Tổng quát", href: "https://nhavantuonglai.com/tags/xa-hoi-hoc" },
				{ text: "Văn hóa", href: "https://nhavantuonglai.com/tags/van-hoa" },
				{ text: "Tư duy", href: "https://nhavantuonglai.com/tags/tu-duy" },
				{
					text: "Lịch sử",
					href: "https://nhavantuonglai.com/tags/lich-su",
					links: [
						{ text: "Lịch sử Việt Nam", href: "https://nhavantuonglai.com/tags/lich-su-viet-nam" },
						{ text: "Lịch sử thế giới", href: "https://nhavantuonglai.com/tags/lich-su-the-gioi" },
						{ text: "Lịch sử cổ đại", href: "https://nhavantuonglai.com/tags/lich-su-co-dai" },
						{ text: "Lịch sử trung đại", href: "https://nhavantuonglai.com/tags/lich-su-trung-dai" },
						{ text: "Lịch sử hiện đại", href: "https://nhavantuonglai.com/tags/lich-su-hien-dai" },
					],
				},
				{
					text: "Tâm lý học",
					href: "https://nhavantuonglai.com/tags/tam-ly-hoc",
					links: [
						{ text: "Tham vấn tâm lý", href: "https://nhavantuonglai.com/tags/tham-van-tam-ly" },
						{ text: "Tội phạm học", href: "https://nhavantuonglai.com/tags/toi-pham-hoc" },
						{ text: "Vấn đề tâm lý", href: "https://nhavantuonglai.com/tags/van-de-tam-ly" },
						{ text: "Tâm lý động vật", href: "https://nhavantuonglai.com/tags/tam-ly-dong-vat" },
					],
				},
				{
					text: "Tôn giáo",
					href: "https://nhavantuonglai.com/tags/ton-giao",
					links: [
						{ text: "Phật giáo", href: "https://nhavantuonglai.com/tags/phat-giao" },
						{ text: "Khổng giáo", href: "https://nhavantuonglai.com/tags/khong-giao" },
						{ text: "Đạo giáo", href: "https://nhavantuonglai.com/tags/dao-giao" },
						{ text: "Hồi giáo", href: "https://nhavantuonglai.com/tags/hoi-giao" },
						{ text: "Thiên chúa", href: "https://nhavantuonglai.com/tags/thien-chua" },
					],
				},
				{
					text: "Triết học",
					href: "https://nhavantuonglai.com/tags/triet-hoc",
					links: [
						{ text: "Chủ nghĩa hiện sinh", href: "https://nhavantuonglai.com/tags/chu-nghia-hien-sinh" },
						{ text: "Chủ nghĩa khắc kỷ", href: "https://nhavantuonglai.com/tags/chu-nghia-khac-ky" },
						{ text: "Chủ nghĩa bi quan", href: "https://nhavantuonglai.com/tags/chu-nghia-bi-quan" },
						{ text: "Chủ nghĩa siêu hình", href: "https://nhavantuonglai.com/tags/chu-nghia-sieu-hinh" },
						{ text: "Chủ nghĩa vô thần", href: "https://nhavantuonglai.com/tags/chu-nghia-vo-than" },

					],
				},
			],
		},

		{
			text: "Lập trình",
			links: [
				{ text: "Tổng quát", href: "https://nhavantuonglai.com/tags/developer" },
				{ text: "Blockchain", href: "https://nhavantuonglai.com/tags/blockchain" },
				{
					text: "Website",
					href: "https://nhavantuonglai.com/tags/website",
					links: [
						{ text: "Xây dựng website", href: "https://nhavantuonglai.com/tags/website-builder" },
						{ text: "Tối ưu website", href: "https://nhavantuonglai.com/tags/toi-uu-website" },
						{ text: "Giao diện website", href: "https://nhavantuonglai.com/tags/giao-dien-website" },
						{ text: "Tương tác website", href: "https://nhavantuonglai.com/tags/tuong-tac-website" },
					],
				},
				{
					text: "Phần mềm",
					href: "https://nhavantuonglai.com/tags/phan-mem",
					links: [
						{ text: "Phần mềm Android", href: "https://nhavantuonglai.com/tags/phan-mem-android" },
						{ text: "Phần mềm iOS", href: "https://nhavantuonglai.com/tags/phan-mem-ios" },
						{ text: "Phần mềm Windos", href: "https://nhavantuonglai.com/tags/phan-mem-windos" },
						{ text: "Phần mềm mở", href: "https://nhavantuonglai.com/tags/phan-mem-mo" },
					],
				},
				{
					text: "Bảo mật",
					href: "https://nhavantuonglai.com/tags/bao-mat",
					links: [
						{ text: "Bảo mật dữ liệu", href: "https://nhavantuonglai.com/tags/bao-mat-du-lieu" },
						{ text: "Bảo mật thông tin", href: "https://nhavantuonglai.com/tags/bao-mat-thong-tin" },
					],
				},
			],
		},

		{
			text: "Công cụ",
			links: [
				{ text: "Tổng quát", href: "https://nhavantuonglai.com/analytics" },
				{
					text: "Văn bản",
					href: "https://nhavantuonglai.com/analytics",
					links: [
						{ text: "Đếm chữ văn bản", href: "https://nhavantuonglai.com/analytics/count" },
						{ text: "In hoa văn bản", href: "https://nhavantuonglai.com/analytics/lower" },
						{ text: "In đậm văn bản", href: "https://nhavantuonglai.com/analytics/unicode" },
						{ text: "Bộ biểu tượng Emoji", href: "https://nhavantuonglai.com/analytics/emoji" },
					],
				},
				{
					text: "Trực tuyến",
					href: "https://nhavantuonglai.com/analytics",
					links: [
						{ text: "Nghe FM trực tuyến", href: "https://nhavantuonglai.com/analytics/radio" },
						{ text: "Đọc báo trực tuyến", href: "https://nhavantuonglai.com/analytics/newspaper" },
						{ text: "Bây giờ là mấy giờ", href: "https://nhavantuonglai.com/analytics/time" },
						{ text: "Đếm ngược Giao thừa", href: "https://nhavantuonglai.com/analytics/countdown" },
					],
				},
				{
					text: "AI",
					href: "https://nhavantuonglai.com/analytics",
					links: [
						{ text: "Trò chuyện AI", href: "https://nhavantuonglai.com/analytics/integrate" },
						{ text: "Dịch phụ đề", href: "https://nhavantuonglai.com/analytics/subtitle" },
						{ text: "Đọc hình OCR", href: "https://nhavantuonglai.com/analytics/ocr" },
						{ text: "Đọc chữ", href: "https://nhavantuonglai.com/analytics/voicemaker" },
					],
				},
				{
					text: "Dữ liệu",
					href: "https://nhavantuonglai.com/analytics",
					links: [
						{ text: "Phạt nguội AI", href: "https://nhavantuonglai.com/analytics/phat-nguoi" },
						{ text: "Kiểm tra số tài khoản", href: "https://nhavantuonglai.com/analytics/so-tai-khoan" },
						{ text: "Kiểm tra mã số thuế", href: "https://nhavantuonglai.com/analytics/ma-so-thue" },
						{ text: "Từ điển trực tuyến", href: "https://nhavantuonglai.com/analytics/dictionary" },
					],
				},
				{
					text: "Trò chơi",
					href: "https://nhavantuonglai.com/analytics",
					links: [
						{ text: "Rắn săn mồi", href: "https://nhavantuonglai.com/analytics/snake" },
						{ text: "Xếp hình", href: "https://nhavantuonglai.com" },
						{ text: "Giải đố", href: "https://nhavantuonglai.com" },
						{ text: "Mê cung", href: "https://nhavantuonglai.com" },

					],
				},
			],
		},

		{
			text: "Tệp lệnh",
			links: [
				{ text: "Tổng quát", href: "https://nhavantuonglai.com" },
				{
					text: "Dữ liệu",
					href: "https://nhavantuonglai.com",
					links: [
						{ text: "Đổi tên tệp, thư mục", href: "https://nhavantuonglai.com/package/folder-attribute" },
						{ text: "Di chuyển tệp, thư mục", href: "https://nhavantuonglai.com/package/folder-execute" },
					],
				},
				{
					text: "Liên kết",
					href: "https://nhavantuonglai.com",
					links: [
						{ text: "Tổng hợp sitemap", href: "https://nhavantuonglai.com/package/sitemap-extractor" },
						{ text: "Tìm liên kết bên ngoài", href: "https://nhavantuonglai.com/package/sitemap-extractor" },
					],
				},
				{
					text: "Giao diện",
					href: "https://nhavantuonglai.com",
					links: [
						{ text: "Hiệu ứng nền trường sao", href: "https://nhavantuonglai.com/package/javascript-starfield" },
						{ text: "Hiệu ứng tải supernova", href: "https://nhavantuonglai.com/package/javascript-supernova" },
						{ text: "Mục lục bài viết", href: "https://nhavantuonglai.com/package/table-of-content" },
						{ text: "Biên tập tệp markdown", href: "https://nhavantuonglai.com/package/markdown-attribute" },
					],
				},
				{
					text: "Công cụ AI",
					href: "https://nhavantuonglai.com",
					links: [
						{ text: "Trò chuyện với Gemini", href: "https://nhavantuonglai.com/package/gemini-chat" },
					],
				},
				{
					text: "Phân tích",
					href: "https://nhavantuonglai.com",
					links: [
						{ text: "NPMJS Analytics", href: "https://nhavantuonglai.com/package/npmjs-analytics" },

					],
				},
			],
		},

		{
			text: "Tiện ích",
			links: [
				{ text: "In tài liệu", href: "https://nhavantuonglai.com" },
				{ text: "Chụp ảnh màn hình", href: "https://nhavantuonglai.com" },
				{ text: "Dịch văn bản", href: "https://nhavantuonglai.com" },
			],
		},

		{
			text: "Hỗ trợ",
			links: [
				{
					text: "Liên lạc",
					href: "https://nhavantuonglai.com/contact",
					links: [
						{ text: "Gửi thư", href: "mailto:info@nhavantuonglai.com" },
						{ text: "Nhắn tin", href: "https://info.nhavantuonglai.com/instagram" },
						{ text: "Điện thoại", href: "https://nhavantuonglai.com" },
					],
				},
				{
					text: "Thư viện ảnh",
					href: "https://nhavantuonglai.com",
					links: [
						{ text: "500px", href: "https://info.nhavantuonglai.com/500px" },
						{ text: "Flickr", href: "https://info.nhavantuonglai.com/flickr" },
						{ text: "Adobe", href: "https://nhavantuonglai.com" },
						{ text: "Freepik", href: "https://nhavantuonglai.com" },

					],
				},
				{
					text: "Mạng xã hội",
					href: "https://nhavantuonglai.com",
					links: [
						{ text: "Facebook", href: "https://nhavantuonglai.com" },
						{ text: "Linkedin", href: "https://info.nhavantuonglai.com/linkedin" },
						{ text: "X", href: "https://info.nhavantuonglai.com/x" },

					],
				},
				{
					text: "Mã nguồn mở",
					href: "https://nhavantuonglai.com",
					links: [
						{ text: "Github", href: "https://info.nhavantuonglai.com/github" },
						{ text: "Open", href: "https://info.nhavantuonglai.com/article-open" },
						{ text: "Terminal", href: "https://info.nhavantuonglai.com/terminal-open" },
					],
				},
			],
		},

	],
};

export const footerData = {

	links: [

		{

			title: 'Công cụ văn bản',
			links: [
				{
					text: 'Đếm số chữ',
					href: 'https://nhavantuonglai.com/analytics/count',
				},
				{
					text: 'Chuyển chữ hoa',
					href: 'https://nhavantuonglai.com/analytics/lower',
				},
				{
					text: 'Chuyển chữ đậm',
					href: 'https://nhavantuonglai.com/analytics/unicode',
				},
				{
					text: 'Biểu tượng Emoji',
					href: 'https://nhavantuonglai.com/analytics/emoji',
				},
			],
		},

		{
			title: 'Công cụ giải trí',
			links: [
				{
					text: 'Nghe Radio trực tuyến',
					href: 'https://nhavantuonglai.com/analytics/radio'
				},
				{
					text: 'Xem video trực tuyến',
					href: 'https://nhavantuonglai.com/analytics/streaming'
				},
				{
					text: 'Thời gian lúc này',
					href: 'https://nhavantuonglai.com/analytics/time'
				},
				{
					text: 'Đếm ngược giao thừa',
					href: 'https://nhavantuonglai.com/analytics/countdown'
				},
			],
		},

		{
			title: 'Công cụ AI',
			links: [
				{
					text: 'Trò chuyện AI',
					href: 'https://nhavantuonglai.com/analytics/integrate'
				},
				{
					text: 'Dịch phụ đề',
					href: 'https://nhavantuonglai.com/analytics/subtitle'
				},
				{
					text: 'Đọc văn bản',
					href: 'https://nhavantuonglai.com/analytics/ocr'
				},
				{
					text: 'Chuyển giọng nói',
					href: 'https://nhavantuonglai.com/analytics/voicemaker'
				},
			],
		},

		{
			title: 'Công cụ dữ liệu',
			links: [
				{
					text: 'Kiểm tra phạt nguội',
					href: 'https://nhavantuonglai.com/analytics/phat-nguoi'
				},
				{
					text: 'Tìm số tài khoản',
					href: 'https://nhavantuonglai.com/analytics/so-tai-khoan'
				},
				{
					text: 'Tìm mã số thuế',
					href: 'https://nhavantuonglai.com/analytics/ma-so-thue'
				},
				{
					text: 'Từ điển trực tuyến',
					href: 'https://nhavantuonglai.com/analytics/dictionary'
				},
			],
		},

	],

	secondaryLinks: [

		{
			text: 'Điều khoản',
			href: 'https://nhavantuonglai.com/term'
		},

		{
			text: 'Chính sách',
			href: 'https://nhavantuonglai.com/policy'
		},

		{
			text: 'v25.04.13',
			href: 'https://nhavantuonglai.com/version'
		},

	],

	socialLinks: [

		{
			ariaLabel: 'X',
			icon: 'tabler:brand-x',
			href: 'https://info.nhavantuonglai.com/x'
		},

		{
			ariaLabel: 'Instagram',
			icon: 'tabler:brand-instagram',
			href: 'https://info.nhavantuonglai.com/instagram'
		},

		{
			ariaLabel: 'Linkedin',
			icon: 'tabler:brand-linkedin',
			href: 'https://info.nhavantuonglai.com/linkedin'
		},

		{
			ariaLabel: 'RSS',
			icon: 'tabler:rss',
			href: 'https://nhavantuonglai.com/rss.xml'
		},

	],

};