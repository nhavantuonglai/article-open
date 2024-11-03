---
pubDatetime: 2023-04-28T10:10:00Z
title: Hướng dẫn kết hợp Search Console và Looker Studio
description: Giúp Google và người dùng tìm thấy nội dung website hướng dẫn nâng cao những kỹ thuật giúp tối ưu SEO hiệu quả, đem lại thứ hạng tốt trên công cụ tìm kiếm.
featured: false
image: https://data.nhavantuonglai.com/image/illustrations/cover-nhavantuonglai-com-0544.jpg
tags:
  - google
  - google console
  - seo
  - google seo
  - content
  - looker studio
  - developer
---

_Search Console cung cấp dữ liệu về hiệu suất của website trên Google Tìm kiếm. Looker Studio cung cấp chức năng kết hợp dữ liệu để hỗ trợ tạo biểu đồ và bảng cũng như quản lý dựa trên nhiều nguồn._

## Lợi ích khi kết hợp Search Console và Looker Studio

Search Console cung cấp dữ liệu về hiệu suất của website trên Google Tìm kiếm. Bạn có thể truy cập dữ liệu này trên Looker Studio để tạo trang tổng quan nhằm theo dõi và tìm hiểu về hiệu suất.

Một lợi ích của việc phân tích dữ liệu hiệu suất bên ngoài Search Console là bạn có thể bổ sung ngữ cảnh rõ hơn cho báo cáo để làm phong phú dữ liệu bằng bất cứ nguồn nào, chẳng hạn như thông tin kỹ thuật và thông tin giải pháp mà bạn có về website. Khi phân tích hiệu suất, càng kết hợp nhiều nguồn dữ liệu thì bạn càng có thể hiểu rõ yếu tố nào giúp bạn đạt được kết quả; việc này sẽ giúp bạn đưa ra quyết định sáng suốt hơn khi sử dụng dữ liệu của mình.

Looker Studio cung cấp chức năng kết hợp dữ liệu để hỗ trợ bạn tạo biểu đồ và bảng cũng như quản lý dựa trên nhiều nguồn dữ liệu, bao gồm cả Search Console…

Hãy truy cập trung tâm trợ giúp của Looker Studio để xem hướng dẫn đầy đủ từng bước về cách tạo dữ liệu kết hợp. Sau đây là phần tóm tắt các bước chính:

1. Tạo nguồn dữ liệu cho cả tài sản trên Search Console và dữ liệu mà bạn muốn kết hợp trên Looker Studio.

2. Chuyển đến một báo cáo có chứa một trong các nguồn dữ liệu đã tạo rồi chọn một bảng hoặc biểu đồ. Trong trình đơn thiết lập, bạn sẽ thấy một lựa chọn kết hợp dữ liệu. Khi nhấp vào đó, bạn sẽ thấy một giao diện để kết nối bảng với nguồn dữ liệu hiện có.

3. Nhấp để kết hợp bảng rồi chọn nguồn dữ liệu mà bạn vừa tạo. Sau đó, hãy nhấp để định cấu hình mối liên hệ kết hợp. Bạn sẽ thấy một số lựa chọn về toán tử kết nối và có thể tìm hiểu thêm về các lựa chọn này trong tài liệu về BigQuery.

4. Chọn các trường phù hợp để kết hợp vào bảng.

Bạn có thể làm tương tự cho nhiều bảng để làm phong phú trang tổng quan bằng thông tin không có sẵn trong Search Console, _cứ để trí tưởng tượng bay xa!_

Sau đây là một số ý tưởng mà bạn có thể sử dụng để làm phong phú nhiều phương diện:

– Thêm thông tin khác về URL. Cung cấp dữ liệu về các URL như danh mục trang, dữ liệu có cấu trúc được triển khai, mẫu trang, loại nội dung, tác giả…

– Tạo cụm truy vấn. Nếu giám sát các truy vấn theo chủ đề thì bạn có thể kết hợp một bảng trong đó bạn sắp xếp truy vấn theo nhóm; việc này sẽ giúp bạn theo dõi truy vấn dựa trên định nghĩa riêng.

– Theo dõi ngân sách ở các quốc gia. Nếu có đối tượng trên toàn cầu cũng như mức ngân sách theo từng quốc gia thì bạn nên theo dõi ngân sách cùng với kết quả về hiệu suất.

## Chuẩn bị dữ liệu và kết nối với Data Studio

Có hai cách để nhập dữ liệu của Search Console vào Data Studio:

