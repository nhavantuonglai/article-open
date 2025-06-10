---
pubDatetime: 2020-11-26T10:10:00Z
title: Hướng dẫn quét liên kết trong sitemap website bằng Python
description: Hướng dẫn cách sử dụng Python để quét hàng loạt URL từ website của mình, tìm các liên kết không thuộc domain của bạn, và lưu kết quả vào tệp văn bản.
image: https://banmaixanh.vercel.app/image/cover/001-746.jpg
tags:
  - webiste
  - python
  - quet sitemap
  - kiem tra link
  - kiem tra lien ket
  - cong cu
  - cong cu quet lien ket
  - cong cu quet link
  - developer
  - sitemap
---

_Sitemap là công cụ thiết yếu giúp công cụ tìm kiếm hiểu rõ cấu trúc website của bạn, từ đó cải thiện khả năng index và xếp hạng. Bài viết này sẽ hướng dẫn bạn cách tự động quét và trích xuất tất cả các URL trong sitemap của một website cụ thể bằng Python, giúp bạn kiểm soát tốt hơn việc tối ưu SEO và quản lý nội dung. Qua đó, bạn có thể phát hiện các vấn đề với cấu trúc sitemap, URL bị thiếu hoặc lỗi, cũng như hiểu rõ hơn về cấu trúc website của mình._

## Tổng quan về sitemap và tầm quan trọng trong SEO

Sitemap đóng vai trò như bản đồ chỉ dẫn cho các công cụ tìm kiếm, giúp chúng khám phá và hiểu rõ hơn về cấu trúc cũng như nội dung của website. Trong thời đại số hóa hiện nay, việc tối ưu SEO không chỉ là xu hướng mà đã trở thành yêu cầu thiết yếu giúp doanh nghiệp và cá nhân nâng cao hiệu quả kinh doanh trực tuyến. sitemap chính là một trong những công cụ quan trọng nhất trong chiến lược SEO toàn diện.

### Định nghĩa và vai trò của sitemap trong hệ thống website

Sitemap là một tệp XML chứa danh sách các URL có trong website của bạn, thường được đặt tại đường dẫn gốc như `yourdomain.com/sitemap.xml`. Đây không đơn thuần chỉ là một danh sách liệt kê mà còn bao gồm các metadata quan trọng như thời gian cập nhật cuối cùng, tần suất thay đổi và mức độ ưu tiên cho mỗi URL. Khi website của bạn ngày càng phát triển với hàng trăm, thậm chí hàng nghìn trang nội dung, việc duy trì một sitemap chuẩn và đầy đủ trở nên vô cùng quan trọng.

Google và các công cụ tìm kiếm khác sử dụng sitemap như một điểm khởi đầu để crawl website của bạn hiệu quả hơn. Thay vì phải dò dẫm qua các liên kết nội bộ, sitemap giúp công cụ tìm kiếm tiếp cận nhanh chóng với mọi trang quan trọng. Đặc biệt đối với các website mới, hoặc có cấu trúc phức tạp, sitemap giúp đảm bảo không có trang nào bị bỏ sót trong quá trình index. Nhiều nghiên cứu đã chỉ ra rằng, website có sitemap được cập nhật thường xuyên và đầy đủ thường có tỷ lệ index cao hơn đáng kể so với những website không có.

### Các loại sitemap phổ biến và cấu trúc cơ bản

Trong thế giới SEO hiện đại, sitemap không chỉ giới hạn ở một định dạng đơn lẻ mà đã phát triển thành nhiều loại khác nhau, mỗi loại phục vụ cho một mục đích riêng biệt. Loại phổ biến nhất vẫn là sitemap XML chuẩn, tuân theo quy chuẩn của sitemaps.org, bao gồm các thẻ như `<urlset>`, `<url>`, `<loc>`, `<lastmod>`, `<changefreq>` và `<priority>`. Bên cạnh đó, còn có sitemap Index dùng để tổ chức nhiều sitemap con khi website có số lượng URL quá lớn vượt quá giới hạn 50,000 URL cho mỗi sitemap đơn lẻ.

Các loại sitemap đặc biệt như Image Sitemap, Video sitemap hay News sitemap cũng ngày càng phổ biến, giúp đánh dấu và cung cấp thông tin chi tiết về các loại nội dung đa phương tiện trên website. Điều này đặc biệt quan trọng đối với các website tin tức, thương mại điện tử hay nền tảng chia sẻ nội dung, nơi hình ảnh và video đóng vai trò then chốt trong việc thu hút người dùng và tăng cường trải nghiệm.

Về cấu trúc cơ bản, một sitemap XML luôn bắt đầu với khai báo XML và namespace, sau đó là phần thân chứa thông tin về các URL. Mỗi URL trong sitemap được đánh dấu bằng thẻ `<url>`, trong đó thẻ `<loc>` là bắt buộc, các thẻ khác như `<lastmod>`, `<changefreq>` và `<priority>` là tùy chọn nhưng được khuyến nghị sử dụng để cung cấp thông tin chi tiết hơn cho công cụ tìm kiếm về tầm quan trọng và tính cập nhật của mỗi trang.

