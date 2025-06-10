---
pubDatetime: 2024-04-29T10:10:00Z
title: Phép tính lượng tử có thể thực hiện trong vũ trụ song song không?
description: Bằng cách cải thiện sửa lỗi lượng tử, các phép tính lượng tử hiện nay nhanh hơn bao giờ hết. Nhưng vũ trụ song song ư? Đó là điều vô lý ở đây.
image: https://banmaixanh.vercel.app/image/cover/001-253.jpg
tags:
  - khoa hoc
  - vu tru
  - vat ly thien van
  - khoa hoc vu tru
  - vat ly luong tu
  - luong tu hoc
  - phep tinh luong tu
  - vu tru song song
  - da vu tru
---

_Bằng cách cải thiện sửa lỗi lượng tử, các phép tính lượng tử hiện nay nhanh hơn bao giờ hết. Nhưng vũ trụ song song ư? Đó là điều vô lý ở đây._

Máy tính lượng tử đồng thời là một thành tựu khoa học đáng kinh ngạc với tiềm năng giải quyết hàng loạt vấn đề hiện nay vốn không thể giải quyết được bằng phương pháp thông thường, và cũng là nguồn cơn của những tuyên bố khoa trương, sai lệch hoàn toàn với thực tế. Năm 2021, có tuyên bố rằng nhóm nghiên cứu máy tính lượng tử của Google đã phát triển một _tinh thể thời gian_ vi phạm các định luật nhiệt động lực học. (Phần đầu là đúng, phần thứ hai thì không.) Cuối năm 2022, một nhóm tuyên bố đã chứng minh sự tồn tại của _hố giun_ bằng một máy tính lượng tử, điều hoàn toàn sai từ đầu đến cuối. Và giờ đây, trong năm 2024, Google đã giới thiệu một con chip lượng tử mới có tên Willow, mà người sáng lập và đứng đầu bộ phận AI lượng tử của Google tuyên bố rằng nó chứng minh sự tồn tại của các vũ trụ song song.

Bạn có hơi nghi ngờ về tuyên bố kỳ quặc như vậy không? Vâng, bạn nên nghi ngờ. Whitney Clavin chắc chắn đã nghi ngờ, khi cô viết cho tôi để hỏi:

_Bạn đã thấy tất cả những lời đồn điên rồ về việc đột phá tính toán lượng tử của Google cung cấp bằng chứng cho đa vũ trụ chưa?! Google đã nói điều này! Tôi nghĩ bạn cần viết một câu chuyện bác bỏ điều này._ (Have you seen all this crazy talk about Googles quantum computing breakthrough providing evidence for the multiverse?! Google said this! I think you need to write a story dispelling this.)

Thành thật mà nói, tôi rất vui khi thấy rằng, trong thời đại mà tin tức chủ yếu là những câu chuyện trong đó một người hoặc nhóm có thẩm quyền đưa ra tuyên bố gây sốc, mọi người vẫn còn đặt ra câu hỏi duy nhất thực sự quan trọng: _Sự thật ở đây là gì?_

Xin phép được giải thích cho bạn.

## Bit và Qubit

Cách các thiết bị lưu trữ thể rắn hoạt động ngày nay dựa trên sự có mặt hoặc vắng mặt của các hạt mang điện trên một lớp nền/gate, từ đó cản hoặc cho phép dòng điện chạy qua, mã hóa thành 0 hoặc 1. Về nguyên tắc, chúng ta có thể chuyển từ bit sang qubit bằng cách thay vì một gate với điện tích cố định, sẽ có một bit lượng tử chỉ đọc ra 0 hoặc 1 khi được đo, nhưng có thể tồn tại trong trạng thái chồng chập trong khi các phép tính được thực hiện trên đó.

<figure><img src="https://banmaixanh.vercel.app/image/article/luong-tu-song-song-02.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>