– Nếu muốn thấy dữ liệu giống như trong Search Console, thì bạn nên dùng trình kết nối dữ liệu của Google Data Studio. Cách này rất đơn giản: hãy truy cập thư viện trình kết nối, chọn Search Console rồi tìm tài sản bạn muốn kết nối. Bạn có thể xem hướng dẫn về trình kết nối này trong Trung tâm trợ giúp của Data Studio.

– Nếu muốn cải thiện dữ liệu do Search Console cung cấp (ví dụ: phân nhóm quốc gia thành các khu vực), thì trước tiên bạn nên xuất dữ liệu trên giao diện web hoặc thông qua API. Sau đó, bạn có thể xử lý dữ liệu qua Google Trang tính hoặc BigQuery rồi kết nối dữ liệu đó với Data Studio.

Trong bài đăng này, chúng tôi sẽ thảo luận về cách thứ hai vì cách này yêu cầu nhiều bước hơn cũng như mang đến nhiều cơ hội tuỳ chỉnh hơn. Có 3 bước chính bạn cần thực hiện:

1. Xuất dữ liệu trong Search Console.

2. Thêm dữ liệu của bạn dựa trên dữ liệu nói trên.

3. Nhập dữ liệu đó vào Data Studio.

### Xuất dữ liệu của Search Console

Để xuất dữ liệu, hãy truy cập Báo cáo hiệu suất của Search Console, chọn một phạm vi ngày, nhấp vào Xuất_ – rồi chọn Google Trang tính. Thao tác này sẽ tạo ra một bảng tính mới mà chúng ta sẽ cải thiện trong bước tiếp theo. Bạn cũng có thể dùng API Search Analytics nâng cao mức độ tự động hoá, nhưng cách này nằm ngoài phạm vi của bài đăng này.

<figure><img src="https://data.nhavantuonglai.com/image/article/seo-google-61.jpg" alt="huong-dan-ket-hop-search-console-va-looker-studio" height=100% width=100%><figcaption><p>huong-dan-ket-hop-search-console-va-looker-studio-nhavantuonglai</p></figcaption></figure>

Bạn có thể đọc thêm về các phương diện và chỉ số trong tài liệu trợ giúp về Báo cáo hiệu suất.

### Cải thiện dữ liệu của Search Console

Để chỉ cho bạn cách cải thiện dữ liệu trong Search Console, chúng tôi sẽ dùng một hàm gọn nhẹ trên Google Trang tính, `IMPORTDATA` (hàm này có thể nhập dữ liệu trên một URL). Trong ví dụ này, chúng tôi sẽ nhập bảng _Các quốc gia đáp ứng tiêu chuẩn ISO 3166 theo khu vực._

Thêm một trang tính mới vào dữ liệu bạn đã xuất qua Search Console rồi nhập mã sau vào ô đầu tiên:

```
=IMPORTDATA(_https://gist.githubusercontent.com/richjenks/15b75f1960bc3321e295/raw/62749882ed0e9dffa3edd7a9a44a7be59df8402c/countries.md,_ _|_)
```

Trong trang tính Search Console, hãy tạo một cột cho Khu vực – rồi dùng hàm `VLOOKUP` để khu vực khớp với quốc gia.

Sau đây là một trang tính mẫu cho bạn thấy giao diện của bảng hoàn chỉnh:

<figure><img src="https://data.nhavantuonglai.com/image/article/seo-google-62.jpg" alt="huong-dan-ket-hop-search-console-va-looker-studio" height=100% width=100%><figcaption><p>huong-dan-ket-hop-search-console-va-looker-studio-nhavantuonglai</p></figcaption></figure>

Chúng tôi đang đưa ra một ví dụ về việc cải thiện dữ liệu địa lý, nhưng bạn có thể sử dụng chính quy trình này để thêm loại thông tin bất kỳ. Ví dụ: nếu có bảng phân loại cụm từ tìm kiếm, thì bạn có thể dùng nó để nhóm cụm từ tìm kiếm theo danh mục.

### Kết nối Google Trang tính với Data Studio

Cuối cùng, hãy kết nối Google Trang tính với Data Studio. Để làm việc này, hãy truy cập thư viện trình kết nối, chọn Google Trang tính rồi tìm bảng tính mới tạo. Hãy nhớ chọn đúng trang tính.

Khi dữ liệu này xuất hiện trong Data Studio, quá trình trực quan hoá sẽ bắt đầu…

## Theo dõi lưu lượng truy cập qua Tìm kiếm (và nhiều tính năng khác!) trên Data Studio

## Cách thức và lý do bạn nên sử dụng trang tổng quan

Khi xây dựng trang tổng quan, bạn phải luôn bắt đầu bằng cách xác định mục đích của trang tổng quan đó. Phần lớn trường hợp có thể được phân loại theo một trong ba tuỳ chọn sau:

– Giám sát hiệu suất. Nhanh chóng phát hiện thay đổi trong dữ liệu, chẳng hạn như theo dõi số lượt nhấp và tỷ lệ nhấp (CTR) vào URL cho các trang quan trọng trên website.

– Khám phá dữ liệu. Khám phá thông tin chi tiết qua dữ liệu, ví dụ như phân tích kiểu mẫu hiệu suất tìm kiếm ở nhiều quốc gia, thiết bị hoặc phần trên website.

– Thông báo cho thế giới. Xuất bản thông tin về các xu hướng và kiểu mẫu thú vị, ví dụ: chia sẻ dữ liệu tổng hợp được phân đoạn theo ngành.

Hôm nay, chúng tôi sẽ thảo luận về trang tổng quan theo dõi hiệu suất, nhằm giúp bạn tìm ra vấn đề khi xảy ra. Thường thì loại trang tổng quan này sử dụng các hình ảnh đơn giản như biểu đồ dạng đường, biểu đồ thanh và bảng để người dùng có thể nhanh chóng diễn giải. Sau đó, nếu phát hiện thấy một vấn đề, nhà phân tích hoặc chuyên viên SEO có thể tiến hành khám phá dữ liệu kỹ hơn (nội dung này sẽ được đề cập đến trong bài đăng tiếp theo).

## Trang tổng quan theo dõi lưu lượng truy cập tìm kiếm

Như đã đề cập, bài đăng này cung cấp một mẫu để theo dõi hiệu suất của Google Tìm kiếm. Trong phần này, chúng tôi sẽ thảo luận về cách đưa dữ liệu của Tìm kiếm vào Data Studio, chức năng và dữ liệu mà trang tổng quan cung cấp, cũng như lý do chúng tôi đưa ra một số quyết định cụ thể về thiết kế.

### Thiết lập trình kết nối với Search Console

Đăng nhập vào Data Studio, tạo nguồn dữ liệu Search Console rồi chọn bảng URL Impression (Lượt hiển thị URL) có chứa dữ liệu cho web, hình ảnh, video, tin tức, khám phá và googleNews trên cơ sở cấp URL. Property Parameter (Tham số tài sản) mà bạn chọn ở đây sẽ là tham số mặc định trong báo cáo, nhưng bạn cũng có quyền truy cập vào các tham số khác thông qua một bộ lọc. Hãy tìm hiểu thêm về tham số này ở một phần sau trong bài viết này. Để tìm hiểu thêm về dữ liệu này, hãy truy cập các trang trợ giúp về Báo cáo hiệu suất.

<figure><img src="https://data.nhavantuonglai.com/image/article/seo-google-63.jpg" alt="huong-dan-ket-hop-search-console-va-looker-studio" height=100% width=100%><figcaption><p>huong-dan-ket-hop-search-console-va-looker-studio-nhavantuonglai</p></figcaption></figure>

### Kiểm soát dữ liệu bằng bộ lọc và ngày

Tiêu đề của báo cáo cung cấp một số tuỳ chọn để bạn lọc dữ liệu trong biểu đồ:

1. Sử dụng tuỳ chọn kiểm soát dữ liệu để thay đổi giữa các tài sản Search Console mà bạn có quyền truy cập.

2. Chọn phạm vi ngày mà bạn muốn xem trong báo cáo. Theo mặc định, bạn sẽ thấy 28 ngày qua so với 28 ngày trước đó.

3. Tạo bộ lọc để xem dữ liệu chi tiết:

– Page (Trang). Sử dụng thuộc tính này để bao gồm hoặc loại trừ một hoặc nhiều trang khỏi website của bạn. Mẹo: bạn có thể sử dụng biểu thức chính quy tương tự như cách bạn sử dụng trong Search Console.

– Type (Loại). Bạn có thể dùng tuỳ chọn này để chọn trong số các loại dữ liệu (bao gồm cả Khám phá và Google Tin tức). Mỗi lần, bạn chỉ có thể chọn một tùy chọn.

– Country (Quốc gia). Sử dụng thuộc tính này để bao gồm hoặc loại trừ một hoặc nhiều quốc gia.

– Device (Thiết bị). Sử dụng thuộc tính này để chọn một hoặc nhiều danh mục thiết bị.

<figure><img src="https://data.nhavantuonglai.com/image/article/seo-google-64.jpg" alt="huong-dan-ket-hop-search-console-va-looker-studio" height=100% width=100%><figcaption><p>huong-dan-ket-hop-search-console-va-looker-studio-nhavantuonglai</p></figcaption></figure>

### Theo dõi số lượt nhấp và tỷ lệ nhấp theo thời gian

