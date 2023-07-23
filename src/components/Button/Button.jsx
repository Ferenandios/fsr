import React from 'react'
import './Button.css'
import { useDispatch, useSelector } from 'react-redux'
import { generateNewPhotos } from '../../store/photos/photos.slice'

const Button = () => {
  const state = useSelector(state => state.photos.photos)
  const dispatch = useDispatch()
  return (
    <div className='flex justify-center mb-10'>
      <button 
      onClick={() => dispatch(generateNewPhotos())}
      className='content__button'>Generate new photos</button>
      <button
      onClick={() => console.log(state)}
      >EZZZZ</button>
    </div>
  )
}

export default Button