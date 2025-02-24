---
pubDatetime: 2024-05-09T10:10:00Z
title: Hướng dẫn xuất bản website bằng Vercel
description: Astro là một framework hiện đại giúp xây dựng các website tĩnh nhanh chóng và hiệu quả.
featured: false
image: https://banmaixanh.org/image/cover/001-737.jpg
tags:
  - google
  - google console
  - seo
  - google seo
  - redirect
  - website
  - website builder
  - developer
  - astro
  - deploy
  - framework
  - vercel
  - tao website
  - tao website don gian
  - tao website github
  - ma nguon mo
  - website nhavantuonglai
---

_Astro là một framework hiện đại giúp xây dựng các website tĩnh nhanh chóng và hiệu quả. Điểm mạnh của Astro nằm ở việc sử dụng ít JavaScript nhất có thể trên trình duyệt, giúp tối ưu tốc độ tải trang và trải nghiệm người dùng._

## Giới thiệu framework Astro

Astro là một framework hiện đại giúp xây dựng các website tĩnh nhanh chóng và hiệu quả. Điểm mạnh của Astro nằm ở việc sử dụng ít JavaScript nhất có thể trên trình duyệt, giúp tối ưu tốc độ tải trang và trải nghiệm người dùng. Các đặc điểm nổi bật của Astro bao gồm:

– Performance tối ưu: Bằng cách chỉ gửi những gì cần thiết đến trình duyệt, Astro giảm thiểu JavaScript tải xuống và thực thi.

– Component-Driven: Sử dụng các thành phần từ nhiều framework như React, Vue, Svelte, và Preact.

– Tính năng Island Architecture: Tách biệt các thành phần tương tác từ phần nội dung tĩnh, giúp website tải nhanh hơn.

– Hỗ trợ SSR (Server-Side Rendering): Kết hợp khả năng render phía máy chủ và static site generation, cung cấp sự linh hoạt tối đa trong phát triển.

Astro đặc biệt hữu ích cho các dự án mà tốc độ tải trang và SEO là yếu tố quan trọng, như các trang blog, tài liệu, và các trang marketing.

## Giới thiệu về Vercel

Vercel là một nền tảng dịch vụ đám mây chuyên về triển khai và lưu trữ các ứng dụng website tĩnh và động. Được thành lập bởi Guillermo Rauch vào năm 2015, Vercel đã nhanh chóng trở thành một trong những giải pháp hàng đầu cho các nhà phát triển website hiện đại, đặc biệt là những người sử dụng Next.js – một framework React phổ biến cũng được phát triển bởi Vercel.

### Tính năng nổi bật của Vercel

– Triển khai dễ dàng: Vercel cung cấp một quy trình triển khai đơn giản và nhanh chóng. Người dùng chỉ cần kết nối với kho lưu trữ mã nguồn của mình trên GitHub, GitLab hoặc Bitbucket, và Vercel sẽ tự động xây dựng và triển khai ứng dụng mỗi khi có thay đổi mã nguồn.

– Hiệu suất cao: Với việc tối ưu CDN (Content Delivery Network) toàn cầu, Vercel đảm bảo rằng ứng dụng của bạn được phân phối với tốc độ nhanh chóng đến người dùng ở mọi nơi trên thế giới. Điều này giúp cải thiện trải nghiệm người dùng và tăng hiệu suất website.

– Tích hợp với các công cụ phát triển: Vercel hỗ trợ tích hợp sâu với nhiều công cụ phát triển phổ biến như Git, Next.js, React, và nhiều framework khác. Điều này giúp các nhà phát triển dễ dàng duy trì và nâng cấp ứng dụng của mình.

– Preview Deployments: Một trong những tính năng đáng chú ý của Vercel là khả năng tạo các bản triển khai xem trước (preview deployments) cho mỗi pull request. Điều này cho phép nhóm phát triển và các bên liên quan có thể kiểm tra và đánh giá các thay đổi trước khi chúng được hợp nhất vào nhánh chính.