Máy tính lượng tử thật sự là gì? Trước tiên, máy tính lượng tử là có thật, và chúng thực sự có tiềm năng rất lớn trong việc giúp chúng ta giải quyết hiệu quả một loạt vấn đề mà các máy tính thông thường – hay máy tính cổ điển – không thể giải quyết một cách hiệu quả. Hãy lưu ý rằng từ _hiệu quả_ đã được nhấn mạnh, bởi vì một trong những lầm tưởng lớn nhất về máy tính lượng tử là chúng có thể giải quyết những vấn đề mà máy tính cổ điển không thể. Điều đó không đúng. Bất kỳ vấn đề nào có thể được mô phỏng trên một máy tính lượng tử thì cũng có thể được mô phỏng trên một máy tính cổ điển. Đây là cốt lõi của một khái niệm rất nổi tiếng trong khoa học máy tính: _định đề Church – Turing._

Sự khác biệt lớn, cơ bản giữa máy tính cổ điển và máy tính lượng tử đơn giản như sau:

– Trong khi máy tính cổ điển dựa trên các bit, nơi mà tất cả thông tin luôn ở trạng thái nhị phân (tức là _0_ hoặc _1_) cả khi bạn đo nó và trong thời gian _giữa_ khi bạn thực hiện phép tính,

– Thì máy tính lượng tử dựa trên các qubit, nơi mà thông tin luôn xuất hiện ở trạng thái nhị phân (_0_ hoặc _1_) khi bạn đo nó, nhưng trong khoảng thời gian _giữa,_ khi bạn thực hiện phép tính trên nó, nó có thể tồn tại trong một trạng thái không xác định, nơi nó có thể tồn tại trong trạng thái chồng chập của _0_ và _1_ đồng thời.

Trong khi máy tính cổ điển chỉ tính toán bằng các _bit,_ máy tính lượng tử tính toán bằng các _qubit,_ mang lại cho chúng một mức độ linh hoạt – và sức mạnh – mà máy tính cổ điển không có.

<figure><img src="https://banmaixanh.vercel.app/image/article/luong-tu-song-song-03.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>

Bên trái, một _bit_ cổ điển được minh họa: một hệ thống hai trạng thái có thể có giá trị _0_ hoặc _1._ Bên phải, một hệ thống lượng tử hai trạng thái, hay qubit, được thể hiện. Khi bạn thực hiện phép đo, bạn sẽ luôn quan sát thấy _0_ hoặc _1_ trong thực tế, nhưng khi bạn thực hiện các phép toán trên qubit đó, bạn sẽ tác động lên trạng thái không xác định được thể hiện bằng mũi tên trên hình cầu.

## Khi nào máy tính lượng tử có ưu thế?

Đối với hầu hết các loại phép tính, những khả năng bổ sung này hoàn toàn vô dụng. Nếu bạn muốn thực hiện các chức năng như cộng hoặc trừ, nhân hoặc chia, các hàm logic như IF, AND, OR, NOT, và vân vân, một máy tính cổ điển có thể thực hiện các chức năng này một cách hiệu quả như một máy tính lượng tử; không có lợi thế gì khi sử dụng tính toán lượng tử. Tuy nhiên, có một số lớp phép tính mà chúng ta gọi là _tốn kém về mặt tính toán_ khi sử dụng máy tính cổ điển; cụ thể là:

– Khó lập trình và đòi hỏi nhiều bước phức tạp.

– Yêu cầu số lượng lớn các bit để mã hóa toàn bộ thông tin cần thiết.

– Yêu cầu lượng lớn sức mạnh tính toán để thực thi các bước đó.

– Và, do đó, cần một khoảng thời gian tính toán khổng lồ để cho ra kết quả.

Nếu bạn có thể thiết kế một thuật toán (hay một phương pháp từng bước) để thực hiện một tác vụ tính toán, bạn có thể lập trình nó vào một máy tính cổ điển.

