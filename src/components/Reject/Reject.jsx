import React from 'react'
import { useSelector } from 'react-redux'

const Reject = () => {
  const isReject = useSelector(state => state.photos.isReject)
  return (
    <div
    className='font-extrabold text-4xl'
    >Bruh, something went wrong</div>
  )
}

export default Reject