– Serverless Functions: Vercel cung cấp khả năng chạy các hàm serverless, cho phép các nhà phát triển xây dựng các API động và xử lý các yêu cầu backend mà không cần quản lý máy chủ. Điều này làm giảm đáng kể sự phức tạp và chi phí của việc duy trì cơ sở hạ tầng.

### Lợi ích của việc sử dụng Vercel

– Tối ưu SEO và hiệu suất: Các website tĩnh và ứng dụng được triển khai trên Vercel thường có thời gian tải trang nhanh và điểm SEO cao, nhờ vào việc tối ưu các yếu tố quan trọng như phân phối nội dung qua CDN và sử dụng công nghệ tối ưu hình ảnh.

– Quản lý đơn giản: Vercel cung cấp một giao diện người dùng trực quan và dễ sử dụng, giúp việc quản lý các dự án và triển khai trở nên dễ dàng hơn bao giờ hết. Người dùng có thể xem log, kiểm tra trạng thái triển khai, và quản lý các cài đặt dự án một cách hiệu quả.

– Hỗ trợ cộng đồng mạnh mẽ: Là một nền tảng được yêu thích bởi nhiều nhà phát triển, Vercel có một cộng đồng sử dụng rộng lớn và năng động. Điều này cung cấp cho người dùng nhiều tài nguyên hỗ trợ, từ tài liệu chi tiết, hướng dẫn, đến các diễn đàn thảo luận và chia sẻ kinh nghiệm.

Vercel là một công cụ mạnh mẽ dành cho các nhà phát triển website hiện đại, giúp họ triển khai và quản lý các ứng dụng một cách dễ dàng và hiệu quả. Với các tính năng tiên tiến và khả năng tích hợp mạnh mẽ, Vercel không chỉ giúp tăng tốc độ phát triển mà còn cải thiện đáng kể hiệu suất và trải nghiệm người dùng.

<figure><img src="https://banmaixanh.org/image/article/website-deploy-05.jpg" alt="vercel-website-deploy-nhavantuonglai" title="vercel-website-deploy-nhavantuonglai" height=100% width=100%><figcaption><p>vercel-website-deploy-nhavantuonglai</p></figcaption></figure>

## Hướng dẫn deploy website chạy bằng Astro thông qua Vercel

Triển khai Vercel là kết quả của việc xây dựng thành công Project của bạn.

Khi bạn tạo triển khai, Vercel sẽ tự động thêm URL được tạo mới và duy nhất. Bạn có thể truy cập URL này để xem trước các thay đổi của mình trong môi trường trực tiếp.

Bạn cũng có thể cho phép khách truy cập để lại phản hồi về Deployments của mình bằng cách thêm gói Thanh công cụ Vercel vào dự án của bạn.

<figure><img src="https://banmaixanh.org/image/article/website-deploy-01.jpg" alt="vercel-website-deploy-nhavantuonglai" title="vercel-website-deploy-nhavantuonglai" height=100% width=100%><figcaption><p>vercel-website-deploy-nhavantuonglai</p></figcaption></figure>

### Vercel CLI

Vercel CLI cho phép bạn triển khai các Dự án của mình trực tiếp từ Giao diện dòng lệnh (CLI). Bạn có thể sử dụng phương pháp triển khai này cho dù dự án của bạn có được kết nối với kho lưu trữ Git hay không.

Đối với một Project mới, deploy đầu tiên sẽ yêu cầu liên kết thư mục cục bộ của bạn với Vercel Project. Điều này được thực hiện bằng cách chạy lệnh trong thư mục dự án cục bộ của bạn.

```
vercel
```

Khi tạo Triển khai đầu tiên cho một Dự án, lệnh sẽ tạo Production Deployment.

Sau khi chạy lệnh này, một thư mục được thêm vào thư mục gốc của thư mục dự án của bạn. Nó chứa cả tổ chức và dự án. Vercel CLI tự động phát hiện framework mà dự án của bạn đang sử dụng.

Sau bước ban đầu, bạn có thể chạy lại lệnh để tạo Triển khai Xem trước. Để tạo	Production Deployment, hãy sử dụng lệnh.

```
vercel --prod
```

Bạn có thể sử dụng Vercel CLI để tạo CI/CD workflows tùy chỉnh và tích hợp vào các quy trình hiện có của mình.