Máy tính lượng tử có thể làm mọi thứ mà máy tính cổ điển có thể, nhưng chúng còn làm được một điều đặc biệt: thay vì dựa vào bit, một hệ thống cổ điển hai trạng thái (trong đó mọi thứ đều ở trạng thái _0_ hoặc _1_), chúng dựa trên hệ thống cơ học lượng tử hai trạng thái: nơi chỉ có hai kết quả có thể được đo (ví dụ như một electron có spin _lên_ hoặc _xuống,_ một nguyên tử phóng xạ có trạng thái _chưa phân rã_ hoặc _đã phân rã,_ một photon có phân cực _trái_ hoặc _phải,_ vân vân), nhưng trạng thái lượng tử chính xác vẫn còn không xác định cho đến khi thực hiện phép đo quan trọng đó.

<figure><img src="https://banmaixanh.vercel.app/image/article/luong-tu-song-song-04.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>

Một qubit có thể tồn tại trong một trạng thái đồng thời mang thuộc tính của cả hai trạng thái có thể có. Ở đây, một qubit từ thông, hay một vòng làm từ vật liệu siêu dẫn, có thể cho dòng điện chạy theo cả hai hướng _thuận chiều kim đồng hồ_ và _ngược chiều kim đồng hồ_ cùng một lúc, tạo ra trạng thái chồng chập giữa hai trạng thái _lên_ và _xuống._

Điều này cho phép thực hiện những loại phép tính mới mang tính cơ bản (đôi khi được gọi là _cổng lượng tử_) trên máy tính lượng tử, bên cạnh các phép tính cổ điển mà chúng có thể thực hiện.

## Máy tính lượng tử có thể giải quyết những vấn đề gì?

Những vấn đề tính toán nào có thể được giải quyết hiệu quả hơn bởi một máy tính lượng tử so với máy tính cổ điển?

Câu trả lời là có hai loại vấn đề như sau:

– Những vấn đề hữu ích thực sự có giá trị thực tế, bao gồm mô phỏng chính xác các hệ thống lượng tử dựa trên tính bất định hai trạng thái đó.

– Những vấn đề vô ích được thiết kế cụ thể vì chúng _rẻ về mặt tính toán_ đối với các máy tính có thể tận dụng qubit, tính bất định hai trạng thái, và/hoặc các cổng lượng tử cơ bản, nhưng lại _tốn kém_ cực độ đối với các máy tính cổ điển.

Khi (hoặc nếu, bởi vì điều này vẫn chưa xảy ra) chúng ta có thể sử dụng máy tính lượng tử để giải quyết một vấn đề hữu ích nhanh hơn bất kỳ máy tính cổ điển nào có thể giải quyết, chúng ta sẽ đạt được một cột mốc đáng kinh ngạc: _lợi thế lượng tử._ (Hoặc đôi khi được gọi là _lợi thế lượng tử thực tiễn._) Điều này có khả năng sẽ xuất hiện đầu tiên trong các lĩnh vực như khoa học vật liệu, vật lý năng lượng cao hoặc hóa học lượng tử.

Tuy nhiên, cho đến nay, chúng ta mới chỉ sử dụng máy tính lượng tử để giải quyết những vấn đề vô dụng một cách nhanh hơn so với máy tính cổ điển: những vấn đề mà máy tính lượng tử thực thi hiệu quả trong khi máy tính cổ điển không thể, nhưng chúng không có bất kỳ giá trị hoặc tính ứng dụng nào trong thực tế. Minh chứng này được gọi là _quyền lực lượng tử,_ (quantum supremacy) nhưng đôi khi cũng được gọi là _lợi thế lượng tử_  (quantum advantage) mà không có bất kỳ lưu ý nào thêm.

<figure><img src="https://banmaixanh.vercel.app/image/article/luong-tu-song-song-05.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>

Hình ảnh một bộ xử lý Sycamore được gắn trong một hệ thống siêu dẫn cryostat minh họa cách máy tính lượng tử của Google trông như thế nào trước khi ra mắt chip Willow. Mặc dù qubit mang lại một số lợi thế tính toán so với máy tính cổ điển, không có điều gì về cơ bản có thể được mô phỏng trên một máy tính lượng tử mà không thể được mô phỏng trên một máy tính cổ điển. Mục tiêu của tính toán lượng tử là đạt được _Lợi thế lượng tử:_ Một dạng _quyền lực lượng tử_ cho những vấn đề thực tế và hữu ích.

