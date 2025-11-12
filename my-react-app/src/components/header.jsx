import { Link, NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="top-nav">
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/report">Report</NavLink>
            </nav>
        </header>
    );
}