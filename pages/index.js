/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Avatar from '../components/Avatar'
import Image from 'next/image'

import {MagnifyingGlassIcon, MicrophoneIcon, Squares2X2Icon} from '@heroicons/react/24/solid'
import Footer from '../components/Footer'

import { useRef } from 'react'
import { useRouter } from 'next/dist/client/router'

export default function Home() {

  const router = useRouter()
  const searchInputRef = useRef(null)


  const search = (e) => {
    e.preventDefault()
    const term = searchInputRef.current.value
    console.log(term)

    if (!term) return

    router.push(`/search?term=${term}`)
  }


  return (
    <div className='flex flex-col items-center justify-between h-screen'>
      <Head>
        <title>Google 2.0</title>
        <meta name="description" content="Google Clone by KomfySach" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className='flex sticky w-full p-5 justify-between font-semibold text-sm text-gray-700'>
        {/* Left */}
        <div className='flex space-x-4 items-center'>
          <p className='link'>About</p>
          <p className='link'>Store</p>
        </div>

        {/* Right */}
        <div className='flex space-x-4 items-center'>
          <p className='link'>Gmail</p>
          <p className='link'>Images</p>

          {/* Icons */}
          <Squares2X2Icon className='h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer'/>

          {/* Avatar */}
          <Avatar url='https://cdn.sanity.io/images/yxyeuybb/production/6ab655bb676e74b2c59d65c9886dad5019524e05-1080x1080.jpg'/>
        </div>
      </header>

        {/* Body */}
        <form className='flex flex-col items-center w-4/5'>
          <Image src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' width={300} height={100} alt='google logo'/>
          <div className='flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md border border-gray-200 px-5 py-3 items-center rounded-full sm:max-w-xl lg:max-w-2xl'>
            <MagnifyingGlassIcon className='h-5 mr-3 text-gray-500'/>
            <input ref={searchInputRef} type='text' className='flex-grow focus:outline-none '/>
            <MicrophoneIcon className='h-5'/>
          </div>

          <div className='flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4'>

            <button onClick={search} className='btn'>Google Search</button>

            <button onClick={search} className='btn'>I'm Feeling Komfy</button>

          </div>
        </form>

        {/* Footer */}

        <Footer/>

    </div>
  )
}