## Các thách thức trên đường đến lợi thế lượng tử

Dạng lợi thế lượng tử phi thực tế – hay quyền lực lượng tử – lần đầu tiên được đạt được vào khoảng từ năm 2017 đến 2019 và đã được chứng minh nhiều lần sau đó. Tuy nhiên, có ba thách thức lớn đang nổi lên trên con đường đến lợi thế lượng tử thực tiễn.

– Rất khó để duy trì trạng thái lượng tử của một qubit; chúng chỉ tồn tại trong các trạng thái không xác định này trong một khoảng thời gian ngắn (tối đa vài chục micro giây) trước khi tương tác với môi trường dẫn đến hiện tượng _mất kết hợp lượng tử,_ phá hủy _tính lượng tử_ của máy tính lượng tử.

– Rất khó để duy trì số lượng lớn các qubit hoạt động đồng thời; trong khi các máy tính cổ điển hiện đại tận dụng thông tin ở mức megabyte, gigabyte, terabyte và petabyte (tương ứng là 10⁶, 10⁹, 10¹² và 10¹⁵ byte, trong đó mỗi byte gồm 8 bit), thì máy tính lượng tử hiện tại, với chip Willow của Google, mới chỉ vượt qua ngưỡng 100 qubit, với 105 qubit trên một chip lượng tử duy nhất.

– Và, có lẽ là thách thức lớn nhất, là vấn đề _sửa lỗi lượng tử:_ thực tế là không có mạch lượng tử nào có thể đáng tin cậy 100% (chúng luôn gây ra lỗi). Lỗi phát sinh tăng lên theo thời gian tính toán và số lượng qubit trong mạch, và cần có một loại sửa lỗi nào đó để giảm thiểu vấn đề này.

Chip Willow của Google, mặc dù ấn tượng với việc vượt qua ngưỡng 100 qubit trên một chip duy nhất và thực hiện một phép tính (về cơ bản là vô dụng) hiệu quả hơn bất kỳ máy tính cổ điển nào, đã giải quyết một vấn đề lâu dài và khó khăn trong việc sửa lỗi lượng tử.

<figure><img src="https://banmaixanh.vercel.app/image/article/luong-tu-song-song-06.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>

Biểu đồ minh họa tiến bộ của tính toán lượng tử. Trục Y: độ khó; trục X: tính liên quan thương mại. _Lấy mẫu mạch ngẫu nhiên_ được làm nổi bật, nối liền giữa khả năng của máy tính cổ điển và các ứng dụng tương lai – mở ra những lĩnh vực tương tự như _vũ trụ song song_ trong tính toán lượng tử. Biểu đồ này cho thấy các vấn đề được chia thành hữu ích/ không hữu ích (trục X) và độ khó để máy tính cổ điển giải quyết (trục Y). Trong khi việc lấy mẫu mạch ngẫu nhiên là nhiệm vụ khó nhất được biết đến đối với máy tính cổ điển, nó cũng là ứng dụng vô dụng nhất mà một máy tính lượng tử có thể thực hiện.

Nhiều qubit hơn thì sẽ có nhiều lỗi hơn, đúng không?

Không hẳn vậy. Trong một số điều kiện nhất định, như đã được chứng minh vào năm 2023, việc có nhiều qubit vật lý hơn (nhưng giữ số lượng qubit logic ở mức thấp) có thể dẫn đến cải thiện đáng kể trong sửa lỗi, cho phép kéo dài thời gian tính toán trước khi mất kết hợp lượng tử và do đó, cho phép thực hiện các phép tính lượng tử mạnh mẽ hơn.

Với chip Willow, đội ngũ Google đã chứng minh rằng lỗi lượng tử có thể được giảm một cách _lũy thừa_ khi máy tính lượng tử mở rộng số lượng qubit vật lý. Người sáng lập và lãnh đạo dự án Google Quantum AI, Hartmut Neven, đã nhận xét một cách chính xác:

