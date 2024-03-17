import React from 'react'
import "../styles.css";

export const GifCard = ({ title, url }) => {
  return (
    <div className='card'>
      <img src={url.url} alt={title}/>
      <p>{title}</p>
    </div>
  )
}

