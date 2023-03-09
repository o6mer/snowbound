import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./general/error-page";
import UserContextProvider from "./contexts/UserContextProvider";
import SearchPage from "./search/SearchPage";
import ComparePage from "./compare/ComparePage";
import ResortPage from "./resort/ResortPage";
import AdminPage from "./admin/AdminPage";
import LoginPage from "./userAuth/LoginPage";
import SignupPage from "./userAuth/SignupPage";
import HomePage from "./home/HomePage";
import EditAddResort from "./admin/components/EditAddResort";
import EditPage from "./admin/components/EditPage";
import ProtectedRoutes from "./general/ProtectedRoutes";
import EasterEgg from "./general/easteregg";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/search/:continent/:country/:resort",
    element: <SearchPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/compare/:resort1/:resort2/:resort3",
    element: <ComparePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/resort/:name",
    element: <ResortPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoutes>
        <AdminPage />
      </ProtectedRoutes>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin/edit&addresort/:resortName",
    element: <EditPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/fuck",
    element: <EasterEgg />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </React.StrictMode>
);