_Willow có thể giảm lỗi theo lũy thừa khi chúng tôi mở rộng số lượng qubit. Điều này giải quyết một thách thức quan trọng trong việc sửa lỗi lượng tử mà lĩnh vực này đã theo đuổi trong gần 30 năm qua._

Điều đó là đúng và thực sự đáng kinh ngạc. Đây là một thành tựu xuất sắc, đẩy nhanh tiến bộ của nhân loại trên con đường cuối cùng hướng tới một dạng lợi thế lượng tử thực tiễn.

## Willow và bài toán hiện tại

Tuy nhiên, chúng ta vẫn chưa đạt được điều đó. _Chuẩn mực_ mà chip Willow của Google (và đội ngũ) đang quảng bá là một vấn đề cơ bản vô dụng, chỉ nổi bật vì độ tốn kém trong tính toán đối với máy tính cổ điển: _lấy mẫu mạch ngẫu nhiên._ Đúng là Willow đã thực hiện phép tính này nhanh hơn khoảng ~10³⁰ lần so với máy tính cổ điển, nhưng đây không phải là một phép tính có liên quan đến ứng dụng thực tế nào, ngay cả về mặt lý thuyết.

<figure><img src="https://banmaixanh.vercel.app/image/article/luong-tu-song-song-07.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>

Mặc dù nhiều người tuyên bố rằng sự ra đời của máy tính lượng tử sẽ dẫn đến tốc độ tính toán vượt trội trên mọi lĩnh vực so với máy tính cổ điển, điều này rất khó có khả năng xảy ra. Thay vào đó, những chiếc máy tính tốt nhất trong tương lai sẽ là _hệ thống lai:_ có khả năng tận dụng phần lượng tử cho các ứng dụng mà _Lợi Thế Lượng Tử_ có thể đạt được, nhưng vẫn sử dụng các kỹ thuật tính toán cổ điển cho tất cả các ứng dụng còn lại (tức là phần lớn ứng dụng).

Nếu câu chuyện kết thúc tại đây, đây sẽ là một câu chuyện hay (và đúng) về vị trí của chúng ta trên con đường hướng tới tính toán lượng tử hữu ích. Nhưng, thật không may, giống như rất nhiều câu chuyện về tính toán lượng tử từng xuất hiện trên các phương tiện truyền thông trước đây, câu chuyện này đi kèm với một tuyên bố không thể mô tả gì khác ngoài một lời nói dối trắng trợn đầy phẫn nộ. Điều này càng đáng tức giận hơn vì Hartmut Neven có bằng tiến sĩ vật lý (được trao vào năm 1996 tại Đại học Ruhr Bochum), và lẽ ra ông phải hiểu rõ hơn khi nói như sau:

_Willow thực hiện bài kiểm tra lấy mẫu mạch ngẫu nhiên với hiệu suất đáng kinh ngạc: Nó thực hiện phép tính trong chưa đầy năm phút mà một trong những siêu máy tính nhanh nhất hiện nay sẽ mất 10²⁵ hoặc 10 septillion năm. Nếu bạn muốn viết ra, đó là 10,000,000,000,000,000,000,000,000 năm. Con số không tưởng này vượt quá mọi khung thời gian đã biết trong vật lý và vượt xa tuổi của vũ trụ. Điều này làm tăng thêm tính hợp lý của ý tưởng rằng tính toán lượng tử diễn ra trong nhiều vũ trụ song song, phù hợp với ý tưởng rằng chúng ta đang sống trong một đa vũ trụ, một dự đoán được đưa ra lần đầu tiên bởi David Deutsch._

Không. Không phải vậy, và hoàn toàn không đúng.

Tính toán lượng tử không diễn ra trong nhiều vũ trụ song song; nó không diễn ra trong bất kỳ vũ trụ song song nào; nó cũng không chứng minh hay thậm chí gợi ý về ý tưởng rằng chúng ta đang sống trong một đa vũ trụ; và nếu David Deutsch đồng ý với tuyên bố này, thì ông ấy cũng sai như Neven vậy. (Và sai một cách hoàn toàn, 100% sai.)

