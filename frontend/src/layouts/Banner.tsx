import React from 'react'
import logo from '../assets/Banner.png'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import { InputBase } from '@mui/material';

export default function Banner() {
  const [location, setLocation] = React.useState('');
  const [date, setDate] = React.useState('');
  const [price, setPrice] = React.useState('');

  const handleLocationChange = (event: SelectChangeEvent) => {
    setLocation(event.target.value as string);
  };
  
  const handleDateChange = (event: SelectChangeEvent) => {
    setDate(event.target.value as string);
  };
  
  const handlePriceChange = (event: SelectChangeEvent) => {
    setPrice(event.target.value as string);
  };

  return (
    <div className='w-full flex flex-col relative justify-center items-center lg:items-start lg:w-9/12'>
      <img src={logo} alt="Banner" className='w-full h-80 lg:h-auto'/>
      <div className='absolute w-11/12 lg:w-auto lg:ml-12 '>
        <h1 className='text-white text-2xl w-5/12 font-bold lg:text-6xl lg:w-4/12'>Hãy <h1 className='border-b-2 border-b-yellow-400 lg:border-b-4 lg:pb-2'>du lịch đến</h1></h1>
        <div className='h-8 lg:h-16 w-7/12 lg:w-3/4 overflow-hidden mt-2'>
          <div className="animate-scroll relative flex flex-col gap-11 lg:gap-4">
            <h1 className='text-yellow-400 text-2xl font-bold lg:text-6xl'>Việt Nam</h1>
            <h1 className='text-yellow-400 text-2xl font-bold lg:text-6xl'>Hồ Chí Minh</h1>
            <h1 className='text-yellow-400 text-2xl font-bold lg:text-6xl'>Hà Nội</h1>
            <h1 className='text-yellow-400 text-2xl font-bold lg:text-6xl'>Đà Nẵng</h1>
          </div>
          
        </div>
        
        <p className='text-white text-xs my-4 w-8/12 lg:w-6/12 lg:text-xl lg:my-8'>Tận hưởng khung cảnh ngoạn mục của thiên nhiên. Hãy thư giãn và trân trọng những giấc mơ một cách trọn vẹn nhất</p>
        <div className='flex items-center lg:mt-4 bg-white w-11/12 lg:w-6/12 pr-2 rounded-lg lg:p-4 lg:gap-8'>
          <FormControl fullWidth className="scale-75 lg:scale-100">
            <InputLabel id="location-select-label">Khu vực</InputLabel>
            <Select
              labelId="location-select-label"
              id="location-select"
              value={location}
              label="Location"
              onChange={handleLocationChange}
            >
              <MenuItem value="Hanoi">Hà Nội</MenuItem>
              <MenuItem value="DaNang">Đà Nẵng</MenuItem>
              <MenuItem value="HoChiMinh">Hồ Chí Minh</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth className="scale-75 lg:scale-100">
            <InputLabel id="date-select-label">Ngày giờ</InputLabel>
            <Select
              labelId="date-select-label"
              id="date-select"
              value={date}
              label="Date"
              onChange={handleDateChange}
            >
              <MenuItem value="2025-01-01">January 1, 2025</MenuItem>
              <MenuItem value="2025-02-14">February 14, 2025</MenuItem>
              <MenuItem value="2025-12-25">December 25, 2025</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth className="scale-75 lg:scale-100">
            <InputLabel id="price-select-label">Giá</InputLabel>
            <Select
              labelId="price-select-label"
              id="price-select"
              value={price}
              label="Price"
              onChange={handlePriceChange}
            >
              <MenuItem value={100}>1 củ ~ 5 củ</MenuItem>
              <MenuItem value={200}>$200</MenuItem>
              <MenuItem value={300}>$300</MenuItem>
            </Select>
          </FormControl>

          <button className='bg-blue-500 text-white border-2 p-2 rounded-md lg:rounded-lg text-xs lg:text-lg lg:p-3 hover:bg-white hover:border-blue-500 hover:text-blue-500 ease-out duration-300'><SearchIcon /></button>
        </div>
      </div>
      
    </div>
  )
}
