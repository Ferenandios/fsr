import React from 'react'
import './Button.css'
import { useDispatch } from 'react-redux'
import { getRandomPhotos } from '../../features/photos.slice'

const Button = () => {
  const dispatch = useDispatch()
  return (
    <div className='flex justify-center mb-10'>
      <button
      onClick={() => dispatch(getRandomPhotos())}
      className='content__button'>Generate new photos</button>
    </div>
  )
}

export default Button