<figure><img src="https://banmaixanh.vercel.app/image/article/luong-tu-song-song-08.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>

Ý tưởng về đa vũ trụ cho rằng có một số lượng rất lớn các vũ trụ giống như vũ trụ của chúng ta ở ngoài kia, và cũng có những vũ trụ khác với các thuộc tính khác biệt cơ bản. Nhưng để cách giải thích _đa vũ trụ_ của cơ học lượng tử có thể trở thành thực tại vật lý, cần phải có một nơi (ví dụ, một vũ trụ thực sự) cho những kết quả song song này tồn tại. Trừ khi sự lạm phát vũ trụ diễn ra trong khoảng thời gian vô hạn, thì các phép toán không thể cho ra kết quả phù hợp để chứa đựng chúng.

## Hai ý niệm về vũ trụ song song

Có một sự hiểu lầm cơ bản ở đây về vũ trụ song song là gì, và rõ ràng nó bị nhầm lẫn trong đầu của Neven với sự hiểu lầm về cơ học lượng tử. Có hai khái niệm về vũ trụ song song (hay _đa vũ trụ_) có liên quan đến thực tại vật lý của chúng ta.

– Đa vũ trụ lạm phát: Theo lý thuyết lạm phát vũ trụ – lý thuyết giải thích điều gì đã xảy ra trước và tạo nên Big Bang nóng – không chỉ có vũ trụ quan sát được của chúng ta, cũng không chỉ là phần không quan sát được vượt ngoài chân trời vũ trụ của chúng ta, mà còn có một số lượng cực kỳ lớn các _túi không gian_ khác nơi sự lạm phát kết thúc và khởi tạo một Big Bang riêng biệt, độc lập với vũ trụ của chúng ta.

– Vũ trụ song song từ cách giải thích đa vũ trụ của cơ học lượng tử: Thay vì quan điểm thông thường của cơ học lượng tử, trong đó thực tại tồn tại ở trạng thái không xác định (hoặc chồng chất các trạng thái) cho đến khi một phép đo hoặc tương tác quan trọng xảy ra, tiết lộ chỉ một thực tại (thực tại của chúng ta), cách giải thích _đa vũ trụ_ giả định rằng mọi kết quả có thể đều thực sự xảy ra ở đâu đó: trong một tập hợp vô hạn các vũ trụ song song. Hơn nữa, với mỗi phép đo (hoặc tương tác) mới, dòng thời gian tách ra thêm, tạo ra ngày càng nhiều vũ trụ có thể mà chúng ta không thể quan sát hay tương tác.

<figure><img src="https://banmaixanh.vercel.app/image/article/luong-tu-song-song-09.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>

Tính toán lượng tử, tất nhiên, không áp dụng cho bất kỳ khái niệm nào kể trên. Tôi cho rằng, nếu bạn muốn thông cảm cho Neven, bạn có thể hiểu lời ông ấy như sau: _Máy tính lượng tử là hệ thống lượng tử, và vì các cách giải thích lượng tử khác nhau về mặt vật lý đều tương đương với nhau, nên ý tưởng về vũ trụ song song phù hợp với máy tính lượng tử của tôi._ Đây là điều – giống như _quyền lực lượng tử_ – đúng nhưng vô dụng.

Tuy nhiên, vì Neven đã nói một cách rõ ràng rằng _Điều này làm tăng thêm tính hợp lý của ý tưởng rằng tính toán lượng tử diễn ra trong nhiều vũ trụ song song, phù hợp với ý tưởng rằng chúng ta đang sống trong một đa vũ trụ,_ thay vì khẳng định đúng là _Kết quả của chúng tôi hoàn toàn trung lập với các cách giải thích khác nhau của cơ học lượng tử và không nói gì về việc chúng ta có sống trong đa vũ trụ hay không,_ thì thật khó để thông cảm như vậy.

## Sự nhầm lẫn giữa không gian Hilbert và đa vũ trụ

