import React from 'react'
import { NavLink, Outlet } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <div className="navbar_links">
                    <NavLink to="/about" className='link' >Первая страница</NavLink>
                    <NavLink to="/posts" className='link'>Страница с постами</NavLink>
                </div>
            </nav>
            <main>
                <Outlet />
            </main>
        </div>
    )
}