Hơn nữa, khi sử dụng và , bạn có thể ngăn cấp quyền truy cập vào mã nguồn bằng cách chỉ tải các đầu ra xây dựng được tạo lên Vercel.

```
vercel buildvercel deploy --prebuilt
```

#### Bước 0: Khoanh vùng dự án

Nếu bạn đã có một dự án Astro trên máy tính, hãy sử dụng VS Code để mở folder chứa dự án.

Nếu bạn chưa có một dự án Astro trên máy tính, hãy tạo folder trên máy tính và thực hiện thao tác như trên.

#### Bước 1: Cài đặt Astro

Trước hết, bạn cần cài đặt Astro. Nếu chưa cài đặt Node.js và npm, hãy tải và cài đặt chúng từ website Node.js.

Mở terminal và chạy lệnh sau để tạo một dự án mới với Astro:

```
npm create astro@latest
```

Lệnh này sẽ tạo ra một dự án Astro mới. Làm theo các hướng dẫn trên màn hình để hoàn tất việc thiết lập dự án của bạn.

#### Bước 2: Cài đặt Vercel CLI

Để triển khai website lên Vercel, bạn cần cài đặt Vercel CLI. Mở terminal và chạy lệnh sau:

```
npm install -g vercel
```

Sau khi cài đặt xong, đăng nhập vào tài khoản Vercel của bạn bằng cách chạy lệnh:

```
vercel login
```

#### Bước 3: Cấu hình dự án Astro

Trong thư mục dự án Astro, bạn cần cấu hình một số thiết lập để đảm bảo dự án có thể hoạt động tốt trên Vercel. Mở file astro.config.mjs và đảm bảo rằng thư mục đầu ra được thiết lập là dist:

```
export default {
outDir: 'dist',
…
};
```

#### Bước 4: Xây dựng website với Astro

Trước khi triển khai, bạn cần xây dựng website của mình. Trong thư mục dự án Astro, chạy lệnh:

```
npm run build
```

Lệnh này sẽ tạo ra phiên bản tĩnh của website trong thư mục dist.

#### Bước 5: Triển khai lên Vercel

Sau khi đã xây dựng website, bạn có thể triển khai nó lên Vercel. Mở terminal và chạy lệnh:

```
vercel
```

Lệnh này sẽ bắt đầu quá trình triển khai. Bạn sẽ được hỏi một số câu hỏi để cấu hình dự án:

– Link to existing project?: Chọn No để tạo một dự án mới.

– What's your project name?: Nhập tên cho dự án của bạn.

– In which directory is your code located?: Nhập `.` để sử dụng thư mục hiện tại.

Vercel sẽ tự động phát hiện cấu hình dự án Astro và hoàn tất việc triển khai. Sau khi quá trình hoàn tất, bạn sẽ nhận được một URL để truy cập website của mình.

<figure><img src="https://banmaixanh.org/image/article/website-deploy-04.jpg" alt="vercel-website-deploy-nhavantuonglai" title="vercel-website-deploy-nhavantuonglai" height=100% width=100%><figcaption><p>vercel-website-deploy-nhavantuonglai</p></figcaption></figure>

### Git

Cách phổ biến nhất để tạo Deployment trên Vercel là thông qua việc push code vào Git repositories.

Tạo Triển khai tự động bắt đầu bằng cách nhập kho lưu trữ Git trên Vercel. Kho lưu trữ này có thể là riêng tư hoặc công khai. Để thiết lập kho lưu trữ Git, hãy nhấp vào nút Dự án mới từ bảng điều khiển Vercel và chọn một trong các nhà cung cấp Git sau:

– GitHub.

– GitLab.

– Bitbucket.

Triển khai ứng dụng của bạn bằng tích hợp Git của Vercel cung cấp cho bạn:

– Cộng tác được đơn giản hóa thông qua các yêu cầu kéo hoặc yêu cầu hợp nhất.

– Khả năng kiểm tra các tính năng và thay đổi mới bằng cách sử dụng Preview Deployments trước khi hợp nhất với nhánh để tự động tạo Production Deployment.

