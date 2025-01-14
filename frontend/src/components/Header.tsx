import React from 'react'

export default function Header() {
    return (
        <div className='h-16 shadow-xl p-1 fixed z-10 w-full flex justify-between items-center px-4 bg-transparent backdrop-blur-lg flex-shrink-0' >
            <div className='text-sm font-bold cursor-pointer mr-2 sm:text-base lg:text-3xl'>Logo</div>
            <div className='flex items-center space-x-2 lg:space-x-8'>
                <div className='text-xs cursor-pointer hover:border-b-slate-950 hover:border-b-2 sm:text-sm lg:text-lg'>Home</div>
                <div className='text-xs cursor-pointer hover:border-b-slate-950 hover:border-b-2 sm:text-sm lg:text-lg'>Search</div>
                <div className='text-xs cursor-pointer hover:border-b-slate-950 hover:border-b-2 sm:text-sm lg:text-lg'>About</div>
                <div className='text-xs cursor-pointer hover:border-b-slate-950 hover:border-b-2 sm:text-sm lg:text-lg'>Contact</div>
            </div>
            <div className='flex items-center space-x-2 ml-2'>
                <div className='text-xs hover:bg-slate-200 px-2 py-1 rounded-lg cursor-pointer sm:text-sm lg:text-lg'>Login</div>
                <div className='text-xs bg-blue-500 text-white px-3 py-1 rounded-lg border-2 cursor-pointer hover:text-blue-500 hover:bg-white hover:border-blue-500 sm:text-sm lg:text-lg ease-out duration-300'>Register</div>
            </div>
        </div>
    )
}
