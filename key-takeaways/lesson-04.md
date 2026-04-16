1. Scope (Phạm vi biến)
- Có 3 loại phạm vi:
    + Block scope (khối): Khai báo trong cặp ngoặc nhọn:
        - var không bị giới hạn bởi cặp ngoặc nhọn
        - let/const: bị giới hạn bởi cặp ngoặc nhọn. Ra ngoài bị undefined
    + Function (hàm)
    + Toàn cục (global): Khai báo ở một dòng code tự do không nằm trong khối hay hàm
2. Break and continue
- Break dùng để thoát hoàn toàn khỏi vòng lặp ngay lập tức
- Continue dùng để bỏ qua phần còn lại của vòng lặp hiện tại chuyển sang lần lặp tiếp theo
3. Câu điều kiện nâng cao:
- if....else
- if....else....if
4. Vòng lặp nâng cao
- for...in: Dùng để duyệt qua các thuộc tính của 1 object
- forEach Method: Method của array để thực thi 1 function cho mỗi phần tử, không thể dùng break hoặc continue
- for...of: duyệt phần tử trong array
5. Utils function:
- Hàm tiện ích cho Chuỗi (String utils)
Loại bỏ khoảng trắng:
    + trim(): Loại bỏ khoảng trắng ở cả hai đầu chuỗi.
    + trimStart(): Loại bỏ khoảng trắng ở bên trái (đầu chuỗi).
    + trimEnd(): Loại bỏ khoảng trắng ở bên phải (cuối chuỗi).
Chuyển đổi chữ hoa/thường:
    + toUpperCase(): Chuyển chuỗi thành chữ hoa.
    + toLowerCase(): Chuyển chuỗi thành chữ thường.
Kiểm tra và tìm kiếm:
    + includes(): Kiểm tra xem một chuỗi có bao gồm chuỗi con khác hay không.
Tách chuỗi:
    + split(): Cắt chuỗi thành các phần khác nhau dựa trên một ký tự phân tách.
Thay thế chuỗi bằng chuỗi con khác: replace()
- Hàm tiện ích cho array
    + Thêm phần tử vào màng (push, unshift, splice)
    + Xóa phần tử khỏi màng (pop, shift, splice)
    + Tìm kiếm (find, filter)
    + Biến đổi màng (map)
    + Sắp xếp mảng (sort)