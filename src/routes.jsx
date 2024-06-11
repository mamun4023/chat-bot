import React, { lazy, Suspense } from "react";
import Cookies from "js-cookie";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { ROUTES } from "./constants/route";

const SignUp = lazy(() => import("./pages/SignUp"));
const SignIn = lazy(() => import("./pages/SignIn"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Home = lazy(() => import("./pages/Home"));
const Profile = lazy(() => import("./pages/Profile"));

export default function Routing() {
    return (
        <Suspense fallback={<h1 className="text-2xl">Loading...</h1>}>
            <Routes>
                <Route path="/" element={<Navigate to={ROUTES.SIGNIN} />} />
                <Route path={ROUTES.SIGNIN} element={<SignIn />} />
                <Route path={ROUTES.SIGNUP} element={<SignUp />} />
                <Route element={<PrivateRoutes />}>
                    <Route path={ROUTES.HOME} element={<Home />} />
                    <Route path={ROUTES.PROFILE} element={<Profile />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    );
}

const PrivateRoutes = () => {
    const token = Cookies.get("authToken");
    return token ? <Outlet /> : <Navigate to="sign-in" />;
};
