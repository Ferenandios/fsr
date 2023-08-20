import React, { useEffect, useState } from 'react'

const Item = ({ data }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [link, setLink] = useState(data.urls.thumb)
  const [imageWidth, setImageWidth] = useState(200)
  const [priority, setPriority] = useState(10)

  const getWidth = () => {
    if (windowWidth < 420) { // priority 4
      if (priority > 4) {
        setLink(data.urls.thumb)
        setPriority(4)
      }
      setImageWidth(200)
    }
    else if (420 < windowWidth && windowWidth < 1100) { // priority 3
      if (priority > 3) {
        setLink(data.urls.small)
        setPriority(3)
      }
      setImageWidth(400)
    }
    else if (1100 < windowWidth && windowWidth < 1940) { // priority 2
      if (priority > 2) {
        setLink(data.urls.raw + "&w=640")
        setPriority(2)
      }
      setImageWidth(640)
    }
    else if (1940 < windowWidth) { // priority 1
      if (priority > 1) {
        setLink(data.urls.regular)
        setPriority(1)
      }
      setImageWidth(1080)
    }
  }
  
useEffect(() => {
  getWidth()
}, [])

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    getWidth()
  }

  window.addEventListener('resize', handleResize);
  const styles = {
    width: imageWidth,
    height: data.height / (data.width / imageWidth),
    backgroundColor: data.color,
    backgroundImage: `url(${link})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat'
  }
  return (
    <button className='mb-1'>
      <div style={styles}></div>
    </button>
  )
}

export default Item