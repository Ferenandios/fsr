import React from 'react'

const Item = ({ data }) => {
  const styles = {
    width: 200,
    height: data.height / (data.width / 200),
    backgroundColor: data.color,
    backgroundImage: `url(${data.urls.thumb})`,
  }
  return (
    <button className='mb-1'> 
      <div style={styles}></div>
    </button>
  )
}

export default Item