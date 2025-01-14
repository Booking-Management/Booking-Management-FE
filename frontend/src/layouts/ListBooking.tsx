import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import logo from '../assets/Banner.png'

function ListBooking({title}) {

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1400 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 1400, min: 1124 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1124, min: 660 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 660, min: 0 },
        items: 2
    }
};

  return (
    <div className='inline-block w-full lg:w-9/12 h-70 bg-white rounded-lg shadow-lg p-4 border-2'>
        <div className='flex justify-between items-center mb-4 mx-4'>
            <div className='text-lg uppercase font-bold'>{title}</div>
            <div className='text-sm hover:underline'>
                <a href='#'>Xem tất cả</a>
            </div>
        </div>
        
        <Carousel responsive={responsive} infinite={true} aut oPlay={true} autoPlaySpeed={3000} >
            <div className='h-64 lg:h-80 p-2 rounded-lg relative flex flex-col justify-center items-center mx-4 cursor-pointer hover:bg-slate-300 ease-out duration-300'>
                <div>
                    <img src={logo} alt="Banner" className='min-w-36 rounded-xl h-36 lg:h-56 mb-2 object-cover'/>
                    <h1 className='font-bold'>Khach san</h1>
                    <p>sao danh gia</p>
                    <p>Giá: 1.500.00 VND</p>
                </div>
            </div>
            <div className='h-64 lg:h-80 p-2 rounded-lg relative flex flex-col justify-center items-center mx-4 cursor-pointer hover:bg-slate-300 ease-out duration-300'>
                <div>
                    <img src={logo} alt="Banner" className='min-w-36 rounded-xl h-36 lg:h-56 mb-2 object-cover'/>
                    <h1 className='font-bold'>Khach san</h1>
                    <p>sao danh gia</p>
                    <p>Giá: 1.500.00 VND</p>
                </div>
            </div>
            <div className='h-64 lg:h-80 p-2 rounded-lg relative flex flex-col justify-center items-center mx-4 cursor-pointer hover:bg-slate-300 ease-out duration-300'>
                <div>
                    <img src={logo} alt="Banner" className='min-w-36 rounded-xl h-36 lg:h-56 mb-2 object-cover'/>
                    <h1 className='font-bold'>Khach san</h1>
                    <p>sao danh gia</p>
                    <p>Giá: 1.500.00 VND</p>
                </div>
            </div>
            <div className='h-64 lg:h-80 p-2 rounded-lg relative flex flex-col justify-center items-center mx-4 cursor-pointer hover:bg-slate-300 ease-out duration-300'>
                <div>
                    <img src={logo} alt="Banner" className='min-w-36 rounded-xl h-36 lg:h-56 mb-2 object-cover'/>
                    <h1 className='font-bold'>Khach san</h1>
                    <p>sao danh gia</p>
                    <p>Giá: 1.500.00 VND</p>
                </div>
            </div>
            <div className='h-64 lg:h-80 p-2 rounded-lg relative flex flex-col justify-center items-center mx-4 cursor-pointer hover:bg-slate-300 ease-out duration-300'>
                <div>
                    <img src={logo} alt="Banner" className='min-w-36 rounded-xl h-36 lg:h-56 mb-2 object-cover'/>
                    <h1 className='font-bold'>Khach san</h1>
                    <p>sao danh gia</p>
                    <p>Giá: 1.500.00 VND</p>
                </div>
            </div>
            <div className='h-64 lg:h-80 p-2 rounded-lg relative flex flex-col justify-center items-center mx-4 cursor-pointer hover:bg-slate-300 ease-out duration-300'>
                <div>
                    <img src={logo} alt="Banner" className='min-w-36 rounded-xl h-36 lg:h-56 mb-2 object-cover'/>
                    <h1 className='font-bold'>Khach san</h1>
                    <p>sao danh gia</p>
                    <p>Giá: 1.500.00 VND</p>
                </div>
            </div>
            
        </Carousel>
    </div>
  )
}

export default ListBooking