Thay vào đó, rất có thể Neven đã nhầm lẫn giữa khái niệm không gian Hilbert của cơ học lượng tử – một không gian toán học vô hạn chiều (cụ thể là không gian vecto phức) nơi các hàm sóng lượng tử _tồn tại_ – với khái niệm vũ trụ song song và đa vũ trụ. Cơ học lượng tử vẫn hoạt động tốt, cả về mặt vật lý và toán học, mà không cần giới thiệu dù chỉ một vũ trụ song song, chứ đừng nói đến một số lượng vô hạn các vũ trụ đó. Điều bạn cần chỉ là hiểu đúng cơ học lượng tử, điều mà Neven lẽ ra phải biết, và đừng tự đánh lừa mình bằng cách nhầm lẫn các khái niệm không liên quan, điều mà Neven cũng lẽ ra phải biết.

<figure><img src="https://banmaixanh.vercel.app/image/article/luong-tu-song-song-10.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>

Cách giải thích _đa vũ trụ_ của cơ học lượng tử cho rằng có một số lượng vô hạn các vũ trụ song song tồn tại, chứa đựng tất cả các kết quả có thể của một hệ thống cơ học lượng tử, và việc quan sát chỉ đơn giản là chọn một con đường. Cách giải thích này có ý nghĩa về mặt triết học, nhưng không có ý nghĩa vật lý nếu không có đủ _vũ trụ_ ngoài kia để chứa đựng tất cả những khả năng này trong thực tế.

Thật vô cùng bực bội khi một bước tiến thực sự xuất sắc trong thế giới tính toán lượng tử – giúp duy trì sự vướng víu lượng tử trong thời gian dài hơn và giảm đáng kể tỉ lệ lỗi của máy tính lượng tử – không thể được trình bày một cách thuần túy, ngay cả bởi chính đội ngũ đã tạo ra đột phá này, mà không kèm theo một tuyên bố ngớ ngẩn không đúng trong bất kỳ trường hợp nào.

Kết quả mới nhất này hoàn toàn không liên quan gì đến vũ trụ song song, đa vũ trụ, hay tính đúng sai của bất kỳ cách giải thích nào trong số các cách giải thích cơ học lượng tử vẫn còn khả thi hiện nay.

## Tính toán lượng tử diễn ra trong vũ trụ của chúng ta

Quan trọng nhất, nó không yêu cầu hay thậm chí gợi ý rằng các phép tính lượng tử diễn ra ở bất cứ đâu khác ngoài đây, ngay trong chính Vũ Trụ của chúng ta. Một tuyên bố như vậy cũng ngớ ngẩn chẳng khác gì việc nói rằng một electron đi qua khe đôi sẽ đi qua khe đôi đó trong vô số vũ trụ song song. Chắc chắn, bạn có thể mô tả điều đó theo cách này, nhưng bạn cũng có thể mô tả nó một cách dễ dàng và thành công không kém mà không cần viện đến bất kỳ điều gì ngoài cơ học lượng tử tiêu chuẩn.

<figure><img src="https://banmaixanh.vercel.app/image/article/luong-tu-song-song-01.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>

Vũ trụ song song có tồn tại không? Có thể. Có một số lượng vô hạn các vũ trụ như vậy không? Cũng có thể. Chúng có cần thiết cho tính toán lượng tử, và liệu có bất kỳ phương pháp nào mà qua đó máy tính lượng tử có thể tiết lộ bằng chứng về chúng không? Hoàn toàn không.

Dù Hartmut Neven có thể tự làm rối trí bởi tất cả ý nghĩa của vấn đề, thì bạn cũng không cần để ông ấy làm bạn bối rối một cách không cần thiết. Hãy trân trọng kết quả này mà không kèm theo những rắc rối thừa thãi. Máy tính lượng tử đã được cải thiện dần dần, và – trên một mặt trận hoàn toàn không liên quan – vũ trụ song song vẫn là một giả thuyết thú vị nhưng hoàn toàn mang tính lý thuyết và khả năng mà thôi.

<figure><img src="https://banmaixanh.vercel.app/image/cover/001-049.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>