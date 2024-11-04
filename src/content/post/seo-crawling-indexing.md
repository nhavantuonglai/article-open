---
pubDatetime: 2023-05-12T10:10:00Z
title: Các phương pháp Crawling Indexing hay nhất
description: Giúp Google và người dùng tìm thấy nội dung website hướng dẫn nâng cao những kỹ thuật giúp tối ưu SEO hiệu quả, đem lại thứ hạng tốt trên công cụ tìm kiếm.
featured: false
image: https://nhavantuonglai.com/image/cover/001-643.jpg
tags:
  - google
  - google console
  - seo
  - google seo
  - developer
---

_Google sử dụng các đường liên kết làm tín hiệu khi xác định mức độ liên quan của các trang và tìm trang mới để thu thập dữ liệu. Tìm hiểu cách tạo điều kiện cho Google thu thập dữ liệu các đường liên kết để Google có thể tìm thấy những trang khác trên website của bạn thông qua những đường liên kết trên trang, cũng như cách cải thiện văn bản liên kết để mọi người và Google dễ dàng hiểu được nội dung nội dung._

## Giúp Google thu thập dữ liệu trên các đường liên kết của bạn

Nói chung, Google chỉ có thể thu thập dữ liệu trên đường liên kết của bạn nếu đó là phần tử HTML `<a>` (còn gọi là _phần tử liên kết_) có thuộc tính `href`. Hầu hết đường liên kết ở định dạng khác sẽ không được trình thu thập dữ liệu của Google phân tích cú pháp và trích xuất. Do các sự kiện theo tập lệnh, Google không thực hiện được một cách đáng tin cậy việc trích xuất các URL từ những phần tử `<a>` không có thuộc tính `href` hoặc các thẻ khác có chức năng như những đường liên kết. Sau đây là ví dụ về một số đường liên kết mà Google có thể và không thể phân tích cú pháp:

Nên dùng (Google có thể phân tích cú pháp)

```
<a href="https://nhavantuonglai.com">
```

Và:

```
<a href="/products/category/shoes">
```

Bạn cũng có thể tạo điều kiện cho việc thu thập dữ liệu các đường liên kết khi sử dụng JavaScript để chèn các đường liên kết đó vào một trang một cách linh hoạt, miễn là trang đó sử dụng mã đánh dấu HTML mà bạn thấy ở trên.

Không nên dùng (nhưng có thể Google vẫn cố gắng phân tích cú pháp được):

```
<a routerLink="products/category">
```

Và:

```
<span href="https://nhavantuonglai.com">
```

Và:

```
<a onclick="goto(https://nhavantuonglai.com)">
```

Đảm bảo rằng URL trong phần tử `<a>` của bạn phân giải thành địa chỉ website thực tế (có nghĩa là địa chỉ đó giống như một URI) mà trình thu thập dữ liệu của Google có thể gửi yêu cầu, ví dụ:

Nên dùng (Google có thể giải quyết):

<pre data-overflow=_wrap"><code><strong>&#x3C;a href="https://nhavantuonglai.com/article/">
</strong></code></pre>

<pre data-overflow=_wrap"><code><strong>&#x3C;a href="/products">
</strong></code></pre>

<pre data-overflow=_wrap"><code><strong>&#x3C;a href="/products.php?id=123">
</strong></code></pre>

Không nên dùng (nhưng có thể Google vẫn cố gắng giải quyết được):

<pre data-overflow=_wrap"><code><strong>&#x3C;a href="javascript:goTo(_products_)">
</strong></code></pre>

<pre data-overflow=_wrap"><code><strong>&#x3C;a href="javascript:window.location.href="/products_">
</strong></code></pre>

## Vị trí văn bản liên kết

