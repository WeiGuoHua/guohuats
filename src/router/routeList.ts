import { lazy } from "react";
// import AppLayout from "../pages/Applayout";
const AppLayout = lazy(() => import("../pages/Applayout"));
const Home = lazy(() => import("../pages/home"));
const Login = lazy(() => import("../pages/login"));
const User = lazy(() => import("../pages/userManager"));

export { Home, Login, AppLayout, User };
