import React from 'react'
import { NavLink, Outlet } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <div className="navbar_links">
                    <NavLink to="/about" className={({isActive})=> isActive ? 'active-link': ''} >Первая страница</NavLink>
                    <NavLink to="/posts" className={({isActive})=> isActive ? 'active-link': ''}>Страница с постами</NavLink>
                </div>
            </nav>
            <main>
                <Outlet />
            </main>
        </div>
    )
}
