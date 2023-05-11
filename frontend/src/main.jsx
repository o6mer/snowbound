import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/general/error-page";
import UserContextProvider from "./contexts/UserContextProvider";
import SearchPage from "./components/search/SearchPage";
import ComparePage from "./components/compare/ComparePage";
import ResortPage from "./components/resort/ResortPage";
import AdminPage from "./components/admin/AdminPage";
import LoginPage from "./components/userAuth/LoginPage";
import SignupPage from "./components/userAuth/SignupPage";
import HomePage from "./components/home/HomePage";
import EditPage from "./components/admin/components/EditPage";
import ProtectedRoutes from "./components/general/ProtectedRoutes";
import AboutPage from "./components/about/AboutPage";
import ProfilePage from "./components/profile/ProfilePage";
import Snowfall from "react-snowfall";

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
    path: "/compare/:resortCompare",
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
    path: "/about",
    element: <AboutPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/profile/:userName/:info",
    element: <ProfilePage />,
    errorElement: <ErrorPage />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <Snowfall
        style={{
          zIndex: "999",
          position: "fixed",
          width: "100%",
          height: "100%",
        }}
      />
      <RouterProvider router={router} />
    </UserContextProvider>
  </React.StrictMode>
);
