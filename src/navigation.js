import { getBlogPermalink } from './utils/permalinks';

export const headerData = {

	links: [

		{
			text: 'Giới thiệu',
			href: 'https://nhavantuonglai.com/about',
		},

		{
			text: 'Viết lách',
			links: [
				{
					text: 'Đọc thêm',
					href: 'https://nhavantuonglai.com/article',
				},
				{
					text: 'Tuyển tập viết',
					href: 'https://nhavantuonglai.com/tags/tuyen-tap-viet-van',
				},
				{
					text: 'Kỹ năng viết',
					href: 'https://nhavantuonglai.com/tags/ky-nang-viet',
				},
				{
					text: 'Nghệ thuật viết',
					href: 'https://nhavantuonglai.com/tags/lam-chu-nghe-thuat-viet-lach',
				},
				{
					text: 'Hành trình viết',
					href: 'https://nhavantuonglai.com/tags/hanh-trinh-viet',
				},
			],
		},

		{
			text: 'Xã hội',
			links: [
				{
					text: 'Đọc thêm',
					href: 'https://nhavantuonglai.com/tags/xa-hoi-hoc',
				},
				{
					text: 'Tâm lý học',
					href: 'https://nhavantuonglai.com/tags/xa-hoi-hoc',
				},
				{
					text: 'Nhân học',
					href: 'https://nhavantuonglai.com/tags/nhan-hoc',
				},
				{
					text: 'Triết học',
					href: 'https://nhavantuonglai.com/tags/triet-hoc',
				},
				{
					text: 'Phật giáo',
					href: 'https://nhavantuonglai.com/tags/phat-giao',
				},
			],
		},

		{
			text: 'Thiên văn',
			links: [
				{
					text: 'Xem thêm',
					href: 'https://nhavantuonglai.com/tags/vu-tru-hoc',
				},
				{
					text: 'Vật lý thiên văn',
					href: 'https://nhavantuonglai.com/tags/vat-ly-thien-van',
				},
				{
					text: 'Vật lý lượng tử',
					href: 'https://nhavantuonglai.com/tags/vat-ly-luong-tu',
				},
				{
					text: 'Vụ nổ lớn',
					href: 'https://nhavantuonglai.com/tags/vu-no-lon',
				},
				{
					text: 'Sự sống vũ trụ',
					href: 'https://nhavantuonglai.com/tags/su-song-vu-tru',
				},
			],
		},

		{
			text: 'Liên hệ',
			href: 'https://nhavantuonglai.com/contact',
		},

	],

	actions: [{
		text: 'Đọc thêm',
		href: 'https://instagram.com/nhavantuonglai',
		target: '_blank'
		}],
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
			text: 'v25.03.12',
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