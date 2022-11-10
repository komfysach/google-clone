import React, { useRef } from 'react'
import Image from 'next/image'
import {useRouter} from 'next/router'
import {MagnifyingGlassIcon, MicrophoneIcon, XMarkIcon} from '@heroicons/react/24/solid'
import Avatar from './Avatar'
import HeaderOptions from './HeaderOptions'

function Header() {
    const router = useRouter()
    const searchInputRef = useRef(null)

    const search = (e) => {
        e.preventDefault()

        const term = searchInputRef.current.value

        if (!term) return

        router.push(`/search?term=${term}`)
    }

  return (
    <header className='sticky top-0 bg-white'>
        <div className='flex w-full p-6 items-center'>
            <Image src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' 
            width={120} 
            height={40} 
            className='cursor-pointer' 
            alt='home'
            onClick={() => router.push('/')}
            /> 
            <form className='flex border border-gray-200 rounded-full flex-grow shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-5'>
                <input ref={searchInputRef} className='flex-grow w-full focus:outline-none' type='text'/>
                <XMarkIcon className='sm: mr-3 h-7 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125 ease-in-out'
                    onClick={() => (searchInputRef.current.value = "")}
                />
                <MicrophoneIcon className='h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300'/>
                <MagnifyingGlassIcon className='h-6 text-blue-500 hidden sm:inline-flex'/>
                <button hidden type='submit' onClick={search}></button>
            </form>
            <Avatar className='ml-auto' url='https://cdn.sanity.io/images/yxyeuybb/production/6ab655bb676e74b2c59d65c9886dad5019524e05-1080x1080.jpg'/>
        </div>
        {/* HeaderOptions */}
        <HeaderOptions/>

    </header>
  )
}

export default Header