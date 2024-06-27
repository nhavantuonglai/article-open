---
pubDatetime: 2023-05-12T10:00:00Z
title: Google Search Console Insights và những điều chưa biết
description: Giúp Google và người dùng tìm thấy nội dung website hướng dẫn nâng cao những kỹ thuật giúp tối ưu SEO hiệu quả, đem lại thứ hạng tốt trên công cụ tìm kiếm.
featured: false
image: https://data.nhavantuonglai.com/image/illustrations/cover-nhavantuonglai-com-0649.jpg
tags:
  - google
  - google console
  - seo
  - google seo
  - content
  - developer
---

_Search Console Insights là một trải nghiệm cung cấp cả dữ liệu của Google Search Console (GSC) và dữ liệu của Google Analytics (GA), đồng thời được điều chỉnh cho phù hợp với nhà sáng tạo nội dung và chủ sở hữu website. Sau thông báo tháng trước, chúng tôi đã nhận được phản hồi tích cực của cộng đồng và cả những thắc mắc về những dữ liệu này._

Trong bài đăng này, chúng tôi sẽ trả lời cho một số câu hỏi trong số đó, đồng thời làm rõ một vài điểm. Ví dụ: nếu tìm cách so sánh dữ liệu bạn thấy trong GSC Insights với dữ liệu bạn thấy trong GA, thì có thể bạn sẽ thấy có một số điểm khác biệt – tại sao lại như vậy?

## Câu hỏi thường gặp về Google Search Console Insights

### Tại sao tôi không thể thấy dữ liệu của Google Analytics trong Search Console Insights?

Nếu liên kết GA với Search Console đúng cách, bạn sẽ có quyền truy cập thêm nhiều thông tin chi tiết có thể giúp bạn nắm được hiệu suất nội dung của mình. Nếu không liên kết, bạn sẽ chỉ có quyền truy cập vào thẻ Google Search.

Có một số lý do khiến dữ liệu GA của bạn có thể không xuất hiện trên GSC Insights:

1. Tài sản GSC của bạn không liên kết với tài sản GA: hãy truy cập trung tâm trợ giúp để tìm hiểu về `cách liên kết`. Cụ thể, nếu bạn có các tài sản riêng cho lưu lượng truy cập HTTP và HTTPS trên GSC, hãy nhớ liên kết tài sản nhận được nhiều lưu lượng truy cập nhất hoặc xem xét `xác minh tài nguyên miền` để tổng hợp tất cả lưu lượng truy cập của bạn vào cùng một nơi. Xin lưu ý rằng hiện bạn không thể liên kết với tài sản `Google Analytics 4`, nhưng chúng tôi đang nỗ lực để sớm hỗ trợ loại tài sản này.

2. Bạn không có đủ quyền trên GA: nếu tài sản GSC của bạn có liên kết với tài sản GA mà bạn vẫn không xem được dữ liệu GA, hãy kiểm tra để chắc chắn rằng bạn có `quyền Đọc và phân tích` đối với tài sản Google Analytics được liên kết.

3. Bạn đã chọn không đúng chế độ xem GA trong GSC: GSC Insights cung cấp dữ liệu GA qua một chế độ xem GA cụ thể trong tài sản được liên kết. Nếu bạn không có chế độ xem trong tài sản, chúng tôi sẽ không điền được dữ liệu. Bạn có thể xem hoặc thay đổi chế độ xem đã chọn trong `trang Liên kết` trên Search Console.

### Tại sao dữ liệu tôi thấy trong Google Analytics khác với dữ liệu tôi thấy trong Search Console Insights?

Trước tiên, bạn cần hiểu rằng dữ liệu của GA và GSC có nhiều điểm khác nhau, như nêu trong `bài viết này trên trung tâm trợ giúp`. Hai loại dữ liệu này có định nghĩa khác nhau, một loại dữ liệu biểu thị hoạt động đã xảy ra trên Google Search, còn loại kia biểu thị hành vi của người dùng trên website của bạn. Ngoài ra, dưới đây là một số điểm cụ thể cần lưu ý:

– Tiêu đề và URL của trang: các báo cáo khác trong GSC sẽ dựa trên URL, trong khi GSC Insights sử dụng tham số tiêu đề trang của GA. Mỗi tiêu đề trang có thể có nhiều URL; GSC Insights trích xuất URL chính tắc nổi bật nhất để tìm nạp dữ liệu trên Google Search.