_Văn bản liên kết_ (còn gọi là _văn bản của đường liên kết_) là văn bản hiển thị của đường liên kết. Văn bản này cho người dùng và Google biết một ít thông tin về trang bạn đang liên kết đến. Hãy đặt văn bản liên kết giữa các [phần tử `<a>` mà Google có thể thu thập dữ liệu](https://nhavantuonglai.com/article/seo-crawling-indexing).

Hay:

>`<a href="https://nhavantuonglai.com/article/dong-vat-giet-mo">Có bao nhiêu động vật bị giết mỗi ngày?</a>`

Kém (văn bản của liên kết trống):

>`<a href="https://nhavantuonglai.com"></a>`

Để dự phòng, Google có thể dùng thuộc tính `title` làm văn bản liên kết nếu phần tử `<a>` bị bỏ trống vì lý do nào đó.

>`<a href="https://nhavantuonglai.com/article/dong-vat-giet-mo" title="Có bao nhiêu động vật bị giết mỗi ngày?"></a>`

Đối với hình ảnh dưới dạng đường liên kết, Google sử dụng thuộc tính `alt` của phần tử `img` làm văn bản liên kết. Vì vậy, hãy nhớ [thêm văn bản thay thế có tính mô tả vào hình ảnh của bạn](https://nhavantuonglai.com/article/seo-toi-uu-hinh-anh):

>`<a href="/add-to-cart.html"><img src=_enchiladas-in-shopping-cart.jpg" alt="thêm enchiladas vào giỏ hàng của bạn_/></a>`

Nếu bạn đang sử dụng JavaScript để chèn văn bản liên kết, hãy sử dụng công cụ kiểm tra URL để đảm bảo rằng văn bản này có trong HTML đã kết xuất.

## Hãy viết văn bản liên kết hay

Văn bản liên kết hay phải mang tính mô tả, ngắn gọn một cách hợp lý, và có liên quan đến trang chứa văn bản đó cũng như trang mà văn bản đó liên kết đến. Điều này cung cấp bối cảnh cho đường liên kết và đặt ra kỳ vọng cho người đọc. Văn bản liên kết của bạn càng hay thì mọi người càng dễ dàng di chuyển trong website của bạn và giúp Google hiểu được nội dung của trang mà bạn đang liên kết đến.

Kém (quá chung chung):

>`<a href="https://nhavantuonglai.com">Nhấp vào đây</a>để tìm hiểu thêm.`

>`<a href="https://nhavantuonglai.com">Đọc thêm</a>.`

>`Tìm hiểu thêm về pho mát trên <a href="https://nhavantuonglai.com">Website</a>của chúng tôi.`

>`Chúng tôi có một <a href="https://nhavantuonglai.com">bài viết</a>cung cấp thêm thông tin về cách làm pho mát.`

Mẹo: Hãy thử chỉ đọc văn bản liên kết (không liên quan đến bối cảnh) và kiểm tra xem liệu văn bản đó có đủ cụ thể để hiểu rõ được hay không. Nếu không biết nội dung của trang, bạn cần văn bản liên kết có tính mô tả cụ thể hơn.

Hay hơn (mô tả nhiều hơn):

>`Để xem danh sách đầy đủ các loại pho mát mà bạn có thể mua, hãy xem <a href="https://nhavantuonglai.com">danh sách các loại pho mát</a>.`

Kém (dài một cách kỳ lạ):

>`Bắt đầu từ thứ Ba tới, <a href="https://nhavantuonglai.com">Knitted Cow mở cửa trở lại và mời gọi người dân địa phương của Wisconsin bằng cách cung cấp thêm tác phẩm điêu khắc băng hình con bò</a>cho 20 khách hàng đầu tiên.`

Hay hơn (ngắn gọn hơn):

>`Bắt đầu từ thứ Ba tới, <a href="https://nhavantuonglai.com">Knitted Cow mời người dân địa phương Wisconsin</a>tham gia lễ khai trương trở lại với quà tặng miễn phí là tượng bò băng cho 20 khách hàng đầu tiên.`

Hãy viết tự nhiên nhất có thể và không cố nhồi nhét mọi từ khoá liên quan đến trang mà bạn liên kết đến hãy nhớ rằng nhồi nhét từ khoá là hành vi vi phạm chính sách về nội dung rác của chúng tôi). Hãy tự hỏi: độc giả có cần các từ khoá này để hiểu trang tiếp theo không? Nếu bạn cảm thấy rằng mình đang miễn cưỡng thêm các từ khoá vào văn bản liên kết, thì có lẽ là quá nhiều.

Hãy nhớ cung cấp bối cảnh cho các đường liên kết của bạn: các từ đứng trước và sau đường liên kết rất quan trọng, vì vậy, hãy để ý toàn bộ câu. Không xâu chuỗi các liên kết cạnh nhau; người đọc sẽ khó phân biệt giữa các đường liên kết và bạn sẽ mất văn bản xung quanh từng đường liên kết.

Kém (quá nhiều đường liên kết cạnh nhau):

>`Tôi đã viết về kỹ năng SEO hình ảnh <a href="https://nhavantuonglai.com/article/seo-toi-uu-hinh-anh">lẫn nội dung</a><a href="https://nhavantuonglai.com/article/seo-toi-uu-noi-dung">hay hiển thị, lẫn</a><a href="https://nhavantuonglai.com/article/seo-nang-cao-quang-cao-website">tìm kiếm, và</a><a href="https://nhavantuonglai.com/article/seo-nang-cao-quan-ly-su-xuat-hien-cua-website-trong-ket-qua-cua-google">tương tác người dùng</a><a href="https://nhavantuonglai.com/article/seo-nang-cao-giup-google-va-nguoi-dung-tim-thay-noi-dung-website">.</a>.`

Hay hơn (các đường liên kết được đặt giãn cách với bối cảnh):

>`Tôi đã viết về phô mai rất nhiều lần trong năm nay: chắc chưa ai quên vụ <a href="https://nhavantuonglai.com/article/seo-toi-uu-hinh-anh">tranh cãi về phô mai xanh và gorgonzola</a>, <a href="https://nhavantuonglai.com/article/seo-toi-uu-noi-dung">loại phô mai brie lâu đời nhất thế giới</a>đã vinh dự giành Huy chương về công thức phô mai ngon nhất, giọng kể chuyện lôi cuốn về <a href="https://nhavantuonglai.com/article/con-nguoi-tien-hoa">Con người có thể là lực lượng tiến hóa mạnh mẽ</a>, và câu chuyện mà bản thân tôi yêu thích là <a href="https://nhavantuonglai.com/article/dua-cay-ve-phia-bac">Đưa cây về phía Bắc để cứu rừng</a>.`

## Liên kết nội bộ: tham chiếu chéo nội dung của riêng bạn

Có thể bạn thường nghĩ về việc liên kết đến các website bên ngoài, nhưng việc chú ý hơn đến văn bản liên kết dùng cho đường liên kết nội bộ có thể giúp cả người dùng và Google hiểu website của bạn và tìm thấy các trang khác trên website dễ dàng hơn. Mỗi trang mà bạn quan tâm phải có đường liên kết từ ít nhất một trang khác trên website của bạn. Hãy suy nghĩ về những tài nguyên khác trên website có thể giúp người đọc hiểu một trang cụ thể trên website và liên kết đến các trang đó trong bối cảnh.

Không có _con số thần kỳ_ đối với số lượng đường liên kết mà một trang nhất định phải chứa. Tuy nhiên, nếu bạn cho là mình có quá nhiều đường liên kết, thì có thể đúng là như vậy.

## Đường liên kết ngoài: đường liên kết đến các website khác

Bạn không phải lo lắng khi liên kết đến các website khác. Thực tế là việc sử dụng các đường liên kết ngoài có thể giúp gây dựng nên độ tin cậy (ví dụ: trích dẫn nguồn). Hãy liên kết đến các website bên ngoài khi thấy phù hợp và cung cấp bối cảnh cho độc giả về điều họ có thể mong đợi.

Hay (trích dẫn nguồn của bạn):

>Theo một nghiên cứu gần đây do các nhà nghiên cứu Thụy Sĩ thực hiện, bánh phô mai Emmental được cho tiếp xúc với âm nhạc có hương vị đằm hơn so với các bánh phô mai đối chứng khác (không trải qua quá trình xử lý bằng âm nhạc). Toàn bộ phát hiện lý thú này có trong bài viết <a href="https://nhavantuonglai.com">Xử lý phô mai bằng âm thanh – chương trình thử nghiệm về nghệ thuật ẩm thực</a>.

Chỉ sử dụng [`nofollow`](seo-nofollow) khi bạn không tin tưởng vào nguồn đó, chứ đừng sử dụng với mọi đường liên kết ngoài trên website của bạn. Ví dụ: bạn là một người đam mê phô mai và có người đã đăng tải một câu chuyện nói xấu loại phô mai mà bạn yêu thích. Vì vậy, bạn muốn viết một bài báo để phản hồi; tuy nhiên, bạn không muốn đường liên kết của mình sẽ mang lại chút tiếng tăm cho website đó. Đây là một thời điểm thích hợp để dùng `nofollow`.

Nếu bạn được trả tiền cho đường liên kết theo cách nào đó, hãy cung cấp thuộc tính `sponsored` hoặc `nofollow`. Nếu người dùng có thể chèn đường liên kết trên website của bạn (ví dụ: bạn có mục diễn đàn hoặc website Hỏi và đáp), hãy thêm `ugc` hoặc `nofollow` vào các đường liên kết này.

<figure><img src="https://nhavantuonglai.com/image/cover/001-610.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>