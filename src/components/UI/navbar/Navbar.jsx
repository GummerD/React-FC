import React from 'react'
import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <div className="navbar_links">
                    <div><Link to="/about" >Первая страница</Link></div>
                    <div><Link to="/posts" >Страница с постами</Link></div>
                </div>
            </nav>
            <Outlet/>
        </div>
    )
}
