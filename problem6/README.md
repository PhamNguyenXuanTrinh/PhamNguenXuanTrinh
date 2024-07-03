Endpoint: POST /api/update
Mô tả: Cập nhật điểm số của người dùng dựa trên hành động hoàn thành.
Tham số:
-   userId: ID của người dùng cần cập nhật điểm số.
-   Xác thực: Yêu cầu token xác thực để đảm bảo chỉ những người dùng có quyền mới có thể cập nhật điểm số.

Bảo mật
-   Xác thực và ủy quyền: Sử dụng JWT (JSON Web Token) để xác thực người dùng và ủy quyền hành động.
-   Giới hạn: Áp dụng giới hạn tần suất API để ngăn chặn lạm dụng và đảm bảo sử dụng hợp lý của API.

Triển khai
-   Công nghệ sử dụng: Node.js với Express làm framework cho API, MongoDB làm cơ sở dữ liệu để lưu trữ điểm số người dùng.
-   Cập nhật trực tiếp: Sử dụng WebSocket hoặc Server-Sent Events (SSE) để cập nhật điểm số trực tiếp trên giao diện người dùng mà không cần làm mới trang.

[Hành động người dùng] --> [Giao diện (Trình duyệt)] --> [Endpoint API (/api//update)] --> [Xác thực và ủy quyền] --> [Cập nhật điểm số] --> [Cơ sở dữ liệu (MongoDB)] --> [Phản hồi cho Giao diện]

