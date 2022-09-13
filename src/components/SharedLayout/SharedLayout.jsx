import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import s from "./SharedLayout.module.css";

export const SharedLayout = () => {
    return (
        <>
        <header>
            <NavLink className={({ isActive }) => (isActive ? s.active : s.link)} to="/">Home</NavLink>
            <NavLink className={({ isActive }) => (isActive ? s.active : s.link)} to="/movies">Movies</NavLink>
            <hr />
        </header>
        <Suspense fallback={<div>Loading page...</div>}>
            <Outlet />
        </Suspense>
        </>
    )
}