import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="top-nav">
            <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/report">Report</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  )
}