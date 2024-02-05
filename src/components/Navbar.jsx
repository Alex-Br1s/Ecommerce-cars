import React from 'react'
import iconCar from '../../public/coche-de-carreras.png'
import Image from 'next/image'
import { IoSearchSharp } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";


const Navbar = () => {
  return (
    <nav class=" bg-white w-full flex relative justify-between items-center mx-auto px-8 h-28">
 {/*    <!-- logo --> */}
    <div class="inline-flex">
        <a href="/">
            <div className=' '>
              <Image className='w-16' src={iconCar} alt='hols'/>
            </div>           
        </a>
    </div>

   {/*  <!-- end logo --> */}

    {/* <!-- search bar --> */}
    <div class="hidden sm:block flex-shrink flex-grow-0 justify-start px-2">
        <div class="inline-block">
            <div class="inline-flex items-center max-w-full">
                <input placeholder='Search a car'  class="flex items-center flex-grow-0 flex-shrink pl-2 relative w-60 border rounded-full px-1 py-1" />
                <IoSearchSharp className='text-2xl text-gray-400 ml-3 cursor-pointer'/>
            </div>
        </div>
    </div>
   {/*  <!-- end search bar --> */}

    {/* <!-- login --> */}
    <div class="flex-initial">
      <div class="flex justify-end items-center relative">
        
        <a href="favorites">
        <button type='submit'>
        <MdFavoriteBorder className='text-3xl mt-3 mr-7 text-gray-400 cursor-pointer'/>
        </button>
        </a>

        <a href="shopping-cart">
        <button type='submit'>
        <BsCart4 className='text-3xl mt-2 mr-7 text-gray-400 cursor-pointer'/>
        </button>
        </a>

        <div>
          <a href="login">
            <button type="button" class="text-gray-600 inline-flex items-center p-1 px-4 border rounded-full hover:shadow-lg">
            Login
            </button>
          </a>
        </div>
      </div>
    </div>
    {/* end login */} 
</nav>
  )
}

export default Navbar