---
pubDatetime: 2024-04-26T10:10:00Z
title: App Hosting so với Hosting gốc thì nên sử dụng cái nào?
description: Nếu bạn đang xây dựng một ứng dụng website full-stack với các framework hiện đại, được hiển thị bằng máy chủ như Angular và Next, hãy sử dụng Firebase App Hosting.
featured: false
image: https://banmaixanh.org/image/cover/001-750.jpg
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
---

_Nếu bạn đang xây dựng một ứng dụng website full-stack với các framework hiện đại, được hiển thị bằng máy chủ như Angular và Next, hãy sử dụng Firebase App Hosting. Nếu bạn đang xây dựng một website tĩnh, hãy sử dụng Firebase Hosting gốc._

Trong trường hợp bạn bỏ lỡ nó tại Google I / O, chúng tôi đã công bố việc phát hành Firebase App Hosting, sản phẩm lưu trữ website serverless thế hệ tiếp theo của chúng tôi cho các ứng dụng đầy đủ ngăn xếp!

Nếu bạn đang nghĩ, Không phải Firebase đã có sản phẩm lưu trữ website sao? Bạn không đơn độc. Và chúng tôi ở đây để làm rõ mọi thứ.

Sản phẩm lưu trữ ban đầu của Firebase là để lưu trữ các website tĩnh. Firebase App Hosting dành cho các ứng dụng website full-stack được xây dựng với các framework hiện đại như Angular và Next.js; Nó dành cho các ứng dụng website yêu cầu phụ trợ.

Vậy tại sao chúng tôi lại xây dựng một sản phẩm lưu trữ khác? Và khi nào bạn sẽ chọn cái này hơn cái khác? Chà, hãy nói về những gì mới và khác biệt với App Hosting và lý do tại sao bạn có thể muốn sử dụng nó cho ứng dụng website tiếp theo của mình.

## Sự phát triển của Firebase Hosting

Khi chúng tôi xây dựng Firebase Hosting vào năm 2014, các ứng dụng trang đơn là tất cả các cơn thịnh nộ. Hosting được thiết kế để triển khai dễ dàng, cục bộ các ứng dụng website tĩnh và nó vẫn làm điều đó rất tốt.

Những gì chúng tôi không thấy sắp tới, là kết xuất phía máy chủ sẽ trở lại theo phong cách.

Trong vài năm qua, chúng tôi đã thêm các tính năng để làm cho Hosting gốc hoạt động tốt hơn với các ứng dụng full-stack yêu cầu phụ trợ. Vào năm 2022, chúng tôi đã khởi chạy thử nghiệm _khung website:_ CLI nhận biết khung kết hợp Firebase Hosting và Cloud Functions cho Firebase lại với nhau. Vào năm 2023, chúng tôi tiếp tục thử nghiệm các kênh xem trước và khôi phục toàn bộ ngăn xếp.

Mặc dù thử nghiệm _khung website_ này làm mượt mà một số vấn đề mà các nhà phát triển triển khai ứng dụng full-stack cho Firebase phải đối mặt, nhưng nó có những hạn chế. Đó là một cách tiếp cận dựa trên công cụ bị hạn chế bởi sự trừu tượng và cơ sở hạ tầng mười năm tuổi.

Đã đến lúc lấy mọi thứ chúng ta đã học được từ thử nghiệm _website frameworks_ và hợp tác với phần còn lại của Google để hình dung lại trải nghiệm phát triển website găng tay trắng có thể là gì để vận chuyển các ứng dụng website hiện đại, đầy đủ.

## Có gì khác biệt với App Hosting?

App Hosting không phải là sự thay thế thả vào cho Firebase Hosting gốc. Nó lấp đầy một khoảng trống cụ thể. Nó được thiết kế để hỗ trợ các khung công tác hiện đại, được kết xuất bởi máy chủ từ đầu đến cuối và tuân theo các phương pháp hay nhất mới nhất cho các ứng dụng sẵn sàng cho doanh nghiệp.

### App Hosting là một giải pháp phi máy chủ, full-stack

