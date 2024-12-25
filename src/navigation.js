import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {

	links: [
		{
			text: 'Giới thiệu',
			href: '/about',
		},
		{
			text: 'Bài viết',
			links: [
				{
					text: 'Đọc thêm',
					href: getPermalink('/article'),
				},
				{
					text: 'Viết lách',
					href: getPermalink('/tags/viet-lach'),
				},
				{
					text: 'Lập trình',
					href: getPermalink('/tags/developer'),
				},
				{
					text: 'Nghiên cứu',
					href: getPermalink('/tags/nghien-cuu'),
				},
				{
					text: 'Văn chương',
					href: getPermalink('/tags/van-hoc'),
				},
			],
		},
		{
			text: 'Công cụ',
			links: [
				{
					text: 'Trợ lý Chat AI',
					href: getPermalink('/analytics/integrate'),
				},
				{
					text: 'Đối chiếu văn bản',
					href: getPermalink('/analytics/compare'),
				},
				{
					text: 'Chuẩn hóa văn bản',
					href: getPermalink('/analytics/normalize'),
				},
				{
					text: 'Tần suất văn bản',
					href: getPermalink('/analytics/count'),
				},
				{
					text: 'Chuyển đổi chữ thường',
					href: getPermalink('/analytics/lower'),
				},
				{
					text: 'Biểu tượng Unicode',
					href: getPermalink('/analytics/emoji'),
				},
				{
					text: 'Chuyển đổi Unicode',
					href: getPermalink('/analytics/unicode'),
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
					text: 'Chuyển đổi Unicode',
					href: 'https://nhavantuonglai.com/analytics/unicode'
				},
				{
					text: 'Biểu tượng Unicode',
					href: 'https://nhavantuonglai.com/analytics/emoji'
				},
				{
					text: 'Tần suất văn bản',
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
					text: 'Kỹ năng viết lách',
					href: '/tags/ky-nang-viet'
				},
				{
					text: 'Tối ưu website',
					href: '/tags/website'
				},
				{
					text: 'Vũ trụ rộng lớn',
					href: '/tags/vu-tru'
				},
				{
					text: 'Kỹ năng thông minh',
					href: '/tags/ky-nang'
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