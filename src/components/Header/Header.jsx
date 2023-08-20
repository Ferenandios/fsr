import React, { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'
import './Header.css'
import { useDispatch } from 'react-redux'
import { getSearchPhotos } from '../../features/photos.slice'

const Header = () => {
  const inputRef = useRef('')
  const dispatch = useDispatch()
  return (
    <header className='header'>
      <div className="sm:container sm:mx-auto">
        <div className="header__inner">
          <div className='header__logo'>
            <h1>FSR</h1>
          </div>
          <div className='header__search'>
            <button
              onClick={() => dispatch(getSearchPhotos(inputRef.current.value))}
              className='header__button'><BsSearch size={18} /></button>
            <input
              ref={inputRef}
              onKeyUp={(event) => {
                if (event.key != 'Enter') return;
                dispatch(getSearchPhotos(inputRef.current.value))
              }}
              placeholder='Search images'
              className='header__input'
              type='search' />
          </div>
        </div>
      </div>

    </header>
  )
}

export default Header