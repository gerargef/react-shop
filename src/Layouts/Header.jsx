import React from 'react'

function Header() {
  return (
    <nav className='grey darken-4'>
    <div className="nav-wrapper ">
      <a href="#" className="brand-logo center">React Fortnite  Shop</a>
      <ul id="nav-mobile" className="left hide-on-med-and-down">
        <li><a href="https://github.com/gerargef/react-shop">Repo</a></li>
      </ul>
    </div>
  </nav>
  )
}

export default Header