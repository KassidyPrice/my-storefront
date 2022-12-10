import { NavLink } from 'react-router-dom'

import MainLogo from '../../assets/logo.png'

export default function Header() {
  return (
    <div className='header'>
      <div className='logo-container'>
        <img className='logo' src={MainLogo} alt='' />
      </div>

      <h1>Old Mill Mercantile</h1>
      <div className='navLink-container'>
        <NavLink to='/home' activeClassName='selected'>
          Home
        </NavLink>
        <NavLink to='/products-page' activeClassName='selected'>
          All Products
        </NavLink>
        <NavLink to='/about' activeClassName='selected'>
          About
        </NavLink>
        <NavLink to='/contact' activeClassName='selected'>
          Contact Us
        </NavLink>
        <NavLink to='/cart' activeClassName='selected'>
          Cart
        </NavLink>
      </div>
    </div>
  )
}
