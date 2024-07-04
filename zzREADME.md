BÁO CÁO TÓM TẮT DỰ ÁN “GIẢ LẬP WEBSITE AMAZON” 

I.Thành viên nhóm
- Nguyễn Vinh Quang – MSSV 11225450

II, Tóm tắt nội dung:
A, Giới thiệu về project
Project "Giả lập web Amazon" nhằm mục đích xây dựng một trang web mô phỏng các tính năng cơ bản của trang mua bán sản phẩm của công ty thương mại điện tử Amazon. 
Dự án sử dụng các ngôn ngữ sau: 
+ Flask framework và Python để phát triển backend (login/signup, quản lý CSDL) 
+ HTML và CSS để thiết kế giao diện người dùng và làm trang web responsive. 
+ Javascript để làm trang web interactive.
+ Định dạng file JSON để lưu trữ database
B, Chức năng dự định của project
	Như web ngoài đời thực của Amazon, dự án là 1 phần nhỏ của trang mua sắm 

III. Yêu cầu chức năng và đầu ra
+ Đăng nhập/Đăng ký: Người dùng có thể tạo tài khoản mới hoặc đăng nhập bằng tài khoản hiện có.
+ Tìm kiếm sản phẩm: Người dùng có thể tìm kiếm sản phẩm theo tên, thương hiệu, giá cả, v.v.
+ Trang sản phẩm: Hiển thị thông tin chi tiết về sản phẩm, hình ảnh, giá cả, đánh giá của người dùng.
+ Giỏ hàng: Người dùng có thể thêm sản phẩm vào giỏ hàng, xem lại giỏ hàng và thanh toán.
+ Quản lý đơn hàng: Người dùng có thể xem lịch sử đơn hàng, theo dõi trạng thái đơn hàng.

IV. Giải pháp kỹ thuật
+ Backend: Flask framework được sử dụng để viết API cho các chức năng như đăng nhập/đăng ký, tìm kiếm sản phẩm, quản lý giỏ hàng, thanh toán.
+ Cơ sở dữ liệu: Sử dụng dữ liệu từ định dạng file JSON để lưu trữ dữ liệu của người dùng, thông tin chi tiết của sản phẩm cũng như giá trị của đơn hàng.
+ Giao diện người dùng: HTML, CSS và Javascript được sử dụng để thiết kế giao diện người dùng thân thiện, dễ sử dụng, bao gồm: 
•	Trang chủ và Trang sản phẩm (home)
•	Giỏ hàng và hóa đơn (cart)
•	Trang thanh toán. (cart)
•	Đơn đặt hàng (Return & Orders)
•	Kiểm tra tiến độ đặt hàng (Tracking)
•	Tìm kiếm sản phẩm
+ Kiểm tra tính đúng đắn :  Sử dụng Framework Jasmine để kiểm tra lại phần code Javascript, đảm bảo không xảy ra sai số trong quá trình tính toán hóa đơn sản phẩm.

V. Tiến độ thực hiện
+ Đã hoàn thành:
•	Hóa đơn/ Thanh toán
•	Giỏ hàng
•	Trang chủ và Trang sản phẩm
•	Các chức năng thêm, bớt sản phẩm vào giỏ hàng
•	Responsive và Interactive 
•	Kiểm tra lại phần code Javascript với Framework Jasmine
+ Chưa hoàn thành:
•	Đăng nhập/Đăng ký
•	Tìm kiếm sản phẩm
•	Quản lý đơn hàng
•	Kiểm tra tiến độ đặt hàng (Tracking)
•	Đơn đặt hàng (Return & Orders)

VI. Khó khăn gặp phải
-	Do đang có vài trục trặc về các app database nên dự án sử dụng file JSON để làm, dẫn đến code bị giảm độ tối ưu đi rất nhiều
-	Phần login/ signup/ logout chưa giải quyết được hết. Sẽ bị lỗi nếu đăng kí hoặc đăng nhập 1 tài khoản ngoài luồng.
-	Phần Return&Orders và Tracking em vẫn đang làm dở, do thời gian có hạn nên vẫn còn nhiều chỗ bị mắc kẹt
-	Chưa làm SEO plugin cho web
-	Phần thanh tìm kiếm em vẫn đang làm tiếp.
-	Hoàn toàn chưa làm được về phần bảo mật. Em sẽ nghiên cứu thêm về thư viện bảo mật Flask_login

VII. Dự kiến về kế hoạch tiếp theo về project này
-	Hoàn thiện chức năng thanh toán sản phẩm, đơn hàng.
-	Phát triển chức năng quản lý đơn hàng.
-	Tiếp tục cải thiện giao diện UI, UX.
-	Làm được phần login/ signup/ logout tốt hơn
-	Thêm chức năng mới như so sánh sản phẩm, đánh giá sản phẩm để khi tìm 1 sản phẩm, người dùng sẽ được gợi ý thêm về các sản phẩm chức năng tương tự.
-	Làm plugin SEO cho web.
-	Hoàn thành thanh tìm kiếm sản phẩm.

Kết luận
Trong quá trình làm project giả lập Amazon này, em đã đạt được những tiến bộ nhất định khi vừa học hỏi thêm về các ngôn ngữ lẫn Framework của chúng. Em đã có thể vận dụng được một phần cơ bản của những kiến thức được học trong thời gian qua. Em đã vận dụng được Python và Flask để làm được một số tính năng trong project này, dù chưa nhiều; sử dụng HTML CSS để thiết kế giao diện bắt mắt đối với người sử dụng; cũng như tự áp dụng được nhiều kiến thức mới vào project này.
Tuy nhiên, do thời gian và kiến thức của em còn hạn chế nên em còn một khoảng cách khá xa để hoàn thiện chỉn chu project này, đặc biệt là về phần cơ sở dữ liệu.
Với kiến thức nền tảng học được ở trường và tự tìm tòi trên Internet trong quá trình làm bài tập lớn này, em đã bước đầu xây dựng được mục đích của mình. Mặc dù đã cố gắng và đầu tư nhiều thời gian nhưng em vẫn không tránh khỏi nhiều thiếu sót trong việc tạo lập nên trang website mà mình mong muốn. Em mong nhận được sự thông cảm của thầy và mong thầy có thể trợ giúp cũng như góp ý để trang web này ngày càng hoàn thiện hơn ạ. Em xin chân thành cảm ơn.


