import React from 'react'
import logo from './logo.png'
const Header = () => {
  return <header>
    <div className="header-left">
   <img style={{
    width: 230,
    height:40
   }} src={logo} alt="" />
    </div>
    <div className="header-right">
        <h1>React Course - Project 1</h1>
    </div>
  </header>
}

export default Header