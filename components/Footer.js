import React from 'react'
import {GlobeAltIcon} from '@heroicons/react/24/solid'

function Footer() {
  return (
    <footer className='grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm text-gray-500'>
        <div className='px-8 py-3'>
            <p className='font-semibold'>
                The Netherlands
            </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 grid-flow-row-dense pb-5 px-5'>
            <div className='flex justify-center items-center md:col-span-2 lg:col-span-1 lg:col-start-2 pt-3'>
                <GlobeAltIcon className='h-5 mr-1 text-green-700'/> Carbon neutral since 2007
            </div>
            <div className='flex justify-center space-x-8 whitespace-nowrap md:justify-self-start md:pt-3'>
                <p>Advertising</p>
                <p>Business</p>
                <p>How Search Works</p>
            </div>
            <div className='flex justify-center space-x-8 md:ml-auto md:pt-3'>
                <p>Privacy</p>
                <p>Terms</p>
                <p>Settings</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer