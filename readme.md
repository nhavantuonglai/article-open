_**github/nhavantuonglai** là cơ sở dữ liệu cho các dự án, hoạt động nghiên cứu và phát triển công nghệ của nhavantuonglai. Thông qua các repositories công khai, nhavantuonglai kỳ vọng sẽ đóng góp, tạo ra những giá trị hữu ích, thiết thực với những ai có nhu cầu, tìm hiểu và tiếp cận._

## Giới thiệu về @nhavantuonglai

### Tầm nhìn

**github/nhavantuonglai** là cơ sở dữ liệu cho các dự án, hoạt động nghiên cứu và phát triển công nghệ của nhavantuonglai. Thông qua các repositories công khai, nhavantuonglai kỳ vọng sẽ đóng góp, tạo ra những giá trị hữu ích, thiết thực với những ai có nhu cầu, tìm hiểu và tiếp cận.

Về ngắn hạn, **github/nhavantuonglai** chia sẻ và lưu trữ các dự án thông qua các repositories công khai lẫn không công khai. Đây là nguồn tài nguyên quan trọng giúp nhavantuonglai vận hành ổn định các dự án cá nhân, hoạt động nghiên cứu đã và đang triển khai.

Về dài hạn, **github/nhavantuonglai** khuyến khích và khơi nguồn cảm hứng sáng tạo, phát triển công nghệ thông qua các repositories chất lượng cao, đem lại hiệu quả thiết thực và tạo nên giá trị to lớn cho cộng đồng.

### Sứ mệnh

Sứ mệnh của **github/nhavantuonglai** là cung cấp các giải pháp thiết kế và phát triển tài nguyên website, xây dựng và triển khai ứng dụng lập trình, tái tạo tài nguyên và ứng dụng công nghệ vào công việc để tăng năng suất và hiệu quả công việc.

Sứ mệnh của @nhavantuonglai là chia sẻ kiến thức, kỹ năng và hỗ trợ cộng đồng tái sử dụng các tài nguyên hiệu quả, ổn định và bền vững với thời gian.


### Giá trị cốt lõi

– **Sáng tạo:** Luôn đổi mới và tìm kiếm những giải pháp sáng tạo để giải quyết các vấn đề.

– **Trách nhiệm:** Cam kết trách nhiệm với cộng đồng và môi trường.

– **Hợp tác:** Khuyến khích hợp tác và chia sẻ kiến thức giữa các cá nhân và tổ chức.

– **Bền vững:** Đặt mục tiêu phát triển bền vững làm trung tâm của mọi hoạt động.

### Lĩnh vực hoạt động

– **Marketing:** Phát triển các công cụ và nền tảng hỗ trợ công việc Marketing hiệu quả.

– **Viết lách:** Ứng dụng công nghệ để tạo ra các nền tảng, cảm hứng sáng tạo viết lách chuyên nghiệp.

– **Công nghệ:** Nghiên cứu và phát triển các ứng dụng công nghệ mới nhằm cải thiện chất lượng cuộc sống.

### Thông tin liên hệ

– **Email:** [info@nhavantuonglai.com](mailto:info@nhavantuonglai.com).

– **Website**: [nhavantuonglai.com](https://nhavantuonglai.com/).

## Hướng dẫn deploy dự án thông qua Firebase

Astro là một framework hiện đại giúp xây dựng các trang website tĩnh nhanh chóng và hiệu quả. Điểm mạnh của Astro nằm ở việc sử dụng ít JavaScript nhất có thể trên trình duyệt, giúp tối ưu hóa tốc độ tải trang và trải nghiệm người dùng.

Firebase là một nền tảng phát triển ứng dụng toàn diện do Google cung cấp, bao gồm nhiều dịch vụ mạnh mẽ giúp tăng tốc quá trình phát triển và quản lý ứng dụng.

### Bước 0: Cài đặt Firebase CLI

Sau khi tải repositories xuống, thông qua VS Code để mở folder và chạy lệnh sau:

```
npm install
```

### Bước 1: Khởi tạo developer

Để test và hiệu chỉnh repositories trước khi deploy, hãy chạy lệnh sau:

```
sh npm run dev
```

### Bước 2: Đăng nhập vào Firebase

Sau khi hoàn tất, nếu bạn sử dụng Firebase để hosting, hãy chạy lệnh sau để đăng nhập:

```
firebase login
```

### Bước 3: Khởi tạo Firebase

Tiếp theo, khởi tạo dự án Firebase thông qua lệnh sau:

```
firebase init
```

Chọn các tùy chọn sau:

– **Hosting:** Được sử dụng để triển khai ứng dụng website.

– **Sử dụng dự án** hiện có hoặc tạo dự án mới trên Firebase.

– **Chọn thư mục xuất bản** (public) là `dist` hoặc thư mục build của dự án Astro.


#### Bước 4: Triển khai lên Firebase

Cuối cùng, để deploy dự án lên Firebase, hãy chạy lệnh sau

```
firebase deploy
```

## Hướng dẫn deploy dự án thông qua Firebase

Astro là một framework hiện đại giúp xây dựng các trang website tĩnh nhanh chóng và hiệu quả. Điểm mạnh của Astro nằm ở việc sử dụng ít JavaScript nhất có thể trên trình duyệt, giúp tối ưu hóa tốc độ tải trang và trải nghiệm người dùng.

Vercel là một nền tảng dịch vụ đám mây chuyên về triển khai và lưu trữ các ứng dụng website tĩnh và động. Được thành lập bởi Guillermo Rauch vào năm 2015, Vercel đã nhanh chóng trở thành một trong những giải pháp hàng đầu cho các nhà phát triển website hiện đại, đặc biệt là những người sử dụng Next.js – một framework React phổ biến cũng được phát triển bởi Vercel.

### Bước 0: Cài đặt Vercel CLI

Sau khi tải repositories xuống, thông qua VS Code để mở folder và chạy lệnh sau:

```
npm install vercel
```

### Bước 1: Khởi tạo developer

Để test và hiệu chỉnh repositories trước khi deploy, hãy chạy lệnh sau:

```
sh npm run dev
```

### Bước 2: Đăng nhập vào Vercel

Sau khi hoàn tất, nếu bạn sử dụng Vercel để hosting, hãy chạy lệnh sau để đăng nhập:

```
vercel login
```

### Bước 3: Cấu hình dự án

Trong thư mục dự án Astro, bạn cần cấu hình một số thiết lập để đảm bảo dự án có thể hoạt động tốt trên Vercel. Mở file `astro.config.mjs` và đảm bảo rằng thư mục đầu ra được thiết lập là dist:

```
export default {
	outDir: 'dist',
	…
};
```

#### Bước 4: Triển khai lên Vercel

Cuối cùng, để deploy dự án lên Vercel, hãy chạy lệnh sau

```
vercel
```

Nếu bạn có bất kỳ câu hỏi, cần hỗ trợ hay hợp tác làm việc, đừng ngần ngại liên hệ với **github/nhavantuonglai** qua email [info@nhavantuonglai.com](mailto:info@nhavantuonglai.com) để kết nối nhanh và thuận tiện nhất.