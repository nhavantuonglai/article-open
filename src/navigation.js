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
					links: [
						{ text: "Điều khoản", href: "https://nhavantuonglai.com/term" },
						{ text: "Chính sách", href: "https://nhavantuonglai.com/policy" },
						{ text: "Phiên bản", href: "https://nhavantuonglai.com/vesion" },
					],
				},
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
						{ text: "Viết sách" },
						{ text: "Viết content" },
						{ text: "Content SEO" },
						{ text: "Tối ưu content" },
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
						{ text: "Lịch sử Việt Nam" },
						{ text: "Lịch sử thế giới" },
						{ text: "Lịch sử cổ đại" },
						{ text: "Lịch sử trung đại" },
						{ text: "Lịch sử hiện đại" },
					],
				},
				{
					text: "Tâm lý học",
					href: "https://nhavantuonglai.com/tags/tam-ly-hoc",
					links: [
						{ text: "Tham vấn tâm lý" },
						{ text: "Tội phạm học" },
						{ text: "Vấn đề tâm lý" },
						{ text: "Tâm lý động vật" },
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
				{ text: "Blockchain" },
				{
					text: "Website",
					href: "https://nhavantuonglai.com/tags/website",
					links: [
						{ text: "Xây dựng website", href: "https://nhavantuonglai.com/tags/website-builder" },
						{ text: "Tối ưu website" },
						{ text: "Giao diện website" },
						{ text: "Tương tác website" },
					],
				},
				{
					text: "Phần mềm",
					links: [
						{ text: "Phần mềm Android" },
						{ text: "Phần mềm iOS" },
						{ text: "Phần mềm Windos" },
						{ text: "Phần mềm mở" },
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
					links: [
						{ text: "Đếm chữ văn bản" },
						{ text: "In hoa văn bản" },
						{ text: "In đậm văn bản" },
						{ text: "Bộ biểu tượng Emoji" },
					],
				},
				{
					text: "Giải trí",
					links: [
						{ text: "Nghe FM trực tuyến", href: "https://nhavantuonglai.com/analytics/radio" },
						{ text: "Xem video trực tuyến" },
						{ text: "Bây giờ là mấy giờ", href: "https://nhavantuonglai.com/analytics/time" },
						{ text: "Đếm ngược Giao thừa", href: "https://nhavantuonglai.com/analytics/countdown" },
					],
				},
				{
					text: "AI",
					links: [
						{ text: "Trò chuyện" },
						{ text: "Phụ đề" },
						{ text: "Đọc hình" },
						{ text: "Đọc chữ" },
					],
				},
				{
					text: "Dữ liệu",
					links: [
						{ text: "Phạt nguội AI" },
						{ text: "Kiểm tra số tài khoản" },
						{ text: "Kiểm tra mã số thuế" },
						{ text: "Từ điển trực tuyến" },
					],
				},
				{
					text: "Trò chơi",
					links: [
						{ text: "Rắn săn mồi", href: "https://nhavantuonglai.com/analytics/snake" },
						{ text: "Xếp hình" },
						{ text: "Giải đố" },
						{ text: "Mê cung" },

					],
				},
			],
		},

		{
			text: "Tiện ích",
			links: [
				{ text: "In tài liệu" },
				{ text: "Chụp ảnh màn hình" },
				{ text: "Dịch văn bản" },
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
						{ text: "Nhắn tin", href: "https://instagram.com/nhavantuonglai" },
						{ text: "Điện thoại" },
					],
				},
				{
					text: "Thư viện ảnh",
					links: [
						{ text: "500px", href: "https://500px.com/p/nhavantuonglai" },
						{ text: "Flickr", href: "https://flickr.com/photos/nhavantuonglai/" },
						{ text: "Adobe" },
						{ text: "Freepik" },

					],
				},
				{
					text: "Mạng xã hội",
					links: [
						{ text: "Facebook" },
						{ text: "Linkedin" },
						{ text: "X", href: "https://x.com/nhavantuonglai" },

					],
				},
				{
					text: "Mã nguồn mở",
					links: [
						{ text: "Github", href: "https://github.com/nhavantuonglai" },
						{ text: "Open", href: "https://github.com/nhavantuonglai/article-open" },
						{ text: "Terminal", href: "https://github.com/nhavantuonglai/terminal-open" },
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
			text: 'v25.04.01',
			href: 'https://nhavantuonglai.com/version'
		},

	],

	socialLinks: [

		{
			ariaLabel: 'X',
			icon: 'tabler:brand-x',
			href: 'https://x.com/nhavantuonglai'
		},

		{
			ariaLabel: 'Instagram',
			icon: 'tabler:brand-instagram',
			href: 'https://instagram.com/nhavantuonglai'
		},

		{
			ariaLabel: 'Linkedin',
			icon: 'tabler:brand-linkedin',
			href: 'https://linkedin.com/in/nguyenchanhdanh'
		},

		{
			ariaLabel: 'RSS',
			icon: 'tabler:rss',
			href: 'https://nhavantuonglai.com/rss.xml'
		},

	],

};