import React from 'react'
import { useSelector } from 'react-redux'
import Item from '../Item/Item'

const Items = () => {
  const photos = useSelector(state => state.photos.photos)
  return (
    <section className='flex flex-col items-center my-[104px]'>
      {photos.map( (data, index) => <Item key={index} data={data} />)}
    </section>
  )
}

export default Items