### Tại sao việc quét sitemap lại quan trọng cho SEO và quản lý website?

Trong bối cảnh cạnh tranh SEO ngày càng khốc liệt, việc quét và phân tích sitemap thường xuyên trở thành công cụ không thể thiếu đối với các chuyên gia SEO và quản trị website. Khi website phát triển và thay đổi liên tục, việc đảm bảo sitemap luôn được cập nhật và phản ánh chính xác cấu trúc hiện tại của website là một thách thức không nhỏ. Không ít website lớn gặp phải vấn đề về sitemap không đồng bộ, chứa các URL lỗi, trùng lặp hoặc thiếu URL quan trọng, dẫn đến tình trạng index không đầy đủ và ảnh hưởng nghiêm trọng đến thứ hạng tìm kiếm.

Quét sitemap tự động bằng công cụ lập trình như Python giúp bạn thường xuyên kiểm tra và phát hiện các vấn đề tiềm ẩn trước khi chúng ảnh hưởng đến hiệu suất SEO. Cụ thể, thông qua việc quét sitemap, bạn có thể phát hiện các URL bị lỗi 404, URL bị chuyển hướng không cần thiết, hay URL bị thiếu trong sitemap. Đồng thời, bạn cũng có thể đánh giá mức độ phủ sóng của sitemap so với thực tế website, xác định các trang quan trọng nhưng chưa được đưa vào sitemap, hoặc ngược lại, phát hiện các URL cũ, không còn liên quan nhưng vẫn tồn tại trong sitemap.

Nhiều nghiên cứu thực tế đã chỉ ra rằng, các website thực hiện việc quét và tối ưu sitemap định kỳ (ít nhất mỗi tháng một lần) có tỷ lệ index cao hơn 30% và thời gian index nhanh hơn 40% so với các website không quan tâm đến việc này. Đặc biệt đối với các trang thương mại điện tử hay tin tức cập nhật liên tục, việc đảm bảo sitemap luôn được cập nhật kịp thời còn giúp sản phẩm mới hay bài viết mới được index nhanh chóng, tăng cơ hội tiếp cận khách hàng tiềm năng.

## Xây dựng công cụ quét sitemap với Python

Python là ngôn ngữ lập trình mạnh mẽ và linh hoạt, đặc biệt phù hợp cho các tác vụ xử lý dữ liệu web như quét sitemap. Với các thư viện phong phú, Python cho phép bạn xây dựng công cụ quét hiệu quả chỉ với vài chục dòng mã. Trong phần này, chúng ta sẽ tìm hiểu cách tạo một công cụ đơn giản nhưng mạnh mẽ để trích xuất tất cả URL từ sitemap của một website cụ thể.

### Thiết lập môi trường và cài đặt thư viện

Trước khi bắt đầu lập trình, việc thiết lập một môi trường phát triển phù hợp là bước quan trọng để đảm bảo code của bạn hoạt động ổn định và dễ dàng mở rộng sau này. Python là ngôn ngữ cross-platform, nghĩa là bạn có thể phát triển trên bất kỳ hệ điều hành nào: Windows, macOS hay Linux. Tuy nhiên, để tránh xung đột giữa các dự án khác nhau và quản lý phụ thuộc hiệu quả, việc sử dụng môi trường ảo (virtual environment) là một thực tiễn tốt mà mọi developer nên áp dụng.

Môi trường ảo trong Python giống như một container độc lập, cho phép bạn cài đặt và sử dụng các phiên bản thư viện cụ thể cho dự án mà không ảnh hưởng đến các dự án khác trên cùng máy tính. Để tạo môi trường ảo, bạn có thể sử dụng module `venv` có sẵn trong Python 3, hoặc công cụ phổ biến hơn là `virtualenv`. Ví dụ, để tạo một môi trường ảo có tên "sitemap-scraper" sử dụng `venv`, bạn chỉ cần chạy lệnh `python -m venv sitemap-scraper`, sau đó kích hoạt môi trường này trước khi tiếp tục công việc.

Sau khi thiết lập môi trường ảo, bước tiếp theo là cài đặt các thư viện cần thiết cho dự án. Đối với một công cụ quét sitemap, chúng ta sẽ cần ít nhất hai thư viện chính: `requests` để gửi HTTP request và nhận response từ server, và các module có sẵn trong Python như `xml.etree.ElementTree` để phân tích XML. Nếu bạn cần xử lý sitemap nén dạng gzip, các module như `gzip` và `io` cũng sẽ được sử dụng. Để cài đặt thư viện `requests`, bạn chỉ cần chạy lệnh `pip install requests` trong môi trường ảo đã kích hoạt.

Ngoài ra, tùy thuộc vào yêu cầu cụ thể của dự án, bạn có thể cần các thư viện bổ sung như `beautifulsoup4` để phân tích HTML (trong trường hợp cần crawl thêm thông tin từ các website), `pandas` để xử lý và phân tích dữ liệu, hay `matplotlib` để trực quan hóa kết quả. Tất cả đều có thể được cài đặt dễ dàng thông qua pip và được cộng đồng Python hỗ trợ tích cực với tài liệu phong phú.