Firebase App Hosting quản lý mọi thứ từ CDN đến kết xuất phía máy chủ. Khi đến lúc triển khai, App Hosting xây dựng tài sản tĩnh của ứng dụng của bạn trong Cloud Build, triển khai nội dung động lên Cloud Run và phân phối nội dung được lưu trong bộ nhớ cache trên Cloud CDN. Khi các framework Javascript full-stack như Next.js và Angular làm mờ ranh giới giữa mã frontend và backend, việc có một giải pháp duy nhất để triển khai nội dung tĩnh và động cùng nhau ngày càng trở nên quan trọng.

App Hosting không chỉ tạo phụ trợ của bạn, nó còn quản lý phụ trợ cho bạn. App Hosting là một sự trừu tượng cố định của Cloud Run, cung cấp cho bạn các giá trị mặc định thông minh để tối ưu hiệu suất và chi phí của ứng dụng. Dịch vụ Cloud Run do App Hosting quản lý của bạn tự động mở rộng quy mô với lưu lượng truy cập bổ sung và giảm quy mô xuống 0 khi không hoạt động để tiết kiệm tiền cho bạn. Và bởi vì App Hosting được xây dựng trên Cloud Run trực tiếp (thay vì Cloud Functions cho Firebase trừu tượng của Cloud Run), chúng tôi sẽ có thể hiển thị các tính năng Cloud Run mới trong App Hosting nhanh hơn nhiều.

### App Hosting nhận biết khuôn khổ

Tất cả các bài học chúng tôi học được trong thử nghiệm _website frameworks_ đã đi vào sự phát triển của Firebase App Hosting.

Firebase App Hosting có hỗ trợ xây dựng và triển khai không cần cấu hình cho Angular và Next.js, với nhiều khung công tác hơn sắp ra mắt.

Firebase App Hosting sử dụng bộ điều hợp xây dựng để kiểm tra mã nguồn của bạn, diễn giải cấu hình khung của bạn và tạo hướng dẫn xây dựng và triển khai cho ứng dụng của bạn dựa trên những gì được phát hiện trong nguồn. Các bộ điều hợp xây dựng này được xây dựng trên bộ sưu tập Cloud Native Buildpack mã nguồn mở của Google, có nghĩa là tất cả Google (và bạn, nếu bạn quan tâm đến việc đóng góp) có thể cộng tác để cải thiện tối ưu khung cụ thể trên Firebase và Google Cloud.

Hỗ trợ Angular của App Hosting được xây dựng với sự hợp tác chặt chẽ với nhóm Angular. Họ thậm chí còn phát hành các phiên bản mới của Angular được thiết kế đặc biệt để hỗ trợ quá trình xây dựng App Hosting!

### App Hosting tập trung vào git

Chúng tôi đã thiết kế Firebase App Hosting được tích hợp sâu với các nhà cung cấp kiểm soát nguồn, để việc triển khai sản xuất an toàn và hiệu quả nhất có thể.

Khi bạn tạo backend App Hosting trong bảng điều khiển Firebase, bạn cài đặt ứng dụng Firebase GitHub trên kho lưu trữ mã nguồn của mình. Sau đó, việc triển khai dễ dàng như _git push._ Bạn thậm chí không cần phải cài đặt Firebase CLI để sử dụng App Hosting!

Khi bạn đẩy một thay đổi cho chi nhánh trực tiếp của mình, App Hosting sẽ xây dựng nhánh trong môi trường Cloud Build có thể tái tạo, đảm bảo các điều kỳ quặc của máy cục bộ của bạn không được chuyển đến sản xuất.

Trong giao diện người dùng bảng điều khiển App Hosting, bạn có thể theo dõi từng phiên bản ứng dụng website của mình theo cam kết git chính xác mà nó được xây dựng để bạn biết những thay đổi nào đang hoạt động tại một thời điểm nhất định:

### Được xây dựng trên kiến trúc hiện đại

Các phương pháp hay nhất trong ngành đã thay đổi trong mười năm qua. Chúng tôi đã thiết kế App Hosting với các phương pháp hay nhất mới, đảm bảo nó có khả năng chịu lỗi tốt hơn, hỗ trợ nhiều khu vực hơn và được xây dựng 100% trên Google.

