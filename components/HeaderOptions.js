import React from 'react'

import {
    EllipsisVerticalIcon,
    MapIcon,
    NewspaperIcon,
    PhotoIcon,
    PlayIcon,
    MagnifyingGlassIcon
} from '@heroicons/react/24/outline'

import HeaderOption from './HeaderOption'

function HeaderOptions() {
  return (
    <div className='flex w-full text-gray-700 justify-evenly lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b-[1px]'>
        {/* Left */}
        <div className='flex space-x-6'>
            <HeaderOption Icon={MagnifyingGlassIcon} title='All' selected/>
            <HeaderOption Icon={PhotoIcon} title='Images'/>
            <HeaderOption Icon={PlayIcon} title='Video'/>
            <HeaderOption Icon={NewspaperIcon} title='News'/>
            <HeaderOption Icon={MapIcon} title='Maps'/>
            <HeaderOption Icon={EllipsisVerticalIcon} title='More'/>
        </div>
        {/* Right */}
        <div className='flex space-x-4 font-semibold'>
            <p className='link'>Setttings</p>
            <p className='link'>Tools</p>
        </div>
    </div>
  )
}

export default HeaderOptions