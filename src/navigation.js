import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {

	links: [
		{
			text: 'Giới thiệu',
			href: 'https://nhavantuonglai.com/about',
		},
		{
			text: 'Bài viết',
			href: 'https://nhavantuonglai.com/article',
		},
		{
			text: 'Dịch vụ',
			href: 'https://nhavantuonglai.com/analytics',
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
			title: 'Công cụ',
			links: [
				{
					text: 'Chuyển đổi chữ thường',
					href: 'https://nhavantuonglai.com/analytics/lower'
				},
				{
					text: 'Chuẩn hóa unicode',
					href: 'https://nhavantuonglai.com/analytics/unicode'
				},
				{
					text: 'Chuẩn hóa dữ liệu',
					href: 'https://nhavantuonglai.com/analytics/normalize'
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
					href: 'https://nhavantuonglai.com/tags/viet-lach'
				},
				{
					text: 'Tôn giáo',
					href: 'https://nhavantuonglai.com/tags/ton-giao'
				},
				{
					text: 'Khoa học',
					href: 'https://nhavantuonglai.com/tags/khoa-hoc'
				},
				{
					text: 'Triết học',
					href: 'https://nhavantuonglai.com/tags/triet-hoc'
				},
				],
		},
		{
			title: 'Chuyên mục',
			links: [
				{
					text: 'Phật giáo',
					href: 'https://nhavantuonglai.com/tags/phat-giao'
				},
				{
					text: 'Tiến hóa',
					href: 'https://nhavantuonglai.com/tags/tien-hoa'
				},
				{
					text: 'Môi trường',
					href: 'https://nhavantuonglai.com/tags/moi-truong'
				},
				{
					text: 'Nhận thức',
					href: 'https://nhavantuonglai.com/tags/nhan-thuc'
				},
			],
		},
		{
			title: 'Chuyên đề',
			links: [
				{
					text: 'Vũ trụ học',
					href: 'https://nhavantuonglai.com/tags/vu-tru-hoc'
				},
				{
					text: 'Sinh học',
					href: 'https://nhavantuonglai.com/tags/sinh-hoc'
				},
				{
					text: 'Tâm lý học',
					href: 'https://nhavantuonglai.com/tags/tam-ly-hoc'
				},
				{
					text: 'Xã hội học',
					href: 'https://nhavantuonglai.com/tags/xa-hoi-hoc'
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
			href: 'https://instagram.com/nhavantuonglai'
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