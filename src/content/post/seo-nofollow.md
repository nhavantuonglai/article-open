---
pubDatetime: 2023-05-24T10:10:00Z
title: Xác định bản chất của đường liên kết với thuộc tính nofollow
description: Giúp Google và người dùng tìm thấy nội dung website hướng dẫn nâng cao những kỹ thuật giúp tối ưu SEO hiệu quả, đem lại thứ hạng tốt trên công cụ tìm kiếm.
featured: false
image: https://data.nhavantuonglai.com/image/illustrations/cover-nhavantuonglai-com-0346.jpg
tags:
  - google
  - google console
  - google search
  - seo
  - google seo
  - content
  - developer
---

Gần 15 năm trước, thuộc tính `nofollow` được ra mắt với nhiệm vụ hỗ trợ ngăn chặn bình luận vi phạm. Đây cũng là một trong những phương thức Google khuyên dùng để đánh dấu đường liên kết được tài trợ hoặc đường liên kết liên quan đến quảng cáo. Kể từ thời điểm thuộc tính nofollow ra mắt vào năm 2005, mạng Internet đã có nhiều thay đổi. Giờ là lúc nofollow cũng cần thay đổi.

Hôm nay, chúng tôi xin giới thiệu hai thuộc tính đường liên kết mới giúp quản trị viên website có thêm cách thức để xác định bản chất của các đường liên kết cụ thể trên Google Search. Dưới đây là thông tin tóm tắt về hai thuộc tính này cũng như thuộc tính `nofollow`:

– `rel="sponsored"`: Sử dụng thuộc tính sponsored để xác định các đường liên kết được tạo ra trên website để phục vụ hoạt động quảng cáo, chương trình tài trợ hoặc các thoả thuận có thù lao khác.

– `rel="ugc"`: UGC là viết tắt của User Generated Content, nghĩa là nội dung do người dùng tạo. Bạn nên sử dụng giá trị thuộc tính `ugc` cho đường liên kết trong nội dung do người dùng tạo, chẳng hạn như bình luận và bài đăng trên diễn đàn.

– `rel="nofollow"`: Sử dụng thuộc tính này trong trường hợp bạn muốn liên kết đến một trang nhưng không muốn ngụ ý rằng đó là một hình thức chứng thực, bao gồm cả ý định chuyển điểm xếp hạng cho một trang khác.

Khi ra mắt nofollow, Google không coi các đường liên kết được đánh dấu bằng thuộc tính này là tín hiệu trong thuật toán Google Search của chúng tôi. Cách làm này bây giờ đã thay đổi. Mọi thuộc tính đường liên kết – gồm `sponsored`, `ugc` và `nofollow` – đều được xem là gợi ý về việc đường liên kết nào cần xem xét hoặc bỏ qua trong Google Search. Bên cạnh nhiều tín hiệu khác, chúng tôi sẽ sử dụng những tín hiệu này để hiểu rõ hơn cách phân tích và sử dụng hợp lý các đường liên kết trong hệ thống của chúng tôi.

Tại sao không bỏ qua hoàn toàn các đường liên kết như vậy, như đã làm với `nofollow`? Đường liên kết chứa nhiều thông tin có giá trị, có thể giúp chúng tôi cải thiện tính năng Google Search, chẳng hạn như việc từ ngữ trong đường liên kết mô tả nội dung được liên kết đến như thế nào. Việc xem xét mọi đường liên kết mà chúng tôi bắt gặp cũng giúp chúng tôi nắm rõ hơn về quy luật của những đường liên kết bất thường. Khi chuyển sang mô hình gợi ý, chúng tôi không còn bỏ lỡ thông tin quan trọng này, đồng thời vẫn cho phép chủ sở hữu website cho biết rằng một số đường liên kết không nên bị coi là thông tin chứng thực của bên thứ nhất.

Chúng tôi biết rằng các thuộc tính mới này sẽ gây nhiều thắc mắc. Vì vậy, dưới đây là một danh sách câu hỏi thường gặp mà chúng tôi hy vọng sẽ giải đáp được phần lớn những thắc mắc đó.

## Tôi có cần phải thay đổi các giá trị thuộc tính nofollow hiện tại của mình không?

Không. Nếu bạn đang sử dụng `nofollow` để chặn các đường liên kết được tài trợ hoặc để thể hiện rằng bạn không bảo chứng cho trang mà bạn liên kết đến, thì những giá trị đó sẽ tiếp tục được hỗ trợ. Bạn hoàn toàn không cần thay đổi đường liên kết `nofollow` nào mà bạn đang có.

## Tôi có thể sử dụng nhiều giá trị `rel` cho một đường liên kết không?

Có, bạn có thể sử dụng nhiều giá trị `rel` cho một đường liên kết. Ví dụ: `rel="ugc sponsored"` là một thuộc tính hoàn toàn hợp lệ, cho biết đường liên kết đó đến từ nội dung do người dùng tạo và được tài trợ. Bạn cũng nên sử dụng `nofollow` cùng với các thuộc tính mới (chẳng hạn như `rel="nofollow ugc"`) nếu muốn đảm bảo khả năng tương thích ngược với những dịch vụ không hỗ trợ các thuộc tính mới.

