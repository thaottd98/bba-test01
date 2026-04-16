1. Các lệnh git cơ bản
| Lệnh         | Ý nghĩa              |
| ------------ | -------------------- |
| `git init`   | Khởi tạo repo        |
| `git clone`  | Copy repo            |
| `git add`    | Add file vào staging |
| `git commit` | Lưu thay đổi         |
| `git push`   | Đẩy lên remote       |
| `git pull`   | Lấy code mới         |
2. Workflow cơ bản
Working Directory → Staging → Commit → Remote
Flow:
Code
git add
git commit
git push
3. Undo Changes
| Lệnh           | Mục đích             |
| -------------- | -------------------- |
| `git checkout` | Quay lại file        |
| `git reset`    | Xóa commit           |
| `git revert`   | Tạo commit đảo ngược |
3. Branch
- Tạo nhánh:
git branch feature/login
- Chuyển nhánh:
git checkout feature/login
- Xem danh sách nhánh:
git branch
- Vừa tạo vừa chuyển sang nhánh mới:
git checkout -b <tên>
- Xóa branch:
git branch -D <tên nhánh>
-> Lưu ý: Pull code về trước khi tạo nhánh mới
4. ignore file
Là 1 file chỉ định những file và thư mục nào sẽ không được theo dõi(untracked) bởi Git