– Phạm vi ngày: GSC Insights hiển thị dữ liệu GA trong 28 ngày qua (dữ liệu của ngày gần nhất có thể sẽ chỉ hiển thị một phần), đôi khi được so sánh với 28 ngày trước đó. Phạm vi thời gian mặc định của GA và GSC là khác nhau, vì vậy, hãy nhớ điều chỉnh ngày cho giống nhau khi so sánh. Ngoài ra, xin lưu ý rằng mặc dù bạn có thể đặt múi giờ của mình trên GA, nhưng GSC Insights sẽ luôn sử dụng Giờ ban ngày Thái Bình Dương. Vì vậy, ngay cả những ngày cụ thể cũng có thể khác nhau khi so sánh.

– Chỉ số: GSC Insights kết hợp các chỉ số của GA (lượt xem trang, thời gian trung bình trên trang) với các chỉ số của Google Search (lượt nhấp, vị trí trung bình). Những chỉ số đó thể hiện các khía cạnh khác nhau của website và chúng được tính toán khác nhau.

### Search Console Insights chọn nội dung mới bằng cách nào?

<figure><img src="https://data.nhavantuonglai.com/image/article/google-search-console-insights-va-nhung-dieu-chua-biet-01.jpg" alt="google-search-console-insights-va-nhung-dieu-chua-biet" height=100% width=100%><figcaption><p>google-search-console-insights-va-nhung-dieu-chua-biet-nhavantuonglai</p></figcaption></figure>

Thẻ nội dung mới hiển thị các trang (trên website của bạn) có lượt xem trang đầu tiên trong 28 ngày qua. Đối với mỗi tiêu đề, chúng tôi cũng có thể cho biết những cụm từ Google Search phổ biến nhất đối với URL chính tắc hàng đầu. Nội dung được sắp xếp theo mức độ gần đây và phải có ít nhất một vài lượt xem thì mới có thể xuất hiện. Có 3 thông tin chính mà chúng tôi sử dụng để điền vào thẻ này:

– Chúng tôi bắt đầu bằng việc kiểm tra những tiêu đề trang đã nhận được lưu lượng truy cập trong 28 ngày qua, nhưng không nhận được lưu lượng truy cập nào năm ngoái.

– Chúng tôi áp dụng một số quy tắc để làm sạch dữ liệu và lọc các trang có ít khả năng là nội dung mới; ví dụ: thay đổi tiêu đề, trang bình luận, trang kết quả Google Search nội bộ và nhiều trang khác.

– Chúng tôi lọc ra các bản dịch của cùng một nội dung và giữ tiêu đề có hiệu suất hàng đầu. Chúng tôi không tổng hợp chỉ số của các bản dịch trang để tránh nhầm lẫn với các chỉ số trong giao diện GA.

Việc chúng tôi không báo cáo nội dung mới của bạn không có nghĩa là nội dung đó không có lưu lượng truy cập GA hoặc không được Index. GSC Insights có thể hiển thị nội dung chưa được Index khi lấy dữ liệu từ GA. Ngoài ra, xin lưu ý rằng nội dung mới không phụ thuộc vào lần thu thập dữ liệu đầu tiên, nội dung của bạn không nhất thiết phải được thu thập dữ liệu hoặc Index thì mới có thể xuất hiện trong thẻ này.

### Search Console Insights chọn nội dung phổ biến nhất bằng cách nào?

<figure><img src="https://data.nhavantuonglai.com/image/article/google-search-console-insights-va-nhung-dieu-chua-biet-02.jpg" alt="google-search-console-insights-va-nhung-dieu-chua-biet" height=100% width=100%><figcaption><p>google-search-console-insights-va-nhung-dieu-chua-biet-nhavantuonglai</p></figcaption></figure>

Thẻ nội dung phổ biến nhất hiển thị các tiêu đề trang có hiệu suất hàng đầu theo số lượt xem trang trong 28 ngày qua. Đối với mỗi tiêu đề, chúng tôi cũng có thể cho biết những cụm từ Google Search phổ biến nhất đối với URL chính tắc hàng đầu. Để xem thêm dữ liệu của nội dung này trên Google Search, bạn có thể nhấp vào dữ liệu đó và xem chi tiết thông tin tổng quan về trang.

Nếu URL không nằm trong tài sản GSC được liên kết, chúng tôi sẽ không cung cấp được dữ liệu trên Google Search.

### Search Console Insights chọn đường liên kết giới thiệu từ các website khác bằng cách nào?

<figure><img src="https://data.nhavantuonglai.com/image/article/google-search-console-insights-va-nhung-dieu-chua-biet-03.jpg" alt="google-search-console-insights-va-nhung-dieu-chua-biet" height=100% width=100%><figcaption><p>google-search-console-insights-va-nhung-dieu-chua-biet-nhavantuonglai</p></figcaption></figure>

