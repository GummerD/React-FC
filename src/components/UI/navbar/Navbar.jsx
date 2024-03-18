import React from 'react'
import { NavLink, Outlet } from "react-router-dom";

export default function Navbar() {

    const setActive = ({ isActive }) => isActive ? "active-link" : "";

    return (
        <div>
            <nav className="navbar">
                <div className="navbar_links">
                    <NavLink to="/" className={setActive}>Первая страница</NavLink>
                    <NavLink to="/about" className={setActive}>Некая страницы</NavLink>
                    <NavLink to="/posts" className={setActive}>Страница с постами</NavLink>
                </div>
            </nav>
            <main>
                <Outlet />
            </main>
            <footer>
                <p>GummerD 2024</p>
            </footer>
        </div>
    )
}
