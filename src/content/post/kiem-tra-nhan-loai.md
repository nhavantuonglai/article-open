---
pubDatetime: 2020-01-13T10:10:00Z
title: Tại sao bài kiểm tra cuối cùng của nhân loại sẽ là thất bại nhân loại?
description: Một bài kiểm tra cuối cùng được cộng đồng xây dựng dành cho AI hứa hẹn sẽ kiểm tra các mô hình ngôn ngữ lớn (LLMs) theo cách chưa từng có. Đây là lý do ý tưởng và cách triển khai này khiến chúng ta thất bại.
image: https://banmaixanh.vercel.app/image/cover/001-161.jpg
tags:
  - khoa hoc
  - vu tru
  - vat ly thien van
  - khoa hoc vu tru
  - bai kiem tra cuoi cung
  - kiem tra nhan loai
  - ai
  - nhan thuc
  - nhan hoc
  - may hoc
  - tri tue nhan tao
---

_Một bài kiểm tra cuối cùng được cộng đồng xây dựng dành cho AI hứa hẹn sẽ kiểm tra các mô hình ngôn ngữ lớn (LLMs) theo cách chưa từng có. Đây là lý do ý tưởng và cách triển khai này khiến chúng ta thất bại._

Có rất nhiều tình huống trong cuộc sống mà chúng ta cần tham khảo ý kiến chuyên gia có kiến thức chuyên môn trong một lĩnh vực mà bản thân không đủ khả năng. Nếu có một đường ống nước bị rò rỉ trong nhà, bạn có thể cần gọi một thợ sửa ống nước. Nếu bạn bị đau và khó cử động ở vai, bạn có thể cần tham khảo ý kiến của bác sĩ chỉnh hình. Và nếu xe của bạn bị rò rỉ dầu, bạn có thể phải tìm đến thợ sửa xe. Tất nhiên, bạn có thể cố gắng tự giải quyết các vấn đề này – bằng cách tham khảo các bài viết trên internet, đọc sách, hoặc thử nghiệm… – nhưng dù bạn có kiến thức chuyên môn đến đâu, sẽ luôn có một điểm mà sự hiểu biết của bạn không đủ. Nếu muốn tìm hiểu thêm, bạn chỉ có hai lựa chọn: hoặc tìm một nguồn có kiến thức mà bạn không có, hoặc tự mình nghiên cứu từ đầu.

## AI thay đổi các lựa chọn truyền thống

Cho đến gần đây, những cách tiếp cận này là những lựa chọn duy nhất: tham khảo ý kiến chuyên gia, tự tìm câu trả lời, hoặc thử nghiệm mù quáng với hy vọng may mắn. Tuy nhiên, sự phát triển của AI, đặc biệt là ở dạng các mô hình ngôn ngữ lớn như ChatGPT, Claude, Gemini và nhiều công cụ khác, mang lại một con đường tiềm năng mới: có lẽ bạn chỉ cần tham khảo một chatbot AI, và có lẽ, khi chúng phát triển đến một mức độ nhất định, chúng sẽ có thể cung cấp câu trả lời mà bạn cần, với tiêu chí:

– Chính xác,

– Toàn diện,

– Ở mức chuyên gia,

– Và phù hợp với bất kỳ câu hỏi nào bạn đặt ra.

Đó là giấc mơ của nhiều nhà khoa học máy tính và nhà nghiên cứu AI ngày nay, nhưng điều đó bị phức tạp bởi một loạt những thất bại nổi bật và dễ dàng tái hiện của các LLM, ngay cả khi trả lời những câu hỏi cơ bản nhất hiện nay.

