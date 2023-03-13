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
import AboutPage from "./AboutPage/AboutPage";
import ProfilePage from "./profile/ProfilePage";
import EditUser from "./profile/components/EditUser";
import userReviews from "./profile/components/userReviews";
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
    path: "/fuck",
    element: <EasterEgg />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/AboutUs",
    element: <AboutPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/profile/:userName",
    element: <ProfilePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/EditUser/:userName",
    element: <EditUser />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/UserReviews/:userName",
    element: <userReviews/>,
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
