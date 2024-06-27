---
pubDatetime: 2023-05-12T10:00:00Z
title: Tạo biểu đồ bong bóng trong Google Search
description: Giúp Google và người dùng tìm thấy nội dung website hướng dẫn nâng cao những kỹ thuật giúp tối ưu SEO hiệu quả, đem lại thứ hạng tốt trên công cụ tìm kiếm.
featured: false
image: https://data.nhavantuonglai.com/image/illustrations/cover-nhavantuonglai-com-0649.jpg
tags:
  - google
  - google console
  - google search
  - seo
  - google seo
  - content
  - developer
---

_Phân tích dữ liệu hiệu suất trên Google Search luôn là một thách thức. Khi bạn có nhiều cụm từ Google Search dài, vốn khó hình dung và khó hiểu hơn, thì việc phân tích dữ liệu hiệu suất càng khó khăn hơn nữa. Biểu đồ bong bóng có thể giúp bạn nắm bắt được những cụm từ Google Search đang hoạt động hiệu quả đối với website của mình, cũng như những gì cần cải thiện._

Nếu muốn thử nghiệm các kỹ thuật được thảo luận ở đây, bạn có thể sử dụng mẫu này, kết nối với dữ liệu của bạn rồi thử các chế độ cài đặt biểu đồ.

Nếu bạn chưa đọc bài viết kết nối Search Console với Looker Studio và theo dõi lưu lượng truy cập qua Google Search bằng Looker Studio, hãy cân nhắc việc đọc những bài viết này để hiểu thêm về những gì bạn có thể làm được với Search Console trong Looker Studio.

## Đọc hiểu biểu đồ

Biểu đồ bong bóng là một công cụ trực quan rất hữu ích khi bạn xử lý dữ liệu có nhiều chỉ số và phương diện. Biểu đồ này giúp bạn quan sát được các mối quan hệ và tính quy luật trong dữ liệu một cách hiệu quả hơn. Trong ví dụ dưới đây, bạn có thể thấy tỷ lệ nhấp(CTR), vị trí trung bình và số lượt nhấp cho các phương diện truy vấn và thiết bị trong một chế độ xem.

<figure><img src="https://data.nhavantuonglai.com/image/article/seo-google-co-ban-tao-bieu-do-bong-bong-trong-google-search-01.jpg" alt="cam-nang-toi-uu-seo-chuan-google-co-ban-tao-bieu-do-bong-bong-trong-google-search" height=100% width=100%><figcaption><p>cam-nang-toi-uu-seo-chuan-google-co-ban-tao-bieu-do-bong-bong-trong-google-search-nhavantuonglai</p></figcaption></figure>

Phần này trình bày chi tiết về một số thành phần trong biểu đồ để làm rõ những yếu tố mà biểu đồ có và không thể hiện.

### Nguồn dữ liệu

Biểu đồ bong bóng hiển thị trên trang này sử dụng bảng Lượt hiển thị website có trong nguồn dữ liệu của Search Console, trong đó có dữ liệu hiệu suất trên Google Search được tổng hợp theo website và cụm từ Google Search.

### Bộ lọc và các cách kiểm soát dữ liệu

Có 5 cách tuỳ chỉnh trong biểu đồ để giúp bạn kiểm soát dữ liệu sao cho hiệu quả:

1. Kiểm soát dữ liệu: Chọn tài sản Search Console mà bạn muốn phân tích.

2. Phạm vi ngày: Chọn phạm vi ngày bạn muốn xem trong báo cáo; phạm vi ngày mặc định là 28 ngày gần nhất.

3. Cụm từ Google Search: Bao gồm hoặc loại bớt các cụm từ Google Search bạn cần chú trọng. Bạn có thể lọc dữ liệu tương tự như cách bạn thực hiện trong Search Console.

4. Quốc gia: Bao gồm hoặc loại trừ quốc gia.

5. Thiết bị: Bao gồm hoặc loại trừ danh mục thiết bị.

### Các trục trên biểu đồ

Các trục trong biểu đồ là vị trí trung bình (trục y) và CTR của website (trục x). Có 3 phép biến đổi đáng kể trong các trục:

6. Đảo ngược hướng trục y: Vì trục y cho thấy vị trí trung bình, nên đảo ngược trục này có nghĩa là vị trí số 1 nằm trên cùng. Đối với hầu hết biểu đồ, vị trí tốt nhất được đặt ở góc trên cùng bên phải. Do đó, khi sử dụng trục y để thể hiện vị trí trung bình, việc đảo hướng trục này sẽ thuận mắt hơn.

7. Thang đo lôgarit: Việc sử dụng thang đo lôgarit cho cả hai trục giúp bạn hiểu rõ hơn về các cụm từ Google Search nằm ở các điểm xa nhất trên biểu đồ (CTR rất thấp, vị trí trung bình rất thấp hoặc cả hai đều rất thấp).

