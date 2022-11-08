import { lazy } from "react";
const AppLayout = lazy(() => import("../components/View"));
const Home = lazy(() => import("../pages/home"));
const Login = lazy(() => import("../pages/login"));
const User = lazy(() => import("../pages/userManager"));
const Page404 = lazy(() => import("../components/page404"));

export { Home, Login, AppLayout, User, Page404 };
