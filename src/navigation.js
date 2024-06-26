import { getPermalink, getBlogPermalink, getAsset} from './utils/permalinks';

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
	actions: [{ text: 'Đọc thêm', href: 'https://info.nhavantuonglai.com/instagram', target: '_blank'}],
};

export const footerData = {
	links: [
		{
			title: 'Bài viết',
			links: [
				{ text: 'Viết lách', href: 'https://info.nhavantuonglai.com/viet-lach'},
				{ text: 'Viết thuê', href: 'https://info.nhavantuonglai.com/viet-thue'},
				{ text: 'Thư viện', href: 'https://info.nhavantuonglai.com/thu-vien'},
				{ text: 'Tôn giáo', href: 'https://nhavantuonglai.com/tags/ton-giao'},
				{ text: 'Conan', href: 'https://nhavantuonglai.com/tags/conan'},
				{ text: 'SEO', href: 'https://nhavantuonglai.com/tags/seo'},
				{ text: 'Lập trình', href: 'https://info.nhavantuonglai.com/developer'},
			],
		},
		{
			title: 'Tác giả',
			links: [
				{ text: 'Nguyễn Kỳ Lân', href: 'https://nhavantuonglai.com/tags/instagram'},
				{ text: 'Thích Nhất Hạnh', href: 'https://nhavantuonglai.com/tags/thich-nhat-hanh'},
				{ text: 'Clifford Stoll', href: 'https://nhavantuonglai.com/tags/clifford-stoll'},
				{ text: 'Haruki Murakami', href: 'https://nhavantuonglai.com/tags/haruki-murakami'},
				{ text: 'Gosho Aoyama', href: 'https://nhavantuonglai.com/tags/gosho-aoyama'},
				{ text: 'Rachel Carson', href: 'https://nhavantuonglai.com/tags/rachel-carson'},
			],
		},
		{
			title: 'Hỗ trợ',
			links: [
				{ text: 'Fanpage', href: 'https://info.nhavantuonglai.com/fanpage'},
				{ text: 'Facebook', href: 'https://info.nhavantuonglai.com/facebook'},
			],
		},
		{
			title: 'Tài nguyên',
			links: [
				{ text: 'Adobe Stock', href: 'https://info.nhavantuonglai.com/stock'},
				{ text: '500px', href: 'https://info.nhavantuonglai.com/500px'},
				{ text: 'Freepik', href: 'https://info.nhavantuonglai.com/freepik'},
				{ text: 'Shutterstock', href: 'https://info.nhavantuonglai.com/shutterstock'},
				{ text: 'Flickr', href: 'https://info.nhavantuonglai.com/flickr'},
			],
		},
	],
	secondaryLinks: [
		{ text: 'Điều khoản', href: 'https://nhavantuonglai.com/term'},
		{ text: 'Chính sách', href: 'https://nhavantuonglai.com/policy'},
		{ text: 'Cập nhật', href: 'https://nhavantuonglai.com/version'},
	],
	socialLinks: [
		{ ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://info.nhavantuonglai.com/twitter'},
		{ ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://info.nhavantuonglai.com/instagram'},
		{ ariaLabel: 'Linkedin', icon: 'tabler:brand-linkedin', href: 'https://info.nhavantuonglai.com/linkedin'},
		{ ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml')},
	],
};