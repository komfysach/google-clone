import Image from 'next/image'
import React from 'react'

function Avatar({url, className}) {
  return (
    <Image loading='lazy' src={url} alt='profile' width={40} height={10} 
    className={`rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
    />
  )
}

export default Avatar