Đầu tiên, hãy tạo một môi trường ảo để quản lý các phụ thuộc:

```

python -m venv sitemap-scraper-env

Kích hoạt môi trường ảo trên Windows:
sitemap-scraper-env\Scripts\activate

Kích hoạt môi trường ảo trên macOS hoặc Linux:
source sitemap-scraper-env/bin/activate

pip install requests
```

Chúng ta chỉ cần thư viện `requests` để gửi HTTP request, trong khi các module cần thiết khác như `xml.etree.ElementTree` đã có sẵn trong thư viện chuẩn của Python.

### Thiết kế cấu trúc và logic cho công cụ quét

Khi xây dựng một công cụ quét sitemap, việc thiết kế cấu trúc code hợp lý không chỉ giúp dễ dàng phát triển mà còn đảm bảo khả năng bảo trì và mở rộng trong tương lai. Áp dụng nguyên tắc lập trình hướng đối tượng (OOP) là một phương pháp hiệu quả, cho phép bạn đóng gói chức năng liên quan vào các lớp và phương thức rõ ràng. Trong trường hợp này, chúng ta sẽ tạo một lớp `SitemapScraper` chuyên biệt để xử lý toàn bộ quá trình quét và phân tích sitemap.

Lớp `SitemapScraper` cần được thiết kế với các thành phần chính sau: (1) Constructor để khởi tạo các thuộc tính cơ bản như domain cần quét, URL sitemap cụ thể, các cài đặt timeout và danh sách để lưu trữ URL tìm thấy; (2) Phương thức trợ giúp để xử lý các tác vụ cụ thể như lấy nội dung từ URL, kiểm tra domain và phân tích nội dung XML; (3) Phương thức chính để điều phối quá trình quét và trả về kết quả.

