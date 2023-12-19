import React from 'react'
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className='bg-[#1B2540] text-white px-36 py-20'>
      <div class="grid grid-cols-3 gap-16">
        <div class="flex flex-col gap-20">
          <p className='text-2xl font-bold uppercase'>Subscribe our email</p>
          <div className='flex flex-col gap-1'>
            <input type="text" placeholder="Email Address" className="bg-slate-600 input input-bordered input-md w-full block" />
            <button class="btn btn-md block bg-[#CB4C5C] hover:bg-slate-800 text-white font-sans font-bold">Submit now</button>
          </div>
          <div className='text-white flex gap-2 items-center'>
            <BiSolidPhoneCall size={20} />
            <span>+1 (559) 380 9094</span>
          </div>
        </div>
        <div class="flex flex-col gap-20">
          <p className='text-xl font-semibold uppercase'>Locum Tenis</p>
          <div className='flex flex-col gap-1'>
            <p className='text-slate-300'>What is locam tenis?</p>
            <p className='text-slate-300'>Why work locam tenis?</p>
            <p className='text-slate-300'>Why work with imperium locam?</p>
          </div>
          <div className='flex flex-col gap-3'>
            <p className='text-slate-300 link'>Privacy</p>
            <p className='text-slate-300 link'>Terms and Condition</p>
          </div>
        </div>
        <div class="flex flex-col gap-20">
          <p className='text-xl font-semibold uppercase'>About Imperial Locaum</p>
          <div className='flex flex-col gap-1'>
            <p className='text-slate-300'>Our Story</p>
            <p className='text-slate-300'>Our People</p>
          </div>
          <div className='flex gap-3'>
            <FaTwitterSquare className='bg-slate-900 text-slate-300' size={26}/>
            <FaFacebookSquare className='bg-slate-900 text-slate-300' size={26}/>
            <FaInstagramSquare className='bg-slate-900 text-slate-300' size={26}/>
            <FaLinkedin className='bg-slate-900 text-slate-300' size={26}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer