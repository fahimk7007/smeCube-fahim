// src/pages/admin/AdminLayout.jsx
import { NavLink, Outlet } from "react-router-dom";
import {
  LogOut,
  LayoutDashboard,
  Users,
  FileText,
  Settings,
} from "lucide-react";
// import { useContext } from "react";
// import { AuthContext } from "../../context/AuthContext";

export default function AdminLayout() {
  //   const { logout, user } = useContext(AuthContext);

  const navItems = [
    { to: "/admin", label: "Dashboard", icon: <LayoutDashboard size={18} /> },
    { to: "/admin/users", label: "Users", icon: <Users size={18} /> },
    { to: "/admin/blogs", label: "Blogs", icon: <FileText size={18} /> },
    { to: "/admin/settings", label: "Settings", icon: <Settings size={18} /> },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md border-r p-5 flex flex-col justify-between fixed h-full">
        <div>
          <h2 className="text-2xl font-bold text-purple-600 mb-8 text-center">
            Admin Panel
          </h2>
          <nav className="space-y-2">
            {navItems.map((item, i) => (
              <NavLink
                key={i}
                to={item.to}
                end
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                    isActive
                      ? "bg-purple-100 text-purple-700 font-semibold"
                      : "text-gray-700 hover:bg-purple-50"
                  }`
                }
              >
                {item.icon}
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="border-t pt-4 mt-6">
          <div className="flex items-center justify-between">
            {/* <div className="text-sm">
              <p className="font-semibold">{user?.name}</p>
              <p className="text-gray-500 text-xs">{user?.email}</p>
            </div> */}
            <button
              // onClick={logout}
              className="text-red-500 hover:text-red-600 flex items-center gap-1 text-sm"
            >
              <LogOut size={16} /> Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 ml-64 p-8">
        <Outlet />
      </main>
    </div>
  );
}