– Khả năng nhận phản hồi trực tiếp trong môi trường xem trước với tính năng Nhận xét (trên các nhà cung cấp Git được hỗ trợ).

Bạn cũng có thể tạo triển khai từ tham chiếu Git trực tiếp từ Vercel Dashboard. Điều này rất hữu ích khi bạn cần triển khai các cam kết cụ thể hoặc các thay đổi mới nhất từ chi nhánh, đặc biệt là trong thời gian triển khai tự động có thể bị gián đoạn.

Nếu bạn muốn bắt đầu Triển khai dựa trên các sự kiện bên ngoài trong repo Git của mình, bạn có thể sử dụng Deploy Hooks.

### Deploy Hooks

Deploy Hooks là một cách khác để tạo Deployments trên Vercel. Tuy nhiên, kết nối với kho lưu trữ Git vẫn cần thiết để sử dụng Deploy Hooks.

Phương pháp Deploy Hooks rất hữu ích khi những thay đổi trong một ứng dụng phụ thuộc vào các sự kiện bên ngoài. Nếu những thay đổi này có liên quan đến nội dung và được thực hiện trực tiếp trong Headless Content Management System (CMS) hoặc cơ sở dữ liệu, bạn có thể muốn kích hoạt Triển khai mà không cần chạm vào mã. Ví dụ: bạn có thể muốn kích hoạt triển khai khi bài đăng blog mới được xuất bản hoặc khi bài đăng blog hiện có được cập nhật.

Để sử dụng phương thức triển khai này, bạn phải tạo một URL chấp nhận HTTP hoặc các yêu cầu để kích hoạt Triển khai và chạy lại Bước xây dựng mà không cần phải đẩy một cam kết git mới. URL được tạo là duy nhất cho mọi dự án.

```
GETPOST
```

### Vercel REST API

API Vercel REST được sử dụng để tạo Triển khai bằng cách thực hiện yêu cầu HTTP đến điểm cuối có liên quan. Nội dung của yêu cầu sẽ bao gồm tất cả các tệp bạn muốn triển khai. Bạn sẽ phải tạo SHA cho mỗi tệp và tải lên bằng API Vercel REST.

```
POST
```

Phương pháp triển khai này hữu ích cho các dự án sử dụng quy trình làm việc tùy chỉnh và thêm miền tùy chỉnh vào ứng dụng nhiều đối tượng thuê hoặc tích hợp dịch vụ của bên thứ ba hiện không được nền tảng Vercel hỗ trợ.

## Tóm tắt triển khai

Khi bạn triển khai website của mình lên Vercel, nền tảng sẽ tạo ra nhiều kết quả đầu ra do kết quả xây dựng của bạn. Những kết quả đầu ra đó có thể là:

– Phần mềm trung gian cạnh.

– Tài sản tĩnh (tệp e.g. HTML, CSS, JavaScript).

– Chức năng (Hàm phi máy chủ hoặc Hàm biên).

– Chức năng ISR.

Tóm tắt triển khai cung cấp tổng quan chi tiết về tất cả các kết quả đầu ra này, được sắp xếp theo loại. Bạn có thể sử dụng tóm tắt này để hiểu đầu ra của bản dựng và xác định những gì đang được triển khai.

Để truy cập tóm tắt triển khai, hãy chọn triển khai của bạn từ tab Deployment của dự án. Trong Deployment Status, mở rộng tab Deployment Summary.

<figure><img src="https://banmaixanh.org/image/article/vercel-website-deploy-01.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>

## Thông tin nào có sẵn trong bản tóm tắt này?

Trong bản tóm tắt triển khai, bạn có thể xem danh sách tất cả các thành phần lạ được tạo từ bản dựng của bạn và thông tin cụ thể về chúng.

– Edge Middleware: người phù hợp

– Tài sản tĩnh: tên và kích thước

– Chức năng: loại, tên, thời gian chạy, kích thước và khu vực

– Chức năng ISR: tên, thời gian chạy, kích thước và khu vực. Các hàm ISR được nhóm theo đường dẫn liên quan

