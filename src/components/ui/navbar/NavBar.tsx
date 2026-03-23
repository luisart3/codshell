

import { MagnifyingGlassIcon, Bars2Icon } from "@heroicons/react/24/outline"

export const NavBar = () => {
    return (
        <nav className='flex justify-between items-center h-9'>
            <a href="" className=" text-2xl font-black text-black">
                Cod<span className="text-[#135CE7]">sh</span>ell.
            </a>
            <div className='flex md:hidden'>
                <button type='button' className='inline-flex items-center justify-center rounded-md p-2.5 text-gray-800'>
                    <span className="sr-only">Open main menu</span>
                    <Bars2Icon className='size-6'/>
                </button>
                <button type="button"> <MagnifyingGlassIcon className="size-6"/></button>
            </div>
            <div className=" hidden md:flex items-center p-1.5 ">
                <ul className="flex flex-wrap items-center gap-6">
                    <a href="" className='text-sm font-semibold'>How it work</a>
                    <a href="" className='text-sm font-semibold'>Mission</a>
                    <a href="" className='text-sm font-semibold'>Faq</a>
                    <button type="button"> <MagnifyingGlassIcon className="size-6"/></button>
                </ul>
            </div>

            <div className=" hidden md:flex justify-end items-center p-1.5">
                <div className="flex justify-between gap-5">
                    <button type="button" className=" rounded-full cursor-pointer text-sm  py-2.5 px-5 text-black md:text-white hover:text-gray-200 font-semibold">Login</button>
                    <button type="button" className=" rounded-full cursor-pointer text-sm border border-gray-300 md:bg-white  py-2.5 px-5 text-black font-semibold hover:bg-gray-100">Sign Up</button>
                </div>
            </div>


        </nav>
    )
}