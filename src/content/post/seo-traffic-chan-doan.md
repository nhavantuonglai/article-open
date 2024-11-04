---
pubDatetime: 2023-06-01T10:10:00Z
title: Hướng dẫn chẩn đoán giảm traffic organic website
description: Giúp Google và người dùng tìm thấy nội dung website hướng dẫn nâng cao những kỹ thuật giúp tối ưu SEO hiệu quả, đem lại thứ hạng tốt trên công cụ tìm kiếm.
featured: false
image: https://nhavantuonglai.com/image/cover/001-689.jpg
tags:
  - google
  - google console
  - seo
  - google seo
  - content
  - developer
---

_Làm sáng tỏ bí ẩn đằng sau lưu lượng truy cập SEO giảm của bạn. Trả lời những câu hỏi này để xác định các vấn đề và khôi phục khả năng hiển thị công cụ tìm kiếm của website của bạn._

Hỏi một câu hỏi SEO ngày nay là một câu hỏi phổ biến, cả từ các chuyên gia SEO và từ khách hàng.

Tôi sẽ tập trung nhiều hơn vào phần đầu tiên: Điều gì khiến lưu lượng truy cập của tôi giảm hàng tháng?

Đây là câu hỏi đầy đủ từ Britney ở Houston, người viết:

>Điều gì sẽ khiến lưu lượng truy cập tìm kiếm không phải trả tiền của công ty giảm mạnh MoM? Chúng tôi không có bất kỳ liên kết bị hỏng nào, tất cả SEO trên trang trông tuyệt vời (tiêu đề, mô tả meta…), Google có các trang được lập chỉ mục…

>Chúng tôi đã chạy quảng cáo PPC của Google với thành công tốt và điều đó đã thúc đẩy lưu lượng truy cập ổn định đến website. Lưu lượng truy cập trực tiếp tăng. Tôi đang thua lỗ… Bất kỳ ý tưởng?

Sự sụt giảm lưu lượng truy cập SEO không phải trả tiền hàng tháng (MoM) có thể gây bực bội và khiến khách hàng hoảng loạn khi cố gắng tìm ra điều gì đã xảy ra và họ nên làm gì với nó.

Nghe có vẻ như bạn đang đi đúng hướng với cuộc điều tra của mình, nhưng có một vài điều khác chúng ta nên tìm kiếm.

Tôi sẽ cố gắng hết sức để cung cấp một loại _danh sách kiểm tra_ để chẩn đoán (và hy vọng khắc phục) sự sụt giảm SEO.

## Bước đầu tiên: Tìm ra những gì đã giảm

Trước khi chúng ta đi vào công cụ kỹ thuật hoặc nguyên nhân, chúng ta cần tìm hiểu thêm về những gì đã rơi. Đó có phải là một trang cụ thể không? Một truy vấn cụ thể? Hoặc một cái gì đó nhiều hơn.

Cách tốt nhất để làm điều này là với Google Search Console hoặc Bing Webmaster Tools, (sử dụng bất kỳ công cụ tìm kiếm nào thấy sự sụt giảm.)

Đầu tiên, chúng tôi sẽ kéo báo cáo MoM và sắp xếp nó theo thay đổi. Sau đó, tìm kiếm bất kỳ trang và / hoặc truy vấn cụ thể nào dẫn đến sự sụt giảm.

Nếu không có trang / truy vấn chính nào bị loại bỏ, có thể đó là một loại trang hoặc loại truy vấn cụ thể đã bị loại bỏ.

Điều này đòi hỏi một chút nỗ lực thủ công với dữ liệu, vì tất cả các website đều khác nhau, nhưng chúng ta nên biết website của mình đủ tốt để phát hiện bất kỳ mẫu nào. Ví dụ: có thể đó là tất cả các trang đích của sản phẩm, trang gia đình sản phẩm hoặc trang blog đã bị rớt.

Mẹo chuyên nghiệp: Đây là một trong những kẻ trộm thú cưng lớn nhất của tôi mà tôi thấy trong báo cáo của cơ quan. Một báo cáo sẽ bắt đầu nói rằng SEO tăng hoặc giảm X%, nhưng không bao giờ thực sự nói những trang / truy vấn / sản phẩm nào gây ra thay đổi đó.