Bạn cũng có thể xem thời gian cần thiết để triển khai ứng dụng của mình và framework khi có sẵn.

Quá trình triển khai này giúp bạn nhanh chóng và dễ dàng đưa ứng dụng Astro của mình lên Firebase Hosting. Việc triển khai ứng dụng Astro lên Firebase Hosting là một quy trình đơn giản và nhanh chóng.

## Tùy chỉnh cấu hình (tùy chọn)

Nếu bạn cần tùy chỉnh thêm cấu hình cho dự án trên Vercel, bạn có thể chỉnh sửa file vercel.json trong thư mục gốc của dự án. Dưới đây là một số cấu hình cơ bản:

### Rewrites

Nếu bạn có các đường dẫn động và muốn chúng được xử lý bởi một tệp HTML cụ thể.

```
{
"rewrites": [
{
"source": "/old-url",
"destination": "/new-url"
}
]
}
```

### Redirects

Nếu bạn muốn chuyển hướng các URL cũ đến các URL mới.

```
{
"redirects": [
{
"source": "/old-url",
"destination": "/new-url",
"statusCode": 301
}
]
}
```

### Headers

Nếu bạn muốn thiết lập các tiêu đề HTTP cụ thể cho các tệp hoặc đường dẫn.

```
{
"headers": [
{
"source": "/service-worker.js",
"headers": [
{
"key": "Cache-Control",
"value": "no-cache"
}
]
}
]
}
```

## Quản lý và giám sát

Vercel cung cấp bảng điều khiển mạnh mẽ để bạn quản lý và giám sát website của mình. Tại đây, bạn có thể xem thông tin chi tiết về các lần triển khai, kiểm tra hiệu suất website, và thiết lập các tùy chọn bảo mật.

– Vercel Dashboard: Truy cập bảng điều khiển Vercel tại vercel.com/dashboard. Tại đây, bạn có thể quản lý tất cả các dự án, xem các lần triển khai trước đó, và kiểm tra trạng thái hiện tại của website.

– Monitoring: Vercel cung cấp các công cụ để theo dõi và tối ưu hiệu suất của website. Bạn có thể kiểm tra thời gian tải trang, số lần yêu cầu HTTP, và các chỉ số hiệu suất khác để đảm bảo website hoạt động tốt nhất.

– Quản lý môi trường: Sử dụng Vercel, bạn có thể dễ dàng thiết lập các biến môi trường cho dự án của mình. Điều này rất hữu ích khi bạn cần quản lý các thông tin nhạy cảm như API keys, hoặc cấu hình cho các môi trường phát triển, kiểm thử và sản xuất.

## Tích hợp CI/CD với GitHub

Vercel hỗ trợ tích hợp mạnh mẽ với GitHub để tự động triển khai mỗi khi bạn đẩy mã nguồn lên. Để thiết lập, hãy làm theo các bước sau:

– Kết nối Vercel với GitHub: Trong bảng điều khiển Vercel, chọn _Add New_ và sau đó chọn _Project._ Chọn kho lưu trữ GitHub mà bạn muốn kết nối với Vercel.

– Thiết lập tự động triển khai: Khi bạn kết nối dự án với GitHub, Vercel sẽ tự động tạo một bản triển khai mới mỗi khi bạn đẩy mã nguồn lên nhánh chính (hoặc bất kỳ nhánh nào bạn chỉ định).

– Preview Deployments: Mỗi khi bạn tạo một pull request trên GitHub, Vercel sẽ tạo một bản triển khai xem trước. Điều này cho phép bạn và nhóm của bạn kiểm tra và đánh giá các thay đổi trước khi hợp nhất vào nhánh chính.

Với sự kết hợp của các công cụ mạnh mẽ từ Firebase và tính linh hoạt của Astro, bạn có thể dễ dàng xây dựng và triển khai các ứng dụng website hiệu quả. Nếu bạn có bất kỳ câu hỏi nào hoặc cần hỗ trợ thêm, đừng ngần ngại liên hệ với github/nhavantuonglai qua email [info@nhavantuonglai.com](mailto:info@nhavantuonglai.com).

<figure><img src="https://banmaixanh.org/image/cover/001-449.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>