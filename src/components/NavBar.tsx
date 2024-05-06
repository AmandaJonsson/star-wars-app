import { NavLink, Link } from 'react-router-dom';
import './NavBar.css';

export const NavBar = () => {
 
  return (
    <div className='logo'>
        <Link to="/">
            <img src="/logo.png" alt="" />
        </Link>
        <div className='navbar-container'>
            <NavLink className="navbar-button" to="/">Films</NavLink>
            <NavLink className='navbar-button' to="/characters">Characters</NavLink>
        </div>
    </div>
  )
}