Để đánh giá khả năng của các LLM, Trung tâm An toàn AI, do Dan Hendrycks dẫn đầu, hiện đang kêu gọi cộng đồng đóng góp các câu hỏi nhằm xây dựng cái mà họ gọi là _bài kiểm tra cuối cùng của nhân loại._ Họ tìm kiếm các câu hỏi khó ở mức tiến sĩ (với các câu trả lời có thể mang tính chuyên sâu và ít được biết đến) từ các chuyên gia trên khắp thế giới, tin rằng [bài kiểm tra cuối cùng của nhân loại](https://nhavantuonglai.com/article/kiem-tra-nhan-loai) này sẽ là thách thức tối thượng cho AI.

Tuy nhiên, ngay cả ý tưởng cơ bản này cũng có thể có sai sót. bài kiểm tra như vậy không nhất thiết chứng minh được sự thành công của AI, mà có thể dễ dàng khiến con người bị lừa rằng một AI sở hữu những khả năng mà thực ra nó không có. Đây là lý do.

<figure><img src="https://banmaixanh.vercel.app/image/article/lam-phat-vu-tru-01.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>

Nếu bạn muốn hiểu cách AI thất bại, trước tiên bạn cần hiểu cách mà AI, đặc biệt là các LLM, hoạt động. Trong một chương trình máy tính truyền thống, người dùng cung cấp đầu vào, máy tính thực hiện các tính toán dựa trên một thuật toán được lập trình sẵn, và khi hoàn tất, nó trả lại đầu ra cho người dùng. Sự khác biệt lớn giữa một chương trình máy tính truyền thống và dạng AI được sử dụng trong các ứng dụng học máy (bao gồm cả LLMs) là thay vì tuân theo một thuật toán đã được lập trình sẵn, chính chương trình học máy sẽ tự xác định thuật toán cơ bản.

Thuật toán tốt đến mức nào?

Về lý thuyết, ngay cả những thuật toán tốt nhất mà một máy tính có thể tạo ra vẫn sẽ bị giới hạn bởi một yếu tố không thể tránh khỏi: chất lượng, kích thước và tính toàn diện của bộ dữ liệu huấn luyện ban đầu mà nó sử dụng để hình thành thuật toán. Như Anil Ananthaswamy, tác giả của _Why Machines Learn: The Elegant Math Behind Modern AI,_ đã cảnh báo trong một cuộc trò chuyện vào tháng 7 vừa qua:

_Dù các thuật toán này có thể rất mạnh mẽ và thậm chí vượt trội so với con người trong các nhiệm vụ hẹp mà chúng được đào tạo, chúng không tổng quát hóa được với các câu hỏi vượt ra ngoài phân phối dữ liệu huấn luyện. Theo cách đó, chúng không thông minh như cách mà con người được coi là thông minh._

Nói cách khác, nếu bạn muốn LLM của mình hoạt động tốt hơn trong các nhiệm vụ mà hiện tại nó chưa thực hiện tốt, giải pháp là cải thiện bộ dữ liệu huấn luyện để bao gồm những ví dụ tốt hơn, liên quan hơn và toàn diện hơn với các truy vấn mà nó sẽ nhận được.

Dựa trên dữ liệu ánh sáng của Kepler về ngoại hành tinh Kepler-1625b, chúng ta đã suy luận được sự tồn tại của một ngoại mặt trăng tiềm năng.

Sự thật rằng các lần quá cảnh không xảy ra với chu kỳ chính xác, mà có các biến đổi về thời gian, là manh mối quan trọng khiến các nhà nghiên cứu hướng đến phát hiện này. Với các bộ dữ liệu ngoại hành tinh đủ lớn, các thuật toán học máy hiện nay có thể tìm thấy thêm các ứng viên ngoại hành tinh và ngoại mặt trăng mà trước đây không thể nhận diện được bằng các thuật toán viết bởi con người.

<figure><img src="https://banmaixanh.vercel.app/image/article/lam-phat-vu-tru-02.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>

Ví dụ, nếu bạn huấn luyện AI với một số lượng lớn hình ảnh khuôn mặt con người, AI sẽ trở nên rất giỏi trong một số nhiệm vụ liên quan đến việc nhận diện khuôn mặt. Dựa trên các đặc điểm mà nó có thể xác định, bất kỳ thuật toán học máy nào cũng sẽ phân loại và sắp xếp các hình ảnh cùng với các đặc điểm mà nó nhận diện được trong đó. Thuật toán này sẽ xác định một phân phối xác suất nhất định cho các đặc điểm và mối tương quan giữa chúng trong bộ dữ liệu huấn luyện. Tuy nhiên, có những giả định mà thuật toán phải ngầm định: rằng phân phối xác suất trong dữ liệu huấn luyện đại diện cho _sự thật_ về đối tượng mà nó được huấn luyện.

## Hạn chế của các thuật toán học máy

Tuy nhiên, nếu bạn đưa vào mô hình AI đã được huấn luyện một dữ liệu đầu vào hoàn toàn khác biệt so với toàn bộ bộ dữ liệu huấn luyện, thuật toán – dù đã được huấn luyện kỹ lưỡng đến đâu – sẽ không thể đưa ra một đầu ra đáng tin cậy. Nếu bạn huấn luyện phần mềm nhận diện khuôn mặt trên hàng trăm nghìn khuôn mặt người da trắng, nó có thể hoạt động rất kém khi nhận diện hoặc tạo ra hình ảnh khuôn mặt của người từ Nigeria hoặc Nhật Bản. Tương tự, các LLM chỉ có thể mô hình hóa các mối quan hệ và tương quan giữa từ ngữ, cụm từ và câu nằm trong bộ dữ liệu huấn luyện của nó. AI có thể giải thích các thuật ngữ cũ, ít người biết như _fhqwhgads,_ vì thuật ngữ đó tồn tại trong bộ dữ liệu huấn luyện, nhưng lại gặp khó khăn khi giải thích các thuật ngữ hiện đại hơn như _wap,_ ngay cả khi bạn chỉ định ý nghĩa mà giới trẻ hiện nay sử dụng.

Một nghệ sĩ biểu diễn với một chiếc vali đứng trước một đám đông lớn tại một nhà hát ngoài trời vào ngày nắng đẹp. Một chiếc ô và một chiếc xe đạp xuất hiện ở tiền cảnh, gợi lên sự tò mò về việc tại sao máy học lại rút ra bài học từ những cảnh đời thường như vậy.

Với một bộ dữ liệu huấn luyện lớn, chẳng hạn như số lượng lớn khuôn mặt độ phân giải cao, AI và các kỹ thuật học máy không chỉ học cách nhận diện khuôn mặt con người mà còn có thể tạo ra hình ảnh khuôn mặt với nhiều đặc điểm cụ thể khác nhau. Tuy nhiên, đám đông tại Mauerpark, Berlin, sẽ cung cấp dữ liệu huấn luyện tuyệt vời cho việc tạo khuôn mặt người da trắng nhưng sẽ hoạt động rất kém nếu yêu cầu tạo ra các đặc điểm thường thấy ở khuôn mặt người Mỹ gốc Phi.

Cách dễ dàng nhất để nhận thấy nơi mà các LLM hiện đại thành công hay thất bại là không cần tìm đến các vấn đề phức tạp. Bạn chỉ cần đặt ra một câu hỏi mà:

– Có một lượng lớn thông tin sai lệch tồn tại, và không dễ dàng để tìm ra thông tin chính xác.

– Phần lớn các câu trả lời quá đơn giản hoặc dựa trên một tập hợp giả định hạn chế (và không cần thiết).

– Câu trả lời đúng đòi hỏi kiến thức chuyên môn mà không phải ai cũng nắm giữ hoặc đánh giá cao.

Ví dụ, bạn có thể hỏi bất kỳ LLM nào một câu như _Điều gì vi phạm định lý CPT?_ Nó sẽ liệt kê một số cách mà định lý này có thể bị vi phạm, nhưng không bao giờ cho bạn thông tin quan trọng rằng không có gì đã biết có thể vi phạm định lý này và mọi sự vi phạm tiềm năng đều chỉ là giả thuyết, không có bằng chứng thực tế nào.

Bạn có thể hỏi bất kỳ LLM nào _Số nguyên nhỏ nhất mà bình phương của nó nằm giữa 15 và 26 là bao nhiêu?_ Hầu hết các LLM sẽ trả lời sai rằng kết quả là 4, mặc dù trong bốn đáp án (-5, -4, 4, và 5), số nhỏ nhất thực sự là -5. Nếu bạn yêu cầu LLM xem xét các số âm, nó sẽ sai tiếp khi nói đáp án là -4, và chỉ sau khi được gợi ý thêm, LLM mới có thể đưa ra đáp án đúng là -5.

<figure><img src="https://banmaixanh.vercel.app/image/article/lam-phat-vu-tru-03.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>

Một ảnh chụp màn hình từ truy vấn về số nguyên được gửi đến iask.ai, cùng với câu trả lời sai nghiêm trọng của nó. Câu trả lời đúng là -5, nhưng cần phải đưa thêm một số gợi ý bổ sung để hướng AI đến câu trả lời đúng.

## Những thất bại trong nhận diện thông tin cũ và hiếm

Bạn cũng có thể dễ dàng làm khó AI bằng cách hỏi nó một câu dựa trên kiến thức cũ và ít được biết đến. Ví dụ, trong video âm nhạc mang tính biểu tượng _Bad_ của Michael Jackson năm 1987, có một cảnh ấn tượng nơi một nghệ sĩ trượt patin:

– Bắt đầu bằng tư thế ngồi xoạc trên sàn.

– Dùng tay phải kéo áo khoác lên.

– Dường như tự nâng người lên bằng tay.

– Sau đó di chuyển như thể đang bước tới, nhưng thực ra không di chuyển vị trí khi trọng tâm vẫn giữ nguyên.

Người đó là ai?

Nếu bạn hỏi AI, nó có thể đưa ra câu trả lời đúng: nghệ sĩ trượt patin huyền thoại Roger Green. (Người này xác nhận điều này trong phần giới thiệu trên Instagram của mình.) Tuy nhiên, nó cũng có thể trả về hàng loạt câu trả lời sai, chẳng hạn:

– Tatsuo _Jimmy_ Hironaga.

– Không xác định.

– Geron _Caszper_ Candidate (lưu ý sự sai chính tả trong biệt danh _Casper_ của anh ta).

– Jeffrey Daniel.

– Wesley Snipes.

Rõ ràng, nghệ sĩ trượt patin này không phải Wesley Snipes! (Dù ông ấy thực sự xuất hiện trong video, nhưng không phải trên patin.)

Một người trong bộ đồ tối màu và giày trượt patin đỏ biểu diễn động tác xoạc ngang trên sàn trong nhà, với bức tường trắng và một vệt sơn đỏ ở nền, thể hiện sự mãnh liệt của _bài kiểm tra cuối cùng của nhân loại._

Vài giây ngắn ngủi này trong video _Bad_ của Michael Jackson cho thấy nghệ sĩ trượt patin tiên phong Roger Green thực hiện một loạt động tác mượt mà và ấn tượng. Đây chính là nhân vật được nhắc đến.

Những ví dụ này minh họa rõ ràng cách LLM có thể thất bại:

– Không biết _wap_ nghĩa là gì.

– Liệt kê các cách vi phạm (không thực tế) định lý CPT.

– Không nhận ra rằng -5 nhỏ hơn 4 trong bối cảnh bài toán số nguyên.

– Không xác định đúng nghệ sĩ trượt patin trong video _Bad._

Tất cả đều có liên quan đến cùng một vấn đề: với một tập dữ liệu huấn luyện tốt hơn – bao gồm các ví dụ rõ ràng và chính xác cho từng câu hỏi – LLM có thể đưa ra câu trả lời vượt trội so với hiện tại.

## Giới hạn của AI hiện tại

Chúng ta hiện không có trí tuệ nhân tạo tổng quát thực sự (AGI). Thứ gần nhất mà chúng ta có chỉ là sự _giả mạo_ của các mô hình ngôn ngữ lớn (LLMs), vốn có giới hạn cố hữu và khó có khả năng dẫn đến AGI thực sự. Như François Chollet đã nhận xét, _Hầu hết các tiêu chuẩn AI hiện tại đều có thể được giải quyết hoàn toàn thông qua ghi nhớ… ghi nhớ thì hữu ích, nhưng trí thông minh lại là một thứ khác._

Thực tế, bạn có thể dễ dàng chứng minh rằng LLMs (bất kỳ mô hình nào bạn chọn) không phải là trí thông minh, ít nhất là theo cách chúng ta công nhận trí thông minh. Điều đó không cần đến một bài kiểm tra cấp độ tiến sĩ để chứng minh. Tất cả những gì bạn cần là đặt ra những câu hỏi yêu cầu LLM thực hiện một dạng nhiệm vụ suy luận nào đó – những nhiệm vụ không thể trả lời chỉ bằng cách ghi nhớ – và bạn sẽ thấy rõ giới hạn của AI hiện tại.

Pi là một ví dụ thú vị. Trong khi những chữ số đầu tiên của pi là đủ cho hầu hết các mục đích, một số người, như tác giả bài viết này, lại ghi nhớ tới 33 chữ số đầu tiên. Một máy tính đủ mạnh có thể ghi nhớ hoặc tính toán con số này với số chữ số tùy ý. Tuy nhiên, điều này không liên quan đến trí thông minh thực sự.

Điều này đưa chúng ta quay lại khái niệm _Bài kiểm tra cuối cùng của nhân loại_ và tại sao ý tưởng này ngay từ đầu đã đầy phi lý. Dan Hendrycks, Giám đốc Trung tâm An toàn AI, đã liên lạc với tác giả với thông điệp sau:

_OpenAI gần đây cho ra mắt mô hình o1 với hiệu suất tương đương sinh viên tiến sĩ vật lý trên nhiều tiêu chuẩn, nhưng vẫn chưa rõ liệu các hệ thống AI này có thực sự tiếp cận mức độ chuyên gia hay chỉ đang bắt chước mà không có sự hiểu biết thực sự. Để trả lời câu hỏi này, Trung tâm An toàn AI và Scale AI đang phát triển một tiêu chuẩn mang tên _Bài kiểm tra cuối cùng của nhân loại,_ gồm những câu hỏi khó ở cấp độ hậu tiến sĩ, nhằm đạt tới ranh giới kiến thức của nhân loại._

Thoạt nghe có vẻ hợp lý, phải không?

## Vấn đề trong thiết kế bài kiểm tra

Vấn đề là, họ không muốn các câu hỏi thực sự kiểm tra kiến thức sâu sắc. Họ không muốn những câu hỏi yêu cầu câu trả lời tinh tế và sự hiểu biết sâu sắc về tất cả các yếu tố liên quan. Họ không muốn những loại câu hỏi bạn sẽ đặt ra cho một diễn giả hội thảo, một sinh viên bảo vệ luận án, hoặc một nhà nghiên cứu với quan điểm đối lập trong một vấn đề khoa học. Điều họ muốn là các câu hỏi trắc nghiệm mà _được cho là_ chỉ có thể trả lời bởi người có năng lực trong lĩnh vực đó.

Khi tác giả phản hồi Dan, ông đã đưa ra năm câu hỏi từ lĩnh vực vật lý thiên văn – tất cả đều không phù hợp với định dạng của bài kiểm tra mà đội ngũ của Dan đang thiết kế – để thực sự kiểm tra mức độ trí thông minh và kiến thức của bất kỳ người hoặc hệ thống nào trả lời chúng. Các câu hỏi bao gồm:

1. Trong điều kiện nào thì hiệu ứng Mészáros không còn là một xấp xỉ hữu ích cho sự hình thành cấu trúc trong Vũ trụ sơ khai?

2. Hãy mô tả đóng góp của Robert Brout, Alexei Starobinskii, Rocky Kolb và Stephen Wolfram cho ý tưởng lạm phát vũ trụ trước khi Alan Guth xuất bản bài báo nổi tiếng của mình.

3. Tóm tắt lý do cho thấy Vũ trụ phát sinh từ lạm phát đã bắt đầu từ một trạng thái không kỳ dị.

4. Giải thích tại sao kịch bản hợp nhất hai sao lùn trắng cho siêu tân tinh loại Ia lại vượt trội hơn, với các bằng chứng quan sát, so với kịch bản tích tụ khối lượng vượt quá giới hạn Chandrasekhar.

5. Khi một quan sát viên trong trạng thái rơi tự do vượt qua chân trời sự kiện của một lỗ đen không quay, hình dạng hình học của vùng bên trong chân trời sự kiện, nơi vẫn kết nối nhân quả với quan sát viên, là gì?

Những câu hỏi này đòi hỏi không chỉ hiểu biết sâu sắc mà còn cần khả năng lý luận để đưa ra câu trả lời thỏa đáng. Đây chính là những yếu tố mà định dạng trắc nghiệm không thể kiểm tra được.

Nếu muốn thiết kế một bài kiểm tra thực sự xác định trí thông minh tổng quát, bài kiểm tra đó không thể bị vượt qua chỉ bằng một bộ dữ liệu huấn luyện khổng lồ. Ý tưởng rằng _ghi nhớ vô hạn_ sẽ tương đương với AGI là phi lý, vì dấu ấn độc đáo của trí thông minh là khả năng suy luận và suy diễn trong điều kiện thông tin không đầy đủ.

Do đó, việc tạo ra _Bài kiểm tra cuối cùng của nhân loại_ bằng cách sử dụng các câu hỏi trắc nghiệm chỉ dựa trên kiến thức thay vì lý luận là một thất bại ngay từ khi bắt đầu. Dù có thể tuyên bố thành công khi một mô hình LLM nào đó vượt qua bài kiểm tra, điều này sẽ không phản ánh sự xuất hiện của AGI thực sự.

<figure><img src="https://banmaixanh.vercel.app/image/cover/001-532.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>