8. Đường tham chiếu: Đường tham chiếu rất hữu ích trong việc nêu bật các giá trị cao hơn hoặc thấp hơn một ngưỡng nhất định. Khi xem xét giá trị trung bình, số trung vị hoặc một bách phân vị nào đó, bạn có thể nhìn ra những điểm dữ liệu lệch khỏi quy luật.

### Bong bóng

Mỗi bong bóng trong biểu đồ đại diện cho một cụm từ Google Search, với các thuộc tính định kiểu như sau:

– Kích thước: Kích thước bong bóng tương ứng với số lượng lượt nhấp giúp bạn nhận ra ngay những cụm từ Google Search đang thúc đẩy lưu lượng truy cập – bong bóng càng lớn thì lưu lượng truy cập tạo ra càng nhiều.

– Màu sắc: Việc biểu diễn danh mục thiết bị theo màu giúp bạn nắm được sự khác biệt giữa hiệu suất Google Search trên thiết bị di động và máy tính. Bạn có thể biểu diễn mọi phương diện theo màu sắc, nhưng khi có càng nhiều giá trị thì càng khó để nhận ra quy luật.

## Phân tích dữ liệu

Mục tiêu của biểu đồ trực quan này là giúp bạn tìm thấy cơ hội tối ưu hoá cụm từ Google Search. Biểu đồ bong bóng cho thấy hiệu suất của các cụm từ Google Search, trong đó trục y biểu thị vị trí trung bình, trục x biểu thị tỷ lệ nhấp (CTR), kích thước bong bóng biểu thị tổng số lượt nhấp và màu của bong bóng biểu thị danh mục thiết bị.

Các nét đứt tham chiếu Trung bình màu đỏ thể hiện giá trị trung bình của từng trục. Các đường này chia biểu đồ thành 4 góc phần tư, cho thấy 4 nhóm hiệu suất của cụm từ Google Search. Có thể các góc phần tư của bạn trông khác với nội dung chia sẻ trong bài đăng này; tuỳ thuộc vào cách phân phối cụm từ Google Search cho website của bạn.

<figure><img src="https://data.nhavantuonglai.com/image/article/seo-google-co-ban-tao-bieu-do-bong-bong-trong-google-search-02.jpg" alt="cam-nang-toi-uu-seo-chuan-google-co-ban-tao-bieu-do-bong-bong-trong-google-search" height=100% width=100%><figcaption><p>cam-nang-toi-uu-seo-chuan-google-co-ban-tao-bieu-do-bong-bong-trong-google-search-nhavantuonglai</p></figcaption></figure>

Biểu đồ này cho thấy 4 nhóm cụm từ Google Search mà bạn có thể phân tích để quyết định nơi nên đầu tư thời gian khi tối ưu hoá hiệu suất trên Google Search.

1. Vị trí cao, CTR cao: Bạn không cần làm gì nhiều với nhóm này; kết quả đang rất tốt rồi.

2. Vị trí thấp, CTR cao: Các cụm từ này có vẻ phù hợp với người dùng; có CTR cao mặc dù nằm ở vị trí thấp hơn mức trung bình của cụm từ Google Search cho website của bạn. Việc vị trí trung bình của cụm từ Google Search tăng lên có thể có tác động đáng kể đến hiệu suất của bạn – hãy tập trung vào việc cải thiện SEO cho những cụm từ Google Search này. Ví dụ: cụm từ Google Search hàng đầu trong góc phần tư 2 cho một website về làm vườn có thể là _cách làm nhà kho bằng gỗ_. Hãy kiểm tra xem bạn đã có trang về nội dung này chưa và tiến hành theo 2 cách: Nếu bạn chưa có trang nào, hãy cân nhắc tạo một trang như vậy để tập trung tất cả thông tin bạn có trên website của mình về chủ đề đó. Nếu bạn đã có một trang như vậy, hãy xem xét việc bổ sung nội dung để phù hợp hơn với trang mà người dùng đó cần.

3. Vị trí thấp, CTR thấp: Khi xem xét các cụm từ Google Search có CTR thấp (cả với vị trí cao và thấp), bạn nên xem xét kích thước bong bóng để nắm được cụm từ Google Search nào có CTR thấp nhưng vẫn thúc đẩy được lưu lượng truy cập đáng kể. Mặc dù các cụm từ Google Search trong góc phần tư này có vẻ không đáng quan tâm, nhưng bạn có thể chia chúng thành hai nhóm chính: Cụm từ Google Search có liên quan: Nếu cụm từ ở đây có ý nghĩa quan trọng với bạn, thì việc cụm từ đó xuất hiện trên Google Search cũng đã là một khởi đầu tốt rồi. Hãy ưu tiên những cụm từ Google Search này hơn các cụm từ hoàn toàn không xuất hiện trong kết quả Google Search, vì các cụm từ này sẽ dễ tối ưu hoá hơn. Cụm từ Google Search không liên quan: Nếu website của bạn không chứa nội dung liên quan đến cụm từ Google Search này, thì có lẽ bạn nên tinh chỉnh nội dung hoặc tập trung vào những cụm từ Google Search mang lại lưu lượng truy cập phù hợp.

