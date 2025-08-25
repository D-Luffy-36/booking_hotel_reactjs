import UserAction from "../../../share/layouts/navbar/UserActions"



export default function AdminHeader() {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow">
      <h1 className="text-xl font-semibold">Admin Panel</h1>
      <div className="flex items-center space-x-4">
        <img src="/avatar.png" alt="avatar" className="w-8 h-8 rounded-full" />
      </div>
    </header>
  );
}
