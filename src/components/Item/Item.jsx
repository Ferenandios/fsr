import React from 'react'

const Item = ({ data }) => {
  console.log(data);
  const styles = {
    width: 200,
    height: data.height / (data.width / 200),
    backgroundColor: data.color,
    backgroundImage: `url(${data.urls.thumb})`,
  }
  return (
    <div className='' style={styles}>

    </div>
  )
}

export default Item