Thẻ đường liên kết giới thiệu từ các website khác cho biết cách người dùng khám phá nội dung trên website của bạn thông qua các đường liên kết đến nội dung của bạn trên các website khác.

Mục tiêu của chúng tôi đối với báo cáo này là cung cấp cho bạn một góc nhìn khác về số lượt truy cập do một trang giới thiệu cụ thể tạo ra. Trên GA, khi bạn xem xét lưu lượng truy cập từ một trang giới thiệu cụ thể, lưu lượng truy cập đó bao gồm tất cả lượt xem trang trong phiên hiện tại. Trên GSC Insights, đối với mỗi phiên đến từ một trang giới thiệu cụ thể, chúng tôi sẽ chỉ tính một lượt xem trang. Lưu lượng truy cập bạn thấy trong thẻ này chỉ là một tập hợp con của lưu lượng truy cập giới thiệu mà bạn thường nhìn thấy trong GA.

Xin lưu ý rằng chúng tôi không sử dụng lối tư duy này trong thẻ kênh có lưu lượng truy cập hàng đầu. Số lượt xem trang trong thẻ đường liên kết giới thiệu thường thấp hơn khi so sánh với kênh giới thiệu.

### Tại sao số lượt nhấp có thể thấp hơn số lượt xem trang trong thẻ Google Search?

Có ba lý do chính khiến số lượt nhấp thấp hơn số lượt xem trang:

– Một lượt nhấp có thể mang đến nhiều lượt xem trang – các lượt xem trang khác trong phiên đó cũng được quy cho _Google/tự nhiên._ Tìm hiểu thêm về cách định nghĩa và phân loại phiên.

– Số lượt xem trang GA được quy cho _Google/ tự nhiên_ bao gồm nhiều nền tảng ngoài các kết quả Google Search trên website, chẳng hạn như Khám phá, Google Search hình ảnh và Google Search video.

– GA và GSC không nhất thiết phải báo cáo trên cùng một nhóm trang. Ví dụ: bạn có thể có tài khoản GSC chỉ bao gồm các trang HTTP trong khi chế độ xem GA mà bạn chọn báo cáo trên cả HTTP và HTTPS.

<figure><img src="https://data.nhavantuonglai.com/image/article/google-search-console-insights-va-nhung-dieu-chua-biet-04.jpg" alt="google-search-console-insights-va-nhung-dieu-chua-biet" height=100% width=100%><figcaption><p>google-search-console-insights-va-nhung-dieu-chua-biet-nhavantuonglai</p></figcaption></figure>

### Các loại huy hiệu trong thẻ GSC Insights có ý nghĩa gì?

Chúng tôi đã ra mắt các huy hiệu trên GSC Insights để giúp bạn tập trung vào các mẫu hình lặp lại thú vị trong dữ liệu. Hiện tại, có 3 loại huy hiệu:

1. Thời lượng xem trung bình cao: nội dung có thời lượng xem trung bình cao so với các nội dung khác trên website của bạn. Đây có thể là nội dung mà khách truy cập thấy thú vị.

2. 5 kết quả hàng đầu: vị trí trung bình của nội dung của bạn trên Google Search (_tự nhiên_) trong 28 ngày qua đối với một số cụm từ Google Search cụ thể nhỏ hơn hoặc bằng 5.

3. Xu hướng mạnh x%: so sánh giữa hiệu suất 28 ngày qua và hiệu suất trước đó. Huy hiệu này chỉ xuất hiện khi xu hướng đó lớn hơn đáng kể so với xu hướng chung trên website.

## Tìm hiểu về dữ liệu, tìm các mẹo và nhiều tài nguyên khác

<figure><img src="https://data.nhavantuonglai.com/image/article/google-search-console-insights-va-nhung-dieu-chua-biet-05.jpg" alt="google-search-console-insights-va-nhung-dieu-chua-biet" height=100% width=100%><figcaption><p>google-search-console-insights-va-nhung-dieu-chua-biet-nhavantuonglai</p></figcaption></figure>

Để tìm hiểu thêm về từng loại thẻ hiện có trên GSC Insights, hãy nhấp vào chiếc mũ nhỏ như trong ảnh chụp màn hình trên đây. Tại đó, bạn sẽ xem được thêm ngữ cảnh về dữ liệu cũng như các mẹo về cách diễn giải dữ liệu. Ví dụ: nội dung mô tả ngắn về ý nghĩa của một thay đổi trong biểu đồ và định nghĩa của các chỉ số dùng trong biểu đồ và bảng.

<figure><img src="https://data.nhavantuonglai.com/image/illustrations/cover-nhavantuonglai-com-0610.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>