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
			href: 'https://nhavantuonglai.com/services',
		},
		{
			text: 'Liên hệ',
			href: 'https://nhavantuonglai.com/contact',
		},
	],

	actions: [{
		text: 'Đọc thêm',
		href: 'https://info.nhavantuonglai.com/instagram',
		target: '_blank'
		}],
};

export const footerData = {
	links: [
		{
			title: 'Công cụ',
			links: [
				{
					text: 'Sao kê từ thiện',
					href: 'https://nhavantuonglai.com/analytics/sao-ke'
				},
				{
					text: 'Chuyển đổi chữ thường',
					href: 'https://nhavantuonglai.com/analytics/lower'
				},
				{
					text: 'Chuẩn hóa văn bản',
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
					href: 'https://info.nhavantuonglai.com/viet-lach'
				},
				{
					text: 'Viết thuê',
					href: 'https://info.nhavantuonglai.com/viet-thue'
				},
				{
					text: 'Thư viện',
					href: 'https://info.nhavantuonglai.com/thu-vien'
				},
				{
					text: 'Truyện tranh',
					href: 'https://info.nhavantuonglai.com/manga'
				},
				],
		},
		{
			title: 'Tác giả',
			links: [
				{
					text: 'Nguyễn Kỳ Lân',
					href: 'https://nhavantuonglai.com/tags/instagram'
				},
				{
					text: 'Thích Nhất Hạnh',
					href: 'https://nhavantuonglai.com/tags/thich-nhat-hanh'
				},
				{
					text: 'Clifford Stoll',
					href: 'https://nhavantuonglai.com/tags/clifford-stoll'
				},
				{
					text: 'Haruki Murakami',
					href: 'https://nhavantuonglai.com/tags/haruki-murakami'
				},
			],
		},
		{
			title: 'Tác phẩm',
			links: [
				{
					text: 'Đường xưa mây trắng',
					href: 'https://nhavantuonglai.com/tags/duong-xua-may-trang'
				},
				{
					text: 'Niên lịch miền gió cát',
					href: 'https://nhavantuonglai.com/tags/nien-lich-mien-gio-cat'
				},
				{
					text: 'Giếng thở than',
					href: 'https://nhavantuonglai.com/tags/gieng-tho-than'
				},
				{
					text: 'Chim lửa',
					href: 'https://nhavantuonglai.com/tags/chim-lua'
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
			href: 'https://info.nhavantuonglai.com/twitter'
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
			href: getAsset('/rss.xml')
		},
	],
};