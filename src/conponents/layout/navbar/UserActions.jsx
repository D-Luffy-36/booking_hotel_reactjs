import React from "react";
import {
  SignInButton,
  UserButton,
  useClerk,
  useUser,
} from "@clerk/clerk-react";
import BookIcon from "../../ui/BookIcon";

import { useNavigate } from "react-router-dom";

const UserActions = ({ isScrolled }) => {
  const { openSignIn } = useClerk();
  const { user } = useUser();
  const navigate = useNavigate();

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

  return (
    <div className="flex items-center gap-4">
      <button
        className={`border px-4 py-1 text-sm font-light rounded-full transition-colors 
          ${
            isScrolled ? "text-black border-black" : "text-white border-white"
          }`}
        onClick={() => navigate("/owner")}
      >
        Dashboard
      </button>

      <UserButton>
        <UserButton.MenuItems>
          <UserButton.Action
            label="My booking"
            labelIcon={<BookIcon />}
            onClick={() => navigate("/my-bookings")}
          />
        </UserButton.MenuItems>
      </UserButton>
    </div>
  );
};

export default UserActions;