Đó là thông tin mà khách hàng của bạn thực sự muốn biết. Nếu không có bối cảnh đó, họ không thể làm bất cứ điều gì có thể hành động với báo cáo. Luôn bao gồm các nguyên nhân gây ra bất kỳ mức tăng đột biến nào trong báo cáo của bạn.

## Một khi chúng tôi biết nguyên nhân gây ra sự sụt giảm, chúng tôi có thể điều tra

Bước đầu tiên là làm những thứ _ngu ngốc._

Nếu đó là một trang hoặc mẫu cụ thể, hãy đảm bảo rằng nó không bị chặn bởi robot.txt, vẫn trả về ở 200 mã trạng thái và không chứa thẻ noindex hoặc thẻ canonical vô tình…

Bạn sẽ bị sốc khi tần suất những điều này xảy ra ngẫu nhiên trên các website giải pháp lớn mà không ai biết tại sao. Nó luôn luôn tốt để kiểm tra.

Từ đó, chúng ta nên kiểm tra kết xuất của trang / mẫu để đảm bảo thay đổi mã không khiến công cụ tìm kiếm không thể hiểu trang. Điều này cũng xảy ra rất nhiều và có thể khó nắm bắt.

Tôi sẽ bắt đầu bằng cách xem bộ nhớ cache trang trên Google / Bing và sử dụng các công cụ tìm nạp và hiển thị của họ trong bảng điều khiển tìm kiếm của họ.

Nó không còn đủ tốt để chỉ _xem nguồn_ trong môi trường web ngày nay – rất nhiều thứ có thể thay đổi với chèn thẻ và JavaScript mà bạn thực sự cần phải kiểm tra những gì đã được hiển thị.

Tôi cũng là một fan hâm mộ lớn của tiện ích mở rộng View Rendered Source Chrome để giúp đỡ.

## Ok, đó không phải là lỗi kỹ thuật _ngu ngốc._ Bây giờ thì sao?

Bây giờ là nơi nó trở nên khó khăn hơn một chút đối với chúng tôi.

Nếu chúng tôi đã đi xa đến mức này, chúng tôi đã xác nhận rằng các công cụ tìm kiếm có thể thu thập dữ liệu các trang và họ có thể xem nội dung trên các trang.

Vì vậy, những gì khác có thể gây ra sự sụt giảm?

## Sự sụt giảm có liên quan đến các truy vấn có thương hiệu không?

Nếu vậy, chúng ta nên xem xét các sáng kiến tiếp thị và quảng cáo khác. Ví dụ: nếu sự sụt giảm là do tên thương hiệu, điều gì đã xảy ra với các truy vấn tìm kiếm có trả tiền cho tên thương hiệu? Chúng có tăng lên không?

Nếu có, có thể có một số ăn thịt đồng loại đang diễn ra. Chúng tôi vẫn xếp hạng cho truy vấn đó hay chúng tôi đã giảm? Số lần nhấp vào tìm kiếm có trả tiền cho thương hiệu cũng giảm?

Sau đó, có thể chúng tôi có một vấn đề nhu cầu. Có lẽ ít người tìm kiếm hơn.

Chúng ta nên xem xét Google Trends để xác nhận – nhưng cũng nên xem xét chi tiêu cho TV, radio, quảng cáo hiển thị, chiến dịch email, phương tiện truyền thông xã hội… Tất cả những điều này thúc đẩy tìm kiếm thương hiệu gián tiếp và giảm ngân sách quảng cáo thường dẫn đến giảm tìm kiếm thương hiệu.

## Nó có phải là một đoạn trích nổi bật không?

Nếu truy vấn là loại câu hỏi có thể được trả lời trực tiếp trong các trang kết quả tìm kiếm, có thể chúng tôi không nhận được nhấp chuột. Hãy quay trở lại Google Search Console và kiểm tra thứ hạng và số lần hiển thị.

Nếu hiển thị phẳng, nhưng nhấp chuột giảm, có thể điều gì đó đang xảy ra trong các trang kết quả của công cụ tìm kiếm (SERPs).

(Lưu ý: Chúng tôi cũng có thể sử dụng dữ liệu xếp hạng, số lần hiển thị và số lần nhấp để chẩn đoán việc ăn thịt đồng loại tìm kiếm có trả tiền.)

