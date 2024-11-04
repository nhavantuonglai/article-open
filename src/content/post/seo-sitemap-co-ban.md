---
pubDatetime: 2023-05-27T10:10:00Z
title: Tìm hiểu về Sitemaps
description: Giúp Google và người dùng tìm thấy nội dung website hướng dẫn nâng cao những kỹ thuật giúp tối ưu SEO hiệu quả, đem lại thứ hạng tốt trên công cụ tìm kiếm.
featured: false
image: https://nhavantuonglai.com/image/cover/001-559.jpg
tags:
  - google
  - google console
  - google search
  - seo
  - google seo
  - content
  - developer
---

_Sitemaps_ là một tệp cung cấp thông tin về các trang, video và tệp khác trên website, cùng mối quan hệ giữa chúng. Các công cụ tìm kiếm như Google đọc tệp này để thu thập dữ liệu trên website của bạn một cách hiệu quả hơn. Sitemaps cho Google biết những trang và tệp mà bạn cho là quan trọng trên website của mình, đồng thời cung cấp thông tin hữu ích về những tệp này. Ví dụ: thông tin về lần cập nhật trang gần nhất và mọi phiên bản ngôn ngữ khác của trang.

Bạn có thể dùng Sitemaps để cung cấp thông tin về các loại nội dung cụ thể trên các trang của mình, gồm cả nội dung video, hình ảnh và tin tức. Ví dụ:

– Một _mục về video_ trong Sitemaps có thể giúp xác định thời lượng, điểm xếp hạng và mức phân loại độ tuổi phù hợp.

– Một _mục về hình ảnh_ trong Sitemaps có thể chứa thông tin vị trí của hình ảnh trong một trang.

– Một _mục về tin tức_ trong Sitemaps có thể chứa tiêu đề bài viết và ngày xuất bản.

Nếu bạn đang dùng một hệ thống quản lý nội dung (CMS) chẳng hạn như WordPress, Wix hoặc Blogger, thì có khả năng là CMS của bạn đã cung cấp Sitemaps cho các công cụ tìm kiếm rồi và bạn không phải làm gì nữa.

## Tôi có cần Sitemaps không?

Thường thì chỉ cần các trang trên website của bạn được liên kết đúng cách, Google có thể phát hiện phần lớn nội dung trên website đó. Liên kết đúng cách nghĩa là tất cả các trang mà bạn cho là quan trọng đều có thể truy cập được qua một hình thức điều hướng nào đó (có thể qua trình đơn của website hoặc đường liên kết bạn đặt trên trang). Dù vậy, Sitemaps có thể cải thiện hoạt động thu thập dữ liệu trên những website lớn hơn hoặc phức tạp hơn, hoặc trên những tệp có mức độ chuyên biệt cao hơn.

Sitemaps giúp công cụ tìm kiếm phát hiện các URL trên website của bạn, nhưng không đảm bảo rằng Google sẽ thu thập dữ liệu và Index mọi mục trong Sitemaps đó. Tuy nhiên, trong hầu hết trường hợp, Sitemaps sẽ mang lại lợi ích cho website của bạn.

Bạn có thể cần Sitemaps nếu:

– Website của bạn có quy mô lớn. Thông thường, trên các website có quy mô lớn, việc đảm bảo rằng mọi trang đều được liên kết với ít nhất một trang khác trên website sẽ khó khăn hơn. Khi đó, có nhiều khả năng Googlebot sẽ không phát hiện được một số trang mới.

– Website của bạn mới đi vào hoạt động và có ít đường liên kết ngoài đến trang đó. Googlebot và các trình thu thập dữ liệu web khác thu thập dữ liệu web bằng cách đi theo các đường liên kết từ trang này sang trang khác. Do đó, Googlebot có thể không phát hiện ra trang của bạn nếu không có website nào khác liên kết đến trang đó.

– Website của bạn có nhiều nội dung đa phương tiện (video, hình ảnh) hoặc xuất hiện trong Google Tin tức. Google có thể xem xét thêm thông tin trong Sitemaps cho tính năng Google Search.

Bạn có thể không cần Sitemaps nếu:

– Website của bạn có quy mô _nhỏ._ _Nhỏ_ trong trường hợp này có nghĩa là website của bạn có khoảng 500 trang trở xuống. (Tổng số này chỉ tính những trang mà bạn cho rằng cần phải xuất hiện trong kết quả Google Search.)

