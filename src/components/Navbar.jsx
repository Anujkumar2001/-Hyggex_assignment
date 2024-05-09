import React from 'react'
import img from "../assets/mainLogo.jpeg"
const Navbar = () => {
  return (
    <div className='w-[90%] m-auto flex justify-between items-center my-[32px] gap-5 '>
      <div className='w-[191px] h-[39px] overflow-hidden flex items-center'>
        <img src={img} alt="" className='overscroll-contain' />
      </div>
      <div className='flex items-center gap-12'>
        <ul className='flex items-center text-[18px] text-[#3A3740] font-normal gap-12'>
            <li>Home</li>
            <li>Flashcard</li>
            <li>Contact</li>
            <li>FAQ</li>
        </ul>
        <button className='bg-gradient-to-r from-[#06286E] via-[#164Ec0] to-pink-500 px-10 py-2 rounded-full text-white'>Login</button>
      </div>
    </div>
  )
}

export default Navbar