Firebase Hosting ban đầu là một phân đoạn duy nhất: một dịch vụ xử lý tải lên của bạn và một CDN đứng trước lưu lượng truy cập của bạn. Một lỗi duy nhất theo giả thuyết có thể gây ra sự cố ngừng hoạt động toàn cầu trên tất cả các khách hàng.

Firebase App Hosting là một dịch vụ khu vực. Lưu lượng truy cập của bạn vẫn được phục vụ trên toàn cầu, nhưng toàn bộ cơ sở hạ tầng của App Hosting được cách ly dựa trên khu vực phụ trợ của bạn. Điều này có nghĩa là một thất bại thảm khốc ở us-central1 sẽ không ảnh hưởng đến khách hàng ở Châu Âu-Tây1.

## Tại sao bạn vẫn có thể muốn sử dụng Hosting gốc

Firebase App Hosting không phải là sự thay thế thả vào cho sản phẩm Hosting gốc; Nó được tối ưu cho các ứng dụng website được hiển thị bằng máy chủ yêu cầu phụ trợ. Nó cũng đang ở chế độ xem trước, trong khi Hosting gốc là một sản phẩm trưởng thành. Mong đợi App Hosting sẽ bổ sung nhiều tính năng hơn theo thời gian, nhưng hiện tại, đây là một số trường hợp sử dụng cần lưu ý.

### Ứng dụng tĩnh

Trong khi chúng tôi đang làm việc để cải thiện cách App Hosting xử lý các tệp tĩnh, chúng tôi khuyên bạn nên sử dụng Hosting gốc cho các ứng dụng website hoàn toàn tĩnh, vì nó sẽ hiệu quả hơn và tiết kiệm chi phí trong các tình huống này.

### Xem trước kênh

Nếu bạn muốn triển khai bản xem trước website của mình cho các URL tạm thời trên mỗi yêu cầu kéo, thì hãy gắn bó với Firebase Hosting ban đầu ngay bây giờ, cho đến khi App Hosting hỗ trợ bản xem trước.

### Các khung website khác

Thử nghiệm nhận biết khung ban đầu của Firebase Hosting có hỗ trợ cho các khung như Flutter, Svelte và Astro mà App Hosting chưa hỗ trợ.

### Kế hoạch tia lửa

Mặc dù cả App Hosting và Firebase Hosting gốc đều có các cấp sử dụng miễn phí, nhưng Firebase Hosting ban đầu có thể được sử dụng trên gói định giá Spark, trong khi App Hosting yêu cầu gói Blaze. Tìm hiểu thêm trên trang định giá Firebase.

### Bạn vẫn không chắc chắn?

Hãy xem hướng dẫn so sánh sản phẩm của App Hosting để xem nó so sánh với một số sản phẩm Firebase và Cloud như thế nào, bao gồm Firebase Hosting gốc, Cloud Functions cho Firebase, Google Cloud Functions và Cloud Run.

## Quan tâm đến việc bắt đầu với App Hosting?

Có rất nhiều điều chúng tôi nghĩ rằng bạn sẽ có thể làm với Firebase App Hosting và chúng tôi rất vui khi thấy những loại ứng dụng nào bạn có thể xây dựng với nó!

Để bắt đầu, hãy truy cập bảng điều khiển Firebase và xem tài liệu của chúng tôi.

Như mọi khi, nếu bạn có thắc mắc, bạn có thể liên hệ với chúng tôi trên bất kỳ kênh hỗ trợ nào của chúng tôi hoặc đăng câu hỏi trên Stack Overflow. Chúc may mắn, và vui vẻ!

Với sự kết hợp của các công cụ mạnh mẽ từ Firebase và tính linh hoạt của Astro, bạn có thể dễ dàng xây dựng và triển khai các ứng dụng website hiệu quả. Nếu bạn có bất kỳ câu hỏi nào hoặc cần hỗ trợ thêm, đừng ngần ngại liên hệ với **github/nhavantuonglai** qua email [info@nhavantuonglai.com](mailto:info@nhavantuonglai.com).

<figure><img src="https://banmaixanh.org/image/cover/001-449.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>