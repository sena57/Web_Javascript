import React from 'react'
import avatar from './img_avatar.jpg'

export default function Card({name, jobtitle}) {
  return (
    <div className="border m-5">
      <img src={avatar} alt="img_avatar" className="w-40 h-40"/>
      <p className='font-bold'>{name}</p>
      <p>{jobtitle}</p>
    </div>

  )
}
