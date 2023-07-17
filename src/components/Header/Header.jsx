import React from 'react'
import { BsSearch } from 'react-icons/bs'
import './Header.css'

const Header = () => {
  return (
    <header className='header'>
      <div className='header__logo'>
        <h1>FSR</h1>
      </div>
      <div className='header__search'>
        <button className='header__button'><BsSearch size={18}/></button>
        <input
        placeholder='Search images'
        className='header__input'
        type='search' />
      </div>
    </header>
  )
}

export default Header