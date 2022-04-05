import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons"
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
import Link from 'next/link'
export default function Navbar(){
    let[showNav,setShowNav]=useState(false)
    return(
        <div className="fixed w-[100%] bg-white z-40 shadow">
            <div className="bg-white z-40 relative w-[100%]">
            <nav className="container px-6 py-3 mx-auto">
            <div className="flex">
                <div className="flex-grow flex items-center">
                    <h2 className=' text-#1E1B1B text-3xl font-bold'>Finsweet</h2>
                </div>
                <div className={`absolute top-[50px] left-0 w-[100%] ${showNav?"flex":'hidden'} text-center 
                lg:relative lg:top-0 lg:p-0 lg:w-fit lg:flex items-center lg:bg-white bg-[#E0E4FC] p-7 mt-7 lg:mt-0 shadow lg:shadow-none`}>
                    <ul className="flex flex-col lg:flex-row gap-7 items-center w-full text-btn">
                        <li className='text-xl hover:text-[#6B7CFF] duration-300'><Link href="/">Home</Link></li>
                        <li className='text-xl hover:text-[#6B7CFF] duration-300'><Link href="/product">Product</Link></li>
                        <li className='text-xl hover:text-[#6B7CFF] duration-300'><Link href="/price">Pricing</Link></li>
                        <li className='text-xl hover:text-[#6B7CFF] duration-300'><Link href="/about">About Us</Link></li>
                        <li className='text-xl hover:text-[#6B7CFF] duration-300'><Link href="/blog">Blog</Link></li>
                        <li className='text-xl hover:text-[#6B7CFF] duration-300'><Link href="/contact">Contact</Link></li>

                    </ul>
                </div>
                <div className='ml-8'>
                    <button className=" bg-btn text-white w-[144px] rounded-xl text-[16px] h-[56px] hover:bg-[#313852] duration-300">Free Trial</button>
                </div>
                <div className="flex items-center px-[5px] cursor-pointer ml-[6px] lg:hidden text-2xl w-11 justify-center" onClick={()=>setShowNav(!showNav)}>
                    {
                        showNav?
                        <span><FontAwesomeIcon icon={faClose}/></span>:
                        <span><FontAwesomeIcon icon={faBarsStaggered}/></span>
                    }
                </div>
            </div>
        </nav>
        </div>
        </div>
    )
}