– Các trang trong website của bạn hoàn toàn liên kết với nhau. Tức là Google có thể tìm thấy mọi trang quan trọng trên website của bạn bằng cách đi theo các đường liên kết bắt đầu từ trang chủ.

– Bạn không có nhiều tệp nội dung đa phương tiện (video, hình ảnh) hoặc trang tin tức mà bạn muốn đưa lên kết quả Google Search. Sitemaps có thể giúp Google tìm thấy và hiểu được các tệp video, hình ảnh hoặc bài báo trên website của bạn. Nếu không cần những kết quả như vậy xuất hiện trong kết quả Google Search, thì có thể bạn không cần Sitemaps.

## Tạo và gửi Sitemaps

Google hỗ trợ các định dạng Sitemaps nêu trong giao thức Sitemaps. Mỗi loại Sitemaps đều có những lợi ích và thiếu sót riêng; hãy chọn loại phù hợp nhất cho website và cách thiết lập của bạn (Google không có lựa chọn ưu tiên). Bảng dưới đây so sánh các định dạng Sitemaps:

### Sitemaps XML

Sitemaps XML là định dạng linh hoạt nhất trong số các định dạng Sitemaps. Định dạng này có thể dễ dàng mở rộng và được dùng để cung cấp thêm dữ liệu về hình ảnh, video, và nội dung tin tức, cũng như các phiên bản được bản địa hoá của trang.

#### Ưu điểm của Sitemaps XM

Linh hoạt và dễ dàng mở rộng.

Định dạng này giúp cung cấp nhiều thông tin nhất về các URL của bạn.

Người dùng hệ thống quản lý nội dung (CMS) có thể dễ dàng tìm được các trình bổ trợ để tạo Sitemaps.

#### Nhược điểm của Sitemaps XM

Có thể cồng kềnh để xử lý.

Đối với các website lớn hoặc thường xuyên thay đổi URL, việc duy trì hệ thống ánh xạ có thể sẽ phức tạp.

### RSS, mRSS và Atom 1.0

Sitemaps RSS, mRSS và Atom 1.0 có cấu trúc tương tự như cấu trúc của Sitemaps XML, nhưng thường dễ cung cấp nhất vì CMS tự động tạo ra chúng.

#### Ưu điểm của RSS, mRSS và Atom 1.0

Hầu hết CMS đều tự động tạo nguồn cấp dữ liệu RSS và Atom.

Có thể dùng để cung cấp cho Google thông tin về các video của bạn.

#### Nhược điểm của RSS, mRSS và Atom 1.0

Ngoài HTML và các trang có thể Index khác, định dạng này chỉ có thể cung cấp thông tin về video, chứ không cung cấp được thông tin về hình ảnh hoặc tin tức.

Có thể cồng kềnh để xử lý.

## Sitemaps dạng văn bản

Đơn giản nhất trong các định dạng Sitemaps; định dạng này chỉ có thể liệt kê các URL cho các trang HTML và các trang có thể Index khác.

### Ưu điểm của Sitemaps dạng văn bản

Dễ dàng thực hiện và duy trì, đặc biệt là trên các website lớn.

### Nhược điểm của Sitemaps dạng văn bản

Chỉ giới hạn ở các trang HTML và các trang có thể Index khác.

## Các phương pháp hay nhất đối với Sitemaps

Các phương pháp hay nhất đối với Sitemaps được xác định theo giao thức Sitemaps. Các phương pháp hay nhưng thường ít được chú ý nhất chủ yếu có liên quan đến giới hạn về kích thước, vị trí Sitemaps và URL có trong Sitemaps.

Giới hạn về kích thước Sitemaps: Tất cả định dạng đều giới hạn mỗi Sitemaps ở mức 50 MB (không nén) hoặc 50.000 URL. Nếu có tệp lớn hơn hoặc nhiều URL hơn, bạn phải chia Sitemaps thành nhiều Sitemaps nhỏ hơn. Bạn có thể chọn tạo một tệp chỉ mục Sitemaps rồi gửi tệp chỉ mục đó cho Google. Bạn có thể gửi nhiều Sitemaps và nhiều tệp chỉ mục Sitemaps cho Google. Phương pháp này sẽ hữu ích nếu bạn muốn theo dõi hiệu suất Google Search của từng Sitemaps trong Search Console.

