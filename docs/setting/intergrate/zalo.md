---
slug: zalo
title: Tích hợp zalo
tags: [zalo, chia sẻ]
---
# Hướng dẫn tích hợp Zalo
Tích hợp Zalo, hệ thống đang hỗ trợ ở mức hiện nút chia sẻ bài viết qua Zalo tại cuối các tin bài, sản phẩm, bài viết Longform.

Để tích hợp Zalo, bạn cần có Zalo Offical Account (ZOA). Bạn có thể tìm hiểu chi tiết về Zalo Offical Account https://developers.zalo.me/docs/api/official-account-api-147.

## Đăng ký tài khoản Zalo Offical
### Bước 1
Truy cập https://developers.zalo.me/ để bắt đầu.

### Bước 2
Click chuột vào avatar Zalo của bạn ở góc trên bên phải trang => chọn `Thêm ứng dụng mới`

### Bước 3
Tại màn hình khai báo thông tin ứng dụng, bạn cần điền thông tin, tiếp đến cần chọn `Tạo ID ứng dụng`

#### Bước 4
Điền thông tin các trường có dấu * => chọn lưu thông tin và bấm vào nút kích hoạt ứng dụng.

### Quản lý ứng dụng (App)

Các App có thể được truy cập/ quản lý bởi nhiều người dùng khác nhau. Để thêm/ thay đổi admin (thành viên), vui lòng tham khảo các bước sau đây:

#### Bước 1
Truy cập vào link [tại đây](https://developers.zalo.me/) và chọn hình đại diện (Avatar) ở góc phải màn hình => Chọn app cần quản lý

#### Bước 2
Chọn **Vai trò** -> chọn **Thêm quản trị viên** -> Nhập thông tin số điện thoại muốn cấp quyền Admin -> Bấm **Tìm kiếm** -> **Thêm**

**_Lưu ý:_** 
- Số điện thoại muốn cấp quyền Admin phải là số Việt Nam (+84) đã có tài khoản Zalo cá nhân và phải có trong danh sách bạn bè của bạn.
- Người dùng được bạn thêm vào cần phải xác nhận trước khi xuất hiện tại danh sách thành viên.

## Tích hợp App ID vào website

Truy cập với quyền quản trị của website, nhấn chọn **Hệ thống** => **Tích hợp** => **Marketing & Mạng xã hội** => dán mã App ID vào trường **Zalo App ID** => chọn **Lưu** để hoàn tất.

Sau khi tích hợp, dưới mỗi bài viết sẽ xuất hiện nút chia sẻ bằng Zalo cạnh nút chia sẻ Facebook, Twitter.
