import UserActions from "../../../share/layouts/navbar/UserActions";
import { assets } from "../../../assets/assets.js";
import {
  SignInButton,
  UserButton,
  useClerk,
  useUser,
} from "@clerk/clerk-react";

export default function AdminHeader() {
  const { user } = useUser();
  return (
    <header
      className="flex justify-between items-center p-4 bg-white shadow
    fixed top-0 left-0 w-full z-50 transition-all duration-500"
    >
      <img
        src={assets.logo}
        alt="logo"
        className={`
                   h-12 w-12 rounded-full object-cover transition-all duration-300
                   }`}
      />

      {/* Desktop Right */}
      <div className="hidden md:flex items-center gap-4">
        <img
          src={assets.searchIcon}
          alt="search"
          className={`h-7 transition-all`}
        />
        <UserActions user={user} />
      </div>
    </header>
  );
}