Vị trí và phương thức mã hoá tệp Sitemaps: Tệp Sitemaps phải được mã hoá bằng phương thức UTF-8. Bạn có thể lưu trữ Sitemaps ở bất cứ đâu trên website của mình. Nhưng trừ phi bạn gửi Sitemaps qua Search Console, thì một Sitemaps chỉ tác động đến các thư mục con thuộc cùng thư mục mẹ. Sitemaps đăng tại thư mục gốc có thể tác động đến mọi tệp trên website. Vì vậy, thư mục gốc của website chính là nơi bạn nên đăng Sitemaps.

Thuộc tính của URL được tham chiếu: Hãy sử dụng URL tuyệt đối, đủ điều kiện trong Sitemaps. Google sẽ thu thập dữ liệu URL của bạn chính xác theo thông tin mà bạn liệt kê. Ví dụ: Nếu website của bạn ở `https://nhavantuonglai.com/article/`, đừng nêu ra một URL có dạng như `/mypage.html` (URL tương đối) mà hãy sử dụng URL hoàn chỉnh và tuyệt đối: `https://nhavantuonglai.com/article/`.

Đưa vào Sitemaps những URL mà bạn muốn thấy trong kết quả Google Search của Google. Thường thì Google cho thấy URL chính tắc trong kết quả Google Search và bạn có thể tác động đến những URL này nhờ Sitemaps. Nếu một trang có các URL riêng cho phiên bản dành cho thiết bị di động và phiên bản dành cho máy tính, thì Sitemaps chỉ nên trỏ đến một phiên bản. Tuy nhiên, nếu bạn muốn trỏ đến cả hai URL, hãy chú thích các URL đó để chỉ rõ phiên bản dành cho máy tính và phiên bản dành cho thiết bị di động.

Tham khảo giao thức Sitemaps để xem danh sách đầy đủ các phương pháp hay nhất.

### Sitemaps XML

Định dạng Sitemaps XML là định dạng linh hoạt nhất trong số các định dạng được hỗ trợ. Khi sử dụng đuôi tệp mà Google hỗ trợ cho Sitemaps, bạn cũng có thể cung cấp thêm thông tin về nội dung dạng `hình ảnh`, `video` và `tin tức` cũng như `phiên bản đã bản địa hoá` trên các trang của mình.

Sau đây là một Sitemaps XML rất cơ bản, chứa thông tin về vị trí của một URL duy nhất:

```
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
<url>
<loc>https://nhavantuonglai.com/</loc>
</url>
<url>
<loc>https://nhavantuonglai.com/about/</loc>
</url>
<url>
<loc>https://nhavantuonglai.com/article/</loc>
</url>
<url>
<loc>https://nhavantuonglai.com/article/1/</loc>
</url>
<url>
<loc>https://nhavantuonglai.com/article/2/</loc>
</url>
```
Bạn có thể tham khảo các ví dụ phức tạp hơn và tài liệu đầy đủ tại sitemaps.org.

#### Lưu ý bổ sung về Sitemaps XML

– Cũng như với mọi tệp XML, tất cả giá trị của thẻ đều phải là thực thể có ký tự thoát.

– Google sẽ bỏ qua các giá trị `<priority>` và `<changefreq>`.

– Google sử dụng giá trị `<lastmod>` nếu giá trị đó chính xác một cách nhất quán và có thể xác minh (ví dụ: bằng cách so với bản sửa đổi mới nhất của trang).

### RSS, mRSS và Atom 1.0

Nếu bạn có một trang blog sử dụng nguồn cấp dữ liệu RSS hoặc Atom, bạn có thể gửi Sitemaps dưới dạng URL của nguồn cấp dữ liệu đó. Hầu hết các phần mềm blog đều có thể tạo nguồn cấp dữ liệu cho bạn, nhưng hãy lưu ý rằng nguồn cấp dữ liệu này chỉ cung cấp thông tin về những URL gần đây.

#### Lưu ý bổ sung về RSS, mRSS và Atom 1.0

– Google chấp nhận các nguồn cấp dữ liệu RSS 2.0 và Atom 1.0.

