import {Link,NavLink} from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
        <ul className='navbar'>
            <li> <NavLink className="nav-bar-link" style={{color:'red'}} to="/about">About</NavLink></li>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/user">User</NavLink></li>
        </ul>
    </div>
  )
}
