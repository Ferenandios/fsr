import React from 'react'
import './Button.css'
import { useDispatch } from 'react-redux'
import { getPhotos } from '../../features/photos.slice'

const Button = () => {
  const dispatch = useDispatch()
  return (
    <div className='flex justify-center mb-10'>
      <button
      onClick={() => {
        dispatch(getPhotos())
      }}
      className='content__button'>Generate new photos</button>
    </div>
  )
}

export default Button