Nếu chúng tôi vẫn xếp hạng cho truy vấn nhưng không nhận được nhấp chuột, thì có thể người dùng hài lòng mà không cần nhấp vào. Đối với các truy vấn tìm kiếm như [Taylor Swift bao nhiêu tuổi?] hoặc [mấy giờ ở Bangalore?], người dùng không muốn có một website – họ muốn một số.

Chúng tôi không thể làm gì nhiều để khôi phục lưu lượng truy cập này. Hãy nhớ rằng, mục tiêu của các công cụ tìm kiếm không phải là gửi lưu lượng truy cập đến các website mà là trả lời các câu hỏi.

Có thể là một ý tưởng tốt để xem xét kỹ mô hình kinh doanh của chúng tôi và đảm bảo rằng chúng tôi đang cung cấp nhiều hơn các câu trả lời đơn giản.

Nếu đó không phải là những điều trên, bây giờ có thể là thời điểm tốt để xem thẻ tiêu đề của chúng tôi và thực hiện một số cập nhật.

Nó nằm ngoài phạm vi của bài viết này, nhưng hãy đảm bảo tiêu đề hấp dẫn với các từ hành động bao gồm các từ khóa chính…

## Không ai trong số đó…

Đây là lúc quá trình trở nên chủ quan hơn.

Bước đầu tiên của chúng tôi là thực hiện tìm kiếm (ẩn danh) cho các truy vấn đã giảm. Hãy chú ý đến loại nguồn hoặc trang nào đang xếp hạng.

Ví dụ: nếu kết quả cho truy vấn là tất cả các website đánh giá của bên thứ ba chứ không phải thương hiệu, thì công cụ tìm kiếm đã quyết định mục đích của tìm kiếm đó không phải là để thưởng cho thương hiệu. Bạn có thể không xếp hạng được cho truy vấn đó nữa.

Ví dụ: Truy vấn TV tốt nhất không hiển thị bất kỳ thương hiệu nào trong kết quả tìm kiếm – chỉ hiển thị bài đánh giá và nội dung thông tin – trong khi tìm kiếm _TV OLED_ hiển thị chủ yếu nội dung giao dịch: địa điểm mua TV.

Nếu truy vấn của bạn không còn phù hợp với mục đích mà công cụ tìm kiếm đang cố gắng hiển thị, bạn không thể làm gì nhiều – ngoài việc tạo ra một số nội dung mới phù hợp hơn với mục đích mà công cụ đang cố gắng thưởng.

Đây là một viên thuốc khó nuốt đối với rất nhiều chuyên gia SEO.

Thông thường, chúng ta nghĩ về SEO như tiếp thị đẩy: _Làm thế nào để website của tôi xếp hạng cho thuật ngữ này?_ Thay vào đó, chúng ta cần nghĩ về SEO như tiếp thị kéo: _Mọi người tìm kiếm thuật ngữ này muốn gì?_

Người dùng của chúng tôi đang cho chúng tôi biết họ muốn gì và các công cụ tìm kiếm đang cho chúng tôi biết loại website nào họ muốn hiển thị cho mỗi truy vấn.

Công việc của chúng tôi là lắng nghe và tạo ra những website đó. Điều đó thường đi kèm với rất nhiều công việc và chi phí – nhưng trong một số tình huống, đó có thể là cách duy nhất để lấy lại lưu lượng truy cập.

## Tóm tắt

Hy vọng rằng, hướng dẫn này đã giúp chẩn đoán lý do tại sao SEO giảm. Thường không có một câu trả lời tốt, nhưng dòng câu hỏi trên có thể giúp chúng ta tìm ra nó nhiều hơn không.

Điều quan trọng nữa là không phản ứng thái quá và cho mọi thứ một chút thời gian. Khi Google tiếp tục tung ra các bản cập nhật thuật toán, đôi khi chúng ta sẽ thấy một trang tự quay trở lại hoặc mục đích của SERP thay đổi theo thời gian.

Điều quan trọng là không phản ứng thái quá, vứt bỏ nội dung hữu ích hoặc hữu ích hoặc mất dấu người dùng và ý định SERP trong suốt quá trình.

<figure><img src="https://nhavantuonglai.com/image/cover/001-300.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>