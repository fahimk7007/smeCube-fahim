import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Settings,
  Table,
  Menu,
  X,
  RefreshCcw,
} from "lucide-react";
import UserDropdown from "../Dropdowns/UserDropdown";

const Sidebar = () => {
  const [collapseShow, setCollapseShow] = useState("hidden");

  return (
    <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-gray-700 flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
      <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
        {/* Mobile Toggle */}
        <button
          className="cursor-pointer text-gray-600 opacity-70 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
          type="button"
          onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
        >
          <Menu size={22} />
        </button>

        {/* Brand */}
        <NavLink
          className="md:block text-left md:pb-2 text-gray-800 mr-0 inline-block whitespace-nowrap text-lg uppercase font-bold p-4 px-0 text-white"
          to="/"
        >
          SME <span className="text-red-600"> CUBE </span>
        </NavLink>

        {/* User Section (Mobile) */}
        <ul className="md:hidden items-center flex flex-wrap list-none gap-3">
          <li className="inline-block relative">
            <UserDropdown />
          </li>
        </ul>

        {/* Collapse Menu */}
        <div
          className={`md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded ${collapseShow}`}
        >
          {/* Mobile Collapse Header */}
          <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-gray-200">
            <div className="flex flex-wrap justify-between items-center">
              <NavLink
                className="text-gray-800 text-sm uppercase font-bold"
                to="/"
              >
                SME CUBE
              </NavLink>
              <button
                type="button"
                className="cursor-pointer text-gray-600 opacity-70 md:hidden px-3 py-1 text-xl bg-transparent rounded"
                onClick={() => setCollapseShow("hidden")}
              >
                <X size={22} />
              </button>
            </div>
          </div>

          {/* Divider */}
          <hr className="md:min-w-full text-red-600" />

          {/* Navigation */}
          <ul className="md:flex-col md:min-w-full flex flex-col list-none space-y-1">
            <li className="items-center">
              <NavLink
                to="/admin/dashboard"
                className={({ isActive }) =>
                  `flex items-center gap-2 text-sm py-3 font-medium ${
                    isActive
                      ? "text-white font-bold"
                      : "text-gray-300 hover:text-white"
                  }`
                }
              >
                <LayoutDashboard size={18} /> Dashboard
              </NavLink>
            </li>

            <li className="items-center">
              <NavLink
                to="/admin/settings"
                className={({ isActive }) =>
                  `flex items-center gap-2 text-sm py-3 font-medium ${
                    isActive
                      ? "text-white font-bold"
                      : "text-gray-300 hover:text-white"
                  }`
                }
              >
                <Settings size={18} /> Settings
              </NavLink>
            </li>

            <li className="items-center">
              <NavLink
                to="/admin/tables"
                className={({ isActive }) =>
                  `flex items-center gap-2 text-sm py-3 font-medium ${
                    isActive
                      ? "text-blue-600 font-semibold"
                      : "text-gray-600 hover:text-blue-500"
                  }`
                }
              >
                <Table size={18} /> Table
              </NavLink>
            </li>

            <li className="items-center">
              <NavLink
                to="/admin/maps"
                className={({ isActive }) =>
                  `flex items-center gap-2 text-sm py-3 font-medium ${
                    isActive
                      ? "text-blue-600 font-semibold"
                      : "text-gray-600 hover:text-blue-500"
                  }`
                }
              >
                <RefreshCcw size={18} /> Update Services
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
