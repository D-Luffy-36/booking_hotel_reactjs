import React from "react";
import { UserButton, useClerk } from "@clerk/clerk-react";
import BookIcon from "../../ui/BookIcon";

import { useNavigate } from "react-router-dom";

/**
 * UserActions
 * - Hiển thị nút Login nếu chưa có user
 * - Nếu đã login: hiện nút Dashboard (desktop) và UserButton (menu)
 *
 * Props:
 * - user: object user (nếu null/undefined => chưa login)
 * - isScrolled: boolean (dùng để đổi style khi header bị scroll)
 * - isMobile: boolean (nếu trên mobile sẽ ẩn nút Dashboard)
 */
const UserActions = ({ user, isScrolled = false, isMobile = false }) => {
  // hook của Clerk để mở form sign-in (sử dụng khi user chưa login)
  const { openSignIn } = useClerk();

  // hook của react-router để chuyển trang programmatically
  const navigate = useNavigate();

  // TODO: không nên hardcode roles — nên lấy từ `user` (vd: user.publicMetadata.roles)
  // Ví dụ: const userRoles = user?.publicMetadata?.roles || [];
  // Ở đây tạm đặt hardcode để demo.
  const userRoles = ["admin", "owner"]; // "admin" hoặc "user"

  // Định nghĩa các action theo role
  const allActions = {
    admin: [{ label: "Manage Users", path: "/admin/users" }],
    owner: [
      { label: "Manage Hotels", path: "/owner/hotels" },
      { label: "Manage Rooms", path: "/owner/rooms" },
    ],
    // có thể thêm role "user" hoặc role khác ở đây
  };

  // Lấy ra các action cần hiển thị dựa trên roles của user
  // flatMap để gom tất cả action từ nhiều role thành 1 mảng đơn
  const actionsToShow = userRoles.flatMap((role) => {
    return allActions[role] || [];
  });

  // Nếu chưa có user -> hiển thị nút Login (gọi openSignIn của Clerk)
  if (!user) {
    return (
      <button
        className="bg-black text-white px-6 py-2 rounded-full ml-4 hover:bg-gray-800 transition-all"
        onClick={() => openSignIn()}
      >
        Login
      </button>
    );
  }

  // Nếu đã login -> hiển thị nút Dashboard (trên desktop) và menu UserButton
  return (
    <div className="flex items-center gap-4">
      {/* Nút Dashboard không hiển thị trên mobile (isMobile = true) */}
      {!isMobile && (
        <button
          className={`border px-4 py-1 text-sm font-light rounded-full transition-colors 
          ${
            isScrolled ? "text-black border-black" : "text-white border-white"
          }`}
          onClick={() => navigate("/owner/dashboard")}
        >
          Dashboard
        </button>
      )}

      {/* UserButton từ Clerk: sẽ hiển thị avatar + menu */}
      <UserButton>
        <UserButton.MenuItems>
          {actionsToShow.map((action) => {
            // IMPORTANT: thêm key cho mỗi phần tử trong list để React không cảnh báo
            // Sử dụng action.path làm key (thường là duy nhất). Nếu không chắc chắn, kết hợp label+path.
            return (
              <UserButton.Action
                key={action.path ?? action.label}
                label={action.label}
                labelIcon={<BookIcon />}
                onClick={() => {
                  // chuyển trang khi click action
                  navigate(action.path);
                  // nếu cần đóng menu thủ công: kiểm tra API của UserButton để đóng (nếu có)
                }}
              />
            );
          })}
        </UserButton.MenuItems>
      </UserButton>
    </div>
  );
};

export default UserActions;
