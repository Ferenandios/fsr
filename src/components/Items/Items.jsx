import React from 'react'
import Item from '../Item/Item'
import { useSelector } from 'react-redux'

const Items = () => {
  const {photos} = useSelector(state => state.photos)

  return (
    <section className='flex flex-col items-center my-10'>
      {/* {photos.map( (data, index) => <Item key={index} data={data} />)} */}
    </section>
  )
}

export default Items