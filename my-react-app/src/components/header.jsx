import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="top-nav">
      <Link to="/" className="logo">Watchtower</Link>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/report">Report</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  )
}