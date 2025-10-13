import { createBrowserRouter } from "react-router-dom";

// Main Pages
import SMECubeLanding from "../pages/SMECubeLanding";
import About from "../pages/About";
import Contact from "../pages/Contact";
import EcommerceSolution from "../pages/services/EcommerceSolution";
import Tools from "../pages/Tools";
import Pricing from "../pages/Pricing";
import Login from "../pages/Login";
import Register from "../pages/Register";

// Service Pages
import DomainHostings from "../pages/services/DomainHostings";
import BrandPageSetup from "../pages/services/BrandPageSetup";
import BulkSMS from "../pages/services/BulkSMS";
import BusinessConsulting from "../pages/services/BusinessConsulting";
import ChatbotSetup from "../pages/services/ChatbotSetup";
import FacebookBoosting from "../pages/services/FacebookBoosting";
import GraphicDesign from "../pages/services/GraphicDesign";
import LandingPage from "../pages/services/LandingPage";
import WebDevelopment from "../pages/services/WebDevelopment";
import App from "../layouts/App";
import BusinessTraining from "../pages/services/BusinessTraining";
import AdminLayout from "../layouts/AdminLayout";
import AdminDashboard from "../pages/admin/dashboard/AdminDashboard";
import AdminSettings from "../pages/admin/dashboard/AdminSettings";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <SMECubeLanding />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "services",
        element: <EcommerceSolution />,
      },
      {
        path: "services/ecommerce",
        element: <EcommerceSolution />,
      },
      {
        path: "tools",
        element: <Tools />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      // Service Routes
      {
        path: "services/brand-page-setup",
        element: <BrandPageSetup />,
      },
      {
        path: "services/bulk-sms",
        element: <BulkSMS />,
      },
      {
        path: "services/business-consulting",
        element: <BusinessConsulting />,
      },

      {
        path: "services/chatbot-setup",
        element: <ChatbotSetup />,
      },
      {
        path: "services/ecommerce-solution",
        element: <EcommerceSolution />,
      },
      {
        path: "services/facebook-boosting",
        element: <FacebookBoosting />,
      },
      {
        path: "services/graphic-design",
        element: <GraphicDesign />,
      },
      {
        path: "services/landing-page",
        element: <LandingPage />,
      },
      {
        path: "services/hosting",
        // element: <DomainHosting />,
        element: <DomainHostings />,
      },
      {
        path: "services/web-development",
        element: <WebDevelopment />,
      },
      {
        path: "services/business-training",
        element: <BusinessTraining />,
      },
    ],
  },
  {
    path: "admin/dashboard",
    element: (
      // <RequireAdmin>
      <AdminLayout />
      // </RequireAdmin>
    ),
    children: [
      { index: true, element: <AdminDashboard /> },
      {
        path: "settings",
        element: (
          // <RequireAdmin>
          <AdminSettings />
          // </RequireAdmin>
        ),
      },
    ],
  },
]);
