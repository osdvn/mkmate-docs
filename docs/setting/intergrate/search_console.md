# Hướng dẫn tích hợp Google Search Console

Truy cập đường dẫn: https://search.google.com/search-console/welcome và đăng nhập vào tài khoản gmail của bạn.

Sau khi đăng nhập vào tài khoản gmail, có 2 cách xác minh như sau:

## Xác minh bằng tên miền (mới)

Với lựa chọn xác minh này, bạn nhập tên miền và bấm vào nút **Tiếp tục**.

![Google Search Console](img/ggs-8.jpg)

Bạn sẽ được chuyển hướng xác minh quyền sở hữu miền bằng bản ghi DNS

![Google Search Console](img/ggs-6.jpg)

- Chọn loại bản ghi: TXT
- Đăng nhập vào nhà cung cấp tên miền của bạn
- Sao chép bản ghi TXT và cấu hình bản ghi DNS tên miền như sau:

![Google Search Console](img/ggs-7.jpg)

Sau khi đã lưu file TXT record bạn chọn Verify để hoàn tất phần xác minh.


## Xác minh bằng tiền tố URL

![Google Search Console](img/ggs-1.jpg)

Với lựa chọn xác minh tiền tố URL, bạn nhập địa chỉ URL website bao gồm https:// và bấm vào nút **Tiếp tục**.

Bạn sẽ được chuyển hướng xác minh theo hình thức này và có rất nhiều cách để bạn xác minh quyền sở hữu trang web như:

- Tệp HTML: Tải tệp HTML lên trang web của bạn
- Thẻ HTML: Thêm thẻ meta vào trang chủ trang web của bạn
- Google Analytics: Sử dụng tài khoản Google Analytics của bạn
- Google Tag Manager: Sử dụng tài khoản Trình quản lý thẻ của Google của bạn.

Mỗi phương pháp xác minh đều có hướng dẫn rất chi tiết, bạn chỉ cần làm theo hướng dẫn là có thể xác minh quyền sở hữu tên miền.

Phương thức xác minh khuyên dùng là thẻ HTML

![Google Search Console](img/ggs-2.jpg)

Cách thực hiện như sau:
Sao chép thẻ meta và dán vào trang chủ trên trang web của bạn. Thẻ phải nằm trong phần <head>, trước phần <body>.

Hoặc

Sao chép thẻ meta và truy cập quản trị web theo đường dẫn như sau: Hệ thống -> Tích hợp -> Thẻ Meta Google Search Console và dán thẻ meta vừa copy vào đây sau đó nhấn chọn nút (v) để lưu cập nhật thông tin.
  
![Google Search Console](img/ggs-3.jpg)

Nhấn **Xác minh** trong Google Search Console và nhấn chọn **Chuyển đến sản phẩm**

![Google Search Console](img/ggs-4.jpg)

Sau khi xác minh xong được chuyển hướng đến trang tổng quan chi tiết của sản phẩm như hình dưới đây:

![Google Search Console](img/ggs-5.jpg)
