import React from 'react'
import Banner from '../layouts/Banner'
import ListBooking from '../layouts/ListBooking'
export default function HomePage() {
    return (
        <div className='flex flex-col justify-center items-center mt-20 gap-5'>
            <Banner />
            <ListBooking title={"Hot"}/>
            <ListBooking title={"Để cử"}/>
        </div>
    )
}
