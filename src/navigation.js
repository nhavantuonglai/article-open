import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {

	links: [
		{
			text: 'Giới thiệu',
			href: '/about',
		},
		{
			text: 'Bài viết',
			href: '/article',
		},
		{
			text: 'Công cụ',
			href: 'https://nhavantuonglai.com/analytics',
		},
		{
			text: 'Công cụ',
			links: [
				{
					text: 'Trợ lý Chat AI',
					href: getPermalink('https://nhavantuonglai.com/analytics/integrate'),
				},
				{
					text: 'Emoji, icon Facebook chuẩn',
					href: getPermalink('https://nhavantuonglai.com/analytics/emoji'),
				},
				{
					text: 'Đối chiếu văn bản',
					href: getPermalink('https://nhavantuonglai.com/analytics/compare'),
				},
				{
					text: 'Đếm tần suất văn bản',
					href: getPermalink('https://nhavantuonglai.com/analytics/count'),
				},
				{
					text: 'Chuyển đổi chữ hoa thành chữ thường',
					href: getPermalink('https://nhavantuonglai.com/analytics/lower'),
				},
				{
					text: 'Chuẩn hóa dữ liệu thô',
					href: getPermalink('https://nhavantuonglai.com/analytics/normalize'),
				},
				{
					text: 'Chuyển đổi văn bản Unicode',
					href: getPermalink('https://nhavantuonglai.com/analytics/unicode'),
				},
			],
		},
		{
			text: 'Liên hệ',
			href: '/contact',
		},
	],

	actions: [{
		text: 'Đọc thêm',
		href: 'https://www.instagram.com/nhavantuonglai',
		target: '_blank'
		}],
};

export const footerData = {
	links: [
		{
			title: 'Công cụ',
			links: [
				{
					text: 'Trợ lý Chat AI',
					href: 'https://nhavantuonglai.com/analytics/integrate'
				},
				{
					text: 'Chuẩn hóa unicode',
					href: 'https://nhavantuonglai.com/analytics/unicode'
				},
				{
					text: 'Biểu tượng Emoji',
					href: 'https://nhavantuonglai.com/analytics/emoji'
				},
				{
					text: 'Thống kê văn bản',
					href: 'https://nhavantuonglai.com/analytics/count'
				},
			],
		},
		{
			title: 'Danh mục',
			links: [
				{
					text: 'Viết lách',
					href: '/tags/viet-lach'
				},
				{
					text: 'Viết thuê',
					href: '/tags/viet-thue'
				},
				{
					text: 'Đoản văn',
					href: '/tags/doan-van'
				},
				{
					text: 'Nghiên cứu',
					href: '/tags/nghien-cuu'
				},
				],
		},
		{
			title: 'Chuyên mục',
			links: [
				{
					text: 'Tôn giáo',
					href: '/tags/ton-giao'
				},
				{
					text: 'Triết học',
					href: '/tags/triet-hoc'
				},
				{
					text: 'Khoa học',
					href: '/tags/khoa-hoc'
				},
				{
					text: 'Tâm lý',
					href: '/tags/tam-ly-hoc'
				},
			],
		},
		{
			title: 'Chuyên đề',
			links: [
				{
					text: 'Học viết lách',
					href: '/tags/ky-nang-viet'
				},
				{
					text: 'Tự dựng website',
					href: '/tags/website'
				},
				{
					text: 'Khủng hoảng tâm lý',
					href: '/tags/khung-hoang'
				},
				{
					text: 'Đạo đức xã hội',
					href: '/tags/dao-duc-hoc'
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
			text: 'Phiên bản',
			href: 'https://nhavantuonglai.com/version'
		},
	],
	socialLinks: [
		{
			ariaLabel: 'X',
			icon: 'tabler:brand-x',
			href: 'http://x.com/nhavantuonglai'
		},
		{
			ariaLabel: 'Instagram',
			icon: 'tabler:brand-instagram',
			href: 'https://www.instagram.com/nhavantuonglai'
		},
		{
			ariaLabel: 'Linkedin',
			icon: 'tabler:brand-linkedin',
			href: 'https://www.linkedin.com/in/nguyenchanhdanh'
		},
		{
			ariaLabel: 'RSS',
			icon: 'tabler:rss',
			href: getAsset('/rss.xml')
		},
	],
};