– Bạn có thể dùng nguồn cấp dữ liệu mRSS (RSS đa phương tiện) để cung cấp cho Google thông tin chi tiết về nội dung video trên website của bạn.

– Cũng như với mọi tệp XML, tất cả giá trị của thẻ đều phải là thực thể có ký tự thoát.

### Sitemaps dạng văn bản

Nếu Sitemaps của bạn chỉ bao gồm URL của các website, bạn có thể cung cấp cho Google một tệp văn bản đơn giản có chứa một URL trên mỗi dòng. Ví dụ: nếu có hai trang trên website của bạn, bạn có thể thêm các trang đó vào Sitemaps như sau:

```
https://nhavantuonglai.com/sitemap-0.xml
```

#### Lưu ý bổ sung cho Sitemaps dạng tệp văn bản

– Đừng đưa thông tin nào khác ngoài các URL vào tệp Sitemaps.

– Bạn có thể đặt tên tuỳ thích cho tệp văn bản đó, miễn là tệp đó có đuôi `.txt`.

### Cách tạo Sitemaps

Việc tạo Sitemaps giúp bạn thông báo cho công cụ tìm kiếm biết những URL nào bạn muốn ưu tiên xuất hiện trong kết quả Google Search. Đó là các `URL chính tắc`. Nếu bạn có nhiều URL cùng dẫn tới nội dung giống nhau, hãy chọn URL mà bạn ưu tiên và đưa URL đó vào Sitemaps thay vì đưa tất cả những URL dẫn tới cùng một nội dung.

Khi bạn đã xác định được URL nên đưa vào Sitemaps, hãy chọn một trong những cách sau đây để tạo Sitemaps (tuỳ thuộc vào kích thước và cấu trúc website của bạn):

– Để CMS tạo Sitemaps giúp bạn.

– Đối với những Sitemaps có dưới vài chục URL, bạn có thể tạo Sitemaps theo cách thủ công.

– Đối với những Sitemaps có nhiều hơn vài chục URL, hãy tạo Sitemaps theo cách tự động.

#### Để CMS tạo Sitemaps giúp bạn

Nếu đang dùng một hệ thống quản lý nội dung (CMS) chẳng hạn như WordPress, Wix hoặc Blogger, thì có khả năng là CMS của bạn đã tạo sẵn Sitemaps và cung cấp sơ đồ đó cho các công cụ tìm kiếm. Hãy thử tìm thông tin về cách CMS của bạn tạo Sitemaps, hoặc cách tạo Sitemaps nếu CMS của bạn không tự động tạo. Ví dụ: trong trường hợp của Wix, hãy tìm theo cụm từ _wix sitemap_ (_Sitemaps wix_) hoặc Google Search _Blogger RSS_ cho Blogger.

#### Tạo Sitemaps theo cách thủ công

Đối với những Sitemaps không có quá nhiều URL, bạn có thể tạo Sitemaps theo cách thủ công. Để thực hiện việc này, hãy mở một trình chỉnh sửa văn bản, chẳng hạn như Windows Notepad hoặc Nano (Linux, MacOS), rồi viết theo cú pháp mô tả trong phần Định dạng Sitemaps. Bạn có thể tuỳ ý đặt tên cho tệp này miễn là các ký tự bạn dùng được phép xuất hiện trong URL.

Bạn cũng có thể tạo những Sitemaps lớn hơn theo cách thủ công nhưng làm vậy sẽ rất mất công và phải duy trì lâu dài.

#### Tự động tạo Sitemaps bằng các công cụ

Đối với những Sitemaps có rất nhiều URL, bạn sẽ phải tạo Sitemaps theo cách tự động. Có nhiều công cụ có thể tạo Sitemaps. Tuy nhiên, cách tốt nhất là để phần mềm website của bạn tạo giúp bạn. Ví dụ: bạn có thể lấy danh sách URL từ cơ sở dữ liệu của website rồi xuất những URL đó đến thẳng máy chủ web hoặc xuất vào một tệp trên máy chủ web. Hãy trao đổi với nhà phát triển hoặc người quản lý máy chủ của bạn về giải pháp này. Nếu bạn cần hướng dẫn về mã lập trình, hãy tham khảo bộ sưu tập (đã cũ và không còn được duy trì) của chúng tôi về trình tạo Sitemaps của bên thứ ba.