Logic cốt lõi của công cụ quét bao gồm các bước: Đầu tiên, lấy nội dung từ URL sitemap đã chỉ định (trong trường hợp này là https://nhavantuonglai.com/sitemap-0.xml); Tiếp theo, phân tích cú pháp XML để trích xuất các thẻ URL; Sau đó, lọc các URL thuộc domain đã chỉ định; Cuối cùng, trả về danh sách các URL duy nhất đã tìm thấy. Quá trình này cần xử lý các tình huống ngoại lệ như lỗi kết nối, lỗi phân tích XML, hoặc sitemap không đúng định dạng.

Một điểm quan trọng trong thiết kế là xử lý namespace trong XML. Các sitemap hiện đại thường sử dụng namespace để phân biệt các thẻ và thuộc tính, và việc xử lý chúng đúng cách là chìa khóa để trích xuất dữ liệu chính xác. Trong lớp `SitemapScraper`, chúng ta cần định nghĩa trước các namespace phổ biến và sử dụng chúng trong các truy vấn XPath khi tìm kiếm các thẻ trong cây XML.

### Triển khai mã nguồn và giải thích chi tiết các thành phần

Sau khi đã có kế hoạch thiết kế rõ ràng, chúng ta bắt đầu triển khai mã nguồn của công cụ quét sitemap. Mã nguồn dưới đây được xây dựng theo nguyên tắc đơn giản, hiệu quả và dễ mở rộng, tập trung vào việc trích xuất URL từ một sitemap cụ thể. Mỗi phần của mã nguồn đều có mục đích và vai trò riêng biệt trong quy trình quét sitemap tổng thể.

Dưới đây là mã nguồn hoàn chỉnh cho công cụ quét sitemap, được tối ưu để quét URL từ một sitemap cụ thể (trong trường hợp này là https://nhavantuonglai.com/sitemap-0.xml):

```
import requests
from urllib.parse import urlparse
import xml.etree.ElementTree as ET
import gzip
from io import BytesIO
import re
import ssl

class SitemapScraper:
    def __init__(self, domain, sitemap_url, timeout=30):
        self.domain = domain
        self.sitemap_url = sitemap_url
        self.timeout = timeout
        self.found_urls = set()
        
        self.namespaces = {
            'sitemap': 'http://www.sitemaps.org/schemas/sitemap/0.9',
            'news': 'http://www.google.com/schemas/sitemap-news/0.9',
            'image': 'http://www.google.com/schemas/sitemap-image/1.1',
            'video': 'http://www.google.com/schemas/sitemap-video/1.1',
            'mobile': 'http://www.google.com/schemas/sitemap-mobile/1.0'
        }
        
        ssl._create_default_https_context = ssl._create_unverified_context
    
    def get_content(self, url):
        try:
            response = requests.get(url, timeout=self.timeout, headers={
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            })
            response.raise_for_status()
            
            if response.headers.get('Content-Type') == 'application/x-gzip' or url.endswith('.gz'):
                return gzip.GzipFile(fileobj=BytesIO(response.content)).read()
            return response.content
        except Exception as e:
            print(f"Lỗi khi truy cập {url}: {e}.")
            return None
    
    def is_same_domain(self, url):
        parsed_url = urlparse(url)
        return parsed_url.netloc == self.domain or parsed_url.netloc == f"www.{self.domain}"
    
    def process_sitemap(self, sitemap_url):
        print(f"Đang xử lý sitemap: {sitemap_url}.")
        content = self.get_content(sitemap_url)
        if not content:
            print(f"Không thể lấy nội dung từ {sitemap_url}.")
            return
        
        try:
            root = ET.fromstring(content)
            
            url_tags = root.findall(".//sitemap:url/sitemap:loc", self.namespaces) or root.findall(".//url/loc")
            
            if not url_tags:
                print(f"Không tìm thấy thẻ URL trong sitemap {sitemap_url}.")
                return
                
            print(f"Tìm thấy {len(url_tags)} URL trong sitemap.")
            for url_tag in url_tags:
                url = url_tag.text.strip()
                if self.is_same_domain(url):
                    self.found_urls.add(url)
                    
        except ET.ParseError as e:
            print(f"Lỗi phân tích XML từ {sitemap_url}: {e}.")
            try:
                content_text = content.decode('utf-8')
                urls = re.findall(r'<loc>(.*?)</loc>', content_text)
                print(f"Phân tích thông qua regex: tìm thấy {len(urls)} URL.")
                for url in urls:
                    if self.is_same_domain(url):
                        self.found_urls.add(url)
            except Exception as e2:
                print(f"Không thể trích xuất URL từ {sitemap_url}: {e2}.")
    
    def scan(self):
        self.process_sitemap(self.sitemap_url)
        return sorted(list(self.found_urls))

def main():
    domain = "nhavantuonglai.com"
    sitemap_url = "https://nhavantuonglai.com/sitemap-0.xml"
    
    scraper = SitemapScraper(domain, sitemap_url)
    urls = scraper.scan()
    
    print(f"\nTìm thấy {len(urls)} URL từ domain {domain}:")
    for i, url in enumerate(urls, 1):
        print(f"{i}. {url}.")
    
    with open(f"nhavantonghop.txt", "w", encoding="utf-8") as f:
        for url in urls:
            f.write(f"{url}\n")
    
    print(f"\nĐã lưu danh sách URL vào file nhavantonghop.txt")

if __name__ == "__main__":
    main()
```

Phần đầu tiên của mã là việc import các thư viện cần thiết. Thư viện `requests` được sử dụng để gửi HTTP request và nhận response từ server, trong khi `urllib.parse` giúp phân tích và xử lý URL. Module `xml.etree.ElementTree` là công cụ mạnh mẽ của Python để làm việc với dữ liệu XML, cực kỳ phù hợp cho việc phân tích sitemap. Các module như `gzip`, `io`, `re` và `ssl` cũng được import để xử lý các tình huống đặc biệt như nội dung nén, biểu thức chính quy và vấn đề chứng chỉ SSL.

Lớp `SitemapScraper` được định nghĩa với constructor nhận vào ba tham số: `domain` (tên miền cần quét), `sitemap_url` (URL của sitemap cần quét) và `timeout` (thời gian chờ tối đa cho mỗi request). Trong constructor, chúng ta khởi tạo các thuộc tính cơ bản và định nghĩa các namespace XML phổ biến được sử dụng trong sitemap. Đặc biệt, dòng `ssl._create_default_https_context = ssl._create_unverified_context` giúp bỏ qua các lỗi chứng chỉ SSL, hữu ích khi làm việc với các website có cấu hình SSL không chuẩn.

Phương thức `get_content(url)` là phương thức trợ giúp để lấy nội dung từ một URL. Phương thức này xử lý cả trường hợp nội dung thông thường và nội dung nén dạng gzip (thường được sử dụng cho sitemap lớn để tiết kiệm băng thông). Khi gửi request, chúng ta thêm header User-Agent để giả lập trình duyệt, tránh bị chặn bởi các biện pháp bảo mật của website. Phương thức này cũng xử lý các ngoại lệ có thể xảy ra trong quá trình kết nối hoặc tải nội dung.

Phương thức `is_same_domain(url)` đóng vai trò quan trọng trong việc lọc URL, đảm bảo chúng ta chỉ thu thập các URL thuộc domain đã chỉ định. Phương thức này sử dụng `urlparse` từ thư viện `urllib.parse` để phân tách URL và so sánh phần netloc (hostname) với domain chúng ta quan tâm. Việc kiểm tra cả domain chính (non wwww) và biến thể `www` là cần thiết để đảm bảo không bỏ sót bất kỳ URL hợp lệ nào.

Phương thức cốt lõi `process_sitemap(sitemap_url)` thực hiện việc phân tích nội dung sitemap và trích xuất các URL. Nó đầu tiên lấy nội dung từ URL sitemap bằng phương thức `get_content()`, sau đó sử dụng ElementTree để phân tích cú pháp XML. Phương thức này tìm kiếm các thẻ `<loc>` trong các thẻ `<url>` bằng cách sử dụng XPath với namespace đã định nghĩa. Nếu phân tích XML thất bại (ví dụ: do sitemap không đúng định dạng), phương thức sẽ thử một phương pháp thay thế bằng cách sử dụng biểu thức chính quy để tìm các thẻ `<loc>`.

Cuối cùng, phương thức `scan()` điều phối toàn bộ quá trình quét bằng cách gọi `process_sitemap()` với URL sitemap đã chỉ định, sau đó trả về danh sách các URL đã tìm thấy, được sắp xếp theo thứ tự để dễ đọc. Hàm `main()` nằm ngoài lớp SitemapScraper, đóng vai trò như điểm khởi đầu của chương trình. Nó khởi tạo một đối tượng SitemapScraper với domain và URL sitemap cụ thể, gọi phương thức `scan()` để thực hiện quét, hiển thị kết quả và lưu chúng vào một file văn bản.

## Hướng dẫn sử dụng và tùy chỉnh

Để sử dụng công cụ quét sitemap, bạn cần thực hiện các bước sau:

### Bước 1: Chuẩn bị môi trường

Đảm bảo bạn đã cài đặt Python 3.6 trở lên và thư viện requests:

```
pip install requests
```

### Bước 2: Lưu mã nguồn

Sao chép mã nguồn ở trên và lưu vào một file có tên scan-sitemap.py.

### Bước 3: Chạy công cụ

```
python scan-sitemap.py
```

Khi chạy, công cụ sẽ:

1. Tải nội dung từ sitemap được chỉ định (Ví dụ: https://nhavantuonglai.com/sitemap-0.xml)

2. Phân tích để trích xuất các URL

3. Lọc các URL thuộc domain nhavantuonglai.com

4. Hiển thị danh sách URL tìm thấy

5. Lưu kết quả vào file nhavantuonglai.com_urls.txt

### Tùy chỉnh cho website khác

Nếu bạn muốn sử dụng công cụ này cho một website khác, bạn chỉ cần thay đổi domain và URL sitemap trong hàm main():

```
def main():
	domain = "nhavantuonglai.com"
	sitemap_url = "https://nhavantuonglai.com/sitemap-0.xml"
	…
```

### Xử lý các trường hợp đặc biệt

Nếu website sử dụng Sitemap Index (chứa nhiều sitemap con), bạn có thể mở rộng công cụ để hỗ trợ quét đệ quy:

```
sitemap_tags = root.findall(".//sitemap:sitemap/sitemap:loc", self.namespaces) or root.findall(".//sitemap/loc")
if sitemap_tags:
	for sitemap_tag in sitemap_tags:
		nested_sitemap_url = sitemap_tag.text.strip()
		self.process_sitemap(nested_sitemap_url)
```

Nếu bạn muốn trích xuất thêm thông tin như lastmod, changefreq, priority, thêm đoạn mã sau vào phương thức process_sitemap:

```
for url_tag in url_tags:
	url_node = url_tag.getparent()  # Lấy thẻ url cha
	url = url_tag.text.strip()
	
	if self.is_same_domain(url):
		lastmod = url_node.find("sitemap:lastmod", self.namespaces)
		changefreq = url_node.find("sitemap:changefreq", self.namespaces)
		priority = url_node.find("sitemap:priority", self.namespaces)
		
		metadata = {
			"url": url,
			"lastmod": lastmod.text if lastmod is not None else None,
			"changefreq": changefreq.text if changefreq is not None else None,
			"priority": priority.text if priority is not None else None
		}
		
		self.found_urls.add((url, metadata))
```

Để kiểm tra xem các URL trong sitemap có hoạt động không, bạn có thể thêm phương thức sau:

```
def check_url_status(self, url):
	try:
		response = requests.head(url, timeout=self.timeout, allow_redirects=True)
		return url, response.status_code
	except Exception as e:
		return url, str(e)
```

Sau đó, thêm code vào hàm main để kiểm tra tất cả URL:

```
print("\nĐang kiểm tra trạng thái các URL…")
for url in urls:
	status = scraper.check_url_status(url)
	print(f"{status[0]} – {status[1]}")
```

## Tự động hóa và ứng dụng thực tế

Công cụ quét sitemap không chỉ hữu ích khi chạy thủ công mà còn có thể được tự động hóa để thực hiện kiểm tra định kỳ, hỗ trợ bạn trong nhiều tác vụ SEO và quản lý nội dung.

### Tự động hóa với cron job

Để lập lịch chạy công cụ định kỳ trên Linux hay macOS, bạn có thể sử dụng cron:

```
Chạy hàng ngày lúc 2 giờ sáng:
0 2 * * * D:/OneDrive/document/takenote/scan-sitemap.py

Chạy hàng tuần vào Chủ Nhật:
0 0 * * 0 D:/OneDrive/document/takenote/scan-sitemap.py
```

Trên Windows, bạn có thể sử dụng Task Scheduler để đạt được kết quả tương tự.

### Lưu trữ kết quả theo thời gian

Để theo dõi sự thay đổi của sitemap theo thời gian, bạn có thể sửa đổi script để lưu kết quả với timestamp:

```
from datetime import datetime

def main():
	…
	current_date = datetime.now().strftime("%Y-%m-%d")
	filename = f"{domain}_urls_{current_date}.txt"
	
	with open(filename, "w", encoding="utf-8") as f:
		for url in urls:
			f.write(f"{url}\n")
	
	print(f"\nĐã lưu danh sách URL vào file {filename}.")
```

### So sánh với lần quét trước

Để phát hiện các URL mới hoặc bị xóa, bạn có thể so sánh kết quả với lần quét trước:

```
def compare_with_previous(current_urls, previous_file):

	try:
		with open(previous_file, "r", encoding="utf-8") as f:
			previous_urls = set(line.strip() for line in f)
		
		new_urls = current_urls – previous_urls
		removed_urls = previous_urls – current_urls
		
		return new_urls, removed_urls
	except FileNotFoundError:
		return current_urls, set()

def main():
	…
	current_date = datetime.now().strftime("%Y-%m-%d")
	previous_file = f"{domain}_urls_previous.txt"
	current_file = f"{domain}_urls_{current_date}.txt"
	
	new_urls, removed_urls = compare_with_previous(set(urls), previous_file)
	
	print(f"\nURL mới ({len(new_urls)}):")
	for url in sorted(new_urls):
		print(f"+ {url}.")
	
	print(f"\nURL đã xóa ({len(removed_urls)}):")
	for url in sorted(removed_urls):
		print(f"– {url}.")

	with open(current_file, "w", encoding="utf-8") as f:
		for url in urls:
			f.write(f"{url}\n")

	with open(previous_file, "w", encoding="utf-8") as f:
		for url in urls:
			f.write(f"{url}\n")
```

### Gửi email thông báo

Để nhận thông báo khi có URL mới hoặc bị xóa, bạn có thể thêm tính năng gửi email:

```
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def send_email_notification(subject, body, sender, recipients, password):

	msg = MIMEMultipart()
	msg['Subject'] = subject
	msg['From'] = sender
	msg['To'] = ', '.join(recipients)
	msg.attach(MIMEText(body, 'plain'))
	
	with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp_server:
		smtp_server.login(sender, password)
		smtp_server.sendmail(sender, recipients, msg.as_string())
	
	print("Email thông báo đã được gửi.")

def main():
	…

	if new_urls or removed_urls:
		email_subject = f"Sitemap Update Alert: {domain}"
		email_body = f"Sitemap scan results for {domain} on {current_date}:\n\n."
		
		if new_urls:
			email_body += f"New URLs ({len(new_urls)}):\n"
			for url in sorted(new_urls):
				email_body += f"+ {url}\n"
			email_body += "\n"
		
		if removed_urls:
			email_body += f"Removed URLs ({len(removed_urls)}):\n"
			for url in sorted(removed_urls):
				email_body += f"– {url}\n"
		
		send_email_notification(
			subject=email_subject,
			body=email_body,
			sender="info@nhavantuonglai.com",
			recipients=["info@nhavantuonglai.com"],
			password="********************"
		)
```

## Mở rộng và tùy biến nâng cao

Công cụ quét sitemap cơ bản có thể được mở rộng để đáp ứng các nhu cầu phức tạp hơn trong quản lý website và SEO.

### Quét nhiều sitemap

Nếu website của bạn có nhiều sitemap, bạn có thể mở rộng công cụ để quét tất cả cùng lúc:

```
def main():
	domain = "nhavantuonglai.com"
	sitemap_urls = [
		"https://nhavantuonglai.com/sitemap-0.xml",
		"https://nhavantuonglai.com/sitemap-1.xml",
		"https://nhavantuonglai.com/sitemap-post.xml",
		"https://nhavantuonglai.com/sitemap-page.xml"
	]
	
	all_urls = set()
	for sitemap_url in sitemap_urls:
		scraper = SitemapScraper(domain, sitemap_url)
		urls = scraper.scan()
		all_urls.update(urls)
	
	all_urls_list = sorted(list(all_urls))
	…
```

### Phân tích cấu trúc URL

Để hiểu rõ hơn về cấu trúc website, bạn có thể thêm tính năng phân tích URL:

```
def analyze_url_structure(urls):

	path_segments = {}
	depth_count = {}
	
	for url in urls:
		parsed = urlparse(url)
		path = parsed.path.strip('/')
		segments = path.split('/')
		depth = len(segments)
		
		depth_count[depth] = depth_count.get(depth, 0) + 1
		
		if segments and segments[0]:
			first_segment = segments[0]
			path_segments[first_segment] = path_segments.get(first_segment, 0) + 1
	
	return path_segments, depth_count

def main():
	…
	path_segments, depth_count = analyze_url_structure(urls)
	
	print("\nPhân tích cấu trúc URL:")
	print("\nSố lượng URL theo độ sâu:")
	for depth, count in sorted(depth_count.items()):
		print(f"Độ sâu {depth}: {count} URL.")
	
	print("\nSố lượng URL theo danh mục:")
	for segment, count in sorted(path_segments.items(), key=lambda x: x[1], reverse=True):
		print(f"{segment}: {count} URL.")
```

### Tích hợp với cơ sở dữ liệu

Để lưu trữ và theo dõi dữ liệu sitemap lâu dài, bạn có thể tích hợp với cơ sở dữ liệu như SQLite:

```
import sqlite3
from datetime import datetime

def store_in_database(urls, db_file="sitemap_history.db"):
	conn = sqlite3.connect(db_file)
	cursor = conn.cursor()
	
	cursor.execute('''
	CREATE TABLE IF NOT EXISTS sitemap_scans (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		scan_date TEXT,
		domain TEXT,
		url_count INTEGER
	)
	''')
	
	cursor.execute('''
	CREATE TABLE IF NOT EXISTS sitemap_urls (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		scan_id INTEGER,
		url TEXT,
		FOREIGN KEY (scan_id) REFERENCES sitemap_scans (id)
	)
	''')
	
	current_date = datetime.now().isoformat()
	cursor.execute(
		"INSERT INTO sitemap_scans (scan_date, domain, url_count) VALUES (?, ?, ?)",
		(current_date, domain, len(urls))
	)
	scan_id = cursor.lastrowid
	
	for url in urls:
		cursor.execute(
			"INSERT INTO sitemap_urls (scan_id, url) VALUES (?, ?)",
			(scan_id, url)
		)
	
	conn.commit()
	conn.close()
	
	print(f"Đã lưu {len(urls)} URL vào cơ sở dữ liệu.")

def main():
	…
	store_in_database(urls)
```

### Tạo báo cáo HTML

Để tạo báo cáo trực quan, bạn có thể xuất kết quả dưới dạng HTML:

```
def generate_html_report(domain, urls, output_file):
	html_content = f"""
	<!DOCTYPE html>
	<html>
	<head>
		<title>Sitemap Scan Report – {domain}</title>
		<style>
			body {{ font-family: Arial, sans-serif; margin: 20px; }}
			h1 {{ color: #333; }}
			table {{ border-collapse: collapse; width: 100%; }}
			th, td {{ border: 1px solid #ddd; padding: 8px; }}
			th {{ background-color: #f2f2f2; text-align: left; }}
			tr:nth-child(even) {{ background-color: #f9f9f9; }}
		</style>
	</head>
	<body>
		<h1>Sitemap Scan Report for {domain}</h1>
		<p>Scan date: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}.</p>
		<p>Total URLs found: {len(urls)}.</p>
		
		<h2>URL List</h2>
		<table>
			<tr>
				<th>#</th>
				<th>URL</th>
			</tr>
	"""
	
	for i, url in enumerate(urls, 1):
		html_content += f"""
			<tr>
				<td>{i}</td>
				<td><a href="{url}" target="_blank">{url}</a></td>
			</tr>
		"""
	
	html_content += """
		</table>
	</body>
	</html>
	"""
	
	with open(output_file, "w", encoding="utf-8") as f:
		f.write(html_content)
	
	print(f"Báo cáo HTML đã được lưu vào {output_file}.")

def main():
	…
	generate_html_report(domain, urls, f"{domain}_report_{datetime.now().strftime('%Y-%m-%d')}.html")
```

## Ứng dụng và mở rộng công cụ quét Sitemap

Công cụ quét sitemap chúng ta đã xây dựng trong phần trước chỉ là điểm khởi đầu cho nhiều khả năng ứng dụng rộng lớn hơn. Việc sở hữu một công cụ có thể tùy biến hoàn toàn không chỉ giúp bạn hiểu rõ hơn về cấu trúc website mà còn mở ra cơ hội để phát triển các giải pháp SEO và quản lý nội dung toàn diện hơn. Phần này sẽ khám phá các ứng dụng thực tế và cách mở rộng công cụ để đáp ứng nhu cầu ngày càng phức tạp trong lĩnh vực SEO.

### Phân tích dữ liệu từ sitemap và ứng dụng trong SEO

Danh sách URL thu thập được từ sitemap là kho báu thông tin, và cách bạn khai thác kho báu này sẽ quyết định giá trị mà công cụ quét mang lại. Trong lĩnh vực SEO, việc phân tích cấu trúc URL và mối quan hệ giữa chúng có thể cung cấp những hiểu biết sâu sắc về kiến trúc thông tin của website. Ví dụ, thông qua việc nhóm URL theo các mẫu chung (pattern), bạn có thể nhận diện các chủ đề và phân loại nội dung, từ đó đánh giá được mức độ phủ của website trên từng lĩnh vực.

Một phân tích đơn giản nhưng hiệu quả là thống kê độ sâu của URL (số lượng thư mục trong đường dẫn). Website có cấu trúc phẳng (flat structure) với URL ngắn thường dễ crawl và index hơn so với website có cấu trúc phân cấp sâu. Nếu phân tích cho thấy website của bạn có quá nhiều URL ở độ sâu lớn (Ví dụ: trên 3 – 4 cấp), đây có thể là dấu hiệu cho thấy cần cải thiện kiến trúc thông tin.

Một ứng dụng quan trọng khác là việc so sánh danh sách URL từ sitemap với danh sách URL thực tế đã được Google index (có thể lấy từ Google Search Console). Sự khác biệt giữa hai danh sách này có thể giúp bạn phát hiện các vấn đề như URL chưa được đưa vào sitemap, URL trong sitemap nhưng không được index, hay URL đã bị loại bỏ khỏi index. Thông tin này là nền tảng để bạn điều chỉnh chiến lược SEO, ví dụ như cải thiện nội dung cho các trang chưa được index hoặc cập nhật sitemap để loại bỏ các URL không còn liên quan.

Ngoài ra, công cụ quét sitemap còn có thể được mở rộng để trích xuất thêm thông tin từ các thẻ khác như `<lastmod>`, `<changefreq>` và `<priority>`. Phân tích các thông tin này có thể giúp bạn đánh giá chiến lược cập nhật nội dung và ưu tiên hóa của website. Ví dụ, nếu các trang quan trọng không được gán priority cao trong sitemap, hoặc tần suất thay đổi không phù hợp với thực tế cập nhật, bạn có thể cần điều chỉnh cấu hình sitemap để truyền tải thông tin chính xác hơn đến công cụ tìm kiếm.

### Tự động hóa quy trình kiểm tra và báo cáo

Giá trị thực sự của công cụ quét sitemap được thể hiện rõ nhất khi nó được tích hợp vào quy trình kiểm tra và báo cáo tự động. Thay vì chạy công cụ thủ công mỗi khi cần, bạn có thể lập lịch cho nó chạy định kỳ (ví dụ: hàng ngày, hàng tuần hoặc hàng tháng) và tự động tạo báo cáo phân tích. Điều này không chỉ tiết kiệm thời gian mà còn đảm bảo bạn luôn nắm bắt kịp thời các thay đổi và vấn đề tiềm ẩn.

Trên Linux hoặc macOS, bạn có thể sử dụng cron job để lập lịch chạy script Python định kỳ. Ví dụ, để chạy script mỗi ngày lúc 2 giờ sáng, bạn có thể thêm vào crontab bằng đoạn code như trên. Trên Windows, Task Scheduler cung cấp chức năng tương tự. Kết quả thu được có thể được lưu trữ theo ngày để theo dõi sự thay đổi theo thời gian.

Để tăng tính hữu ích của báo cáo tự động, bạn có thể mở rộng script để thực hiện các kiểm tra bổ sung và gửi thông báo khi phát hiện vấn đề. Ví dụ, script có thể kiểm tra tính khả dụng của mỗi URL bằng cách gửi request HEAD và ghi nhận mã trạng thái HTTP. Nếu phát hiện quá nhiều lỗi 404 (Not Found) hoặc 500 (Internal Server Error), script có thể gửi email cảnh báo đến team quản trị website để có biện pháp khắc phục kịp thời.

Một mở rộng hữu ích khác là tích hợp với các công cụ phân tích như Google Analytics hoặc database nội bộ để kết hợp dữ liệu từ sitemap với các chỉ số hiệu suất như lượt xem trang, tỷ lệ thoát và thời gian trên trang. Điều này giúp bạn đánh giá toàn diện giá trị của mỗi URL, từ đó có chiến lược tối ưu phù hợp. Ví dụ, nếu một trang có thứ hạng cao trong sitemap (priority cao) nhưng hiệu suất thấp trong Analytics, bạn có thể cần cải thiện nội dung hoặc trải nghiệm người dùng của trang đó.

## Kết luận

Công cụ quét sitemap bằng Python mà chúng ta đã xây dựng cung cấp một giải pháp hiệu quả để trích xuất và phân tích URL từ sitemap của website. Việc tự động hóa quá trình này không chỉ tiết kiệm thời gian mà còn giúp bạn có cái nhìn sâu sắc hơn về cấu trúc website, từ đó tối ưu hóa SEO và nâng cao trải nghiệm người dùng.

Từ công cụ cơ bản này, bạn có thể tiếp tục mở rộng và tùy biến để đáp ứng các nhu cầu cụ thể của mình. Dù là kiểm tra tình trạng URL, phân tích cấu trúc website, hay theo dõi sự thay đổi của sitemap theo thời gian, công cụ này đều cung cấp nền tảng vững chắc để bạn xây dựng các giải pháp SEO toàn diện hơn.

Hãy nhớ rằng, SEO là một quá trình liên tục và sitemap chỉ là một phần của bức tranh lớn. Kết hợp công cụ này với các kỹ thuật SEO khác sẽ giúp bạn đạt được kết quả tốt nhất trong việc tối ưu hóa website cho công cụ tìm kiếm.

<figure><img src="https://banmaixanh.vercel.app/image/cover/001-272.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>