4. Vị trí cao, CTR thấp: Các cụm từ Google Search này có thể có CTR thấp vì nhiều lý do. Hãy kiểm tra các bong bóng lớn nhất để tìm các dấu hiệu sau: Các đối thủ cạnh tranh của bạn có thể đang sử dụng mã đánh dấu dữ liệu có cấu trúc và đang xuất hiện trên mạng kèm theo kết quả nhiều định dạng. Điều này có thể thu hút người dùng nhấp vào kết quả của họ thay vì kết quả của bạn. Hãy cân nhắc việc tối ưu hoá cho các thành phần trực quan phổ biến nhất trên Google Search. Có thể bạn đã tối ưu hoá hoặc _vô tình_ xếp hạng một cụm từ Google Search mà người dùng không quan tâm đến khi nghĩ về website của bạn. Có thể đây không phải là vấn đề đối với bạn. Nếu vậy, bạn có thể bỏ qua các cụm từ Google Search đó. Nếu bạn không muốn mọi người tìm thấy bạn thông qua những cụm từ Google Search đó (ví dụ: nội dung chứa các từ phản cảm), hãy cố gắng tinh chỉnh nội dung của bạn để loại bỏ những lượt đề cập có thể được coi là từ đồng nghĩa hoặc cụm từ Google Search liên quan đến cụm từ mang lại lưu lượng truy cập đó. Có thể mọi người đã tìm được thông tin họ cần nhưng không nhấp vào, chẳng hạn như giờ mở cửa, địa chỉ hoặc số điện thoại của công ty bạn. Hãy kiểm tra các cụm từ Google Search được dùng và URL có chứa thông tin đó. Nếu một trong các mục tiêu của website là thúc đẩy mọi người đến cửa hàng thực tế của bạn, thì mục tiêu này đang hoạt động đúng ý; nếu cho rằng mọi người nên truy cập website của bạn để biết thêm thông tin, thì bạn có thể cố gắng tối ưu hoá tiêu đề và phần mô tả để làm rõ điều đó. Hãy xem phần tiếp theo để biết thêm chi tiết.

Chúng tôi chưa đề cập đến danh mục thiết bị vì chúng có thể được dùng làm dấu hiệu bổ sung cho hiệu suất của cụm từ Google Search. Ví dụ: giả sử một số cụm từ Google Search có liên quan hơn khi mọi người đang đi theo chỉ dẫn trên đường và cố gắng tìm một địa điểm nào đó; trong trường hợp đó, cụm từ Google Search có thể có hiệu suất cao trên thiết bị di động nhưng lại có hiệu suất thấp trên máy tính.

## Cải thiện SEO cho một số cụm từ Google Search cụ thể

Khi bạn tìm được những cụm từ Google Search đáng đầu tư thời gian và công sức, hãy tối ưu hoá hoặc tạo các trang có liên quan đến các cụm từ Google Search đó.

Sau khi tìm thấy các cụm từ Google Search bằng hình ảnh minh hoạ trực quan trên trang này, bạn có thể tạo một bộ lọc cụm từ Google Search cho một số cụm từ Google Search cụ thể qua giao diện người dùng của Search Console hoặc dùng Looker Studio để tạo một bảng tổng hợp; theo cả hai cách, bạn đều có thể kiểm tra tất cả những trang đang nhận được lưu lượng truy cập cho một cụm từ Google Search cụ thể. Sau khi bạn biết những cụm từ Google Search mà mình muốn tối ưu hoá và các URL liên quan của cụm từ đó, hãy sử dụng [Cẩm nang SEO](https://nhavantuonglai.com/article/seo-google-toi-uu-noi-dung) để tối ưu hoá nội dung của bạn. Dưới đây là một số mẹo hay:

– Đảm bảo rằng các phần tử title, thẻ meta mô tả và thuộc tính alt đều được trình bày chi tiết, cụ thể và chính xác.

– Dùng các phần tử tiêu đề để nêu bật phần văn bản quan trọng và tạo cấu trúc phân cấp cho nội dung. Nhờ đó, người dùng và các công cụ tìm kiếm có thể đọc tài liệu của bạn dễ dàng hơn.

– Suy nghĩ xem người dùng có khả năng sẽ sử dụng những từ nào để Google Search một nội dung cụ thể của bạn, chẳng hạn như từ đồng nghĩa và cụm từ liên quan. Bạn có thể sử dụng Công cụ lập kế hoạch từ khoá của Google Ads để khám phá các biến thể từ khoá mới và xem lượng Google Search ước chừng của mỗi từ khoá. Bạn cũng có thể sử dụng Google Xu hướng để lấy ý tưởng qua các chủ đề và cụm từ Google Search đang thịnh hành có liên quan đến website của mình.

<figure><img src="https://data.nhavantuonglai.com/image/illustrations/cover-nhavantuonglai-com-0610.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>