Bạn không cần lo lắng về thứ tự của các URL trong Sitemaps vì Google không quan tâm đến điều đó. Hãy lưu ý các yêu cầu về kích thước đối với Sitemaps; nếu Sitemaps quá lớn, bạn phải chia Sitemaps thành các Sitemaps nhỏ hơn. Tìm hiểu thêm về cách quản lý các Sitemaps lớn.

### Gửi Sitemaps cho Google

Hãy lưu ý rằng việc gửi Sitemaps chỉ là gợi ý: việc này không đảm bảo rằng Google sẽ tải Sitemaps xuống hoặc sử dụng Sitemaps để thu thập dữ liệu các URL trên website của bạn. Để cung cấp Sitemaps của bạn cho Google, có một số cách như sau:

– Gửi Sitemaps trong Search Console bằng cách sử dụng báo cáo Sitemaps. Cách này sẽ cho bạn biết thời điểm Googlebot truy cập được Sitemaps đó cũng như xem cả các lỗi có thể xảy ra trong quá trình xử lý.

– Sử dụng Search Console API để gửi Sitemaps theo phương thức lập trình.

– Sử dụng công cụ ping. Gửi yêu cầu `GET` trong trình duyệt hoặc dòng lệnh đến địa chỉ sau đây, trong đó chỉ định URL đầy đủ của Sitemaps. Hãy đảm bảo Googlebot có thể truy cập vào tệp Sitemaps đó:

```
https://nhavantuonglai.com/sitemap-0.xml
```

Ví dụ:

```
https://nhavantuonglai.com/sitemap-0.xml
```

– Chèn dòng sau vào vị trí bất kỳ trong tệp robots.txt để chỉ định đường dẫn đến Sitemaps. Chúng tôi sẽ tìm dòng này vào lần tiếp theo chúng tôi thu thập dữ liệu tệp robots.txt của bạn:
```
Sitemap: https://nhavantuonglai.com/sitemap-0.xml
```
– Nếu sử dụng Atom hoặc RSS, bạn có thể dùng WebSub để thông báo nội dung thay đổi cho các công cụ tìm kiếm (bao gồm cả Google).

### Cách gửi Sitemaps cho nhiều website

Nếu có nhiều website, bạn có thể đơn giản hoá quá trình gửi bằng cách tạo một hoặc nhiều Sitemaps chứa các URL cho mọi website đã xác minh và lưu những Sitemaps đó tại một vị trí duy nhất. Bạn có thể chọn sử dụng:

Một Sitemaps chứa URL của nhiều website, trong đó có những website thuộc các miền khác nhau. Ví dụ: Sitemaps tại `https://nhavantuonglai.com/sitemap-0.xml` có thể chứa những URL sau. Nhiều Sitemaps đơn lẻ (một sơ đồ cho mỗi website) nằm tại cùng một vị trí.

Để gửi Sitemaps cho nhiều website được lưu trữ tại cùng một vị trí, bạn có thể dùng Search Console hoặc tệp robots.txt.

#### Gửi Sitemaps cho nhiều website qua Search Console

1. Đảm bảo rằng bạn đã xác minh quyền sở hữu đối với mọi website mà bạn sẽ thêm vào Sitemaps.

2. Tạo Sitemaps (một hoặc nhiều tuỳ ý), trong đó có URL của mọi website mà bạn muốn đưa vào. Bạn có thể đưa những Sitemaps này vào một tệp chỉ mục Sitemaps nếu muốn, sau đó xử lý chỉ mục Sitemaps đó.

3. Dùng Google Search Console để gửi Sitemaps hoặc tệp chỉ mục Sitemaps.

#### Gửi Sitemaps cho nhiều website qua tệp robots.txt

1. Tạo một hoặc nhiều Sitemaps cho từng website. Đối với từng tệp Sitemaps, hãy đảm bảo bạn chỉ đưa vào tệp các URL của website tương ứng.

2. Tải tất cả Sitemaps lên một website mà bạn có quyền kiểm soát, ví dụ như `https://server.nhavantuonglai.com`.