## Nếu sử dụng `nofollow` cho quảng cáo hoặc đường liên kết được tài trợ, thì tôi có cần thay đổi những đường liên kết đó không?

Không. Bạn có thể tiếp tục sử dụng `nofollow` làm phương thức đánh dấu những đường liên kết đó để tránh bị ảnh hưởng xấu do bị coi là có mưu đồ liên kết. Bạn không cần phải thay đổi những mã đánh dấu đang dùng. Nếu bạn có cơ chế để thêm thuộc tính này vào các đường liên kết mới, thì bạn có thể tiếp tục triển khai những cơ chế đó. Tuy nhiên, bạn nên chuyển sang `rel="sponsored"` nếu thấy thuận tiện.

## Tôi có còn phải đánh dấu quảng cáo hoặc đường liên kết được tài trợ hay không?

Có. Nếu bạn muốn tránh nguy cơ bị xử lý vì liên quan đến mưu đồ liên kết, hãy sử dụng `rel="sponsored"` hoặc `rel="nofollow"` để đánh dấu các đường liên kết này. Chúng tôi ưu tiên `sponsored` nhưng bạn dùng một trong hai đều được và chúng tôi sẽ xem cả hai thuộc tính này là như nhau theo mục đích này.

## Điều gì xảy ra nếu tôi sử dụng không đúng thuộc tính cho một đường liên kết?

Không có thuộc tính nào là sai, trừ trường hợp bạn có đường liên kết được tài trợ. Nếu bạn sử dụng `sponsored` để đánh dấu một đường liên kết do người dùng tạo hoặc một đường liên kết không phải quảng cáo, thì chúng tôi sẽ thấy gợi ý đó nhưng tác động lớn nhất (nếu có) chỉ là chúng tôi có thể sẽ không tính đường liên kết đó vào điểm xếp hạng của một trang khác. Trường hợp này không có gì khác so với trạng thái hiện tại của nhiều nội dung do người dùng tạo và đường liên kết không phải là quảng cáo vốn đã được đánh dấu bằng `nofollow`.

Vấn đề chỉ xảy ra khi bạn không sử dụng đúng thuộc tính cho đường liên kết được tài trợ. Với những đường liên kết thể hiện rõ ràng là quảng cáo hay nội dung được tài trợ, bạn nên dùng `sponsored` hoặc `nofollow` như đã nêu ở trên. Chúng tôi ưu tiên `sponsored` hơn nhưng cũng chấp nhận cả `nofollow`.

## Tại sao tôi phải mất công sử dụng các thuộc tính mới này?

Việc bạn sử dụng những thuộc tính mới này giúp chúng tôi dễ dàng hơn trong việc xử lý các đường liên kết để phân tích nội dung trên web. Quá trình phân tích đó có thể bao gồm chính nội dung của bạn nếu có người sử dụng những thuộc tính này để đánh dấu các đường liên kết đến trang của bạn.

## Chẳng phải phương pháp _gợi ý_ sẽ làm tăng số đường liên kết vi phạm trong phần bình luận và nội dung do người dùng tạo hay sao?

Trong số những website cho phép bên thứ ba đóng góp nội dung, có nhiều trang đã áp dụng các biện pháp chặn đường liên kết vi phạm, trong đó có các công cụ kiểm duyệt có thể tích hợp vào nhiều nền tảng blog cũng như quy trình đánh giá thủ công. Các thuộc tính đường liên kết `ugc` và `nofollow` sẽ hỗ trợ thêm cho nỗ lực ngăn chặn đó. Trong hầu hết trường hợp, việc chuyển sang mô hình gợi ý sẽ không thay đổi bản chất trong cách chúng tôi xử lý những đường liên kết như vậy. Nhìn chung, chúng tôi sẽ xử lý những đường liên kết này giống như cách chúng tôi từng xử lý `nofollow`, và sẽ không dùng những đường liên kết này cho mục đích xếp hạng. Chúng tôi vẫn sẽ tiếp tục đánh giá kỹ lưỡng cách sử dụng đường liên kết trong Google Search, như lâu nay chúng tôi vẫn làm và phải làm khi không có thuộc tính nào được thêm vào.

## Khi nào các thuộc tính và thay đổi này có hiệu lực?

Mọi thuộc tính đường liên kết, gồm cả `sponsored`, `ugc`, và `nofollow`, hiện đã hoạt động với vai trò gợi ý để chúng tôi sử dụng cho mục đích xếp hạng. Kể từ ngày 1 tháng 3 năm 2020, `nofollow` sẽ trở thành gợi ý cho mục đích thu thập dữ liệu và Index. Với những ai chỉ dùng mỗi thuộc tính nofollow để ngăn Google Index một trang, các bạn không nên làm theo cách này, mà nên sử dụng một trong những cơ chế mạnh mẽ hơn được nêu trên trang Tìm hiểu cách chặn URL khỏi Google.

<figure><img src="https://data.nhavantuonglai.com/image/illustrations/cover-nhavantuonglai-com-0310.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>