Biểu đồ dạng đường là hình ảnh trực quan hiệu quả nhất cho thấy sự thay đổi của các chỉ số theo thời gian. Trong trường hợp này, chúng tôi chọn xem xét cả số lượt nhấp và tỷ lệ nhấp (CTR) của website. Trong hình ảnh biểu đồ dạng đường, ngày cuối tuần và ngày trong tuần có kiểu mẫu rất khác biệt (một lý do là bạn phải nhớ luôn sử dụng bội số của 7 trong phạm vi ngày trên biểu đồ dạng đường) – _hãy để ý đến những ngày phá vỡ kiểu mẫu đó!_

Lưu ý rằng hình ảnh này dành cho một website thiên về công việc, do đó lưu lượng truy cập cao vào các ngày trong tuần và thấp vào các ngày cuối tuần. Có thể website của bạn lại trông rất khác.

<figure><img src="https://data.nhavantuonglai.com/image/article/seo-google-65.jpg" alt="huong-dan-ket-hop-search-console-va-looker-studio" height=100% width=100%><figcaption><p>huong-dan-ket-hop-search-console-va-looker-studio-nhavantuonglai</p></figcaption></figure>

Chúng tôi chưa đưa dữ liệu của Google Analytics vào báo cáo này, nhưng có thể cũng thú vị khi thêm biểu đồ về số lượt chuyển đổi mà website nhận được qua kết quả không phải trả tiền trên Google Tìm kiếm. Hãy tìm hiểu cách kết nối Google Analytics với Data Studio; việc này sẽ giúp đóng vòng lặp.

### Xem chi tiết theo URL cụ thể (hoặc theo mục trên website)

Khi phân tích xu hướng và kiểu mẫu, biểu đồ sẽ hữu ích hơn cho bạn, nhưng nếu bạn muốn tìm hiểu sâu hơn, thì phương pháp phân tích URL (hoặc nhóm URL) theo bảng sẽ hiệu quả hơn. Ví dụ:

– Sử dụng bộ lọc trang để chỉ bao gồm một số phần cụ thể trên website.

– Sử dụng bộ lọc quốc gia để kiểm tra xem hiệu suất của các trang tại các quốc gia bạn quan tâm.

– Sử dụng bộ lọc loại để phân tích hiệu suất cấp URL cho từng loại dữ liệu.

<figure><img src="https://data.nhavantuonglai.com/image/article/seo-google-66.jpg" alt="huong-dan-ket-hop-search-console-va-looker-studio" height=100% width=100%><figcaption><p>huong-dan-ket-hop-search-console-va-looker-studio-nhavantuonglai</p></figcaption></figure>

## Mẹo khác

### Mẹo số 1: Làm cho trang tổng quan thân thiện với thiết bị di động

Hầu hết trang tổng quan không cần phải thân thiện với thiết bị di động vì mọi người dùng những trang tổng quan này trên máy tính. Tuy nhiên, đôi khi mọi người cũng dùng trang tổng quan theo dõi khi trên đường đi làm, do đó, có thể trang tổng quan nên thân thiện với thiết bị di động.

Để tạo trải nghiệm tốt trên thiết bị di động cho trang tổng quan theo dõi, hãy đặt _Chế độ hiển thị_ thành _Chỉnh cho vừa với chiều rộng_ (trong `bố cục trang và báo cáo`) – chế độ này sẽ điều chỉnh chiều rộng trang tổng quan theo kích thước màn hình. Nếu bạn chọn tuỳ chọn này, hãy nhớ kiểm tra xem báo cáo trông như thế nào trên nhiều kích thước màn hình.

### Mẹo số 2: Rút ngắn chuỗi URL

Nếu báo cáo của bạn chứa một miền đơn không có miền con, thì bạn có thể cân nhắc việc xoá tên miền đó khỏi báo cáo để làm cho các bảng ít lộn xộn hơn. Ví dụ: nếu đang tạo báo cáo cho `nhavantuonglai.com/search`, bạn sẽ chỉ thấy `/search`. Để làm điều này, bạn có thể tạo một trường đã tính để xoá tên miền khỏi URL bằng cách sử dụng một biểu thức chính quy. Ví dụ: đối với tên miền `.com`, bạn có thể sử dụng biểu thức sau đây:

```
REGEXP_EXTRACT(Landing Page,._*.com/(.*)$_)
```

Ngoài ra, bạn cũng nên tham khảo cách tạo biểu đồ bong bóng trong Search Console để tối ưu hiệu suất hoạt động của website.

<figure><img src="https://data.nhavantuonglai.com/image/illustrations/cover-nhavantuonglai-com-0510.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>