3. Đối với từng website, hãy đảm bảo rằng tệp robots.txt tham chiếu đến Sitemaps của website cụ thể đó. Ví dụ: nếu bạn tạo một Sitemaps cho `https://nhavantuonglai.com/article/` và lưu trữ sơ đồ đó tại `https://server.nhavantuonglai.com`, hãy tham chiếu đến Sitemaps đó trong tệp robots.txt tại `https://server.nhavantuonglai.com`.

```
# robots.txt file of https://server.nhavantuonglai.com
sitemap: https://nhavantuonglai.com/sitemap-0.xml
```

### Khắc phục sự cố liên quan đến Sitemaps

Định dạng XML của tệp chỉ mục Sitemaps rất giống với định dạng XML của tệp Sitemaps – được xác định theo Giao thức Sitemaps. Tức là mọi yêu cầu đối với Sitemaps cũng áp dụng cho tệp chỉ mục Sitemaps.

Sitemaps được tham chiếu phải được lưu trữ trên cùng website với tệp chỉ mục Sitemaps của bạn. Yêu cầu này sẽ được bỏ qua nếu bạn thiết lập tính năng gửi cho nhiều website.

Sitemaps được tham chiếu trong tệp chỉ mục Sitemaps phải nằm cùng thư mục với tệp chỉ mục Sitemaps hoặc trong một thư mục cấp thấp hơn trên sơ đồ phân cấp website. Ví dụ: Nếu tệp chỉ mục Sitemaps nằm tại `https://nhavantuonglai.com/sitemap-0.xml`, thì tệp đó chỉ có thể chứa Sitemaps trong cùng thư mục hoặc trong thư mục cấp thấp hơn, chẳng hạn như `https://nhavantuonglai.com/sitemap-0.xml`.

Bạn có thể gửi tối đa 500 tệp chỉ mục Sitemaps cho mỗi website trong tài khoản Search Console của mình.

## Ví dụ về chỉ mục Sitemaps

Ví dụ sau đây minh hoạ một chỉ mục Sitemaps ở định dạng XML, trong đó có liệt kê hai Sitemaps:

```
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
<url>
<loc>https://nhavantuonglai.com/</loc>
</url>
<url>
<loc>https://nhavantuonglai.com/about/</loc>
</url>
<url>
<loc>https://nhavantuonglai.com/article/</loc>
</url>
<url>
<loc>https://nhavantuonglai.com/article/1/</loc>
</url>
<url>
<loc>https://nhavantuonglai.com/article/2/</loc>
</url>
```

## Tham chiếu đến chỉ mục Sitemaps

Thẻ chỉ mục Sitemaps được xác định theo cùng một không gian tên với Sitemaps truyền thống: `http://www.sitemaps.org/schemas/sitemap/0.9`.

Để đảm bảo Google có thể sử dụng chỉ mục Sitemaps của bạn, bạn phải sử dụng các thẻ bắt buộc sau đây:

<table><thead><tr><th width="175.5">Thẻ bắt buộc</th><th></th></tr></thead><tbody><tr><td><code>sitemapindex</code></td><td>Thẻ mẹ của cây XML. Thẻ này chứa tất cả các thẻ khác.</td></tr><tr><td><code>sitemap</code></td><td>Thẻ mẹ cho mỗi Sitemaps được liệt kê trong tệp. Đây là thẻ con trực tiếp đầu tiên và duy nhất của thẻ <code>sitemapindex</code>.</td></tr><tr><td><code>loc</code></td><td>Vị trí (URL) của Sitemaps. Đây là thẻ con đầu tiên và duy nhất của thẻ <code>sitemap</code>. Một tệp chỉ mục Sitemaps có thể có tối đa 50.000 thẻ <code>loc</code>.</td></tr></tbody></table>

Ngoài ra, các thẻ không bắt buộc sau đây có thể giúp Google lên lịch thu thập dữ liệu Sitemaps của bạn:

<table><thead><tr><th width="175.5">Thẻ không bắt buộc</th><th></th></tr></thead><tbody><tr><td><code>lastmod</code></td><td>Xác định thời gian sửa đổi tệp Sitemaps tương ứng. Giá trị cho thẻ <code>lastmod</code>phải ở định dạng ngày giờ W3C</a>.</td></tr></tbody></table>

<figure><img src="https://nhavantuonglai.com/image/cover/001-210.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>