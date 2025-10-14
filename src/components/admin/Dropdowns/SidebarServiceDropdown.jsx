import { RefreshCcw } from "lucide-react";
import { NavLink, useLocation } from "react-router";

const SidebarServiceDropdown = () => {
  const location = useLocation();

  const subroutes = [
    { path: "/admin/facebook-boosting", name: "Facebook Boosting" },
    { path: "/admin/ecommerce-solution", name: "Ecommerce Solution" },
    { path: "/admin/web-development", name: "Develop Website" },
    { path: "/admin/landing-page", name: "Landing Page" },
    { path: "/admin/bulk-sms", name: "Bulk SMS" },
    { path: "/admin/business-consulting", name: "Business Consulting" },
    { path: "/admin/brand-page-setup", name: "Brand Page Setup" },
    { path: "/admin/graphic-design", name: "Graphic Design" },
    { path: "/admin/chatbot-setup", name: "Chatbot Setup" },
    { path: "/admin/issue-fixing", name: "Issue Fixing" },
    { path: "/admin/business-training", name: "Business Training" },
  ];

  const isSubrouteActive = subroutes.some(
    (route) => location.pathname === route.path
  );

  return (
    <li>
      <details className="group" open={isSubrouteActive}>
        <summary
          className={`flex items-center justify-between gap-2 py-2 text-sm font-medium cursor-pointer rounded transition-all duration-200 ${
            isSubrouteActive
              ? "text-white font-bold"
              : "text-gray-300 hover:text-white"
          }`}
        >
          {/* Left side: icon + label */}
          <span className="flex items-center gap-2">
            <RefreshCcw size={18} />
            <span>Update Services</span>
          </span>

          {/* Right side: arrow */}
          <svg
            className={`w-3 h-3 text-gray-400 transition-transform duration-200 ${
              isSubrouteActive ? "rotate-90" : "group-open:rotate-90"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </summary>

        {/* Dropdown menu */}
        <article className="pb-3 pl-6 pt-1">
          <ul className="flex flex-col gap-2">
            {subroutes.map((route) => (
              <li key={route.path}>
                <NavLink
                  to={route.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-white font-bold"
                      : "text-gray-300 hover:text-white"
                  }
                >
                  {route.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </article>
      </details>
    </li>
  );
};

export default SidebarServiceDropdown;
