---
pubDatetime: 2019-12-12T10:10:00Z
title: Tự động index website nhanh gấp 10 lần với Google Indexing API
description: Thay vì đợi Google quét và index website, Google Indexing API cho phép bạn gửi trực tiếp yêu cầu indexing đến Google ngay khi có nội dung mới hoặc cập nhật.
image: https://banmaixanh.vercel.app/image/cover/001-152.jpg
tags:
  - google search console
  - google cloud console
  - google index api
  - lap chi muc website
  - lap chi muc
  - webiste
  - google indexing api
  - index webiste
  - sumit url
  - python
  - developer
  - google
---

_Thay vì phải chờ đợi Google bot tự động quét và index website, API này cho phép bạn gửi trực tiếp yêu cầu indexing đến Google ngay khi có nội dung mới hoặc cập nhật._

## Google Index API là gì?

[Google Index API](https://nhavantuonglai.com/article/tim-hieu-indexing) là một công cụ mạnh mẽ được Google cung cấp để giúp các webmaster và nhà phát triển có thể chủ động yêu cầu Google thu thập và lập chỉ mục cho nội dung website của họ. Thay vì phải chờ đợi Google bot tự động quét và index website, API này cho phép bạn gửi trực tiếp yêu cầu indexing đến Google ngay khi có nội dung mới hoặc cập nhật.

### Vai trò và tầm quan trọng của Google Index API

Google Index API đóng vai trò then chốt trong việc tối ưu hóa quá trình indexing website. Khi một website mới được tạo ra hoặc nội dung được cập nhật, việc chờ đợi Google bot tự động quét và index có thể mất từ vài giờ đến vài ngày, thậm chí vài tuần tùy thuộc vào độ ưu tiên của website. Điều này có thể ảnh hưởng đến trải nghiệm người dùng và hiệu quả SEO của website. Google Index API giải quyết vấn đề này bằng cách cho phép bạn chủ động thông báo cho Google về những thay đổi trên website, giúp nội dung mới xuất hiện trong kết quả tìm kiếm nhanh hơn.

Một ví dụ điển hình về tầm quan trọng của Google Index API là trong trường hợp các trang tin tức hoặc blog thường xuyên đăng bài viết mới. Việc sử dụng API này giúp các bài viết mới được index ngay lập tức, đảm bảo độc giả có thể tìm thấy thông tin mới nhất thông qua Google Search. Điều này đặc biệt quan trọng đối với các tin tức thời sự hoặc các sự kiện đang diễn ra.

### Cách thức hoạt động của Google Index API

Google Index API hoạt động dựa trên cơ chế `RESTful API`, cho phép gửi các yêu cầu HTTP đến endpoint của Google để yêu cầu indexing URL cụ thể. Khi một yêu cầu được gửi đi, Google sẽ xử lý và đưa URL đó vào hàng đợi ưu tiên để crawl (cào, quét dữ liệu) và index (lập chỉ mục). API này hỗ trợ hai loại yêu cầu chính: `URL_UPDATED` để thông báo URL đã được cập nhật và cần được index lại, và `URL_DELETED` để thông báo URL đã bị xóa và cần được loại bỏ khỏi index.

Quá trình xử lý yêu cầu indexing thông qua API diễn ra theo các bước: Đầu tiên, API kiểm tra tính hợp lệ của yêu cầu và quyền truy cập. Tiếp theo, nếu yêu cầu hợp lệ, URL sẽ được đưa vào hàng đợi ưu tiên cao để crawl. Cuối cùng, Google bot sẽ tiến hành crawl và index nội dung mới. Toàn bộ quá trình này thường diễn ra nhanh hơn đáng kể so với việc chờ đợi crawl tự nhiên.

### Lợi ích và hạn chế khi sử dụng Google Index API

Google Index API mang lại nhiều lợi ích đáng kể cho việc quản lý website. Lợi ích lớn nhất là khả năng kiểm soát và tối ưu hóa quá trình indexing.  Điều này đặc biệt hữu ích cho các website thương mại điện tử với danh mục sản phẩm thường xuyên thay đổi, hoặc các trang tin tức cần đưa thông tin mới lên Google Search nhanh chóng.

Tiếp theo, API này giúp tiết kiệm đáng kể thời gian và công sức của webmaster trong việc đợi Google bot tự động crawl. Thay vì phụ thuộc vào lịch crawl tự động của Google, bạn có thể chủ động yêu cầu index những trang quan trọng ngay khi cần thiết.

Và nó cho phép kiểm soát chính xác những URL nào cần được index hoặc gỡ bỏ khỏi index, tránh tình trạng các trang không mong muốn xuất hiện trên kết quả tìm kiếm.

Cuối cùng, API này hoạt động theo thời gian thực, giúp nội dung mới được cập nhật nhanh chóng trên SERP, đặc biệt khi kết hợp cùng Python.

Tuy nhiên, Google Index API cũng có một số hạn chế cần lưu ý. Đầu tiên, API có giới hạn về số lượng yêu cầu có thể gửi trong một ngày, thường là khoảng 200 URL mỗi ngày đối với hầu hết các website. Thứ hai, việc sử dụng API đòi hỏi kiến thức kỹ thuật nhất định để thiết lập và tích hợp. Cuối cùng, mặc dù API giúp đẩy nhanh quá trình indexing, nhưng không đảm bảo rằng tất cả các URL được gửi đi sẽ được index hoặc xếp hạng cao trong kết quả tìm kiếm.

Với hạn chế thứ hai, thì nội dung bài viết này sẽ hướng dẫn chi tiết cách triển khai, bạn chỉ cần làm theo đúng trình tự, kèm các điều chỉnh cho phù hợp với website của bạn là mọi thứ sẽ được giải quyết.

### So sánh với phương pháp index truyền thống

Phương pháp index truyền thống phụ thuộc hoàn toàn vào Google bot, điều này có thể gây ra nhiều bất cập trong thời đại số hóa hiện nay.

Khi sử dụng cách thức truyền thống, webmaster phải tối ưu hóa sitemap, robots.txt và cấu trúc website để giúp Google bot dễ dàng crawl. Quá trình này không chỉ tốn thời gian mà còn không đảm bảo tất cả các trang quan trọng đều được index đúng lúc.

Ngược lại, Google Index API mang lại sự chủ động và hiệu quả cao hơn. Webmaster có thể ngay lập tức thông báo cho Google về các URL mới hoặc đã cập nhật, đảm bảo nội dung được index nhanh chóng và chính xác. Điều này đặc biệt quan trọng đối với các website thương mại điện tử, trang tin tức, hoặc website có nhiều bài viết chưa thể index ngay.

## Các bước đăng ký sử dụng Google Index API

Quá trình đăng ký và thiết lập Google Index API đòi hỏi một số bước quan trọng để đảm bảo bạn có thể sử dụng API một cách hiệu quả và an toàn. Việc thiết lập đúng cách không chỉ giúp bạn tận dụng được tối đa các tính năng của API mà còn đảm bảo tính bảo mật cho website của bạn.

### Đăng ký và thiết lập Google Cloud Console

Tóm tắt quy trình đăng ký và thiết lập Google Cloud Console: Đăng nhập, tài tài khoản [Google Cloud Console](https://cloud.google.com/cloud-console) > Tạo [Project](https://console.cloud.google.com/projectselector2/welcome) > Kích hoạt [
Web Search Indexing API](https://console.cloud.google.com/apis/api/indexing.googleapis.com/metrics?inv=1&invt=AbqTHw).

Bước 1, tạo tài khoản `Google Cloud Console` để sử dụng tất cả các dịch vụ, API liên quan.

<figure><img src="https://banmaixanh.vercel.app/image/article/indexing-01.jpg" alt="Tự động index website nhanh gấp 10 lần với Google Indexing API" title="Tự động index website nhanh gấp 10 lần với Google Indexing API" height=100% width=100%><figcaption><p>Tự động index website nhanh gấp 10 lần với Google Indexing API</p></figcaption></figure>

Bước 2, tạo `Project` cho dự án tại trang tổng quan. Trình tự từng bước gồm: Từ `Select a project` > `New project` > Đặt tên cho dự án.

<figure><img src="https://banmaixanh.vercel.app/image/article/indexing-04.jpg" alt="Tự động index website nhanh gấp 10 lần với Google Indexing API" title="Tự động index website nhanh gấp 10 lần với Google Indexing API" height=100% width=100%><figcaption><p>Tự động index website nhanh gấp 10 lần với Google Indexing API</p></figcaption></figure>

Bước 3, kích hoạt `Indexing API` thông qua `Google Search Console Indexing API`. Trình tự từng bước gồm: Từ `Web Search Indexing API` > `Enable`.

<figure><img src="https://banmaixanh.vercel.app/image/article/indexing-02.jpg" alt="Tự động index website nhanh gấp 10 lần với Google Indexing API" title="Tự động index website nhanh gấp 10 lần với Google Indexing API" height=100% width=100%><figcaption><p>Tự động index website nhanh gấp 10 lần với Google Indexing API</p></figcaption></figure>

Quá trình này có thể mất vài phút để hoàn tất. Đảm bảo bạn đã chọn đúng dự án trước khi kích hoạt API để tránh nhầm lẫn giữa các dự án khác nhau.

<figure><img src="https://banmaixanh.vercel.app/image/article/indexing-03.jpg" alt="Tự động index website nhanh gấp 10 lần với Google Indexing API" title="Tự động index website nhanh gấp 10 lần với Google Indexing API" height=100% width=100%><figcaption><p>Tự động index website nhanh gấp 10 lần với Google Indexing API</p></figcaption></figure>

### Xác thực và tạo credentials

Tóm tắt quy trình xác thực và tạo credentials: Thiết lập [credentials](https://console.cloud.google.com/apis/api/indexing.googleapis.com/credentials?inv=1&invt=AbqTHw) > Tạo [Service account](https://console.cloud.google.com/iam-admin/serviceaccounts?inv=1&invt=AbqTHw) > Tạo [Key JSON](https://console.cloud.google.com/iam-admin/serviceaccounts/details/keys).

Bước 1, thiết lập thông tin xác thực thông qua `credentials`. Trình tự từng bước gồm: Từ `Google Search Console Indexing API` > `Credentials` > `Create Credentials` > `Service account` > Tạo tài khoản. Tại bước tài, _tài khoản_ sẽ được sử dụng để cấp quyền trên `Google Search Console`, vì vậy bạn nên lưu ý trước khi tạo.

<figure><img src="https://banmaixanh.vercel.app/image/article/indexing-05.jpg" alt="Tự động index website nhanh gấp 10 lần với Google Indexing API" title="Tự động index website nhanh gấp 10 lần với Google Indexing API" height=100% width=100%><figcaption><p>Tự động index website nhanh gấp 10 lần với Google Indexing API</p></figcaption></figure>

<figure><img src="https://banmaixanh.vercel.app/image/article/indexing-06.jpg" alt="Tự động index website nhanh gấp 10 lần với Google Indexing API" title="Tự động index website nhanh gấp 10 lần với Google Indexing API" height=100% width=100%><figcaption><p>Tự động index website nhanh gấp 10 lần với Google Indexing API</p></figcaption></figure>

Bước 2, tạo Key JSON. Trình tự từng bước gồm: Chọn tab `Keys` > `Add Key` > `Create new key` > Chọn định dạng JSON và tải xuống. File này chứa thông tin xác thực quan trọng, vì vậy hãy lưu trữ nó một cách an toàn và không chia sẻ với người khác. Bạn sẽ cần file này khi thiết lập mã nguồn để tương tác với API.

<figure><img src="https://banmaixanh.vercel.app/image/article/indexing-07.jpg" alt="Tự động index website nhanh gấp 10 lần với Google Indexing API" title="Tự động index website nhanh gấp 10 lần với Google Indexing API" height=100% width=100%><figcaption><p>Tự động index website nhanh gấp 10 lần với Google Indexing API</p></figcaption></figure>

### Xác minh quyền sở hữu website

Cuối cùng, bạn chỉ cần lấy email đã tạo ở `Service account` và [cấp quyền](https://search.google.com/search-console/users?resource_id) trong `Google Search Console`, với quyền Chủ sở hữu (cấp cao nhất).

<figure><img src="https://banmaixanh.vercel.app/image/article/indexing-08.jpg" alt="Tự động index website nhanh gấp 10 lần với Google Indexing API" title="Tự động index website nhanh gấp 10 lần với Google Indexing API" height=100% width=100%><figcaption><p>Tự động index website nhanh gấp 10 lần với Google Indexing API</p></figcaption></figure>

Như vậy là quá trình đăng ký để sử dụng Google Index API đã hoản tất. Bước tiếp theo, là tự động hóa index thông qua Python, sẽ được trình bày chi tiết ở dưới đây.

## Tự động hóa index bằng Python

Việc tự động hóa quá trình index website bằng Python không chỉ giúp tiết kiệm thời gian mà còn đảm bảo tính nhất quán trong việc quản lý index của website. Phần này sẽ hướng dẫn chi tiết về cách thiết lập và triển khai giải pháp tự động hóa.

### Chuẩn bị môi trường và thư viện

Đầu tiên, bạn cần cài Python, cùng các thư viện `google-pi-python-client` và `oauth2client` để công cụ tương tác với Google Index API. Việc cài thư viện được thực hiện bằng các câu lệnh sau:

```
pip install google-api-python-client

pip install oauth2client
```

Tiếp theo, bạn cần chuẩn bị cấu trúc thư viện, gồm đoạn tệp `.py` để triển khai, tệp `.bat` để chạy động triển khai, tệp `.json` chứa key, và tệp `.txt` chứa url cần khai báo. Chúng nên đặt cùng folder để tiện theo dõi và quản lý.

### Thiết kế luồng xử lý dữ liệu và thực thi yêu cầu index website

Như đã chia sẽ ở phần trên, bạn sẽ cần 4 tệp để tự động hóa index với Python, bao gồm:

Đầu tiên là tệp python, gồm các câu lệnh, cấu trúc mã để thực thi. Cấu trúc đề xuất như sau:

```
import json
import requests
import datetime
from google.oauth2 import service_account
from google.auth.transport.requests import Request
from google.auth.exceptions import RefreshError

def get_timestamp():
    now = datetime.datetime.now()
    return f"{now.hour} giờ {now.minute} phút {now.second} giây"

counter = 1
SERVICE_ACCOUNT_FILE = r"D:/OneDrive/document/takenote/nhavantuonglai.json"
SCOPES = ["https://www.googleapis.com/auth/indexing"]

try:
    credentials = service_account.Credentials.from_service_account_file(
        SERVICE_ACCOUNT_FILE, scopes=SCOPES
    )
except Exception:
    print(f"{counter} | {get_timestamp()} | {url} | Đã xảy ra lỗi.")
    exit(1)

API_ENDPOINT = "https://indexing.googleapis.com/v3/urlNotifications:publish"

def index_url(url):
    global counter
    try:
        credentials.refresh(Request())
        if not credentials.token:
            print(f"{counter} | {get_timestamp()} | {url} | Đã xảy ra lỗi.")
            counter += 1
            return None

        response = requests.post(
            API_ENDPOINT,
            headers={
                "Content-Type": "application/json",
                "Authorization": f"Bearer {credentials.token}"
            },
            json={"url": url, "type": "URL_UPDATED"}
        )
        
        if response.status_code == 200:
            print(f"{counter} | {get_timestamp()} | {url} | Gửi url thành công.")
            counter += 1
            return True
        else:
            print(f"{counter} | {get_timestamp()} | {url} | Đã xảy ra lỗi.")
            counter += 1
            return None
            
    except Exception:
        print(f"{counter} | {get_timestamp()} | {url} | Đã xảy ra lỗi.")
        counter += 1
        return None

try:
    with open("D:/OneDrive/document/takenote/nhavantuonglai.txt", "r") as file:
        urls = [url.strip() for url in file.readlines() if url.strip()]
except FileNotFoundError:
    print(f"{counter} | {get_timestamp()} | {url} | Đã xảy ra lỗi.")
    exit(1)

for url in urls:
    index_url(url)
```

Trong đoạn code trên, khi thực thi thì lệnh trả về sẽ theo cú pháp gồm: `Số thứ tự | Thời gian | Url | Trạng thái`. Ví dụ:

```
53 | 4 giờ 3 phút 43 giây | https://nhavantuonglai.com/analytics/radio | Gửi url thành công.
```

Tiếp theo là tệp batch, được sử dụng để thực thi tệp Python tự động. Cấu trúc đề xuất như sau:

```
@echo off
python D:\OneDrive\document\takenote\indexnow.py
pause
```
Trong đoạn code trên, bạn chỉ cần thay `D:\OneDrive\document\takenote\indexnow.py` bằng đường dẫn tương ứng là được.

Và tệp cuối là là văn bản thô định dạng txt. Cấu trúc file rất đơn giản, gồm các url cần khai báo, ví dụ:

```
https://nhavantuonglai.com/article/dao-duc-nhanh-cham
https://nhavantuonglai.com/article/dao-duc-phan-xet
https://nhavantuonglai.com/article/dao-duc-so-thu
https://nhavantuonglai.com/article/dao-duc-tot-hon
https://nhavantuonglai.com/article/dao-giao-bai-hoc
https://nhavantuonglai.com/article/dao-nguoc-sinh-hoc
```

Bạn chỉ cần thay tương ứng các url trên bằng các url website của bạn. Lưu ý rằng, tệp này chỉ bao gồm url, không bao gồm thêm thành phần, giá trị nào.

Còn về tệp JSON, bạn cần tạo và tải theo các bước hướng dẫn như phần trên, đặt cùng folder và thay đường dẫn tương ứng trong tệp `.py` là được.

Sau khi hoàn tất các bước trên, bạn chỉ cần chạy tệp `.bat`, Google Index API sẽ thực thi yêu cầu là gửi các url trong tệp `.txt` lên hệ thống, dựa trên cấu hình của tệp `.py` và mã khóa của tệp `.json`.

<figure><img src="https://banmaixanh.vercel.app/image/article/indexing-09.jpg" alt="Tự động index website nhanh gấp 10 lần với Google Indexing API" title="Tự động index website nhanh gấp 10 lần với Google Indexing API" height=100% width=100%><figcaption><p>Tự động index website nhanh gấp 10 lần với Google Indexing API</p></figcaption></figure>

Lưu ý rằng, tất cả các tệp nên đặt cùng folder cho tiện quản lý và theo dõi, bạn cũng cần đảm bảo cấu trúc đường dẫn trong tệp `.py` và tệp `.bat` là khác nhau, nên cần chú ý điều chỉnh lại cho phù hợp.

### Triển khai và giám sát

Sau khi hoàn thành phát triển, việc triển khai và giám sát hệ thống là cực kỳ quan trọng. Đầu tiên, bạn cần chọn môi trường hosting phù hợp để chạy script tự động. Điều này có thể là một server riêng, cloud service như AWS Lambda hoặc Google Cloud Functions, hoặc thậm chí là một container Docker. Môi trường hosting cần đảm bảo tính ổn định và có khả năng chạy 24/7 nếu cần thiết.

Về mặt giám sát, bạn cần thiết lập các metric quan trọng để theo dõi hiệu quả của hệ thống. Các metric này có thể bao gồm số lượng URL đã được index thành công, thời gian trung bình để một URL được index, tỷ lệ lỗi, và việc sử dụng quota API. Việc thiết lập cảnh báo cho các trường hợp bất thường cũng rất quan trọng, ví dụ khi tỷ lệ lỗi vượt quá ngưỡng cho phép hoặc khi hệ thống không phát hiện được hoạt động indexing trong một khoảng thời gian nhất định. Ngoài ra, việc tích hợp với các công cụ monitoring như Grafana, Prometheus hoặc các dịch vụ APM (Application Performance Monitoring) sẽ giúp bạn có cái nhìn tổng quan và chi tiết về hiệu suất của hệ thống.

Một khía cạnh quan trọng khác trong quá trình triển khai là việc thiết lập quy trình backup và khôi phục. Điều này bao gồm việc sao lưu định kỳ cơ sở dữ liệu chứa trạng thái indexing, file cấu hình, và các thông tin xác thực. Quy trình khôi phục cần được test thường xuyên để đảm bảo có thể nhanh chóng phục hồi hệ thống trong trường hợp xảy ra sự cố.

### Tối ưu hóa và mở rộng

Sau khi hệ thống đã hoạt động ổn định, việc tối ưu hóa và mở rộng là bước tiếp theo cần xem xét. Đầu tiên, phân tích logs và metrics để xác định các điểm nghẽn và cơ hội cải thiện hiệu suất. Ví dụ, bạn có thể tối ưu hóa logic xử lý hàng đợi để giảm thời gian chờ giữa các yêu cầu API, hoặc cải thiện thuật toán phát hiện URL cần index để giảm tải cho hệ thống.

Về mặt mở rộng, cần xem xét khả năng xử lý đồng thời nhiều website hoặc tăng số lượng URL có thể xử lý mỗi ngày. Điều này có thể đòi hỏi việc thiết kế lại kiến trúc hệ thống để hỗ trợ xử lý phân tán hoặc triển khai các giải pháp load balancing. Đồng thời, việc xây dựng giao diện quản trị để theo dõi và điều chỉnh quá trình indexing cũng là một cách để nâng cao tính tiện dụng của hệ thống.

## Kết luận

Google Index API là một công cụ mạnh mẽ giúp các webmaster và nhà phát triển kiểm soát tốt hơn quá trình indexing website của họ. Thông qua việc tự động hóa quá trình này bằng Python, chúng ta có thể xây dựng một hệ thống đáng tin cậy và hiệu quả để quản lý việc index nội dung website.

Qua bài viết này, chúng ta đã tìm hiểu về bản chất của Google Index API, quy trình đăng ký và thiết lập, cũng như cách xây dựng một hệ thống tự động hóa hoàn chỉnh. Việc triển khai thành công một hệ thống như vậy không chỉ giúp tiết kiệm thời gian và công sức mà còn đảm bảo nội dung website luôn được cập nhật kịp thời trên Google Search.

Trong tương lai, chúng ta có thể kỳ vọng vào những cải tiến từ phía Google để làm cho quá trình indexing hiệu quả hơn. Điều này có thể bao gồm việc tăng giới hạn API, thêm các tính năng mới cho phép kiểm soát chi tiết hơn quá trình indexing, hoặc tích hợp sâu hơn với các công cụ SEO khác. Đồng thời, việc phát triển các công cụ và framework mới cũng sẽ giúp quá trình tự động hóa trở nên dễ dàng và linh hoạt hơn.

Để đạt được hiệu quả tối đa khi sử dụng Google Index API, các bạn nên tuân thủ một số nguyên tắc cơ bản. Đầu tiên, hãy đảm bảo chỉ gửi yêu cầu index cho những URL thực sự cần thiết để tránh lãng phí quota. Tiếp theo, xây dựng hệ thống monitoring đáng tin cậy để phát hiện và xử lý các vấn đề kịp thời. Cuối cùng, luôn cập nhật kiến thức về các thay đổi và cải tiến mới từ Google để có thể áp dụng vào hệ thống của mình một cách hiệu quả.

<figure><img src="https://banmaixanh.vercel.app/image/cover/001-771.jpg" alt="Tự động index website nhanh gấp 10 lần với Google Indexing API" title="Tự động index website nhanh gấp 10 lần với Google Indexing API" height=100% width=100%><figcaption><p>Tự động index website nhanh gấp 10 lần với Google Indexing API</p></figcaption></figure>
