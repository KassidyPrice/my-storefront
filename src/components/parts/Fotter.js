import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='footer'>
      <NavLink to='/about' activeClassName='selected'>
        About
      </NavLink>
      Copyright Kassiy Price 2023
      <NavLink to='/contact' activeClassName='selected'>
        Contact Us
      </NavLink>
    </div>
  )
}
